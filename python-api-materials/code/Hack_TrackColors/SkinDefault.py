# -*- coding: utf-8 -*-
#****************************************************************************************
# File:      SkinDefault.py
#
# Copyright: 2014 Ableton AG, Berlin. All Rights reserved
#****************************************************************************************

from _Framework.ButtonElement import Color

LED_OFF     = Color(4)
RED_FULL    = Color(7)
RED_HALF    = Color(6)
RED_THIRD   = Color(5)
RED_BLINK   = Color(11)
GREEN_FULL  = Color(52)
GREEN_HALF  = Color(36)
GREEN_THIRD = Color(20)
GREEN_BLINK = Color(56)
AMBER_FULL  = Color(int(RED_FULL)  + int(GREEN_FULL)  - 4)
AMBER_HALF  = Color(int(RED_HALF)  + int(GREEN_HALF)  - 4)
AMBER_THIRD = Color(int(RED_THIRD) + int(GREEN_THIRD) - 4)
AMBER_BLINK = Color(int(AMBER_FULL) - 4 + 8)

class SkinDefault:
    class TrackColorChooser:
        Checked   = GREEN_FULL
        Unchecked = AMBER_HALF
