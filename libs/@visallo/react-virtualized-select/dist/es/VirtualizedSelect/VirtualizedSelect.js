import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _extends from 'babel-runtime/helpers/extends';
import _slicedToArray from 'babel-runtime/helpers/slicedToArray';
import _Math$trunc from 'babel-runtime/core-js/math/trunc';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import Select from 'react-select';

// Import directly to avoid Webpack bundling the parts of react-virtualized that we are not using
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';

var styleFromSelectEl = function styleFromSelectEl(el) {
  if (!el) return {};
  var rect = el.getBoundingClientRect();
  return {
    overflow: 'hidden',
    width: rect.width + 'px',
    left: _Math$trunc(rect.left) + 'px',
    top: rect.top + rect.height + 'px',
    position: 'absolute'
  };
};
var REGEXP_SCROLL_PARENT = /^(visible|hidden)/;
var getScrollParents = function getScrollParents(el) {
  var list = [];
  var _recurseParents = function _recurseParents(el) {
    if (!el || typeof window.getComputedStyle !== 'function') {
      return null;
    }
    if (el.scrollHeight >= el.clientHeight && !REGEXP_SCROLL_PARENT.test(window.getComputedStyle(el).overflowY || 'visible')) {
      list.push(el);
    }
    return _recurseParents(el.parentElement) || document.body;
  };

  _recurseParents(el);
  return list;
};
var PortalContainer = function PortalContainer(_ref) {
  var selectRef = _ref.selectRef,
      menuPortalProps = _ref.menuPortalProps,
      children = _ref.children;

  var _React$useState = React.useState(function () {
    return styleFromSelectEl(selectRef.control);
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      style = _React$useState2[0],
      setStyle = _React$useState2[1];

  React.useEffect(function () {
    var scrollParents = getScrollParents(selectRef.control);
    var update = function update() {
      setStyle(styleFromSelectEl(selectRef.control));
    };
    var timer = setInterval(update, 100);

    scrollParents.forEach(function (p) {
      return p.addEventListener('scroll', update);
    });
    return function () {
      clearInterval(timer);
      scrollParents.forEach(function (p) {
        return p.removeEventListener('scroll', update);
      });
    };
  }, []);

  return React.createElement(
    'div',
    _extends({ style: style, className: 'VirtualizedSelectMenuPortal' }, menuPortalProps),
    children
  );
};

var VirtualizedSelect = function (_Component) {
  _inherits(VirtualizedSelect, _Component);

  function VirtualizedSelect(props, context) {
    _classCallCheck(this, VirtualizedSelect);

    var _this = _possibleConstructorReturn(this, (VirtualizedSelect.__proto__ || _Object$getPrototypeOf(VirtualizedSelect)).call(this, props, context));

    _this._renderMenu = _this._renderMenu.bind(_this);
    _this._optionRenderer = _this._optionRenderer.bind(_this);
    _this._setListRef = _this._setListRef.bind(_this);
    _this._setSelectRef = _this._setSelectRef.bind(_this);
    return _this;
  }

  _createClass(VirtualizedSelect, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._portalEl) {
        document.body.removeChild(this._portalEl);
      }
    }

    /** See List#recomputeRowHeights */

  }, {
    key: 'recomputeOptionHeights',
    value: function recomputeOptionHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this._listRef) {
        this._listRef.recomputeRowHeights(index);
      }
    }

    /** See Select#focus (in react-select) */

  }, {
    key: 'focus',
    value: function focus() {
      if (this._selectRef) {
        return this._selectRef.focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var SelectComponent = this._getSelectComponent();

      return React.createElement(SelectComponent, _extends({}, this.props, {
        ref: this._setSelectRef,
        menuRenderer: this._renderMenu,
        menuStyle: { overflow: 'hidden' }
      }));
    }

    // See https://github.com/JedWatson/react-select/#effeciently-rendering-large-lists-with-windowing

  }, {
    key: '_renderMenu',
    value: function _renderMenu(_ref2) {
      var _this2 = this;

      var focusedOption = _ref2.focusedOption,
          focusOption = _ref2.focusOption,
          labelKey = _ref2.labelKey,
          onSelect = _ref2.onSelect,
          options = _ref2.options,
          selectValue = _ref2.selectValue,
          valueArray = _ref2.valueArray,
          valueKey = _ref2.valueKey;
      var _props = this.props,
          renderToPortal = _props.renderToPortal,
          listProps = _props.listProps,
          optionRenderer = _props.optionRenderer,
          _props$menuPortalProp = _props.menuPortalProps,
          menuPortalProps = _props$menuPortalProp === undefined ? {} : _props$menuPortalProp;

      var focusedOptionIndex = options.indexOf(focusedOption);
      var height = this._calculateListHeight({ options: options });
      var innerRowRenderer = optionRenderer || this._optionRenderer;

      // react-select 1.0.0-rc2 passes duplicate `onSelect` and `selectValue` props to `menuRenderer`
      // The `Creatable` HOC only overrides `onSelect` which breaks an edge-case
      // In order to support creating items via clicking on the placeholder option,
      // We need to ensure that the specified `onSelect` handle is the one we use.
      // See issue #33

      function wrappedRowRenderer(_ref3) {
        var index = _ref3.index,
            key = _ref3.key,
            style = _ref3.style;

        var option = options[index];

        return innerRowRenderer({
          focusedOption: focusedOption,
          focusedOptionIndex: focusedOptionIndex,
          focusOption: focusOption,
          key: key,
          labelKey: labelKey,
          onSelect: onSelect,
          option: option,
          optionIndex: index,
          options: options,
          selectValue: onSelect,
          style: style,
          valueArray: valueArray,
          valueKey: valueKey
        });
      }

      var contents = React.createElement(
        AutoSizer,
        { disableHeight: true },
        function (_ref4) {
          var width = _ref4.width;
          return React.createElement(List, _extends({
            className: 'VirtualSelectGrid',
            height: height,
            ref: _this2._setListRef,
            rowCount: options.length,
            rowHeight: function rowHeight(_ref5) {
              var index = _ref5.index;
              return _this2._getOptionHeight({
                option: options[index]
              });
            },
            rowRenderer: wrappedRowRenderer,
            scrollToIndex: focusedOptionIndex,
            width: width
          }, listProps));
        }
      );

      if (renderToPortal) {
        if (!this._portalEl) {
          this._portalEl = document.createElement('div');
          document.body.appendChild(this._portalEl);
        }

        return createPortal(React.createElement(
          PortalContainer,
          { menuPortalProps: menuPortalProps, selectRef: this._selectRef.select || this._selectRef },
          contents
        ), this._portalEl);
      }
      return contents;
    }
  }, {
    key: '_calculateListHeight',
    value: function _calculateListHeight(_ref6) {
      var options = _ref6.options;
      var maxHeight = this.props.maxHeight;


      var height = 0;

      for (var optionIndex = 0; optionIndex < options.length; optionIndex++) {
        var option = options[optionIndex];

        height += this._getOptionHeight({ option: option });

        if (height > maxHeight) {
          return maxHeight;
        }
      }

      return height;
    }
  }, {
    key: '_getOptionHeight',
    value: function _getOptionHeight(_ref7) {
      var option = _ref7.option;
      var optionHeight = this.props.optionHeight;


      return optionHeight instanceof Function ? optionHeight({ option: option }) : optionHeight;
    }
  }, {
    key: '_getSelectComponent',
    value: function _getSelectComponent() {
      var _props2 = this.props,
          async = _props2.async,
          selectComponent = _props2.selectComponent;


      if (selectComponent) {
        return selectComponent;
      } else if (async) {
        return Select.Async;
      } else {
        return Select;
      }
    }
  }, {
    key: '_optionRenderer',
    value: function _optionRenderer(_ref8) {
      var focusedOption = _ref8.focusedOption,
          focusOption = _ref8.focusOption,
          key = _ref8.key,
          labelKey = _ref8.labelKey,
          option = _ref8.option,
          selectValue = _ref8.selectValue,
          style = _ref8.style,
          valueArray = _ref8.valueArray;

      var className = ['VirtualizedSelectOption'];

      if (option === focusedOption) {
        className.push('VirtualizedSelectFocusedOption');
      }

      if (option.disabled) {
        className.push('VirtualizedSelectDisabledOption');
      }

      if (valueArray && valueArray.indexOf(option) >= 0) {
        className.push('VirtualizedSelectSelectedOption');
      }

      if (option.className) {
        className.push(option.className);
      }

      var events = option.disabled ? {} : {
        onClick: function onClick() {
          return selectValue(option);
        },
        onMouseEnter: function onMouseEnter() {
          return focusOption(option);
        }
      };

      return React.createElement(
        'div',
        _extends({
          className: className.join(' '),
          key: key,
          style: style,
          title: option.title
        }, events),
        option[labelKey]
      );
    }
  }, {
    key: '_setListRef',
    value: function _setListRef(ref) {
      this._listRef = ref;
    }
  }, {
    key: '_setSelectRef',
    value: function _setSelectRef(ref) {
      this._selectRef = ref;
    }
  }]);

  return VirtualizedSelect;
}(Component);

VirtualizedSelect.propTypes = {
  async: PropTypes.bool,
  renderToPortal: PropTypes.bool,
  listProps: PropTypes.object,
  menuPortalProps: PropTypes.object,
  maxHeight: PropTypes.number,
  optionHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  optionRenderer: PropTypes.func,
  selectComponent: PropTypes.func
};
VirtualizedSelect.defaultProps = {
  async: false,
  maxHeight: 200,
  optionHeight: 35
};
export default VirtualizedSelect;