define(
  ["d3","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var d3 = __dependency1__["default"] || __dependency1__;

    var radians = Math.PI / 180;

    function scale() {
      return d3.scale.linear()
          .range([d3.hsl(300, .5, 0), d3.hsl(-240, .5, 1)])
          .interpolate(d3.interpolateCubehelix);
    };
    __exports__.scale = scale;
    var interpolate = d3_interpolateCubehelix(1);
    __exports__.interpolate = interpolate;
    var gamma = d3_interpolateCubehelix;
    __exports__.gamma = gamma;
    function d3_interpolateCubehelix(γ) {
      return function(a, b) {
        a = d3.hsl(a);
        b = d3.hsl(b);

        var ah = (a.h + 120) * radians,
            bh = (b.h + 120) * radians - ah,
            as = a.s,
            bs = b.s - as,
            al = a.l,
            bl = b.l - al;

        if (isNaN(bs)) bs = 0, as = isNaN(as) ? b.s : as;
        if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah;

        return function(t) {
          var h = ah + bh * t,
              l = Math.pow(al + bl * t, γ),
              a = (as + bs * t) * l * (1 - l),
              cosh = Math.cos(h),
              sinh = Math.sin(h);
          return "#"
              + hex(l + a * (-0.14861 * cosh + 1.78277 * sinh))
              + hex(l + a * (-0.29227 * cosh - 0.90649 * sinh))
              + hex(l + a * (+1.97294 * cosh));
        };
      };
    }

    function hex(v) {
      var s = (v = v <= 0 ? 0 : v >= 1 ? 255 : v * 255 | 0).toString(16);
      return v < 0x10 ? "0" + s : s;
    }
  });