define(['util/requirejs/promise!./service/messagesPromise'],function(messages){'use strict';var DEBUG_MESSAGES=false;try{if('true'===localStorage.getItem('i18nDebug')){DEBUG_MESSAGES=true;}}catch(e){console.error(e);}return function(ignoreWarning,key){var args=Array.prototype.slice.call(arguments);if(ignoreWarning===true){args.shift();}else{ignoreWarning=false;}key=args[0];if(DEBUG_MESSAGES){return key;}if(key in messages){if(args.length===1){return messages[key];}args.shift();return messages[key].replace(/\{(\d+)\}/g,function(m){var index=parseInt(m[1],10);return args[index];});}if(ignoreWarning){return;}else{console.error('No message for key',key);}return key;};});
//# sourceMappingURL=messages.js.map