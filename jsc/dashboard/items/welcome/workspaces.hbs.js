define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"alias.case.plural",{"name":"i18n","hash":{},"data":data}))
    + " shows a list of all your\n<span data-selector=\".menubar-pane .workspaces\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"alias.case.plural.lowerCase",{"name":"i18n","hash":{},"data":data}))
    + "</span>, with the\n<span data-selector=\".workspace-overlay h1 .name\">current "
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"alias.case.lowerCase",{"name":"i18n","hash":{},"data":data}))
    + "</span>\nhighlighted. You can also share your "
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"alias.case.lowerCase",{"name":"i18n","hash":{},"data":data}))
    + " with other users in this panel.\n";
},"useData":true})

});