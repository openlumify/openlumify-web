define(['../actions'],function(actions){actions.protectFromMain();var api={undoForProduct:function undoForProduct(){return function(dispatch,getState){var state=getState();var currentWorkspace=state.workspace.currentId;var currentProduct=state.product.workspaces[currentWorkspace].selected;return dispatch({type:'UNDO',payload:{undoScope:currentProduct}});};},redoForProduct:function redoForProduct(){return function(dispatch,getState){var state=getState();var currentWorkspace=state.workspace.currentId;var currentProduct=state.product.workspaces[currentWorkspace].selected;return dispatch({type:'REDO',payload:{undoScope:currentProduct}});};}};return api;});
//# sourceMappingURL=actions-impl.js.map
