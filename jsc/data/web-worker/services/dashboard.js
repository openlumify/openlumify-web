define(['../util/ajax','./storeHelper'],function(ajax,storeHelper){'use strict';return{requestData:function requestData(endpoint,params){return ajax('GET',endpoint,params);},postData:function postData(endpoint,params){return ajax('POST',endpoint,params).then(storeHelper.indexSearchResultsProperties);},dashboards:function dashboards(){return ajax('GET','/dashboard/all').then(function(result){return result.dashboards.map(function(dashboard){dashboard.items=dashboard.items.map(function(item){if(item.configuration){try{item.configuration=JSON.parse(item.configuration);}catch(e){console.error(e);}}return item;});return dashboard;});});},dashboardItemDelete:function dashboardItemDelete(itemId){return ajax('DELETE','/dashboard/item',{dashboardItemId:itemId});},dashboardNew:function dashboardNew(options){var params={};if(options&&options.title){params.title=options.title;}if(options&&options.items){params.items=options.items.map(function(item){var mapped=_.extend({},item);if(mapped.configuration){mapped.configuration=JSON.stringify(mapped.configuration);}return JSON.stringify(mapped);});}return ajax('POST','/dashboard',params);},dashboardUpdate:function dashboardUpdate(params){return ajax('POST','/dashboard',params);},dashboardItemUpdate:function dashboardItemUpdate(item){return ajax('POST','/dashboard/item',{dashboardItemId:item.id,extensionId:item.extensionId,title:item.title,configuration:JSON.stringify(item.configuration||{})});},dashboardItemNew:function dashboardItemNew(dashboardId,item){if(!dashboardId)throw new Error('dashboardId required if new item');var params={dashboardId:dashboardId};if('title'in item){params.title=item.title;}if(item.configuration){params.configuration=JSON.stringify(item.configuration);}if('extensionId'in item){params.extensionId=item.extensionId;}return ajax('POST','/dashboard/item',params);}};});
//# sourceMappingURL=dashboard.js.map
