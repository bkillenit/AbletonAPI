# -*- coding: utf-8 -*-
#****************************************************************************************
# File:      Hack_TrackColors.py
#
# Copyright: 2014 Ableton AG, Berlin. All Rights reserved
#****************************************************************************************

from __future__ import with_statement
from _Framework.ControlSurface import OptimizedControlSurface
from _Framework.Layer import Layer
from _Framework.ButtonElement import ButtonElement
from _Framework.ButtonMatrixElement import ButtonMatrixElement
from _Framework.InputControlElement import MIDI_NOTE_TYPE
from _Framework.Skin import Skin

from ClipToTrackColorComponent import ClipToTrackColorComponent
from TrackColorChooserComponent import TrackColorChooserComponent
from SkinDefault import SkinDefault


class Hack_TrackColors(OptimizedControlSurface):

    def __init__(self, c_instance):
        super(Hack_TrackColors, self).__init__(c_instance)
        with self.component_guard():
            self._create_controls()
            self._create_components()

    def _create_controls(self):
        skin = Skin(SkinDefault)
        def create_matrix_button(row, column):
            return ButtonElement(True, MIDI_NOTE_TYPE, 0, row * 16 + column,
                                 skin = skin)
        def create_matrix(size):
            return ButtonMatrixElement(rows = [
                [ create_matrix_button(x, y)
                  for y in xrange(size) ]
                for x in xrange(size)
            ])
        self.matrix = create_matrix(8)

    def _create_components(self):
        ClipToTrackColorComponent(name="clip-to-track-color")
        chooser = TrackColorChooserComponent(name="track-color-chooser")
        chooser.layer = Layer(select_buttons = self.matrix)
