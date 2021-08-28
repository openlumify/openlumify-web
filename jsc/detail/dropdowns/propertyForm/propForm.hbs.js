define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "  <div class=\"vertex-select-container\"></div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "  <div class=\"property-list\"></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"form\">\n  <div class=\"errors\"></div>\n\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.vertex : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.property : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  <div class=\"previous-values-container\">\n    <div class=\"previous-values\" style=\"display:none;\">\n      <button data-action=\"add\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"property.form.button.add",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n      <button data-action=\"edit\" class=\"edit-previous\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"property.form.button.edit",{"name":"i18n","hash":{},"data":data}))
    + " (<span></span>) <small>&#x25BC;</small></button>\n    </div>\n    <ul class=\"dropdown-menu\" style=\"display:none\"></ul>\n  </div>\n\n  <div class=\"configuration\"></div>\n  <div class=\"justification\"></div>\n  <div class=\"visibility\"></div>\n\n  <div class=\"buttons\">\n    <button class=\"btn btn-small btn-danger\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"property.form.button.delete",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n    <button class=\"btn btn-link btn-small cancel\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"property.form.button.cancel",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n    <button class=\"btn btn-small btn-primary {#if loading}loading{/if}\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"property.form.button.add",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n  </div>\n</div>\n";
},"useData":true})

});