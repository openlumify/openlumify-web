define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"popover searchResultsPopover top\">\n  <div class=\"arrow\"></div>\n  <div class=\"popover-content\">\n    <button class=\"btn btn-small btn-link open-in-search\">"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"dashboard.search.results.open.button",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n    <div class=\"list loading-small-animate\"></div>\n  </div>\n</div>\n\n";
},"useData":true})

});