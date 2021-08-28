define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section class=\"collapsible\">\n  <h1 class=\"collapsible-header\">\n    <strong>"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"detail.comments.title",{"name":"i18n","hash":{},"data":data}))
    + "</strong>\n    <span class=\"badge\"></span>\n  </h1>\n  <div class=\"comment-content\"><ul></ul></div>\n</section>\n";
},"useData":true})

});