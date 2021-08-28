define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "      <li class=\"nav-header\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"workspaces.form.header",{"name":"i18n","hash":{},"data":data}))
    + "</li>\n\n    <li><input class=\"workspace-title\" type=\"text\" value=\""
    + alias3(container.lambda(((stack1 = (depth0 != null ? depth0.workspace : depth0)) != null ? stack1.title : stack1), depth0))
    + "\" required>\n        <span class=\"form-title-error\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"workspaces.form.title.unique.error",{"name":"i18n","hash":{},"data":data}))
    + "</span>\n    </li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "    <div class=\"delete-confirm\">\n      <p class=\"alert alert-warning\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"workspaces.form.button.delete.warning",{"name":"i18n","hash":{},"data":data}))
    + "</p>\n      <button class=\"btn-link btn\"> "
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"workspaces.form.button.delete.cancel",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n      <button class=\"btn btn-danger\"> "
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"workspaces.form.button.delete.confirm",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n    </div>\n    <button class=\"delete btn btn-danger\"> "
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"workspaces.form.button.delete",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"scroller\">\n  <ul class=\"share-list nav nav-list\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.editable : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <li class=\"nav-header share-header\">"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(alias1,"workspaces.form.sharing",{"name":"i18n","hash":{},"data":data}))
    + "<span class=\"badge loading\"/></li>\n\n    <li class=\"share-form\" style=\"display:none\">\n    </li>\n  </ul>\n</div>\n\n<div class=\"buttons\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.editable : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n\n";
},"useData":true})

});