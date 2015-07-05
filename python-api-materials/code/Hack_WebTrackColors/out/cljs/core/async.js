// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9122 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9122 = (function (f,fn_handler,meta9123){
this.f = f;
this.fn_handler = fn_handler;
this.meta9123 = meta9123;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9122.cljs$lang$type = true;
cljs.core.async.t9122.cljs$lang$ctorStr = "cljs.core.async/t9122";
cljs.core.async.t9122.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9122");
});
cljs.core.async.t9122.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9122.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9122.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9124){var self__ = this;
var _9124__$1 = this;return self__.meta9123;
});
cljs.core.async.t9122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9124,meta9123__$1){var self__ = this;
var _9124__$1 = this;return (new cljs.core.async.t9122(self__.f,self__.fn_handler,meta9123__$1));
});
cljs.core.async.__GT_t9122 = (function __GT_t9122(f__$1,fn_handler__$1,meta9123){return (new cljs.core.async.t9122(f__$1,fn_handler__$1,meta9123));
});
}
return (new cljs.core.async.t9122(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9126 = buff;if(G__9126)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__9126.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9126.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9126);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9126);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_9127 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9127);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_9127);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3431__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___9128 = n;var x_9129 = 0;while(true){
if((x_9129 < n__4291__auto___9128))
{(a[x_9129] = 0);
{
var G__9130 = (x_9129 + 1);
x_9129 = G__9130;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__9131 = (i + 1);
i = G__9131;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9135 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9135 = (function (flag,alt_flag,meta9136){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9136 = meta9136;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9135.cljs$lang$type = true;
cljs.core.async.t9135.cljs$lang$ctorStr = "cljs.core.async/t9135";
cljs.core.async.t9135.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9135");
});
cljs.core.async.t9135.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9135.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t9135.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t9135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9137){var self__ = this;
var _9137__$1 = this;return self__.meta9136;
});
cljs.core.async.t9135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9137,meta9136__$1){var self__ = this;
var _9137__$1 = this;return (new cljs.core.async.t9135(self__.flag,self__.alt_flag,meta9136__$1));
});
cljs.core.async.__GT_t9135 = (function __GT_t9135(flag__$1,alt_flag__$1,meta9136){return (new cljs.core.async.t9135(flag__$1,alt_flag__$1,meta9136));
});
}
return (new cljs.core.async.t9135(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9141 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9141 = (function (cb,flag,alt_handler,meta9142){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9142 = meta9142;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9141.cljs$lang$type = true;
cljs.core.async.t9141.cljs$lang$ctorStr = "cljs.core.async/t9141";
cljs.core.async.t9141.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9141");
});
cljs.core.async.t9141.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9141.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9141.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9143){var self__ = this;
var _9143__$1 = this;return self__.meta9142;
});
cljs.core.async.t9141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9143,meta9142__$1){var self__ = this;
var _9143__$1 = this;return (new cljs.core.async.t9141(self__.cb,self__.flag,self__.alt_handler,meta9142__$1));
});
cljs.core.async.__GT_t9141 = (function __GT_t9141(cb__$1,flag__$1,alt_handler__$1,meta9142){return (new cljs.core.async.t9141(cb__$1,flag__$1,alt_handler__$1,meta9142));
});
}
return (new cljs.core.async.t9141(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9144_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9144_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3443__auto__ = wport;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__9145 = (i + 1);
i = G__9145;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3443__auto__ = ret;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3431__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__9146){var map__9148 = p__9146;var map__9148__$1 = ((cljs.core.seq_QMARK_.call(null,map__9148))?cljs.core.apply.call(null,cljs.core.hash_map,map__9148):map__9148);var opts = map__9148__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9146 = null;if (arguments.length > 1) {
  p__9146 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9146);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9149){
var ports = cljs.core.first(arglist__9149);
var p__9146 = cljs.core.rest(arglist__9149);
return alts_BANG___delegate(ports,p__9146);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9157 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9157 = (function (ch,f,map_LT_,meta9158){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9158 = meta9158;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9157.cljs$lang$type = true;
cljs.core.async.t9157.cljs$lang$ctorStr = "cljs.core.async/t9157";
cljs.core.async.t9157.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9157");
});
cljs.core.async.t9157.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9157.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9157.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9157.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9160 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9160 = (function (fn1,_,meta9158,ch,f,map_LT_,meta9161){
this.fn1 = fn1;
this._ = _;
this.meta9158 = meta9158;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9161 = meta9161;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9160.cljs$lang$type = true;
cljs.core.async.t9160.cljs$lang$ctorStr = "cljs.core.async/t9160";
cljs.core.async.t9160.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9160");
});
cljs.core.async.t9160.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9160.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t9160.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t9160.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__9150_SHARP_){return f1.call(null,(((p1__9150_SHARP_ == null))?null:self__.f.call(null,p1__9150_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t9160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9162){var self__ = this;
var _9162__$1 = this;return self__.meta9161;
});
cljs.core.async.t9160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9162,meta9161__$1){var self__ = this;
var _9162__$1 = this;return (new cljs.core.async.t9160(self__.fn1,self__._,self__.meta9158,self__.ch,self__.f,self__.map_LT_,meta9161__$1));
});
cljs.core.async.__GT_t9160 = (function __GT_t9160(fn1__$1,___$2,meta9158__$1,ch__$2,f__$2,map_LT___$2,meta9161){return (new cljs.core.async.t9160(fn1__$1,___$2,meta9158__$1,ch__$2,f__$2,map_LT___$2,meta9161));
});
}
return (new cljs.core.async.t9160(fn1,___$1,self__.meta9158,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t9157.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9157.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9159){var self__ = this;
var _9159__$1 = this;return self__.meta9158;
});
cljs.core.async.t9157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9159,meta9158__$1){var self__ = this;
var _9159__$1 = this;return (new cljs.core.async.t9157(self__.ch,self__.f,self__.map_LT_,meta9158__$1));
});
cljs.core.async.__GT_t9157 = (function __GT_t9157(ch__$1,f__$1,map_LT___$1,meta9158){return (new cljs.core.async.t9157(ch__$1,f__$1,map_LT___$1,meta9158));
});
}
return (new cljs.core.async.t9157(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9166 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9166 = (function (ch,f,map_GT_,meta9167){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9167 = meta9167;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9166.cljs$lang$type = true;
cljs.core.async.t9166.cljs$lang$ctorStr = "cljs.core.async/t9166";
cljs.core.async.t9166.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9166");
});
cljs.core.async.t9166.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9166.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9166.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9166.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9166.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9166.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9168){var self__ = this;
var _9168__$1 = this;return self__.meta9167;
});
cljs.core.async.t9166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9168,meta9167__$1){var self__ = this;
var _9168__$1 = this;return (new cljs.core.async.t9166(self__.ch,self__.f,self__.map_GT_,meta9167__$1));
});
cljs.core.async.__GT_t9166 = (function __GT_t9166(ch__$1,f__$1,map_GT___$1,meta9167){return (new cljs.core.async.t9166(ch__$1,f__$1,map_GT___$1,meta9167));
});
}
return (new cljs.core.async.t9166(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9172 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9172 = (function (ch,p,filter_GT_,meta9173){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9173 = meta9173;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9172.cljs$lang$type = true;
cljs.core.async.t9172.cljs$lang$ctorStr = "cljs.core.async/t9172";
cljs.core.async.t9172.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t9172");
});
cljs.core.async.t9172.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9172.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t9172.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9172.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9172.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9172.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9174){var self__ = this;
var _9174__$1 = this;return self__.meta9173;
});
cljs.core.async.t9172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9174,meta9173__$1){var self__ = this;
var _9174__$1 = this;return (new cljs.core.async.t9172(self__.ch,self__.p,self__.filter_GT_,meta9173__$1));
});
cljs.core.async.__GT_t9172 = (function __GT_t9172(ch__$1,p__$1,filter_GT___$1,meta9173){return (new cljs.core.async.t9172(ch__$1,p__$1,filter_GT___$1,meta9173));
});
}
return (new cljs.core.async.t9172(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___9257 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_9236){var state_val_9237 = (state_9236[1]);if((state_val_9237 === 1))
{var state_9236__$1 = state_9236;var statearr_9238_9258 = state_9236__$1;(statearr_9238_9258[2] = null);
(statearr_9238_9258[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9237 === 2))
{var state_9236__$1 = state_9236;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9236__$1,4,ch);
} else
{if((state_val_9237 === 3))
{var inst_9234 = (state_9236[2]);var state_9236__$1 = state_9236;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9236__$1,inst_9234);
} else
{if((state_val_9237 === 4))
{var inst_9218 = (state_9236[7]);var inst_9218__$1 = (state_9236[2]);var inst_9219 = (inst_9218__$1 == null);var state_9236__$1 = (function (){var statearr_9239 = state_9236;(statearr_9239[7] = inst_9218__$1);
return statearr_9239;
})();if(cljs.core.truth_(inst_9219))
{var statearr_9240_9259 = state_9236__$1;(statearr_9240_9259[1] = 5);
} else
{var statearr_9241_9260 = state_9236__$1;(statearr_9241_9260[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9237 === 5))
{var inst_9221 = cljs.core.async.close_BANG_.call(null,out);var state_9236__$1 = state_9236;var statearr_9242_9261 = state_9236__$1;(statearr_9242_9261[2] = inst_9221);
(statearr_9242_9261[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9237 === 6))
{var inst_9218 = (state_9236[7]);var inst_9223 = p.call(null,inst_9218);var state_9236__$1 = state_9236;if(cljs.core.truth_(inst_9223))
{var statearr_9243_9262 = state_9236__$1;(statearr_9243_9262[1] = 8);
} else
{var statearr_9244_9263 = state_9236__$1;(statearr_9244_9263[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9237 === 7))
{var inst_9232 = (state_9236[2]);var state_9236__$1 = state_9236;var statearr_9245_9264 = state_9236__$1;(statearr_9245_9264[2] = inst_9232);
(statearr_9245_9264[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9237 === 8))
{var inst_9218 = (state_9236[7]);var state_9236__$1 = state_9236;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9236__$1,11,out,inst_9218);
} else
{if((state_val_9237 === 9))
{var state_9236__$1 = state_9236;var statearr_9246_9265 = state_9236__$1;(statearr_9246_9265[2] = null);
(statearr_9246_9265[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9237 === 10))
{var inst_9229 = (state_9236[2]);var state_9236__$1 = (function (){var statearr_9247 = state_9236;(statearr_9247[8] = inst_9229);
return statearr_9247;
})();var statearr_9248_9266 = state_9236__$1;(statearr_9248_9266[2] = null);
(statearr_9248_9266[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9237 === 11))
{var inst_9226 = (state_9236[2]);var state_9236__$1 = state_9236;var statearr_9249_9267 = state_9236__$1;(statearr_9249_9267[2] = inst_9226);
(statearr_9249_9267[1] = 10);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_9253 = [null,null,null,null,null,null,null,null,null];(statearr_9253[0] = state_machine__6178__auto__);
(statearr_9253[1] = 1);
return statearr_9253;
});
var state_machine__6178__auto____1 = (function (state_9236){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_9236);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e9254){if((e9254 instanceof Object))
{var ex__6181__auto__ = e9254;var statearr_9255_9268 = state_9236;(statearr_9255_9268[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9236);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9254;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9269 = state_9236;
state_9236 = G__9269;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_9236){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_9236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_9256 = f__6193__auto__.call(null);(statearr_9256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___9257);
return statearr_9256;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_9421){var state_val_9422 = (state_9421[1]);if((state_val_9422 === 1))
{var state_9421__$1 = state_9421;var statearr_9423_9460 = state_9421__$1;(statearr_9423_9460[2] = null);
(statearr_9423_9460[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9422 === 2))
{var state_9421__$1 = state_9421;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9421__$1,4,in$);
} else
{if((state_val_9422 === 3))
{var inst_9419 = (state_9421[2]);var state_9421__$1 = state_9421;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9421__$1,inst_9419);
} else
{if((state_val_9422 === 4))
{var inst_9367 = (state_9421[7]);var inst_9367__$1 = (state_9421[2]);var inst_9368 = (inst_9367__$1 == null);var state_9421__$1 = (function (){var statearr_9424 = state_9421;(statearr_9424[7] = inst_9367__$1);
return statearr_9424;
})();if(cljs.core.truth_(inst_9368))
{var statearr_9425_9461 = state_9421__$1;(statearr_9425_9461[1] = 5);
} else
{var statearr_9426_9462 = state_9421__$1;(statearr_9426_9462[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9422 === 5))
{var inst_9370 = cljs.core.async.close_BANG_.call(null,out);var state_9421__$1 = state_9421;var statearr_9427_9463 = state_9421__$1;(statearr_9427_9463[2] = inst_9370);
(statearr_9427_9463[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9422 === 6))
{var inst_9367 = (state_9421[7]);var inst_9372 = f.call(null,inst_9367);var inst_9377 = cljs.core.seq.call(null,inst_9372);var inst_9378 = inst_9377;var inst_9379 = null;var inst_9380 = 0;var inst_9381 = 0;var state_9421__$1 = (function (){var statearr_9428 = state_9421;(statearr_9428[8] = inst_9381);
(statearr_9428[9] = inst_9380);
(statearr_9428[10] = inst_9378);
(statearr_9428[11] = inst_9379);
return statearr_9428;
})();var statearr_9429_9464 = state_9421__$1;(statearr_9429_9464[2] = null);
(statearr_9429_9464[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9422 === 7))
{var inst_9417 = (state_9421[2]);var state_9421__$1 = state_9421;var statearr_9430_9465 = state_9421__$1;(statearr_9430_9465[2] = inst_9417);
(statearr_9430_9465[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9422 === 8))
{var inst_9381 = (state_9421[8]);var inst_9380 = (state_9421[9]);var inst_9383 = (inst_9381 < inst_9380);var inst_9384 = inst_9383;var state_9421__$1 = state_9421;if(cljs.core.truth_(inst_9384))
{var statearr_9431_9466 = state_9421__$1;(statearr_9431_9466[1] = 10);
} else
{var statearr_9432_9467 = state_9421__$1;(statearr_9432_9467[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9422 === 9))
{var inst_9414 = (state_9421[2]);var state_9421__$1 = (function (){var statearr_9433 = state_9421;(statearr_9433[12] = inst_9414);
return statearr_9433;
})();var statearr_9434_9468 = state_9421__$1;(statearr_9434_9468[2] = null);
(statearr_9434_9468[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9422 === 10))
{var inst_9381 = (state_9421[8]);var inst_9379 = (state_9421[11]);var inst_9386 = cljs.core._nth.call(null,inst_9379,inst_9381);var state_9421__$1 = state_9421;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9421__$1,13,out,inst_9386);
} else
{if((state_val_9422 === 11))
{var inst_9392 = (state_9421[13]);var inst_9378 = (state_9421[10]);var inst_9392__$1 = cljs.core.seq.call(null,inst_9378);var state_9421__$1 = (function (){var statearr_9438 = state_9421;(statearr_9438[13] = inst_9392__$1);
return statearr_9438;
})();if(inst_9392__$1)
{var statearr_9439_9469 = state_9421__$1;(statearr_9439_9469[1] = 14);
} else
{var statearr_9440_9470 = state_9421__$1;(statearr_9440_9470[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9422 === 12))
{var inst_9412 = (state_9421[2]);var state_9421__$1 = state_9421;var statearr_9441_9471 = state_9421__$1;(statearr_9441_9471[2] = inst_9412);
(statearr_9441_9471[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9422 === 13))
{var inst_9381 = (state_9421[8]);var inst_9380 = (state_9421[9]);var inst_9378 = (state_9421[10]);var inst_9379 = (state_9421[11]);var inst_9388 = (state_9421[2]);var inst_9389 = (inst_9381 + 1);var tmp9435 = inst_9380;var tmp9436 = inst_9378;var tmp9437 = inst_9379;var inst_9378__$1 = tmp9436;var inst_9379__$1 = tmp9437;var inst_9380__$1 = tmp9435;var inst_9381__$1 = inst_9389;var state_9421__$1 = (function (){var statearr_9442 = state_9421;(statearr_9442[14] = inst_9388);
(statearr_9442[8] = inst_9381__$1);
(statearr_9442[9] = inst_9380__$1);
(statearr_9442[10] = inst_9378__$1);
(statearr_9442[11] = inst_9379__$1);
return statearr_9442;
})();var statearr_9443_9472 = state_9421__$1;(statearr_9443_9472[2] = null);
(statearr_9443_9472[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9422 === 14))
{var inst_9392 = (state_9421[13]);var inst_9394 = cljs.core.chunked_seq_QMARK_.call(null,inst_9392);var state_9421__$1 = state_9421;if(inst_9394)
{var statearr_9444_9473 = state_9421__$1;(statearr_9444_9473[1] = 17);
} else
{var statearr_9445_9474 = state_9421__$1;(statearr_9445_9474[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9422 === 15))
{var state_9421__$1 = state_9421;var statearr_9446_9475 = state_9421__$1;(statearr_9446_9475[2] = null);
(statearr_9446_9475[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9422 === 16))
{var inst_9410 = (state_9421[2]);var state_9421__$1 = state_9421;var statearr_9447_9476 = state_9421__$1;(statearr_9447_9476[2] = inst_9410);
(statearr_9447_9476[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9422 === 17))
{var inst_9392 = (state_9421[13]);var inst_9396 = cljs.core.chunk_first.call(null,inst_9392);var inst_9397 = cljs.core.chunk_rest.call(null,inst_9392);var inst_9398 = cljs.core.count.call(null,inst_9396);var inst_9378 = inst_9397;var inst_9379 = inst_9396;var inst_9380 = inst_9398;var inst_9381 = 0;var state_9421__$1 = (function (){var statearr_9448 = state_9421;(statearr_9448[8] = inst_9381);
(statearr_9448[9] = inst_9380);
(statearr_9448[10] = inst_9378);
(statearr_9448[11] = inst_9379);
return statearr_9448;
})();var statearr_9449_9477 = state_9421__$1;(statearr_9449_9477[2] = null);
(statearr_9449_9477[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9422 === 18))
{var inst_9392 = (state_9421[13]);var inst_9401 = cljs.core.first.call(null,inst_9392);var state_9421__$1 = state_9421;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9421__$1,20,out,inst_9401);
} else
{if((state_val_9422 === 19))
{var inst_9407 = (state_9421[2]);var state_9421__$1 = state_9421;var statearr_9450_9478 = state_9421__$1;(statearr_9450_9478[2] = inst_9407);
(statearr_9450_9478[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9422 === 20))
{var inst_9392 = (state_9421[13]);var inst_9403 = (state_9421[2]);var inst_9404 = cljs.core.next.call(null,inst_9392);var inst_9378 = inst_9404;var inst_9379 = null;var inst_9380 = 0;var inst_9381 = 0;var state_9421__$1 = (function (){var statearr_9451 = state_9421;(statearr_9451[15] = inst_9403);
(statearr_9451[8] = inst_9381);
(statearr_9451[9] = inst_9380);
(statearr_9451[10] = inst_9378);
(statearr_9451[11] = inst_9379);
return statearr_9451;
})();var statearr_9452_9479 = state_9421__$1;(statearr_9452_9479[2] = null);
(statearr_9452_9479[1] = 8);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_9456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9456[0] = state_machine__6178__auto__);
(statearr_9456[1] = 1);
return statearr_9456;
});
var state_machine__6178__auto____1 = (function (state_9421){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_9421);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e9457){if((e9457 instanceof Object))
{var ex__6181__auto__ = e9457;var statearr_9458_9480 = state_9421;(statearr_9458_9480[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9421);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9457;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9481 = state_9421;
state_9421 = G__9481;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_9421){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_9421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_9459 = f__6193__auto__.call(null);(statearr_9459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_9459;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6192__auto___9562 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_9541){var state_val_9542 = (state_9541[1]);if((state_val_9542 === 1))
{var state_9541__$1 = state_9541;var statearr_9543_9563 = state_9541__$1;(statearr_9543_9563[2] = null);
(statearr_9543_9563[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9542 === 2))
{var state_9541__$1 = state_9541;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9541__$1,4,from);
} else
{if((state_val_9542 === 3))
{var inst_9539 = (state_9541[2]);var state_9541__$1 = state_9541;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9541__$1,inst_9539);
} else
{if((state_val_9542 === 4))
{var inst_9524 = (state_9541[7]);var inst_9524__$1 = (state_9541[2]);var inst_9525 = (inst_9524__$1 == null);var state_9541__$1 = (function (){var statearr_9544 = state_9541;(statearr_9544[7] = inst_9524__$1);
return statearr_9544;
})();if(cljs.core.truth_(inst_9525))
{var statearr_9545_9564 = state_9541__$1;(statearr_9545_9564[1] = 5);
} else
{var statearr_9546_9565 = state_9541__$1;(statearr_9546_9565[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9542 === 5))
{var state_9541__$1 = state_9541;if(cljs.core.truth_(close_QMARK_))
{var statearr_9547_9566 = state_9541__$1;(statearr_9547_9566[1] = 8);
} else
{var statearr_9548_9567 = state_9541__$1;(statearr_9548_9567[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9542 === 6))
{var inst_9524 = (state_9541[7]);var state_9541__$1 = state_9541;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9541__$1,11,to,inst_9524);
} else
{if((state_val_9542 === 7))
{var inst_9537 = (state_9541[2]);var state_9541__$1 = state_9541;var statearr_9549_9568 = state_9541__$1;(statearr_9549_9568[2] = inst_9537);
(statearr_9549_9568[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9542 === 8))
{var inst_9528 = cljs.core.async.close_BANG_.call(null,to);var state_9541__$1 = state_9541;var statearr_9550_9569 = state_9541__$1;(statearr_9550_9569[2] = inst_9528);
(statearr_9550_9569[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9542 === 9))
{var state_9541__$1 = state_9541;var statearr_9551_9570 = state_9541__$1;(statearr_9551_9570[2] = null);
(statearr_9551_9570[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9542 === 10))
{var inst_9531 = (state_9541[2]);var state_9541__$1 = state_9541;var statearr_9552_9571 = state_9541__$1;(statearr_9552_9571[2] = inst_9531);
(statearr_9552_9571[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9542 === 11))
{var inst_9534 = (state_9541[2]);var state_9541__$1 = (function (){var statearr_9553 = state_9541;(statearr_9553[8] = inst_9534);
return statearr_9553;
})();var statearr_9554_9572 = state_9541__$1;(statearr_9554_9572[2] = null);
(statearr_9554_9572[1] = 2);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_9558 = [null,null,null,null,null,null,null,null,null];(statearr_9558[0] = state_machine__6178__auto__);
(statearr_9558[1] = 1);
return statearr_9558;
});
var state_machine__6178__auto____1 = (function (state_9541){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_9541);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e9559){if((e9559 instanceof Object))
{var ex__6181__auto__ = e9559;var statearr_9560_9573 = state_9541;(statearr_9560_9573[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9541);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9559;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9574 = state_9541;
state_9541 = G__9574;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_9541){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_9541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_9561 = f__6193__auto__.call(null);(statearr_9561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___9562);
return statearr_9561;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6192__auto___9661 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_9639){var state_val_9640 = (state_9639[1]);if((state_val_9640 === 1))
{var state_9639__$1 = state_9639;var statearr_9641_9662 = state_9639__$1;(statearr_9641_9662[2] = null);
(statearr_9641_9662[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9640 === 2))
{var state_9639__$1 = state_9639;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9639__$1,4,ch);
} else
{if((state_val_9640 === 3))
{var inst_9637 = (state_9639[2]);var state_9639__$1 = state_9639;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9639__$1,inst_9637);
} else
{if((state_val_9640 === 4))
{var inst_9620 = (state_9639[7]);var inst_9620__$1 = (state_9639[2]);var inst_9621 = (inst_9620__$1 == null);var state_9639__$1 = (function (){var statearr_9642 = state_9639;(statearr_9642[7] = inst_9620__$1);
return statearr_9642;
})();if(cljs.core.truth_(inst_9621))
{var statearr_9643_9663 = state_9639__$1;(statearr_9643_9663[1] = 5);
} else
{var statearr_9644_9664 = state_9639__$1;(statearr_9644_9664[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9640 === 5))
{var inst_9623 = cljs.core.async.close_BANG_.call(null,tc);var inst_9624 = cljs.core.async.close_BANG_.call(null,fc);var state_9639__$1 = (function (){var statearr_9645 = state_9639;(statearr_9645[8] = inst_9623);
return statearr_9645;
})();var statearr_9646_9665 = state_9639__$1;(statearr_9646_9665[2] = inst_9624);
(statearr_9646_9665[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9640 === 6))
{var inst_9620 = (state_9639[7]);var inst_9626 = p.call(null,inst_9620);var state_9639__$1 = state_9639;if(cljs.core.truth_(inst_9626))
{var statearr_9647_9666 = state_9639__$1;(statearr_9647_9666[1] = 9);
} else
{var statearr_9648_9667 = state_9639__$1;(statearr_9648_9667[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9640 === 7))
{var inst_9635 = (state_9639[2]);var state_9639__$1 = state_9639;var statearr_9649_9668 = state_9639__$1;(statearr_9649_9668[2] = inst_9635);
(statearr_9649_9668[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9640 === 8))
{var inst_9632 = (state_9639[2]);var state_9639__$1 = (function (){var statearr_9650 = state_9639;(statearr_9650[9] = inst_9632);
return statearr_9650;
})();var statearr_9651_9669 = state_9639__$1;(statearr_9651_9669[2] = null);
(statearr_9651_9669[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9640 === 9))
{var state_9639__$1 = state_9639;var statearr_9652_9670 = state_9639__$1;(statearr_9652_9670[2] = tc);
(statearr_9652_9670[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9640 === 10))
{var state_9639__$1 = state_9639;var statearr_9653_9671 = state_9639__$1;(statearr_9653_9671[2] = fc);
(statearr_9653_9671[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9640 === 11))
{var inst_9620 = (state_9639[7]);var inst_9630 = (state_9639[2]);var state_9639__$1 = state_9639;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9639__$1,8,inst_9630,inst_9620);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_9657 = [null,null,null,null,null,null,null,null,null,null];(statearr_9657[0] = state_machine__6178__auto__);
(statearr_9657[1] = 1);
return statearr_9657;
});
var state_machine__6178__auto____1 = (function (state_9639){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_9639);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e9658){if((e9658 instanceof Object))
{var ex__6181__auto__ = e9658;var statearr_9659_9672 = state_9639;(statearr_9659_9672[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9639);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9658;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9673 = state_9639;
state_9639 = G__9673;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_9639){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_9639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_9660 = f__6193__auto__.call(null);(statearr_9660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___9661);
return statearr_9660;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_9720){var state_val_9721 = (state_9720[1]);if((state_val_9721 === 7))
{var inst_9716 = (state_9720[2]);var state_9720__$1 = state_9720;var statearr_9722_9738 = state_9720__$1;(statearr_9722_9738[2] = inst_9716);
(statearr_9722_9738[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9721 === 6))
{var inst_9706 = (state_9720[7]);var inst_9709 = (state_9720[8]);var inst_9713 = f.call(null,inst_9706,inst_9709);var inst_9706__$1 = inst_9713;var state_9720__$1 = (function (){var statearr_9723 = state_9720;(statearr_9723[7] = inst_9706__$1);
return statearr_9723;
})();var statearr_9724_9739 = state_9720__$1;(statearr_9724_9739[2] = null);
(statearr_9724_9739[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9721 === 5))
{var inst_9706 = (state_9720[7]);var state_9720__$1 = state_9720;var statearr_9725_9740 = state_9720__$1;(statearr_9725_9740[2] = inst_9706);
(statearr_9725_9740[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9721 === 4))
{var inst_9709 = (state_9720[8]);var inst_9709__$1 = (state_9720[2]);var inst_9710 = (inst_9709__$1 == null);var state_9720__$1 = (function (){var statearr_9726 = state_9720;(statearr_9726[8] = inst_9709__$1);
return statearr_9726;
})();if(cljs.core.truth_(inst_9710))
{var statearr_9727_9741 = state_9720__$1;(statearr_9727_9741[1] = 5);
} else
{var statearr_9728_9742 = state_9720__$1;(statearr_9728_9742[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9721 === 3))
{var inst_9718 = (state_9720[2]);var state_9720__$1 = state_9720;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9720__$1,inst_9718);
} else
{if((state_val_9721 === 2))
{var state_9720__$1 = state_9720;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9720__$1,4,ch);
} else
{if((state_val_9721 === 1))
{var inst_9706 = init;var state_9720__$1 = (function (){var statearr_9729 = state_9720;(statearr_9729[7] = inst_9706);
return statearr_9729;
})();var statearr_9730_9743 = state_9720__$1;(statearr_9730_9743[2] = null);
(statearr_9730_9743[1] = 2);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_9734 = [null,null,null,null,null,null,null,null,null];(statearr_9734[0] = state_machine__6178__auto__);
(statearr_9734[1] = 1);
return statearr_9734;
});
var state_machine__6178__auto____1 = (function (state_9720){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_9720);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e9735){if((e9735 instanceof Object))
{var ex__6181__auto__ = e9735;var statearr_9736_9744 = state_9720;(statearr_9736_9744[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9720);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9735;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9745 = state_9720;
state_9720 = G__9745;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_9720){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_9720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_9737 = f__6193__auto__.call(null);(statearr_9737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_9737;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6192__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_9807){var state_val_9808 = (state_9807[1]);if((state_val_9808 === 1))
{var inst_9787 = cljs.core.seq.call(null,coll);var inst_9788 = inst_9787;var state_9807__$1 = (function (){var statearr_9809 = state_9807;(statearr_9809[7] = inst_9788);
return statearr_9809;
})();var statearr_9810_9828 = state_9807__$1;(statearr_9810_9828[2] = null);
(statearr_9810_9828[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9808 === 2))
{var inst_9788 = (state_9807[7]);var state_9807__$1 = state_9807;if(cljs.core.truth_(inst_9788))
{var statearr_9811_9829 = state_9807__$1;(statearr_9811_9829[1] = 4);
} else
{var statearr_9812_9830 = state_9807__$1;(statearr_9812_9830[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9808 === 3))
{var inst_9805 = (state_9807[2]);var state_9807__$1 = state_9807;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9807__$1,inst_9805);
} else
{if((state_val_9808 === 4))
{var inst_9788 = (state_9807[7]);var inst_9791 = cljs.core.first.call(null,inst_9788);var state_9807__$1 = state_9807;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9807__$1,7,ch,inst_9791);
} else
{if((state_val_9808 === 5))
{var state_9807__$1 = state_9807;if(cljs.core.truth_(close_QMARK_))
{var statearr_9813_9831 = state_9807__$1;(statearr_9813_9831[1] = 8);
} else
{var statearr_9814_9832 = state_9807__$1;(statearr_9814_9832[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9808 === 6))
{var inst_9803 = (state_9807[2]);var state_9807__$1 = state_9807;var statearr_9815_9833 = state_9807__$1;(statearr_9815_9833[2] = inst_9803);
(statearr_9815_9833[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9808 === 7))
{var inst_9788 = (state_9807[7]);var inst_9793 = (state_9807[2]);var inst_9794 = cljs.core.next.call(null,inst_9788);var inst_9788__$1 = inst_9794;var state_9807__$1 = (function (){var statearr_9816 = state_9807;(statearr_9816[7] = inst_9788__$1);
(statearr_9816[8] = inst_9793);
return statearr_9816;
})();var statearr_9817_9834 = state_9807__$1;(statearr_9817_9834[2] = null);
(statearr_9817_9834[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9808 === 8))
{var inst_9798 = cljs.core.async.close_BANG_.call(null,ch);var state_9807__$1 = state_9807;var statearr_9818_9835 = state_9807__$1;(statearr_9818_9835[2] = inst_9798);
(statearr_9818_9835[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9808 === 9))
{var state_9807__$1 = state_9807;var statearr_9819_9836 = state_9807__$1;(statearr_9819_9836[2] = null);
(statearr_9819_9836[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9808 === 10))
{var inst_9801 = (state_9807[2]);var state_9807__$1 = state_9807;var statearr_9820_9837 = state_9807__$1;(statearr_9820_9837[2] = inst_9801);
(statearr_9820_9837[1] = 6);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_9824 = [null,null,null,null,null,null,null,null,null];(statearr_9824[0] = state_machine__6178__auto__);
(statearr_9824[1] = 1);
return statearr_9824;
});
var state_machine__6178__auto____1 = (function (state_9807){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_9807);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e9825){if((e9825 instanceof Object))
{var ex__6181__auto__ = e9825;var statearr_9826_9838 = state_9807;(statearr_9826_9838[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9807);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9825;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9839 = state_9807;
state_9807 = G__9839;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_9807){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_9807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_9827 = f__6193__auto__.call(null);(statearr_9827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto__);
return statearr_9827;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return c__6192__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj9841 = {};return obj9841;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3431__auto__ = _;if(and__3431__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4070__auto__ = (((_ == null))?null:_);return (function (){var or__3443__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj9843 = {};return obj9843;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10067 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10067 = (function (cs,ch,mult,meta10068){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10068 = meta10068;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10067.cljs$lang$type = true;
cljs.core.async.t10067.cljs$lang$ctorStr = "cljs.core.async/t10067";
cljs.core.async.t10067.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10067");
});})(cs))
;
cljs.core.async.t10067.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10067.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10067.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10067.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10067.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10067.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10067.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10069){var self__ = this;
var _10069__$1 = this;return self__.meta10068;
});})(cs))
;
cljs.core.async.t10067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10069,meta10068__$1){var self__ = this;
var _10069__$1 = this;return (new cljs.core.async.t10067(self__.cs,self__.ch,self__.mult,meta10068__$1));
});})(cs))
;
cljs.core.async.__GT_t10067 = ((function (cs){
return (function __GT_t10067(cs__$1,ch__$1,mult__$1,meta10068){return (new cljs.core.async.t10067(cs__$1,ch__$1,mult__$1,meta10068));
});})(cs))
;
}
return (new cljs.core.async.t10067(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6192__auto___10290 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_10204){var state_val_10205 = (state_10204[1]);if((state_val_10205 === 32))
{var inst_10148 = (state_10204[7]);var inst_10072 = (state_10204[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10204,31,Object,null,30);var inst_10155 = cljs.core.async.put_BANG_.call(null,inst_10148,inst_10072,done);var state_10204__$1 = state_10204;var statearr_10206_10291 = state_10204__$1;(statearr_10206_10291[2] = inst_10155);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10204__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 1))
{var state_10204__$1 = state_10204;var statearr_10207_10292 = state_10204__$1;(statearr_10207_10292[2] = null);
(statearr_10207_10292[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 33))
{var inst_10161 = (state_10204[9]);var inst_10163 = cljs.core.chunked_seq_QMARK_.call(null,inst_10161);var state_10204__$1 = state_10204;if(inst_10163)
{var statearr_10208_10293 = state_10204__$1;(statearr_10208_10293[1] = 36);
} else
{var statearr_10209_10294 = state_10204__$1;(statearr_10209_10294[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 2))
{var state_10204__$1 = state_10204;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10204__$1,4,ch);
} else
{if((state_val_10205 === 34))
{var state_10204__$1 = state_10204;var statearr_10210_10295 = state_10204__$1;(statearr_10210_10295[2] = null);
(statearr_10210_10295[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 3))
{var inst_10202 = (state_10204[2]);var state_10204__$1 = state_10204;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10204__$1,inst_10202);
} else
{if((state_val_10205 === 35))
{var inst_10186 = (state_10204[2]);var state_10204__$1 = state_10204;var statearr_10211_10296 = state_10204__$1;(statearr_10211_10296[2] = inst_10186);
(statearr_10211_10296[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 4))
{var inst_10072 = (state_10204[8]);var inst_10072__$1 = (state_10204[2]);var inst_10073 = (inst_10072__$1 == null);var state_10204__$1 = (function (){var statearr_10212 = state_10204;(statearr_10212[8] = inst_10072__$1);
return statearr_10212;
})();if(cljs.core.truth_(inst_10073))
{var statearr_10213_10297 = state_10204__$1;(statearr_10213_10297[1] = 5);
} else
{var statearr_10214_10298 = state_10204__$1;(statearr_10214_10298[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 36))
{var inst_10161 = (state_10204[9]);var inst_10165 = cljs.core.chunk_first.call(null,inst_10161);var inst_10166 = cljs.core.chunk_rest.call(null,inst_10161);var inst_10167 = cljs.core.count.call(null,inst_10165);var inst_10140 = inst_10166;var inst_10141 = inst_10165;var inst_10142 = inst_10167;var inst_10143 = 0;var state_10204__$1 = (function (){var statearr_10215 = state_10204;(statearr_10215[10] = inst_10141);
(statearr_10215[11] = inst_10142);
(statearr_10215[12] = inst_10140);
(statearr_10215[13] = inst_10143);
return statearr_10215;
})();var statearr_10216_10299 = state_10204__$1;(statearr_10216_10299[2] = null);
(statearr_10216_10299[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 5))
{var inst_10079 = cljs.core.deref.call(null,cs);var inst_10080 = cljs.core.seq.call(null,inst_10079);var inst_10081 = inst_10080;var inst_10082 = null;var inst_10083 = 0;var inst_10084 = 0;var state_10204__$1 = (function (){var statearr_10217 = state_10204;(statearr_10217[14] = inst_10084);
(statearr_10217[15] = inst_10081);
(statearr_10217[16] = inst_10083);
(statearr_10217[17] = inst_10082);
return statearr_10217;
})();var statearr_10218_10300 = state_10204__$1;(statearr_10218_10300[2] = null);
(statearr_10218_10300[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 37))
{var inst_10161 = (state_10204[9]);var inst_10170 = cljs.core.first.call(null,inst_10161);var state_10204__$1 = (function (){var statearr_10219 = state_10204;(statearr_10219[18] = inst_10170);
return statearr_10219;
})();var statearr_10220_10301 = state_10204__$1;(statearr_10220_10301[2] = null);
(statearr_10220_10301[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 6))
{var inst_10132 = (state_10204[19]);var inst_10131 = cljs.core.deref.call(null,cs);var inst_10132__$1 = cljs.core.keys.call(null,inst_10131);var inst_10133 = cljs.core.count.call(null,inst_10132__$1);var inst_10134 = cljs.core.reset_BANG_.call(null,dctr,inst_10133);var inst_10139 = cljs.core.seq.call(null,inst_10132__$1);var inst_10140 = inst_10139;var inst_10141 = null;var inst_10142 = 0;var inst_10143 = 0;var state_10204__$1 = (function (){var statearr_10221 = state_10204;(statearr_10221[20] = inst_10134);
(statearr_10221[19] = inst_10132__$1);
(statearr_10221[10] = inst_10141);
(statearr_10221[11] = inst_10142);
(statearr_10221[12] = inst_10140);
(statearr_10221[13] = inst_10143);
return statearr_10221;
})();var statearr_10222_10302 = state_10204__$1;(statearr_10222_10302[2] = null);
(statearr_10222_10302[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 38))
{var inst_10183 = (state_10204[2]);var state_10204__$1 = state_10204;var statearr_10223_10303 = state_10204__$1;(statearr_10223_10303[2] = inst_10183);
(statearr_10223_10303[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 7))
{var inst_10200 = (state_10204[2]);var state_10204__$1 = state_10204;var statearr_10224_10304 = state_10204__$1;(statearr_10224_10304[2] = inst_10200);
(statearr_10224_10304[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 39))
{var inst_10161 = (state_10204[9]);var inst_10179 = (state_10204[2]);var inst_10180 = cljs.core.next.call(null,inst_10161);var inst_10140 = inst_10180;var inst_10141 = null;var inst_10142 = 0;var inst_10143 = 0;var state_10204__$1 = (function (){var statearr_10225 = state_10204;(statearr_10225[21] = inst_10179);
(statearr_10225[10] = inst_10141);
(statearr_10225[11] = inst_10142);
(statearr_10225[12] = inst_10140);
(statearr_10225[13] = inst_10143);
return statearr_10225;
})();var statearr_10226_10305 = state_10204__$1;(statearr_10226_10305[2] = null);
(statearr_10226_10305[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 8))
{var inst_10084 = (state_10204[14]);var inst_10083 = (state_10204[16]);var inst_10086 = (inst_10084 < inst_10083);var inst_10087 = inst_10086;var state_10204__$1 = state_10204;if(cljs.core.truth_(inst_10087))
{var statearr_10227_10306 = state_10204__$1;(statearr_10227_10306[1] = 10);
} else
{var statearr_10228_10307 = state_10204__$1;(statearr_10228_10307[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 40))
{var inst_10170 = (state_10204[18]);var inst_10171 = (state_10204[2]);var inst_10172 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10173 = cljs.core.async.untap_STAR_.call(null,m,inst_10170);var state_10204__$1 = (function (){var statearr_10229 = state_10204;(statearr_10229[22] = inst_10172);
(statearr_10229[23] = inst_10171);
return statearr_10229;
})();var statearr_10230_10308 = state_10204__$1;(statearr_10230_10308[2] = inst_10173);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10204__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 9))
{var inst_10129 = (state_10204[2]);var state_10204__$1 = state_10204;var statearr_10231_10309 = state_10204__$1;(statearr_10231_10309[2] = inst_10129);
(statearr_10231_10309[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 41))
{var inst_10170 = (state_10204[18]);var inst_10072 = (state_10204[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10204,40,Object,null,39);var inst_10177 = cljs.core.async.put_BANG_.call(null,inst_10170,inst_10072,done);var state_10204__$1 = state_10204;var statearr_10232_10310 = state_10204__$1;(statearr_10232_10310[2] = inst_10177);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10204__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 10))
{var inst_10084 = (state_10204[14]);var inst_10082 = (state_10204[17]);var inst_10090 = cljs.core._nth.call(null,inst_10082,inst_10084);var inst_10091 = cljs.core.nth.call(null,inst_10090,0,null);var inst_10092 = cljs.core.nth.call(null,inst_10090,1,null);var state_10204__$1 = (function (){var statearr_10233 = state_10204;(statearr_10233[24] = inst_10091);
return statearr_10233;
})();if(cljs.core.truth_(inst_10092))
{var statearr_10234_10311 = state_10204__$1;(statearr_10234_10311[1] = 13);
} else
{var statearr_10235_10312 = state_10204__$1;(statearr_10235_10312[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 42))
{var state_10204__$1 = state_10204;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10204__$1,45,dchan);
} else
{if((state_val_10205 === 11))
{var inst_10081 = (state_10204[15]);var inst_10101 = (state_10204[25]);var inst_10101__$1 = cljs.core.seq.call(null,inst_10081);var state_10204__$1 = (function (){var statearr_10236 = state_10204;(statearr_10236[25] = inst_10101__$1);
return statearr_10236;
})();if(inst_10101__$1)
{var statearr_10237_10313 = state_10204__$1;(statearr_10237_10313[1] = 16);
} else
{var statearr_10238_10314 = state_10204__$1;(statearr_10238_10314[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 43))
{var state_10204__$1 = state_10204;var statearr_10239_10315 = state_10204__$1;(statearr_10239_10315[2] = null);
(statearr_10239_10315[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 12))
{var inst_10127 = (state_10204[2]);var state_10204__$1 = state_10204;var statearr_10240_10316 = state_10204__$1;(statearr_10240_10316[2] = inst_10127);
(statearr_10240_10316[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 44))
{var inst_10197 = (state_10204[2]);var state_10204__$1 = (function (){var statearr_10241 = state_10204;(statearr_10241[26] = inst_10197);
return statearr_10241;
})();var statearr_10242_10317 = state_10204__$1;(statearr_10242_10317[2] = null);
(statearr_10242_10317[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 13))
{var inst_10091 = (state_10204[24]);var inst_10094 = cljs.core.async.close_BANG_.call(null,inst_10091);var state_10204__$1 = state_10204;var statearr_10243_10318 = state_10204__$1;(statearr_10243_10318[2] = inst_10094);
(statearr_10243_10318[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 45))
{var inst_10194 = (state_10204[2]);var state_10204__$1 = state_10204;var statearr_10247_10319 = state_10204__$1;(statearr_10247_10319[2] = inst_10194);
(statearr_10247_10319[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 14))
{var state_10204__$1 = state_10204;var statearr_10248_10320 = state_10204__$1;(statearr_10248_10320[2] = null);
(statearr_10248_10320[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 15))
{var inst_10084 = (state_10204[14]);var inst_10081 = (state_10204[15]);var inst_10083 = (state_10204[16]);var inst_10082 = (state_10204[17]);var inst_10097 = (state_10204[2]);var inst_10098 = (inst_10084 + 1);var tmp10244 = inst_10081;var tmp10245 = inst_10083;var tmp10246 = inst_10082;var inst_10081__$1 = tmp10244;var inst_10082__$1 = tmp10246;var inst_10083__$1 = tmp10245;var inst_10084__$1 = inst_10098;var state_10204__$1 = (function (){var statearr_10249 = state_10204;(statearr_10249[14] = inst_10084__$1);
(statearr_10249[15] = inst_10081__$1);
(statearr_10249[16] = inst_10083__$1);
(statearr_10249[17] = inst_10082__$1);
(statearr_10249[27] = inst_10097);
return statearr_10249;
})();var statearr_10250_10321 = state_10204__$1;(statearr_10250_10321[2] = null);
(statearr_10250_10321[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 16))
{var inst_10101 = (state_10204[25]);var inst_10103 = cljs.core.chunked_seq_QMARK_.call(null,inst_10101);var state_10204__$1 = state_10204;if(inst_10103)
{var statearr_10251_10322 = state_10204__$1;(statearr_10251_10322[1] = 19);
} else
{var statearr_10252_10323 = state_10204__$1;(statearr_10252_10323[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 17))
{var state_10204__$1 = state_10204;var statearr_10253_10324 = state_10204__$1;(statearr_10253_10324[2] = null);
(statearr_10253_10324[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 18))
{var inst_10125 = (state_10204[2]);var state_10204__$1 = state_10204;var statearr_10254_10325 = state_10204__$1;(statearr_10254_10325[2] = inst_10125);
(statearr_10254_10325[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 19))
{var inst_10101 = (state_10204[25]);var inst_10105 = cljs.core.chunk_first.call(null,inst_10101);var inst_10106 = cljs.core.chunk_rest.call(null,inst_10101);var inst_10107 = cljs.core.count.call(null,inst_10105);var inst_10081 = inst_10106;var inst_10082 = inst_10105;var inst_10083 = inst_10107;var inst_10084 = 0;var state_10204__$1 = (function (){var statearr_10255 = state_10204;(statearr_10255[14] = inst_10084);
(statearr_10255[15] = inst_10081);
(statearr_10255[16] = inst_10083);
(statearr_10255[17] = inst_10082);
return statearr_10255;
})();var statearr_10256_10326 = state_10204__$1;(statearr_10256_10326[2] = null);
(statearr_10256_10326[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 20))
{var inst_10101 = (state_10204[25]);var inst_10111 = cljs.core.first.call(null,inst_10101);var inst_10112 = cljs.core.nth.call(null,inst_10111,0,null);var inst_10113 = cljs.core.nth.call(null,inst_10111,1,null);var state_10204__$1 = (function (){var statearr_10257 = state_10204;(statearr_10257[28] = inst_10112);
return statearr_10257;
})();if(cljs.core.truth_(inst_10113))
{var statearr_10258_10327 = state_10204__$1;(statearr_10258_10327[1] = 22);
} else
{var statearr_10259_10328 = state_10204__$1;(statearr_10259_10328[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 21))
{var inst_10122 = (state_10204[2]);var state_10204__$1 = state_10204;var statearr_10260_10329 = state_10204__$1;(statearr_10260_10329[2] = inst_10122);
(statearr_10260_10329[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 22))
{var inst_10112 = (state_10204[28]);var inst_10115 = cljs.core.async.close_BANG_.call(null,inst_10112);var state_10204__$1 = state_10204;var statearr_10261_10330 = state_10204__$1;(statearr_10261_10330[2] = inst_10115);
(statearr_10261_10330[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 23))
{var state_10204__$1 = state_10204;var statearr_10262_10331 = state_10204__$1;(statearr_10262_10331[2] = null);
(statearr_10262_10331[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 24))
{var inst_10101 = (state_10204[25]);var inst_10118 = (state_10204[2]);var inst_10119 = cljs.core.next.call(null,inst_10101);var inst_10081 = inst_10119;var inst_10082 = null;var inst_10083 = 0;var inst_10084 = 0;var state_10204__$1 = (function (){var statearr_10263 = state_10204;(statearr_10263[14] = inst_10084);
(statearr_10263[15] = inst_10081);
(statearr_10263[16] = inst_10083);
(statearr_10263[17] = inst_10082);
(statearr_10263[29] = inst_10118);
return statearr_10263;
})();var statearr_10264_10332 = state_10204__$1;(statearr_10264_10332[2] = null);
(statearr_10264_10332[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 25))
{var inst_10142 = (state_10204[11]);var inst_10143 = (state_10204[13]);var inst_10145 = (inst_10143 < inst_10142);var inst_10146 = inst_10145;var state_10204__$1 = state_10204;if(cljs.core.truth_(inst_10146))
{var statearr_10265_10333 = state_10204__$1;(statearr_10265_10333[1] = 27);
} else
{var statearr_10266_10334 = state_10204__$1;(statearr_10266_10334[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 26))
{var inst_10132 = (state_10204[19]);var inst_10190 = (state_10204[2]);var inst_10191 = cljs.core.seq.call(null,inst_10132);var state_10204__$1 = (function (){var statearr_10267 = state_10204;(statearr_10267[30] = inst_10190);
return statearr_10267;
})();if(inst_10191)
{var statearr_10268_10335 = state_10204__$1;(statearr_10268_10335[1] = 42);
} else
{var statearr_10269_10336 = state_10204__$1;(statearr_10269_10336[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 27))
{var inst_10141 = (state_10204[10]);var inst_10143 = (state_10204[13]);var inst_10148 = cljs.core._nth.call(null,inst_10141,inst_10143);var state_10204__$1 = (function (){var statearr_10270 = state_10204;(statearr_10270[7] = inst_10148);
return statearr_10270;
})();var statearr_10271_10337 = state_10204__$1;(statearr_10271_10337[2] = null);
(statearr_10271_10337[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 28))
{var inst_10161 = (state_10204[9]);var inst_10140 = (state_10204[12]);var inst_10161__$1 = cljs.core.seq.call(null,inst_10140);var state_10204__$1 = (function (){var statearr_10275 = state_10204;(statearr_10275[9] = inst_10161__$1);
return statearr_10275;
})();if(inst_10161__$1)
{var statearr_10276_10338 = state_10204__$1;(statearr_10276_10338[1] = 33);
} else
{var statearr_10277_10339 = state_10204__$1;(statearr_10277_10339[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 29))
{var inst_10188 = (state_10204[2]);var state_10204__$1 = state_10204;var statearr_10278_10340 = state_10204__$1;(statearr_10278_10340[2] = inst_10188);
(statearr_10278_10340[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 30))
{var inst_10141 = (state_10204[10]);var inst_10142 = (state_10204[11]);var inst_10140 = (state_10204[12]);var inst_10143 = (state_10204[13]);var inst_10157 = (state_10204[2]);var inst_10158 = (inst_10143 + 1);var tmp10272 = inst_10141;var tmp10273 = inst_10142;var tmp10274 = inst_10140;var inst_10140__$1 = tmp10274;var inst_10141__$1 = tmp10272;var inst_10142__$1 = tmp10273;var inst_10143__$1 = inst_10158;var state_10204__$1 = (function (){var statearr_10279 = state_10204;(statearr_10279[10] = inst_10141__$1);
(statearr_10279[11] = inst_10142__$1);
(statearr_10279[12] = inst_10140__$1);
(statearr_10279[31] = inst_10157);
(statearr_10279[13] = inst_10143__$1);
return statearr_10279;
})();var statearr_10280_10341 = state_10204__$1;(statearr_10280_10341[2] = null);
(statearr_10280_10341[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10205 === 31))
{var inst_10148 = (state_10204[7]);var inst_10149 = (state_10204[2]);var inst_10150 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10151 = cljs.core.async.untap_STAR_.call(null,m,inst_10148);var state_10204__$1 = (function (){var statearr_10281 = state_10204;(statearr_10281[32] = inst_10149);
(statearr_10281[33] = inst_10150);
return statearr_10281;
})();var statearr_10282_10342 = state_10204__$1;(statearr_10282_10342[2] = inst_10151);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10204__$1);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_10286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10286[0] = state_machine__6178__auto__);
(statearr_10286[1] = 1);
return statearr_10286;
});
var state_machine__6178__auto____1 = (function (state_10204){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10204);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10287){if((e10287 instanceof Object))
{var ex__6181__auto__ = e10287;var statearr_10288_10343 = state_10204;(statearr_10288_10343[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10204);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10287;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10344 = state_10204;
state_10204 = G__10344;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10204){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_10289 = f__6193__auto__.call(null);(statearr_10289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___10290);
return statearr_10289;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj10346 = {};return obj10346;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t10456 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10456 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta10457){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta10457 = meta10457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10456.cljs$lang$type = true;
cljs.core.async.t10456.cljs$lang$ctorStr = "cljs.core.async/t10456";
cljs.core.async.t10456.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10456");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10456.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t10456.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10456.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10456.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10456.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10456.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10456.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10456.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10456.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10458){var self__ = this;
var _10458__$1 = this;return self__.meta10457;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10458,meta10457__$1){var self__ = this;
var _10458__$1 = this;return (new cljs.core.async.t10456(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta10457__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t10456 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t10456(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10457){return (new cljs.core.async.t10456(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10457));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t10456(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6192__auto___10565 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_10523){var state_val_10524 = (state_10523[1]);if((state_val_10524 === 1))
{var inst_10462 = (state_10523[7]);var inst_10462__$1 = calc_state.call(null);var inst_10463 = cljs.core.seq_QMARK_.call(null,inst_10462__$1);var state_10523__$1 = (function (){var statearr_10525 = state_10523;(statearr_10525[7] = inst_10462__$1);
return statearr_10525;
})();if(inst_10463)
{var statearr_10526_10566 = state_10523__$1;(statearr_10526_10566[1] = 2);
} else
{var statearr_10527_10567 = state_10523__$1;(statearr_10527_10567[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10524 === 2))
{var inst_10462 = (state_10523[7]);var inst_10465 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10462);var state_10523__$1 = state_10523;var statearr_10528_10568 = state_10523__$1;(statearr_10528_10568[2] = inst_10465);
(statearr_10528_10568[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10524 === 3))
{var inst_10462 = (state_10523[7]);var state_10523__$1 = state_10523;var statearr_10529_10569 = state_10523__$1;(statearr_10529_10569[2] = inst_10462);
(statearr_10529_10569[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10524 === 4))
{var inst_10462 = (state_10523[7]);var inst_10468 = (state_10523[2]);var inst_10469 = cljs.core.get.call(null,inst_10468,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10470 = cljs.core.get.call(null,inst_10468,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10471 = cljs.core.get.call(null,inst_10468,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_10472 = inst_10462;var state_10523__$1 = (function (){var statearr_10530 = state_10523;(statearr_10530[8] = inst_10469);
(statearr_10530[9] = inst_10471);
(statearr_10530[10] = inst_10472);
(statearr_10530[11] = inst_10470);
return statearr_10530;
})();var statearr_10531_10570 = state_10523__$1;(statearr_10531_10570[2] = null);
(statearr_10531_10570[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10524 === 5))
{var inst_10472 = (state_10523[10]);var inst_10475 = cljs.core.seq_QMARK_.call(null,inst_10472);var state_10523__$1 = state_10523;if(inst_10475)
{var statearr_10532_10571 = state_10523__$1;(statearr_10532_10571[1] = 7);
} else
{var statearr_10533_10572 = state_10523__$1;(statearr_10533_10572[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10524 === 6))
{var inst_10521 = (state_10523[2]);var state_10523__$1 = state_10523;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10523__$1,inst_10521);
} else
{if((state_val_10524 === 7))
{var inst_10472 = (state_10523[10]);var inst_10477 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10472);var state_10523__$1 = state_10523;var statearr_10534_10573 = state_10523__$1;(statearr_10534_10573[2] = inst_10477);
(statearr_10534_10573[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10524 === 8))
{var inst_10472 = (state_10523[10]);var state_10523__$1 = state_10523;var statearr_10535_10574 = state_10523__$1;(statearr_10535_10574[2] = inst_10472);
(statearr_10535_10574[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10524 === 9))
{var inst_10480 = (state_10523[12]);var inst_10480__$1 = (state_10523[2]);var inst_10481 = cljs.core.get.call(null,inst_10480__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_10482 = cljs.core.get.call(null,inst_10480__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_10483 = cljs.core.get.call(null,inst_10480__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_10523__$1 = (function (){var statearr_10536 = state_10523;(statearr_10536[13] = inst_10482);
(statearr_10536[14] = inst_10483);
(statearr_10536[12] = inst_10480__$1);
return statearr_10536;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10523__$1,10,inst_10481);
} else
{if((state_val_10524 === 10))
{var inst_10488 = (state_10523[15]);var inst_10487 = (state_10523[16]);var inst_10486 = (state_10523[2]);var inst_10487__$1 = cljs.core.nth.call(null,inst_10486,0,null);var inst_10488__$1 = cljs.core.nth.call(null,inst_10486,1,null);var inst_10489 = (inst_10487__$1 == null);var inst_10490 = cljs.core._EQ_.call(null,inst_10488__$1,change);var inst_10491 = (inst_10489) || (inst_10490);var state_10523__$1 = (function (){var statearr_10537 = state_10523;(statearr_10537[15] = inst_10488__$1);
(statearr_10537[16] = inst_10487__$1);
return statearr_10537;
})();if(cljs.core.truth_(inst_10491))
{var statearr_10538_10575 = state_10523__$1;(statearr_10538_10575[1] = 11);
} else
{var statearr_10539_10576 = state_10523__$1;(statearr_10539_10576[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10524 === 11))
{var inst_10487 = (state_10523[16]);var inst_10493 = (inst_10487 == null);var state_10523__$1 = state_10523;if(cljs.core.truth_(inst_10493))
{var statearr_10540_10577 = state_10523__$1;(statearr_10540_10577[1] = 14);
} else
{var statearr_10541_10578 = state_10523__$1;(statearr_10541_10578[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10524 === 12))
{var inst_10483 = (state_10523[14]);var inst_10488 = (state_10523[15]);var inst_10502 = (state_10523[17]);var inst_10502__$1 = inst_10483.call(null,inst_10488);var state_10523__$1 = (function (){var statearr_10542 = state_10523;(statearr_10542[17] = inst_10502__$1);
return statearr_10542;
})();if(cljs.core.truth_(inst_10502__$1))
{var statearr_10543_10579 = state_10523__$1;(statearr_10543_10579[1] = 17);
} else
{var statearr_10544_10580 = state_10523__$1;(statearr_10544_10580[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10524 === 13))
{var inst_10519 = (state_10523[2]);var state_10523__$1 = state_10523;var statearr_10545_10581 = state_10523__$1;(statearr_10545_10581[2] = inst_10519);
(statearr_10545_10581[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10524 === 14))
{var inst_10488 = (state_10523[15]);var inst_10495 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10488);var state_10523__$1 = state_10523;var statearr_10546_10582 = state_10523__$1;(statearr_10546_10582[2] = inst_10495);
(statearr_10546_10582[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10524 === 15))
{var state_10523__$1 = state_10523;var statearr_10547_10583 = state_10523__$1;(statearr_10547_10583[2] = null);
(statearr_10547_10583[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10524 === 16))
{var inst_10498 = (state_10523[2]);var inst_10499 = calc_state.call(null);var inst_10472 = inst_10499;var state_10523__$1 = (function (){var statearr_10548 = state_10523;(statearr_10548[18] = inst_10498);
(statearr_10548[10] = inst_10472);
return statearr_10548;
})();var statearr_10549_10584 = state_10523__$1;(statearr_10549_10584[2] = null);
(statearr_10549_10584[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10524 === 17))
{var inst_10502 = (state_10523[17]);var state_10523__$1 = state_10523;var statearr_10550_10585 = state_10523__$1;(statearr_10550_10585[2] = inst_10502);
(statearr_10550_10585[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10524 === 18))
{var inst_10482 = (state_10523[13]);var inst_10483 = (state_10523[14]);var inst_10488 = (state_10523[15]);var inst_10505 = cljs.core.empty_QMARK_.call(null,inst_10483);var inst_10506 = inst_10482.call(null,inst_10488);var inst_10507 = cljs.core.not.call(null,inst_10506);var inst_10508 = (inst_10505) && (inst_10507);var state_10523__$1 = state_10523;var statearr_10551_10586 = state_10523__$1;(statearr_10551_10586[2] = inst_10508);
(statearr_10551_10586[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10524 === 19))
{var inst_10510 = (state_10523[2]);var state_10523__$1 = state_10523;if(cljs.core.truth_(inst_10510))
{var statearr_10552_10587 = state_10523__$1;(statearr_10552_10587[1] = 20);
} else
{var statearr_10553_10588 = state_10523__$1;(statearr_10553_10588[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10524 === 20))
{var inst_10487 = (state_10523[16]);var state_10523__$1 = state_10523;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10523__$1,23,out,inst_10487);
} else
{if((state_val_10524 === 21))
{var state_10523__$1 = state_10523;var statearr_10554_10589 = state_10523__$1;(statearr_10554_10589[2] = null);
(statearr_10554_10589[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10524 === 22))
{var inst_10480 = (state_10523[12]);var inst_10516 = (state_10523[2]);var inst_10472 = inst_10480;var state_10523__$1 = (function (){var statearr_10555 = state_10523;(statearr_10555[19] = inst_10516);
(statearr_10555[10] = inst_10472);
return statearr_10555;
})();var statearr_10556_10590 = state_10523__$1;(statearr_10556_10590[2] = null);
(statearr_10556_10590[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10524 === 23))
{var inst_10513 = (state_10523[2]);var state_10523__$1 = state_10523;var statearr_10557_10591 = state_10523__$1;(statearr_10557_10591[2] = inst_10513);
(statearr_10557_10591[1] = 22);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_10561 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10561[0] = state_machine__6178__auto__);
(statearr_10561[1] = 1);
return statearr_10561;
});
var state_machine__6178__auto____1 = (function (state_10523){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10523);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10562){if((e10562 instanceof Object))
{var ex__6181__auto__ = e10562;var statearr_10563_10592 = state_10523;(statearr_10563_10592[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10523);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10562;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10593 = state_10523;
state_10523 = G__10593;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10523){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_10564 = f__6193__auto__.call(null);(statearr_10564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___10565);
return statearr_10564;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj10595 = {};return obj10595;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3443__auto__,mults){
return (function (p1__10596_SHARP_){if(cljs.core.truth_(p1__10596_SHARP_.call(null,topic)))
{return p1__10596_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__10596_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t10721 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10721 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta10722){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta10722 = meta10722;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10721.cljs$lang$type = true;
cljs.core.async.t10721.cljs$lang$ctorStr = "cljs.core.async/t10721";
cljs.core.async.t10721.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t10721");
});})(mults,ensure_mult))
;
cljs.core.async.t10721.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t10721.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t10721.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t10721.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t10721.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t10721.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10721.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t10721.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10723){var self__ = this;
var _10723__$1 = this;return self__.meta10722;
});})(mults,ensure_mult))
;
cljs.core.async.t10721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10723,meta10722__$1){var self__ = this;
var _10723__$1 = this;return (new cljs.core.async.t10721(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta10722__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t10721 = ((function (mults,ensure_mult){
return (function __GT_t10721(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10722){return (new cljs.core.async.t10721(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10722));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t10721(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6192__auto___10845 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_10797){var state_val_10798 = (state_10797[1]);if((state_val_10798 === 1))
{var state_10797__$1 = state_10797;var statearr_10799_10846 = state_10797__$1;(statearr_10799_10846[2] = null);
(statearr_10799_10846[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10798 === 2))
{var state_10797__$1 = state_10797;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10797__$1,4,ch);
} else
{if((state_val_10798 === 3))
{var inst_10795 = (state_10797[2]);var state_10797__$1 = state_10797;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10797__$1,inst_10795);
} else
{if((state_val_10798 === 4))
{var inst_10726 = (state_10797[7]);var inst_10726__$1 = (state_10797[2]);var inst_10727 = (inst_10726__$1 == null);var state_10797__$1 = (function (){var statearr_10800 = state_10797;(statearr_10800[7] = inst_10726__$1);
return statearr_10800;
})();if(cljs.core.truth_(inst_10727))
{var statearr_10801_10847 = state_10797__$1;(statearr_10801_10847[1] = 5);
} else
{var statearr_10802_10848 = state_10797__$1;(statearr_10802_10848[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10798 === 5))
{var inst_10733 = cljs.core.deref.call(null,mults);var inst_10734 = cljs.core.vals.call(null,inst_10733);var inst_10735 = cljs.core.seq.call(null,inst_10734);var inst_10736 = inst_10735;var inst_10737 = null;var inst_10738 = 0;var inst_10739 = 0;var state_10797__$1 = (function (){var statearr_10803 = state_10797;(statearr_10803[8] = inst_10737);
(statearr_10803[9] = inst_10736);
(statearr_10803[10] = inst_10738);
(statearr_10803[11] = inst_10739);
return statearr_10803;
})();var statearr_10804_10849 = state_10797__$1;(statearr_10804_10849[2] = null);
(statearr_10804_10849[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10798 === 6))
{var inst_10726 = (state_10797[7]);var inst_10774 = (state_10797[12]);var inst_10776 = (state_10797[13]);var inst_10774__$1 = topic_fn.call(null,inst_10726);var inst_10775 = cljs.core.deref.call(null,mults);var inst_10776__$1 = cljs.core.get.call(null,inst_10775,inst_10774__$1);var state_10797__$1 = (function (){var statearr_10805 = state_10797;(statearr_10805[12] = inst_10774__$1);
(statearr_10805[13] = inst_10776__$1);
return statearr_10805;
})();if(cljs.core.truth_(inst_10776__$1))
{var statearr_10806_10850 = state_10797__$1;(statearr_10806_10850[1] = 19);
} else
{var statearr_10807_10851 = state_10797__$1;(statearr_10807_10851[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10798 === 7))
{var inst_10793 = (state_10797[2]);var state_10797__$1 = state_10797;var statearr_10808_10852 = state_10797__$1;(statearr_10808_10852[2] = inst_10793);
(statearr_10808_10852[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10798 === 8))
{var inst_10738 = (state_10797[10]);var inst_10739 = (state_10797[11]);var inst_10741 = (inst_10739 < inst_10738);var inst_10742 = inst_10741;var state_10797__$1 = state_10797;if(cljs.core.truth_(inst_10742))
{var statearr_10812_10853 = state_10797__$1;(statearr_10812_10853[1] = 10);
} else
{var statearr_10813_10854 = state_10797__$1;(statearr_10813_10854[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10798 === 9))
{var inst_10772 = (state_10797[2]);var state_10797__$1 = state_10797;var statearr_10814_10855 = state_10797__$1;(statearr_10814_10855[2] = inst_10772);
(statearr_10814_10855[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10798 === 10))
{var inst_10737 = (state_10797[8]);var inst_10736 = (state_10797[9]);var inst_10738 = (state_10797[10]);var inst_10739 = (state_10797[11]);var inst_10744 = cljs.core._nth.call(null,inst_10737,inst_10739);var inst_10745 = cljs.core.async.muxch_STAR_.call(null,inst_10744);var inst_10746 = cljs.core.async.close_BANG_.call(null,inst_10745);var inst_10747 = (inst_10739 + 1);var tmp10809 = inst_10737;var tmp10810 = inst_10736;var tmp10811 = inst_10738;var inst_10736__$1 = tmp10810;var inst_10737__$1 = tmp10809;var inst_10738__$1 = tmp10811;var inst_10739__$1 = inst_10747;var state_10797__$1 = (function (){var statearr_10815 = state_10797;(statearr_10815[8] = inst_10737__$1);
(statearr_10815[9] = inst_10736__$1);
(statearr_10815[10] = inst_10738__$1);
(statearr_10815[11] = inst_10739__$1);
(statearr_10815[14] = inst_10746);
return statearr_10815;
})();var statearr_10816_10856 = state_10797__$1;(statearr_10816_10856[2] = null);
(statearr_10816_10856[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10798 === 11))
{var inst_10736 = (state_10797[9]);var inst_10750 = (state_10797[15]);var inst_10750__$1 = cljs.core.seq.call(null,inst_10736);var state_10797__$1 = (function (){var statearr_10817 = state_10797;(statearr_10817[15] = inst_10750__$1);
return statearr_10817;
})();if(inst_10750__$1)
{var statearr_10818_10857 = state_10797__$1;(statearr_10818_10857[1] = 13);
} else
{var statearr_10819_10858 = state_10797__$1;(statearr_10819_10858[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10798 === 12))
{var inst_10770 = (state_10797[2]);var state_10797__$1 = state_10797;var statearr_10820_10859 = state_10797__$1;(statearr_10820_10859[2] = inst_10770);
(statearr_10820_10859[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10798 === 13))
{var inst_10750 = (state_10797[15]);var inst_10752 = cljs.core.chunked_seq_QMARK_.call(null,inst_10750);var state_10797__$1 = state_10797;if(inst_10752)
{var statearr_10821_10860 = state_10797__$1;(statearr_10821_10860[1] = 16);
} else
{var statearr_10822_10861 = state_10797__$1;(statearr_10822_10861[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10798 === 14))
{var state_10797__$1 = state_10797;var statearr_10823_10862 = state_10797__$1;(statearr_10823_10862[2] = null);
(statearr_10823_10862[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10798 === 15))
{var inst_10768 = (state_10797[2]);var state_10797__$1 = state_10797;var statearr_10824_10863 = state_10797__$1;(statearr_10824_10863[2] = inst_10768);
(statearr_10824_10863[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10798 === 16))
{var inst_10750 = (state_10797[15]);var inst_10754 = cljs.core.chunk_first.call(null,inst_10750);var inst_10755 = cljs.core.chunk_rest.call(null,inst_10750);var inst_10756 = cljs.core.count.call(null,inst_10754);var inst_10736 = inst_10755;var inst_10737 = inst_10754;var inst_10738 = inst_10756;var inst_10739 = 0;var state_10797__$1 = (function (){var statearr_10825 = state_10797;(statearr_10825[8] = inst_10737);
(statearr_10825[9] = inst_10736);
(statearr_10825[10] = inst_10738);
(statearr_10825[11] = inst_10739);
return statearr_10825;
})();var statearr_10826_10864 = state_10797__$1;(statearr_10826_10864[2] = null);
(statearr_10826_10864[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10798 === 17))
{var inst_10750 = (state_10797[15]);var inst_10759 = cljs.core.first.call(null,inst_10750);var inst_10760 = cljs.core.async.muxch_STAR_.call(null,inst_10759);var inst_10761 = cljs.core.async.close_BANG_.call(null,inst_10760);var inst_10762 = cljs.core.next.call(null,inst_10750);var inst_10736 = inst_10762;var inst_10737 = null;var inst_10738 = 0;var inst_10739 = 0;var state_10797__$1 = (function (){var statearr_10827 = state_10797;(statearr_10827[8] = inst_10737);
(statearr_10827[9] = inst_10736);
(statearr_10827[10] = inst_10738);
(statearr_10827[11] = inst_10739);
(statearr_10827[16] = inst_10761);
return statearr_10827;
})();var statearr_10828_10865 = state_10797__$1;(statearr_10828_10865[2] = null);
(statearr_10828_10865[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10798 === 18))
{var inst_10765 = (state_10797[2]);var state_10797__$1 = state_10797;var statearr_10829_10866 = state_10797__$1;(statearr_10829_10866[2] = inst_10765);
(statearr_10829_10866[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10798 === 19))
{var state_10797__$1 = state_10797;var statearr_10830_10867 = state_10797__$1;(statearr_10830_10867[2] = null);
(statearr_10830_10867[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10798 === 20))
{var state_10797__$1 = state_10797;var statearr_10831_10868 = state_10797__$1;(statearr_10831_10868[2] = null);
(statearr_10831_10868[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10798 === 21))
{var inst_10790 = (state_10797[2]);var state_10797__$1 = (function (){var statearr_10832 = state_10797;(statearr_10832[17] = inst_10790);
return statearr_10832;
})();var statearr_10833_10869 = state_10797__$1;(statearr_10833_10869[2] = null);
(statearr_10833_10869[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10798 === 22))
{var inst_10787 = (state_10797[2]);var state_10797__$1 = state_10797;var statearr_10834_10870 = state_10797__$1;(statearr_10834_10870[2] = inst_10787);
(statearr_10834_10870[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10798 === 23))
{var inst_10774 = (state_10797[12]);var inst_10778 = (state_10797[2]);var inst_10779 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10774);var state_10797__$1 = (function (){var statearr_10835 = state_10797;(statearr_10835[18] = inst_10778);
return statearr_10835;
})();var statearr_10836_10871 = state_10797__$1;(statearr_10836_10871[2] = inst_10779);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10797__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10798 === 24))
{var inst_10726 = (state_10797[7]);var inst_10776 = (state_10797[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10797,23,Object,null,22);var inst_10783 = cljs.core.async.muxch_STAR_.call(null,inst_10776);var state_10797__$1 = state_10797;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10797__$1,25,inst_10783,inst_10726);
} else
{if((state_val_10798 === 25))
{var inst_10785 = (state_10797[2]);var state_10797__$1 = state_10797;var statearr_10837_10872 = state_10797__$1;(statearr_10837_10872[2] = inst_10785);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10797__$1);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_10841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10841[0] = state_machine__6178__auto__);
(statearr_10841[1] = 1);
return statearr_10841;
});
var state_machine__6178__auto____1 = (function (state_10797){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10797);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e10842){if((e10842 instanceof Object))
{var ex__6181__auto__ = e10842;var statearr_10843_10873 = state_10797;(statearr_10843_10873[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10797);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10842;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10874 = state_10797;
state_10797 = G__10874;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10797){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_10844 = f__6193__auto__.call(null);(statearr_10844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___10845);
return statearr_10844;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6192__auto___11011 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_10981){var state_val_10982 = (state_10981[1]);if((state_val_10982 === 1))
{var state_10981__$1 = state_10981;var statearr_10983_11012 = state_10981__$1;(statearr_10983_11012[2] = null);
(statearr_10983_11012[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10982 === 2))
{var inst_10944 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_10945 = 0;var state_10981__$1 = (function (){var statearr_10984 = state_10981;(statearr_10984[7] = inst_10944);
(statearr_10984[8] = inst_10945);
return statearr_10984;
})();var statearr_10985_11013 = state_10981__$1;(statearr_10985_11013[2] = null);
(statearr_10985_11013[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10982 === 3))
{var inst_10979 = (state_10981[2]);var state_10981__$1 = state_10981;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10981__$1,inst_10979);
} else
{if((state_val_10982 === 4))
{var inst_10945 = (state_10981[8]);var inst_10947 = (inst_10945 < cnt);var state_10981__$1 = state_10981;if(cljs.core.truth_(inst_10947))
{var statearr_10986_11014 = state_10981__$1;(statearr_10986_11014[1] = 6);
} else
{var statearr_10987_11015 = state_10981__$1;(statearr_10987_11015[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10982 === 5))
{var inst_10965 = (state_10981[2]);var state_10981__$1 = (function (){var statearr_10988 = state_10981;(statearr_10988[9] = inst_10965);
return statearr_10988;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10981__$1,12,dchan);
} else
{if((state_val_10982 === 6))
{var state_10981__$1 = state_10981;var statearr_10989_11016 = state_10981__$1;(statearr_10989_11016[2] = null);
(statearr_10989_11016[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10982 === 7))
{var state_10981__$1 = state_10981;var statearr_10990_11017 = state_10981__$1;(statearr_10990_11017[2] = null);
(statearr_10990_11017[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10982 === 8))
{var inst_10963 = (state_10981[2]);var state_10981__$1 = state_10981;var statearr_10991_11018 = state_10981__$1;(statearr_10991_11018[2] = inst_10963);
(statearr_10991_11018[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10982 === 9))
{var inst_10945 = (state_10981[8]);var inst_10958 = (state_10981[2]);var inst_10959 = (inst_10945 + 1);var inst_10945__$1 = inst_10959;var state_10981__$1 = (function (){var statearr_10992 = state_10981;(statearr_10992[8] = inst_10945__$1);
(statearr_10992[10] = inst_10958);
return statearr_10992;
})();var statearr_10993_11019 = state_10981__$1;(statearr_10993_11019[2] = null);
(statearr_10993_11019[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10982 === 10))
{var inst_10949 = (state_10981[2]);var inst_10950 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_10981__$1 = (function (){var statearr_10994 = state_10981;(statearr_10994[11] = inst_10949);
return statearr_10994;
})();var statearr_10995_11020 = state_10981__$1;(statearr_10995_11020[2] = inst_10950);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10981__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10982 === 11))
{var inst_10945 = (state_10981[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10981,10,Object,null,9);var inst_10954 = chs__$1.call(null,inst_10945);var inst_10955 = done.call(null,inst_10945);var inst_10956 = cljs.core.async.take_BANG_.call(null,inst_10954,inst_10955);var state_10981__$1 = state_10981;var statearr_10996_11021 = state_10981__$1;(statearr_10996_11021[2] = inst_10956);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10981__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10982 === 12))
{var inst_10967 = (state_10981[12]);var inst_10967__$1 = (state_10981[2]);var inst_10968 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10967__$1);var state_10981__$1 = (function (){var statearr_10997 = state_10981;(statearr_10997[12] = inst_10967__$1);
return statearr_10997;
})();if(cljs.core.truth_(inst_10968))
{var statearr_10998_11022 = state_10981__$1;(statearr_10998_11022[1] = 13);
} else
{var statearr_10999_11023 = state_10981__$1;(statearr_10999_11023[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10982 === 13))
{var inst_10970 = cljs.core.async.close_BANG_.call(null,out);var state_10981__$1 = state_10981;var statearr_11000_11024 = state_10981__$1;(statearr_11000_11024[2] = inst_10970);
(statearr_11000_11024[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10982 === 14))
{var inst_10967 = (state_10981[12]);var inst_10972 = cljs.core.apply.call(null,f,inst_10967);var state_10981__$1 = state_10981;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10981__$1,16,out,inst_10972);
} else
{if((state_val_10982 === 15))
{var inst_10977 = (state_10981[2]);var state_10981__$1 = state_10981;var statearr_11001_11025 = state_10981__$1;(statearr_11001_11025[2] = inst_10977);
(statearr_11001_11025[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10982 === 16))
{var inst_10974 = (state_10981[2]);var state_10981__$1 = (function (){var statearr_11002 = state_10981;(statearr_11002[13] = inst_10974);
return statearr_11002;
})();var statearr_11003_11026 = state_10981__$1;(statearr_11003_11026[2] = null);
(statearr_11003_11026[1] = 2);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11007[0] = state_machine__6178__auto__);
(statearr_11007[1] = 1);
return statearr_11007;
});
var state_machine__6178__auto____1 = (function (state_10981){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_10981);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11008){if((e11008 instanceof Object))
{var ex__6181__auto__ = e11008;var statearr_11009_11027 = state_10981;(statearr_11009_11027[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10981);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11008;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11028 = state_10981;
state_10981 = G__11028;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_10981){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_10981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11010 = f__6193__auto__.call(null);(statearr_11010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11011);
return statearr_11010;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___11136 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11112){var state_val_11113 = (state_11112[1]);if((state_val_11113 === 1))
{var inst_11083 = cljs.core.vec.call(null,chs);var inst_11084 = inst_11083;var state_11112__$1 = (function (){var statearr_11114 = state_11112;(statearr_11114[7] = inst_11084);
return statearr_11114;
})();var statearr_11115_11137 = state_11112__$1;(statearr_11115_11137[2] = null);
(statearr_11115_11137[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11113 === 2))
{var inst_11084 = (state_11112[7]);var inst_11086 = cljs.core.count.call(null,inst_11084);var inst_11087 = (inst_11086 > 0);var state_11112__$1 = state_11112;if(cljs.core.truth_(inst_11087))
{var statearr_11116_11138 = state_11112__$1;(statearr_11116_11138[1] = 4);
} else
{var statearr_11117_11139 = state_11112__$1;(statearr_11117_11139[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11113 === 3))
{var inst_11110 = (state_11112[2]);var state_11112__$1 = state_11112;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11112__$1,inst_11110);
} else
{if((state_val_11113 === 4))
{var inst_11084 = (state_11112[7]);var state_11112__$1 = state_11112;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11112__$1,7,inst_11084);
} else
{if((state_val_11113 === 5))
{var inst_11106 = cljs.core.async.close_BANG_.call(null,out);var state_11112__$1 = state_11112;var statearr_11118_11140 = state_11112__$1;(statearr_11118_11140[2] = inst_11106);
(statearr_11118_11140[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11113 === 6))
{var inst_11108 = (state_11112[2]);var state_11112__$1 = state_11112;var statearr_11119_11141 = state_11112__$1;(statearr_11119_11141[2] = inst_11108);
(statearr_11119_11141[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11113 === 7))
{var inst_11092 = (state_11112[8]);var inst_11091 = (state_11112[9]);var inst_11091__$1 = (state_11112[2]);var inst_11092__$1 = cljs.core.nth.call(null,inst_11091__$1,0,null);var inst_11093 = cljs.core.nth.call(null,inst_11091__$1,1,null);var inst_11094 = (inst_11092__$1 == null);var state_11112__$1 = (function (){var statearr_11120 = state_11112;(statearr_11120[10] = inst_11093);
(statearr_11120[8] = inst_11092__$1);
(statearr_11120[9] = inst_11091__$1);
return statearr_11120;
})();if(cljs.core.truth_(inst_11094))
{var statearr_11121_11142 = state_11112__$1;(statearr_11121_11142[1] = 8);
} else
{var statearr_11122_11143 = state_11112__$1;(statearr_11122_11143[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11113 === 8))
{var inst_11093 = (state_11112[10]);var inst_11092 = (state_11112[8]);var inst_11091 = (state_11112[9]);var inst_11084 = (state_11112[7]);var inst_11096 = (function (){var c = inst_11093;var v = inst_11092;var vec__11089 = inst_11091;var cs = inst_11084;return ((function (c,v,vec__11089,cs,inst_11093,inst_11092,inst_11091,inst_11084,state_val_11113){
return (function (p1__11029_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11029_SHARP_);
});
;})(c,v,vec__11089,cs,inst_11093,inst_11092,inst_11091,inst_11084,state_val_11113))
})();var inst_11097 = cljs.core.filterv.call(null,inst_11096,inst_11084);var inst_11084__$1 = inst_11097;var state_11112__$1 = (function (){var statearr_11123 = state_11112;(statearr_11123[7] = inst_11084__$1);
return statearr_11123;
})();var statearr_11124_11144 = state_11112__$1;(statearr_11124_11144[2] = null);
(statearr_11124_11144[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11113 === 9))
{var inst_11092 = (state_11112[8]);var state_11112__$1 = state_11112;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11112__$1,11,out,inst_11092);
} else
{if((state_val_11113 === 10))
{var inst_11104 = (state_11112[2]);var state_11112__$1 = state_11112;var statearr_11126_11145 = state_11112__$1;(statearr_11126_11145[2] = inst_11104);
(statearr_11126_11145[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11113 === 11))
{var inst_11084 = (state_11112[7]);var inst_11101 = (state_11112[2]);var tmp11125 = inst_11084;var inst_11084__$1 = tmp11125;var state_11112__$1 = (function (){var statearr_11127 = state_11112;(statearr_11127[11] = inst_11101);
(statearr_11127[7] = inst_11084__$1);
return statearr_11127;
})();var statearr_11128_11146 = state_11112__$1;(statearr_11128_11146[2] = null);
(statearr_11128_11146[1] = 2);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11132 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11132[0] = state_machine__6178__auto__);
(statearr_11132[1] = 1);
return statearr_11132;
});
var state_machine__6178__auto____1 = (function (state_11112){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11112);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11133){if((e11133 instanceof Object))
{var ex__6181__auto__ = e11133;var statearr_11134_11147 = state_11112;(statearr_11134_11147[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11112);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11133;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11148 = state_11112;
state_11112 = G__11148;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11112){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11135 = f__6193__auto__.call(null);(statearr_11135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11136);
return statearr_11135;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___11241 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11218){var state_val_11219 = (state_11218[1]);if((state_val_11219 === 1))
{var inst_11195 = 0;var state_11218__$1 = (function (){var statearr_11220 = state_11218;(statearr_11220[7] = inst_11195);
return statearr_11220;
})();var statearr_11221_11242 = state_11218__$1;(statearr_11221_11242[2] = null);
(statearr_11221_11242[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11219 === 2))
{var inst_11195 = (state_11218[7]);var inst_11197 = (inst_11195 < n);var state_11218__$1 = state_11218;if(cljs.core.truth_(inst_11197))
{var statearr_11222_11243 = state_11218__$1;(statearr_11222_11243[1] = 4);
} else
{var statearr_11223_11244 = state_11218__$1;(statearr_11223_11244[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11219 === 3))
{var inst_11215 = (state_11218[2]);var inst_11216 = cljs.core.async.close_BANG_.call(null,out);var state_11218__$1 = (function (){var statearr_11224 = state_11218;(statearr_11224[8] = inst_11215);
return statearr_11224;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11218__$1,inst_11216);
} else
{if((state_val_11219 === 4))
{var state_11218__$1 = state_11218;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11218__$1,7,ch);
} else
{if((state_val_11219 === 5))
{var state_11218__$1 = state_11218;var statearr_11225_11245 = state_11218__$1;(statearr_11225_11245[2] = null);
(statearr_11225_11245[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11219 === 6))
{var inst_11213 = (state_11218[2]);var state_11218__$1 = state_11218;var statearr_11226_11246 = state_11218__$1;(statearr_11226_11246[2] = inst_11213);
(statearr_11226_11246[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11219 === 7))
{var inst_11200 = (state_11218[9]);var inst_11200__$1 = (state_11218[2]);var inst_11201 = (inst_11200__$1 == null);var inst_11202 = cljs.core.not.call(null,inst_11201);var state_11218__$1 = (function (){var statearr_11227 = state_11218;(statearr_11227[9] = inst_11200__$1);
return statearr_11227;
})();if(inst_11202)
{var statearr_11228_11247 = state_11218__$1;(statearr_11228_11247[1] = 8);
} else
{var statearr_11229_11248 = state_11218__$1;(statearr_11229_11248[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11219 === 8))
{var inst_11200 = (state_11218[9]);var state_11218__$1 = state_11218;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11218__$1,11,out,inst_11200);
} else
{if((state_val_11219 === 9))
{var state_11218__$1 = state_11218;var statearr_11230_11249 = state_11218__$1;(statearr_11230_11249[2] = null);
(statearr_11230_11249[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11219 === 10))
{var inst_11210 = (state_11218[2]);var state_11218__$1 = state_11218;var statearr_11231_11250 = state_11218__$1;(statearr_11231_11250[2] = inst_11210);
(statearr_11231_11250[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11219 === 11))
{var inst_11195 = (state_11218[7]);var inst_11205 = (state_11218[2]);var inst_11206 = (inst_11195 + 1);var inst_11195__$1 = inst_11206;var state_11218__$1 = (function (){var statearr_11232 = state_11218;(statearr_11232[10] = inst_11205);
(statearr_11232[7] = inst_11195__$1);
return statearr_11232;
})();var statearr_11233_11251 = state_11218__$1;(statearr_11233_11251[2] = null);
(statearr_11233_11251[1] = 2);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11237 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11237[0] = state_machine__6178__auto__);
(statearr_11237[1] = 1);
return statearr_11237;
});
var state_machine__6178__auto____1 = (function (state_11218){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11218);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11238){if((e11238 instanceof Object))
{var ex__6181__auto__ = e11238;var statearr_11239_11252 = state_11218;(statearr_11239_11252[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11218);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11238;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11253 = state_11218;
state_11218 = G__11253;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11218){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11240 = f__6193__auto__.call(null);(statearr_11240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11241);
return statearr_11240;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___11350 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11325){var state_val_11326 = (state_11325[1]);if((state_val_11326 === 1))
{var inst_11302 = null;var state_11325__$1 = (function (){var statearr_11327 = state_11325;(statearr_11327[7] = inst_11302);
return statearr_11327;
})();var statearr_11328_11351 = state_11325__$1;(statearr_11328_11351[2] = null);
(statearr_11328_11351[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11326 === 2))
{var state_11325__$1 = state_11325;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11325__$1,4,ch);
} else
{if((state_val_11326 === 3))
{var inst_11322 = (state_11325[2]);var inst_11323 = cljs.core.async.close_BANG_.call(null,out);var state_11325__$1 = (function (){var statearr_11329 = state_11325;(statearr_11329[8] = inst_11322);
return statearr_11329;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11325__$1,inst_11323);
} else
{if((state_val_11326 === 4))
{var inst_11305 = (state_11325[9]);var inst_11305__$1 = (state_11325[2]);var inst_11306 = (inst_11305__$1 == null);var inst_11307 = cljs.core.not.call(null,inst_11306);var state_11325__$1 = (function (){var statearr_11330 = state_11325;(statearr_11330[9] = inst_11305__$1);
return statearr_11330;
})();if(inst_11307)
{var statearr_11331_11352 = state_11325__$1;(statearr_11331_11352[1] = 5);
} else
{var statearr_11332_11353 = state_11325__$1;(statearr_11332_11353[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11326 === 5))
{var inst_11302 = (state_11325[7]);var inst_11305 = (state_11325[9]);var inst_11309 = cljs.core._EQ_.call(null,inst_11305,inst_11302);var state_11325__$1 = state_11325;if(inst_11309)
{var statearr_11333_11354 = state_11325__$1;(statearr_11333_11354[1] = 8);
} else
{var statearr_11334_11355 = state_11325__$1;(statearr_11334_11355[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11326 === 6))
{var state_11325__$1 = state_11325;var statearr_11336_11356 = state_11325__$1;(statearr_11336_11356[2] = null);
(statearr_11336_11356[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11326 === 7))
{var inst_11320 = (state_11325[2]);var state_11325__$1 = state_11325;var statearr_11337_11357 = state_11325__$1;(statearr_11337_11357[2] = inst_11320);
(statearr_11337_11357[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11326 === 8))
{var inst_11302 = (state_11325[7]);var tmp11335 = inst_11302;var inst_11302__$1 = tmp11335;var state_11325__$1 = (function (){var statearr_11338 = state_11325;(statearr_11338[7] = inst_11302__$1);
return statearr_11338;
})();var statearr_11339_11358 = state_11325__$1;(statearr_11339_11358[2] = null);
(statearr_11339_11358[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11326 === 9))
{var inst_11305 = (state_11325[9]);var state_11325__$1 = state_11325;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11325__$1,11,out,inst_11305);
} else
{if((state_val_11326 === 10))
{var inst_11317 = (state_11325[2]);var state_11325__$1 = state_11325;var statearr_11340_11359 = state_11325__$1;(statearr_11340_11359[2] = inst_11317);
(statearr_11340_11359[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11326 === 11))
{var inst_11305 = (state_11325[9]);var inst_11314 = (state_11325[2]);var inst_11302 = inst_11305;var state_11325__$1 = (function (){var statearr_11341 = state_11325;(statearr_11341[10] = inst_11314);
(statearr_11341[7] = inst_11302);
return statearr_11341;
})();var statearr_11342_11360 = state_11325__$1;(statearr_11342_11360[2] = null);
(statearr_11342_11360[1] = 2);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11346 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11346[0] = state_machine__6178__auto__);
(statearr_11346[1] = 1);
return statearr_11346;
});
var state_machine__6178__auto____1 = (function (state_11325){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11325);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11347){if((e11347 instanceof Object))
{var ex__6181__auto__ = e11347;var statearr_11348_11361 = state_11325;(statearr_11348_11361[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11325);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11347;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11362 = state_11325;
state_11325 = G__11362;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11325){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11349 = f__6193__auto__.call(null);(statearr_11349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11350);
return statearr_11349;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___11497 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11467){var state_val_11468 = (state_11467[1]);if((state_val_11468 === 1))
{var inst_11430 = (new Array(n));var inst_11431 = inst_11430;var inst_11432 = 0;var state_11467__$1 = (function (){var statearr_11469 = state_11467;(statearr_11469[7] = inst_11432);
(statearr_11469[8] = inst_11431);
return statearr_11469;
})();var statearr_11470_11498 = state_11467__$1;(statearr_11470_11498[2] = null);
(statearr_11470_11498[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11468 === 2))
{var state_11467__$1 = state_11467;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11467__$1,4,ch);
} else
{if((state_val_11468 === 3))
{var inst_11465 = (state_11467[2]);var state_11467__$1 = state_11467;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11467__$1,inst_11465);
} else
{if((state_val_11468 === 4))
{var inst_11435 = (state_11467[9]);var inst_11435__$1 = (state_11467[2]);var inst_11436 = (inst_11435__$1 == null);var inst_11437 = cljs.core.not.call(null,inst_11436);var state_11467__$1 = (function (){var statearr_11471 = state_11467;(statearr_11471[9] = inst_11435__$1);
return statearr_11471;
})();if(inst_11437)
{var statearr_11472_11499 = state_11467__$1;(statearr_11472_11499[1] = 5);
} else
{var statearr_11473_11500 = state_11467__$1;(statearr_11473_11500[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11468 === 5))
{var inst_11435 = (state_11467[9]);var inst_11440 = (state_11467[10]);var inst_11432 = (state_11467[7]);var inst_11431 = (state_11467[8]);var inst_11439 = (inst_11431[inst_11432] = inst_11435);var inst_11440__$1 = (inst_11432 + 1);var inst_11441 = (inst_11440__$1 < n);var state_11467__$1 = (function (){var statearr_11474 = state_11467;(statearr_11474[11] = inst_11439);
(statearr_11474[10] = inst_11440__$1);
return statearr_11474;
})();if(cljs.core.truth_(inst_11441))
{var statearr_11475_11501 = state_11467__$1;(statearr_11475_11501[1] = 8);
} else
{var statearr_11476_11502 = state_11467__$1;(statearr_11476_11502[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11468 === 6))
{var inst_11432 = (state_11467[7]);var inst_11453 = (inst_11432 > 0);var state_11467__$1 = state_11467;if(cljs.core.truth_(inst_11453))
{var statearr_11478_11503 = state_11467__$1;(statearr_11478_11503[1] = 12);
} else
{var statearr_11479_11504 = state_11467__$1;(statearr_11479_11504[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11468 === 7))
{var inst_11463 = (state_11467[2]);var state_11467__$1 = state_11467;var statearr_11480_11505 = state_11467__$1;(statearr_11480_11505[2] = inst_11463);
(statearr_11480_11505[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11468 === 8))
{var inst_11440 = (state_11467[10]);var inst_11431 = (state_11467[8]);var tmp11477 = inst_11431;var inst_11431__$1 = tmp11477;var inst_11432 = inst_11440;var state_11467__$1 = (function (){var statearr_11481 = state_11467;(statearr_11481[7] = inst_11432);
(statearr_11481[8] = inst_11431__$1);
return statearr_11481;
})();var statearr_11482_11506 = state_11467__$1;(statearr_11482_11506[2] = null);
(statearr_11482_11506[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11468 === 9))
{var inst_11431 = (state_11467[8]);var inst_11445 = cljs.core.vec.call(null,inst_11431);var state_11467__$1 = state_11467;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11467__$1,11,out,inst_11445);
} else
{if((state_val_11468 === 10))
{var inst_11451 = (state_11467[2]);var state_11467__$1 = state_11467;var statearr_11483_11507 = state_11467__$1;(statearr_11483_11507[2] = inst_11451);
(statearr_11483_11507[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11468 === 11))
{var inst_11447 = (state_11467[2]);var inst_11448 = (new Array(n));var inst_11431 = inst_11448;var inst_11432 = 0;var state_11467__$1 = (function (){var statearr_11484 = state_11467;(statearr_11484[12] = inst_11447);
(statearr_11484[7] = inst_11432);
(statearr_11484[8] = inst_11431);
return statearr_11484;
})();var statearr_11485_11508 = state_11467__$1;(statearr_11485_11508[2] = null);
(statearr_11485_11508[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11468 === 12))
{var inst_11431 = (state_11467[8]);var inst_11455 = cljs.core.vec.call(null,inst_11431);var state_11467__$1 = state_11467;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11467__$1,15,out,inst_11455);
} else
{if((state_val_11468 === 13))
{var state_11467__$1 = state_11467;var statearr_11486_11509 = state_11467__$1;(statearr_11486_11509[2] = null);
(statearr_11486_11509[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11468 === 14))
{var inst_11460 = (state_11467[2]);var inst_11461 = cljs.core.async.close_BANG_.call(null,out);var state_11467__$1 = (function (){var statearr_11487 = state_11467;(statearr_11487[13] = inst_11460);
return statearr_11487;
})();var statearr_11488_11510 = state_11467__$1;(statearr_11488_11510[2] = inst_11461);
(statearr_11488_11510[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11468 === 15))
{var inst_11457 = (state_11467[2]);var state_11467__$1 = state_11467;var statearr_11489_11511 = state_11467__$1;(statearr_11489_11511[2] = inst_11457);
(statearr_11489_11511[1] = 14);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11493[0] = state_machine__6178__auto__);
(statearr_11493[1] = 1);
return statearr_11493;
});
var state_machine__6178__auto____1 = (function (state_11467){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11467);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11494){if((e11494 instanceof Object))
{var ex__6181__auto__ = e11494;var statearr_11495_11512 = state_11467;(statearr_11495_11512[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11467);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11494;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11513 = state_11467;
state_11467 = G__11513;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11467){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11496 = f__6193__auto__.call(null);(statearr_11496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11497);
return statearr_11496;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6192__auto___11656 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6193__auto__ = (function (){var switch__6177__auto__ = (function (state_11626){var state_val_11627 = (state_11626[1]);if((state_val_11627 === 1))
{var inst_11585 = [];var inst_11586 = inst_11585;var inst_11587 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_11626__$1 = (function (){var statearr_11628 = state_11626;(statearr_11628[7] = inst_11587);
(statearr_11628[8] = inst_11586);
return statearr_11628;
})();var statearr_11629_11657 = state_11626__$1;(statearr_11629_11657[2] = null);
(statearr_11629_11657[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11627 === 2))
{var state_11626__$1 = state_11626;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11626__$1,4,ch);
} else
{if((state_val_11627 === 3))
{var inst_11624 = (state_11626[2]);var state_11626__$1 = state_11626;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11626__$1,inst_11624);
} else
{if((state_val_11627 === 4))
{var inst_11590 = (state_11626[9]);var inst_11590__$1 = (state_11626[2]);var inst_11591 = (inst_11590__$1 == null);var inst_11592 = cljs.core.not.call(null,inst_11591);var state_11626__$1 = (function (){var statearr_11630 = state_11626;(statearr_11630[9] = inst_11590__$1);
return statearr_11630;
})();if(inst_11592)
{var statearr_11631_11658 = state_11626__$1;(statearr_11631_11658[1] = 5);
} else
{var statearr_11632_11659 = state_11626__$1;(statearr_11632_11659[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11627 === 5))
{var inst_11587 = (state_11626[7]);var inst_11594 = (state_11626[10]);var inst_11590 = (state_11626[9]);var inst_11594__$1 = f.call(null,inst_11590);var inst_11595 = cljs.core._EQ_.call(null,inst_11594__$1,inst_11587);var inst_11596 = cljs.core.keyword_identical_QMARK_.call(null,inst_11587,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_11597 = (inst_11595) || (inst_11596);var state_11626__$1 = (function (){var statearr_11633 = state_11626;(statearr_11633[10] = inst_11594__$1);
return statearr_11633;
})();if(cljs.core.truth_(inst_11597))
{var statearr_11634_11660 = state_11626__$1;(statearr_11634_11660[1] = 8);
} else
{var statearr_11635_11661 = state_11626__$1;(statearr_11635_11661[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11627 === 6))
{var inst_11586 = (state_11626[8]);var inst_11611 = inst_11586.length;var inst_11612 = (inst_11611 > 0);var state_11626__$1 = state_11626;if(cljs.core.truth_(inst_11612))
{var statearr_11637_11662 = state_11626__$1;(statearr_11637_11662[1] = 12);
} else
{var statearr_11638_11663 = state_11626__$1;(statearr_11638_11663[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11627 === 7))
{var inst_11622 = (state_11626[2]);var state_11626__$1 = state_11626;var statearr_11639_11664 = state_11626__$1;(statearr_11639_11664[2] = inst_11622);
(statearr_11639_11664[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11627 === 8))
{var inst_11586 = (state_11626[8]);var inst_11594 = (state_11626[10]);var inst_11590 = (state_11626[9]);var inst_11599 = inst_11586.push(inst_11590);var tmp11636 = inst_11586;var inst_11586__$1 = tmp11636;var inst_11587 = inst_11594;var state_11626__$1 = (function (){var statearr_11640 = state_11626;(statearr_11640[7] = inst_11587);
(statearr_11640[8] = inst_11586__$1);
(statearr_11640[11] = inst_11599);
return statearr_11640;
})();var statearr_11641_11665 = state_11626__$1;(statearr_11641_11665[2] = null);
(statearr_11641_11665[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11627 === 9))
{var inst_11586 = (state_11626[8]);var inst_11602 = cljs.core.vec.call(null,inst_11586);var state_11626__$1 = state_11626;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11626__$1,11,out,inst_11602);
} else
{if((state_val_11627 === 10))
{var inst_11609 = (state_11626[2]);var state_11626__$1 = state_11626;var statearr_11642_11666 = state_11626__$1;(statearr_11642_11666[2] = inst_11609);
(statearr_11642_11666[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11627 === 11))
{var inst_11594 = (state_11626[10]);var inst_11590 = (state_11626[9]);var inst_11604 = (state_11626[2]);var inst_11605 = [];var inst_11606 = inst_11605.push(inst_11590);var inst_11586 = inst_11605;var inst_11587 = inst_11594;var state_11626__$1 = (function (){var statearr_11643 = state_11626;(statearr_11643[7] = inst_11587);
(statearr_11643[8] = inst_11586);
(statearr_11643[12] = inst_11604);
(statearr_11643[13] = inst_11606);
return statearr_11643;
})();var statearr_11644_11667 = state_11626__$1;(statearr_11644_11667[2] = null);
(statearr_11644_11667[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11627 === 12))
{var inst_11586 = (state_11626[8]);var inst_11614 = cljs.core.vec.call(null,inst_11586);var state_11626__$1 = state_11626;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11626__$1,15,out,inst_11614);
} else
{if((state_val_11627 === 13))
{var state_11626__$1 = state_11626;var statearr_11645_11668 = state_11626__$1;(statearr_11645_11668[2] = null);
(statearr_11645_11668[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11627 === 14))
{var inst_11619 = (state_11626[2]);var inst_11620 = cljs.core.async.close_BANG_.call(null,out);var state_11626__$1 = (function (){var statearr_11646 = state_11626;(statearr_11646[14] = inst_11619);
return statearr_11646;
})();var statearr_11647_11669 = state_11626__$1;(statearr_11647_11669[2] = inst_11620);
(statearr_11647_11669[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11627 === 15))
{var inst_11616 = (state_11626[2]);var state_11626__$1 = state_11626;var statearr_11648_11670 = state_11626__$1;(statearr_11648_11670[2] = inst_11616);
(statearr_11648_11670[1] = 14);
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
});return ((function (switch__6177__auto__){
return (function() {
var state_machine__6178__auto__ = null;
var state_machine__6178__auto____0 = (function (){var statearr_11652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11652[0] = state_machine__6178__auto__);
(statearr_11652[1] = 1);
return statearr_11652;
});
var state_machine__6178__auto____1 = (function (state_11626){while(true){
var ret_value__6179__auto__ = (function (){try{while(true){
var result__6180__auto__ = switch__6177__auto__.call(null,state_11626);if(cljs.core.keyword_identical_QMARK_.call(null,result__6180__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6180__auto__;
}
break;
}
}catch (e11653){if((e11653 instanceof Object))
{var ex__6181__auto__ = e11653;var statearr_11654_11671 = state_11626;(statearr_11654_11671[5] = ex__6181__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11626);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11653;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6179__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11672 = state_11626;
state_11626 = G__11672;
continue;
}
} else
{return ret_value__6179__auto__;
}
break;
}
});
state_machine__6178__auto__ = function(state_11626){
switch(arguments.length){
case 0:
return state_machine__6178__auto____0.call(this);
case 1:
return state_machine__6178__auto____1.call(this,state_11626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6178__auto____0;
state_machine__6178__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6178__auto____1;
return state_machine__6178__auto__;
})()
;})(switch__6177__auto__))
})();var state__6194__auto__ = (function (){var statearr_11655 = f__6193__auto__.call(null);(statearr_11655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6192__auto___11656);
return statearr_11655;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6194__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map