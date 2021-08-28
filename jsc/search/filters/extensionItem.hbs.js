define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"extension-filter-row\" data-filter-key=\""
    + alias4(((helper = (helper = helpers.filterKey || (depth0 != null ? depth0.filterKey : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"filterKey","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"current-property\">\n    <label>"
    + alias4(((helper = (helper = helpers.sectionHeader || (depth0 != null ? depth0.sectionHeader : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sectionHeader","hash":{},"data":data}) : helper)))
    + "</label>\n    <button class=\"remove-icon\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"search.filters.button.remove",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n  </div>\n  <div class=\"configuration\"></div>\n</li>\n\n";
},"useData":true})

});