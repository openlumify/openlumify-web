var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}define(['../actions','../../util/ajax','../element/actions-impl','../element/selectors','../workspace/actions-impl','../selection/actions-impl','./selectors','configuration/plugins/registry'],function(actions,ajax,elementActions,elementSelectors,workspaceActions,selectionActions,selectors,registry){actions.protectFromMain();var api={get:function get(_ref){var productId=_ref.productId,invalidate=_ref.invalidate,_ref$includeExtended=_ref.includeExtended,includeExtended=_ref$includeExtended===undefined?true:_ref$includeExtended;return function(dispatch,getState){var state=getState();var workspaceId=state.workspace.currentId;var products=state.product.workspaces[workspaceId].products;var product=products[productId];var request=void 0;var options={productId:productId,includeExtended:includeExtended};if(includeExtended){options.params={includeVertices:true,includeEdges:true};}if(!invalidate&&product){if(!product.extendedData&&includeExtended){request=ajax('GET','/product',options);}}else if(invalidate||!product){request=ajax('GET','/product',options);}if(request){request.then(function(product){dispatch(api.update(product));if(includeExtended){var _product$extendedData=product.extendedData,vertices=_product$extendedData.vertices,edges=_product$extendedData.edges;var vertexIds=Object.keys(vertices);var edgeIds=Object.keys(edges);var includeAncillary=_.any(vertices,function(_ref2){var ancillary=_ref2.ancillary;return ancillary===true;});dispatch(elementActions.get({workspaceId:workspaceId,vertexIds:vertexIds,edgeIds:edgeIds,includeAncillary:includeAncillary}));}});}};},previewChanged:function previewChanged(_ref3){var productId=_ref3.productId,workspaceId=_ref3.workspaceId,md5=_ref3.md5;return function(dispatch,getState){return dispatch({type:'PRODUCT_PREVIEW_UPDATE',payload:{productId:productId,md5:md5,workspaceId:workspaceId}});};},changedOnServer:function changedOnServer(_ref4){var productId=_ref4.productId,workspaceId=_ref4.workspaceId;return function(dispatch,getState){var state=getState();if(state.product.workspaces[workspaceId]){dispatch(api.get({productId:productId,invalidate:true,includeExtended:selectors.getSelectedId(state)===productId}));}};},setInteracting:function setInteracting(_ref5){var interactingIds=_ref5.interactingIds;return{type:'PRODUCT_SET_INTERACTING',payload:{interactingIds:interactingIds}};},update:function update(product){return{type:'PRODUCT_UPDATE',payload:{product:product}};},updatePreview:function updatePreview(_ref6){var productId=_ref6.productId,dataUrl=_ref6.dataUrl;return function(dispatch,getState){var state=getState();var workspaceId=state.workspace.currentId;ajax('POST','/product',{productId:productId,preview:dataUrl}).then(function(product){var md5=product.previewMD5;dispatch(api.previewChanged({productId:productId,workspaceId:workspaceId,md5:md5}));});};},updateLocalData:function updateLocalData(_ref7){var productId=_ref7.productId,key=_ref7.key,value=_ref7.value;return function(dispatch,getState){var state=getState();var workspaceId=state.workspace.currentId;var product=state.product.workspaces[workspaceId].products[productId];var localData=product.localData||{};if(value===null){localData=_.omit(localData,key);}else{localData=_extends({},localData,_defineProperty({},key,value));}dispatch({type:'PRODUCT_UPDATE_LOCAL_DATA',payload:{workspaceId:workspaceId,productId:productId,localData:localData}});};},updateData:function updateData(_ref8){var productId=_ref8.productId,key=_ref8.key,value=_ref8.value;return function(dispatch,getState){var state=getState();var workspaceId=state.workspace.currentId;var params={data:{}};params.data[key]=value;var oldValue=state.product.workspaces[workspaceId].products[productId].data[key];dispatch({type:'PRODUCT_UPDATE_DATA',payload:{workspaceId:workspaceId,productId:productId,key:key,value:value}});ajax('POST','/product',{productId:productId,params:params}).catch(function(e){dispatch({type:'PRODUCT_UPDATE_DATA',payload:{workspaceId:workspaceId,productId:productId,key:key,oldValue:oldValue}});});};},updateExtendedData:function updateExtendedData(_ref9){var productId=_ref9.productId,key=_ref9.key,value=_ref9.value,undoable=_ref9.undoable;return function(dispatch,getState){var state=getState();var workspaceId=state.workspace.currentId;var params={extendedData:{}};params.extendedData[key]=value;var oldValue=state.product.workspaces[workspaceId].products[productId].extendedData[key];dispatch({type:'PRODUCT_UPDATE_EXTENDED_DATA',payload:{workspaceId:workspaceId,productId:productId,key:key,value:value}});ajax('POST','/product',{productId:productId,params:params}).catch(function(e){dispatch({type:'PRODUCT_UPDATE_EXTENDED_DATA',payload:{workspaceId:workspaceId,productId:productId,key:key,oldValue:oldValue}});});};},updateViewport:function updateViewport(_ref10){var productId=_ref10.productId,pan=_ref10.pan,zoom=_ref10.zoom;return function(dispatch,getState){return dispatch({type:'PRODUCT_UPDATE_VIEWPORT',payload:{productId:productId,viewport:{pan:pan,zoom:zoom},workspaceId:getState().workspace.currentId}});};},selectAll:function selectAll(_ref11){var productId=_ref11.productId;return function(dispatch,getState){var state=getState(),workspaceId=state.workspace.currentId,product=state.product.workspaces[workspaceId].products[productId];var vertices=Object.keys(product.extendedData.vertices).filter(function(id){return!product.extendedData.vertices[id].ancillary;});dispatch(selectionActions.set({selection:{vertices:vertices,edges:Object.keys(product.extendedData.edges)}}));};},list:function list(initial){return function handler(dispatch,getState){var initialProductId=initial.productId,initialWorkspaceId=initial.workspaceId;var workspaceId=getState().workspace.currentId;if(!workspaceId){_.delay(handler,250,dispatch,getState);return;}Promise.try(function(){if(initialWorkspaceId&&initialWorkspaceId!==workspaceId){return dispatch(workspaceActions.setCurrent({workspaceId:initialWorkspaceId}));}}).then(function(){var state=getState();var workspaceId=state.workspace.currentId;var workspaceProduct=state.product.workspaces[workspaceId];if(!workspaceProduct||!workspaceProduct.loaded&&!workspaceProduct.loading){dispatch({type:'PRODUCT_LIST',payload:{loading:true,loaded:false,workspaceId:workspaceId}});ajax('GET','/product/all',{workspaceId:workspaceId}).then(function(_ref12){var types=_ref12.types,products=_ref12.products;dispatch({type:'PRODUCT_UPDATE_TYPES',payload:{types:types}});dispatch({type:'PRODUCT_LIST',payload:{workspaceId:workspaceId,loading:false,loaded:true,products:products}});if(initialProductId){dispatch(api.select({productId:initialProductId}));}});}});};},create:function create(_ref13){var title=_ref13.title,kind=_ref13.kind;return function(dispatch,getState){var products=selectors.getProducts(getState());ajax('POST','/product',{title:title,kind:kind}).then(function(product){dispatch(api.update(product));dispatch(api.select({productId:product.id}));});};},delete:function _delete(_ref14){var productId=_ref14.productId;return function(dispatch){return ajax('DELETE','/product',{productId:productId}).then(function(){return dispatch(api.remove(productId));});};},updateTitle:function updateTitle(_ref15){var productId=_ref15.productId,title=_ref15.title;return function(dispatch,getState){var state=getState();var workspaceId=state.workspace.currentId;var product=state.product.workspaces[workspaceId].products[productId];var kind=product.kind;dispatch({type:'PRODUCT_UPDATE_TITLE',payload:{productId:productId,loading:true,workspaceId:workspaceId}});ajax('POST','/product',{title:title,kind:kind,productId:productId}).then(function(result){dispatch({type:'PRODUCT_UPDATE_TITLE',payload:{loading:false,productId:productId,workspaceId:workspaceId,title:title}});});};},remove:function remove(productId){return function(dispatch,getState){var state=getState();var workspaceId=state.workspace.currentId;var _state$product$worksp=state.product.workspaces[workspaceId],products=_state$product$worksp.products,selected=_state$product$worksp.selected;var product=products[productId];if(product){dispatch({type:'PRODUCT_REMOVE',payload:{productId:productId,workspaceId:workspaceId}});if(productId===selected){dispatch(api.select({productId:null}));}}};},select:function select(_ref16){var productId=_ref16.productId;return function(dispatch,getState){var state=getState();var workspaceId=state.workspace.currentId;if(!productId){var nextProduct=_.first(selectors.getProducts(state));if(nextProduct){productId=nextProduct.id;}}dispatch({type:'PRODUCT_SELECT',payload:{workspaceId:workspaceId,productId:productId}});pushSocketMessage({type:'setActiveProduct',data:{workspaceId:workspaceId,productId:productId}});};}};return api;});
//# sourceMappingURL=actions-impl.js.map