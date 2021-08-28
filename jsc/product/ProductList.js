var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}define(['create-react-class','./ProductListItem'],function(createReactClass,ProductListItem){'use strict';var ProductList=createReactClass({displayName:'ProductList',render:function render(){var _this=this;var _props=this.props,products=_props.products,previewHashes=_props.previewHashes,status=_props.status,onCreate=_props.onCreate,types=_props.types,workspace=_props.workspace,user=_props.user,rest=_objectWithoutProperties(_props,['products','previewHashes','status','onCreate','types','workspace','user']);var loading=status.loading,loaded=status.loaded;if(!workspace)return null;if(!user)return null;var editable=workspace.editable&&user.privileges.includes('EDIT');if(!loaded&&!loading){this.props.onLoadProducts();return null;}var itemElements=products.map(function(product){return React.createElement(ProductListItem,_extends({key:product.id,product:product,previewHash:previewHashes[product.id],editable:editable},rest));}),content=loading?React.createElement('div',{className:'message'},i18n('product.empty.message')):loaded&&itemElements.length?itemElements:loaded?React.createElement('div',{className:'message'},i18n('product.empty.message')):React.createElement('div',null);return React.createElement('div',{className:'products-container'},React.createElement('ul',{className:'products-list nav nav-list'},React.createElement('li',{className:'nav-header'},i18n('product.list.header'),React.createElement('span',{className:loading?'loading badge':'badge'})),editable?React.createElement('li',{className:'toolbar'},React.createElement('div',{className:'new btn-group'},React.createElement('a',{className:'btn dropdown-toggle btn-mini','data-toggle':'dropdown'},i18n('product.list.create')),React.createElement('ul',{className:'dropdown-menu'},_.sortBy(types,function(t){return i18n(t+'.name');}).map(function(type){return React.createElement('li',{key:type},React.createElement('a',{onClick:onCreate.bind(_this,type),key:type},i18n(type+'.name')));})))):null),React.createElement('div',{className:'products-list-items'},content));}});return ProductList;});
//# sourceMappingURL=ProductList.js.map
