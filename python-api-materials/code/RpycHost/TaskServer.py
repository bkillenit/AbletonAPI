# -*- coding: utf-8 -*-
#****************************************************************************************
# File:      TaskServer.py
#
# Copyright: 2013 Ableton AG, Berlin. All Rights reserved
#****************************************************************************************

import threading

from _Framework.Dependency import depends
from _Framework.Util import const, print_message
from _Framework import Task

import rpyc.lib.compat
from rpyc.utils.server import Server
from rpyc.core import SocketStream, Channel, Connection
from rpyc.utils.authenticators import AuthenticationError

RPYC_SUGGESTED_UPDATE_TIME = 0.01
RPYC_POLL_TIMEOUT          = 0.01
RPYC_CLIENT_POLL_TIMEOUT   = 0.01
RPYC_POLL_ATTEMPTS         = 5
RPYC_READ_ATTEMPT_FACTOR   = 0
RPYC_WRITE_ATTEMPT_FACTOR  = 1


class TaskServer(Server):

    @depends(log_message = const(print_message),
             parent_task_group = None)
    def __init__(self,
                 service,
                 log_message = None,
                 parent_task_group = None,
                 *a, **k):
        super(TaskServer, self).__init__(
            service,
            *a, **k)
        self._log_message = log_message
        self._server_task = parent_task_group.add(self.tick_server).kill()
        self._all_poll = rpyc.lib.compat.poll()
        self._all_poll.register(self.listener.fileno(), 'r')
        self._fd_to_conn = {}
        self.log_message("server created")

    def start(self):
        self.listener.listen(self.backlog)
        self.logger.info("server started on [%s]:%s", self.host, self.port)
        self.active = True
        if self.auto_register:
            # [jbo] This is copied from the base class, but I am not
            # sure it will work nor needed... embedded Python often
            # needs special stuff to enable threading.
            t = threading.Thread(target = self._bg_register)
            t.setDaemon(True)
            t.start()
        self._server_task.restart()
        self.log_message("server started")

    def close(self):
        self._server_task.kill()
        super(TaskServer, self).close()
        self.log_message("server stopped")

    def log_message(self, *messages):
        self._log_message("[%s]" % self.service.get_service_name(), *messages)

    def tick_server(self, delta=None):
        left_attempts = RPYC_POLL_ATTEMPTS
        while left_attempts > 0:
            try:
                active = self._all_poll.poll(RPYC_POLL_TIMEOUT)
                attempts = 1
                for fd, evt in active:
                    if fd == self.listener.fileno():
                        self._handle_accept(fd, evt)
                    elif fd in self._fd_to_conn:
                        self._handle_serve(fd, evt)
                        if 'r' in evt:
                            attempts = RPYC_READ_ATTEMPT_FACTOR
                        elif 'w' in evt:
                            attempts = RPYC_WRITE_ATTEMPT_FACTOR
                left_attempts -= attempts
            except Exception, e:
                # The select module on Windows throws a select.error exception when any
                # of the elements in the select set is not a valid file descriptor any
                # more. It doesn't tell us which one though, so we need to iterate over
                # all fds and find out which ones no longer work.
                #
                # On Mac there's no such exception type (it only throws IOError there),
                # so we need to do these string comparisons instead of catching the
                # exception by type.
                if e.__class__.__name__ == 'error' and e.__class__.__module__ == 'select':
                    self._drop_broken_sockets_on_windows()
                else:
                    raise

        return Task.RUNNING

    def _drop_broken_sockets_on_windows(self):
        import select
        for fd in list(self._all_poll.rlist):
            try:
                select.select([fd], [], [], 0)
            except select.error:
                self._handle_drop(fd, '')
        for fd in list(self._all_poll.wlist):
            try:
                select.select([], [fd], [], 0)
            except select.error:
                self._handle_drop(fd, '')

    def _handle_drop(self, fd, ev):
        self.log_message("client dropped", fd, ev)
        try:
            self._all_poll.unregister(fd)
            conn = self._fd_to_conn[fd]
            del self._fd_to_conn[fd]
            conn.close()
        except KeyError:
            pass

    def _handle_accept(self, fd, ev):
        sock, addrinfo = self.listener.accept()
        self.log_message("new client:", addrinfo)
        self.clients.add(sock)
        self._all_poll.register(sock.fileno(), 'rw')
        conn = self._authenticate_and_build_connection(sock)
        self._fd_to_conn[sock.fileno()] = conn

    def _handle_serve(self, fd, ev):
        try:
            if 'e' in ev or 'h' in ev or 'n' in ev:
                raise EOFError
            self._fd_to_conn[fd].poll_all(RPYC_CLIENT_POLL_TIMEOUT)
        except EOFError:
            self._handle_drop(fd, ev)

    def accept(self):
        raise NotImplementedError, "we do not want the blocking version"

    def _authenticate_and_build_connection(self, sock):
        """
        Authenticate a client and if it succees, wraps the socket
        in a connection object.  Note that this code is cut and paste
        from the rpyc internals and may have to be changed if rpyc
        evolves
        """

        # authenticate
        if self.authenticator:
            h, p = sock.getpeername()
            try:
                sock, credentials = self.authenticator(sock)
            except AuthenticationError:
                self.log_message(
                    "%s:%s failed to authenticate, rejecting connection",
                    h, p)
                return None
        else:
            credentials = None

        # build a connection
        h, p = sock.getpeername()
        config = dict(self.protocol_config,
                      credentials = credentials,
                      connid      = "%s:%d" % (h, p))
        return Connection(self.service,
                          Channel(SocketStream(sock)),
                          config = config)
