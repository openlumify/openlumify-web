define(['../actions'],function(actions){actions.protectFromWorker();return actions.createActions({workerImpl:'data/web-worker/store/configuration/actions-impl',actions:{get:function get(locale){return{locale:locale};}}});});
//# sourceMappingURL=actions.js.map
