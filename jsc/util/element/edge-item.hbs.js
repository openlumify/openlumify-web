define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " custom";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.timeSubtitle || (depth0 != null ? depth0.timeSubtitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"timeSubtitle","hash":{},"data":data}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.subtitle || (depth0 != null ? depth0.subtitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"subtitle","hash":{},"data":data}) : helper)));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"titles\">\n  <div class=\"vertex-out\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.outVertex : depth0)) != null ? stack1.title : stack1), depth0))
    + "</div>\n  <div class=\"vertex-in\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.inVertex : depth0)) != null ? stack1.title : stack1), depth0))
    + "</div>\n</div>\n<div class=\"info\">\n  <div class=\"edge-vertex-preview"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.outVertex : depth0)) != null ? stack1.custom : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" style=\"background-image: url('"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.outVertex : depth0)) != null ? stack1.image : stack1), depth0))
    + "');\"/>\n  <span class=\"title\">\n    <span class=\"rel_title\">"
    + alias2(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias3,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\n    <div>\n      <span class=\"date\">"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.timeSubtitle : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>\n      <span class=\"source\">"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.subtitle : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>\n    </div>\n  </span>\n  <div class=\"edge-vertex-preview"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.inVertex : depth0)) != null ? stack1.custom : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" style=\"background-image: url('"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.inVertex : depth0)) != null ? stack1.image : stack1), depth0))
    + "');\"/>\n</div>\n";
},"useData":true})

});