'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  type: _propTypes2.default.oneOf(['button', 'reset', 'submit', null]),
  margin: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  display: _propTypes2.default.oneOf(['inline', 'inline-block', 'block', null])
};

var defaultProps = {
  type: 'button',
  margin: 'u-m-0',
  disabled: false,
  display: "inline-block"
};

var BtnWrap = function BtnWrap(_ref) {
  var className = _ref.className,
      children = _ref.children,
      type = _ref.type,
      margin = _ref.margin,
      disabled = _ref.disabled,
      display = _ref.display,
      props = _objectWithoutProperties(_ref, ['className', 'children', 'type', 'margin', 'disabled', 'display']);

  var classes = (0, _classnames2.default)('u-pos-vertical-align u-aria-focus u-cursor-pointer', 'u-text-left u-bg-none u-border-0 u-p-0', display && 'u-dis-' + display, disabled && 'disabled', margin, className);

  return _react2.default.createElement(
    'button',
    _extends({}, props, {
      type: type,
      className: classes,
      'aria-disabled': disabled
    }),
    children
  );
};

BtnWrap.displayName = 'BtnWrap';
BtnWrap.propTypes = propTypes;
BtnWrap.defaultProps = defaultProps;

exports.default = BtnWrap;