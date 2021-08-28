define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<section>\n  <label>"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"dashboard.visualization.section",{"name":"i18n","hash":{},"data":data}))
    + "</label>\n  <select disabled class=\"reportType\">\n    <option>"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"dashboard.visualization.section.loading",{"name":"i18n","hash":{},"data":data}))
    + "</option>\n  </select>\n</section>\n<div class=\"custom_report_config\"></div>\n";
},"useData":true})

});