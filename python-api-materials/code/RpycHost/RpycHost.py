# -*- coding: utf-8 -*-
#****************************************************************************************
# File:      RpycHost.py
#
# Copyright: 2013 Ableton AG, Berlin. All Rights reserved
#****************************************************************************************

from __future__ import with_statement

import sys
import os
import traceback

# Pickle only works with this import
from encodings import ascii

# [jbo] Hack to make sure that the local Rpyc library works.
path_to_this_file = os.path.dirname(os.path.abspath(__file__))
if path_to_this_file not in sys.path:
    sys.path.append(path_to_this_file)

import contextlib
import rpyc
import Live

from _Framework import Task
from _Framework.ControlSurface import ControlSurface
from TaskServer import TaskServer, RPYC_SUGGESTED_UPDATE_TIME

RPYC_PORT = 17744


class LiveApiService(rpyc.Service):

    exposed_Live = Live


class RpycHost(ControlSurface):

    suggested_update_time_in_ms = int(RPYC_SUGGESTED_UPDATE_TIME * 1000)

    def __init__(self, c_instance):
        super(RpycHost, self).__init__(c_instance)

        with self._control_surface_injector:
            with self.component_guard():
                self._rpyc_server = TaskServer(
                    LiveApiService,
                    port = RPYC_PORT,
                    protocol_config = dict(
                       allow_all_attrs = True,
                       allow_setattr = True))
                self._rpyc_server.start()

    def disconnect(self):
        self._rpyc_server.close()
        super(RpycHost, self).disconnect()

    @contextlib.contextmanager
    def component_guard(self):
        # [jbo] We do not need all the other shit
        with self.setting_listener_caller():
            yield

    def _call_guarded_listener(self, listener):
        try:
            # [jbo] Ideally we would use rpyc.async() here but we do
            # not have listener_func available.
            self._tasks.add(Task.run(listener))
        except:
            self.log_message("Disconnecting broken listener")
            if traceback != None:
                traceback.print_exc()
            # [jbo] Disconnect listeners potentially leaked by Rpyc
            # broken connections.  Note that because of the ==
            # comparison problem for listeners these listeners might
            # leak still...
            listener.disconnect()
