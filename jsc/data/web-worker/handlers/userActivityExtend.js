define(['../util/ajax'],function(ajax){'use strict';var now=function now(){return new Date().getTime();};var nextExpiration=void 0;var defaultExpiration=void 0;var scheduledTimer=void 0;var sending=false;ajaxFilters.post.push(function(request,json,options){var expiration=request.getResponseHeader('OpenLumify-Auth-Token-Expiration');if(expiration){nextExpiration=now()+parseInt(expiration,10);}});return function(_ref){var _ref$init=_ref.init,init=_ref$init===undefined?false:_ref$init,de=_ref.defaultExpiration,_ref$schedule=_ref.schedule,schedule=_ref$schedule===undefined?true:_ref$schedule;if(!init){if(!defaultExpiration){defaultExpiration=de;}if(nextExpiration&&defaultExpiration){sendOrScheduleHeartBeat(schedule);}}};function sendHeartBeat(){var change=function change(val){sending=val;};change(true);ajax('GET','/user/heartbeat').catch(function(error){dispatchMain('sessionTimeoutActivityHeartBeatFailed');}).finally(function(){return change(false);});}function sendOrScheduleHeartBeat(schedule){clearTimeout(scheduledTimer);if(sending){return false;}var nearlyExpired=defaultExpiration/2-5000;var timeLeft=nextExpiration-now();var expiringSoon=timeLeft<nearlyExpired;if(expiringSoon){sendHeartBeat();}else if(schedule){var scheduled=timeLeft-nearlyExpired;scheduledTimer=setTimeout(sendHeartBeat,scheduled);}}});
//# sourceMappingURL=userActivityExtend.js.map