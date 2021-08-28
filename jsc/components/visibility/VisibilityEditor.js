var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}define(['create-react-class','prop-types','react-redux','data/web-worker/store/user/selectors','../Attacher','../RegistryInjectorHOC'],function(createReactClass,PropTypes,redux,userSelectors,Attacher,RegistryInjectorHOC){'use strict';var DEFAULT_FLIGHT_EDITOR='util/visibility/default/edit';var VisibilityEditor=createReactClass({displayName:'VisibilityEditor',propTypes:{onVisibilityChanged:PropTypes.func},getDefaultProps:function getDefaultProps(){return{value:'',placeholder:i18n('visibility.label')};},getInitialState:function getInitialState(){return{value:this.props.value,valid:true};},componentWillReceiveProps:function componentWillReceiveProps(_ref){var value=_ref.value;if(value!==this.state.value){this.setState({value:value,valid:this.checkValid(value)});}},render:function render(){var _props=this.props,registry=_props.registry,style=_props.style,oldValue=_props.value,placeholder=_props.placeholder,rest=_objectWithoutProperties(_props,['registry','style','value','placeholder']);var _state=this.state,value=_state.value,valid=_state.valid;var custom=_.first(registry['org.openlumify.visibility']);if(custom&&custom.editorComponentPath!==DEFAULT_FLIGHT_EDITOR){return React.createElement(Attacher,_extends({value:value,placeholder:placeholder,componentPath:custom.editorComponentPath},rest));}return React.createElement('input',{type:'text',onChange:this.onChange,value:value,placeholder:placeholder,className:valid?'':'invalid'});},onChange:function onChange(event){var value=event.target.value;var valid=this.checkValid(value);this.setState({value:value,valid:valid});this.props.onVisibilityChanged({value:value,valid:valid});},checkValid:function checkValid(value){var authorizations=this.props.authorizations;return Boolean(!value.length||value in authorizations);}});return redux.connect(function(state,props){return _extends({authorizations:userSelectors.getAuthorizations(state)},props);},function(dispatch,props){return{};})(RegistryInjectorHOC(VisibilityEditor,['org.openlumify.visibility']));});
//# sourceMappingURL=VisibilityEditor.js.map
