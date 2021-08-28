define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div class=\"input-append dateField\">\n    <input type=\"text\"\n      data-provide=\"datepicker\"\n      placeholder=\""
    + alias4(((helper = (helper = helpers.today || (depth0 != null ? depth0.today : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"today","hash":{},"data":data}) : helper)))
    + "\"\n      value=\""
    + alias4(((helper = (helper = helpers.dateString || (depth0 != null ? depth0.dateString : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dateString","hash":{},"data":data}) : helper)))
    + "\"\n      required=\"required\" \n      class=\"date\">\n    <input type=\"text\"\n      placeholder=\""
    + alias4(((helper = (helper = helpers.todayTime || (depth0 != null ? depth0.todayTime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"todayTime","hash":{},"data":data}) : helper)))
    + "\"\n      pattern=\"\\d+(:\\d)?(\\s*[amAMpmPM])?\"\n      required=\"required\" \n      class=\"timepicker\">\n    <span class=\"add-on timezone\"></span>\n  </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <input data-provide=\"datepicker\" placeholder=\""
    + alias4(((helper = (helper = helpers.today || (depth0 != null ? depth0.today : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"today","hash":{},"data":data}) : helper)))
    + "\" \n    value=\""
    + alias4(((helper = (helper = helpers.dateString || (depth0 != null ? depth0.dateString : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dateString","hash":{},"data":data}) : helper)))
    + "\" type=\"text\" required></input>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.displayTime : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true})

});