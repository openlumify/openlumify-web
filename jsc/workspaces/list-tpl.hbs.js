define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "\n\n<li class=\"nav-header\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"workspaces.list.header",{"name":"i18n","hash":{},"data":data}))
    + "</li>\n\n<li class=\"new-workspace\">\n  <div class=\"input-append\">\n    <input class=\"new\" name=\"title\" type=\"text\" placeholder=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"workspaces.form.name.placeholder",{"name":"i18n","hash":{},"data":data}))
    + "\" />\n    <button class=\"new btn btn-mini\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"workspaces.form.button.add",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n  </div>\n  <span class=\"add-title-error\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"workspaces.form.title.unique.error",{"name":"i18n","hash":{},"data":data}))
    + "</span>\n</li>\n\n<li class=\"divider\"></li>\n\n<li class=\"nav-header\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"workspaces.list.shared_with_me",{"name":"i18n","hash":{},"data":data}))
    + "</li>\n";
},"useData":true})

});