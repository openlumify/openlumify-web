define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "Work products are specific to a "
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"alias.case.lowerCase",{"name":"i18n","hash":{},"data":data}))
    + " and can contain multiple graphs, and / or maps.\n\n";
},"useData":true})

});