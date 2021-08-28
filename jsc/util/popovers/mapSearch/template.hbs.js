define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"mapSearchPopover popover top\" style=\"max-width: none; opacity: 1\">\n  <div class=\"arrow\"></div>\n  <div class=\"popover-content\" style=\"width: 25em; height: 25em; padding: 2px; display: flex; flex-direction: column;\">\n    <a class=\"close\" style=\"position: absolute;right: 0.3em;top: 0.1em;\">&times;</a>\n    <div class=\"info\" style=\"\n    padding: 0.25em;\n    text-align: center;\n    color: #555;\n    font-size: 95%;\n    font-style: italic;\n    flex: 0 0 auto;\n    margin: 0 1.5em;\n    \"></div>\n    <div class=\"map\" style=\"flex: 1 1 100%\"/>\n  </div>\n</div>\n";
},"useData":true})

});