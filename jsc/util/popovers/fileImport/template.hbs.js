define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "      <div class=\"import-buttons\">\n        <div class=\"file-select-wrapper\">\n            <button class=\"file-select btn btn-link btn-small\">\n              "
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(alias1,"popovers.file_import.attachfile",{"name":"i18n","hash":{},"data":data}))
    + "\n            </button>\n            <input type=\"file\" name=\"files\" class=\"file\" multiple>\n        </div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hasCloudExtensions : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "        <button class=\"cloud-select btn btn-link btn-small\">\n          "
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"popovers.file_import.importcloud",{"name":"i18n","hash":{},"data":data}))
    + "\n        </button>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "display:none";
},"6":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"popovers.file_import.button.import",{"name":"i18n","hash":{},"data":data}));
},"8":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"popovers.file_import.button.nofile.import",{"name":"i18n","hash":{},"data":data}));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"fileImportPopover popover top collapseVisibility\">\n  <div class=\"popover-title\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n  <div class=\"arrow\"></div>\n  <div class=\"popover-content show-create-form\">\n    <div class=\"import-cloud-form\"></div>\n    <div class=\"create-form\">\n      <div class=\"errors\"></div>\n\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.hasFile : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n      <div class=\"single\"></div>\n\n      <label class=\"checkbox toggle-collapsed\" style=\""
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.multipleFiles : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n        <input class=\"copyVisibility\" type=\"checkbox\" checked> "
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"popovers.file_import.visibility.apply_to_all",{"name":"i18n","hash":{},"data":data}))
    + "\n      </label>\n\n      <div class=\"individual-visibility\"></div>\n\n      <div>\n        <button class=\"fileimport btn btn-primary\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hasFile : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "</button>\n        <button style=\"display:none\" class=\"filecancel btn btn-default\">"
    + alias3((helpers.i18n || (depth0 && depth0.i18n) || alias2).call(alias1,"popovers.file_import.button.cancel",{"name":"i18n","hash":{},"data":data}))
    + "</button>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true})

});