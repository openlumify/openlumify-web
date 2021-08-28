define(['../util/ajax'],function(ajax){'use strict';var api={geocode:function geocode(query){return ajax('GET','/map/geocode',{q:query});}};return api;});
//# sourceMappingURL=map.js.map
