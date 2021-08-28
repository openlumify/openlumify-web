!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self);var f=o;f=f.d3||(f.d3={}),f=f.plugins||(f.plugins={}),f=f.mbostock||(f.mbostock={}),f.fisheye=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
var d3 = window.d3["default"] || window.d3;

exports["default"] = {
  scale: function(scaleType) {
    return d3_fisheye_scale(scaleType(), 3, 0);
  },
  circular: function() {
    var radius = 200,
        distortion = 2,
        k0,
        k1,
        focus = [0, 0];

    function fisheye(d) {
      var dx = d.x - focus[0],
          dy = d.y - focus[1],
          dd = Math.sqrt(dx * dx + dy * dy);
      if (!dd || dd >= radius) return {x: d.x, y: d.y, z: dd >= radius ? 1 : 10};
      var k = k0 * (1 - Math.exp(-dd * k1)) / dd * .75 + .25;
      return {x: focus[0] + dx * k, y: focus[1] + dy * k, z: Math.min(k, 10)};
    }

    function rescale() {
      k0 = Math.exp(distortion);
      k0 = k0 / (k0 - 1) * radius;
      k1 = distortion / radius;
      return fisheye;
    }

    fisheye.radius = function(_) {
      if (!arguments.length) return radius;
      radius = +_;
      return rescale();
    };

    fisheye.distortion = function(_) {
      if (!arguments.length) return distortion;
      distortion = +_;
      return rescale();
    };

    fisheye.focus = function(_) {
      if (!arguments.length) return focus;
      focus = _;
      return fisheye;
    };

    return rescale();
  }
};

function d3_fisheye_scale(scale, d, a) {

  function fisheye(_) {
    var x = scale(_),
        left = x < a,
        range = d3.extent(scale.range()),
        min = range[0],
        max = range[1],
        m = left ? a - min : max - a;
    if (m == 0) m = max - min;
    return (left ? -1 : 1) * m * (d + 1) / (d + (m / Math.abs(x - a))) + a;
  }

  fisheye.distortion = function(_) {
    if (!arguments.length) return d;
    d = +_;
    return fisheye;
  };

  fisheye.focus = function(_) {
    if (!arguments.length) return a;
    a = +_;
    return fisheye;
  };

  fisheye.copy = function() {
    return d3_fisheye_scale(scale.copy(), d, a);
  };

  fisheye.nice = scale.nice;
  fisheye.ticks = scale.ticks;
  fisheye.tickFormat = scale.tickFormat;
  return d3.rebind(fisheye, scale, "domain", "range");
}
},{}]},{},[1])
(1)
});