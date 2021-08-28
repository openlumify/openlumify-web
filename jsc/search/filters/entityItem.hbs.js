define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<li class=\"entity-filter-row\" data-filter-key=\"relatedToVertexIds\">\n  <div class=\"current-property\">\n    <label>"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"search.filters.related_to",{"name":"i18n","hash":{},"data":data}))
    + "</label>\n    <button class=\"remove-icon\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"search.filters.button.remove",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n  </div>\n  <div class=\"configuration\">\n    <input readonly type=\"text\" value=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\"></input>\n  </div>\n</li>\n\n";
},"useData":true})

});