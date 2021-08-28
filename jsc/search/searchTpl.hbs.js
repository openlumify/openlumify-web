define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "      <a class=\"btn dropdown-toggle btn-mini btn-link advanced\" data-toggle=\"dropdown\">\n        "
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"search.advanced.default",{"name":"i18n","hash":{},"data":data}))
    + " <span class=\"caret\"></span>\n      </a>\n      <ul class=\"dropdown-menu advanced-dropdown\">\n          <li><a href=\"#\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"search.advanced.default",{"name":"i18n","hash":{},"data":data}))
    + "</a></li>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.advancedSearch : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <li><a data-saved-search-url=\""
    + alias4(((helper = (helper = helpers.savedSearchUrl || (depth0 != null ? depth0.savedSearchUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"savedSearchUrl","hash":{},"data":data}) : helper)))
    + "\" data-component-path=\""
    + alias4(((helper = (helper = helpers.componentPath || (depth0 != null ? depth0.componentPath : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"componentPath","hash":{},"data":data}) : helper)))
    + "\" href=\"#\">"
    + alias4(((helper = (helper = helpers.displayName || (depth0 != null ? depth0.displayName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayName","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"search-type search-type-"
    + container.escapeExpression(((helper = (helper = helpers.cls || (depth0 != null ? depth0.cls : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"cls","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"></div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "active";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"navbar-search\">\n\n  <div class=\"search-dropdowns btn-group\">\n    <button class=\"btn btn-mini btn-link saved\">\n      "
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"search.savedsearches.button",{"name":"i18n","hash":{},"data":data}))
    + " <span class=\"caret\"></span>\n    </button>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.advancedSearch : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n\n  <div class=\"search-query-container\">\n    <input type=\"text\" class=\"search-query\" placeholder=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"search.field.placeholder",{"name":"i18n","hash":{},"data":data}))
    + "\">\n    <a style=\"display:none\"></a>\n  </div>\n\n  <div class=\"below-query\">\n    <div class=\"extensions\"></div>\n    <span class=\"search-hits\">&nbsp;</span>\n  </div>\n  <div class=\"search-query-validation\"></div>\n</div>\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.types : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true})

});