define(
  ["d3","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var d3 = __dependency1__["default"] || __dependency1__;

    __exports__["default"] = function (url, callback) {
      function rand() {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
          c = '', i = -1;
        while (++i < 15) c += chars.charAt(Math.floor(Math.random() * 52));
        return c;
      }

      function create(url) {
        var e = url.match(/callback=d3.jsonp.(\w+)/),
          c = e ? e[1] : rand();
        d3.jsonp[c] = function(data) {
          callback(data);
          delete d3.jsonp[c];
          script.remove();
        };
        return 'd3.jsonp.' + c;
      }

      var cb = create(url),
        script = d3.select('head')
        .append('script')
        .attr('type', 'text/javascript')
        .attr('src', url.replace(/(\{|%7B)callback(\}|%7D)/, cb));
    };
  });