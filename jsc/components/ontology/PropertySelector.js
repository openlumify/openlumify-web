var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}define(['create-react-class','prop-types','react-redux','./BaseSelect','data/web-worker/store/user/selectors','data/web-worker/store/ontology/selectors','data/web-worker/store/ontology/actions'],function(createReactClass,PropTypes,redux,BaseSelect,userSelectors,ontologySelectors,ontologyActions){var FilterProps=['dataType','deleteable','searchable','sortable','updateable','userVisible','addable'];var FilterPropDefaults={userVisible:true};var PropertySelector=createReactClass({displayName:'PropertySelector',propTypes:{filter:PropTypes.shape({properties:PropTypes.Array,conceptId:PropTypes.oneOfType([PropTypes.string,PropTypes.array]),relationshipId:PropTypes.oneOfType([PropTypes.string,PropTypes.array]),hideCompound:PropTypes.bool,dataType:PropTypes.string,dataTypes:PropTypes.array,domainType:PropTypes.string,addable:PropTypes.bool,userVisible:PropTypes.bool,searchable:PropTypes.bool,deleteable:PropTypes.bool,sortable:PropTypes.bool,updateable:PropTypes.bool}),value:PropTypes.string,properties:PropTypes.array.isRequired,propertiesByConcept:PropTypes.object.isRequired,propertiesByRelationship:PropTypes.object.isRequired,conceptProperties:PropTypes.object.isRequired,relationshipProperties:PropTypes.object.isRequired,privileges:PropTypes.object.isRequired,placeholder:PropTypes.string},getDefaultProps:function getDefaultProps(){return{creatable:true,placeholder:i18n('property.field.placeholder')};},render:function render(){var _props=this.props,properties=_props.properties,conceptProperties=_props.conceptProperties,relationshipProperties=_props.relationshipProperties,propertiesByConcept=_props.propertiesByConcept,propertiesByRelationship=_props.propertiesByRelationship,filter=_props.filter,privileges=_props.privileges,creatable=_props.creatable,rest=_objectWithoutProperties(_props,['properties','conceptProperties','relationshipProperties','propertiesByConcept','propertiesByRelationship','filter','privileges','creatable']);var formProps=_extends({},filter||{});var dependentPropertyIris=[];var filterByDomainType=filter.domainType&&!filter.conceptId&&!filter.relationshipId;var options=properties.filter(function(p,i,list){if(p.header){return true;}var test=true;if(filter&&filter.properties){test=test&&p.title in filter.properties;}if(test&&filter&&_.isArray(filter.dataTypes)&&filter.dataTypes.length){test=test&&filter.dataTypes.includes(p.dataType);}if(test&&filter&&filterByDomainType){var domainTypeProperties=void 0;if(filterByDomainType){if(filter.domainType==='concept'){domainTypeProperties=conceptProperties;}else if(filter.domainType==='relationship'){domainTypeProperties=relationshipProperties;}}test=test&&(!filterByDomainType||domainTypeProperties[p.title]||p.title.startsWith('dataType:'));}if(test&&filter&&filter.conceptId){var conceptIris=_.isArray(filter.conceptId)?filter.conceptId:[filter.conceptId];var belongsToConcepts=conceptIris.some(function(concept){var conceptProps=propertiesByConcept[concept];return conceptProps&&conceptProps[p.title];});if(_.isString(filter.conceptId)||filter.conceptId.length===1){formProps.domain=_.isArray(filter.conceptId)?filter.conceptId[0]:filter.conceptId;}test=test&&(belongsToConcepts||p.title.startsWith('dataType:'));}if(test&&filter&&filter.relationshipId){var relationshipIris=_.isArray(filter.relationshipId)?filter.relationshipId:[filter.relationshipId];var belongsToRelationships=relationshipIris.some(function(relationship){var relationshipProps=propertiesByRelationship[relationship];return relationshipProps&&relationshipProps[p.title];});if(_.isString(filter.relationshipId)||filter.relationshipId.length===1){formProps.domain=_.isArray(filter.relationshipId)?filter.relationshipId[0]:filter.relationshipId;}test=test&&(belongsToRelationships||p.title.startsWith('dataType:'));}if(test&&filter&&filter.hideCompound){test=test&&!p.dependentPropertyIris;}if(test&&filter&&filter.rollupCompound&&p.dependentPropertyIris){dependentPropertyIris.push.apply(dependentPropertyIris,_toConsumableArray(p.dependentPropertyIris));}if(test&&!p.title.startsWith('dataType:')){FilterProps.forEach(function(fp){if(filter&&fp in filter){if(filter[fp]!==undefined&&filter[fp]!==null){test=test&&p[fp]===filter[fp];}}});}return test;});if(filter&&filter.rollupCompound){var uniqueIris=_.object(dependentPropertyIris.map(function(iri){return[iri,true];}));options=options.filter(function(o){return!uniqueIris[o.title];});}removeEmptyHeaders(options);var usesLegacyFilterProperties=false;if(creatable&&filter&&filter.properties){console.warn('Creating properties when using old filter syntax (passing properties) is not supported');usesLegacyFilterProperties=true;}return React.createElement(BaseSelect,_extends({createForm:'components/ontology/PropertyForm',formProps:formProps,options:options,creatable:creatable&&!usesLegacyFilterProperties&&Boolean(privileges.ONTOLOGY_ADD)},rest));}});return redux.connect(function(state,props){var otherFilters=props.filter;var showAdmin=otherFilters&&otherFilters.userVisible===null;var properties=props.properties||(showAdmin?ontologySelectors.getPropertiesWithHeaders(state):ontologySelectors.getVisiblePropertiesWithHeaders(state));return _extends({privileges:userSelectors.getPrivileges(state),propertiesByConcept:ontologySelectors.getPropertiesByConcept(state),propertiesByRelationship:ontologySelectors.getPropertiesByRelationship(state),conceptProperties:ontologySelectors.getConceptProperties(state),relationshipProperties:ontologySelectors.getRelationshipProperties(state),iriKeys:ontologySelectors.getPropertyKeyIris(state)},props,{properties:properties});},function(dispatch,props){return{onCreate:function onCreate(_ref,options){var displayName=_ref.displayName,dataType=_ref.dataType,displayType=_ref.displayType,domain=_ref.domain;var property=_extends({displayName:displayName,dataType:dataType,displayType:displayType},domain);if(!property.displayType){delete property.displayType;}dispatch(ontologyActions.addProperty(property,options));}};})(PropertySelector);function removeEmptyHeaders(options){var removeHeaderIndices=[];var lastHeaderIndex=-1;options.forEach(function(o,i,list){if(o.header){if(i>0&&lastHeaderIndex===i-1){removeHeaderIndices.push(lastHeaderIndex);}if(i===list.length-1){removeHeaderIndices.push(i);}lastHeaderIndex=i;}});removeHeaderIndices.reverse().forEach(function(i){options.splice(i,1);});}});
//# sourceMappingURL=PropertySelector.js.map
