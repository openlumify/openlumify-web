define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<input data-optional=\"true\" class=\"description\" type=\"text\" value=\""
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"field.geolocation.form.description",{"name":"i18n","hash":{},"data":data}))
    + "\">\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<input class=\"radius\" \n       required\n       pattern=\"[\\d.,]+\" \n       placeholder=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"field.geolocation.form.radius.placeholder",{"name":"i18n","hash":{},"data":data}))
    + "\"\n       type=\"text\"\n       value=\""
    + alias3(((helper = (helper = helpers.radius || (depth0 != null ? depth0.radius : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"radius","hash":{},"data":data}) : helper)))
    + "\">\n\n<button class=\"radius-search btn btn-link btn-small\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"field.geolocation.button.radius.search",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hasGeocoder : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n<input class=\"lat\" type=\"text\" required pattern=\"[-.\\d]+\" value=\""
    + alias4(((helper = (helper = helpers.latitude || (depth0 != null ? depth0.latitude : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"latitude","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"field.geolocation.form.latitude",{"name":"i18n","hash":{},"data":data}))
    + "\">\n<input class=\"lon\" type=\"text\" required pattern=\"[-.\\d]+\" value=\""
    + alias4(((helper = (helper = helpers.longitude || (depth0 != null ? depth0.longitude : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"longitude","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"field.geolocation.form.longitude",{"name":"i18n","hash":{},"data":data}))
    + "\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.onlySearchable : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true})

});