define(['util/promise','jquery'],function(){'use strict';return new Promise(function(fulfill,reject){if(typeof openlumifyData!=='undefined'&&openlumifyData.readyForDataRequests){fulfill();}else{$(document).one('readyForDataRequests',function(){fulfill();});setTimeout(reject.bind(null,'Data not ready, and timed out waiting'),5000);}});});
//# sourceMappingURL=dataPromise.js.map
