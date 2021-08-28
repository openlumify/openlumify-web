var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}define(['create-react-class','prop-types','classnames','./ConceptSelector','./RelationshipSelector','../Alert'],function(createReactClass,PropTypes,classNames,ConceptsSelector,RelationshipSelector,Alert){var DataTypes=[{label:i18n('ontology.property.dataformat.text'),options:[{type:'string',label:i18n('ontology.property.dataformat.text.string')},{type:'string',displayType:'link',label:i18n('ontology.property.dataformat.text.link')}]},{label:i18n('ontology.property.dataformat.number'),options:[{type:'integer',label:i18n('ontology.property.dataformat.number.integer')},{type:'double',label:i18n('ontology.property.dataformat.number.double')},{type:'currency',label:i18n('ontology.property.dataformat.number.currency')},{type:'double',displayType:'duration',label:i18n('ontology.property.dataformat.number.duration')},{type:'integer',displayType:'bytes',label:i18n('ontology.property.dataformat.number.bytes')}]},{label:i18n('ontology.property.dataformat.date'),options:[{type:'date',label:i18n('ontology.property.dataformat.date.date')},{type:'date',displayType:'dateOnly',label:i18n('ontology.property.dataformat.date.dateOnly')}]},{label:i18n('ontology.property.dataformat.location'),options:[{type:'geoLocation',label:i18n('ontology.property.dataformat.location.geoLocation')}]}];var transformOptions=function transformOptions(dataTypes){if(_.isArray(dataTypes)&&dataTypes.length){var filtered=DataTypes.map(function(group){return _extends({},group,{options:group.options.filter(function(option){return dataTypes.includes(option.type);})});});return filtered.filter(function(group){return group.options.length;});}return DataTypes;};var DataTypeSelect=function DataTypeSelect(props){var type=props.type,dataTypes=props.dataTypes,rest=_objectWithoutProperties(props,['type','dataTypes']);var groups=transformOptions(dataTypes);return React.createElement('select',_extends({value:type||''},rest),React.createElement('option',{value:''},i18n('ontology.property.dataformat.placeholder')),groups.map(function(group){return React.createElement('optgroup',{key:group.label,label:group.label},group.options.map(function(option){var type=option.type,displayType=option.displayType,label=option.label;var combined=_.compact([type,displayType]).join('|');return React.createElement('option',{key:combined,value:combined},label);}));}));};var PropertyForm=createReactClass({displayName:'PropertyForm',propTypes:{transformForSubmit:PropTypes.func.isRequired,transformForInput:PropTypes.func.isRequired,onCreate:PropTypes.func.isRequired,onCancel:PropTypes.func.isRequired,displayName:PropTypes.string,domain:PropTypes.string,type:PropTypes.string,dataType:PropTypes.string,dataTypes:PropTypes.arrayOf(PropTypes.string)},getInitialState:function getInitialState(){return{};},getValue:function getValue(){var displayName=this.state.displayName;var defaultValue=this.props.displayName;return _.isString(displayName)?displayName:defaultValue;},componentDidMount:function componentDidMount(){var _props=this.props,domain=_props.domain,type=_props.type;this.setState({domain:domain,type:type});},componentWillReceiveProps:function componentWillReceiveProps(nextProps){if(nextProps.domain!==this.state.domain){this.setState({domain:this.props.domain});}if(nextProps.type!==this.state.type){this.setState({type:nextProps.type});}},render:function render(){var _state=this.state,domain=_state.domain,type=_state.type;var _props2=this.props,conceptId=_props2.conceptId,relationshipId=_props2.relationshipId,dataType=_props2.dataType,dataTypes=_props2.dataTypes,error=_props2.error,transformForSubmit=_props2.transformForSubmit,transformForInput=_props2.transformForInput;var value=this.getValue();var valueForInput=transformForInput(value);var _transformForSubmit=transformForSubmit(value),valid=_transformForSubmit.valid,reason=_transformForSubmit.reason,valueForSubmit=_transformForSubmit.value;var disabled=!valid||!type||!domain;var filterDataTypes=dataTypes?dataTypes:dataType?[dataType]:null;return React.createElement('div',{className:'ontology-form'},error?React.createElement(Alert,{error:error}):null,React.createElement('input',{type:'text',placeholder:i18n('ontology.form.displayname.placeholder'),onChange:this.onDisplayNameChange,title:reason,className:classNames({invalid:!valid}),value:valueForInput}),relationshipId?React.createElement(RelationshipSelector,{value:domain,creatable:false,clearable:false,filter:{relationshipId:relationshipId,showAncestors:true},onSelected:this.onDomainSelected}):React.createElement(ConceptsSelector,{value:domain,creatable:false,clearable:false,filter:{conceptId:conceptId,showAncestors:true},onSelected:this.onDomainSelected}),React.createElement(DataTypeSelect,{type:type,dataTypes:filterDataTypes,onChange:this.handleTypeChange}),React.createElement('div',{className:'base-select-form-buttons'},React.createElement('button',{onClick:this.props.onCancel,className:'btn btn-link btn-small'},i18n('ontology.form.cancel.button')),React.createElement('button',{disabled:disabled,onClick:this.onCreate,className:'btn btn-small btn-primary'},disabled?i18n('ontology.form.create.button'):i18n('ontology.form.create.value.button',valueForSubmit))));},onDomainSelected:function onDomainSelected(option){this.setState({domain:option?option.title:null});},onDisplayNameChange:function onDisplayNameChange(event){this.setState({displayName:event.target.value});},handleTypeChange:function handleTypeChange(event){this.setState({type:event.target.value});},onCreate:function onCreate(){var domain={};if(this.props.relationshipId){domain.relationshipIris=[this.state.domain];}else{domain.conceptIris=[this.state.domain];}var _state$type$split=this.state.type.split('|'),_state$type$split2=_slicedToArray(_state$type$split,2),dataType=_state$type$split2[0],displayType=_state$type$split2[1];this.props.onCreate({domain:domain,dataType:dataType,displayType:displayType,displayName:this.getValue()});}});return PropertyForm;});
//# sourceMappingURL=PropertyForm.js.map
