define(['../actions'],function(actions){actions.protectFromWorker();return actions.createActions({workerImpl:'data/web-worker/store/ontology/actions-impl',actions:{get:function get(workspaceId){return{workspaceId:workspaceId};},addConcept:function addConcept(concept){var _ref=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},key=_ref.key,workspaceId=_ref.workspaceId;return{concept:concept,key:key,workspaceId:workspaceId};},addRelationship:function addRelationship(relationship){var _ref2=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},key=_ref2.key,workspaceId=_ref2.workspaceId;return{relationship:relationship,key:key,workspaceId:workspaceId};},addProperty:function addProperty(property){var _ref3=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},key=_ref3.key,workspaceId=_ref3.workspaceId;return{property:property,key:key,workspaceId:workspaceId};}}});});
//# sourceMappingURL=actions.js.map
