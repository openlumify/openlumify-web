function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}define(['create-react-class','prop-types','components/Attacher'],function(createReactClass,PropTypes,Attacher){var Property=createReactClass({displayName:'Property',propTypes:{onCancel:PropTypes.func.isRequired,onSave:PropTypes.func.isRequired,attemptToCoerceValue:PropTypes.string,sourceInfo:PropTypes.object},getInitialState:function getInitialState(){return{};},shouldComponentUpdate:function shouldComponentUpdate(nextProps,nextState){if(this._ref&&nextProps.error&&nextProps.error!==this.props.error){var $node=$(this._ref.attacher._node);$node.trigger('propertyerror',{error:nextProps.error});}return false;},render:function render(){var _this=this;var _props=this.props,onCancel=_props.onCancel,onSave=_props.onSave,attemptToCoerceValue=_props.attemptToCoerceValue,sourceInfo=_props.sourceInfo;var _state=this.state,element=_state.element,property=_state.property;return React.createElement('div',{className:'form',style:{padding:0}},React.createElement('h1',{style:{marginBottom:'-0.3em',padding:'0.5em 1em 0'}},i18n('detail.text.terms.form.resolve.property')),React.createElement(Attacher,{componentPath:'detail/dropdowns/propertyForm/propForm',behavior:{propFormPropertyChanged:function propFormPropertyChanged(inst,_ref){var property=_ref.property;_this.setState({property:property});},propFormVertexChanged:function propFormVertexChanged(inst,_ref2){var vertex=_ref2.vertex;_this.setState({element:vertex});},addProperty:function addProperty(inst,_ref3){var node=_ref3.node,data=_objectWithoutProperties(_ref3,['node']);var element=data.element,property=data.property;onSave({element:element,property:property});},closeDropdown:function closeDropdown(){onCancel();}},ref:function ref(r){_this._ref=r;},data:element,property:property,allowDeleteProperty:false,allowEditProperty:false,disableDropdownFeatures:true,attemptToCoerceValue:attemptToCoerceValue,sourceInfo:sourceInfo}));}});return Property;});
//# sourceMappingURL=Property.js.map