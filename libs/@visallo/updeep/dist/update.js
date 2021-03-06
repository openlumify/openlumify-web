'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _isPlainObject = require('lodash/isPlainObject');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _wrap = require('./wrap');

var _wrap2 = _interopRequireDefault(_wrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function isEmpty(object) {
  return !Object.keys(object).length;
}

function reduce(object, callback, initialValue) {
  return Object.keys(object).reduce(function (acc, key) {
    return callback(acc, object[key], key);
  }, initialValue);
}

function resolveUpdates(updates, object) {
  return reduce(updates, function (acc, value, key) {
    var updatedValue = value;

    if (Array.isArray(value) && Array.isArray(object[key])) {
      updatedValue = updateArray(value, object[key]); // eslint-disable-line no-use-before-define
    } else if (!Array.isArray(value) && value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      updatedValue = update(value, object[key]); // eslint-disable-line no-use-before-define
    } else if (typeof value === 'function') {
      updatedValue = value(object[key]);
      if ((0, _isEqual2.default)(updatedValue, object[key])) {
        updatedValue = object[key];
      }
    }

    if (object[key] !== updatedValue) {
      acc[key] = updatedValue; // eslint-disable-line no-param-reassign
    }

    return acc;
  }, {});
}

function updateArray(updates, object) {
  var updatedKeys = Object.keys(updates);
  var changed = Object.keys(object).length !== updatedKeys.length;
  var newArray = [].concat(_toConsumableArray(object));

  updatedKeys.forEach(function (key) {
    var updatedValue = updates[key]; // eslint-disable-line no-use-before-define

    if (_typeof(updates[key]) === 'object') {
      updatedValue = update(updates[key], object[key]); // eslint-disable-line no-use-before-define
    }
    if (updatedValue !== object[key]) {
      changed = true;
      newArray[key] = updatedValue;
    }
  });

  return changed ? newArray : object;
}

/**
 * Recursively update an object or array.
 *
 * Can update with values:
 * update({ foo: 3 }, { foo: 1, bar: 2 });
 * // => { foo: 3, bar: 2 }
 *
 * Or with a function:
 * update({ foo: x => (x + 1) }, { foo: 2 });
 * // => { foo: 3 }
 *
 * @function
 * @name update
 * @param {Object|Function} updates
 * @param {Object|Array}    object to update
 * @return {Object|Array}   new object with modifications
 */
function update(updates, object) {
  if (typeof updates === 'function') {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return updates.apply(undefined, [object].concat(args));
  }

  if (!(0, _isPlainObject2.default)(updates)) {
    return updates;
  }

  var defaultedObject = typeof object === 'undefined' || object === null ? {} : object;

  var resolvedUpdates = resolveUpdates(updates, defaultedObject);

  if (isEmpty(resolvedUpdates)) {
    return defaultedObject;
  }

  if (Array.isArray(defaultedObject)) {
    return updateArray(resolvedUpdates, defaultedObject);
  }

  return _extends({}, defaultedObject, resolvedUpdates);
}

exports.default = (0, _wrap2.default)(update, 2);