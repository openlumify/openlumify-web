'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./util/curry');

var _curry2 = _interopRequireDefault(_curry);

var _update2 = require('./update');

var _update3 = _interopRequireDefault(_update2);

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

var _splitPath = require('./util/splitPath');

var _splitPath2 = _interopRequireDefault(_splitPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var wildcard = '*';

function reducePath(acc, key) {
  if (key === wildcard) {
    return function (value) {
      return Object.prototype.hasOwnProperty.call(value, wildcard) ? // If we actually have wildcard as a property, update that
      (0, _update3.default)(_defineProperty({}, wildcard, acc), value) : // Otherwise map over all properties
      (0, _map2.default)(acc, value);
    };
  }

  return _defineProperty({}, key, acc);
}

function updateIn(path, value, object) {
  var parts = (0, _splitPath2.default)(path);
  var updates = parts.reduceRight(reducePath, value);

  return (0, _update3.default)(updates, object);
}

exports.default = (0, _curry2.default)(updateIn);