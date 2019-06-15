import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onInputChange: PropTypes.func,
  value: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  hideFeedback: PropTypes.bool,
  hideLabel: PropTypes.bool,
  error: PropTypes.string,
  success: PropTypes.string,
  type: PropTypes.string,
};

const defaultProps = {
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

const TextInput = ({
  id,
  type,
  name,
  value,
  error,
  success,
  label,
  placeholder,
  size,
  hideFeedback,
  hideLabel,
  onInputChange,
  ...props
}) => {
  const feedbackClasses = classNames(
    error && "is-invalid",
    success && "is-valid"
  );

  const classes = classNames(
    "form-group",
    feedbackClasses
  );

  const inputClasses = classNames(
    "form-control",
    size && `form-control-${size}`,
    feedbackClasses
  );

  return (
    <div className={classes}>
      {!hideLabel &&
        <label htmlFor={id}>
          {label}
        </label>
      }
      <input
        {...props}
        className={inputClasses}
        id={id}
        name={name}
        aria-label={hideLabel && label}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onInputChange({
          [name]: e.target.value
        })}
      />
      {!hideFeedback &&
        <Fragment>
          {error &&
            <small className="invalid-feedback">
              {error}
            </small>
          }
          {(success && !error) &&
            <small className="valid-feedback">
              {success}
            </small>
          }
        </Fragment>
      }
    </div>
  );
}

TextInput.displayName = 'TextInput';
TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export {
  TextInput
};