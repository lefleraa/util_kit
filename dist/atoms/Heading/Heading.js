'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Heading = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  color: _propTypes2.default.string,
  tag: _propTypes2.default.string,
  level: _propTypes2.default.number,
  inverted: _propTypes2.default.bool,
  display: _propTypes2.default.number
};

var defaultProps = {
  color: "gray-darker",
  tag: "h1",
  level: 1,
  inverted: false
};

var Heading = function Heading(_ref) {
  var className = _ref.className,
      inverted = _ref.inverted,
      color = _ref.color,
      tag = _ref.tag,
      level = _ref.level,
      display = _ref.display,
      props = _objectWithoutProperties(_ref, ['className', 'inverted', 'color', 'tag', 'level', 'display']);

  var Tag = level ? "h" + level : tag;

  var classes = (0, _classnames2.default)(inverted && "u-color-white", color && !inverted && 'u-color-' + color, display && 'display-' + display + ' u-text-bold', className);

  return _react2.default.createElement(
    Tag,
    {
      className: classes
    },
    props.children
  );
};

exports.Heading = Heading;
Heading.displayName = 'Heading';
Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;