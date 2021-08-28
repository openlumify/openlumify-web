define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"workspaces-list nav nav-list\">\n  <li class=\"nav-header\">"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"workspaces.list.header",{"name":"i18n","hash":{},"data":data}))
    + "<span class=\"loading badge\"></span></li>\n</ul>\n\n<div style=\"display:none\" class=\"workspace-form\" data-width-preference=\"workspaceForm\">\n  <div class=\"content\"></div>\n</div>\n";
},"useData":true})

});