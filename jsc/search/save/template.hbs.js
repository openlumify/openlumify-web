define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"form-item\">\n          <input placeholder=\"Name\" class=\"name\" value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" type=\"text\">\n          <button class=\"btn btn-mini\" type=\"button\">"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</button>\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "        <label style=\"display: none\" class=\"global-search\" title=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"search.savedsearches.global.tooltip",{"name":"i18n","hash":{},"data":data}))
    + "\">\n          <input type=\"checkbox\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.updatingGlobal : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " />"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"search.savedsearches.global",{"name":"i18n","hash":{},"data":data}))
    + "\n        </label>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "checked";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <li><a><h1>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1></a>\n            <span class=\"badge\">"
    + alias4(((helper = (helper = helpers.scope || (depth0 != null ? depth0.scope : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"scope","hash":{},"data":data}) : helper)))
    + "</span>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.canDelete : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </li>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "              <button class=\"btn btn-mini btn-danger\">"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"search.savedsearches.button.delete",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "      <li class=\"empty\">"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"search.savedsearches.none",{"name":"i18n","hash":{},"data":data}))
    + "</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"savedSearchesPopover popover top\">\n  <div class=\"arrow\"></div>\n  <div class=\"popover-content\" style=\"max-height:"
    + container.escapeExpression(((helper = (helper = helpers.maxHeight || (depth0 != null ? depth0.maxHeight : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"maxHeight","hash":{},"data":data}) : helper)))
    + "px\">\n    <div class=\"form\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.canAddOrUpdate : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.canSaveGlobal : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n    <ul class=\"nav nav-list\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.list : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "    </ul>\n  </div>\n</div>\n";
},"useData":true})

});