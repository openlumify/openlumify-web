define(['handlebars'],function(Handlebars){return{load:function load(name,req,_load){var newName=name+'.hbs';var oldName='hbs!'+name;var getText='text!'+name+'.hbs';req([newName],function success(result){console.warn('hbs! RequireJs Plugin Deprecated!\n\nUse require([\''+newName+'\']) instead of\n    require([\''+oldName+'\'])\n\nFound precompiled at new location, automatically switching...\n                    ');_load(result);},function failure(){req([getText],function(result){_load(Handlebars.compile(result));},function(e){console.log('Error evaluating template',e);});});}};});
//# sourceMappingURL=hbs-legacy-loader.js.map