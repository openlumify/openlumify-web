define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div style=\"display:none\" class=\"segmented-control\">\n  <button>-</button>\n  <button>+</button>\n</div>\n<div style=\"display:none\" class=\"no-data-message\">\n  <h2>"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"histogram.no_data",{"name":"i18n","hash":{},"data":data}))
    + "</h2>\n  "
    + alias3(((helper = (helper = helpers.noDataMessageDetailsText || (depth0 != null ? depth0.noDataMessageDetailsText : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"noDataMessageDetailsText","hash":{},"data":data}) : helper)))
    + "\n</div>\n";
},"useData":true})

});