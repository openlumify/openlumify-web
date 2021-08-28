define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<span \n  class=\"add-on timezone\"\n  title=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"field.datetime.tooltip.timezone",{"name":"i18n","hash":{},"data":data}))
    + ": "
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.tzOffsetDisplay || (depth0 != null ? depth0.tzOffsetDisplay : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"tzOffsetDisplay","hash":{},"data":data}) : helper)))
    + "\"\n  ><strong \n    data-display-offset=\""
    + alias3(((helper = (helper = helpers.tzOffsetDisplay || (depth0 != null ? depth0.tzOffsetDisplay : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"tzOffsetDisplay","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.tzAbbr || (depth0 != null ? depth0.tzAbbr : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"tzAbbr","hash":{},"data":data}) : helper)))
    + "</strong></span>\n";
},"useData":true})

});