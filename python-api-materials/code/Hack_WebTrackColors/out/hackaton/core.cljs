(ns hackaton.core
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [cljs.core.match.macros :refer [match]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [<! chan put! alts!]]
            [cljs.core.match]
            [clojure.string :as string]))

(enable-console-print!)

(def app-title "Ableton Live color picker")
(def app-instructions
  "Create two virtual midi ports named <i>IAC Bus 1</i> and <i>IAC Bus
2</i>. Then reload Chrome. Then load the <i>Hack_TrackColors</i>
script in one of the MIDI remote script ports in Ableton Live and
select <i>IAC Bus 1</i> as input and <i>IAC Bus 2</i> as output. Now
you should be able to select the color of the selected track with this
page, <b>yikes</b>!")

(def midi-in-port-name "IAC Bus 2")
(def midi-out-port-name "IAC Bus 1")
(def max-color 60)

(def app-state (atom {:selected-color nil}))

(defn print-midi-device [device]
  (do (println " - name: " (.-name device))
      (println "   manufacturer: " (.-manufacturer device))
      (println "   type: " (.-type device))))

(defn find-midi-port [name ports]
  (first (filter #(< -1 (.indexOf (.-name %) name)) ports)))

;; HACK: For some ultra weird reason, only global functions seems to
;; work for me as receivers of MIDI input...  So, just put your
;; channel in the receiver MIDI receiver atom and use this function.
;; Of course, this only works if you connect only once...
(def midi-receiver (atom (chan)))
(defn receive-midi [message]
  (do (println "MIDI received" message)
      (put! @midi-receiver message)))

(defn connect-midi []
  (let [result (chan)
        on-midi-failure #(put! result :error)
        on-midi-success
        (fn [midi]
          (let [in-chan (chan)
                input   (find-midi-port midi-in-port-name (.inputs midi))
                output  (find-midi-port midi-out-port-name (.outputs midi))]
            (reset! midi-receiver in-chan)
            (.addEventListener input "midimessage" receive-midi)
            (put! result [midi input output in-chan])))]
    (if (nil? (.-requestMIDIAccess js/navigator))
      (put! result :error)
      (-> js/navigator
        (.requestMIDIAccess)
        (.then on-midi-success on-midi-failure)))
    result))

(defn midi-listen-to-color-changes! [app color-chan]
  (go
    (let [result (<! (connect-midi))]
      (match result
        :error
        (js/alert (string/replace "Failed to initialize MIDI. Most
probably you are using a browser without a Web MIDI
implementation. Use a new version of Chrome and enable MIDI support
in: chrome://flags/#enable-web-midi" "\n" " "))

        [midi input output in-chan]
        (do (println "We are connected to MIDI")
            (mapv print-midi-device [input output])
            (while true
              (match (alts! [in-chan color-chan])
                [color color-chan]
                (let [note (+ color 1 (* 8 (quot (+ color 1) 8)))]
                  (println "Sending note " note)
                  (.send output (clj->js [144 note 127])))

                [message in-chan]
                (when (= 52 (aget (.-data message) 2))
                  (let [note     (aget (.-data message) 1)
                        color    (- note 1 (* 8 (quot note 16)))
                        selected (if (and (>= color 0) (< color max-color))
                                   color
                                   nil)]
                    (println "Received color" color selected)
                    (om/update! app :selected-color selected))))))))))

(defn color-cell-render [index selected color-chan]
  (dom/div #js{:className (str "color-box "
                            (if selected "box-selected " "box-unselected ")
                            "color-idx-" index)
               :onClick #(do (println "Clicked color" index)
                             (put! color-chan index))}))

(defn no-color-render [no-color color-chan]
  (dom/div #js{:className (str "no-color-box "
                            (if no-color "box-selected" "box-unselected"))
               :onClick #(do (println "Selected no color")
                             (put! color-chan -1))}
    (dom/span nil "No color")))

(defn color-picker-view [app owner]
  (reify
    om/IInitState
    (init-state [this]
      (let [color-chan (chan)]
        (midi-listen-to-color-changes! app color-chan)
        {:color-chan color-chan}))

    om/IRenderState
    (render-state [this state]
      (dom/div nil
        (no-color-render (nil? (:selected-color app)) (:color-chan state))
        (apply dom/div nil
          (map #(color-cell-render %
                  (= (:selected-color app) %)
                  (:color-chan state))
            (range max-color)))))))

(defn main-view [app owner]
  (dom/div nil
    (dom/h1 nil app-title)
    (dom/p #js{:dangerouslySetInnerHTML #js{:__html  app-instructions}})
    (om/build color-picker-view app)))

(om/root
  main-view
  app-state
  {:target (. js/document (getElementById "app"))})
