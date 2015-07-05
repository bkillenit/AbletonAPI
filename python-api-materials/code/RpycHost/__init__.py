#****************************************************************************************
# File:      __init__.py
#
# Copyright: 2011 Ableton AG, Berlin. All Rights reserved
#****************************************************************************************

from RpycHost import RpycHost

def create_instance(c_instance):
    """ Creates and returns the L9C script """
    return RpycHost(c_instance)
