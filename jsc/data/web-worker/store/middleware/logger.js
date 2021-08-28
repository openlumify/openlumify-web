define([],function(){return function(_ref){var getState=_ref.getState;return function(next){return function(action){var type=action.type,payload=action.payload;console.info("STORE_ACTION: "+type,payload);return next(action);};};};});
//# sourceMappingURL=logger.js.map
