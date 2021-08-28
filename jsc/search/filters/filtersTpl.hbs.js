define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "style=\"display:none\"";
},"3":function(container,depth0,helpers,partials,data) {
    return "checked";
},"5":function(container,depth0,helpers,partials,data) {
    return "  <li class=\"sort-filter-header nav-header\">"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"search.filters.sort",{"name":"i18n","hash":{},"data":data}))
    + "</li>\n  <li class=\"sort-content\"></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<ul class=\"nav nav-list search-options\" "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.showMatchType : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n  <li class=\"nav-header\"><span>Match</span>\n    <div class=\"match-types\">\n      <label><input type=\"radio\" class=\"match-type-vertex\" name=\"match-type\" \n        "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.showConceptFilter : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " value=\"vertex\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"search.filters.match.vertex",{"name":"i18n","hash":{},"data":data}))
    + "</label>\n      <label><input type=\"radio\" class=\"match-type-edge\" name=\"match-type\" \n        "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.showEdgeFilter : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " value=\"edge\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"search.filters.match.edge",{"name":"i18n","hash":{},"data":data}))
    + "</label>\n    </div>\n  </li>\n</ul>\n<ul class=\"extension-filters nav nav-list\"></ul>\n<ul style=\"display:none\" class=\"entity-filters nav nav-list\"></ul>\n<ul class=\"prop-filters nav nav-list\">\n  <li "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.showConceptFilter : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    class=\"concept-filter-header nav-header\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"search.filters.concept",{"name":"i18n","hash":{},"data":data}))
    + "</li>\n  <li "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.showConceptFilter : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " class=\"concepts-dropdown\"></li>\n  <li "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.showConceptFilter : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " class=\"concepts-list\">\n      <ul class=\"fields ui-sortable\"></ul>\n  </li>\n  <li "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.showEdgeFilter : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    class=\"edgetype-filter-header nav-header\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"search.filters.edgeType",{"name":"i18n","hash":{},"data":data}))
    + "</li>\n  <li "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.showEdgeFilter : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " class=\"edgetype-dropdown\"></li>\n  <li "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.showEdgeFilter : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " class=\"edgetype-list\">\n      <ul class=\"fields ui-sortable\"></ul>\n  </li>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.showSorting : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <li class=\"prop-filter-header nav-header\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"search.filters.properties",{"name":"i18n","hash":{},"data":data}))
    + "</li>\n</ul>\n";
},"useData":true})

});