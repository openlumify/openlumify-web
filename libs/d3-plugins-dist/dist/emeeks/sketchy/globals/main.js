!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self);var f=n;f=f.d3||(f.d3={}),f=f.plugins||(f.plugins={}),f=f.emeeks||(f.emeeks={}),f.sketchy=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
var d3 = window.d3["default"] || window.d3;

var circle = function(selection) {
  
  var r = 5, c = [0,0], w = 2, fillColor = "red", strokeColor = "black";
  
  function d3_sketchyCircle(selection) {
  selection.append("circle").attr("class", "sketchy").attr("r", r).attr("cx", c[0]).attr("cy", c[1]).style("fill", fillColor)

  r = r * 1.5;
  //divide width by two to get the offset
  var z = w /2;
  var gCirclePoints = [];
  gCirclePoints.push([c[0],c[1] + r - (r * .35)]);
  gCirclePoints.push([c[0],c[1] + r - (r * .25)]);
  gCirclePoints.push([c[0] + (r + (z * .375)) * .3,c[1] + (r - (r * .25)) * .9]);
  gCirclePoints.push([c[0] + (r * .9) + (z * .375),c[1] - (r * .1)]);
  gCirclePoints.push([c[0],c[1] - (r * 1) - (z * .5)]);
  gCirclePoints.push([c[0] - (r * .9) - (z * .35),c[1] - (r * .1)]);
  gCirclePoints.push([c[0] - (r + (z * .95)) * .4,c[1] + (r - (r * .25)) * .9]);
  gCirclePoints.push([c[0],c[1] + (r * .9) + (z) - (r * .25)]);
  gCirclePoints.push([c[0],c[1] + (r * .9) - (z) - (r * .25)]);
  gCirclePoints.push([c[0] - (r - (z * .95)) * .3,c[1] + (r - (r * .25)) * .9]);
  gCirclePoints.push([c[0] - (r * .9) + (z * .75),c[1] - (r * .1)]);
  gCirclePoints.push([c[0],c[1] - (r * 1) + (z * .5)]);
  gCirclePoints.push([c[0] + (r * .9) - (z * .375),c[1] - (r * .1)]);
  gCirclePoints.push([c[0] + (r - (z * .375)) * .3,c[1] + (r - (r * .25)) * .9]);
  gCirclePoints.push([c[0],c[1] + r - (r * .35)]);
  
      sketchyC = d3.svg.line()
        .x(function(d,i) {
        return d[0]
    })
        .y(function(d) {
        return d[1]
    })
        .interpolate("basis")
  
  selection.append("path").attr("class", "sketchy").attr("d", sketchyC(gCirclePoints)).style("stroke", "none").style("fill", strokeColor)
  return this;
  }
  
  d3_sketchyCircle.radius = function(data) {
      if (!arguments.length) return r;
      r = data;
      return this;
      }

  d3_sketchyCircle.cx = function(data) {
      if (!arguments.length) return c[0];
      c[0] = data;
      return this;
      }

  d3_sketchyCircle.cy = function(data) {
      if (!arguments.length) return c[1];
      c[1] = data;
      return this;
      }
  
    d3_sketchyCircle.fill = function(data) {
      if (!arguments.length) return fillColor;
      fillColor = data;
      return this;
      }

    d3_sketchyCircle.stroke = function(data) {
      if (!arguments.length) return strokeColor;
      strokeColor = data;
      return this;
      }
      
      d3_sketchyCircle.strokeWidth = function(data) {
      if (!arguments.length) return w;
      w = data;
      return this;
      }
      
  return d3_sketchyCircle;
};
exports.circle = circle;
var rect = function(selection) {
  
  var rh = 50,rw = 10,w = 2,c = [0,0],fillColor = "red",strokeColor="black",jostle = 0;
  
  function d3_sketchyRect(selection) {

  selection.append("rect").attr("class", "sketchy").attr("x", c[0]).attr("y", c[1]).attr("height", rh).attr("width", rw).style("fill", fillColor)

  var randomJostle = d3.scale.linear().domain([0,1]).range([-jostle,jostle]);
  
  var j = [];
  j.push(randomJostle(Math.random()));
  j.push(randomJostle(Math.random()));
  j.push(randomJostle(Math.random()));
  j.push(randomJostle(Math.random()));
  j.push(randomJostle(Math.random()));
  j.push(randomJostle(Math.random()));
  
  //divide width by two to get the offset
  var z = w /2;
  var gRectPoints = [];
  gRectPoints.push([c[0] + (z),c[1] + rh]);
  gRectPoints.push([c[0] - (z),c[1] + rh]);
  gRectPoints.push([c[0] - (z * .55) + j[0],c[1] - (z * .55) + j[1]]);
  gRectPoints.push([c[0] + rw + (z * .35) + j[2],c[1] - (z * .35) + j[3]]);
  gRectPoints.push([c[0] + rw + (z * .25) + j[4],c[1] + rh + (z * .25) + j[5]]);
  gRectPoints.push([c[0] + (z),c[1] + rh + (z * .1)]);
  gRectPoints.push([c[0] + (z),c[1] + rh - (z * .1)]);
  gRectPoints.push([c[0] + rw - (z * .25) + j[4],c[1] + rh - (z * .25) + j[5]]);
  gRectPoints.push([c[0] + rw - (z * .35) + j[2],c[1] + (z * .35) + j[3]]);
  gRectPoints.push([c[0] + (z * .55) + j[0],c[1] + (z * .55) + j[1]]);
  gRectPoints.push([c[0] + (z),c[1] + rh]);

  
      sketchyC = d3.svg.line()
        .x(function(d,i) {
        return d[0]
    })
        .y(function(d) {
        return d[1]
    })
        .interpolate("linear")
  
  selection.append("path").attr("class", "sketchy").attr("d", sketchyC(gRectPoints)).style("stroke", "none").style("fill", strokeColor)
  return this;
  }
  
    d3_sketchyRect.height = function(data) {
      if (!arguments.length) return rh;
      rh = data;
      return this;
      }

    d3_sketchyRect.width = function(data) {
      if (!arguments.length) return rw;
      rw = data;
      return this;
      }

  d3_sketchyRect.x = function(data) {
      if (!arguments.length) return c[0];
      c[0] = data;
      return this;
      }

  d3_sketchyRect.y = function(data) {
      if (!arguments.length) return c[1];
      c[1] = data;
      return this;
      }
  
    d3_sketchyRect.fill = function(data) {
      if (!arguments.length) return fillColor;
      fillColor = data;
      return this;
      }

    d3_sketchyRect.stroke = function(data) {
      if (!arguments.length) return strokeColor;
      strokeColor = data;
      return this;
      }
      
      d3_sketchyRect.strokeWidth = function(data) {
      if (!arguments.length) return w;
      w = data;
      return this;
      }
      
      d3_sketchyRect.jostle = function(data) {
      if (!arguments.length) return jostle;
      jostle = data;
      return this;
      }
      
  return d3_sketchyRect;

};
exports.rect = rect;
var randomColor = function(baseColor,range) {
  var hslBase = d3.hsl(baseColor)
      hslBase.h = hslBase.h + (Math.floor(Math.random() * (range * 255)) - Math.floor(range / 2));
      hslBase.s = hslBase.s + (Math.floor(Math.random() * range) - Math.floor(range / 2));
      hslBase.l = hslBase.l + (Math.floor(Math.random() * range) - Math.floor(range / 2));
      return hslBase.toString();
}

exports.randomColor = randomColor;
},{}]},{},[1])
(1)
});