define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "      <li><span style=\"font-weight: bold\">"
    + container.escapeExpression(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"displayName","hash":{},"data":data}) : helper)))
    + ":</span>\n      <ul style=\"list-style: none;\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.list : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\n      </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <li data-diff-ids=\""
    + alias4(((helper = (helper = helpers.diffs || (depth0 != null ? depth0.diffs : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"diffs","hash":{},"data":data}) : helper)))
    + "\" style=\"display: inline-block; margin-right: 1em\"><label><input class=\"schema-type\" style=\"vertical-align: top\" type=\"checkbox\" checked> "
    + alias4(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data}) : helper)))
    + " ("
    + alias4(((helper = (helper = helpers.usages || (depth0 != null ? depth0.usages : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"usages","hash":{},"data":data}) : helper)))
    + ")</label></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"schema-warning\">\n  <p>"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"workspaces.diff.schema.warning",{"name":"i18n","hash":{},"data":data}))
    + "\n  <ul style=\"list-style: none; padding: 0\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\n\n  <p style=\"margin-bottom: 0\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"workspaces.diff.schema.warning.subtitle",{"name":"i18n","hash":{},"data":data}))
    + "</p>\n</div>\n";
},"useData":true})

});