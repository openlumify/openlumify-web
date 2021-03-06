'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _forEach = require('lodash/forEach');

var _forEach2 = _interopRequireDefault(_forEach);

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

var _mapValues = require('lodash/mapValues');

var _mapValues2 = _interopRequireDefault(_mapValues);

var _update = require('./update');

var _update2 = _interopRequireDefault(_update);

var _wrap = require('./wrap');

var _wrap2 = _interopRequireDefault(_wrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function shallowEqual(object, otherObject) {
  var equal = true;
  // eslint-disable-next-line consistent-return
  (0, _forEach2.default)(otherObject, function (value, key) {
    if (value !== object[key]) {
      equal = false;

      // exit early
      return false;
    }
  });

  return equal;
}

function map(iteratee, object) {
  var updater = typeof iteratee === 'function' ? iteratee : (0, _update2.default)(iteratee);

  var mapper = Array.isArray(object) ? _map2.default : _mapValues2.default;

  var newObject = mapper(object, updater);
  var equal = shallowEqual(object, newObject);

  return equal ? object : newObject;
}

exports.default = (0, _wrap2.default)(map);