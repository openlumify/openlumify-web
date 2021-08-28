define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"vertex-selection\">\n  <div class=\"preview\" />\n  <input \n    autocomplete=\"off\" \n    placeholder=\""
    + alias4(((helper = (helper = helpers.defaultText || (depth0 != null ? depth0.defaultText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"defaultText","hash":{},"data":data}) : helper)))
    + "\" \n    type=\"text\" \n    value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">\n  <span class=\"badge\"/>\n</div>\n";
},"useData":true})

});