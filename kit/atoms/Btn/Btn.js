import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  type: PropTypes.oneOf(['button', 'reset', 'submit', null]),
  variant: PropTypes.string,
  size: PropTypes.string,
  uppercase: PropTypes.bool,
  newTab: PropTypes.bool,
  isModal: PropTypes.bool,
  block: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  naked: PropTypes.bool
};

const defaultProps = {
  variant: 'default',
  children: "btn text",
  uppercase: false,
  newTab: false,
  isModal: false,
  block: false,
  naked: false,
  active: false,
  disabled: false
};

export const Btn = ({
  className,
  active,
  size,
  block,
  disabled,
  variant,
  uppercase,
  newTab,
  isModal,
  children,
  naked,
  ...props
}) => {

  const Tag = props.href ? 'a' : (naked ? 'span' : (props.onClick ? 'button' : 'span'));

  const classes = classNames(
    "u-cursor-pointer btn",
    active && "active",
    size && "btn-" + size,
    block && "btn-block",
    disabled && "disabled",
    variant && `btn-${variant}`,
    uppercase ? "u-text-uppercase" : "u-text-capitalize",
    className
  );

  return (
    <Tag
      {...props}
      className={classes}
      target={(newTab && props.href) ? props.href : undefined}
      aria-disabled={disabled}
    >
      {children}
      {newTab &&
        <span className="sr-only">(Opens new window)</span>
      }
      {isModal &&
        <span className="sr-only">(Opens dialog)</span>
      }
    </Tag>
  )
}

Btn.displayName = 'Btn';
Btn.propTypes = propTypes;
Btn.defaultProps = defaultProps;