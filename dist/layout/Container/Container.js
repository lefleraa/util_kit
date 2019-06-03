"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = exports.Container = function Container(props) {
  return _react2.default.createElement(
    _reactBootstrap.Container,
    _extends({}, props, {
      className: "p-0",
      fluid: true
    }),
    props.children
  );
};