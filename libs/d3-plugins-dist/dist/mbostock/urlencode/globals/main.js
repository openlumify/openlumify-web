!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self);var n=o;n=n.d3||(n.d3={}),n=n.plugins||(n.plugins={}),n=n.mbostock||(n.mbostock={}),n.urlencode=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

function urlencode(name, value) {
  var array = [];
  d3_arraySubclass(array, d3_urlencodePrototype);
  return arguments.length ? array.and(name, value) : array;
};

urlencode.type = "application/x-www-form-urlencoded;charset=utf-8";

var d3_arraySubclass = [].__proto__?

// Until ECMAScript supports array subclassing, prototype injection works well.
function(array, prototype) {
  array.__proto__ = prototype;
}:

// And if your browser doesn't support __proto__, we'll use direct extension.
function(array, prototype) {
  for (var property in prototype) array[property] = prototype[property];
};

var d3_urlencodePrototype = urlencode.prototype = [];

d3_urlencodePrototype.and = function(name, value) {
  name = d3_urlencode(name);
  this.push(value == null ? name : name + "=" + d3_urlencode(value));
  return this;
};

d3_urlencodePrototype.toString = function() {
  return this.join("&");
};

function d3_urlencode(value) {
  return encodeURIComponent(value).replace(/%20/g, "+");
}

exports["default"] = urlencode;
},{}]},{},[1])
(1)
});