define(['../util/ajax'],function(ajax){'use strict';var api={getById:function getById(id){if(!id){throw new Error('id cannot be null');}return ajax('GET','/directory/get',{id:id});},search:function search(_search,options){var params=_.extend({},options,{search:_search});return ajax('GET','/directory/search',params);}};return api;});
//# sourceMappingURL=directory.js.map
