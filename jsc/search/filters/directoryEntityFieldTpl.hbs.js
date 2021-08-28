define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"directory-entity-field-filter-wrap\">\n  <div class=\"directory-entity-field\"></div>\n  <button class=\"switch-current-user btn btn-link btn-small\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"field.directory.current_user",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n  <button class=\"switch-choose-user btn btn-link btn-small\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"field.directory.choose_user",{"name":"i18n","hash":{},"data":data}))
    + "&hellip;</button>\n</div>\n";
},"useData":true})

});