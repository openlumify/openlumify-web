define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"timelineConfigPopover popover top\">\n  <div class=\"popover-title\">\n    <label>\n      <input data-title=\"ALL\" type=\"checkbox\" checked>\n      "
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"popovers.timelineconfig.title",{"name":"i18n","hash":{},"data":data}))
    + "\n    </label>\n  </div>\n  <div class=\"arrow\"></div>\n  <div class=\"popover-content\">\n    <div class=\"errors\"></div>\n    <ul></ul>\n  </div>\n</div>\n\n";
},"useData":true})

});