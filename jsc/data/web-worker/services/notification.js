define(['../util/ajax'],function(ajax){'use strict';var api={list:function list(){return ajax('GET','/notification/all');},markRead:function markRead(ids){return ajax('POST','/notification/mark-read',{notificationIds:_.isArray(ids)?ids:[ids]});}};return api;});
//# sourceMappingURL=notification.js.map
