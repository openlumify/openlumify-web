var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}define(['updeep'],function(u){'use strict';return function user(state,_ref){var type=_ref.type,payload=_ref.payload;if(!state)return{current:null};switch(type){case'USER_PUT':return put(state,payload.user);case'USER_PUT_PREFS':return u({current:{uiPreferences:payload.preferences}},state);case'USER_PUT_PREF':return u({current:{uiPreferences:_defineProperty({},payload.name,''+payload.value)}},state);}return state;};function put(state,user){var _user$privileges=user.privileges,privileges=_user$privileges===undefined?[]:_user$privileges;var userWithPrivHelper=_extends({},user,{privileges:privileges.sort(),privilegesHelper:_.indexBy(privileges)});return u({current:userWithPrivHelper},state);}});
//# sourceMappingURL=reducer.js.map
