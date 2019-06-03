"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = exports.Wrapper = function Wrapper(props) {
  return _react2.default.createElement(
    "div",
    {
      className: "u-width-p-12 u-height-p-10 u-pos-absolute d-flex flex-wrap u-overflow-auto u-bg-gray-lightest"
    },
    props.children
  );
};