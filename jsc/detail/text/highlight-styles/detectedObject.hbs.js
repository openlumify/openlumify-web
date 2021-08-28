define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "background: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.colors : depth0)) != null ? stack1.normal : stack1), depth0))
    + ";\ncolor: white;\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.dim : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "background: "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.colors : depth0)) != null ? stack1.detectedObjects : stack1)) != null ? stack1.background : stack1), depth0))
    + ";\ncolor: "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.colors : depth0)) != null ? stack1.detectedObjects : stack1)) != null ? stack1.foreground : stack1), depth0))
    + ";\ntext-shadow: none;\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "border:0;\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.normalOrHover : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true})

});