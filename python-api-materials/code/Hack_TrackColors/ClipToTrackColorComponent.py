# -*- coding: utf-8 -*-
#****************************************************************************************
# File:      ClipToTrackColorComponent.py
#
# Copyright: 2014 Ableton AG, Berlin. All Rights reserved
#****************************************************************************************

from _Framework import Task
from _Framework.SubjectSlot import subject_slot, subject_slot_group
from _Framework.ControlSurfaceComponent import ControlSurfaceComponent
from _Framework.Dependency import depends

class ClipToTrackColorComponent(ControlSurfaceComponent):
    """
    Component that ensures that the session clip colors match the
    color of the track, unless the user explicitly assigns a color to
    a clip:
      - When a new clip is created, it gets the color of the track.
      - When a track color changes, the clips that had the track color
      - Although, if the user changes the color of a clip, that color
        is preserved.
    """

    def __init__(self, **k):
        super(ClipToTrackColorComponent, self).__init__(**k)
        self._on_tracks_changed.subject = self.song()
        self._on_scenes_changed.subject = self.song()
        self._on_tracks_changed()

    @subject_slot("tracks")
    @depends(log_message=None)
    def _on_tracks_changed(self, log_message=None):
        log_message("tracks changed")
        tracks = self.song().tracks
        self._old_track_colors = [ track.color for track in tracks ]
        self._on_track_color_changed.replace_subjects(tracks, enumerate(tracks))
        self._update_has_clip_subjects()

    @subject_slot("scenes")
    def _on_scenes_changed(self):
        self._update_has_clip_subjects()

    @subject_slot_group("has_clip")
    def _on_has_clip_changed(self, clip_slot):
        # When a clip is created, we asign to it the color of its track.
        if clip_slot.has_clip:
            # We get an error if we change the color of the clip here,
            # because we are in a callback... so we defer it in a Task
            def do_change_color():
                if clip_slot.has_clip:
                    clip_slot.clip.color = clip_slot.canonical_parent.color
            self._tasks.add(Task.run(do_change_color))

    @subject_slot_group("color")
    def _on_track_color_changed(self, (index, track)):
        # When a track color changes, we assign that new color to all
        # clips that had the same track color before.
        old_color = self._old_track_colors[index]
        new_color = track.color
        for slot in track.clip_slots:
            null_color = 0
            dark_gray = 3947580
            if slot.has_clip and (slot.clip.color == old_color or
                                  (slot.clip.color == dark_gray and
                                   old_color == null_color)):
                # Again, we need to defer the actual change.
                def do_change_color(slot=slot):
                    if slot.has_clip:
                        slot.clip.color = new_color
                self._tasks.add(Task.run(do_change_color))
        self._old_track_colors[index] = new_color

    def _update_has_clip_subjects(self):
        all_slots = [ slot
                      for track in self.song().tracks
                      for slot in track.clip_slots ]
        self._on_has_clip_changed.replace_subjects(all_slots)
