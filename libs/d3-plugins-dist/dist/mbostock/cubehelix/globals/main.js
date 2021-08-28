!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self);var n=o;n=n.d3||(n.d3={}),n=n.plugins||(n.plugins={}),n=n.mbostock||(n.mbostock={}),n.cubehelix=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
var d3 = window.d3["default"] || window.d3;

var radians = Math.PI / 180;

function scale() {
  return d3.scale.linear()
      .range([d3.hsl(300, .5, 0), d3.hsl(-240, .5, 1)])
      .interpolate(d3.interpolateCubehelix);
};
exports.scale = scale;
var interpolate = d3_interpolateCubehelix(1);
exports.interpolate = interpolate;
var gamma = d3_interpolateCubehelix;
exports.gamma = gamma;
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
},{}]},{},[1])
(1)
});