"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panel = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require("react-bootstrap");

var _atoms = require("../../atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Panel = exports.Panel = function Panel(props) {
  var size = props.auto ? "auto" : props.size ? undefined : props.grid ? props.grid : undefined;
  var orientation = props.row ? "u-width-p-12" : "u-height-p-10";
  var position = (props.alignItems ? "align-items-" + props.alignItems : "") + " " + (props.justifyContent ? "justify-content-" + props.justifyContent : "");
  return _react2.default.createElement(
    _reactBootstrap.Col,
    {
      xs: size,
      className: "d-flex flex-column flex-nowrap u-pos-relative u-overflow-hidden p-0 " + props.className + " " + orientation,
      style: {
        maxWidth: !props.row ? props.size : undefined,
        minWidth: !props.row ? props.size : undefined,
        maxHeight: props.row ? props.size : undefined,
        minHeight: props.row ? props.size : undefined
      }
    },
    _react2.default.createElement(
      _atoms.ScrollArea,
      {
        className: "d-flex flex-column flex-nowrap " + position
      },
      props.children
    )
  );
};