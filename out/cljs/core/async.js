// Compiled by ClojureScript 0.0-2280
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10899 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10899 = (function (f,fn_handler,meta10900){
this.f = f;
this.fn_handler = fn_handler;
this.meta10900 = meta10900;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10899.cljs$lang$type = true;
cljs.core.async.t10899.cljs$lang$ctorStr = "cljs.core.async/t10899";
cljs.core.async.t10899.cljs$lang$ctorPrWriter = (function (this__4119__auto__,writer__4120__auto__,opt__4121__auto__){return cljs.core._write.call(null,writer__4120__auto__,"cljs.core.async/t10899");
});
cljs.core.async.t10899.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10899.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10899.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10901){var self__ = this;
var _10901__$1 = this;return self__.meta10900;
});
cljs.core.async.t10899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10901,meta10900__$1){var self__ = this;
var _10901__$1 = this;return (new cljs.core.async.t10899(self__.f,self__.fn_handler,meta10900__$1));
});
cljs.core.async.__GT_t10899 = (function __GT_t10899(f__$1,fn_handler__$1,meta10900){return (new cljs.core.async.t10899(f__$1,fn_handler__$1,meta10900));
});
}
return (new cljs.core.async.t10899(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10903 = buff;if(G__10903)
{var bit__4202__auto__ = null;if(cljs.core.truth_((function (){var or__3552__auto__ = bit__4202__auto__;if(cljs.core.truth_(or__3552__auto__))
{return or__3552__auto__;
} else
{return G__10903.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10903.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10903);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10903);
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
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
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
{var val_10904 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10904);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10904,ret){
return (function (){return fn1.call(null,val_10904);
});})(val_10904,ret))
);
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
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3540__auto__ = ret;if(cljs.core.truth_(and__3540__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3540__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4408__auto___10905 = n;var x_10906 = (0);while(true){
if((x_10906 < n__4408__auto___10905))
{(a[x_10906] = (0));
{
var G__10907 = (x_10906 + (1));
x_10906 = G__10907;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10908 = (i + (1));
i = G__10908;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10912 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10912 = (function (flag,alt_flag,meta10913){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10913 = meta10913;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10912.cljs$lang$type = true;
cljs.core.async.t10912.cljs$lang$ctorStr = "cljs.core.async/t10912";
cljs.core.async.t10912.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4119__auto__,writer__4120__auto__,opt__4121__auto__){return cljs.core._write.call(null,writer__4120__auto__,"cljs.core.async/t10912");
});})(flag))
;
cljs.core.async.t10912.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10912.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10912.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10912.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10914){var self__ = this;
var _10914__$1 = this;return self__.meta10913;
});})(flag))
;
cljs.core.async.t10912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10914,meta10913__$1){var self__ = this;
var _10914__$1 = this;return (new cljs.core.async.t10912(self__.flag,self__.alt_flag,meta10913__$1));
});})(flag))
;
cljs.core.async.__GT_t10912 = ((function (flag){
return (function __GT_t10912(flag__$1,alt_flag__$1,meta10913){return (new cljs.core.async.t10912(flag__$1,alt_flag__$1,meta10913));
});})(flag))
;
}
return (new cljs.core.async.t10912(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10918 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10918 = (function (cb,flag,alt_handler,meta10919){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10919 = meta10919;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10918.cljs$lang$type = true;
cljs.core.async.t10918.cljs$lang$ctorStr = "cljs.core.async/t10918";
cljs.core.async.t10918.cljs$lang$ctorPrWriter = (function (this__4119__auto__,writer__4120__auto__,opt__4121__auto__){return cljs.core._write.call(null,writer__4120__auto__,"cljs.core.async/t10918");
});
cljs.core.async.t10918.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10918.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10918.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10920){var self__ = this;
var _10920__$1 = this;return self__.meta10919;
});
cljs.core.async.t10918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10920,meta10919__$1){var self__ = this;
var _10920__$1 = this;return (new cljs.core.async.t10918(self__.cb,self__.flag,self__.alt_handler,meta10919__$1));
});
cljs.core.async.__GT_t10918 = (function __GT_t10918(cb__$1,flag__$1,alt_handler__$1,meta10919){return (new cljs.core.async.t10918(cb__$1,flag__$1,alt_handler__$1,meta10919));
});
}
return (new cljs.core.async.t10918(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10921_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10921_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3552__auto__ = wport;if(cljs.core.truth_(or__3552__auto__))
{return or__3552__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10922 = (i + (1));
i = G__10922;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3552__auto__ = ret;if(cljs.core.truth_(or__3552__auto__))
{return or__3552__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3540__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3540__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3540__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var alts_BANG___delegate = function (ports,p__10923){var map__10925 = p__10923;var map__10925__$1 = ((cljs.core.seq_QMARK_.call(null,map__10925))?cljs.core.apply.call(null,cljs.core.hash_map,map__10925):map__10925);var opts = map__10925__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10923 = null;if (arguments.length > 1) {
  p__10923 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10923);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10926){
var ports = cljs.core.first(arglist__10926);
var p__10923 = cljs.core.rest(arglist__10926);
return alts_BANG___delegate(ports,p__10923);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10934 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10934 = (function (ch,f,map_LT_,meta10935){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10935 = meta10935;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10934.cljs$lang$type = true;
cljs.core.async.t10934.cljs$lang$ctorStr = "cljs.core.async/t10934";
cljs.core.async.t10934.cljs$lang$ctorPrWriter = (function (this__4119__auto__,writer__4120__auto__,opt__4121__auto__){return cljs.core._write.call(null,writer__4120__auto__,"cljs.core.async/t10934");
});
cljs.core.async.t10934.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10934.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10934.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10934.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10937 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10937 = (function (fn1,_,meta10935,ch,f,map_LT_,meta10938){
this.fn1 = fn1;
this._ = _;
this.meta10935 = meta10935;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10938 = meta10938;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10937.cljs$lang$type = true;
cljs.core.async.t10937.cljs$lang$ctorStr = "cljs.core.async/t10937";
cljs.core.async.t10937.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4119__auto__,writer__4120__auto__,opt__4121__auto__){return cljs.core._write.call(null,writer__4120__auto__,"cljs.core.async/t10937");
});})(___$1))
;
cljs.core.async.t10937.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10937.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10937.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10937.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10927_SHARP_){return f1.call(null,(((p1__10927_SHARP_ == null))?null:self__.f.call(null,p1__10927_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10939){var self__ = this;
var _10939__$1 = this;return self__.meta10938;
});})(___$1))
;
cljs.core.async.t10937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10939,meta10938__$1){var self__ = this;
var _10939__$1 = this;return (new cljs.core.async.t10937(self__.fn1,self__._,self__.meta10935,self__.ch,self__.f,self__.map_LT_,meta10938__$1));
});})(___$1))
;
cljs.core.async.__GT_t10937 = ((function (___$1){
return (function __GT_t10937(fn1__$1,___$2,meta10935__$1,ch__$2,f__$2,map_LT___$2,meta10938){return (new cljs.core.async.t10937(fn1__$1,___$2,meta10935__$1,ch__$2,f__$2,map_LT___$2,meta10938));
});})(___$1))
;
}
return (new cljs.core.async.t10937(fn1,___$1,self__.meta10935,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3540__auto__ = ret;if(cljs.core.truth_(and__3540__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3540__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10934.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10934.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10936){var self__ = this;
var _10936__$1 = this;return self__.meta10935;
});
cljs.core.async.t10934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10936,meta10935__$1){var self__ = this;
var _10936__$1 = this;return (new cljs.core.async.t10934(self__.ch,self__.f,self__.map_LT_,meta10935__$1));
});
cljs.core.async.__GT_t10934 = (function __GT_t10934(ch__$1,f__$1,map_LT___$1,meta10935){return (new cljs.core.async.t10934(ch__$1,f__$1,map_LT___$1,meta10935));
});
}
return (new cljs.core.async.t10934(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10943 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10943 = (function (ch,f,map_GT_,meta10944){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10944 = meta10944;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10943.cljs$lang$type = true;
cljs.core.async.t10943.cljs$lang$ctorStr = "cljs.core.async/t10943";
cljs.core.async.t10943.cljs$lang$ctorPrWriter = (function (this__4119__auto__,writer__4120__auto__,opt__4121__auto__){return cljs.core._write.call(null,writer__4120__auto__,"cljs.core.async/t10943");
});
cljs.core.async.t10943.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10943.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10943.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10943.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10943.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10943.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10945){var self__ = this;
var _10945__$1 = this;return self__.meta10944;
});
cljs.core.async.t10943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10945,meta10944__$1){var self__ = this;
var _10945__$1 = this;return (new cljs.core.async.t10943(self__.ch,self__.f,self__.map_GT_,meta10944__$1));
});
cljs.core.async.__GT_t10943 = (function __GT_t10943(ch__$1,f__$1,map_GT___$1,meta10944){return (new cljs.core.async.t10943(ch__$1,f__$1,map_GT___$1,meta10944));
});
}
return (new cljs.core.async.t10943(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10949 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10949 = (function (ch,p,filter_GT_,meta10950){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10950 = meta10950;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10949.cljs$lang$type = true;
cljs.core.async.t10949.cljs$lang$ctorStr = "cljs.core.async/t10949";
cljs.core.async.t10949.cljs$lang$ctorPrWriter = (function (this__4119__auto__,writer__4120__auto__,opt__4121__auto__){return cljs.core._write.call(null,writer__4120__auto__,"cljs.core.async/t10949");
});
cljs.core.async.t10949.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10949.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10949.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10949.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10949.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10949.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10951){var self__ = this;
var _10951__$1 = this;return self__.meta10950;
});
cljs.core.async.t10949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10951,meta10950__$1){var self__ = this;
var _10951__$1 = this;return (new cljs.core.async.t10949(self__.ch,self__.p,self__.filter_GT_,meta10950__$1));
});
cljs.core.async.__GT_t10949 = (function __GT_t10949(ch__$1,p__$1,filter_GT___$1,meta10950){return (new cljs.core.async.t10949(ch__$1,p__$1,filter_GT___$1,meta10950));
});
}
return (new cljs.core.async.t10949(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6912__auto___11034 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6912__auto___11034,out){
return (function (){var f__6913__auto__ = (function (){var switch__6847__auto__ = ((function (c__6912__auto___11034,out){
return (function (state_11013){var state_val_11014 = (state_11013[(1)]);if((state_val_11014 === (7)))
{var inst_11009 = (state_11013[(2)]);var state_11013__$1 = state_11013;var statearr_11015_11035 = state_11013__$1;(statearr_11015_11035[(2)] = inst_11009);
(statearr_11015_11035[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11014 === (1)))
{var state_11013__$1 = state_11013;var statearr_11016_11036 = state_11013__$1;(statearr_11016_11036[(2)] = null);
(statearr_11016_11036[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11014 === (4)))
{var inst_10995 = (state_11013[(7)]);var inst_10995__$1 = (state_11013[(2)]);var inst_10996 = (inst_10995__$1 == null);var state_11013__$1 = (function (){var statearr_11017 = state_11013;(statearr_11017[(7)] = inst_10995__$1);
return statearr_11017;
})();if(cljs.core.truth_(inst_10996))
{var statearr_11018_11037 = state_11013__$1;(statearr_11018_11037[(1)] = (5));
} else
{var statearr_11019_11038 = state_11013__$1;(statearr_11019_11038[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11014 === (6)))
{var inst_10995 = (state_11013[(7)]);var inst_11000 = p.call(null,inst_10995);var state_11013__$1 = state_11013;if(cljs.core.truth_(inst_11000))
{var statearr_11020_11039 = state_11013__$1;(statearr_11020_11039[(1)] = (8));
} else
{var statearr_11021_11040 = state_11013__$1;(statearr_11021_11040[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11014 === (3)))
{var inst_11011 = (state_11013[(2)]);var state_11013__$1 = state_11013;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11013__$1,inst_11011);
} else
{if((state_val_11014 === (2)))
{var state_11013__$1 = state_11013;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11013__$1,(4),ch);
} else
{if((state_val_11014 === (11)))
{var inst_11003 = (state_11013[(2)]);var state_11013__$1 = state_11013;var statearr_11022_11041 = state_11013__$1;(statearr_11022_11041[(2)] = inst_11003);
(statearr_11022_11041[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11014 === (9)))
{var state_11013__$1 = state_11013;var statearr_11023_11042 = state_11013__$1;(statearr_11023_11042[(2)] = null);
(statearr_11023_11042[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11014 === (5)))
{var inst_10998 = cljs.core.async.close_BANG_.call(null,out);var state_11013__$1 = state_11013;var statearr_11024_11043 = state_11013__$1;(statearr_11024_11043[(2)] = inst_10998);
(statearr_11024_11043[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11014 === (10)))
{var inst_11006 = (state_11013[(2)]);var state_11013__$1 = (function (){var statearr_11025 = state_11013;(statearr_11025[(8)] = inst_11006);
return statearr_11025;
})();var statearr_11026_11044 = state_11013__$1;(statearr_11026_11044[(2)] = null);
(statearr_11026_11044[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11014 === (8)))
{var inst_10995 = (state_11013[(7)]);var state_11013__$1 = state_11013;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11013__$1,(11),out,inst_10995);
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
});})(c__6912__auto___11034,out))
;return ((function (switch__6847__auto__,c__6912__auto___11034,out){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){var statearr_11030 = [null,null,null,null,null,null,null,null,null];(statearr_11030[(0)] = state_machine__6848__auto__);
(statearr_11030[(1)] = (1));
return statearr_11030;
});
var state_machine__6848__auto____1 = (function (state_11013){while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_11013);if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6850__auto__;
}
break;
}
}catch (e11031){if((e11031 instanceof Object))
{var ex__6851__auto__ = e11031;var statearr_11032_11045 = state_11013;(statearr_11032_11045[(5)] = ex__6851__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11013);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11031;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11046 = state_11013;
state_11013 = G__11046;
continue;
}
} else
{return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_11013){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_11013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6912__auto___11034,out))
})();var state__6914__auto__ = (function (){var statearr_11033 = f__6913__auto__.call(null);(statearr_11033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6912__auto___11034);
return statearr_11033;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6914__auto__);
});})(c__6912__auto___11034,out))
);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6912__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6912__auto__){
return (function (){var f__6913__auto__ = (function (){var switch__6847__auto__ = ((function (c__6912__auto__){
return (function (state_11198){var state_val_11199 = (state_11198[(1)]);if((state_val_11199 === (7)))
{var inst_11194 = (state_11198[(2)]);var state_11198__$1 = state_11198;var statearr_11200_11237 = state_11198__$1;(statearr_11200_11237[(2)] = inst_11194);
(statearr_11200_11237[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11199 === (20)))
{var inst_11169 = (state_11198[(7)]);var inst_11180 = (state_11198[(2)]);var inst_11181 = cljs.core.next.call(null,inst_11169);var inst_11155 = inst_11181;var inst_11156 = null;var inst_11157 = (0);var inst_11158 = (0);var state_11198__$1 = (function (){var statearr_11201 = state_11198;(statearr_11201[(8)] = inst_11157);
(statearr_11201[(9)] = inst_11180);
(statearr_11201[(10)] = inst_11155);
(statearr_11201[(11)] = inst_11158);
(statearr_11201[(12)] = inst_11156);
return statearr_11201;
})();var statearr_11202_11238 = state_11198__$1;(statearr_11202_11238[(2)] = null);
(statearr_11202_11238[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11199 === (1)))
{var state_11198__$1 = state_11198;var statearr_11203_11239 = state_11198__$1;(statearr_11203_11239[(2)] = null);
(statearr_11203_11239[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11199 === (4)))
{var inst_11144 = (state_11198[(13)]);var inst_11144__$1 = (state_11198[(2)]);var inst_11145 = (inst_11144__$1 == null);var state_11198__$1 = (function (){var statearr_11207 = state_11198;(statearr_11207[(13)] = inst_11144__$1);
return statearr_11207;
})();if(cljs.core.truth_(inst_11145))
{var statearr_11208_11240 = state_11198__$1;(statearr_11208_11240[(1)] = (5));
} else
{var statearr_11209_11241 = state_11198__$1;(statearr_11209_11241[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11199 === (15)))
{var state_11198__$1 = state_11198;var statearr_11210_11242 = state_11198__$1;(statearr_11210_11242[(2)] = null);
(statearr_11210_11242[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11199 === (13)))
{var inst_11157 = (state_11198[(8)]);var inst_11155 = (state_11198[(10)]);var inst_11158 = (state_11198[(11)]);var inst_11156 = (state_11198[(12)]);var inst_11165 = (state_11198[(2)]);var inst_11166 = (inst_11158 + (1));var tmp11204 = inst_11157;var tmp11205 = inst_11155;var tmp11206 = inst_11156;var inst_11155__$1 = tmp11205;var inst_11156__$1 = tmp11206;var inst_11157__$1 = tmp11204;var inst_11158__$1 = inst_11166;var state_11198__$1 = (function (){var statearr_11211 = state_11198;(statearr_11211[(8)] = inst_11157__$1);
(statearr_11211[(14)] = inst_11165);
(statearr_11211[(10)] = inst_11155__$1);
(statearr_11211[(11)] = inst_11158__$1);
(statearr_11211[(12)] = inst_11156__$1);
return statearr_11211;
})();var statearr_11212_11243 = state_11198__$1;(statearr_11212_11243[(2)] = null);
(statearr_11212_11243[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11199 === (6)))
{var inst_11144 = (state_11198[(13)]);var inst_11149 = f.call(null,inst_11144);var inst_11154 = cljs.core.seq.call(null,inst_11149);var inst_11155 = inst_11154;var inst_11156 = null;var inst_11157 = (0);var inst_11158 = (0);var state_11198__$1 = (function (){var statearr_11213 = state_11198;(statearr_11213[(8)] = inst_11157);
(statearr_11213[(10)] = inst_11155);
(statearr_11213[(11)] = inst_11158);
(statearr_11213[(12)] = inst_11156);
return statearr_11213;
})();var statearr_11214_11244 = state_11198__$1;(statearr_11214_11244[(2)] = null);
(statearr_11214_11244[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11199 === (17)))
{var inst_11169 = (state_11198[(7)]);var inst_11173 = cljs.core.chunk_first.call(null,inst_11169);var inst_11174 = cljs.core.chunk_rest.call(null,inst_11169);var inst_11175 = cljs.core.count.call(null,inst_11173);var inst_11155 = inst_11174;var inst_11156 = inst_11173;var inst_11157 = inst_11175;var inst_11158 = (0);var state_11198__$1 = (function (){var statearr_11215 = state_11198;(statearr_11215[(8)] = inst_11157);
(statearr_11215[(10)] = inst_11155);
(statearr_11215[(11)] = inst_11158);
(statearr_11215[(12)] = inst_11156);
return statearr_11215;
})();var statearr_11216_11245 = state_11198__$1;(statearr_11216_11245[(2)] = null);
(statearr_11216_11245[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11199 === (3)))
{var inst_11196 = (state_11198[(2)]);var state_11198__$1 = state_11198;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11198__$1,inst_11196);
} else
{if((state_val_11199 === (12)))
{var inst_11189 = (state_11198[(2)]);var state_11198__$1 = state_11198;var statearr_11217_11246 = state_11198__$1;(statearr_11217_11246[(2)] = inst_11189);
(statearr_11217_11246[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11199 === (2)))
{var state_11198__$1 = state_11198;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11198__$1,(4),in$);
} else
{if((state_val_11199 === (19)))
{var inst_11184 = (state_11198[(2)]);var state_11198__$1 = state_11198;var statearr_11218_11247 = state_11198__$1;(statearr_11218_11247[(2)] = inst_11184);
(statearr_11218_11247[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11199 === (11)))
{var inst_11155 = (state_11198[(10)]);var inst_11169 = (state_11198[(7)]);var inst_11169__$1 = cljs.core.seq.call(null,inst_11155);var state_11198__$1 = (function (){var statearr_11219 = state_11198;(statearr_11219[(7)] = inst_11169__$1);
return statearr_11219;
})();if(inst_11169__$1)
{var statearr_11220_11248 = state_11198__$1;(statearr_11220_11248[(1)] = (14));
} else
{var statearr_11221_11249 = state_11198__$1;(statearr_11221_11249[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11199 === (9)))
{var inst_11191 = (state_11198[(2)]);var state_11198__$1 = (function (){var statearr_11222 = state_11198;(statearr_11222[(15)] = inst_11191);
return statearr_11222;
})();var statearr_11223_11250 = state_11198__$1;(statearr_11223_11250[(2)] = null);
(statearr_11223_11250[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11199 === (5)))
{var inst_11147 = cljs.core.async.close_BANG_.call(null,out);var state_11198__$1 = state_11198;var statearr_11224_11251 = state_11198__$1;(statearr_11224_11251[(2)] = inst_11147);
(statearr_11224_11251[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11199 === (14)))
{var inst_11169 = (state_11198[(7)]);var inst_11171 = cljs.core.chunked_seq_QMARK_.call(null,inst_11169);var state_11198__$1 = state_11198;if(inst_11171)
{var statearr_11225_11252 = state_11198__$1;(statearr_11225_11252[(1)] = (17));
} else
{var statearr_11226_11253 = state_11198__$1;(statearr_11226_11253[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11199 === (16)))
{var inst_11187 = (state_11198[(2)]);var state_11198__$1 = state_11198;var statearr_11227_11254 = state_11198__$1;(statearr_11227_11254[(2)] = inst_11187);
(statearr_11227_11254[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11199 === (10)))
{var inst_11158 = (state_11198[(11)]);var inst_11156 = (state_11198[(12)]);var inst_11163 = cljs.core._nth.call(null,inst_11156,inst_11158);var state_11198__$1 = state_11198;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11198__$1,(13),out,inst_11163);
} else
{if((state_val_11199 === (18)))
{var inst_11169 = (state_11198[(7)]);var inst_11178 = cljs.core.first.call(null,inst_11169);var state_11198__$1 = state_11198;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11198__$1,(20),out,inst_11178);
} else
{if((state_val_11199 === (8)))
{var inst_11157 = (state_11198[(8)]);var inst_11158 = (state_11198[(11)]);var inst_11160 = (inst_11158 < inst_11157);var inst_11161 = inst_11160;var state_11198__$1 = state_11198;if(cljs.core.truth_(inst_11161))
{var statearr_11228_11255 = state_11198__$1;(statearr_11228_11255[(1)] = (10));
} else
{var statearr_11229_11256 = state_11198__$1;(statearr_11229_11256[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6912__auto__))
;return ((function (switch__6847__auto__,c__6912__auto__){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){var statearr_11233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11233[(0)] = state_machine__6848__auto__);
(statearr_11233[(1)] = (1));
return statearr_11233;
});
var state_machine__6848__auto____1 = (function (state_11198){while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_11198);if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6850__auto__;
}
break;
}
}catch (e11234){if((e11234 instanceof Object))
{var ex__6851__auto__ = e11234;var statearr_11235_11257 = state_11198;(statearr_11235_11257[(5)] = ex__6851__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11198);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11234;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11258 = state_11198;
state_11198 = G__11258;
continue;
}
} else
{return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_11198){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_11198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6912__auto__))
})();var state__6914__auto__ = (function (){var statearr_11236 = f__6913__auto__.call(null);(statearr_11236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6912__auto__);
return statearr_11236;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6914__auto__);
});})(c__6912__auto__))
);
return c__6912__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6912__auto___11339 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6912__auto___11339){
return (function (){var f__6913__auto__ = (function (){var switch__6847__auto__ = ((function (c__6912__auto___11339){
return (function (state_11318){var state_val_11319 = (state_11318[(1)]);if((state_val_11319 === (7)))
{var inst_11314 = (state_11318[(2)]);var state_11318__$1 = state_11318;var statearr_11320_11340 = state_11318__$1;(statearr_11320_11340[(2)] = inst_11314);
(statearr_11320_11340[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11319 === (1)))
{var state_11318__$1 = state_11318;var statearr_11321_11341 = state_11318__$1;(statearr_11321_11341[(2)] = null);
(statearr_11321_11341[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11319 === (4)))
{var inst_11301 = (state_11318[(7)]);var inst_11301__$1 = (state_11318[(2)]);var inst_11302 = (inst_11301__$1 == null);var state_11318__$1 = (function (){var statearr_11322 = state_11318;(statearr_11322[(7)] = inst_11301__$1);
return statearr_11322;
})();if(cljs.core.truth_(inst_11302))
{var statearr_11323_11342 = state_11318__$1;(statearr_11323_11342[(1)] = (5));
} else
{var statearr_11324_11343 = state_11318__$1;(statearr_11324_11343[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11319 === (6)))
{var inst_11301 = (state_11318[(7)]);var state_11318__$1 = state_11318;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11318__$1,(11),to,inst_11301);
} else
{if((state_val_11319 === (3)))
{var inst_11316 = (state_11318[(2)]);var state_11318__$1 = state_11318;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11318__$1,inst_11316);
} else
{if((state_val_11319 === (2)))
{var state_11318__$1 = state_11318;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11318__$1,(4),from);
} else
{if((state_val_11319 === (11)))
{var inst_11311 = (state_11318[(2)]);var state_11318__$1 = (function (){var statearr_11325 = state_11318;(statearr_11325[(8)] = inst_11311);
return statearr_11325;
})();var statearr_11326_11344 = state_11318__$1;(statearr_11326_11344[(2)] = null);
(statearr_11326_11344[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11319 === (9)))
{var state_11318__$1 = state_11318;var statearr_11327_11345 = state_11318__$1;(statearr_11327_11345[(2)] = null);
(statearr_11327_11345[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11319 === (5)))
{var state_11318__$1 = state_11318;if(cljs.core.truth_(close_QMARK_))
{var statearr_11328_11346 = state_11318__$1;(statearr_11328_11346[(1)] = (8));
} else
{var statearr_11329_11347 = state_11318__$1;(statearr_11329_11347[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11319 === (10)))
{var inst_11308 = (state_11318[(2)]);var state_11318__$1 = state_11318;var statearr_11330_11348 = state_11318__$1;(statearr_11330_11348[(2)] = inst_11308);
(statearr_11330_11348[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11319 === (8)))
{var inst_11305 = cljs.core.async.close_BANG_.call(null,to);var state_11318__$1 = state_11318;var statearr_11331_11349 = state_11318__$1;(statearr_11331_11349[(2)] = inst_11305);
(statearr_11331_11349[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6912__auto___11339))
;return ((function (switch__6847__auto__,c__6912__auto___11339){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){var statearr_11335 = [null,null,null,null,null,null,null,null,null];(statearr_11335[(0)] = state_machine__6848__auto__);
(statearr_11335[(1)] = (1));
return statearr_11335;
});
var state_machine__6848__auto____1 = (function (state_11318){while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_11318);if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6850__auto__;
}
break;
}
}catch (e11336){if((e11336 instanceof Object))
{var ex__6851__auto__ = e11336;var statearr_11337_11350 = state_11318;(statearr_11337_11350[(5)] = ex__6851__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11318);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11336;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11351 = state_11318;
state_11318 = G__11351;
continue;
}
} else
{return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_11318){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_11318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6912__auto___11339))
})();var state__6914__auto__ = (function (){var statearr_11338 = f__6913__auto__.call(null);(statearr_11338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6912__auto___11339);
return statearr_11338;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6914__auto__);
});})(c__6912__auto___11339))
);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6912__auto___11438 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6912__auto___11438,tc,fc){
return (function (){var f__6913__auto__ = (function (){var switch__6847__auto__ = ((function (c__6912__auto___11438,tc,fc){
return (function (state_11416){var state_val_11417 = (state_11416[(1)]);if((state_val_11417 === (7)))
{var inst_11412 = (state_11416[(2)]);var state_11416__$1 = state_11416;var statearr_11418_11439 = state_11416__$1;(statearr_11418_11439[(2)] = inst_11412);
(statearr_11418_11439[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11417 === (1)))
{var state_11416__$1 = state_11416;var statearr_11419_11440 = state_11416__$1;(statearr_11419_11440[(2)] = null);
(statearr_11419_11440[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11417 === (4)))
{var inst_11397 = (state_11416[(7)]);var inst_11397__$1 = (state_11416[(2)]);var inst_11398 = (inst_11397__$1 == null);var state_11416__$1 = (function (){var statearr_11420 = state_11416;(statearr_11420[(7)] = inst_11397__$1);
return statearr_11420;
})();if(cljs.core.truth_(inst_11398))
{var statearr_11421_11441 = state_11416__$1;(statearr_11421_11441[(1)] = (5));
} else
{var statearr_11422_11442 = state_11416__$1;(statearr_11422_11442[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11417 === (6)))
{var inst_11397 = (state_11416[(7)]);var inst_11403 = p.call(null,inst_11397);var state_11416__$1 = state_11416;if(cljs.core.truth_(inst_11403))
{var statearr_11423_11443 = state_11416__$1;(statearr_11423_11443[(1)] = (9));
} else
{var statearr_11424_11444 = state_11416__$1;(statearr_11424_11444[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11417 === (3)))
{var inst_11414 = (state_11416[(2)]);var state_11416__$1 = state_11416;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11416__$1,inst_11414);
} else
{if((state_val_11417 === (2)))
{var state_11416__$1 = state_11416;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11416__$1,(4),ch);
} else
{if((state_val_11417 === (11)))
{var inst_11397 = (state_11416[(7)]);var inst_11407 = (state_11416[(2)]);var state_11416__$1 = state_11416;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11416__$1,(8),inst_11407,inst_11397);
} else
{if((state_val_11417 === (9)))
{var state_11416__$1 = state_11416;var statearr_11425_11445 = state_11416__$1;(statearr_11425_11445[(2)] = tc);
(statearr_11425_11445[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11417 === (5)))
{var inst_11400 = cljs.core.async.close_BANG_.call(null,tc);var inst_11401 = cljs.core.async.close_BANG_.call(null,fc);var state_11416__$1 = (function (){var statearr_11426 = state_11416;(statearr_11426[(8)] = inst_11400);
return statearr_11426;
})();var statearr_11427_11446 = state_11416__$1;(statearr_11427_11446[(2)] = inst_11401);
(statearr_11427_11446[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11417 === (10)))
{var state_11416__$1 = state_11416;var statearr_11428_11447 = state_11416__$1;(statearr_11428_11447[(2)] = fc);
(statearr_11428_11447[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11417 === (8)))
{var inst_11409 = (state_11416[(2)]);var state_11416__$1 = (function (){var statearr_11429 = state_11416;(statearr_11429[(9)] = inst_11409);
return statearr_11429;
})();var statearr_11430_11448 = state_11416__$1;(statearr_11430_11448[(2)] = null);
(statearr_11430_11448[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6912__auto___11438,tc,fc))
;return ((function (switch__6847__auto__,c__6912__auto___11438,tc,fc){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){var statearr_11434 = [null,null,null,null,null,null,null,null,null,null];(statearr_11434[(0)] = state_machine__6848__auto__);
(statearr_11434[(1)] = (1));
return statearr_11434;
});
var state_machine__6848__auto____1 = (function (state_11416){while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_11416);if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6850__auto__;
}
break;
}
}catch (e11435){if((e11435 instanceof Object))
{var ex__6851__auto__ = e11435;var statearr_11436_11449 = state_11416;(statearr_11436_11449[(5)] = ex__6851__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11416);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11435;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11450 = state_11416;
state_11416 = G__11450;
continue;
}
} else
{return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_11416){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_11416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6912__auto___11438,tc,fc))
})();var state__6914__auto__ = (function (){var statearr_11437 = f__6913__auto__.call(null);(statearr_11437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6912__auto___11438);
return statearr_11437;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6914__auto__);
});})(c__6912__auto___11438,tc,fc))
);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6912__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6912__auto__){
return (function (){var f__6913__auto__ = (function (){var switch__6847__auto__ = ((function (c__6912__auto__){
return (function (state_11497){var state_val_11498 = (state_11497[(1)]);if((state_val_11498 === (7)))
{var inst_11493 = (state_11497[(2)]);var state_11497__$1 = state_11497;var statearr_11499_11515 = state_11497__$1;(statearr_11499_11515[(2)] = inst_11493);
(statearr_11499_11515[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11498 === (6)))
{var inst_11486 = (state_11497[(7)]);var inst_11483 = (state_11497[(8)]);var inst_11490 = f.call(null,inst_11483,inst_11486);var inst_11483__$1 = inst_11490;var state_11497__$1 = (function (){var statearr_11500 = state_11497;(statearr_11500[(8)] = inst_11483__$1);
return statearr_11500;
})();var statearr_11501_11516 = state_11497__$1;(statearr_11501_11516[(2)] = null);
(statearr_11501_11516[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11498 === (5)))
{var inst_11483 = (state_11497[(8)]);var state_11497__$1 = state_11497;var statearr_11502_11517 = state_11497__$1;(statearr_11502_11517[(2)] = inst_11483);
(statearr_11502_11517[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11498 === (4)))
{var inst_11486 = (state_11497[(7)]);var inst_11486__$1 = (state_11497[(2)]);var inst_11487 = (inst_11486__$1 == null);var state_11497__$1 = (function (){var statearr_11503 = state_11497;(statearr_11503[(7)] = inst_11486__$1);
return statearr_11503;
})();if(cljs.core.truth_(inst_11487))
{var statearr_11504_11518 = state_11497__$1;(statearr_11504_11518[(1)] = (5));
} else
{var statearr_11505_11519 = state_11497__$1;(statearr_11505_11519[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11498 === (3)))
{var inst_11495 = (state_11497[(2)]);var state_11497__$1 = state_11497;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11497__$1,inst_11495);
} else
{if((state_val_11498 === (2)))
{var state_11497__$1 = state_11497;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11497__$1,(4),ch);
} else
{if((state_val_11498 === (1)))
{var inst_11483 = init;var state_11497__$1 = (function (){var statearr_11506 = state_11497;(statearr_11506[(8)] = inst_11483);
return statearr_11506;
})();var statearr_11507_11520 = state_11497__$1;(statearr_11507_11520[(2)] = null);
(statearr_11507_11520[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6912__auto__))
;return ((function (switch__6847__auto__,c__6912__auto__){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){var statearr_11511 = [null,null,null,null,null,null,null,null,null];(statearr_11511[(0)] = state_machine__6848__auto__);
(statearr_11511[(1)] = (1));
return statearr_11511;
});
var state_machine__6848__auto____1 = (function (state_11497){while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_11497);if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6850__auto__;
}
break;
}
}catch (e11512){if((e11512 instanceof Object))
{var ex__6851__auto__ = e11512;var statearr_11513_11521 = state_11497;(statearr_11513_11521[(5)] = ex__6851__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11497);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11512;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11522 = state_11497;
state_11497 = G__11522;
continue;
}
} else
{return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_11497){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_11497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6912__auto__))
})();var state__6914__auto__ = (function (){var statearr_11514 = f__6913__auto__.call(null);(statearr_11514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6912__auto__);
return statearr_11514;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6914__auto__);
});})(c__6912__auto__))
);
return c__6912__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6912__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6912__auto__){
return (function (){var f__6913__auto__ = (function (){var switch__6847__auto__ = ((function (c__6912__auto__){
return (function (state_11584){var state_val_11585 = (state_11584[(1)]);if((state_val_11585 === (7)))
{var inst_11565 = (state_11584[(7)]);var inst_11570 = (state_11584[(2)]);var inst_11571 = cljs.core.next.call(null,inst_11565);var inst_11565__$1 = inst_11571;var state_11584__$1 = (function (){var statearr_11586 = state_11584;(statearr_11586[(8)] = inst_11570);
(statearr_11586[(7)] = inst_11565__$1);
return statearr_11586;
})();var statearr_11587_11605 = state_11584__$1;(statearr_11587_11605[(2)] = null);
(statearr_11587_11605[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11585 === (1)))
{var inst_11564 = cljs.core.seq.call(null,coll);var inst_11565 = inst_11564;var state_11584__$1 = (function (){var statearr_11588 = state_11584;(statearr_11588[(7)] = inst_11565);
return statearr_11588;
})();var statearr_11589_11606 = state_11584__$1;(statearr_11589_11606[(2)] = null);
(statearr_11589_11606[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11585 === (4)))
{var inst_11565 = (state_11584[(7)]);var inst_11568 = cljs.core.first.call(null,inst_11565);var state_11584__$1 = state_11584;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11584__$1,(7),ch,inst_11568);
} else
{if((state_val_11585 === (6)))
{var inst_11580 = (state_11584[(2)]);var state_11584__$1 = state_11584;var statearr_11590_11607 = state_11584__$1;(statearr_11590_11607[(2)] = inst_11580);
(statearr_11590_11607[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11585 === (3)))
{var inst_11582 = (state_11584[(2)]);var state_11584__$1 = state_11584;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11584__$1,inst_11582);
} else
{if((state_val_11585 === (2)))
{var inst_11565 = (state_11584[(7)]);var state_11584__$1 = state_11584;if(cljs.core.truth_(inst_11565))
{var statearr_11591_11608 = state_11584__$1;(statearr_11591_11608[(1)] = (4));
} else
{var statearr_11592_11609 = state_11584__$1;(statearr_11592_11609[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11585 === (9)))
{var state_11584__$1 = state_11584;var statearr_11593_11610 = state_11584__$1;(statearr_11593_11610[(2)] = null);
(statearr_11593_11610[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11585 === (5)))
{var state_11584__$1 = state_11584;if(cljs.core.truth_(close_QMARK_))
{var statearr_11594_11611 = state_11584__$1;(statearr_11594_11611[(1)] = (8));
} else
{var statearr_11595_11612 = state_11584__$1;(statearr_11595_11612[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11585 === (10)))
{var inst_11578 = (state_11584[(2)]);var state_11584__$1 = state_11584;var statearr_11596_11613 = state_11584__$1;(statearr_11596_11613[(2)] = inst_11578);
(statearr_11596_11613[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11585 === (8)))
{var inst_11575 = cljs.core.async.close_BANG_.call(null,ch);var state_11584__$1 = state_11584;var statearr_11597_11614 = state_11584__$1;(statearr_11597_11614[(2)] = inst_11575);
(statearr_11597_11614[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6912__auto__))
;return ((function (switch__6847__auto__,c__6912__auto__){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){var statearr_11601 = [null,null,null,null,null,null,null,null,null];(statearr_11601[(0)] = state_machine__6848__auto__);
(statearr_11601[(1)] = (1));
return statearr_11601;
});
var state_machine__6848__auto____1 = (function (state_11584){while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_11584);if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6850__auto__;
}
break;
}
}catch (e11602){if((e11602 instanceof Object))
{var ex__6851__auto__ = e11602;var statearr_11603_11615 = state_11584;(statearr_11603_11615[(5)] = ex__6851__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11584);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11602;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11616 = state_11584;
state_11584 = G__11616;
continue;
}
} else
{return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_11584){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_11584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6912__auto__))
})();var state__6914__auto__ = (function (){var statearr_11604 = f__6913__auto__.call(null);(statearr_11604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6912__auto__);
return statearr_11604;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6914__auto__);
});})(c__6912__auto__))
);
return c__6912__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11618 = {};return obj11618;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3540__auto__ = _;if(and__3540__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3540__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4179__auto__ = (((_ == null))?null:_);return (function (){var or__3552__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4179__auto__)]);if(or__3552__auto__)
{return or__3552__auto__;
} else
{var or__3552__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3552__auto____$1)
{return or__3552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11620 = {};return obj11620;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3540__auto__ = m;if(and__3540__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3540__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4179__auto__ = (((m == null))?null:m);return (function (){var or__3552__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4179__auto__)]);if(or__3552__auto__)
{return or__3552__auto__;
} else
{var or__3552__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3552__auto____$1)
{return or__3552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3540__auto__ = m;if(and__3540__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3540__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4179__auto__ = (((m == null))?null:m);return (function (){var or__3552__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4179__auto__)]);if(or__3552__auto__)
{return or__3552__auto__;
} else
{var or__3552__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3552__auto____$1)
{return or__3552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3540__auto__ = m;if(and__3540__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3540__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4179__auto__ = (((m == null))?null:m);return (function (){var or__3552__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4179__auto__)]);if(or__3552__auto__)
{return or__3552__auto__;
} else
{var or__3552__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3552__auto____$1)
{return or__3552__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11844 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11844 = (function (cs,ch,mult,meta11845){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11845 = meta11845;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11844.cljs$lang$type = true;
cljs.core.async.t11844.cljs$lang$ctorStr = "cljs.core.async/t11844";
cljs.core.async.t11844.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4119__auto__,writer__4120__auto__,opt__4121__auto__){return cljs.core._write.call(null,writer__4120__auto__,"cljs.core.async/t11844");
});})(cs))
;
cljs.core.async.t11844.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11844.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11844.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11844.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11844.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11844.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11844.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11846){var self__ = this;
var _11846__$1 = this;return self__.meta11845;
});})(cs))
;
cljs.core.async.t11844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11846,meta11845__$1){var self__ = this;
var _11846__$1 = this;return (new cljs.core.async.t11844(self__.cs,self__.ch,self__.mult,meta11845__$1));
});})(cs))
;
cljs.core.async.__GT_t11844 = ((function (cs){
return (function __GT_t11844(cs__$1,ch__$1,mult__$1,meta11845){return (new cljs.core.async.t11844(cs__$1,ch__$1,mult__$1,meta11845));
});})(cs))
;
}
return (new cljs.core.async.t11844(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6912__auto___12067 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6912__auto___12067,cs,m,dchan,dctr,done){
return (function (){var f__6913__auto__ = (function (){var switch__6847__auto__ = ((function (c__6912__auto___12067,cs,m,dchan,dctr,done){
return (function (state_11981){var state_val_11982 = (state_11981[(1)]);if((state_val_11982 === (7)))
{var inst_11977 = (state_11981[(2)]);var state_11981__$1 = state_11981;var statearr_11983_12068 = state_11981__$1;(statearr_11983_12068[(2)] = inst_11977);
(statearr_11983_12068[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (20)))
{var inst_11878 = (state_11981[(7)]);var inst_11888 = cljs.core.first.call(null,inst_11878);var inst_11889 = cljs.core.nth.call(null,inst_11888,(0),null);var inst_11890 = cljs.core.nth.call(null,inst_11888,(1),null);var state_11981__$1 = (function (){var statearr_11984 = state_11981;(statearr_11984[(8)] = inst_11889);
return statearr_11984;
})();if(cljs.core.truth_(inst_11890))
{var statearr_11985_12069 = state_11981__$1;(statearr_11985_12069[(1)] = (22));
} else
{var statearr_11986_12070 = state_11981__$1;(statearr_11986_12070[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (27)))
{var inst_11918 = (state_11981[(9)]);var inst_11920 = (state_11981[(10)]);var inst_11925 = cljs.core._nth.call(null,inst_11918,inst_11920);var state_11981__$1 = (function (){var statearr_11987 = state_11981;(statearr_11987[(11)] = inst_11925);
return statearr_11987;
})();var statearr_11988_12071 = state_11981__$1;(statearr_11988_12071[(2)] = null);
(statearr_11988_12071[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (1)))
{var state_11981__$1 = state_11981;var statearr_11989_12072 = state_11981__$1;(statearr_11989_12072[(2)] = null);
(statearr_11989_12072[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (24)))
{var inst_11878 = (state_11981[(7)]);var inst_11895 = (state_11981[(2)]);var inst_11896 = cljs.core.next.call(null,inst_11878);var inst_11858 = inst_11896;var inst_11859 = null;var inst_11860 = (0);var inst_11861 = (0);var state_11981__$1 = (function (){var statearr_11990 = state_11981;(statearr_11990[(12)] = inst_11858);
(statearr_11990[(13)] = inst_11860);
(statearr_11990[(14)] = inst_11861);
(statearr_11990[(15)] = inst_11895);
(statearr_11990[(16)] = inst_11859);
return statearr_11990;
})();var statearr_11991_12073 = state_11981__$1;(statearr_11991_12073[(2)] = null);
(statearr_11991_12073[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (39)))
{var inst_11938 = (state_11981[(17)]);var inst_11956 = (state_11981[(2)]);var inst_11957 = cljs.core.next.call(null,inst_11938);var inst_11917 = inst_11957;var inst_11918 = null;var inst_11919 = (0);var inst_11920 = (0);var state_11981__$1 = (function (){var statearr_11995 = state_11981;(statearr_11995[(9)] = inst_11918);
(statearr_11995[(18)] = inst_11917);
(statearr_11995[(19)] = inst_11956);
(statearr_11995[(20)] = inst_11919);
(statearr_11995[(10)] = inst_11920);
return statearr_11995;
})();var statearr_11996_12074 = state_11981__$1;(statearr_11996_12074[(2)] = null);
(statearr_11996_12074[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (4)))
{var inst_11849 = (state_11981[(21)]);var inst_11849__$1 = (state_11981[(2)]);var inst_11850 = (inst_11849__$1 == null);var state_11981__$1 = (function (){var statearr_11997 = state_11981;(statearr_11997[(21)] = inst_11849__$1);
return statearr_11997;
})();if(cljs.core.truth_(inst_11850))
{var statearr_11998_12075 = state_11981__$1;(statearr_11998_12075[(1)] = (5));
} else
{var statearr_11999_12076 = state_11981__$1;(statearr_11999_12076[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (15)))
{var inst_11858 = (state_11981[(12)]);var inst_11860 = (state_11981[(13)]);var inst_11861 = (state_11981[(14)]);var inst_11859 = (state_11981[(16)]);var inst_11874 = (state_11981[(2)]);var inst_11875 = (inst_11861 + (1));var tmp11992 = inst_11858;var tmp11993 = inst_11860;var tmp11994 = inst_11859;var inst_11858__$1 = tmp11992;var inst_11859__$1 = tmp11994;var inst_11860__$1 = tmp11993;var inst_11861__$1 = inst_11875;var state_11981__$1 = (function (){var statearr_12000 = state_11981;(statearr_12000[(12)] = inst_11858__$1);
(statearr_12000[(13)] = inst_11860__$1);
(statearr_12000[(22)] = inst_11874);
(statearr_12000[(14)] = inst_11861__$1);
(statearr_12000[(16)] = inst_11859__$1);
return statearr_12000;
})();var statearr_12001_12077 = state_11981__$1;(statearr_12001_12077[(2)] = null);
(statearr_12001_12077[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (21)))
{var inst_11899 = (state_11981[(2)]);var state_11981__$1 = state_11981;var statearr_12002_12078 = state_11981__$1;(statearr_12002_12078[(2)] = inst_11899);
(statearr_12002_12078[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (31)))
{var inst_11925 = (state_11981[(11)]);var inst_11926 = (state_11981[(2)]);var inst_11927 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11928 = cljs.core.async.untap_STAR_.call(null,m,inst_11925);var state_11981__$1 = (function (){var statearr_12003 = state_11981;(statearr_12003[(23)] = inst_11927);
(statearr_12003[(24)] = inst_11926);
return statearr_12003;
})();var statearr_12004_12079 = state_11981__$1;(statearr_12004_12079[(2)] = inst_11928);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11981__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (32)))
{var inst_11849 = (state_11981[(21)]);var inst_11925 = (state_11981[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11981,(31),Object,null,(30));var inst_11932 = cljs.core.async.put_BANG_.call(null,inst_11925,inst_11849,done);var state_11981__$1 = state_11981;var statearr_12005_12080 = state_11981__$1;(statearr_12005_12080[(2)] = inst_11932);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11981__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (40)))
{var inst_11947 = (state_11981[(25)]);var inst_11948 = (state_11981[(2)]);var inst_11949 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11950 = cljs.core.async.untap_STAR_.call(null,m,inst_11947);var state_11981__$1 = (function (){var statearr_12006 = state_11981;(statearr_12006[(26)] = inst_11949);
(statearr_12006[(27)] = inst_11948);
return statearr_12006;
})();var statearr_12007_12081 = state_11981__$1;(statearr_12007_12081[(2)] = inst_11950);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11981__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (33)))
{var inst_11938 = (state_11981[(17)]);var inst_11940 = cljs.core.chunked_seq_QMARK_.call(null,inst_11938);var state_11981__$1 = state_11981;if(inst_11940)
{var statearr_12008_12082 = state_11981__$1;(statearr_12008_12082[(1)] = (36));
} else
{var statearr_12009_12083 = state_11981__$1;(statearr_12009_12083[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (13)))
{var inst_11868 = (state_11981[(28)]);var inst_11871 = cljs.core.async.close_BANG_.call(null,inst_11868);var state_11981__$1 = state_11981;var statearr_12010_12084 = state_11981__$1;(statearr_12010_12084[(2)] = inst_11871);
(statearr_12010_12084[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (22)))
{var inst_11889 = (state_11981[(8)]);var inst_11892 = cljs.core.async.close_BANG_.call(null,inst_11889);var state_11981__$1 = state_11981;var statearr_12011_12085 = state_11981__$1;(statearr_12011_12085[(2)] = inst_11892);
(statearr_12011_12085[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (36)))
{var inst_11938 = (state_11981[(17)]);var inst_11942 = cljs.core.chunk_first.call(null,inst_11938);var inst_11943 = cljs.core.chunk_rest.call(null,inst_11938);var inst_11944 = cljs.core.count.call(null,inst_11942);var inst_11917 = inst_11943;var inst_11918 = inst_11942;var inst_11919 = inst_11944;var inst_11920 = (0);var state_11981__$1 = (function (){var statearr_12012 = state_11981;(statearr_12012[(9)] = inst_11918);
(statearr_12012[(18)] = inst_11917);
(statearr_12012[(20)] = inst_11919);
(statearr_12012[(10)] = inst_11920);
return statearr_12012;
})();var statearr_12013_12086 = state_11981__$1;(statearr_12013_12086[(2)] = null);
(statearr_12013_12086[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (41)))
{var inst_11947 = (state_11981[(25)]);var inst_11849 = (state_11981[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11981,(40),Object,null,(39));var inst_11954 = cljs.core.async.put_BANG_.call(null,inst_11947,inst_11849,done);var state_11981__$1 = state_11981;var statearr_12014_12087 = state_11981__$1;(statearr_12014_12087[(2)] = inst_11954);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11981__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (43)))
{var state_11981__$1 = state_11981;var statearr_12015_12088 = state_11981__$1;(statearr_12015_12088[(2)] = null);
(statearr_12015_12088[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (29)))
{var inst_11965 = (state_11981[(2)]);var state_11981__$1 = state_11981;var statearr_12016_12089 = state_11981__$1;(statearr_12016_12089[(2)] = inst_11965);
(statearr_12016_12089[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (44)))
{var inst_11974 = (state_11981[(2)]);var state_11981__$1 = (function (){var statearr_12017 = state_11981;(statearr_12017[(29)] = inst_11974);
return statearr_12017;
})();var statearr_12018_12090 = state_11981__$1;(statearr_12018_12090[(2)] = null);
(statearr_12018_12090[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (6)))
{var inst_11909 = (state_11981[(30)]);var inst_11908 = cljs.core.deref.call(null,cs);var inst_11909__$1 = cljs.core.keys.call(null,inst_11908);var inst_11910 = cljs.core.count.call(null,inst_11909__$1);var inst_11911 = cljs.core.reset_BANG_.call(null,dctr,inst_11910);var inst_11916 = cljs.core.seq.call(null,inst_11909__$1);var inst_11917 = inst_11916;var inst_11918 = null;var inst_11919 = (0);var inst_11920 = (0);var state_11981__$1 = (function (){var statearr_12019 = state_11981;(statearr_12019[(9)] = inst_11918);
(statearr_12019[(30)] = inst_11909__$1);
(statearr_12019[(18)] = inst_11917);
(statearr_12019[(20)] = inst_11919);
(statearr_12019[(10)] = inst_11920);
(statearr_12019[(31)] = inst_11911);
return statearr_12019;
})();var statearr_12020_12091 = state_11981__$1;(statearr_12020_12091[(2)] = null);
(statearr_12020_12091[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (28)))
{var inst_11917 = (state_11981[(18)]);var inst_11938 = (state_11981[(17)]);var inst_11938__$1 = cljs.core.seq.call(null,inst_11917);var state_11981__$1 = (function (){var statearr_12021 = state_11981;(statearr_12021[(17)] = inst_11938__$1);
return statearr_12021;
})();if(inst_11938__$1)
{var statearr_12022_12092 = state_11981__$1;(statearr_12022_12092[(1)] = (33));
} else
{var statearr_12023_12093 = state_11981__$1;(statearr_12023_12093[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (25)))
{var inst_11919 = (state_11981[(20)]);var inst_11920 = (state_11981[(10)]);var inst_11922 = (inst_11920 < inst_11919);var inst_11923 = inst_11922;var state_11981__$1 = state_11981;if(cljs.core.truth_(inst_11923))
{var statearr_12024_12094 = state_11981__$1;(statearr_12024_12094[(1)] = (27));
} else
{var statearr_12025_12095 = state_11981__$1;(statearr_12025_12095[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (34)))
{var state_11981__$1 = state_11981;var statearr_12026_12096 = state_11981__$1;(statearr_12026_12096[(2)] = null);
(statearr_12026_12096[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (17)))
{var state_11981__$1 = state_11981;var statearr_12027_12097 = state_11981__$1;(statearr_12027_12097[(2)] = null);
(statearr_12027_12097[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (3)))
{var inst_11979 = (state_11981[(2)]);var state_11981__$1 = state_11981;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11981__$1,inst_11979);
} else
{if((state_val_11982 === (12)))
{var inst_11904 = (state_11981[(2)]);var state_11981__$1 = state_11981;var statearr_12028_12098 = state_11981__$1;(statearr_12028_12098[(2)] = inst_11904);
(statearr_12028_12098[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (2)))
{var state_11981__$1 = state_11981;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11981__$1,(4),ch);
} else
{if((state_val_11982 === (23)))
{var state_11981__$1 = state_11981;var statearr_12029_12099 = state_11981__$1;(statearr_12029_12099[(2)] = null);
(statearr_12029_12099[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (35)))
{var inst_11963 = (state_11981[(2)]);var state_11981__$1 = state_11981;var statearr_12030_12100 = state_11981__$1;(statearr_12030_12100[(2)] = inst_11963);
(statearr_12030_12100[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (19)))
{var inst_11878 = (state_11981[(7)]);var inst_11882 = cljs.core.chunk_first.call(null,inst_11878);var inst_11883 = cljs.core.chunk_rest.call(null,inst_11878);var inst_11884 = cljs.core.count.call(null,inst_11882);var inst_11858 = inst_11883;var inst_11859 = inst_11882;var inst_11860 = inst_11884;var inst_11861 = (0);var state_11981__$1 = (function (){var statearr_12031 = state_11981;(statearr_12031[(12)] = inst_11858);
(statearr_12031[(13)] = inst_11860);
(statearr_12031[(14)] = inst_11861);
(statearr_12031[(16)] = inst_11859);
return statearr_12031;
})();var statearr_12032_12101 = state_11981__$1;(statearr_12032_12101[(2)] = null);
(statearr_12032_12101[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (11)))
{var inst_11858 = (state_11981[(12)]);var inst_11878 = (state_11981[(7)]);var inst_11878__$1 = cljs.core.seq.call(null,inst_11858);var state_11981__$1 = (function (){var statearr_12033 = state_11981;(statearr_12033[(7)] = inst_11878__$1);
return statearr_12033;
})();if(inst_11878__$1)
{var statearr_12034_12102 = state_11981__$1;(statearr_12034_12102[(1)] = (16));
} else
{var statearr_12035_12103 = state_11981__$1;(statearr_12035_12103[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (9)))
{var inst_11906 = (state_11981[(2)]);var state_11981__$1 = state_11981;var statearr_12036_12104 = state_11981__$1;(statearr_12036_12104[(2)] = inst_11906);
(statearr_12036_12104[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (5)))
{var inst_11856 = cljs.core.deref.call(null,cs);var inst_11857 = cljs.core.seq.call(null,inst_11856);var inst_11858 = inst_11857;var inst_11859 = null;var inst_11860 = (0);var inst_11861 = (0);var state_11981__$1 = (function (){var statearr_12037 = state_11981;(statearr_12037[(12)] = inst_11858);
(statearr_12037[(13)] = inst_11860);
(statearr_12037[(14)] = inst_11861);
(statearr_12037[(16)] = inst_11859);
return statearr_12037;
})();var statearr_12038_12105 = state_11981__$1;(statearr_12038_12105[(2)] = null);
(statearr_12038_12105[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (14)))
{var state_11981__$1 = state_11981;var statearr_12039_12106 = state_11981__$1;(statearr_12039_12106[(2)] = null);
(statearr_12039_12106[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (45)))
{var inst_11971 = (state_11981[(2)]);var state_11981__$1 = state_11981;var statearr_12040_12107 = state_11981__$1;(statearr_12040_12107[(2)] = inst_11971);
(statearr_12040_12107[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (26)))
{var inst_11909 = (state_11981[(30)]);var inst_11967 = (state_11981[(2)]);var inst_11968 = cljs.core.seq.call(null,inst_11909);var state_11981__$1 = (function (){var statearr_12041 = state_11981;(statearr_12041[(32)] = inst_11967);
return statearr_12041;
})();if(inst_11968)
{var statearr_12042_12108 = state_11981__$1;(statearr_12042_12108[(1)] = (42));
} else
{var statearr_12043_12109 = state_11981__$1;(statearr_12043_12109[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (16)))
{var inst_11878 = (state_11981[(7)]);var inst_11880 = cljs.core.chunked_seq_QMARK_.call(null,inst_11878);var state_11981__$1 = state_11981;if(inst_11880)
{var statearr_12047_12110 = state_11981__$1;(statearr_12047_12110[(1)] = (19));
} else
{var statearr_12048_12111 = state_11981__$1;(statearr_12048_12111[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (38)))
{var inst_11960 = (state_11981[(2)]);var state_11981__$1 = state_11981;var statearr_12049_12112 = state_11981__$1;(statearr_12049_12112[(2)] = inst_11960);
(statearr_12049_12112[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (30)))
{var inst_11918 = (state_11981[(9)]);var inst_11917 = (state_11981[(18)]);var inst_11919 = (state_11981[(20)]);var inst_11920 = (state_11981[(10)]);var inst_11934 = (state_11981[(2)]);var inst_11935 = (inst_11920 + (1));var tmp12044 = inst_11918;var tmp12045 = inst_11917;var tmp12046 = inst_11919;var inst_11917__$1 = tmp12045;var inst_11918__$1 = tmp12044;var inst_11919__$1 = tmp12046;var inst_11920__$1 = inst_11935;var state_11981__$1 = (function (){var statearr_12050 = state_11981;(statearr_12050[(9)] = inst_11918__$1);
(statearr_12050[(33)] = inst_11934);
(statearr_12050[(18)] = inst_11917__$1);
(statearr_12050[(20)] = inst_11919__$1);
(statearr_12050[(10)] = inst_11920__$1);
return statearr_12050;
})();var statearr_12051_12113 = state_11981__$1;(statearr_12051_12113[(2)] = null);
(statearr_12051_12113[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (10)))
{var inst_11861 = (state_11981[(14)]);var inst_11859 = (state_11981[(16)]);var inst_11867 = cljs.core._nth.call(null,inst_11859,inst_11861);var inst_11868 = cljs.core.nth.call(null,inst_11867,(0),null);var inst_11869 = cljs.core.nth.call(null,inst_11867,(1),null);var state_11981__$1 = (function (){var statearr_12052 = state_11981;(statearr_12052[(28)] = inst_11868);
return statearr_12052;
})();if(cljs.core.truth_(inst_11869))
{var statearr_12053_12114 = state_11981__$1;(statearr_12053_12114[(1)] = (13));
} else
{var statearr_12054_12115 = state_11981__$1;(statearr_12054_12115[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (18)))
{var inst_11902 = (state_11981[(2)]);var state_11981__$1 = state_11981;var statearr_12055_12116 = state_11981__$1;(statearr_12055_12116[(2)] = inst_11902);
(statearr_12055_12116[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (42)))
{var state_11981__$1 = state_11981;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11981__$1,(45),dchan);
} else
{if((state_val_11982 === (37)))
{var inst_11938 = (state_11981[(17)]);var inst_11947 = cljs.core.first.call(null,inst_11938);var state_11981__$1 = (function (){var statearr_12056 = state_11981;(statearr_12056[(25)] = inst_11947);
return statearr_12056;
})();var statearr_12057_12117 = state_11981__$1;(statearr_12057_12117[(2)] = null);
(statearr_12057_12117[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11982 === (8)))
{var inst_11860 = (state_11981[(13)]);var inst_11861 = (state_11981[(14)]);var inst_11863 = (inst_11861 < inst_11860);var inst_11864 = inst_11863;var state_11981__$1 = state_11981;if(cljs.core.truth_(inst_11864))
{var statearr_12058_12118 = state_11981__$1;(statearr_12058_12118[(1)] = (10));
} else
{var statearr_12059_12119 = state_11981__$1;(statearr_12059_12119[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6912__auto___12067,cs,m,dchan,dctr,done))
;return ((function (switch__6847__auto__,c__6912__auto___12067,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){var statearr_12063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12063[(0)] = state_machine__6848__auto__);
(statearr_12063[(1)] = (1));
return statearr_12063;
});
var state_machine__6848__auto____1 = (function (state_11981){while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_11981);if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6850__auto__;
}
break;
}
}catch (e12064){if((e12064 instanceof Object))
{var ex__6851__auto__ = e12064;var statearr_12065_12120 = state_11981;(statearr_12065_12120[(5)] = ex__6851__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11981);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12064;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12121 = state_11981;
state_11981 = G__12121;
continue;
}
} else
{return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_11981){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_11981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6912__auto___12067,cs,m,dchan,dctr,done))
})();var state__6914__auto__ = (function (){var statearr_12066 = f__6913__auto__.call(null);(statearr_12066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6912__auto___12067);
return statearr_12066;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6914__auto__);
});})(c__6912__auto___12067,cs,m,dchan,dctr,done))
);
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
cljs.core.async.Mix = (function (){var obj12123 = {};return obj12123;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3540__auto__ = m;if(and__3540__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3540__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4179__auto__ = (((m == null))?null:m);return (function (){var or__3552__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4179__auto__)]);if(or__3552__auto__)
{return or__3552__auto__;
} else
{var or__3552__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3552__auto____$1)
{return or__3552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3540__auto__ = m;if(and__3540__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3540__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4179__auto__ = (((m == null))?null:m);return (function (){var or__3552__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4179__auto__)]);if(or__3552__auto__)
{return or__3552__auto__;
} else
{var or__3552__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3552__auto____$1)
{return or__3552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3540__auto__ = m;if(and__3540__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3540__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4179__auto__ = (((m == null))?null:m);return (function (){var or__3552__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4179__auto__)]);if(or__3552__auto__)
{return or__3552__auto__;
} else
{var or__3552__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3552__auto____$1)
{return or__3552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3540__auto__ = m;if(and__3540__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3540__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4179__auto__ = (((m == null))?null:m);return (function (){var or__3552__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4179__auto__)]);if(or__3552__auto__)
{return or__3552__auto__;
} else
{var or__3552__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3552__auto____$1)
{return or__3552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3540__auto__ = m;if(and__3540__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3540__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4179__auto__ = (((m == null))?null:m);return (function (){var or__3552__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4179__auto__)]);if(or__3552__auto__)
{return or__3552__auto__;
} else
{var or__3552__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3552__auto____$1)
{return or__3552__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12233 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12233 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12234){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12234 = meta12234;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12233.cljs$lang$type = true;
cljs.core.async.t12233.cljs$lang$ctorStr = "cljs.core.async/t12233";
cljs.core.async.t12233.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4119__auto__,writer__4120__auto__,opt__4121__auto__){return cljs.core._write.call(null,writer__4120__auto__,"cljs.core.async/t12233");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12233.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12233.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12233.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12233.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12233.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12233.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12233.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12233.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12233.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12235){var self__ = this;
var _12235__$1 = this;return self__.meta12234;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12235,meta12234__$1){var self__ = this;
var _12235__$1 = this;return (new cljs.core.async.t12233(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12234__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12233 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12233(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12234){return (new cljs.core.async.t12233(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12234));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12233(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6912__auto___12342 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6912__auto___12342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6913__auto__ = (function (){var switch__6847__auto__ = ((function (c__6912__auto___12342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12300){var state_val_12301 = (state_12300[(1)]);if((state_val_12301 === (7)))
{var inst_12249 = (state_12300[(7)]);var inst_12254 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12249);var state_12300__$1 = state_12300;var statearr_12302_12343 = state_12300__$1;(statearr_12302_12343[(2)] = inst_12254);
(statearr_12302_12343[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12301 === (20)))
{var inst_12264 = (state_12300[(8)]);var state_12300__$1 = state_12300;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12300__$1,(23),out,inst_12264);
} else
{if((state_val_12301 === (1)))
{var inst_12239 = (state_12300[(9)]);var inst_12239__$1 = calc_state.call(null);var inst_12240 = cljs.core.seq_QMARK_.call(null,inst_12239__$1);var state_12300__$1 = (function (){var statearr_12303 = state_12300;(statearr_12303[(9)] = inst_12239__$1);
return statearr_12303;
})();if(inst_12240)
{var statearr_12304_12344 = state_12300__$1;(statearr_12304_12344[(1)] = (2));
} else
{var statearr_12305_12345 = state_12300__$1;(statearr_12305_12345[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12301 === (4)))
{var inst_12239 = (state_12300[(9)]);var inst_12245 = (state_12300[(2)]);var inst_12246 = cljs.core.get.call(null,inst_12245,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12247 = cljs.core.get.call(null,inst_12245,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12248 = cljs.core.get.call(null,inst_12245,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12249 = inst_12239;var state_12300__$1 = (function (){var statearr_12306 = state_12300;(statearr_12306[(10)] = inst_12246);
(statearr_12306[(11)] = inst_12248);
(statearr_12306[(12)] = inst_12247);
(statearr_12306[(7)] = inst_12249);
return statearr_12306;
})();var statearr_12307_12346 = state_12300__$1;(statearr_12307_12346[(2)] = null);
(statearr_12307_12346[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12301 === (15)))
{var state_12300__$1 = state_12300;var statearr_12308_12347 = state_12300__$1;(statearr_12308_12347[(2)] = null);
(statearr_12308_12347[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12301 === (21)))
{var state_12300__$1 = state_12300;var statearr_12309_12348 = state_12300__$1;(statearr_12309_12348[(2)] = null);
(statearr_12309_12348[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12301 === (13)))
{var inst_12296 = (state_12300[(2)]);var state_12300__$1 = state_12300;var statearr_12310_12349 = state_12300__$1;(statearr_12310_12349[(2)] = inst_12296);
(statearr_12310_12349[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12301 === (22)))
{var inst_12257 = (state_12300[(13)]);var inst_12293 = (state_12300[(2)]);var inst_12249 = inst_12257;var state_12300__$1 = (function (){var statearr_12311 = state_12300;(statearr_12311[(7)] = inst_12249);
(statearr_12311[(14)] = inst_12293);
return statearr_12311;
})();var statearr_12312_12350 = state_12300__$1;(statearr_12312_12350[(2)] = null);
(statearr_12312_12350[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12301 === (6)))
{var inst_12298 = (state_12300[(2)]);var state_12300__$1 = state_12300;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12300__$1,inst_12298);
} else
{if((state_val_12301 === (17)))
{var inst_12279 = (state_12300[(15)]);var state_12300__$1 = state_12300;var statearr_12313_12351 = state_12300__$1;(statearr_12313_12351[(2)] = inst_12279);
(statearr_12313_12351[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12301 === (3)))
{var inst_12239 = (state_12300[(9)]);var state_12300__$1 = state_12300;var statearr_12314_12352 = state_12300__$1;(statearr_12314_12352[(2)] = inst_12239);
(statearr_12314_12352[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12301 === (12)))
{var inst_12279 = (state_12300[(15)]);var inst_12265 = (state_12300[(16)]);var inst_12260 = (state_12300[(17)]);var inst_12279__$1 = inst_12260.call(null,inst_12265);var state_12300__$1 = (function (){var statearr_12315 = state_12300;(statearr_12315[(15)] = inst_12279__$1);
return statearr_12315;
})();if(cljs.core.truth_(inst_12279__$1))
{var statearr_12316_12353 = state_12300__$1;(statearr_12316_12353[(1)] = (17));
} else
{var statearr_12317_12354 = state_12300__$1;(statearr_12317_12354[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12301 === (2)))
{var inst_12239 = (state_12300[(9)]);var inst_12242 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12239);var state_12300__$1 = state_12300;var statearr_12318_12355 = state_12300__$1;(statearr_12318_12355[(2)] = inst_12242);
(statearr_12318_12355[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12301 === (23)))
{var inst_12290 = (state_12300[(2)]);var state_12300__$1 = state_12300;var statearr_12319_12356 = state_12300__$1;(statearr_12319_12356[(2)] = inst_12290);
(statearr_12319_12356[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12301 === (19)))
{var inst_12287 = (state_12300[(2)]);var state_12300__$1 = state_12300;if(cljs.core.truth_(inst_12287))
{var statearr_12320_12357 = state_12300__$1;(statearr_12320_12357[(1)] = (20));
} else
{var statearr_12321_12358 = state_12300__$1;(statearr_12321_12358[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12301 === (11)))
{var inst_12264 = (state_12300[(8)]);var inst_12270 = (inst_12264 == null);var state_12300__$1 = state_12300;if(cljs.core.truth_(inst_12270))
{var statearr_12322_12359 = state_12300__$1;(statearr_12322_12359[(1)] = (14));
} else
{var statearr_12323_12360 = state_12300__$1;(statearr_12323_12360[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12301 === (9)))
{var inst_12257 = (state_12300[(13)]);var inst_12257__$1 = (state_12300[(2)]);var inst_12258 = cljs.core.get.call(null,inst_12257__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12259 = cljs.core.get.call(null,inst_12257__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12260 = cljs.core.get.call(null,inst_12257__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12300__$1 = (function (){var statearr_12324 = state_12300;(statearr_12324[(18)] = inst_12259);
(statearr_12324[(13)] = inst_12257__$1);
(statearr_12324[(17)] = inst_12260);
return statearr_12324;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12300__$1,(10),inst_12258);
} else
{if((state_val_12301 === (5)))
{var inst_12249 = (state_12300[(7)]);var inst_12252 = cljs.core.seq_QMARK_.call(null,inst_12249);var state_12300__$1 = state_12300;if(inst_12252)
{var statearr_12325_12361 = state_12300__$1;(statearr_12325_12361[(1)] = (7));
} else
{var statearr_12326_12362 = state_12300__$1;(statearr_12326_12362[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12301 === (14)))
{var inst_12265 = (state_12300[(16)]);var inst_12272 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12265);var state_12300__$1 = state_12300;var statearr_12327_12363 = state_12300__$1;(statearr_12327_12363[(2)] = inst_12272);
(statearr_12327_12363[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12301 === (16)))
{var inst_12275 = (state_12300[(2)]);var inst_12276 = calc_state.call(null);var inst_12249 = inst_12276;var state_12300__$1 = (function (){var statearr_12328 = state_12300;(statearr_12328[(7)] = inst_12249);
(statearr_12328[(19)] = inst_12275);
return statearr_12328;
})();var statearr_12329_12364 = state_12300__$1;(statearr_12329_12364[(2)] = null);
(statearr_12329_12364[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12301 === (10)))
{var inst_12264 = (state_12300[(8)]);var inst_12265 = (state_12300[(16)]);var inst_12263 = (state_12300[(2)]);var inst_12264__$1 = cljs.core.nth.call(null,inst_12263,(0),null);var inst_12265__$1 = cljs.core.nth.call(null,inst_12263,(1),null);var inst_12266 = (inst_12264__$1 == null);var inst_12267 = cljs.core._EQ_.call(null,inst_12265__$1,change);var inst_12268 = (inst_12266) || (inst_12267);var state_12300__$1 = (function (){var statearr_12330 = state_12300;(statearr_12330[(8)] = inst_12264__$1);
(statearr_12330[(16)] = inst_12265__$1);
return statearr_12330;
})();if(cljs.core.truth_(inst_12268))
{var statearr_12331_12365 = state_12300__$1;(statearr_12331_12365[(1)] = (11));
} else
{var statearr_12332_12366 = state_12300__$1;(statearr_12332_12366[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12301 === (18)))
{var inst_12259 = (state_12300[(18)]);var inst_12265 = (state_12300[(16)]);var inst_12260 = (state_12300[(17)]);var inst_12282 = cljs.core.empty_QMARK_.call(null,inst_12260);var inst_12283 = inst_12259.call(null,inst_12265);var inst_12284 = cljs.core.not.call(null,inst_12283);var inst_12285 = (inst_12282) && (inst_12284);var state_12300__$1 = state_12300;var statearr_12333_12367 = state_12300__$1;(statearr_12333_12367[(2)] = inst_12285);
(statearr_12333_12367[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12301 === (8)))
{var inst_12249 = (state_12300[(7)]);var state_12300__$1 = state_12300;var statearr_12334_12368 = state_12300__$1;(statearr_12334_12368[(2)] = inst_12249);
(statearr_12334_12368[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6912__auto___12342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6847__auto__,c__6912__auto___12342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){var statearr_12338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12338[(0)] = state_machine__6848__auto__);
(statearr_12338[(1)] = (1));
return statearr_12338;
});
var state_machine__6848__auto____1 = (function (state_12300){while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_12300);if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6850__auto__;
}
break;
}
}catch (e12339){if((e12339 instanceof Object))
{var ex__6851__auto__ = e12339;var statearr_12340_12369 = state_12300;(statearr_12340_12369[(5)] = ex__6851__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12300);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12339;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12370 = state_12300;
state_12300 = G__12370;
continue;
}
} else
{return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_12300){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_12300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6912__auto___12342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6914__auto__ = (function (){var statearr_12341 = f__6913__auto__.call(null);(statearr_12341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6912__auto___12342);
return statearr_12341;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6914__auto__);
});})(c__6912__auto___12342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
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
cljs.core.async.Pub = (function (){var obj12372 = {};return obj12372;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3540__auto__ = p;if(and__3540__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3540__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4179__auto__ = (((p == null))?null:p);return (function (){var or__3552__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4179__auto__)]);if(or__3552__auto__)
{return or__3552__auto__;
} else
{var or__3552__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3552__auto____$1)
{return or__3552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3540__auto__ = p;if(and__3540__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3540__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4179__auto__ = (((p == null))?null:p);return (function (){var or__3552__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4179__auto__)]);if(or__3552__auto__)
{return or__3552__auto__;
} else
{var or__3552__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3552__auto____$1)
{return or__3552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3540__auto__ = p;if(and__3540__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3540__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4179__auto__ = (((p == null))?null:p);return (function (){var or__3552__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4179__auto__)]);if(or__3552__auto__)
{return or__3552__auto__;
} else
{var or__3552__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3552__auto____$1)
{return or__3552__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3540__auto__ = p;if(and__3540__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3540__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4179__auto__ = (((p == null))?null:p);return (function (){var or__3552__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4179__auto__)]);if(or__3552__auto__)
{return or__3552__auto__;
} else
{var or__3552__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3552__auto____$1)
{return or__3552__auto____$1;
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
return (function (topic){var or__3552__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3552__auto__))
{return or__3552__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3552__auto__,mults){
return (function (p1__12373_SHARP_){if(cljs.core.truth_(p1__12373_SHARP_.call(null,topic)))
{return p1__12373_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12373_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3552__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12498 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12498 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12499){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12499 = meta12499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12498.cljs$lang$type = true;
cljs.core.async.t12498.cljs$lang$ctorStr = "cljs.core.async/t12498";
cljs.core.async.t12498.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4119__auto__,writer__4120__auto__,opt__4121__auto__){return cljs.core._write.call(null,writer__4120__auto__,"cljs.core.async/t12498");
});})(mults,ensure_mult))
;
cljs.core.async.t12498.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12498.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12498.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12498.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12498.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12498.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12498.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12498.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12500){var self__ = this;
var _12500__$1 = this;return self__.meta12499;
});})(mults,ensure_mult))
;
cljs.core.async.t12498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12500,meta12499__$1){var self__ = this;
var _12500__$1 = this;return (new cljs.core.async.t12498(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12499__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12498 = ((function (mults,ensure_mult){
return (function __GT_t12498(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12499){return (new cljs.core.async.t12498(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12499));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12498(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6912__auto___12622 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6912__auto___12622,mults,ensure_mult,p){
return (function (){var f__6913__auto__ = (function (){var switch__6847__auto__ = ((function (c__6912__auto___12622,mults,ensure_mult,p){
return (function (state_12574){var state_val_12575 = (state_12574[(1)]);if((state_val_12575 === (7)))
{var inst_12570 = (state_12574[(2)]);var state_12574__$1 = state_12574;var statearr_12576_12623 = state_12574__$1;(statearr_12576_12623[(2)] = inst_12570);
(statearr_12576_12623[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12575 === (20)))
{var state_12574__$1 = state_12574;var statearr_12577_12624 = state_12574__$1;(statearr_12577_12624[(2)] = null);
(statearr_12577_12624[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12575 === (1)))
{var state_12574__$1 = state_12574;var statearr_12578_12625 = state_12574__$1;(statearr_12578_12625[(2)] = null);
(statearr_12578_12625[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12575 === (24)))
{var inst_12503 = (state_12574[(7)]);var inst_12553 = (state_12574[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12574,(23),Object,null,(22));var inst_12560 = cljs.core.async.muxch_STAR_.call(null,inst_12553);var state_12574__$1 = state_12574;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12574__$1,(25),inst_12560,inst_12503);
} else
{if((state_val_12575 === (4)))
{var inst_12503 = (state_12574[(7)]);var inst_12503__$1 = (state_12574[(2)]);var inst_12504 = (inst_12503__$1 == null);var state_12574__$1 = (function (){var statearr_12579 = state_12574;(statearr_12579[(7)] = inst_12503__$1);
return statearr_12579;
})();if(cljs.core.truth_(inst_12504))
{var statearr_12580_12626 = state_12574__$1;(statearr_12580_12626[(1)] = (5));
} else
{var statearr_12581_12627 = state_12574__$1;(statearr_12581_12627[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12575 === (15)))
{var inst_12545 = (state_12574[(2)]);var state_12574__$1 = state_12574;var statearr_12582_12628 = state_12574__$1;(statearr_12582_12628[(2)] = inst_12545);
(statearr_12582_12628[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12575 === (21)))
{var inst_12567 = (state_12574[(2)]);var state_12574__$1 = (function (){var statearr_12583 = state_12574;(statearr_12583[(9)] = inst_12567);
return statearr_12583;
})();var statearr_12584_12629 = state_12574__$1;(statearr_12584_12629[(2)] = null);
(statearr_12584_12629[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12575 === (13)))
{var inst_12527 = (state_12574[(10)]);var inst_12529 = cljs.core.chunked_seq_QMARK_.call(null,inst_12527);var state_12574__$1 = state_12574;if(inst_12529)
{var statearr_12585_12630 = state_12574__$1;(statearr_12585_12630[(1)] = (16));
} else
{var statearr_12586_12631 = state_12574__$1;(statearr_12586_12631[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12575 === (22)))
{var inst_12564 = (state_12574[(2)]);var state_12574__$1 = state_12574;var statearr_12587_12632 = state_12574__$1;(statearr_12587_12632[(2)] = inst_12564);
(statearr_12587_12632[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12575 === (6)))
{var inst_12551 = (state_12574[(11)]);var inst_12503 = (state_12574[(7)]);var inst_12553 = (state_12574[(8)]);var inst_12551__$1 = topic_fn.call(null,inst_12503);var inst_12552 = cljs.core.deref.call(null,mults);var inst_12553__$1 = cljs.core.get.call(null,inst_12552,inst_12551__$1);var state_12574__$1 = (function (){var statearr_12588 = state_12574;(statearr_12588[(11)] = inst_12551__$1);
(statearr_12588[(8)] = inst_12553__$1);
return statearr_12588;
})();if(cljs.core.truth_(inst_12553__$1))
{var statearr_12589_12633 = state_12574__$1;(statearr_12589_12633[(1)] = (19));
} else
{var statearr_12590_12634 = state_12574__$1;(statearr_12590_12634[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12575 === (25)))
{var inst_12562 = (state_12574[(2)]);var state_12574__$1 = state_12574;var statearr_12591_12635 = state_12574__$1;(statearr_12591_12635[(2)] = inst_12562);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12574__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12575 === (17)))
{var inst_12527 = (state_12574[(10)]);var inst_12536 = cljs.core.first.call(null,inst_12527);var inst_12537 = cljs.core.async.muxch_STAR_.call(null,inst_12536);var inst_12538 = cljs.core.async.close_BANG_.call(null,inst_12537);var inst_12539 = cljs.core.next.call(null,inst_12527);var inst_12513 = inst_12539;var inst_12514 = null;var inst_12515 = (0);var inst_12516 = (0);var state_12574__$1 = (function (){var statearr_12592 = state_12574;(statearr_12592[(12)] = inst_12514);
(statearr_12592[(13)] = inst_12538);
(statearr_12592[(14)] = inst_12516);
(statearr_12592[(15)] = inst_12515);
(statearr_12592[(16)] = inst_12513);
return statearr_12592;
})();var statearr_12593_12636 = state_12574__$1;(statearr_12593_12636[(2)] = null);
(statearr_12593_12636[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12575 === (3)))
{var inst_12572 = (state_12574[(2)]);var state_12574__$1 = state_12574;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12574__$1,inst_12572);
} else
{if((state_val_12575 === (12)))
{var inst_12547 = (state_12574[(2)]);var state_12574__$1 = state_12574;var statearr_12594_12637 = state_12574__$1;(statearr_12594_12637[(2)] = inst_12547);
(statearr_12594_12637[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12575 === (2)))
{var state_12574__$1 = state_12574;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12574__$1,(4),ch);
} else
{if((state_val_12575 === (23)))
{var inst_12551 = (state_12574[(11)]);var inst_12555 = (state_12574[(2)]);var inst_12556 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12551);var state_12574__$1 = (function (){var statearr_12595 = state_12574;(statearr_12595[(17)] = inst_12555);
return statearr_12595;
})();var statearr_12596_12638 = state_12574__$1;(statearr_12596_12638[(2)] = inst_12556);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12574__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12575 === (19)))
{var state_12574__$1 = state_12574;var statearr_12597_12639 = state_12574__$1;(statearr_12597_12639[(2)] = null);
(statearr_12597_12639[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12575 === (11)))
{var inst_12513 = (state_12574[(16)]);var inst_12527 = (state_12574[(10)]);var inst_12527__$1 = cljs.core.seq.call(null,inst_12513);var state_12574__$1 = (function (){var statearr_12598 = state_12574;(statearr_12598[(10)] = inst_12527__$1);
return statearr_12598;
})();if(inst_12527__$1)
{var statearr_12599_12640 = state_12574__$1;(statearr_12599_12640[(1)] = (13));
} else
{var statearr_12600_12641 = state_12574__$1;(statearr_12600_12641[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12575 === (9)))
{var inst_12549 = (state_12574[(2)]);var state_12574__$1 = state_12574;var statearr_12601_12642 = state_12574__$1;(statearr_12601_12642[(2)] = inst_12549);
(statearr_12601_12642[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12575 === (5)))
{var inst_12510 = cljs.core.deref.call(null,mults);var inst_12511 = cljs.core.vals.call(null,inst_12510);var inst_12512 = cljs.core.seq.call(null,inst_12511);var inst_12513 = inst_12512;var inst_12514 = null;var inst_12515 = (0);var inst_12516 = (0);var state_12574__$1 = (function (){var statearr_12602 = state_12574;(statearr_12602[(12)] = inst_12514);
(statearr_12602[(14)] = inst_12516);
(statearr_12602[(15)] = inst_12515);
(statearr_12602[(16)] = inst_12513);
return statearr_12602;
})();var statearr_12603_12643 = state_12574__$1;(statearr_12603_12643[(2)] = null);
(statearr_12603_12643[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12575 === (14)))
{var state_12574__$1 = state_12574;var statearr_12607_12644 = state_12574__$1;(statearr_12607_12644[(2)] = null);
(statearr_12607_12644[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12575 === (16)))
{var inst_12527 = (state_12574[(10)]);var inst_12531 = cljs.core.chunk_first.call(null,inst_12527);var inst_12532 = cljs.core.chunk_rest.call(null,inst_12527);var inst_12533 = cljs.core.count.call(null,inst_12531);var inst_12513 = inst_12532;var inst_12514 = inst_12531;var inst_12515 = inst_12533;var inst_12516 = (0);var state_12574__$1 = (function (){var statearr_12608 = state_12574;(statearr_12608[(12)] = inst_12514);
(statearr_12608[(14)] = inst_12516);
(statearr_12608[(15)] = inst_12515);
(statearr_12608[(16)] = inst_12513);
return statearr_12608;
})();var statearr_12609_12645 = state_12574__$1;(statearr_12609_12645[(2)] = null);
(statearr_12609_12645[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12575 === (10)))
{var inst_12514 = (state_12574[(12)]);var inst_12516 = (state_12574[(14)]);var inst_12515 = (state_12574[(15)]);var inst_12513 = (state_12574[(16)]);var inst_12521 = cljs.core._nth.call(null,inst_12514,inst_12516);var inst_12522 = cljs.core.async.muxch_STAR_.call(null,inst_12521);var inst_12523 = cljs.core.async.close_BANG_.call(null,inst_12522);var inst_12524 = (inst_12516 + (1));var tmp12604 = inst_12514;var tmp12605 = inst_12515;var tmp12606 = inst_12513;var inst_12513__$1 = tmp12606;var inst_12514__$1 = tmp12604;var inst_12515__$1 = tmp12605;var inst_12516__$1 = inst_12524;var state_12574__$1 = (function (){var statearr_12610 = state_12574;(statearr_12610[(12)] = inst_12514__$1);
(statearr_12610[(14)] = inst_12516__$1);
(statearr_12610[(15)] = inst_12515__$1);
(statearr_12610[(16)] = inst_12513__$1);
(statearr_12610[(18)] = inst_12523);
return statearr_12610;
})();var statearr_12611_12646 = state_12574__$1;(statearr_12611_12646[(2)] = null);
(statearr_12611_12646[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12575 === (18)))
{var inst_12542 = (state_12574[(2)]);var state_12574__$1 = state_12574;var statearr_12612_12647 = state_12574__$1;(statearr_12612_12647[(2)] = inst_12542);
(statearr_12612_12647[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12575 === (8)))
{var inst_12516 = (state_12574[(14)]);var inst_12515 = (state_12574[(15)]);var inst_12518 = (inst_12516 < inst_12515);var inst_12519 = inst_12518;var state_12574__$1 = state_12574;if(cljs.core.truth_(inst_12519))
{var statearr_12613_12648 = state_12574__$1;(statearr_12613_12648[(1)] = (10));
} else
{var statearr_12614_12649 = state_12574__$1;(statearr_12614_12649[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6912__auto___12622,mults,ensure_mult,p))
;return ((function (switch__6847__auto__,c__6912__auto___12622,mults,ensure_mult,p){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){var statearr_12618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12618[(0)] = state_machine__6848__auto__);
(statearr_12618[(1)] = (1));
return statearr_12618;
});
var state_machine__6848__auto____1 = (function (state_12574){while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_12574);if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6850__auto__;
}
break;
}
}catch (e12619){if((e12619 instanceof Object))
{var ex__6851__auto__ = e12619;var statearr_12620_12650 = state_12574;(statearr_12620_12650[(5)] = ex__6851__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12574);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12619;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12651 = state_12574;
state_12574 = G__12651;
continue;
}
} else
{return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_12574){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_12574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6912__auto___12622,mults,ensure_mult,p))
})();var state__6914__auto__ = (function (){var statearr_12621 = f__6913__auto__.call(null);(statearr_12621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6912__auto___12622);
return statearr_12621;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6914__auto__);
});})(c__6912__auto___12622,mults,ensure_mult,p))
);
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6912__auto___12788 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6912__auto___12788,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6913__auto__ = (function (){var switch__6847__auto__ = ((function (c__6912__auto___12788,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12758){var state_val_12759 = (state_12758[(1)]);if((state_val_12759 === (7)))
{var state_12758__$1 = state_12758;var statearr_12760_12789 = state_12758__$1;(statearr_12760_12789[(2)] = null);
(statearr_12760_12789[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (1)))
{var state_12758__$1 = state_12758;var statearr_12761_12790 = state_12758__$1;(statearr_12761_12790[(2)] = null);
(statearr_12761_12790[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (4)))
{var inst_12722 = (state_12758[(7)]);var inst_12724 = (inst_12722 < cnt);var state_12758__$1 = state_12758;if(cljs.core.truth_(inst_12724))
{var statearr_12762_12791 = state_12758__$1;(statearr_12762_12791[(1)] = (6));
} else
{var statearr_12763_12792 = state_12758__$1;(statearr_12763_12792[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (15)))
{var inst_12754 = (state_12758[(2)]);var state_12758__$1 = state_12758;var statearr_12764_12793 = state_12758__$1;(statearr_12764_12793[(2)] = inst_12754);
(statearr_12764_12793[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (13)))
{var inst_12747 = cljs.core.async.close_BANG_.call(null,out);var state_12758__$1 = state_12758;var statearr_12765_12794 = state_12758__$1;(statearr_12765_12794[(2)] = inst_12747);
(statearr_12765_12794[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (6)))
{var state_12758__$1 = state_12758;var statearr_12766_12795 = state_12758__$1;(statearr_12766_12795[(2)] = null);
(statearr_12766_12795[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (3)))
{var inst_12756 = (state_12758[(2)]);var state_12758__$1 = state_12758;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12758__$1,inst_12756);
} else
{if((state_val_12759 === (12)))
{var inst_12744 = (state_12758[(8)]);var inst_12744__$1 = (state_12758[(2)]);var inst_12745 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12744__$1);var state_12758__$1 = (function (){var statearr_12767 = state_12758;(statearr_12767[(8)] = inst_12744__$1);
return statearr_12767;
})();if(cljs.core.truth_(inst_12745))
{var statearr_12768_12796 = state_12758__$1;(statearr_12768_12796[(1)] = (13));
} else
{var statearr_12769_12797 = state_12758__$1;(statearr_12769_12797[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (2)))
{var inst_12721 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12722 = (0);var state_12758__$1 = (function (){var statearr_12770 = state_12758;(statearr_12770[(7)] = inst_12722);
(statearr_12770[(9)] = inst_12721);
return statearr_12770;
})();var statearr_12771_12798 = state_12758__$1;(statearr_12771_12798[(2)] = null);
(statearr_12771_12798[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (11)))
{var inst_12722 = (state_12758[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12758,(10),Object,null,(9));var inst_12731 = chs__$1.call(null,inst_12722);var inst_12732 = done.call(null,inst_12722);var inst_12733 = cljs.core.async.take_BANG_.call(null,inst_12731,inst_12732);var state_12758__$1 = state_12758;var statearr_12772_12799 = state_12758__$1;(statearr_12772_12799[(2)] = inst_12733);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12758__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (9)))
{var inst_12722 = (state_12758[(7)]);var inst_12735 = (state_12758[(2)]);var inst_12736 = (inst_12722 + (1));var inst_12722__$1 = inst_12736;var state_12758__$1 = (function (){var statearr_12773 = state_12758;(statearr_12773[(7)] = inst_12722__$1);
(statearr_12773[(10)] = inst_12735);
return statearr_12773;
})();var statearr_12774_12800 = state_12758__$1;(statearr_12774_12800[(2)] = null);
(statearr_12774_12800[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (5)))
{var inst_12742 = (state_12758[(2)]);var state_12758__$1 = (function (){var statearr_12775 = state_12758;(statearr_12775[(11)] = inst_12742);
return statearr_12775;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12758__$1,(12),dchan);
} else
{if((state_val_12759 === (14)))
{var inst_12744 = (state_12758[(8)]);var inst_12749 = cljs.core.apply.call(null,f,inst_12744);var state_12758__$1 = state_12758;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12758__$1,(16),out,inst_12749);
} else
{if((state_val_12759 === (16)))
{var inst_12751 = (state_12758[(2)]);var state_12758__$1 = (function (){var statearr_12776 = state_12758;(statearr_12776[(12)] = inst_12751);
return statearr_12776;
})();var statearr_12777_12801 = state_12758__$1;(statearr_12777_12801[(2)] = null);
(statearr_12777_12801[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (10)))
{var inst_12726 = (state_12758[(2)]);var inst_12727 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12758__$1 = (function (){var statearr_12778 = state_12758;(statearr_12778[(13)] = inst_12726);
return statearr_12778;
})();var statearr_12779_12802 = state_12758__$1;(statearr_12779_12802[(2)] = inst_12727);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12758__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12759 === (8)))
{var inst_12740 = (state_12758[(2)]);var state_12758__$1 = state_12758;var statearr_12780_12803 = state_12758__$1;(statearr_12780_12803[(2)] = inst_12740);
(statearr_12780_12803[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6912__auto___12788,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6847__auto__,c__6912__auto___12788,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){var statearr_12784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12784[(0)] = state_machine__6848__auto__);
(statearr_12784[(1)] = (1));
return statearr_12784;
});
var state_machine__6848__auto____1 = (function (state_12758){while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_12758);if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6850__auto__;
}
break;
}
}catch (e12785){if((e12785 instanceof Object))
{var ex__6851__auto__ = e12785;var statearr_12786_12804 = state_12758;(statearr_12786_12804[(5)] = ex__6851__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12758);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12785;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12805 = state_12758;
state_12758 = G__12805;
continue;
}
} else
{return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_12758){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_12758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6912__auto___12788,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6914__auto__ = (function (){var statearr_12787 = f__6913__auto__.call(null);(statearr_12787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6912__auto___12788);
return statearr_12787;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6914__auto__);
});})(c__6912__auto___12788,chs__$1,out,cnt,rets,dchan,dctr,done))
);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6912__auto___12913 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6912__auto___12913,out){
return (function (){var f__6913__auto__ = (function (){var switch__6847__auto__ = ((function (c__6912__auto___12913,out){
return (function (state_12889){var state_val_12890 = (state_12889[(1)]);if((state_val_12890 === (7)))
{var inst_12868 = (state_12889[(7)]);var inst_12869 = (state_12889[(8)]);var inst_12868__$1 = (state_12889[(2)]);var inst_12869__$1 = cljs.core.nth.call(null,inst_12868__$1,(0),null);var inst_12870 = cljs.core.nth.call(null,inst_12868__$1,(1),null);var inst_12871 = (inst_12869__$1 == null);var state_12889__$1 = (function (){var statearr_12891 = state_12889;(statearr_12891[(9)] = inst_12870);
(statearr_12891[(7)] = inst_12868__$1);
(statearr_12891[(8)] = inst_12869__$1);
return statearr_12891;
})();if(cljs.core.truth_(inst_12871))
{var statearr_12892_12914 = state_12889__$1;(statearr_12892_12914[(1)] = (8));
} else
{var statearr_12893_12915 = state_12889__$1;(statearr_12893_12915[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12890 === (1)))
{var inst_12860 = cljs.core.vec.call(null,chs);var inst_12861 = inst_12860;var state_12889__$1 = (function (){var statearr_12894 = state_12889;(statearr_12894[(10)] = inst_12861);
return statearr_12894;
})();var statearr_12895_12916 = state_12889__$1;(statearr_12895_12916[(2)] = null);
(statearr_12895_12916[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12890 === (4)))
{var inst_12861 = (state_12889[(10)]);var state_12889__$1 = state_12889;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12889__$1,(7),inst_12861);
} else
{if((state_val_12890 === (6)))
{var inst_12885 = (state_12889[(2)]);var state_12889__$1 = state_12889;var statearr_12896_12917 = state_12889__$1;(statearr_12896_12917[(2)] = inst_12885);
(statearr_12896_12917[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12890 === (3)))
{var inst_12887 = (state_12889[(2)]);var state_12889__$1 = state_12889;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12889__$1,inst_12887);
} else
{if((state_val_12890 === (2)))
{var inst_12861 = (state_12889[(10)]);var inst_12863 = cljs.core.count.call(null,inst_12861);var inst_12864 = (inst_12863 > (0));var state_12889__$1 = state_12889;if(cljs.core.truth_(inst_12864))
{var statearr_12898_12918 = state_12889__$1;(statearr_12898_12918[(1)] = (4));
} else
{var statearr_12899_12919 = state_12889__$1;(statearr_12899_12919[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12890 === (11)))
{var inst_12861 = (state_12889[(10)]);var inst_12878 = (state_12889[(2)]);var tmp12897 = inst_12861;var inst_12861__$1 = tmp12897;var state_12889__$1 = (function (){var statearr_12900 = state_12889;(statearr_12900[(10)] = inst_12861__$1);
(statearr_12900[(11)] = inst_12878);
return statearr_12900;
})();var statearr_12901_12920 = state_12889__$1;(statearr_12901_12920[(2)] = null);
(statearr_12901_12920[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12890 === (9)))
{var inst_12869 = (state_12889[(8)]);var state_12889__$1 = state_12889;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12889__$1,(11),out,inst_12869);
} else
{if((state_val_12890 === (5)))
{var inst_12883 = cljs.core.async.close_BANG_.call(null,out);var state_12889__$1 = state_12889;var statearr_12902_12921 = state_12889__$1;(statearr_12902_12921[(2)] = inst_12883);
(statearr_12902_12921[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12890 === (10)))
{var inst_12881 = (state_12889[(2)]);var state_12889__$1 = state_12889;var statearr_12903_12922 = state_12889__$1;(statearr_12903_12922[(2)] = inst_12881);
(statearr_12903_12922[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12890 === (8)))
{var inst_12861 = (state_12889[(10)]);var inst_12870 = (state_12889[(9)]);var inst_12868 = (state_12889[(7)]);var inst_12869 = (state_12889[(8)]);var inst_12873 = (function (){var c = inst_12870;var v = inst_12869;var vec__12866 = inst_12868;var cs = inst_12861;return ((function (c,v,vec__12866,cs,inst_12861,inst_12870,inst_12868,inst_12869,state_val_12890,c__6912__auto___12913,out){
return (function (p1__12806_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12806_SHARP_);
});
;})(c,v,vec__12866,cs,inst_12861,inst_12870,inst_12868,inst_12869,state_val_12890,c__6912__auto___12913,out))
})();var inst_12874 = cljs.core.filterv.call(null,inst_12873,inst_12861);var inst_12861__$1 = inst_12874;var state_12889__$1 = (function (){var statearr_12904 = state_12889;(statearr_12904[(10)] = inst_12861__$1);
return statearr_12904;
})();var statearr_12905_12923 = state_12889__$1;(statearr_12905_12923[(2)] = null);
(statearr_12905_12923[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6912__auto___12913,out))
;return ((function (switch__6847__auto__,c__6912__auto___12913,out){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){var statearr_12909 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12909[(0)] = state_machine__6848__auto__);
(statearr_12909[(1)] = (1));
return statearr_12909;
});
var state_machine__6848__auto____1 = (function (state_12889){while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_12889);if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6850__auto__;
}
break;
}
}catch (e12910){if((e12910 instanceof Object))
{var ex__6851__auto__ = e12910;var statearr_12911_12924 = state_12889;(statearr_12911_12924[(5)] = ex__6851__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12889);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12910;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12925 = state_12889;
state_12889 = G__12925;
continue;
}
} else
{return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_12889){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_12889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6912__auto___12913,out))
})();var state__6914__auto__ = (function (){var statearr_12912 = f__6913__auto__.call(null);(statearr_12912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6912__auto___12913);
return statearr_12912;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6914__auto__);
});})(c__6912__auto___12913,out))
);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6912__auto___13018 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6912__auto___13018,out){
return (function (){var f__6913__auto__ = (function (){var switch__6847__auto__ = ((function (c__6912__auto___13018,out){
return (function (state_12995){var state_val_12996 = (state_12995[(1)]);if((state_val_12996 === (7)))
{var inst_12977 = (state_12995[(7)]);var inst_12977__$1 = (state_12995[(2)]);var inst_12978 = (inst_12977__$1 == null);var inst_12979 = cljs.core.not.call(null,inst_12978);var state_12995__$1 = (function (){var statearr_12997 = state_12995;(statearr_12997[(7)] = inst_12977__$1);
return statearr_12997;
})();if(inst_12979)
{var statearr_12998_13019 = state_12995__$1;(statearr_12998_13019[(1)] = (8));
} else
{var statearr_12999_13020 = state_12995__$1;(statearr_12999_13020[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (1)))
{var inst_12972 = (0);var state_12995__$1 = (function (){var statearr_13000 = state_12995;(statearr_13000[(8)] = inst_12972);
return statearr_13000;
})();var statearr_13001_13021 = state_12995__$1;(statearr_13001_13021[(2)] = null);
(statearr_13001_13021[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (4)))
{var state_12995__$1 = state_12995;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12995__$1,(7),ch);
} else
{if((state_val_12996 === (6)))
{var inst_12990 = (state_12995[(2)]);var state_12995__$1 = state_12995;var statearr_13002_13022 = state_12995__$1;(statearr_13002_13022[(2)] = inst_12990);
(statearr_13002_13022[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (3)))
{var inst_12992 = (state_12995[(2)]);var inst_12993 = cljs.core.async.close_BANG_.call(null,out);var state_12995__$1 = (function (){var statearr_13003 = state_12995;(statearr_13003[(9)] = inst_12992);
return statearr_13003;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12995__$1,inst_12993);
} else
{if((state_val_12996 === (2)))
{var inst_12972 = (state_12995[(8)]);var inst_12974 = (inst_12972 < n);var state_12995__$1 = state_12995;if(cljs.core.truth_(inst_12974))
{var statearr_13004_13023 = state_12995__$1;(statearr_13004_13023[(1)] = (4));
} else
{var statearr_13005_13024 = state_12995__$1;(statearr_13005_13024[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (11)))
{var inst_12972 = (state_12995[(8)]);var inst_12982 = (state_12995[(2)]);var inst_12983 = (inst_12972 + (1));var inst_12972__$1 = inst_12983;var state_12995__$1 = (function (){var statearr_13006 = state_12995;(statearr_13006[(8)] = inst_12972__$1);
(statearr_13006[(10)] = inst_12982);
return statearr_13006;
})();var statearr_13007_13025 = state_12995__$1;(statearr_13007_13025[(2)] = null);
(statearr_13007_13025[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (9)))
{var state_12995__$1 = state_12995;var statearr_13008_13026 = state_12995__$1;(statearr_13008_13026[(2)] = null);
(statearr_13008_13026[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (5)))
{var state_12995__$1 = state_12995;var statearr_13009_13027 = state_12995__$1;(statearr_13009_13027[(2)] = null);
(statearr_13009_13027[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (10)))
{var inst_12987 = (state_12995[(2)]);var state_12995__$1 = state_12995;var statearr_13010_13028 = state_12995__$1;(statearr_13010_13028[(2)] = inst_12987);
(statearr_13010_13028[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12996 === (8)))
{var inst_12977 = (state_12995[(7)]);var state_12995__$1 = state_12995;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12995__$1,(11),out,inst_12977);
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
});})(c__6912__auto___13018,out))
;return ((function (switch__6847__auto__,c__6912__auto___13018,out){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){var statearr_13014 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13014[(0)] = state_machine__6848__auto__);
(statearr_13014[(1)] = (1));
return statearr_13014;
});
var state_machine__6848__auto____1 = (function (state_12995){while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_12995);if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6850__auto__;
}
break;
}
}catch (e13015){if((e13015 instanceof Object))
{var ex__6851__auto__ = e13015;var statearr_13016_13029 = state_12995;(statearr_13016_13029[(5)] = ex__6851__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12995);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13015;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13030 = state_12995;
state_12995 = G__13030;
continue;
}
} else
{return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_12995){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_12995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6912__auto___13018,out))
})();var state__6914__auto__ = (function (){var statearr_13017 = f__6913__auto__.call(null);(statearr_13017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6912__auto___13018);
return statearr_13017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6914__auto__);
});})(c__6912__auto___13018,out))
);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6912__auto___13127 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6912__auto___13127,out){
return (function (){var f__6913__auto__ = (function (){var switch__6847__auto__ = ((function (c__6912__auto___13127,out){
return (function (state_13102){var state_val_13103 = (state_13102[(1)]);if((state_val_13103 === (7)))
{var inst_13097 = (state_13102[(2)]);var state_13102__$1 = state_13102;var statearr_13104_13128 = state_13102__$1;(statearr_13104_13128[(2)] = inst_13097);
(statearr_13104_13128[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (1)))
{var inst_13079 = null;var state_13102__$1 = (function (){var statearr_13105 = state_13102;(statearr_13105[(7)] = inst_13079);
return statearr_13105;
})();var statearr_13106_13129 = state_13102__$1;(statearr_13106_13129[(2)] = null);
(statearr_13106_13129[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (4)))
{var inst_13082 = (state_13102[(8)]);var inst_13082__$1 = (state_13102[(2)]);var inst_13083 = (inst_13082__$1 == null);var inst_13084 = cljs.core.not.call(null,inst_13083);var state_13102__$1 = (function (){var statearr_13107 = state_13102;(statearr_13107[(8)] = inst_13082__$1);
return statearr_13107;
})();if(inst_13084)
{var statearr_13108_13130 = state_13102__$1;(statearr_13108_13130[(1)] = (5));
} else
{var statearr_13109_13131 = state_13102__$1;(statearr_13109_13131[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (6)))
{var state_13102__$1 = state_13102;var statearr_13110_13132 = state_13102__$1;(statearr_13110_13132[(2)] = null);
(statearr_13110_13132[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (3)))
{var inst_13099 = (state_13102[(2)]);var inst_13100 = cljs.core.async.close_BANG_.call(null,out);var state_13102__$1 = (function (){var statearr_13111 = state_13102;(statearr_13111[(9)] = inst_13099);
return statearr_13111;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13102__$1,inst_13100);
} else
{if((state_val_13103 === (2)))
{var state_13102__$1 = state_13102;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13102__$1,(4),ch);
} else
{if((state_val_13103 === (11)))
{var inst_13082 = (state_13102[(8)]);var inst_13091 = (state_13102[(2)]);var inst_13079 = inst_13082;var state_13102__$1 = (function (){var statearr_13112 = state_13102;(statearr_13112[(7)] = inst_13079);
(statearr_13112[(10)] = inst_13091);
return statearr_13112;
})();var statearr_13113_13133 = state_13102__$1;(statearr_13113_13133[(2)] = null);
(statearr_13113_13133[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (9)))
{var inst_13082 = (state_13102[(8)]);var state_13102__$1 = state_13102;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13102__$1,(11),out,inst_13082);
} else
{if((state_val_13103 === (5)))
{var inst_13082 = (state_13102[(8)]);var inst_13079 = (state_13102[(7)]);var inst_13086 = cljs.core._EQ_.call(null,inst_13082,inst_13079);var state_13102__$1 = state_13102;if(inst_13086)
{var statearr_13115_13134 = state_13102__$1;(statearr_13115_13134[(1)] = (8));
} else
{var statearr_13116_13135 = state_13102__$1;(statearr_13116_13135[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (10)))
{var inst_13094 = (state_13102[(2)]);var state_13102__$1 = state_13102;var statearr_13117_13136 = state_13102__$1;(statearr_13117_13136[(2)] = inst_13094);
(statearr_13117_13136[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13103 === (8)))
{var inst_13079 = (state_13102[(7)]);var tmp13114 = inst_13079;var inst_13079__$1 = tmp13114;var state_13102__$1 = (function (){var statearr_13118 = state_13102;(statearr_13118[(7)] = inst_13079__$1);
return statearr_13118;
})();var statearr_13119_13137 = state_13102__$1;(statearr_13119_13137[(2)] = null);
(statearr_13119_13137[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6912__auto___13127,out))
;return ((function (switch__6847__auto__,c__6912__auto___13127,out){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){var statearr_13123 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13123[(0)] = state_machine__6848__auto__);
(statearr_13123[(1)] = (1));
return statearr_13123;
});
var state_machine__6848__auto____1 = (function (state_13102){while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_13102);if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6850__auto__;
}
break;
}
}catch (e13124){if((e13124 instanceof Object))
{var ex__6851__auto__ = e13124;var statearr_13125_13138 = state_13102;(statearr_13125_13138[(5)] = ex__6851__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13102);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13124;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13139 = state_13102;
state_13102 = G__13139;
continue;
}
} else
{return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_13102){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_13102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6912__auto___13127,out))
})();var state__6914__auto__ = (function (){var statearr_13126 = f__6913__auto__.call(null);(statearr_13126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6912__auto___13127);
return statearr_13126;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6914__auto__);
});})(c__6912__auto___13127,out))
);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6912__auto___13274 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6912__auto___13274,out){
return (function (){var f__6913__auto__ = (function (){var switch__6847__auto__ = ((function (c__6912__auto___13274,out){
return (function (state_13244){var state_val_13245 = (state_13244[(1)]);if((state_val_13245 === (7)))
{var inst_13240 = (state_13244[(2)]);var state_13244__$1 = state_13244;var statearr_13246_13275 = state_13244__$1;(statearr_13246_13275[(2)] = inst_13240);
(statearr_13246_13275[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13245 === (1)))
{var inst_13207 = (new Array(n));var inst_13208 = inst_13207;var inst_13209 = (0);var state_13244__$1 = (function (){var statearr_13247 = state_13244;(statearr_13247[(7)] = inst_13208);
(statearr_13247[(8)] = inst_13209);
return statearr_13247;
})();var statearr_13248_13276 = state_13244__$1;(statearr_13248_13276[(2)] = null);
(statearr_13248_13276[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13245 === (4)))
{var inst_13212 = (state_13244[(9)]);var inst_13212__$1 = (state_13244[(2)]);var inst_13213 = (inst_13212__$1 == null);var inst_13214 = cljs.core.not.call(null,inst_13213);var state_13244__$1 = (function (){var statearr_13249 = state_13244;(statearr_13249[(9)] = inst_13212__$1);
return statearr_13249;
})();if(inst_13214)
{var statearr_13250_13277 = state_13244__$1;(statearr_13250_13277[(1)] = (5));
} else
{var statearr_13251_13278 = state_13244__$1;(statearr_13251_13278[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13245 === (15)))
{var inst_13234 = (state_13244[(2)]);var state_13244__$1 = state_13244;var statearr_13252_13279 = state_13244__$1;(statearr_13252_13279[(2)] = inst_13234);
(statearr_13252_13279[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13245 === (13)))
{var state_13244__$1 = state_13244;var statearr_13253_13280 = state_13244__$1;(statearr_13253_13280[(2)] = null);
(statearr_13253_13280[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13245 === (6)))
{var inst_13209 = (state_13244[(8)]);var inst_13230 = (inst_13209 > (0));var state_13244__$1 = state_13244;if(cljs.core.truth_(inst_13230))
{var statearr_13254_13281 = state_13244__$1;(statearr_13254_13281[(1)] = (12));
} else
{var statearr_13255_13282 = state_13244__$1;(statearr_13255_13282[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13245 === (3)))
{var inst_13242 = (state_13244[(2)]);var state_13244__$1 = state_13244;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13244__$1,inst_13242);
} else
{if((state_val_13245 === (12)))
{var inst_13208 = (state_13244[(7)]);var inst_13232 = cljs.core.vec.call(null,inst_13208);var state_13244__$1 = state_13244;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13244__$1,(15),out,inst_13232);
} else
{if((state_val_13245 === (2)))
{var state_13244__$1 = state_13244;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13244__$1,(4),ch);
} else
{if((state_val_13245 === (11)))
{var inst_13224 = (state_13244[(2)]);var inst_13225 = (new Array(n));var inst_13208 = inst_13225;var inst_13209 = (0);var state_13244__$1 = (function (){var statearr_13256 = state_13244;(statearr_13256[(7)] = inst_13208);
(statearr_13256[(8)] = inst_13209);
(statearr_13256[(10)] = inst_13224);
return statearr_13256;
})();var statearr_13257_13283 = state_13244__$1;(statearr_13257_13283[(2)] = null);
(statearr_13257_13283[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13245 === (9)))
{var inst_13208 = (state_13244[(7)]);var inst_13222 = cljs.core.vec.call(null,inst_13208);var state_13244__$1 = state_13244;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13244__$1,(11),out,inst_13222);
} else
{if((state_val_13245 === (5)))
{var inst_13212 = (state_13244[(9)]);var inst_13208 = (state_13244[(7)]);var inst_13209 = (state_13244[(8)]);var inst_13217 = (state_13244[(11)]);var inst_13216 = (inst_13208[inst_13209] = inst_13212);var inst_13217__$1 = (inst_13209 + (1));var inst_13218 = (inst_13217__$1 < n);var state_13244__$1 = (function (){var statearr_13258 = state_13244;(statearr_13258[(12)] = inst_13216);
(statearr_13258[(11)] = inst_13217__$1);
return statearr_13258;
})();if(cljs.core.truth_(inst_13218))
{var statearr_13259_13284 = state_13244__$1;(statearr_13259_13284[(1)] = (8));
} else
{var statearr_13260_13285 = state_13244__$1;(statearr_13260_13285[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13245 === (14)))
{var inst_13237 = (state_13244[(2)]);var inst_13238 = cljs.core.async.close_BANG_.call(null,out);var state_13244__$1 = (function (){var statearr_13262 = state_13244;(statearr_13262[(13)] = inst_13237);
return statearr_13262;
})();var statearr_13263_13286 = state_13244__$1;(statearr_13263_13286[(2)] = inst_13238);
(statearr_13263_13286[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13245 === (10)))
{var inst_13228 = (state_13244[(2)]);var state_13244__$1 = state_13244;var statearr_13264_13287 = state_13244__$1;(statearr_13264_13287[(2)] = inst_13228);
(statearr_13264_13287[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13245 === (8)))
{var inst_13208 = (state_13244[(7)]);var inst_13217 = (state_13244[(11)]);var tmp13261 = inst_13208;var inst_13208__$1 = tmp13261;var inst_13209 = inst_13217;var state_13244__$1 = (function (){var statearr_13265 = state_13244;(statearr_13265[(7)] = inst_13208__$1);
(statearr_13265[(8)] = inst_13209);
return statearr_13265;
})();var statearr_13266_13288 = state_13244__$1;(statearr_13266_13288[(2)] = null);
(statearr_13266_13288[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6912__auto___13274,out))
;return ((function (switch__6847__auto__,c__6912__auto___13274,out){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){var statearr_13270 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13270[(0)] = state_machine__6848__auto__);
(statearr_13270[(1)] = (1));
return statearr_13270;
});
var state_machine__6848__auto____1 = (function (state_13244){while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_13244);if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6850__auto__;
}
break;
}
}catch (e13271){if((e13271 instanceof Object))
{var ex__6851__auto__ = e13271;var statearr_13272_13289 = state_13244;(statearr_13272_13289[(5)] = ex__6851__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13244);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13271;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13290 = state_13244;
state_13244 = G__13290;
continue;
}
} else
{return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_13244){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_13244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6912__auto___13274,out))
})();var state__6914__auto__ = (function (){var statearr_13273 = f__6913__auto__.call(null);(statearr_13273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6912__auto___13274);
return statearr_13273;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6914__auto__);
});})(c__6912__auto___13274,out))
);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6912__auto___13433 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6912__auto___13433,out){
return (function (){var f__6913__auto__ = (function (){var switch__6847__auto__ = ((function (c__6912__auto___13433,out){
return (function (state_13403){var state_val_13404 = (state_13403[(1)]);if((state_val_13404 === (7)))
{var inst_13399 = (state_13403[(2)]);var state_13403__$1 = state_13403;var statearr_13405_13434 = state_13403__$1;(statearr_13405_13434[(2)] = inst_13399);
(statearr_13405_13434[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13404 === (1)))
{var inst_13362 = [];var inst_13363 = inst_13362;var inst_13364 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_13403__$1 = (function (){var statearr_13406 = state_13403;(statearr_13406[(7)] = inst_13363);
(statearr_13406[(8)] = inst_13364);
return statearr_13406;
})();var statearr_13407_13435 = state_13403__$1;(statearr_13407_13435[(2)] = null);
(statearr_13407_13435[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13404 === (4)))
{var inst_13367 = (state_13403[(9)]);var inst_13367__$1 = (state_13403[(2)]);var inst_13368 = (inst_13367__$1 == null);var inst_13369 = cljs.core.not.call(null,inst_13368);var state_13403__$1 = (function (){var statearr_13408 = state_13403;(statearr_13408[(9)] = inst_13367__$1);
return statearr_13408;
})();if(inst_13369)
{var statearr_13409_13436 = state_13403__$1;(statearr_13409_13436[(1)] = (5));
} else
{var statearr_13410_13437 = state_13403__$1;(statearr_13410_13437[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13404 === (15)))
{var inst_13393 = (state_13403[(2)]);var state_13403__$1 = state_13403;var statearr_13411_13438 = state_13403__$1;(statearr_13411_13438[(2)] = inst_13393);
(statearr_13411_13438[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13404 === (13)))
{var state_13403__$1 = state_13403;var statearr_13412_13439 = state_13403__$1;(statearr_13412_13439[(2)] = null);
(statearr_13412_13439[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13404 === (6)))
{var inst_13363 = (state_13403[(7)]);var inst_13388 = inst_13363.length;var inst_13389 = (inst_13388 > (0));var state_13403__$1 = state_13403;if(cljs.core.truth_(inst_13389))
{var statearr_13413_13440 = state_13403__$1;(statearr_13413_13440[(1)] = (12));
} else
{var statearr_13414_13441 = state_13403__$1;(statearr_13414_13441[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13404 === (3)))
{var inst_13401 = (state_13403[(2)]);var state_13403__$1 = state_13403;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13403__$1,inst_13401);
} else
{if((state_val_13404 === (12)))
{var inst_13363 = (state_13403[(7)]);var inst_13391 = cljs.core.vec.call(null,inst_13363);var state_13403__$1 = state_13403;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13403__$1,(15),out,inst_13391);
} else
{if((state_val_13404 === (2)))
{var state_13403__$1 = state_13403;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13403__$1,(4),ch);
} else
{if((state_val_13404 === (11)))
{var inst_13367 = (state_13403[(9)]);var inst_13371 = (state_13403[(10)]);var inst_13381 = (state_13403[(2)]);var inst_13382 = [];var inst_13383 = inst_13382.push(inst_13367);var inst_13363 = inst_13382;var inst_13364 = inst_13371;var state_13403__$1 = (function (){var statearr_13415 = state_13403;(statearr_13415[(11)] = inst_13383);
(statearr_13415[(12)] = inst_13381);
(statearr_13415[(7)] = inst_13363);
(statearr_13415[(8)] = inst_13364);
return statearr_13415;
})();var statearr_13416_13442 = state_13403__$1;(statearr_13416_13442[(2)] = null);
(statearr_13416_13442[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13404 === (9)))
{var inst_13363 = (state_13403[(7)]);var inst_13379 = cljs.core.vec.call(null,inst_13363);var state_13403__$1 = state_13403;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13403__$1,(11),out,inst_13379);
} else
{if((state_val_13404 === (5)))
{var inst_13367 = (state_13403[(9)]);var inst_13364 = (state_13403[(8)]);var inst_13371 = (state_13403[(10)]);var inst_13371__$1 = f.call(null,inst_13367);var inst_13372 = cljs.core._EQ_.call(null,inst_13371__$1,inst_13364);var inst_13373 = cljs.core.keyword_identical_QMARK_.call(null,inst_13364,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_13374 = (inst_13372) || (inst_13373);var state_13403__$1 = (function (){var statearr_13417 = state_13403;(statearr_13417[(10)] = inst_13371__$1);
return statearr_13417;
})();if(cljs.core.truth_(inst_13374))
{var statearr_13418_13443 = state_13403__$1;(statearr_13418_13443[(1)] = (8));
} else
{var statearr_13419_13444 = state_13403__$1;(statearr_13419_13444[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13404 === (14)))
{var inst_13396 = (state_13403[(2)]);var inst_13397 = cljs.core.async.close_BANG_.call(null,out);var state_13403__$1 = (function (){var statearr_13421 = state_13403;(statearr_13421[(13)] = inst_13396);
return statearr_13421;
})();var statearr_13422_13445 = state_13403__$1;(statearr_13422_13445[(2)] = inst_13397);
(statearr_13422_13445[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13404 === (10)))
{var inst_13386 = (state_13403[(2)]);var state_13403__$1 = state_13403;var statearr_13423_13446 = state_13403__$1;(statearr_13423_13446[(2)] = inst_13386);
(statearr_13423_13446[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13404 === (8)))
{var inst_13367 = (state_13403[(9)]);var inst_13363 = (state_13403[(7)]);var inst_13371 = (state_13403[(10)]);var inst_13376 = inst_13363.push(inst_13367);var tmp13420 = inst_13363;var inst_13363__$1 = tmp13420;var inst_13364 = inst_13371;var state_13403__$1 = (function (){var statearr_13424 = state_13403;(statearr_13424[(14)] = inst_13376);
(statearr_13424[(7)] = inst_13363__$1);
(statearr_13424[(8)] = inst_13364);
return statearr_13424;
})();var statearr_13425_13447 = state_13403__$1;(statearr_13425_13447[(2)] = null);
(statearr_13425_13447[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6912__auto___13433,out))
;return ((function (switch__6847__auto__,c__6912__auto___13433,out){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){var statearr_13429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13429[(0)] = state_machine__6848__auto__);
(statearr_13429[(1)] = (1));
return statearr_13429;
});
var state_machine__6848__auto____1 = (function (state_13403){while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_13403);if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6850__auto__;
}
break;
}
}catch (e13430){if((e13430 instanceof Object))
{var ex__6851__auto__ = e13430;var statearr_13431_13448 = state_13403;(statearr_13431_13448[(5)] = ex__6851__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13403);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13430;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13449 = state_13403;
state_13403 = G__13449;
continue;
}
} else
{return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_13403){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_13403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6912__auto___13433,out))
})();var state__6914__auto__ = (function (){var statearr_13432 = f__6913__auto__.call(null);(statearr_13432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6912__auto___13433);
return statearr_13432;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6914__auto__);
});})(c__6912__auto___13433,out))
);
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