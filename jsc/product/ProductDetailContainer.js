define(['create-react-class','react-redux','configuration/plugins/registry','./ProductDetail','./ProductDetailEmpty','./ProductDetailNoSelection','data/web-worker/store/product/actions','data/web-worker/store/product/selectors'],function(createReactClass,redux,registry,ProductDetail,ProductDetailEmpty,ProductDetailNoSelection,productActions,productSelectors){'use strict';var ProductDetailContainer=createReactClass({displayName:'ProductDetailContainer',render:function render(){var props=this.props;var product=props.product,products=props.products,extensions=props.extensions;if(product){return React.createElement(ProductDetail,props);}else if(products&&products.length){return React.createElement(ProductDetailNoSelection,props);}else if(extensions){return React.createElement(ProductDetailEmpty,props);}return null;}});return redux.connect(function(state,props){var product=productSelectors.getProduct(state);var _productSelectors$get=productSelectors.getStatus(state),loading=_productSelectors$get.loading,loaded=_productSelectors$get.loaded;var extensions=registry.extensionsForPoint('org.openlumify.workproduct');var workspace=state.workspace.currentId?state.workspace.byId[state.workspace.currentId]:null;if(product){var productExtensions=_.where(extensions,{identifier:product.kind});if(productExtensions.length===0){throw Error('No org.openlumify.workproduct extensions registered for: '+product.kind);}if(productExtensions.length!==1){throw Error('Multiple org.openlumify.workproduct extensions registered for: '+product.kind);}return{padding:state.panel.padding,product:product,hasPreview:Boolean(productSelectors.getPreviewHash(state)),extension:productExtensions[0],workspace:workspace};}else if(extensions.length&&loaded){var user=state.user.current;return{padding:state.panel.padding,products:productSelectors.getProducts(state),extensions:extensions,editable:workspace&&user?workspace.editable&&user.privileges.includes('EDIT'):false,workspace:workspace};}return{};},function(dispatch){return{onGetProduct:function onGetProduct(id){return dispatch(productActions.get(id));},onCreateProduct:function onCreateProduct(kind){return dispatch(productActions.create(i18n('product.item.title.default'),kind));}};})(ProductDetailContainer);});
//# sourceMappingURL=ProductDetailContainer.js.map
