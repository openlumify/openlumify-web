define(['updeep'],function(u){'use strict';return function panel(state,_ref){var type=_ref.type,payload=_ref.payload;if(!state)return{padding:{top:0,left:0,right:0,bottom:0}};switch(type){case'PANEL_SET_PADDING':return u({padding:payload},state);}return state;};});
//# sourceMappingURL=reducer.js.map
