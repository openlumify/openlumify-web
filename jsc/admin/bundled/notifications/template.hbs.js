define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <label><input type=\"radio\" name=\"severity\" value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.checked : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "> "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</label>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "checked";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "<ul class=\"nav nav-list\">\n    <li class=\"nav-header\">Title</li>\n    <li><input type=\"text\" placeholder=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"notification.title.placeholder",{"name":"i18n","hash":{},"data":data}))
    + "\" class=\"title\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.notification : depth0)) != null ? stack1.title : stack1), depth0))
    + "\"></li>\n\n    <li class=\"nav-header\">Message</li>\n    <li><input type=\"text\" placeholder=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"notification.message.placeholder",{"name":"i18n","hash":{},"data":data}))
    + "\" class=\"message\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.notification : depth0)) != null ? stack1.message : stack1), depth0))
    + "\"></li>\n\n    <li class=\"nav-header\">Severity</li>\n    <li>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.severity : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </li>\n\n    <li class=\"nav-header\">External URL</li>\n    <li><input type=\"text\" placeholder=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"notification.externalUrl.placeholder",{"name":"i18n","hash":{},"data":data}))
    + "\" class=\"externalUrl\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.notification : depth0)) != null ? stack1.externalUrl : stack1), depth0))
    + "\"></li>\n\n    <li class=\"nav-header\">Start Date</li>\n    <li><input type=\"text\" class=\"startDate\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.notification : depth0)) != null ? stack1.startDate : stack1), depth0))
    + "\"></li>\n\n    <li class=\"nav-header\">End Date</li>\n    <li><input type=\"text\" placeholder=\""
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"notification.endDate.placeholder",{"name":"i18n","hash":{},"data":data}))
    + "\" class=\"endDate\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.notification : depth0)) != null ? stack1.endDate : stack1), depth0))
    + "\"></li>\n</ul>\n            \n<button class=\"btn btn-primary\">"
    + alias3(((helper = (helper = helpers.buttonText || (depth0 != null ? depth0.buttonText : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"buttonText","hash":{},"data":data}) : helper)))
    + "</button>\n";
},"useData":true})

});