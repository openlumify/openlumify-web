var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}define([],function(){'use strict';var initialState={global:{undos:[],redos:[]}};return function undoActionHistory(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var _ref=arguments[1];var type=_ref.type,payload=_ref.payload;switch(type){case'UNDO':{var scope=payload&&payload.undoScope||'global';if(!state[scope]){return state;}var _state$scope=state[scope],undos=_state$scope.undos,redos=_state$scope.redos;if(!undos.length){return state;}var currentUndo=undos[undos.length-1];return _extends({},state,_defineProperty({},scope,{undos:undos.slice(0,undos.length-1),redos:[].concat(_toConsumableArray(redos),[currentUndo])}));}case'REDO':{var _scope=payload&&payload.undoScope||'global';if(!state[_scope]){return state;}var _state$_scope=state[_scope],_undos=_state$_scope.undos,_redos=_state$_scope.redos;if(!_redos.length){return state;}var currentRedo=_redos[_redos.length-1];return _extends({},state,_defineProperty({},_scope,{undos:[].concat(_toConsumableArray(_undos),[currentRedo]),redos:_redos.slice(0,_redos.length-1)}));}case'PUSH_UNDO':default:{if(!payload){return state;}var _payload$undoScope=payload.undoScope,_scope2=_payload$undoScope===undefined?'global':_payload$undoScope,undo=payload.undo,redo=payload.redo,undoActionType=payload.undoActionType;if(!undo||!redo){return state;}var newUndo={undo:undo,redo:redo,type:undoActionType||type};var scopedState=state[_scope2]||{undos:[],redos:[]};var _undos2=scopedState.undos,_redos2=scopedState.redos;return _extends({},state,_defineProperty({},_scope2,{undos:[].concat(_toConsumableArray(_undos2),[newUndo]),redos:[]}));}}};});
//# sourceMappingURL=reducer.js.map