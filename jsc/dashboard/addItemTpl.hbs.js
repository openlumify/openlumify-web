define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "data-"
    + alias4(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"grid-stack-item new-item\" "
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.dataAttrs : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n  <div class=\"grid-stack-item-content\">\n    <div class=\"item-content\">\n      <div class=\"add-container\">\n        <svg version=\"1.1\" width=\"25%\" height=\"25%\" viewBox=\"11 11 26 26\">\n          <path d=\"M24,11.75c-6.765,0-12.25,5.483-12.25,12.25S17.235,36.25,24,36.25S36.25,30.767,36.25,24S30.765,11.75,24,11.75z\n          M31.086,25.519c0,0.278-0.227,0.506-0.506,0.506h-4.555v4.618c0,0.279-0.227,0.507-0.506,0.507h-3.037\n          c-0.279,0-0.506-0.228-0.506-0.507v-4.618H17.42c-0.279,0-0.506-0.228-0.506-0.506v-3.037c0-0.278,0.227-0.506,0.506-0.506h4.555\n          v-4.555c0-0.279,0.228-0.507,0.506-0.507h3.037c0.279,0,0.506,0.227,0.506,0.507v4.555h4.555c0.279,0,0.506,0.228,0.506,0.506\n          V25.519z\"/>\n        </svg>\n        <h1>Add</h1>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true})

});