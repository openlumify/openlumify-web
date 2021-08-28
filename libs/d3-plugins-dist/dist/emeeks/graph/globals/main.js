!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self);var f=n;f=f.d3||(f.d3={}),f=f.plugins||(f.plugins={}),f=f.emeeks||(f.emeeks={}),f.graph=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
var d3 = window.d3["default"] || window.d3;

exports["default"] = function (graph) {
  var graph = graph ? graph : {},
      nodes = [],
      links = [];

  graph.description = function() {
    return "d3.graph with " + nodes.length + " nodes and " + links.length + " links";
  };

  graph.nodes = function(x) {
    if (!arguments.length) return nodes;
    nodes = x;
    return this;
  };

  graph.links = function(x) {
    if (!arguments.length) return links;
    links = x;
    return this;
  };

  graph.matrix = function(x) {
    if (!arguments.length) return listToMatrix(links);
    links = matrixToList(x);
    // TODO nodes
    return this;
  };

  return graph;
};

function matrix(matrix) {
  var matrix = matrix ? matrix : [];

  var matrixObj = function(i,j) {
    return matrix[i][j];
  };

  matrixObj.description = function() {
    return "A " + matrix.length +
           " by " + matrix.length +
           " adjacency matrix";
  };

  matrixObj.data = matrixObj.matrix = function(x) {
    if (!arguments.length) return matrix;
    matrix = x;
    return this;
  };

  matrixObj.set = matrixObj.addEdge = function(i,j,value) {
    matrix[i][j] = value ? value : 1;
    return this;
  };

  matrixObj.remove = matrixObj.removeEdge = function(i,j) {
    matrix[i][j] = 0;
    return this;
  };

  matrixObj.has = matrixObj.hasEdge = function(i,j) {
    return !!matrix[i][j];
  };

  matrixObj.outE = matrixObj.outEdges = function(i) {
    var edges = [],
        n = matrix.length;
    var j = -1; while (++j < n) {
      if (matrix[i][j]) edges.push(j);
    }
    return edges;
  };

  matrixObj.inE =  matrixObj.inEdges = function(i) {
    var edges = [],
        n = matrix.length;
    var j = -1; while (++j < n) {
      if (matrix[j][i]) edges.push(j);
    }
    return edges;
  };

  return matrixObj;
};
exports.matrix = matrix;
function listToMatrix(links) {
  var matrix = [],
      n = links.length,
      max = d3.max(links, function(d) {
        return d3.max([d.source, d.target]);
      });

  // zero matrix
  var i = -1; while (++i <= max) {
    matrix[i] = [];
    var j = -1; while (++j <= max) {
      matrix[i][j] = 0;
    }
  }

  i = -1; while (++i < n) {
    matrix[ links[i].source ][ links[i].target ] = links[i].value;
  }

  return matrix;
};
exports.listToMatrix = listToMatrix;
function matrixToList(matrix) {
  var links = [],
      n = matrix.length;

  var i = -1; while (++i < n) {
    var j = -1; while (++j < n) {
      links.push({
        source: i,
        target: j,
        value: matrix[i][j]
      });
    }
  }

  return links;
};
exports.matrixToList = matrixToList;
},{}]},{},[1])
(1)
});