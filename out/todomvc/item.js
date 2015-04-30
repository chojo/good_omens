// Compiled by ClojureScript 0.0-2280
goog.provide('todomvc.item');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('todomvc.utils');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('todomvc.utils');
goog.require('cljs.core.async');
todomvc.item.ESCAPE_KEY = (27);
todomvc.item.ENTER_KEY = (13);
todomvc.item.submit = (function submit(e,todo,owner,comm){var temp__4126__auto___9386 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"edit-text","edit-text",-616821813));if(cljs.core.truth_(temp__4126__auto___9386))
{var edit_text_9387 = temp__4126__auto___9386;if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,edit_text_9387.trim())))
{om.core.update_BANG_.call(null,todo,new cljs.core.Keyword(null,"title","title",636505583),edit_text_9387);
cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save","save",1850079149),cljs.core.deref.call(null,todo)], null));
} else
{cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.deref.call(null,todo)], null));
}
} else
{}
return false;
});
todomvc.item.complete = (function complete(todo){return om.core.transact_BANG_.call(null,todo,new cljs.core.Keyword(null,"completed","completed",-486056503),(function (p1__9388_SHARP_){return cljs.core.not.call(null,p1__9388_SHARP_);
}));
});
todomvc.item.destroy = (function destroy(todo,comm){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.deref.call(null,todo)], null));
});
todomvc.item.edit = (function edit(e,todo,owner,comm){var todo__$1 = cljs.core.deref.call(null,todo);var node = om.core.get_node.call(null,owner,"editField");cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit","edit",-1641834166),todo__$1], null));
var G__9390 = owner;om.core.set_state_BANG_.call(null,G__9390,new cljs.core.Keyword(null,"needs-focus","needs-focus",710899286),true);
om.core.set_state_BANG_.call(null,G__9390,new cljs.core.Keyword(null,"edit-text","edit-text",-616821813),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(todo__$1));
return G__9390;
});
todomvc.item.key_down = (function key_down(e,todo,owner,comm){var pred__9394 = cljs.core._EQ__EQ_;var expr__9395 = e.keyCode;if(cljs.core.truth_(pred__9394.call(null,todomvc.item.ESCAPE_KEY,expr__9395)))
{var todo__$1 = cljs.core.deref.call(null,todo);om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"edit-text","edit-text",-616821813),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(todo__$1));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancel","cancel",-1964088360),todo__$1], null));
} else
{if(cljs.core.truth_(pred__9394.call(null,todomvc.item.ENTER_KEY,expr__9395)))
{return todomvc.item.submit.call(null,e,todo,owner,comm);
} else
{return null;
}
}
});
todomvc.item.change = (function change(e,todo,owner){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"edit-text","edit-text",-616821813),e.target.value);
});
todomvc.item.todo_item = (function todo_item(todo,owner){if(typeof todomvc.item.t9407 !== 'undefined')
{} else
{
/**
* @constructor
*/
todomvc.item.t9407 = (function (owner,todo,todo_item,meta9408){
this.owner = owner;
this.todo = todo;
this.todo_item = todo_item;
this.meta9408 = meta9408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
todomvc.item.t9407.cljs$lang$type = true;
todomvc.item.t9407.cljs$lang$ctorStr = "todomvc.item/t9407";
todomvc.item.t9407.cljs$lang$ctorPrWriter = (function (this__4119__auto__,writer__4120__auto__,opt__4121__auto__){return cljs.core._write.call(null,writer__4120__auto__,"todomvc.item/t9407");
});
todomvc.item.t9407.prototype.om$core$IRenderState$ = true;
todomvc.item.t9407.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__9410){var self__ = this;
var map__9411 = p__9410;var map__9411__$1 = ((cljs.core.seq_QMARK_.call(null,map__9411))?cljs.core.apply.call(null,cljs.core.hash_map,map__9411):map__9411);var state = map__9411__$1;var comm = cljs.core.get.call(null,map__9411__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var ___$1 = this;var class$ = (function (){var G__9412 = "";var G__9412__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$1(self__.todo))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9412)+"completed"):G__9412);var G__9412__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"editing","editing",1365491601).cljs$core$IFn$_invoke$arity$1(self__.todo))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9412__$1)+"editing"):G__9412__$1);return G__9412__$2;
})();return React.DOM.li({"style": todomvc.utils.hidden.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(self__.todo)), "className": class$},React.DOM.div({"className": "view"},om.dom.input.call(null,{"onChange": ((function (class$,___$1,map__9411,map__9411__$1,state,comm){
return (function (){return todomvc.item.complete.call(null,self__.todo);
});})(class$,___$1,map__9411,map__9411__$1,state,comm))
, "checked": (function (){var and__3540__auto__ = new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$1(self__.todo);if(cljs.core.truth_(and__3540__auto__))
{return "checked";
} else
{return and__3540__auto__;
}
})(), "type": "checkbox", "className": "toggle"}),React.DOM.label({"onDoubleClick": ((function (class$,___$1,map__9411,map__9411__$1,state,comm){
return (function (p1__9397_SHARP_){return todomvc.item.edit.call(null,p1__9397_SHARP_,self__.todo,self__.owner,comm);
});})(class$,___$1,map__9411,map__9411__$1,state,comm))
},new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.todo)),React.DOM.button({"onClick": ((function (class$,___$1,map__9411,map__9411__$1,state,comm){
return (function (){return todomvc.item.destroy.call(null,self__.todo,comm);
});})(class$,___$1,map__9411,map__9411__$1,state,comm))
, "className": "destroy"})),om.dom.input.call(null,{"onKeyDown": ((function (class$,___$1,map__9411,map__9411__$1,state,comm){
return (function (p1__9400_SHARP_){return todomvc.item.key_down.call(null,p1__9400_SHARP_,self__.todo,self__.owner,comm);
});})(class$,___$1,map__9411,map__9411__$1,state,comm))
, "onChange": ((function (class$,___$1,map__9411,map__9411__$1,state,comm){
return (function (p1__9399_SHARP_){return todomvc.item.change.call(null,p1__9399_SHARP_,self__.todo,self__.owner);
});})(class$,___$1,map__9411,map__9411__$1,state,comm))
, "onBlur": ((function (class$,___$1,map__9411,map__9411__$1,state,comm){
return (function (p1__9398_SHARP_){return todomvc.item.submit.call(null,p1__9398_SHARP_,self__.todo,self__.owner,comm);
});})(class$,___$1,map__9411,map__9411__$1,state,comm))
, "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"edit-text","edit-text",-616821813)), "className": "edit", "ref": "editField"}));
});
todomvc.item.t9407.prototype.om$core$IDidUpdate$ = true;
todomvc.item.t9407.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;if(cljs.core.truth_((function (){var and__3540__auto__ = new cljs.core.Keyword(null,"editing","editing",1365491601).cljs$core$IFn$_invoke$arity$1(self__.todo);if(cljs.core.truth_(and__3540__auto__))
{return om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"needs-focus","needs-focus",710899286));
} else
{return and__3540__auto__;
}
})()))
{var node_9413 = om.core.get_node.call(null,self__.owner,"editField");var len_9414 = node_9413.value.length;node_9413.focus();
node_9413.setSelectionRange(len_9414,len_9414);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"needs-focus","needs-focus",710899286),null);
} else
{return null;
}
});
todomvc.item.t9407.prototype.om$core$IInitState$ = true;
todomvc.item.t9407.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edit-text","edit-text",-616821813),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.todo)], null);
});
todomvc.item.t9407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9409){var self__ = this;
var _9409__$1 = this;return self__.meta9408;
});
todomvc.item.t9407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9409,meta9408__$1){var self__ = this;
var _9409__$1 = this;return (new todomvc.item.t9407(self__.owner,self__.todo,self__.todo_item,meta9408__$1));
});
todomvc.item.__GT_t9407 = (function __GT_t9407(owner__$1,todo__$1,todo_item__$1,meta9408){return (new todomvc.item.t9407(owner__$1,todo__$1,todo_item__$1,meta9408));
});
}
return (new todomvc.item.t9407(owner,todo,todo_item,null));
});

//# sourceMappingURL=item.js.map