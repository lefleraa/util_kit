'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DetailHeading = undefined;

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
  inverted: _propTypes2.default.bool
};

var defaultProps = {
  color: "gray",
  tag: "p",
  inverted: false
};

var DetailHeading = function DetailHeading(_ref) {
  var className = _ref.className,
      inverted = _ref.inverted,
      color = _ref.color,
      tag = _ref.tag,
      props = _objectWithoutProperties(_ref, ['className', 'inverted', 'color', 'tag']);

  var Tag = tag;

  var classes = (0, _classnames2.default)("u-text-uppercase u-text-medium small", inverted && "u-color-white", color && !inverted && 'u-color-' + color, className);

  return _react2.default.createElement(
    Tag,
    {
      className: classes
    },
    props.children
  );
};

exports.DetailHeading = DetailHeading;
DetailHeading.displayName = 'DetailHeading';
DetailHeading.propTypes = propTypes;
DetailHeading.defaultProps = defaultProps;