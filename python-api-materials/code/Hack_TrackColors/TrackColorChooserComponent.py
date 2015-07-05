# -*- coding: utf-8 -*-
#****************************************************************************************
# File:      TrackColorChooserComponent.py
#
# Copyright: 2014 Ableton AG, Berlin. All Rights reserved
#****************************************************************************************

from _Framework.Control import control_list, RadioButtonControl
from _Framework.ControlSurfaceComponent import ControlSurfaceComponent
from _Framework.SubjectSlot import subject_slot


class TrackColorChooserComponent(ControlSurfaceComponent):

    select_buttons = control_list(
        RadioButtonControl,
        checked_color   = 'TrackColorChooser.Checked',
        unchecked_color = 'TrackColorChooser.Unchecked'
    )

    def __init__(self, **k):
        super(TrackColorChooserComponent, self).__init__(**k)
        color = self.song().view.selected_track.color
        index = LIVE9_CLIP_COLORS_TO_INDEX[color]
        self.select_buttons.control_count = len(LIVE9_CLIP_COLORS)
        self.select_buttons[index].is_checked = True
        self._on_selected_track_color_changed.subject = self.song().view

    @select_buttons.checked
    def select_buttons(self, button):
        color = LIVE9_CLIP_COLORS[button.index]
        if color != self.song().view.selected_track.color:
            self.song().view.selected_track.color = color

    @subject_slot("selected_track.color")
    def _on_selected_track_color_changed(self):
        color = self.song().view.selected_track.color
        assert color in LIVE9_CLIP_COLORS_TO_INDEX
        index = LIVE9_CLIP_COLORS_TO_INDEX[color]
        self.select_buttons[index].is_checked = True


def rgb(r, g, b, a):
    return (r << 16) + (g << 8) + b

LIVE9_CLIP_COLORS = [
    0, # Null

    rgb(237, 67, 37, 255),
    rgb(189, 97, 0, 255),
    rgb(176, 139, 0, 255),
    rgb(133, 150, 31, 255),
    rgb(83, 159, 49, 255),
    rgb(10, 156, 142, 255),
    rgb(0, 122, 189, 255),
    rgb(3, 3, 255, 255),
    rgb(47, 82, 162, 255),
    rgb(98, 75, 173, 255),
    rgb(123, 123, 123, 255),
    rgb(60, 60, 60, 255),

    rgb(255, 5, 5, 255),
    rgb(191, 186, 105, 255),
    rgb(166, 190, 0, 255),
    rgb(122, 198, 52, 255),
    rgb(61, 195, 0, 255),
    rgb(0, 191, 175, 255),
    rgb(16, 164, 238, 255),
    rgb(84, 128, 228, 255),
    rgb(136, 108, 228, 255),
    rgb(163, 75, 173, 255),
    rgb(183, 61, 105, 255),
    rgb(150, 87, 53, 255),

    rgb(246, 108, 3, 255),
    rgb(191, 251, 0, 255),
    rgb(135, 255, 103, 255),
    rgb(26, 255, 47, 255),
    rgb(37, 255, 168, 255),
    rgb(92, 255, 232, 255),
    rgb(25, 233, 255, 255),
    rgb(139, 197, 255, 255),
    rgb(146, 167, 255, 255),
    rgb(184, 141, 255, 255),
    rgb(216, 108, 228, 255),
    rgb(255, 57, 212, 255),

    rgb(255, 165, 41, 255),
    rgb(255, 240, 52, 255),
    rgb(227, 244, 3, 255),
    rgb(219, 195, 0, 255),
    rgb(190, 157, 99, 255),
    rgb(137, 180, 125, 255),
    rgb(136, 194, 186, 255),
    rgb(155, 179, 196, 255),
    rgb(133, 165, 194, 255),
    rgb(198, 139, 124, 255),
    rgb(241, 64, 128, 255),
    rgb(255, 148, 166, 255),

    rgb(255, 163, 116, 255),
    rgb(255, 238, 159, 255),
    rgb(210, 228, 152, 255),
    rgb(186, 208, 116, 255),
    rgb(169, 169, 169, 255),
    rgb(212, 253, 225, 255),
    rgb(205, 241, 248, 255),
    rgb(185, 193, 227, 255),
    rgb(205, 187, 228, 255),
    rgb(208, 208, 208, 255),
    rgb(223, 230, 229, 255),
    rgb(255, 255, 255, 255),
]


LIVE9_CLIP_COLORS_TO_INDEX = \
    dict(map(reversed, enumerate(LIVE9_CLIP_COLORS)))
