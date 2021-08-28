define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "  <div class=\"popover-title\">\n    "
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "\n  </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <div>\n      <button class=\"btn btn-default\">"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"popovers.export_workspace.button.cancel",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"exportWorkspacePopover popover top\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.showTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <div class=\"arrow\"></div>\n  <div class=\"popover-content\">\n    <div class=\"plugin-content\"></div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.showCancel : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>\n";
},"useData":true})

});