var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();define(['util/requirejs/promise!./service/propertiesPromise'],function(config){'use strict';return getTilePropsFromConfiguration;function getTilePropsFromConfiguration(){var getOptions=function getOptions(providerName){try{var obj,prefix='map.provider.'+providerName+'.',options=_.chain(config).pick(function(val,key){return key.indexOf('map.provider.'+providerName+'.')===0;}).tap(function(o){obj=o;}).pairs().map(function(_ref){var _ref2=_slicedToArray(_ref,2),key=_ref2[0],value=_ref2[1];if(/^[\d.-]+$/.test(value)){value=parseFloat(value,10);}else if(/^(true|false)$/.test(value)){value=value==='true';}else if(/^\[[^\]]+\]$/.test(value)||/^\{[^\}]+\}$/.test(value)){value=JSON.parse(value);}return[key.replace(prefix,''),value];}).object().value();return options;}catch(e){console.error(prefix+' options could not be parsed. input:',obj);throw e;}};var source=config['map.provider']||'osm';var sourceOptions;if(source==='google'){console.warn('google map.provider is no longer supported, switching to OpenStreetMap provider');source='osm';}if(source==='osm'){var osmURL=config['map.provider.osm.url'];if(osmURL&&osmURL.indexOf(',')>=0){console.warn('Comma-separated Urls not supported, using first url. Use urls with {a-c} for multiple CDNS');console.warn('For Example: https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png');config['map.provider.osm.url']=osmURL.split(',')[0].trim().replace(/[$][{]/g,'{');}sourceOptions=getOptions('osm');source='OSM';}else if(source==='ArcGIS93Rest'){var urlKey='map.provider.ArcGIS93Rest.url';if(config[urlKey]){config[urlKey]=config[urlKey].replace(/\/export(Image)?\/?\s*$/,'');}sourceOptions=_extends({params:{layers:'show:0,1,2'}},getOptions(source));source='TileArcGISRest';}else{sourceOptions=getOptions(source);}return{source:source,sourceOptions:sourceOptions};}});
//# sourceMappingURL=mapConfig.js.map
