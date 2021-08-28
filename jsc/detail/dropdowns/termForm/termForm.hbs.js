define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"unresolve-note\">"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"detail.resolve.form.unresolve.note",{"name":"i18n","hash":{},"data":data}))
    + "</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"vertex-container\"></div>\n\n        <div class=\"help\">"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"detail.resolve.form.entity_search.help",{"name":"i18n","hash":{},"data":data}))
    + "</div>\n\n        <div class=\"concept-container\"></div>\n\n        <div class=\"justification\"></div>\n\n        <div class=\"visibility\"></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\""
    + alias4(((helper = (helper = helpers.classNames || (depth0 != null ? depth0.classNames : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"classNames","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"errors\"></div>\n    <input type=\"text\" style=\"display:none\" class=\"graphVertexId\" value=\""
    + alias4(((helper = (helper = helpers.graphVertexId || (depth0 != null ? depth0.graphVertexId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"graphVertexId","hash":{},"data":data}) : helper)))
    + "\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.unresolve : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\n    <div class=\"buttons\">\n        <button class=\"btn btn-link btn-small cancel\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"detail.resolve.form.button.cancel",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n        <button style=\"display:none\" class=\"btn btn-small btn-primary\">"
    + alias4(((helper = (helper = helpers.buttonText || (depth0 != null ? depth0.buttonText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"buttonText","hash":{},"data":data}) : helper)))
    + "</button>\n    </div>\n</div>\n";
},"useData":true})

});