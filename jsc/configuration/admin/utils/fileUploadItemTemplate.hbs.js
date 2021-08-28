define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<dl>\n  <dt>"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"admin.utils.file-upload.name",{"name":"i18n","hash":{},"data":data}))
    + "</dt><dd>"
    + alias3(container.lambda(((stack1 = (depth0 != null ? depth0.file : depth0)) != null ? stack1.name : stack1), depth0))
    + "</dd>\n  <dt>"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"admin.utils.file-upload.size",{"name":"i18n","hash":{},"data":data}))
    + "</dt><dd>"
    + alias3((helpers.prettyBytes || (depth0 && depth0.prettyBytes) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.file : depth0)) != null ? stack1.size : stack1),{"name":"prettyBytes","hash":{},"data":data}))
    + "</dd>\n</dl>\n";
},"useData":true})

});