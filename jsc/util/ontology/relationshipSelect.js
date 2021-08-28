var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};define(['flight/lib/component','util/component/attacher'],function(defineComponent,attacher){return defineComponent(RelationshipSelector);function RelationshipSelector(){this.after('teardown',function(){this.attacher.teardown();});this.after('initialize',function(){var _this=this;if('maxItems'in this.attr){console.warn('maxItems is no longer supported');}var self=this;this.on('limitParentConceptId',function(event,data){var conceptId=data.conceptId,sourceId=data.sourceConceptId,targetId=data.targetConceptId;var params=self.attacher._params;self.attacher.params(_extends({},params,{filter:_extends({},params.filter,{conceptId:conceptId,sourceId:sourceId,targetId:targetId})})).attach();});this.on('selectRelationshipId',function(event,data){var relationshipId=data&&data.relationshipId||null;self.attacher.params(_extends({},self.attacher._params,{value:relationshipId})).attach();});this.attacher=attacher().node(this.node).params({placeholder:this.attr.defaultText,creatable:this.attr.creatable!==false,autofocus:this.attr.focus===true,filter:{conceptId:this.attr.limitParentConceptId,sourceId:this.attr.sourceConcept,targetId:this.attr.targetConcept}}).behavior({onSelected:function onSelected(attacher,relationship){_this.trigger('relationshipSelected',{relationship:relationship});}}).path('components/ontology/RelationshipSelector');this.attacher.attach();});}});
//# sourceMappingURL=relationshipSelect.js.map
