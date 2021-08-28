define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<input \n  type=\"text\" autocomplete=\"off\" \n  placeholder=\""
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"user.selection.field.placeholder",{"name":"i18n","hash":{},"data":data}))
    + "\">\n";
},"useData":true})

});