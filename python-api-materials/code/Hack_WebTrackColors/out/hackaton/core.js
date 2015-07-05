// Compiled by ClojureScript 0.0-2173
goog.provide('hackaton.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.match');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
hackaton.core.app_title = "Ableton Live color picker";
hackaton.core.app_instructions = "Create two virtual midi ports named <i>IAC Bus 1</i> and <i>IAC Bus\n2</i>. Then reload Chrome. Then load the <i>Hack_TrackColors</i>\nscript in one of the MIDI remote script ports in Ableton Live and\nselect <i>IAC Bus 1</i> as input and <i>IAC Bus 2</i> as output. Now\nyou should be able to select the color of the selected track with this\npage, <b>yikes</b>!";
hackaton.core.midi_in_port_name = "IAC Bus 2";
hackaton.core.midi_out_port_name = "IAC Bus 1";
hackaton.core.max_color = 60;
hackaton.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected-color","selected-color",1770948899),null], null));
hackaton.core.print_midi_device = (function print_midi_device(device){cljs.core.println.call(null," - name: ",device.name);
cljs.core.println.call(null,"   manufacturer: ",device.manufacturer);
return cljs.core.println.call(null,"   type: ",device.type);
});
hackaton.core.find_midi_port = (function find_midi_port(name,ports){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__58574_SHARP_){return (-1 < p1__58574_SHARP_.name.indexOf(name));
}),ports));
});
hackaton.core.midi_receiver = cljs.core.atom.call(null,cljs.core.async.chan.call(null));
hackaton.core.receive_midi = (function receive_midi(message){cljs.core.println.call(null,"MIDI received",message);
return cljs.core.async.put_BANG_.call(null,cljs.core.deref.call(null,hackaton.core.midi_receiver),message);
});
hackaton.core.connect_midi = (function connect_midi(){var result = cljs.core.async.chan.call(null);var on_midi_failure = ((function (result){
return (function (){return cljs.core.async.put_BANG_.call(null,result,new cljs.core.Keyword(null,"error","error",1110689146));
});})(result))
;var on_midi_success = ((function (result,on_midi_failure){
return (function (midi){var in_chan = cljs.core.async.chan.call(null);var input = hackaton.core.find_midi_port.call(null,hackaton.core.midi_in_port_name,midi.inputs());var output = hackaton.core.find_midi_port.call(null,hackaton.core.midi_out_port_name,midi.outputs());cljs.core.reset_BANG_.call(null,hackaton.core.midi_receiver,in_chan);
input.addEventListener("midimessage",hackaton.core.receive_midi);
return cljs.core.async.put_BANG_.call(null,result,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [midi,input,output,in_chan], null));
});})(result,on_midi_failure))
;if((navigator.requestMIDIAccess == null))
{cljs.core.async.put_BANG_.call(null,result,new cljs.core.Keyword(null,"error","error",1110689146));
} else
{navigator.requestMIDIAccess().then(on_midi_success,on_midi_failure);
}
return result;
});
hackaton.core.midi_listen_to_color_changes_BANG_ = (function midi_listen_to_color_changes_BANG_(app,color_chan){var c__7390__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__7391__auto__ = (function (){var switch__7375__auto__ = (function (state_59074){var state_val_59075 = (state_59074[1]);if((state_val_59075 === 32))
{var inst_59025 = (state_59074[2]);var state_59074__$1 = state_59074;var statearr_59076_59185 = state_59074__$1;(statearr_59076_59185[2] = inst_59025);
(statearr_59076_59185[1] = 31);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 64))
{var inst_59031 = (state_59074[2]);var state_59074__$1 = state_59074;var statearr_59077_59186 = state_59074__$1;(statearr_59077_59186[2] = inst_59031);
(statearr_59077_59186[1] = 31);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 1))
{var inst_58880 = hackaton.core.connect_midi.call(null);var state_59074__$1 = state_59074;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59074__$1,2,inst_58880);
} else
{if((state_val_59075 === 33))
{var inst_58945 = (state_59074[7]);var inst_58945__$1 = (state_59074[2]);var inst_58946 = (inst_58945__$1 === cljs.core.match.backtrack);var state_59074__$1 = (function (){var statearr_59078 = state_59074;(statearr_59078[7] = inst_58945__$1);
return statearr_59078;
})();if(cljs.core.truth_(inst_58946))
{var statearr_59079_59187 = state_59074__$1;(statearr_59079_59187[1] = 34);
} else
{var statearr_59080_59188 = state_59074__$1;(statearr_59080_59188[1] = 35);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 65))
{var inst_59044 = (function(){throw cljs.core.match.backtrack})();var state_59074__$1 = state_59074;var statearr_59081_59189 = state_59074__$1;(statearr_59081_59189[2] = inst_59044);
(statearr_59081_59189[1] = 67);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 2))
{var inst_58882 = (state_59074[2]);var state_59074__$1 = (function (){var statearr_59082 = state_59074;(statearr_59082[8] = inst_58882);
return statearr_59082;
})();var statearr_59083_59190 = state_59074__$1;(statearr_59083_59190[2] = null);
(statearr_59083_59190[1] = 68);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 34))
{var state_59074__$1 = state_59074;var statearr_59084_59191 = state_59074__$1;(statearr_59084_59191[2] = null);
(statearr_59084_59191[1] = 42);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 66))
{var state_59074__$1 = state_59074;var statearr_59085_59192 = state_59074__$1;(statearr_59085_59192[2] = null);
(statearr_59085_59192[1] = 67);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 3))
{var inst_59072 = (state_59074[2]);var state_59074__$1 = state_59074;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59074__$1,inst_59072);
} else
{if((state_val_59075 === 35))
{var inst_58945 = (state_59074[7]);var inst_58996 = (function(){throw inst_58945})();var state_59074__$1 = state_59074;var statearr_59086_59193 = state_59074__$1;(statearr_59086_59193[2] = inst_58996);
(statearr_59086_59193[1] = 36);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 67))
{var inst_59047 = (state_59074[2]);var state_59074__$1 = state_59074;var statearr_59087_59194 = state_59074__$1;(statearr_59087_59194[2] = inst_59047);
(statearr_59087_59194[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 4))
{var inst_58888 = (state_59074[9]);var inst_58888__$1 = (state_59074[2]);var inst_58889 = (inst_58888__$1 === cljs.core.match.backtrack);var state_59074__$1 = (function (){var statearr_59088 = state_59074;(statearr_59088[9] = inst_58888__$1);
return statearr_59088;
})();if(cljs.core.truth_(inst_58889))
{var statearr_59089_59195 = state_59074__$1;(statearr_59089_59195[1] = 5);
} else
{var statearr_59090_59196 = state_59074__$1;(statearr_59090_59196[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 36))
{var inst_58998 = (state_59074[2]);var state_59074__$1 = state_59074;var statearr_59091_59197 = state_59074__$1;(statearr_59091_59197[2] = inst_58998);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59074__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 68))
{var inst_58882 = (state_59074[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_59074,4,Error,null,3);var inst_59059 = cljs.core.keyword_identical_QMARK_.call(null,inst_58882,new cljs.core.Keyword(null,"error","error",1110689146));var state_59074__$1 = state_59074;if(inst_59059)
{var statearr_59092_59198 = state_59074__$1;(statearr_59092_59198[1] = 69);
} else
{var statearr_59093_59199 = state_59074__$1;(statearr_59093_59199[1] = 70);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 5))
{var state_59074__$1 = state_59074;var statearr_59094_59200 = state_59074__$1;(statearr_59094_59200[2] = null);
(statearr_59094_59200[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 37))
{var inst_58994 = (state_59074[2]);var state_59074__$1 = state_59074;var statearr_59095_59201 = state_59074__$1;(statearr_59095_59201[2] = inst_58994);
(statearr_59095_59201[1] = 36);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 69))
{var inst_59061 = clojure.string.replace.call(null,"Failed to initialize MIDI. Most\nprobably you are using a browser without a Web MIDI\nimplementation. Use a new version of Chrome and enable MIDI support\nin: chrome://flags/#enable-web-midi","\n"," ");var inst_59062 = alert(inst_59061);var state_59074__$1 = state_59074;var statearr_59096_59202 = state_59074__$1;(statearr_59096_59202[2] = inst_59062);
(statearr_59096_59202[1] = 71);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 6))
{var inst_58888 = (state_59074[9]);var inst_59053 = (function(){throw inst_58888})();var state_59074__$1 = state_59074;var statearr_59097_59203 = state_59074__$1;(statearr_59097_59203[2] = inst_59053);
(statearr_59097_59203[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 38))
{var inst_58948 = (state_59074[10]);var inst_58948__$1 = (state_59074[2]);var inst_58949 = (inst_58948__$1 === cljs.core.match.backtrack);var state_59074__$1 = (function (){var statearr_59098 = state_59074;(statearr_59098[10] = inst_58948__$1);
return statearr_59098;
})();if(cljs.core.truth_(inst_58949))
{var statearr_59099_59204 = state_59074__$1;(statearr_59099_59204[1] = 39);
} else
{var statearr_59100_59205 = state_59074__$1;(statearr_59100_59205[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 70))
{var state_59074__$1 = state_59074;if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_59101_59206 = state_59074__$1;(statearr_59101_59206[1] = 72);
} else
{var statearr_59102_59207 = state_59074__$1;(statearr_59102_59207[1] = 73);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 7))
{var inst_59055 = (state_59074[2]);var state_59074__$1 = state_59074;var statearr_59103_59208 = state_59074__$1;(statearr_59103_59208[2] = inst_59055);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59074__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 39))
{var inst_58951 = (function(){throw cljs.core.match.backtrack})();var state_59074__$1 = state_59074;var statearr_59104_59209 = state_59074__$1;(statearr_59104_59209[2] = inst_58951);
(statearr_59104_59209[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 71))
{var inst_59070 = (state_59074[2]);var state_59074__$1 = state_59074;var statearr_59105_59210 = state_59074__$1;(statearr_59105_59210[2] = inst_59070);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59074__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 8))
{var inst_59051 = (state_59074[2]);var state_59074__$1 = state_59074;var statearr_59106_59211 = state_59074__$1;(statearr_59106_59211[2] = inst_59051);
(statearr_59106_59211[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 40))
{var inst_58948 = (state_59074[10]);var inst_58953 = (function(){throw inst_58948})();var state_59074__$1 = state_59074;var statearr_59107_59212 = state_59074__$1;(statearr_59107_59212[2] = inst_58953);
(statearr_59107_59212[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 72))
{var inst_59065 = (function(){throw cljs.core.match.backtrack})();var state_59074__$1 = state_59074;var statearr_59108_59213 = state_59074__$1;(statearr_59108_59213[2] = inst_59065);
(statearr_59108_59213[1] = 74);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 9))
{var inst_58891 = (state_59074[11]);var inst_58891__$1 = (state_59074[2]);var inst_58892 = (inst_58891__$1 === cljs.core.match.backtrack);var state_59074__$1 = (function (){var statearr_59109 = state_59074;(statearr_59109[11] = inst_58891__$1);
return statearr_59109;
})();if(cljs.core.truth_(inst_58892))
{var statearr_59110_59214 = state_59074__$1;(statearr_59110_59214[1] = 10);
} else
{var statearr_59111_59215 = state_59074__$1;(statearr_59111_59215[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 41))
{var inst_58955 = (state_59074[2]);var state_59074__$1 = state_59074;var statearr_59112_59216 = state_59074__$1;(statearr_59112_59216[2] = inst_58955);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59074__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 73))
{var state_59074__$1 = state_59074;var statearr_59113_59217 = state_59074__$1;(statearr_59113_59217[2] = null);
(statearr_59113_59217[1] = 74);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 10))
{var inst_58882 = (state_59074[8]);var inst_58894 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_58882)].join('');var inst_58895 = (new Error(inst_58894));var inst_58896 = (function(){throw inst_58895})();var state_59074__$1 = state_59074;var statearr_59114_59218 = state_59074__$1;(statearr_59114_59218[2] = inst_58896);
(statearr_59114_59218[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 42))
{var inst_58912 = (state_59074[12]);var inst_58926 = (state_59074[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_59074,38,Error,null,37);var inst_58959 = cljs.core.nth.call(null,inst_58926,1);var inst_58960 = cljs.core._EQ_.call(null,inst_58959,inst_58912);var state_59074__$1 = state_59074;if(inst_58960)
{var statearr_59115_59219 = state_59074__$1;(statearr_59115_59219[1] = 43);
} else
{var statearr_59116_59220 = state_59074__$1;(statearr_59116_59220[1] = 44);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 74))
{var inst_59068 = (state_59074[2]);var state_59074__$1 = state_59074;var statearr_59117_59221 = state_59074__$1;(statearr_59117_59221[2] = inst_59068);
(statearr_59117_59221[1] = 71);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 11))
{var inst_58891 = (state_59074[11]);var inst_58898 = (function(){throw inst_58891})();var state_59074__$1 = state_59074;var statearr_59118_59222 = state_59074__$1;(statearr_59118_59222[2] = inst_58898);
(statearr_59118_59222[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 43))
{var inst_58962 = (state_59074[14]);var inst_58926 = (state_59074[13]);var inst_58962__$1 = cljs.core.nth.call(null,inst_58926,0);var inst_58963 = inst_58962__$1.data;var inst_58964 = (inst_58963[2]);var inst_58965 = cljs.core._EQ_.call(null,52,inst_58964);var state_59074__$1 = (function (){var statearr_59119 = state_59074;(statearr_59119[14] = inst_58962__$1);
return statearr_59119;
})();if(inst_58965)
{var statearr_59120_59223 = state_59074__$1;(statearr_59120_59223[1] = 46);
} else
{var statearr_59121_59224 = state_59074__$1;(statearr_59121_59224[1] = 47);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 12))
{var inst_58900 = (state_59074[2]);var state_59074__$1 = state_59074;var statearr_59122_59225 = state_59074__$1;(statearr_59122_59225[2] = inst_58900);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59074__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 44))
{var state_59074__$1 = state_59074;if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_59123_59226 = state_59074__$1;(statearr_59123_59226[1] = 52);
} else
{var statearr_59124_59227 = state_59074__$1;(statearr_59124_59227[1] = 53);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 13))
{var inst_58882 = (state_59074[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_59074,9,Error,null,8);var inst_58904 = cljs.core.vector_QMARK_.call(null,inst_58882);var inst_58905 = cljs.core.count.call(null,inst_58882);var inst_58906 = (inst_58905 === 4);var inst_58907 = (inst_58904) && (inst_58906);var state_59074__$1 = state_59074;if(cljs.core.truth_(inst_58907))
{var statearr_59125_59228 = state_59074__$1;(statearr_59125_59228[1] = 14);
} else
{var statearr_59126_59229 = state_59074__$1;(statearr_59126_59229[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 45))
{var inst_58992 = (state_59074[2]);var state_59074__$1 = state_59074;var statearr_59127_59230 = state_59074__$1;(statearr_59127_59230[2] = inst_58992);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59074__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 14))
{var inst_58882 = (state_59074[8]);var inst_58911 = (state_59074[15]);var inst_58909 = cljs.core.nth.call(null,inst_58882,0);var inst_58910 = cljs.core.nth.call(null,inst_58882,1);var inst_58911__$1 = cljs.core.nth.call(null,inst_58882,2);var inst_58912 = cljs.core.nth.call(null,inst_58882,3);var inst_58913 = cljs.core.println.call(null,"We are connected to MIDI");var inst_58914 = [inst_58910,inst_58911__$1];var inst_58915 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_58914,null));var inst_58916 = cljs.core.mapv.call(null,hackaton.core.print_midi_device,inst_58915);var state_59074__$1 = (function (){var statearr_59128 = state_59074;(statearr_59128[16] = inst_58909);
(statearr_59128[15] = inst_58911__$1);
(statearr_59128[12] = inst_58912);
(statearr_59128[17] = inst_58913);
(statearr_59128[18] = inst_58916);
return statearr_59128;
})();var statearr_59129_59231 = state_59074__$1;(statearr_59129_59231[2] = null);
(statearr_59129_59231[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 46))
{var inst_58972 = (state_59074[19]);var inst_58962 = (state_59074[14]);var inst_58967 = inst_58962.data;var inst_58968 = (inst_58967[1]);var inst_58969 = (inst_58968 - 1);var inst_58970 = cljs.core.quot.call(null,inst_58968,16);var inst_58971 = (8 * inst_58970);var inst_58972__$1 = (inst_58969 - inst_58971);var inst_58973 = (inst_58972__$1 >= 0);var inst_58974 = (inst_58972__$1 < hackaton.core.max_color);var inst_58975 = (inst_58973) && (inst_58974);var state_59074__$1 = (function (){var statearr_59130 = state_59074;(statearr_59130[19] = inst_58972__$1);
return statearr_59130;
})();if(cljs.core.truth_(inst_58975))
{var statearr_59131_59232 = state_59074__$1;(statearr_59131_59232[1] = 49);
} else
{var statearr_59132_59233 = state_59074__$1;(statearr_59132_59233[1] = 50);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 15))
{var state_59074__$1 = state_59074;if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_59133_59234 = state_59074__$1;(statearr_59133_59234[1] = 65);
} else
{var statearr_59134_59235 = state_59074__$1;(statearr_59134_59235[1] = 66);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 47))
{var state_59074__$1 = state_59074;var statearr_59135_59236 = state_59074__$1;(statearr_59135_59236[2] = null);
(statearr_59135_59236[1] = 48);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 16))
{var inst_59049 = (state_59074[2]);var state_59074__$1 = state_59074;var statearr_59136_59237 = state_59074__$1;(statearr_59136_59237[2] = inst_59049);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59074__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 48))
{var inst_58984 = (state_59074[2]);var state_59074__$1 = state_59074;var statearr_59137_59238 = state_59074__$1;(statearr_59137_59238[2] = inst_58984);
(statearr_59137_59238[1] = 45);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 17))
{var state_59074__$1 = state_59074;if(true)
{var statearr_59138_59239 = state_59074__$1;(statearr_59138_59239[1] = 19);
} else
{var statearr_59139_59240 = state_59074__$1;(statearr_59139_59240[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 49))
{var inst_58972 = (state_59074[19]);var state_59074__$1 = state_59074;var statearr_59140_59241 = state_59074__$1;(statearr_59140_59241[2] = inst_58972);
(statearr_59140_59241[1] = 51);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 18))
{var inst_59041 = (state_59074[2]);var state_59074__$1 = state_59074;var statearr_59141_59242 = state_59074__$1;(statearr_59141_59242[2] = inst_59041);
(statearr_59141_59242[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 50))
{var state_59074__$1 = state_59074;var statearr_59142_59243 = state_59074__$1;(statearr_59142_59243[2] = null);
(statearr_59142_59243[1] = 51);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 19))
{var inst_58912 = (state_59074[12]);var inst_58923 = [inst_58912,color_chan];var inst_58924 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_58923,null));var state_59074__$1 = state_59074;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_59074__$1,22,inst_58924);
} else
{if((state_val_59075 === 51))
{var inst_58972 = (state_59074[19]);var inst_58979 = (state_59074[2]);var inst_58980 = cljs.core.println.call(null,"Received color",inst_58972,inst_58979);var inst_58981 = om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"selected-color","selected-color",1770948899),inst_58979);var state_59074__$1 = (function (){var statearr_59143 = state_59074;(statearr_59143[20] = inst_58980);
return statearr_59143;
})();var statearr_59144_59244 = state_59074__$1;(statearr_59144_59244[2] = inst_58981);
(statearr_59144_59244[1] = 48);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 20))
{var state_59074__$1 = state_59074;var statearr_59145_59245 = state_59074__$1;(statearr_59145_59245[2] = null);
(statearr_59145_59245[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 52))
{var inst_58987 = (function(){throw cljs.core.match.backtrack})();var state_59074__$1 = state_59074;var statearr_59146_59246 = state_59074__$1;(statearr_59146_59246[2] = inst_58987);
(statearr_59146_59246[1] = 54);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 21))
{var inst_59039 = (state_59074[2]);var state_59074__$1 = state_59074;var statearr_59147_59247 = state_59074__$1;(statearr_59147_59247[2] = inst_59039);
(statearr_59147_59247[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 53))
{var state_59074__$1 = state_59074;var statearr_59148_59248 = state_59074__$1;(statearr_59148_59248[2] = null);
(statearr_59148_59248[1] = 54);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 22))
{var inst_58926 = (state_59074[2]);var state_59074__$1 = (function (){var statearr_59149 = state_59074;(statearr_59149[13] = inst_58926);
return statearr_59149;
})();var statearr_59150_59249 = state_59074__$1;(statearr_59150_59249[2] = null);
(statearr_59150_59249[1] = 28);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 54))
{var inst_58990 = (state_59074[2]);var state_59074__$1 = state_59074;var statearr_59151_59250 = state_59074__$1;(statearr_59151_59250[2] = inst_58990);
(statearr_59151_59250[1] = 45);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 23))
{var inst_59035 = (state_59074[2]);var state_59074__$1 = (function (){var statearr_59152 = state_59074;(statearr_59152[21] = inst_59035);
return statearr_59152;
})();var statearr_59153_59251 = state_59074__$1;(statearr_59153_59251[2] = null);
(statearr_59153_59251[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 55))
{var inst_58926 = (state_59074[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_59074,33,Error,null,32);var inst_59002 = cljs.core.nth.call(null,inst_58926,1);var inst_59003 = cljs.core._EQ_.call(null,inst_59002,color_chan);var state_59074__$1 = state_59074;if(inst_59003)
{var statearr_59154_59252 = state_59074__$1;(statearr_59154_59252[1] = 56);
} else
{var statearr_59155_59253 = state_59074__$1;(statearr_59155_59253[1] = 57);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 24))
{var inst_58927 = (state_59074[22]);var inst_58927__$1 = (state_59074[2]);var inst_58928 = (inst_58927__$1 === cljs.core.match.backtrack);var state_59074__$1 = (function (){var statearr_59156 = state_59074;(statearr_59156[22] = inst_58927__$1);
return statearr_59156;
})();if(cljs.core.truth_(inst_58928))
{var statearr_59157_59254 = state_59074__$1;(statearr_59157_59254[1] = 25);
} else
{var statearr_59158_59255 = state_59074__$1;(statearr_59158_59255[1] = 26);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 56))
{var inst_58911 = (state_59074[15]);var inst_58926 = (state_59074[13]);var inst_59005 = cljs.core.nth.call(null,inst_58926,0);var inst_59006 = (inst_59005 + 1);var inst_59007 = (inst_59005 + 1);var inst_59008 = cljs.core.quot.call(null,inst_59007,8);var inst_59009 = (8 * inst_59008);var inst_59010 = (inst_59006 + inst_59009);var inst_59011 = cljs.core.println.call(null,"Sending note ",inst_59010);var inst_59012 = [144,inst_59010,127];var inst_59013 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_59012,null));var inst_59014 = cljs.core.clj__GT_js.call(null,inst_59013);var inst_59015 = inst_58911.send(inst_59014);var state_59074__$1 = (function (){var statearr_59159 = state_59074;(statearr_59159[23] = inst_59011);
return statearr_59159;
})();var statearr_59160_59256 = state_59074__$1;(statearr_59160_59256[2] = inst_59015);
(statearr_59160_59256[1] = 58);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 25))
{var inst_58926 = (state_59074[13]);var inst_58930 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_58926)].join('');var inst_58931 = (new Error(inst_58930));var inst_58932 = (function(){throw inst_58931})();var state_59074__$1 = state_59074;var statearr_59161_59257 = state_59074__$1;(statearr_59161_59257[2] = inst_58932);
(statearr_59161_59257[1] = 27);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 57))
{var state_59074__$1 = state_59074;if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_59162_59258 = state_59074__$1;(statearr_59162_59258[1] = 59);
} else
{var statearr_59163_59259 = state_59074__$1;(statearr_59163_59259[1] = 60);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 26))
{var inst_58927 = (state_59074[22]);var inst_58934 = (function(){throw inst_58927})();var state_59074__$1 = state_59074;var statearr_59164_59260 = state_59074__$1;(statearr_59164_59260[2] = inst_58934);
(statearr_59164_59260[1] = 27);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 58))
{var inst_59023 = (state_59074[2]);var state_59074__$1 = state_59074;var statearr_59165_59261 = state_59074__$1;(statearr_59165_59261[2] = inst_59023);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59074__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 27))
{var inst_58936 = (state_59074[2]);var state_59074__$1 = state_59074;var statearr_59166_59262 = state_59074__$1;(statearr_59166_59262[2] = inst_58936);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59074__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 59))
{var inst_59018 = (function(){throw cljs.core.match.backtrack})();var state_59074__$1 = state_59074;var statearr_59167_59263 = state_59074__$1;(statearr_59167_59263[2] = inst_59018);
(statearr_59167_59263[1] = 61);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 28))
{var inst_58926 = (state_59074[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_59074,24,Error,null,23);var inst_58940 = cljs.core.vector_QMARK_.call(null,inst_58926);var inst_58941 = cljs.core.count.call(null,inst_58926);var inst_58942 = (inst_58941 === 2);var inst_58943 = (inst_58940) && (inst_58942);var state_59074__$1 = state_59074;if(cljs.core.truth_(inst_58943))
{var statearr_59168_59264 = state_59074__$1;(statearr_59168_59264[1] = 29);
} else
{var statearr_59169_59265 = state_59074__$1;(statearr_59169_59265[1] = 30);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 60))
{var state_59074__$1 = state_59074;var statearr_59170_59266 = state_59074__$1;(statearr_59170_59266[2] = null);
(statearr_59170_59266[1] = 61);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 29))
{var state_59074__$1 = state_59074;var statearr_59171_59267 = state_59074__$1;(statearr_59171_59267[2] = null);
(statearr_59171_59267[1] = 55);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 61))
{var inst_59021 = (state_59074[2]);var state_59074__$1 = state_59074;var statearr_59172_59268 = state_59074__$1;(statearr_59172_59268[2] = inst_59021);
(statearr_59172_59268[1] = 58);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 30))
{var state_59074__$1 = state_59074;if(new cljs.core.Keyword(null,"else","else",1017020587))
{var statearr_59173_59269 = state_59074__$1;(statearr_59173_59269[1] = 62);
} else
{var statearr_59174_59270 = state_59074__$1;(statearr_59174_59270[1] = 63);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 62))
{var inst_59028 = (function(){throw cljs.core.match.backtrack})();var state_59074__$1 = state_59074;var statearr_59175_59271 = state_59074__$1;(statearr_59175_59271[2] = inst_59028);
(statearr_59175_59271[1] = 64);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 31))
{var inst_59033 = (state_59074[2]);var state_59074__$1 = state_59074;var statearr_59176_59272 = state_59074__$1;(statearr_59176_59272[2] = inst_59033);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59074__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_59075 === 63))
{var state_59074__$1 = state_59074;var statearr_59177_59273 = state_59074__$1;(statearr_59177_59273[2] = null);
(statearr_59177_59273[1] = 64);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7375__auto__){
return (function() {
var state_machine__7376__auto__ = null;
var state_machine__7376__auto____0 = (function (){var statearr_59181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_59181[0] = state_machine__7376__auto__);
(statearr_59181[1] = 1);
return statearr_59181;
});
var state_machine__7376__auto____1 = (function (state_59074){while(true){
var ret_value__7377__auto__ = (function (){try{while(true){
var result__7378__auto__ = switch__7375__auto__.call(null,state_59074);if(cljs.core.keyword_identical_QMARK_.call(null,result__7378__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7378__auto__;
}
break;
}
}catch (e59182){if((e59182 instanceof Object))
{var ex__7379__auto__ = e59182;var statearr_59183_59274 = state_59074;(statearr_59183_59274[5] = ex__7379__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59074);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e59182;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7377__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__59275 = state_59074;
state_59074 = G__59275;
continue;
}
} else
{return ret_value__7377__auto__;
}
break;
}
});
state_machine__7376__auto__ = function(state_59074){
switch(arguments.length){
case 0:
return state_machine__7376__auto____0.call(this);
case 1:
return state_machine__7376__auto____1.call(this,state_59074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7376__auto____0;
state_machine__7376__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7376__auto____1;
return state_machine__7376__auto__;
})()
;})(switch__7375__auto__))
})();var state__7392__auto__ = (function (){var statearr_59184 = f__7391__auto__.call(null);(statearr_59184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7390__auto__);
return statearr_59184;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7392__auto__);
}));
return c__7390__auto__;
});
hackaton.core.color_cell_render = (function color_cell_render(index,selected,color_chan){return React.DOM.div({"onClick": (function (){cljs.core.println.call(null,"Clicked color",index);
return cljs.core.async.put_BANG_.call(null,color_chan,index);
}), "className": [cljs.core.str("color-box "),cljs.core.str((cljs.core.truth_(selected)?"box-selected ":"box-unselected ")),cljs.core.str("color-idx-"),cljs.core.str(index)].join('')});
});
hackaton.core.no_color_render = (function no_color_render(no_color,color_chan){return React.DOM.div({"onClick": (function (){cljs.core.println.call(null,"Selected no color");
return cljs.core.async.put_BANG_.call(null,color_chan,-1);
}), "className": [cljs.core.str("no-color-box "),cljs.core.str((cljs.core.truth_(no_color)?"box-selected":"box-unselected"))].join('')},React.DOM.span(null,"No color"));
});
hackaton.core.color_picker_view = (function color_picker_view(app,owner){if(typeof hackaton.core.t59280 !== 'undefined')
{} else
{
/**
* @constructor
*/
hackaton.core.t59280 = (function (owner,app,color_picker_view,meta59281){
this.owner = owner;
this.app = app;
this.color_picker_view = color_picker_view;
this.meta59281 = meta59281;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
hackaton.core.t59280.cljs$lang$type = true;
hackaton.core.t59280.cljs$lang$ctorStr = "hackaton.core/t59280";
hackaton.core.t59280.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"hackaton.core/t59280");
});
hackaton.core.t59280.prototype.om$core$IRenderState$ = true;
hackaton.core.t59280.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,hackaton.core.no_color_render.call(null,(new cljs.core.Keyword(null,"selected-color","selected-color",1770948899).cljs$core$IFn$_invoke$arity$1(self__.app) == null),new cljs.core.Keyword(null,"color-chan","color-chan",2256903918).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,(function (p1__59276_SHARP_){return hackaton.core.color_cell_render.call(null,p1__59276_SHARP_,cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selected-color","selected-color",1770948899).cljs$core$IFn$_invoke$arity$1(self__.app),p1__59276_SHARP_),new cljs.core.Keyword(null,"color-chan","color-chan",2256903918).cljs$core$IFn$_invoke$arity$1(state));
}),cljs.core.range.call(null,hackaton.core.max_color))));
});
hackaton.core.t59280.prototype.om$core$IInitState$ = true;
hackaton.core.t59280.prototype.om$core$IInitState$init_state$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var color_chan = cljs.core.async.chan.call(null);hackaton.core.midi_listen_to_color_changes_BANG_.call(null,self__.app,color_chan);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color-chan","color-chan",2256903918),color_chan], null);
});
hackaton.core.t59280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59282){var self__ = this;
var _59282__$1 = this;return self__.meta59281;
});
hackaton.core.t59280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59282,meta59281__$1){var self__ = this;
var _59282__$1 = this;return (new hackaton.core.t59280(self__.owner,self__.app,self__.color_picker_view,meta59281__$1));
});
hackaton.core.__GT_t59280 = (function __GT_t59280(owner__$1,app__$1,color_picker_view__$1,meta59281){return (new hackaton.core.t59280(owner__$1,app__$1,color_picker_view__$1,meta59281));
});
}
return (new hackaton.core.t59280(owner,app,color_picker_view,null));
});
hackaton.core.main_view = (function main_view(app,owner){return React.DOM.div(null,React.DOM.h1(null,hackaton.core.app_title),React.DOM.p({"dangerouslySetInnerHTML": {"__html": hackaton.core.app_instructions}}),om.core.build.call(null,hackaton.core.color_picker_view,app));
});
om.core.root.call(null,hackaton.core.main_view,hackaton.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map