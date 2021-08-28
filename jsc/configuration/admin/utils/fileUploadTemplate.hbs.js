define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<span class=\"btn btn-file\">"
    + alias3(((helper = (helper = helpers.buttonText || (depth0 != null ? depth0.buttonText : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"buttonText","hash":{},"data":data}) : helper)))
    + "&hellip;<input type=\"file\"></span>\n<button class=\"btn btn-danger\" style=\"display:none\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"admin.utils.file-upload.button.remove",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n<div class=\"selected-file\"></div>\n";
},"useData":true})

});