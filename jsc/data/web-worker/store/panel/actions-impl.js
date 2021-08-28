define(['../actions','../../util/ajax'],function(actions,ajax){actions.protectFromMain();var api={setPadding:function setPadding(_ref){var top=_ref.top,left=_ref.left,right=_ref.right,bottom=_ref.bottom;return{type:'PANEL_SET_PADDING',payload:{top:top,left:left,right:right,bottom:bottom}};}};return api;});
//# sourceMappingURL=actions-impl.js.map
