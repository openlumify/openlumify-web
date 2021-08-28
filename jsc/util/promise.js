(function(global){'use strict';define(['bluebird','underscore'],function(P,_){var Promise=P||global.Promise;if(P){Promise.config({cancellation:true,longStackTraces:openlumifyEnvironment.dev,warnings:{wForgottenReturn:false}});}addProgress();addTimeout();addRequire();registerUnhandledRejection();global.Promise=Promise;return Promise;function addProgress(){if(typeof Promise.prototype.progress!=='function'){Promise.prototype.progress=function(progress){this._progressCallbacks=this._progressCallbacks||[];this._progressCallbacks.push(progress);return this;};}else console.warn('Native implementation of progress');var OldPromise=Promise;Promise=function Promise(callback){var reject,that=new OldPromise(function(){var f=arguments[0];f.updateProgress=updateProgress;callback.apply(null,arguments);});that.then(function(){updateProgress(1);}).catch(function(){});return that;function updateProgress(percent){if(that._progressCallbacks){that._progressCallbacks.forEach(function(c){c(percent||0);});}}};Promise.all=OldPromise.all;Promise.map=OldPromise.map;Promise.race=OldPromise.race;Promise.reject=OldPromise.reject;Promise.resolve=OldPromise.resolve;Promise.try=OldPromise.try;Promise.prototype=OldPromise.prototype;}function addTimeout(){if(typeof Promise.timeout!=='function'){Promise.timeout=function(millis){return new Promise(function(fulfill){setTimeout(fulfill,millis);});};}else console.warn('Native implementation of timeout');}function addRequire(){if(typeof Promise.prototype.require!=='function'){Promise.require=function(){var deps=Array.prototype.slice.call(arguments,0);return new Promise(function(fulfill,reject,onCancel){onCancel(function(){});require(_.filter(deps,_.isString),fulfill,reject);});};}else console.warn('Native implementation of require');}function registerUnhandledRejection(){global.addEventListener('unhandledrejection',function(e){e.preventDefault();if(e&&e.detail&&e.detail.reason)throw e.detail.reason;else if(e&&e.reason)throw e.reason;else throw e;});}});})(this);
//# sourceMappingURL=promise.js.map
