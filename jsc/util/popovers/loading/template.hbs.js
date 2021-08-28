define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"popover top\">\n  <div class=\"popover-title\">\n    <span class=\"loading badge\" style=\"vertical-align:bottom;\"></span>\n    <span style=\"padding-left:0.3em\">"
    + alias3(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"message","hash":{},"data":data}) : helper)))
    + "</span>\n  </div>\n  <div class=\"arrow\"></div>\n  <div class=\"popover-content\">\n    <div>\n      <button class=\"btn btn-primary\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"popovers.loading.button.cancel",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n    </div>\n  </div>\n</div>\n";
},"useData":true})

});