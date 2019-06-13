'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panel = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactBootstrap = require('react-bootstrap');

var _atoms = require('../../atoms');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  direction: _propTypes2.default.oneOf(['column', 'row', null]),
  size: _propTypes2.default.number,
  grid: _propTypes2.default.number,
  alignItems: _propTypes2.default.string,
  justifyContent: _propTypes2.default.string,
  row: _propTypes2.default.bool,
  auto: _propTypes2.default.bool
};

var defaultProps = {
  direction: 'column',
  row: false,
  auto: false
};

var Panel = function Panel(_ref) {
  var className = _ref.className,
      children = _ref.children,
      direction = _ref.direction,
      size = _ref.size,
      grid = _ref.grid,
      alignItems = _ref.alignItems,
      justifyContent = _ref.justifyContent,
      row = _ref.row,
      auto = _ref.auto,
      props = _objectWithoutProperties(_ref, ['className', 'children', 'direction', 'size', 'grid', 'alignItems', 'justifyContent', 'row', 'auto']);

  var classes = (0, _classnames2.default)("d-flex flex-nowrap p-0", row ? "u-width-p-12" : "u-height-p-10", alignItems && "align-items-" + alignItems, justifyContent && "justify-content-" + justifyContent, direction ? "flex-" + direction : "flex-column", className);

  var sizeNum = auto ? "auto" : size ? undefined : grid ? grid : undefined;

  return _react2.default.createElement(
    _reactBootstrap.Col,
    _extends({}, props, {
      xs: sizeNum,
      className: (0, _classnames2.default)(classes, "u-overflow-hidden u-pos-relative"),
      style: {
        maxWidth: !row ? size : undefined,
        minWidth: !row ? size : undefined,
        maxHeight: row ? size : undefined,
        minHeight: row ? size : undefined
      }
    }),
    _react2.default.createElement(
      _atoms.ScrollArea,
      {
        className: classes
      },
      children
    )
  );
};

Panel.displayName = 'Panel';
Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;

exports.Panel = Panel;