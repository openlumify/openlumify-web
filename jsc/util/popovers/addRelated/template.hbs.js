define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "        <button style=\"display:none\" class=\"btn search\">"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"popovers.add_related.button.search",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"addRelatedPopover popover top\">\n  <div class=\"popover-title\">\n    "
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"popovers.add_related.title",(depth0 != null ? depth0.title : depth0),{"name":"i18n","hash":{},"data":data}))
    + "\n  </div>\n  <div class=\"arrow\"></div>\n  <div class=\"popover-content\">\n    <div class=\"errors\"></div>\n\n    <div class=\"concept\"></div>\n    <div class=\"relationship\"></div>\n\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.multiple : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <button style=\"display:none\" class=\"btn btn-primary prompt-add\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"popovers.add_related.button.add",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n    <button class=\"btn btn-primary add\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"popovers.add_related.button.add",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n    <button style=\"display:none\" class=\"btn btn-danger cancel\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"popovers.add_related.button.cancel",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n  </div>\n</div>\n\n";
},"useData":true})

});