var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}(function(global){define('wait-for-webworker-plugins',[],function(){return global.pluginsLoaded.promise;});if(!global.pluginsLoaded.isFinished()){console.error('Web worker plugins should not require the store using requirejs.  Please check any plugins that require "data/web-worker/store" and replace with "publicData.storePromise"\n\nFor example:\n\n    define([\n        \'data/web-worker/store\' //Remove this\n    ], function(store) {\n\n        // Add this\n        publicData.storePromise.then(store => {\n            ...\n        })\n    })');console.error('OpenLumify is deadlocked until circular dependency is resolved.');}define(['configuration/plugins/registry','redux','util/requirejs/promise!wait-for-webworker-plugins','./configuration/reducer','./element/reducer','./ontology/reducer','./panel/reducer','./product/reducer','./screen/reducer','./selection/reducer','./undo/reducer','./user/reducer','./workspace/reducer'],function(registry,redux,pluginsFinished){for(var _len=arguments.length,reducers=Array(_len>3?_len-3:0),_key=3;_key<_len;_key++){reducers[_key-3]=arguments[_key];}registry.markUndocumentedExtensionPoint('org.openlumify.store');var composeReducers=function composeReducers(reducers){return function(state,payload){return reducers.reduce(function(previous,fn){var returnedState=fn(previous,payload);if(!returnedState){console.warn('No state returned from reducer, ignoring',fn);return previous;}return returnedState;},state);};};var reducerExtensions=registry.extensionsForPoint('org.openlumify.store');var reducersByKey=_.groupBy(reducerExtensions,'key');var baseReducers=_.object(reducers.map(function(reducerFn){var name=reducerFn.name;if(_.isUndefined(name)){throw new Error('Undefined name for reducer: '+reducerFn);}if(name in reducersByKey){var _reducers=_.pluck(reducersByKey[name],'reducer');_reducers.splice(0,0,reducerFn);delete reducersByKey[name];return[name,composeReducers(_reducers)];}return[name,reducerFn];}));var rootExtensions=reducersByKey[undefined];var rootReducerExtensions=rootExtensions?_.pluck(rootExtensions,'reducer'):[];delete reducersByKey[undefined];var reducerMap=redux.combineReducers(_extends({},baseReducers,_.mapObject(reducersByKey,function(extensions){var reducers=extensions.map(function(e){return e.reducer;});return reducers.length===1?reducers[0]:composeReducers(reducers);})));return composeReducers([reducerMap].concat(_toConsumableArray(rootReducerExtensions)));});})(this);
//# sourceMappingURL=rootReducer.js.map
