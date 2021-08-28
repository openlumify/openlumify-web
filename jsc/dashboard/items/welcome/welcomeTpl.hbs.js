define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<p class=\"welcome\">"
    + ((stack1 = (helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"dashboard.welcome.welcomeTextRaw",{"name":"i18n","hash":{},"data":data})) != null ? stack1 : "")
    + "</p>\n<p class=\"welcome-sub\">"
    + ((stack1 = (helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"dashboard.welcome.welcomeTextRaw2",{"name":"i18n","hash":{},"data":data})) != null ? stack1 : "")
    + "</p>\n\n";
},"useData":true})

});