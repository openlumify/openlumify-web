var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};define([],function(){'use strict';var CACHES={ontology:null};var FAST_PASSED={'ontology/ontology':null,'ontology/properties':null,'ontology/relationships':null,'config/properties':null,'config/messages':null};return withDataRequestHandler;function fixParameter(obj){if(obj instanceof FileList){return _.map(obj,function(o){return o;});}return obj;}function deferred(){var resolve,reject,promise=new Promise(function(f,r){resolve=f;reject=r;});return{promise:promise,resolve:resolve,reject:reject};}function checkForFastPass(message){var path=message.originalRequest.service+'/'+message.originalRequest.method;if(FAST_PASSED[path]){if(path==='ontology/ontology'){CACHES.ontology=message.result;message.result={concepts:wrap(CACHES.ontology.concepts,'ontology','concepts'),properties:wrap(CACHES.ontology.properties,'ontology','properties'),relationships:wrap(CACHES.ontology.relationships,'ontology','relationships')};}FAST_PASSED[path].resolve(message);}}function wrap(obj){for(var _len=arguments.length,paths=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){paths[_key-1]=arguments[_key];}var wrappedObj={};Object.keys(obj).forEach(function(key){Object.defineProperty(wrappedObj,key,{get:function get(){var latest=CACHES;paths.forEach(function(p){latest=latest[p];});return latest[key];},enumerable:true});});return wrappedObj;}function withDataRequestHandler(){this.after('initialize',function(){this.on('dataRequest',this.handleDataRequest);this.on('dataRequestCancel',this.handleDataRequestCancel);this.openlumifyData.readyForDataRequests=true;this.trigger('readyForDataRequests');});this.handleDataRequestCancel=function(event,data){};this.handleDataRequest=function(event,data){this.trigger('dataRequestStarted',_.pick(data,'requestId'));if(data.parameters){data.parameters=_.map(data.parameters,fixParameter);}if(data&&data.service==='config'){var l={};if(typeof localStorage!=='undefined'){l.language=localStorage.getItem('language');l.country=localStorage.getItem('country');l.variant=localStorage.getItem('variant');data.parameters.push(l);}}var message={type:event.type,data:data};if(!this.fastPassNoWorker(message)){this.worker.postMessage(message);}};this.dataRequestCompleted=function(message){checkForFastPass(message);this.trigger(message.type,message);};this.dataRequestProgress=function(message){this.trigger(message.type,message);};this.fastPassNoWorker=function(message){var _this=this;var self=this;var path=message.data.service+'/'+message.data.method;if(path in FAST_PASSED){if(FAST_PASSED[path]){FAST_PASSED[path].promise.then(function(r){_this.trigger(r.type,_extends({},r,{requestId:message.data.requestId}));});return true;}else{if(message.data.service==='ontology'&&(message.data.method==='properties'||message.data.method==='relationships')){var ontologyPath='ontology/ontology';var existing=FAST_PASSED[ontologyPath]&&FAST_PASSED[ontologyPath].promise;var ontologyPromise=void 0;if(existing){ontologyPromise=new Promise(function(fulfill){_this.on('ontologyUpdated',onOntologyUpdated);Promise.resolve(existing).then(function(result){_this.off('ontologyUpdated',onOntologyUpdated);fulfill(result);});function onOntologyUpdated(event,data){self.off('ontologyUpdated',onOntologyUpdated);var completed={success:true,type:'dataRequestCompleted',result:data.ontology,originalRequest:{method:'ontology',service:'ontology',parameters:[]}};fulfill(completed);}});}else{ontologyPromise=this.refreshOntology();}Promise.resolve(ontologyPromise).then(function(r){_this.trigger(r.type,_extends({},r,{result:r.result[message.data.method],requestId:message.data.requestId}));});return true;}FAST_PASSED[path]=deferred();}}return false;};this.refreshOntology=function(){return this.dataRequestPromise.then(function(dr){return dr('ontology','ontology');}).then(function(ontology){return FAST_PASSED['ontology/ontology'].promise;});};this.dataRequestFastPassClear=function(message){var _this2=this;var ontologyCleared=false;message.paths.forEach(function(path){ontologyCleared=ontologyCleared||path.indexOf('ontology')===0;FAST_PASSED[path]=null;});if(ontologyCleared){this.refreshOntology().then(function(ontologyRequest){_this2.trigger('ontologyUpdated',{ontology:ontologyRequest.result});});}};}});
//# sourceMappingURL=withDataRequestHandler.js.map