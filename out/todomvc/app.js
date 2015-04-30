// Compiled by ClojureScript 0.0-2280
goog.provide('todomvc.app');
goog.require('cljs.core');
goog.require('todomvc.utils');
goog.require('cljs.core.async');
goog.require('secretary.core');
goog.require('todomvc.utils');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('todomvc.item');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('todomvc.item');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('clojure.string');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
todomvc.app.ENTER_KEY = (13);
todomvc.app.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.PersistentVector.EMPTY], null));
var action__9426__auto___9519 = (function (params__9427__auto__){if(cljs.core.map_QMARK_.call(null,params__9427__auto__))
{var map__9517 = params__9427__auto__;var map__9517__$1 = ((cljs.core.seq_QMARK_.call(null,map__9517))?cljs.core.apply.call(null,cljs.core.hash_map,map__9517):map__9517);return cljs.core.swap_BANG_.call(null,todomvc.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"all","all",892129742));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9427__auto__))
{var vec__9518 = params__9427__auto__;return cljs.core.swap_BANG_.call(null,todomvc.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"all","all",892129742));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__9426__auto___9519);
var action__9426__auto___9522 = (function (params__9427__auto__){if(cljs.core.map_QMARK_.call(null,params__9427__auto__))
{var map__9520 = params__9427__auto__;var map__9520__$1 = ((cljs.core.seq_QMARK_.call(null,map__9520))?cljs.core.apply.call(null,cljs.core.hash_map,map__9520):map__9520);var filter = cljs.core.get.call(null,map__9520__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));return cljs.core.swap_BANG_.call(null,todomvc.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"showing","showing",798009604),cljs.core.keyword.call(null,filter));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9427__auto__))
{var vec__9521 = params__9427__auto__;var filter = cljs.core.nth.call(null,vec__9521,(0),null);return cljs.core.swap_BANG_.call(null,todomvc.app.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"showing","showing",798009604),cljs.core.keyword.call(null,filter));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:filter",action__9426__auto___9522);
todomvc.app.history = (new goog.History());
goog.events.listen(todomvc.app.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_.call(null,e.token);
}));
todomvc.app.history.setEnabled(true);
todomvc.app.toggle_all = (function toggle_all(e,state){var checked = e.target.checked;return om.core.transact_BANG_.call(null,state,new cljs.core.Keyword(null,"todos","todos",630308868),((function (checked){
return (function (todos){return cljs.core.vec.call(null,cljs.core.map.call(null,((function (checked){
return (function (p1__9523_SHARP_){return cljs.core.assoc.call(null,p1__9523_SHARP_,new cljs.core.Keyword(null,"completed","completed",-486056503),checked);
});})(checked))
,todos));
});})(checked))
);
});
todomvc.app.enter_new_todo = (function enter_new_todo(e,state,owner){if((e.which === todomvc.app.ENTER_KEY))
{var new_field_9525 = om.core.get_node.call(null,owner,"newField");var new_field_text_9526 = clojure.string.trim.call(null,new_field_9525.value);if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,new_field_text_9526)))
{} else
{var new_todo_9527 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),todomvc.utils.guid.call(null),new cljs.core.Keyword(null,"title","title",636505583),new_field_text_9526,new cljs.core.Keyword(null,"completed","completed",-486056503),false], null);om.core.transact_BANG_.call(null,state,new cljs.core.Keyword(null,"todos","todos",630308868),((function (new_todo_9527,new_field_9525,new_field_text_9526){
return (function (p1__9524_SHARP_){return cljs.core.conj.call(null,p1__9524_SHARP_,new_todo_9527);
});})(new_todo_9527,new_field_9525,new_field_text_9526))
);
new_field_9525.value = "";
}
return false;
} else
{return null;
}
});
todomvc.app.destroy_todo = (function destroy_todo(state,p__9529){var map__9531 = p__9529;var map__9531__$1 = ((cljs.core.seq_QMARK_.call(null,map__9531))?cljs.core.apply.call(null,cljs.core.hash_map,map__9531):map__9531);var id = cljs.core.get.call(null,map__9531__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return om.core.transact_BANG_.call(null,state,new cljs.core.Keyword(null,"todos","todos",630308868),((function (map__9531,map__9531__$1,id){
return (function (todos){return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (map__9531,map__9531__$1,id){
return (function (p1__9528_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__9528_SHARP_),id);
});})(map__9531,map__9531__$1,id))
,todos));
});})(map__9531,map__9531__$1,id))
);
});
todomvc.app.edit_todo = (function edit_todo(state,p__9532){var map__9534 = p__9532;var map__9534__$1 = ((cljs.core.seq_QMARK_.call(null,map__9534))?cljs.core.apply.call(null,cljs.core.hash_map,map__9534):map__9534);var id = cljs.core.get.call(null,map__9534__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return om.core.update_BANG_.call(null,state,new cljs.core.Keyword(null,"editing","editing",1365491601),id);
});
todomvc.app.save_todos = (function save_todos(state){return om.core.update_BANG_.call(null,state,new cljs.core.Keyword(null,"editing","editing",1365491601),null);
});
todomvc.app.cancel_action = (function cancel_action(state){return om.core.update_BANG_.call(null,state,new cljs.core.Keyword(null,"editing","editing",1365491601),null);
});
todomvc.app.handle_event = (function handle_event(type,state,val){var G__9536 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__9536) {
case "cancel":
return todomvc.app.cancel_action.call(null,state);

break;
case "save":
return todomvc.app.save_todos.call(null,state);

break;
case "edit":
return todomvc.app.edit_todo.call(null,state,val);

break;
case "destroy":
return todomvc.app.destroy_todo.call(null,state,val);

break;
default:
return null;

}
});
todomvc.app.visible_QMARK_ = (function visible_QMARK_(todo,filter){var G__9539 = (((filter instanceof cljs.core.Keyword))?filter.fqn:null);switch (G__9539) {
case "completed":
return new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$1(todo);

break;
case "active":
return cljs.core.not.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$1(todo));

break;
case "all":
return true;

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter))));

}
});
todomvc.app.header = (function header(){return React.DOM.header({"id": "header"},React.DOM.h1(null,"todos"));
});
todomvc.app.list_items = (function list_items(todos,showing,editing,comm){return om.core.build_all.call(null,todomvc.item.todo_item,todos,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",-1689770614),comm], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (todo){var G__9542 = todo;var G__9542__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo),editing))?cljs.core.assoc.call(null,G__9542,new cljs.core.Keyword(null,"editing","editing",1365491601),true):G__9542);var G__9542__$2 = ((cljs.core.not.call(null,todomvc.app.visible_QMARK_.call(null,todo,showing)))?cljs.core.assoc.call(null,G__9542__$1,new cljs.core.Keyword(null,"hidden","hidden",-312506092),true):G__9542__$1);return G__9542__$2;
})], null));
});
todomvc.app.listing = (function listing(p__9544,comm){var map__9546 = p__9544;var map__9546__$1 = ((cljs.core.seq_QMARK_.call(null,map__9546))?cljs.core.apply.call(null,cljs.core.hash_map,map__9546):map__9546);var state = map__9546__$1;var editing = cljs.core.get.call(null,map__9546__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));var showing = cljs.core.get.call(null,map__9546__$1,new cljs.core.Keyword(null,"showing","showing",798009604));var todos = cljs.core.get.call(null,map__9546__$1,new cljs.core.Keyword(null,"todos","todos",630308868));return React.DOM.section({"style": todomvc.utils.hidden.call(null,cljs.core.empty_QMARK_.call(null,todos)), "id": "main"},om.dom.input.call(null,{"checked": cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503),todos), "onChange": ((function (map__9546,map__9546__$1,state,editing,showing,todos){
return (function (p1__9543_SHARP_){return todomvc.app.toggle_all.call(null,p1__9543_SHARP_,state);
});})(map__9546,map__9546__$1,state,editing,showing,todos))
, "type": "checkbox", "id": "toggle-all"}),cljs.core.apply.call(null,om.dom.ul,{"id": "todo-list"},todomvc.app.list_items.call(null,todos,showing,editing,comm)));
});
todomvc.app.footer = (function footer(p__9547){var map__9549 = p__9547;var map__9549__$1 = ((cljs.core.seq_QMARK_.call(null,map__9549))?cljs.core.apply.call(null,cljs.core.hash_map,map__9549):map__9549);var state = map__9549__$1;var todos = cljs.core.get.call(null,map__9549__$1,new cljs.core.Keyword(null,"todos","todos",630308868));var count = cljs.core.count.call(null,cljs.core.remove.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503),todos));var sel = cljs.core.assoc.call(null,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.repeat.call(null,"")),new cljs.core.Keyword(null,"showing","showing",798009604).cljs$core$IFn$_invoke$arity$1(state),"selected");return React.DOM.footer({"style": todomvc.utils.hidden.call(null,cljs.core.empty_QMARK_.call(null,todos)), "id": "footer"},React.DOM.span({"id": "todo-count"},React.DOM.strong(null,count),(" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(todomvc.utils.pluralize.call(null,count,"item"))+" left")),React.DOM.ul({"id": "filters"},React.DOM.li(null,React.DOM.a({"className": sel.call(null,new cljs.core.Keyword(null,"all","all",892129742)), "href": "#/"},"All")),React.DOM.li(null,React.DOM.a({"className": sel.call(null,new cljs.core.Keyword(null,"active","active",1895962068)), "href": "#/active"},"Active")),React.DOM.li(null,React.DOM.a({"className": sel.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503)), "href": "#/completed"},"Completed"))));
});
todomvc.app.render_disclaimer = (function render_disclaimer(){return om.dom.render.call(null,React.DOM.div(null,React.DOM.p(null,"Double-click to edit a todo"),React.DOM.p(null,React.DOM.a({"href": "http://github.com/swannodette"})),React.DOM.p(null,["Part of",React.DOM.a({"href": "http://todomvc.com"},"TodoMVC")])),document.getElementById("info"));
});
todomvc.app.todo_app = (function todo_app(p__9551,owner){var map__9589 = p__9551;var map__9589__$1 = ((cljs.core.seq_QMARK_.call(null,map__9589))?cljs.core.apply.call(null,cljs.core.hash_map,map__9589):map__9589);var state = map__9589__$1;var todos = cljs.core.get.call(null,map__9589__$1,new cljs.core.Keyword(null,"todos","todos",630308868));if(typeof todomvc.app.t9590 !== 'undefined')
{} else
{
/**
* @constructor
*/
todomvc.app.t9590 = (function (todos,state,map__9589,owner,p__9551,todo_app,meta9591){
this.todos = todos;
this.state = state;
this.map__9589 = map__9589;
this.owner = owner;
this.p__9551 = p__9551;
this.todo_app = todo_app;
this.meta9591 = meta9591;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
todomvc.app.t9590.cljs$lang$type = true;
todomvc.app.t9590.cljs$lang$ctorStr = "todomvc.app/t9590";
todomvc.app.t9590.cljs$lang$ctorPrWriter = ((function (map__9589,map__9589__$1,state,todos){
return (function (this__4119__auto__,writer__4120__auto__,opt__4121__auto__){return cljs.core._write.call(null,writer__4120__auto__,"todomvc.app/t9590");
});})(map__9589,map__9589__$1,state,todos))
;
todomvc.app.t9590.prototype.om$core$IRenderState$ = true;
todomvc.app.t9590.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__9589,map__9589__$1,state,todos){
return (function (_,p__9593){var self__ = this;
var map__9594 = p__9593;var map__9594__$1 = ((cljs.core.seq_QMARK_.call(null,map__9594))?cljs.core.apply.call(null,cljs.core.hash_map,map__9594):map__9594);var comm = cljs.core.get.call(null,map__9594__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var ___$1 = this;return React.DOM.div(null,todomvc.app.header.call(null),om.dom.input.call(null,{"onKeyDown": ((function (___$1,map__9594,map__9594__$1,comm,map__9589,map__9589__$1,state,todos){
return (function (p1__9550_SHARP_){return todomvc.app.enter_new_todo.call(null,p1__9550_SHARP_,self__.state,self__.owner);
});})(___$1,map__9594,map__9594__$1,comm,map__9589,map__9589__$1,state,todos))
, "placeholder": "What needs to be done?", "ref": "newField", "id": "new-todo"}),todomvc.app.listing.call(null,self__.state,comm),todomvc.app.footer.call(null,self__.state));
});})(map__9589,map__9589__$1,state,todos))
;
todomvc.app.t9590.prototype.om$core$IDidUpdate$ = true;
todomvc.app.t9590.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__9589,map__9589__$1,state,todos){
return (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;return todomvc.utils.store.call(null,"todos",self__.todos);
});})(map__9589,map__9589__$1,state,todos))
;
todomvc.app.t9590.prototype.om$core$IWillMount$ = true;
todomvc.app.t9590.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__9589,map__9589__$1,state,todos){
return (function (_){var self__ = this;
var ___$1 = this;var comm = cljs.core.async.chan.call(null);om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"comm","comm",-1689770614),comm);
var c__6912__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6912__auto__,comm,___$1,map__9589,map__9589__$1,state,todos){
return (function (){var f__6913__auto__ = (function (){var switch__6847__auto__ = ((function (c__6912__auto__,comm,___$1,map__9589,map__9589__$1,state,todos){
return (function (state_9610){var state_val_9611 = (state_9610[(1)]);if((state_val_9611 === (7)))
{var inst_9599 = (state_9610[(2)]);var inst_9600 = cljs.core.nth.call(null,inst_9599,(0),null);var inst_9601 = cljs.core.nth.call(null,inst_9599,(1),null);var inst_9602 = todomvc.app.handle_event.call(null,inst_9600,self__.state,inst_9601);var state_9610__$1 = (function (){var statearr_9612 = state_9610;(statearr_9612[(7)] = inst_9602);
return statearr_9612;
})();var statearr_9613_9626 = state_9610__$1;(statearr_9613_9626[(2)] = null);
(statearr_9613_9626[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9611 === (6)))
{var inst_9606 = (state_9610[(2)]);var state_9610__$1 = state_9610;var statearr_9614_9627 = state_9610__$1;(statearr_9614_9627[(2)] = inst_9606);
(statearr_9614_9627[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9611 === (5)))
{var state_9610__$1 = state_9610;var statearr_9615_9628 = state_9610__$1;(statearr_9615_9628[(2)] = null);
(statearr_9615_9628[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9611 === (4)))
{var state_9610__$1 = state_9610;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9610__$1,(7),comm);
} else
{if((state_val_9611 === (3)))
{var inst_9608 = (state_9610[(2)]);var state_9610__$1 = state_9610;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9610__$1,inst_9608);
} else
{if((state_val_9611 === (2)))
{var state_9610__$1 = state_9610;if(true)
{var statearr_9616_9629 = state_9610__$1;(statearr_9616_9629[(1)] = (4));
} else
{var statearr_9617_9630 = state_9610__$1;(statearr_9617_9630[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9611 === (1)))
{var state_9610__$1 = state_9610;var statearr_9618_9631 = state_9610__$1;(statearr_9618_9631[(2)] = null);
(statearr_9618_9631[(1)] = (2));
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
});})(c__6912__auto__,comm,___$1,map__9589,map__9589__$1,state,todos))
;return ((function (switch__6847__auto__,c__6912__auto__,comm,___$1,map__9589,map__9589__$1,state,todos){
return (function() {
var state_machine__6848__auto__ = null;
var state_machine__6848__auto____0 = (function (){var statearr_9622 = [null,null,null,null,null,null,null,null];(statearr_9622[(0)] = state_machine__6848__auto__);
(statearr_9622[(1)] = (1));
return statearr_9622;
});
var state_machine__6848__auto____1 = (function (state_9610){while(true){
var ret_value__6849__auto__ = (function (){try{while(true){
var result__6850__auto__ = switch__6847__auto__.call(null,state_9610);if(cljs.core.keyword_identical_QMARK_.call(null,result__6850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6850__auto__;
}
break;
}
}catch (e9623){if((e9623 instanceof Object))
{var ex__6851__auto__ = e9623;var statearr_9624_9632 = state_9610;(statearr_9624_9632[(5)] = ex__6851__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9610);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9623;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9633 = state_9610;
state_9610 = G__9633;
continue;
}
} else
{return ret_value__6849__auto__;
}
break;
}
});
state_machine__6848__auto__ = function(state_9610){
switch(arguments.length){
case 0:
return state_machine__6848__auto____0.call(this);
case 1:
return state_machine__6848__auto____1.call(this,state_9610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6848__auto____0;
state_machine__6848__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6848__auto____1;
return state_machine__6848__auto__;
})()
;})(switch__6847__auto__,c__6912__auto__,comm,___$1,map__9589,map__9589__$1,state,todos))
})();var state__6914__auto__ = (function (){var statearr_9625 = f__6913__auto__.call(null);(statearr_9625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6912__auto__);
return statearr_9625;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6914__auto__);
});})(c__6912__auto__,comm,___$1,map__9589,map__9589__$1,state,todos))
);
return c__6912__auto__;
});})(map__9589,map__9589__$1,state,todos))
;
todomvc.app.t9590.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__9589,map__9589__$1,state,todos){
return (function (_9592){var self__ = this;
var _9592__$1 = this;return self__.meta9591;
});})(map__9589,map__9589__$1,state,todos))
;
todomvc.app.t9590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__9589,map__9589__$1,state,todos){
return (function (_9592,meta9591__$1){var self__ = this;
var _9592__$1 = this;return (new todomvc.app.t9590(self__.todos,self__.state,self__.map__9589,self__.owner,self__.p__9551,self__.todo_app,meta9591__$1));
});})(map__9589,map__9589__$1,state,todos))
;
todomvc.app.__GT_t9590 = ((function (map__9589,map__9589__$1,state,todos){
return (function __GT_t9590(todos__$1,state__$1,map__9589__$2,owner__$1,p__9551__$1,todo_app__$1,meta9591){return (new todomvc.app.t9590(todos__$1,state__$1,map__9589__$2,owner__$1,p__9551__$1,todo_app__$1,meta9591));
});})(map__9589,map__9589__$1,state,todos))
;
}
return (new todomvc.app.t9590(todos,state,map__9589__$1,owner,p__9551,todo_app,null));
});
om.core.root.call(null,todomvc.app.todo_app,todomvc.app.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("todoapp")], null));
todomvc.app.render_disclaimer.call(null);

//# sourceMappingURL=app.js.map