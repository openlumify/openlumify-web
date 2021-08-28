define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <option value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "selected";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <option value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <option value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<label><header>"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"dashboard.savedsearches.aggregation",{"name":"i18n","hash":{},"data":data}))
    + "</header><button class=\"btn btn-link btn-mini add-aggregation\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"dashboard.savedsearches.button.add",{"name":"i18n","hash":{},"data":data}))
    + "</button></label>\n<div>\n  <div class=\"form\" style=\"display:none\">\n    <select class=\"aggregation\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.aggregations : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\n\n    <div class=\"agg term\" style=\"display:none\">\n      <div class=\"property-select\"></div>\n    </div>\n    <div class=\"agg histogram\" style=\"display:none\">\n      <div class=\"property-select\"></div>\n      <div class=\"interval_section\" style=\"display: flex;\">\n        <input class=\"interval\" type=\"text\" value=\"20\" placeholder=\"Interval\">\n        <input style=\"flex: 1; display: none;\" class=\"date_interval interval_value\" type=\"text\" value=\"20\" placeholder=\"Interval\">\n        <select class=\"date_interval interval_units\" style=\"display: none; flex: 1; margin-left: 0.5em; min-width: 6em;\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.intervalUnits : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </select>\n      </div>\n    </div>\n    <div class=\"agg geohash\" style=\"display:none\">\n      <div class=\"property-select\"></div>\n      <select class=\"precision\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.precisions : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </select>\n    </div>\n    <div class=\"agg statistics\" style=\"display:none\">\n      <div class=\"property-select\"></div>\n    </div>\n  </div>\n  <ul class=\"aggregations\"></ul>\n</div>\n";
},"useData":true})

});