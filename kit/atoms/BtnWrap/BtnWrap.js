import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  type: PropTypes.oneOf(['button', 'reset', 'submit', null]),
  margin: PropTypes.string,
  disabled: PropTypes.bool,
  display: PropTypes.oneOf(['inline', 'inline-block', 'block', null]),
};

const defaultProps = {
  type: 'button',
  margin: 'm-0',
  disabled: false,
  display: "inline-block"
};

const BtnWrap = ({
  className,
  children,
  type,
  margin,
  disabled,
  display,
  ...props
}) => {

  const classes = classNames(
    'u-pos-vertical-align u-aria-focus u-cursor-pointer btn-wrap',
    'u-text-left u-bg-none u-border-0 p-0',
    display && `d-${display}`,
    disabled && 'disabled',
    margin,
    className
  );

  return (
    <button
      {...props}
      type={type}
      className={classes}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
}

BtnWrap.displayName = 'BtnWrap';
BtnWrap.propTypes = propTypes;
BtnWrap.defaultProps = defaultProps;

export {
  BtnWrap
};