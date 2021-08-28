define([],function(){'use strict';return withBrokenWorkerConsole;function withBrokenWorkerConsole(){this.brokenWorkerConsole=function(message){console[message.logType].apply(console,message.messages);};}});
//# sourceMappingURL=withBrokenWorkerConsole.js.map
