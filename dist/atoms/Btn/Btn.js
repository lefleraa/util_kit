'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Btn = undefined;

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
  variant: _propTypes2.default.string,
  size: _propTypes2.default.string,
  uppercase: _propTypes2.default.bool,
  newTab: _propTypes2.default.bool,
  isModal: _propTypes2.default.bool,
  block: _propTypes2.default.bool,
  active: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  naked: _propTypes2.default.bool
};

var defaultProps = {
  variant: 'default',
  children: "btn text",
  uppercase: false,
  newTab: false,
  isModal: false,
  block: false,
  naked: false,
  active: false,
  disabled: false
};

var Btn = function Btn(_ref) {
  var className = _ref.className,
      active = _ref.active,
      size = _ref.size,
      block = _ref.block,
      disabled = _ref.disabled,
      variant = _ref.variant,
      uppercase = _ref.uppercase,
      newTab = _ref.newTab,
      isModal = _ref.isModal,
      children = _ref.children,
      naked = _ref.naked,
      props = _objectWithoutProperties(_ref, ['className', 'active', 'size', 'block', 'disabled', 'variant', 'uppercase', 'newTab', 'isModal', 'children', 'naked']);

  var Tag = props.href ? 'a' : naked ? 'span' : props.onClick ? 'button' : 'span';

  var classes = (0, _classnames2.default)("u-cursor-pointer btn", active && "active", size && "btn-" + size, block && "btn-block", disabled && "disabled", variant && 'btn-' + variant, uppercase ? "u-text-uppercase" : "u-text-capitalize", className);

  return _react2.default.createElement(
    Tag,
    _extends({}, props, {
      className: classes,
      target: newTab && props.href ? props.href : undefined,
      'aria-disabled': disabled
    }),
    children,
    newTab && _react2.default.createElement(
      'span',
      { className: 'sr-only' },
      '(Opens new window)'
    ),
    isModal && _react2.default.createElement(
      'span',
      { className: 'sr-only' },
      '(Opens dialog)'
    )
  );
};

exports.Btn = Btn;
Btn.displayName = 'Btn';
Btn.propTypes = propTypes;
Btn.defaultProps = defaultProps;