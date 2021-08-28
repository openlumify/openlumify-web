!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self);var n=o;n=n.d3||(n.d3={}),n=n.plugins||(n.plugins={}),n=n.mbostock||(n.mbostock={}),n.rollup=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

var d3 = window.d3["default"] || window.d3;

function rollupX(d) { return d.x; }
function rollupY(d) { return d.y; }
function rollupNodes(d) { return d.nodes; }
function rollupLinks(d) { return d.links; }
function rollupLinkValue(d) { return 1; }
function rollupLinkSource(d) { return d.source; }
function rollupLinkTarget(d) { return d.target; }

exports["default"] = function () {
  var directed = true,
      x_ = rollupX,
      y_ = rollupY,
      nodes_ = rollupNodes,
      links_ = rollupLinks,
      linkValue = rollupLinkValue,
      linkSource = rollupLinkSource,
      linkTarget = rollupLinkTarget;

  function rollup(d, i) {
    var nodes = nodes_.call(this, d, i),
        links = links_.call(this, d, i),
        n = nodes.length,
        m = links.length,
        i = -1,
        x = [],
        y = [],
        rnindex = 0,
        rnodes = {},
        rlinks = {};

    // Compute rollup nodes.
    while (++i < n) {
      (d = nodes[i]).index = i;
      x[i] = x_.call(this, d, i);
      y[i] = y_.call(this, d, i);
      var nodeId = id(i),
          rn = rnodes[nodeId];
      if (!rn) {
        rn = rnodes[nodeId] = {
          index: rnindex++,
          x: x[i],
          y: y[i],
          nodes: []
        };
      }
      rn.nodes.push(d);
    }

    // Compute rollup links.
    i = -1; while (++i < m) {
      var value = linkValue.call(this, d = links[i], i),
          source = linkSource.call(this, d, i),
          target = linkTarget.call(this, d, i),
          rsource = rnodes[id(typeof source === "number" ? source : source.index)],
          rtarget = rnodes[id(typeof target === "number" ? target : target.index)],
          linkId = !directed && rsource.index > rtarget.index
              ? rtarget.index + "," + rsource.index
              : rsource.index + "," + rtarget.index,
          rl = rlinks[linkId];
      if (!rl) {
        rl = rlinks[linkId] = {
          source: rsource,
          target: rtarget,
          value: 0,
          links: []
        };
      }
      rl.links.push(links[i]);
      rl.value += value;
    }

    return {
      nodes: d3.values(rnodes),
      links: d3.values(rlinks)
    };

    function id(i) {
      return x[i] + "," + y[i];
    }
  }

  rollup.x = function(x) {
    if (!arguments.length) return x_;
    x_ = x;
    return rollup;
  };

  rollup.y = function(x) {
    if (!arguments.length) return y_;
    y_ = x;
    return rollup;
  };

  rollup.nodes = function(x) {
    if (!arguments.length) return nodes_;
    nodes_ = x;
    return rollup;
  };

  rollup.links = function(x) {
    if (!arguments.length) return links_;
    links_ = x;
    return rollup;
  };

  rollup.linkSource = function(x) {
    if (!arguments.length) return linkSource;
    linkSource = x;
    return rollup;
  };

  rollup.linkTarget = function(x) {
    if (!arguments.length) return linkTarget;
    linkTarget = x;
    return rollup;
  };

  rollup.linkValue = function(x) {
    if (!arguments.length) return linkValue;
    linkValue = x;
    return rollup;
  };

  rollup.directed = function(x) {
    if (!arguments.length) return directed;
    directed = x;
    return rollup;
  };

  return rollup;

};
},{}]},{},[1])
(1)
});