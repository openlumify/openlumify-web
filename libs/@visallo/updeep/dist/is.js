'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _splitPath = require('./util/splitPath');

var _splitPath2 = _interopRequireDefault(_splitPath);

var _curry = require('./util/curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function is(path, predicate, object) {
  var parts = (0, _splitPath2.default)(path);

  var rest = object;
  for (var i = 0; i < parts.length; i += 1) {
    if (typeof rest === 'undefined') return false;
    var part = parts[i];
    rest = rest[part];
  }

  if (typeof predicate === 'function') {
    return predicate(rest);
  }

  return predicate === rest;
}

exports.default = (0, _curry2.default)(is);