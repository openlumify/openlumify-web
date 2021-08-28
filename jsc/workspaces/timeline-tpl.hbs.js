define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"timeline-svg-container\">\n</div>\n<div class=\"timeline-controls\">\n  <button class=\"btn btn-small timeline-fit\" style=\"text-transform: uppercase;\">"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"timeline.fit",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n  <button class=\"btn btn-small timeline-config\"></button>\n</div>";
},"useData":true})

});