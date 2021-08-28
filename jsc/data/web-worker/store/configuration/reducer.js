define(['updeep'],function(updeep){'use strict';return function configuration(state,_ref){var type=_ref.type,payload=_ref.payload;if(!state)return{properties:{},messages:{}};switch(type){case'CONFIGURATION_UPDATE':return update(state,payload);}return state;};function update(state,payload){return updeep(payload,state);}});
//# sourceMappingURL=reducer.js.map
