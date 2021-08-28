define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1><span class=\"user\"/><span class=\"name\"/></h1>\n<button style=\"display:none\" class=\"toggle-timeline btn btn-link\">"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"workspaces.help.toggle_timeline.title",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n";
},"useData":true})

});