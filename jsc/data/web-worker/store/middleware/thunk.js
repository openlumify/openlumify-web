define([],function createThunkMiddleware(){return function(_ref){var dispatch=_ref.dispatch,getState=_ref.getState;return function(next){return function(action){if(_.isFunction(action)){return action(dispatch,getState);}return next(action);};};};});
//# sourceMappingURL=thunk.js.map
