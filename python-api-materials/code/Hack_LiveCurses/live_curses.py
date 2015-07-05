#!/usr/bin/env python
# -*- coding: utf-8 -*-
#****************************************************************************************
# File:      main.py
#
# Copyright: 2014 Ableton AG, Berlin. All Rights reserved
#****************************************************************************************

"""
Program that connects lot Live via Rpyc.
"""

from functools import partial

import curses
import rpyc
import select
import argparse

LIVE_HOST = 'localhost'
LIVE_PORT = 17744

class colors:
    connecting, \
    error, \
    success, \
    count = range(1, 5)

def center_addstr(scr, offset, text, *a, **k):
    y, x = scr.getmaxyx()
    cur_x = x/2 - len(text)/2
    cur_y = y/2 + offset
    scr.addstr(cur_y, cur_x, text, *a, **k)
    scr.refresh()


def connect_to_live(scr, args):
    conn = None
    while conn == None:
        scr.clear()
        center_addstr(scr, 0, 'Connecting to Ableton Live...',
                      curses.color_pair(colors.connecting))
        scr.refresh()

        try:
            conn = rpyc.connect(args.host, args.port)
        except IOError:
            center_addstr(scr, 0, 'Connection to Ableton Live failed',
                          curses.color_pair(colors.error))
            center_addstr(scr, 1, 'Press any key to retry')
            scr.refresh()
            curses.flushinp()
            scr.getch()

    scr.clear()
    live = conn.root.Live.Application.get_application()
    center_addstr(scr, 0, 'Connected to to Ableton Live %s.%s.%s' %
                  (live.get_major_version(),
                   live.get_minor_version(),
                   live.get_bugfix_version()),
                  curses.color_pair(colors.success))
    return conn


def toggle_playing(live):
    song = live.get_document()
    if not song.is_playing:
        song.start_playing()
    else:
        song.stop_playing()


def change_tempo(live, delta):
    song = live.get_document()
    song.tempo = max(20, min(999, song.tempo + delta))


def process_keyboard(scr, live):
    key = scr.getkey()
    if key == ' ':
        toggle_playing(live)
    elif key == 'KEY_UP':
        change_tempo(live, 1)
    elif key == 'KEY_DOWN':
        change_tempo(live, -1)
    elif key == 'q':
        raise KeyboardInterrupt


def update_status(scr, live):
    song = live.get_document()
    time = song.get_current_beats_song_time()
    tempo = song.tempo
    status = 'playing' if song.is_playing else 'stopped'
    text = 'Song %s at %s.%s.%s, tempo: %s' % (
        status, time.bars, time.beats, time.sub_division, tempo)
    center_addstr(scr, 1, ' ' * scr.getmaxyx()[1])
    center_addstr(scr, 1, text)
    scr.refresh()


def print_instructions(scr):
    scr.addstr(1, 1, 'q = quit')
    scr.addstr(2, 1, 'space = start/stop transport')
    scr.addstr(3, 1, 'up = rise tempo')
    scr.addstr(4, 1, 'down = lower tempo')


def main_gui(args, scr):
    curses.init_pair(colors.connecting, curses.COLOR_YELLOW, curses.COLOR_BLACK)
    curses.init_pair(colors.error, curses.COLOR_RED, curses.COLOR_BLACK)
    curses.init_pair(colors.success, curses.COLOR_GREEN, curses.COLOR_BLACK)

    conn = connect_to_live(scr, args)
    live = conn.root.Live.Application.get_application()
    song = live.get_document()

    print_instructions(scr)
    scr.refresh()

    updater = partial(update_status, scr, live)
    song.add_is_playing_listener(updater)
    song.add_current_song_time_listener(updater)
    song.add_tempo_listener(updater)
    updater()

    try:
        while True:
            r, _, _ = select.select([0, conn], [], [], 0)
            for fd in r:
                if fd == 0:
                    process_keyboard(scr, live)
                elif fd == conn:
                    conn.poll_all(0)
    finally:
        song.remove_is_playing_listener(updater)
        song.remove_current_song_time_listener(updater)
        song.remove_tempo_listener(updater)
        conn.close()


def main():
    parser = argparse.ArgumentParser(
        description = "Control Ableton Live from the command line",
        formatter_class = argparse.ArgumentDefaultsHelpFormatter)
    parser.add_argument('-p', '--port',
                        type = int,
                        metavar = 'PORT',
                        default = LIVE_PORT,
                        help = "Port to connect to Live")
    parser.add_argument('-H', '--host',
                        metavar = 'HOST',
                        default = LIVE_HOST,
                        help = "Host to connect to Live")
    args = parser.parse_args()

    try:
        curses.wrapper(partial(main_gui, args))
    except KeyboardInterrupt:
        pass

if __name__ == '__main__':
    main()
