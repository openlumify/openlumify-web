'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = splitPath;

var _reject = require('lodash/reject');

var _reject2 = _interopRequireDefault(_reject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function splitPath(path) {
  return Array.isArray(path) ? path : (0, _reject2.default)(('' + path).split('.'), function (x) {
    return !x;
  });
}