
The Ableton Live Python API
===========================

Disclaimer
----------

*The Python API is not officially supported by Ableton.* It's API
might change in any upgrade, technical support will not answer your
problems, and it's abuse might break your computer or start the third
world war.  *We warned you.*

About
-----

The Python API is used by Ableton to implement the logic of MIDI
controllers like Push or extensibility features like Max4Live.  A lot
of people have discovered it and have build amazing hacks around it,
and you are welcome to do so too!

Resources
---------

This package contains:

* A *Hack_TrackColors* MIDI remote script that shows how the Python
  API can be used to extend Live's functionality and interface with
  MIDI hardware:
  - It changes Live's clip-coloring behaviour, such that they match
    their track color.
  - It allows you to change the selected track's color using the
    *Launchpad*.

* A *Hack_WebTrackColors* web app written with
  [ClojureScript](https://github.com/clojure/clojurescript) and
  [Om](https://github.com/swannodette/om), that leverages the
  [WebMIDI API](http://www.w3.org/TR/webmidi/) to talk to the
  *Hack_TrackColors* script and replace the Launchpad in the browser!

* The *RpycHost* MIDI remote script that can be used to connect to
  Live using the Python [Rpyc library](http://rpyc.readthedocs.org/).

* A *Hack_LiveCurses* command line Python example app that talks to
  Ableton Live using a *Rpyc* bidirectional connection.

Links
-----

### Further readings

* *The Live Object Model*, from the Max4Live documentation
  http://cycling74.com/docs/max5/refpages/m4l-ref/m4l_live_object_model.html

* *Live 9 MIDI remote script reverse engineering*, by Julien Bayle
  http://julienbayle.net/ableton-live-9-midi-remote-scripts/

* *A introduction to the _Framework classes*, by Hanz Petrov
  http://remotescripts.blogspot.de/

### Third party hacks

* *LiveOSC*, by Liine
  http://livecontrol.q3f.org/ableton-liveapi

* *PyLive*, hack on top of LiveOSC by @ideoforms
   https://github.com/ideoforms/pylive

* *LiveTelnet*, control from a Telnet session, by The LiveAPI hack project
  https://www.assembla.com/spaces/live-api/

### Interesting apps using it

* *Tangiblex*, a Reactable-like surface that can be used to play Live-sets
  http://www.tangiblex.net/tangilblex-liveset/

* *Audioverdrive*, a game with dynamic music using Live
  http://www.nilsih.com/#audioverdrive

* Mobile apps to control Live:
  - *Conductr* http://www.conductr.net/
  - *LiveControl 2* http://livecontrol.q3f.org/
  - *Touch-Able 2* http://www.touch-able.com/touchable-2
