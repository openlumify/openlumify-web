define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"user-account modal hide fade\" tabindex=\"-1\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n    <h3>"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"useraccount.modal.title",(depth0 != null ? depth0.displayName : depth0),{"name":"i18n","hash":{},"data":data}))
    + "</h3>\n  </div>\n  <div class=\"modal-body\">\n    <ul class=\"nav nav-list\"></ul>\n    <div class=\"page\"></div>\n  </div>\n</div>\n";
},"useData":true})

});