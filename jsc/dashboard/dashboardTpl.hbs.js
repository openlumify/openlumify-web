define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<button class=\"edit-dashboard btn btn-link\">"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"dashboard.title.edit",{"name":"i18n","hash":{},"data":data}))
    + "</button>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<h1 class=\"header\"><input type=\"text\" disabled value=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"dashboard.title",(depth0 != null ? depth0.title : depth0),{"name":"i18n","hash":{},"data":data}))
    + "\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.creator : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<button title=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"dashboard.title.refresh",{"name":"i18n","hash":{},"data":data}))
    + "\" class=\"refresh\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"dashboard.title.refresh",{"name":"i18n","hash":{},"data":data}))
    + "</button></h1>\n<div class=\"grid-scroller\">\n<div class=\"grid-stack\" data-gs-width=\"12\" data-gs-height=\"0\"></div>\n</div>\n";
},"useData":true})

});