var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}define(['create-react-class','prop-types','configuration/plugins/registry','components/RegistryInjectorHOC','util/deepObjectCache','./ProductToolbarItem','./ProductToolbarMenu'],function(createReactClass,PropTypes,registry,RegistryInjectorHOC,DeepObjectCache,ProductToolbarItem,ProductToolbarMenu){'use strict';registry.documentExtensionPoint('org.openlumify.product.toolbar.item','Add components to the product toolbar',function(e){return'identifier'in e&&'canHandle'in e&&_.isFunction(e.canHandle)&&['itemComponentPath','icon','label'].some(function(key){return key in e;});},'http://docs.openlumify.org/extension-points/front-end/productOptions');var placementHint={MENU:'menu',BUTTON:'button',POPOVER:'popover'};var MENU_IDENTIFIER='menu';var HOVER_OPEN_DELAY=600;var ProductToolbar=createReactClass({displayName:'ProductToolbar',propTypes:{product:PropTypes.shape({kind:PropTypes.string.isRequired}).isRequired,registry:PropTypes.object.isRequired,injectedProductProps:PropTypes.object,showNavigationControls:PropTypes.bool,onFit:PropTypes.func,onZoom:PropTypes.func,rightOffset:PropTypes.number},getDefaultProps:function getDefaultProps(){return{rightOffset:0,showNavigationControls:false,injectedProductProps:{}};},getInitialState:function getInitialState(){return{activeItem:null,stayOpen:false};},componentDidMount:function componentDidMount(){var _this=this;$(document).on('keydown.org-openlumify-product-toolbar',function(event){if(event.which===27){_this.setState({activeItem:null,stayOpen:false});}});this.triggerInitialize();},componentDidUpdate:function componentDidUpdate(prevState,prevProps){if(this.state.stayOpen&&this.openItemTimeout){clearTimeout(this.openItemTimeout);this.openItemTimeout=null;}this.triggerInitialize();},componentWillUnmount:function componentWillUnmount(){this.triggerTeardown();$(document).off('keydown.org-openlumify-product-toolbar');},render:function render(){var _this2=this;var activeItem=this.state.activeItem;var _props=this.props,onFit=_props.onFit,onZoom=_props.onZoom,rightOffset=_props.rightOffset,registry=_props.registry,injectedProductProps=_props.injectedProductProps,product=_props.product;var menuItems=[],listItems=[];var groupByPlacement=function groupByPlacement(item){var placementHint=item.placementHint,icon=item.icon,label=item.label;if(placementHint){if(placementHint===placementHint.MENU){menuItems.push(item);}else{listItems.push(item);}}else if(icon||label){listItems.push(item);}else{menuItems.push(item);}};var items=[].concat(_toConsumableArray(_.sortBy(registry['org.openlumify.product.toolbar.item'],'identifier')),_toConsumableArray(this.getDefaultItems()),_toConsumableArray(this.mapDeprecatedItems()));this.eligibleForInitialize=[];items.forEach(function(_item){var item=_extends({},_item,{props:_extends({},_item.props,injectedProductProps)});if(item.canHandle(product)){if(_.isFunction(item.initialize)){_this2.eligibleForInitialize.push(item);}groupByPlacement(item);}});return React.createElement('div',{className:'product-toolbar',style:{transform:'translate(-'+rightOffset+'px, 0)'}},React.createElement('div',{className:'toolbar-list'},listItems.length?React.createElement('ul',{className:'extensions'},listItems.map(function(item){return React.createElement(ProductToolbarItem,{item:item,active:activeItem===item.identifier,key:item.identifier,onClick:_this2.onItemClick,onItemMouseEnter:_this2.onItemMouseEnter,onItemMouseLeave:_this2.onItemMouseLeave,rightOffset:rightOffset});})):null,menuItems.length?React.createElement(ProductToolbarMenu,{items:menuItems,active:activeItem===MENU_IDENTIFIER,identifier:MENU_IDENTIFIER,onToggle:this.onItemClick,onItemMouseEnter:this.onItemMouseEnter,onItemMouseLeave:this.onItemMouseLeave}):null));},onItemClick:function onItemClick(identifier){var _state=this.state,activeItem=_state.activeItem,stayOpen=_state.stayOpen;if(activeItem){if(activeItem===identifier&&!stayOpen){this.setState({stayOpen:true});}else if(activeItem===identifier){this.setActiveItem();}else{this.setActiveItem(identifier,true);}}else if(identifier){this.setActiveItem(identifier,true);}else{this.setActiveItem();}},onItemMouseEnter:function onItemMouseEnter(identifier){var _this3=this;if(!this.state.stayOpen){this.openItemTimeout=setTimeout(function(){_this3.setActiveItem(identifier);},HOVER_OPEN_DELAY);}},onItemMouseLeave:function onItemMouseLeave(identifier){if(!this.state.stayOpen){var _state2=this.state,activeItem=_state2.activeItem,stayOpen=_state2.stayOpen;if(this.openItemTimeout){clearTimeout(this.openItemTimeout);this.openItemTimeout=null;}if(activeItem&&!stayOpen){this.setActiveItem();}}},setActiveItem:function setActiveItem(){var activeItem=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var stayOpen=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;this.setState({activeItem:activeItem,stayOpen:stayOpen});},getDefaultItems:function getDefaultItems(){var _props2=this.props,showNavigationControls=_props2.showNavigationControls,onZoom=_props2.onZoom,onFit=_props2.onFit;return[{identifier:'org-openlumify-product-zoom-out',placementHint:'button',label:'-',props:{handler:_.partial(onZoom,'out')},buttonClass:'zoom',canHandle:function canHandle(){return showNavigationControls&&!!onZoom;}},{identifier:'org-openlumify-product-zoom-in',placementHint:'button',label:'+',props:{handler:_.partial(onZoom,'in')},buttonClass:'zoom',canHandle:function canHandle(){return showNavigationControls&&!!onZoom;}},{identifier:'org-openlumify-product-fit',placementHint:'button',label:i18n('product.toolbar.fit'),props:{handler:onFit},canHandle:function canHandle(){return showNavigationControls&&!!onFit;}}];},mapDeprecatedItems:function mapDeprecatedItems(){var _props3=this.props,product=_props3.product,registry=_props3.registry;var items=[];['org.openlumify.map.options','org.openlumify.graph.options'].forEach(function(extensionPoint){var productKind=extensionPoint==='org.openlumify.graph.options'?'org.openlumify.web.product.graph.GraphWorkProduct':'org.openlumify.web.product.map.MapWorkProduct';registry[extensionPoint].forEach(function(item){var optionComponentPath=item.optionComponentPath,config=_objectWithoutProperties(item,['optionComponentPath']);var mappedItem=_extends({},config,{canHandle:function canHandle(product){return product.kind===productKind;}});if(optionComponentPath){mappedItem.itemComponentPath=optionComponentPath;}items.push(mappedItem);});});return items;},triggerInitialize:function triggerInitialize(){var _this4=this;if(this.eligibleForInitialize){if(!this.initializedById){this.initializedById={};}this.eligibleForInitialize.forEach(function(item){var identifier=item.identifier,initialize=item.initialize,props=item.props;var product=props.product;if(!_.isEmpty(props)){var previous=_this4.initializedById[identifier];if(!previous||previous.props.product.id!==product.id){if(previous&&_.isFunction(previous.teardown)){previous.teardown(previous.props);}_this4.initializedById[identifier]=item;initialize(props);}}});}},triggerTeardown:function triggerTeardown(){if(this.eligibleForInitialize){this.eligibleForInitialize.forEach(function(_ref){var teardown=_ref.teardown,props=_ref.props;if(_.isFunction(teardown)){teardown(props);}});}}});return RegistryInjectorHOC(ProductToolbar,['org.openlumify.graph.options','org.openlumify.map.options','org.openlumify.product.toolbar.item']);});
//# sourceMappingURL=ProductToolbar.js.map