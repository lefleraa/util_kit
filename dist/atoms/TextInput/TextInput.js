'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  id: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string.isRequired,
  onInputChange: _propTypes2.default.func,
  value: _propTypes2.default.string,
  size: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  hideFeedback: _propTypes2.default.bool,
  hideLabel: _propTypes2.default.bool,
  error: _propTypes2.default.string,
  success: _propTypes2.default.string,
  type: _propTypes2.default.string
};

var defaultProps = {
  hideFeedback: false,
  hideLabel: false,
  type: 'text',
  placeholder: 'Enter...',
  size: '',
  value: '',
  name: '',
  error: '',
  success: '',
  label: ''
};

var TextInput = function TextInput(_ref) {
  var id = _ref.id,
      type = _ref.type,
      name = _ref.name,
      value = _ref.value,
      error = _ref.error,
      success = _ref.success,
      label = _ref.label,
      placeholder = _ref.placeholder,
      size = _ref.size,
      hideFeedback = _ref.hideFeedback,
      hideLabel = _ref.hideLabel,
      onInputChange = _ref.onInputChange,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['id', 'type', 'name', 'value', 'error', 'success', 'label', 'placeholder', 'size', 'hideFeedback', 'hideLabel', 'onInputChange', 'className']);

  var feedbackClasses = (0, _classnames2.default)(error && "is-invalid", success && "is-valid");

  var classes = (0, _classnames2.default)("form-group", className, feedbackClasses);

  var inputClasses = (0, _classnames2.default)("form-control", size && 'form-control-' + size, feedbackClasses);

  return _react2.default.createElement(
    'div',
    { className: classes },
    !hideLabel && label && _react2.default.createElement(
      'label',
      { htmlFor: id },
      label
    ),
    _react2.default.createElement('input', _extends({}, props, {
      className: inputClasses,
      id: id,
      name: name,
      'aria-label': hideLabel && label,
      type: type,
      value: value,
      placeholder: placeholder,
      onChange: function onChange(e) {
        return onInputChange(_defineProperty({}, name, e.target.value));
      }
    })),
    !hideFeedback && _react2.default.createElement(
      _react.Fragment,
      null,
      error && _react2.default.createElement(
        'small',
        { className: 'invalid-feedback' },
        error
      ),
      success && !error && _react2.default.createElement(
        'small',
        { className: 'valid-feedback' },
        success
      )
    )
  );
};

TextInput.displayName = 'TextInput';
TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

exports.TextInput = TextInput;