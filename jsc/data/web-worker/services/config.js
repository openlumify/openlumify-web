define(['../util/ajax','../store'],function(ajax,store){'use strict';var api={properties:function properties(locale){return store.getOrWaitForNestedState(function(s){return s.configuration.properties;});},messages:function messages(locale){return store.getOrWaitForNestedState(function(s){return s.configuration.messages;});}};return api;});
//# sourceMappingURL=config.js.map
