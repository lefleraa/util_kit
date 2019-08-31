'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollArea = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPerfectScrollbar = require('react-perfect-scrollbar');

var _reactPerfectScrollbar2 = _interopRequireDefault(_reactPerfectScrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ScrollArea = function ScrollArea(_ref) {
  var className = _ref.className,
      containerRef = _ref.containerRef,
      props = _objectWithoutProperties(_ref, ['className', 'containerRef']);

  var classes = (0, _classnames2.default)(className);

  return _react2.default.createElement(
    _reactPerfectScrollbar2.default,
    {
      containerRef: containerRef,
      className: className
    },
    props.children
  );
};
exports.ScrollArea = ScrollArea;