!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self);var o=n;o=o.d3||(o.d3={}),o=o.plugins||(o.plugins={}),o=o.zjonsson||(o.zjonsson={}),o.forceLabels=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
var d3 = window.d3["default"] || window.d3;

exports["default"] = function force_labels() {
  var labels = d3.layout.force();

  // Update the position of the anchor based on the center of bounding box
  function updateAnchor() {
    if (!labels.selection) return;
    labels.selection.each(function(d) {
      var bbox = this.getBBox(),
          x = bbox.x + bbox.width / 2,
          y = bbox.y + bbox.height / 2;

      d.anchorPos.x = x;
      d.anchorPos.y = y;

      // If a label position does not exist, set it to be the anchor position
      if (d.labelPos.x == null) {
        d.labelPos.x = x;
        d.labelPos.y = y;
      }
    });
  }

  //The anchor position should be updated on each tick
  labels.on("tick.labels", updateAnchor);

  // This updates all nodes/links - retaining any previous labelPos on updated nodes
  labels.update = function(selection) {
    labels.selection = selection;
    var nodes = [], links = [];
    selection[0].forEach(function(d) {
      if(d && d.__data__) {
        var data = d.__data__;

        if (!d.labelPos) d.labelPos = {fixed: false};
        if (!d.anchorPos) d.anchorPos = {fixed: true};

        // Place position objects in __data__ to make them available through
        // d.labelPos/d.anchorPos for different elements
        data.labelPos = d.labelPos;
        data.anchorPos = d.anchorPos;

        links.push({target: d.anchorPos, source: d.labelPos});
        nodes.push(d.anchorPos);
        nodes.push(d.labelPos);
      }
    });
    labels
        .stop()
        .nodes(nodes)
        .links(links);
    updateAnchor();
    labels.start();
  };
  return labels;
};
},{}]},{},[1])
(1)
});