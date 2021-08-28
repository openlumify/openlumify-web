define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "    <label class=\"toggle-source\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"popovers.timezone.edit.label",{"name":"i18n","hash":{},"data":data}))
    + ":<button class=\"toggle btn btn-link\">"
    + alias3(((helper = (helper = helpers.sourceTimezone || (depth0 != null ? depth0.sourceTimezone : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"sourceTimezone","hash":{},"data":data}) : helper)))
    + "</button></label>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"timezonePopover popover top\">\n  <div class=\"arrow\"></div>\n  <div class=\"popover-content\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.sourceTimezone : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <div class=\"navbar-search\">\n      <input type=\"text\" class=\"search-query\" placeholder=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"popovers.timezone.search.placeholder",{"name":"i18n","hash":{},"data":data}))
    + "\">\n    </div>\n\n    <div class=\"dst\">* "
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"popovers.timezone.observes_dst",{"name":"i18n","hash":{},"data":data}))
    + "</div>\n  </div>\n</div>\n";
},"useData":true})

});