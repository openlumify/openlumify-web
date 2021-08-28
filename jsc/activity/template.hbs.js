define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1 style=\"display:none\" class=\"no-activity\">"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"activity.tasks.none",{"name":"i18n","hash":{},"data":data}))
    + "</h1>\n\n<div class=\"types\"></div>\n";
},"useData":true})

});