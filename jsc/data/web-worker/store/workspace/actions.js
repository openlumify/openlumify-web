define(['../actions'],function(actions){actions.protectFromWorker();return actions.createActions({workerImpl:'data/web-worker/store/workspace/actions-impl',actions:{setCurrent:function setCurrent(workspaceId){return{workspaceId:workspaceId};}}});});
//# sourceMappingURL=actions.js.map
