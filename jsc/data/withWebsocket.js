define(['util/websocket'],function(websocketUtils){'use strict';return withWebsocket;function withWebsocket(){var overlayPromise=new Promise(function(fulfill,reject){this.after('initialize',function(){this.on('applicationReady currentUserOpenLumifyDataUpdated',function(){_.defer(function(){Promise.require('util/offlineOverlay').done(fulfill);});});});}.bind(this));this.after('initialize',function(){var _this=this;var self=this;this.on('applicationReady currentUserOpenLumifyDataUpdated',function(){if(!openlumifyData.socketSourceGuid){self.setPublicApi('socketSourceGuid',websocketUtils.generateSourceGuid());self.worker.postMessage({type:'atmosphereConfiguration',configuration:this.getAtmosphereConfiguration()});}});this.on('willLogout',function(){this.worker.postMessage({type:'atmosphereConfiguration',close:true});});this.on(window,'offline',this.onWebsocketDisconnect);this.on('websocketNotSupportedInWorker',function(){_this.off(window,'offline',_this.onWebsocketDisconnect);});if(window.DEBUG){DEBUG.pushSocket=this.pushSocket.bind(this);}});this.pushSocket=function(message){this.worker.postMessage({type:'websocketSend',message:message});};this.rebroadcastEvent=function(message){this.trigger(message.eventName,message.data);};this.getAtmosphereConfiguration=function(){return{url:location.origin+location.pathname.replace(/jsc.*$/,'')+'messaging',transport:'websocket',fallbackTransport:'long-polling',contentType:'application/json',trackMessageLength:true,suspend:true,shared:false,pollingInterval:5000,connectTimeout:-1,enableProtocol:true,maxReconnectOnClose:2,maxStreamingLength:2000,logLevel:'warn'};};this.websocketStateOnError=function(error){this.onWebsocketDisconnect();};this.websocketStateOnClose=function(message){if(message&&message.error){console.error('Websocket closed',message.reasonPhrase,message.error);}else{console.error('Websocket closed',message.status);}};this.onWebsocketDisconnect=function(){overlayPromise.done(function(Overlay){_.delay(function(){Overlay.attachTo(document);},1000);});};}});
//# sourceMappingURL=withWebsocket.js.map