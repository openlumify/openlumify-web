define(['../actions'],function(actions){actions.protectFromWorker();return actions.createActions({workerImpl:'data/web-worker/store/panel/actions-impl',actions:{setPadding:function setPadding(_ref){var top=_ref.top,left=_ref.left,right=_ref.right,bottom=_ref.bottom;return{top:top,left:left,right:right,bottom:bottom};}}});});
//# sourceMappingURL=actions.js.map
