define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "    <li class=\"admin\"><a>"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"menubar.icons.admin",{"name":"i18n","hash":{},"data":data}))
    + "</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<ul class=\"menu-top\">\n  <li class=\"dashboard\"><a>"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"menubar.icons.dashboard",{"name":"i18n","hash":{},"data":data}))
    + "</a></li>\n\n  <li class=\"divider\"></li>\n\n  <li class=\"search\"><a>"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"menubar.icons.search",{"name":"i18n","hash":{},"data":data}))
    + "</a></li>\n  <li class=\"workspaces\"><a>"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"menubar.icons.workspaces",{"name":"i18n","hash":{},"data":data}))
    + "</a></li>\n  <li class=\"products\"><a>"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"menubar.icons.products",{"name":"i18n","hash":{},"data":data}))
    + "</a></li>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isAdmin : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  <li class=\"divider\"></li>\n\n</ul>\n\n<ul class=\"menu-bottom\">\n\n  <li class=\"activity\"><a>"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"menubar.icons.activity",{"name":"i18n","hash":{},"data":data}))
    + "</a></li>\n\n  <li class=\"spacer\"></li>\n  <li class=\"divider\"></li>\n  <li class=\"spacer\"></li>\n\n  <li class=\"logout\"><a>"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"menubar.icons.logout",{"name":"i18n","hash":{},"data":data}))
    + "</a></li>\n</ul>\n\n";
},"useData":true})

});