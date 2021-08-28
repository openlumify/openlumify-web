define(['../actions'],function(actions){return function(_ref){var getState=_ref.getState;return function(next){return function(action){if(_.isFunction(action))return next(action);var type=action.type,payload=action.payload,meta=action.meta;if(type==='ROUTE_TO_WORKER_ACTION'&&meta){var workerImpl=meta.workerImpl,name=meta.name;if(workerImpl&&name){require([workerImpl],function(worker){if('default'in worker){worker=worker.default;}if(name in worker){var impl=worker[name];if(_.isFunction(impl)){var result=impl(payload);if(result){next(result);}}else{next(impl);}}else{console.error(worker);throw new Error('Action dispatched with no matching worker impl: '+name+', worker = '+workerImpl);}},function(error){console.error('Action dispatched with worker that got error: ',error);throw error;});}else{throw new Error('workerImpl and name required in meta for type = '+type);}}else{return next(action);}};};};});
//# sourceMappingURL=actionRouter.js.map
