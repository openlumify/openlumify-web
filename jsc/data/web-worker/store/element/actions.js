define(['../actions'],function(actions){actions.protectFromWorker();return actions.createActions({workerImpl:'data/web-worker/store/element/actions-impl',actions:{get:function get(_ref){var workspaceId=_ref.workspaceId,vertexIds=_ref.vertexIds,edgeIds=_ref.edgeIds;return{workspaceId:workspaceId,vertexIds:vertexIds,edgeIds:edgeIds};},setFocus:function setFocus(_ref2){var _ref2$vertexIds=_ref2.vertexIds,vertexIds=_ref2$vertexIds===undefined?[]:_ref2$vertexIds,_ref2$edgeIds=_ref2.edgeIds,edgeIds=_ref2$edgeIds===undefined?[]:_ref2$edgeIds,_ref2$elementIds=_ref2.elementIds,elementIds=_ref2$elementIds===undefined?[]:_ref2$elementIds;return{vertexIds:vertexIds,edgeIds:edgeIds,elementIds:elementIds};},updateElement:function updateElement(workspaceId,vertex){return{workspaceId:workspaceId,vertex:vertex};},refreshElement:function refreshElement(_ref3){var workspaceId=_ref3.workspaceId,vertexId=_ref3.vertexId,edgeId=_ref3.edgeId;return{workspaceId:workspaceId,vertexId:vertexId,edgeId:edgeId};}}});});
//# sourceMappingURL=actions.js.map