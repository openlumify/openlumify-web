define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"form\">\n  <div class=\"errors\"></div>\n  <input type=\"text\" style=\"display:none\" class=\"graphVertexId\" value=\""
    + alias4(((helper = (helper = helpers.graphVertexId || (depth0 != null ? depth0.graphVertexId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"graphVertexId","hash":{},"data":data}) : helper)))
    + "\">\n\n  <textarea placeholder=\""
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"detail.comment.field.placeholder",{"name":"i18n","hash":{},"data":data}))
    + "\">"
    + alias4(((helper = (helper = helpers.commentText || (depth0 != null ? depth0.commentText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"commentText","hash":{},"data":data}) : helper)))
    + "</textarea>\n  <div class=\"visibility\"></div>\n\n  <div class=\"buttons\">\n    <button class=\"btn btn-link btn-small cancel\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"detail.comment.form.button.cancel",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n    <button class=\"btn btn-small btn-primary\">"
    + alias4((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"detail.comment.form.button",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n  </div>\n</div>\n";
},"useData":true})

});