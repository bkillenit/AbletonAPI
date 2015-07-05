# -*- coding: utf-8 -*-
#****************************************************************************************
# File:      __init__.py
#
# Copyright: 2014 Ableton AG, Berlin. All Rights reserved
#****************************************************************************************

"""
Init script for the TrackColors hack.
"""

def create_instance(c_instance):
    from Hack_TrackColors import Hack_TrackColors
    return Hack_TrackColors(c_instance)
