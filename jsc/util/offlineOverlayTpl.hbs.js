define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"offline-overlay\">\n  <div>\n    <h1>"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"openlumify.offline_overlay.header",{"name":"i18n","hash":{},"data":data}))
    + "</h1>\n    <p>"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"openlumify.offline_overlay.subheader",{"name":"i18n","hash":{},"data":data}))
    + "</p>\n    <p class=\"last-checked\"></p>\n  </div>\n</div>\n";
},"useData":true})

});