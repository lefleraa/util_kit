import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  active: PropTypes.bool
};

const defaultProps = {
  active: false
};

export const Tile = ({
  className,
  active,
  ...props
}) => {

  const classes = classNames(
    "tile u-border-1",
    active && "tile-active",
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      {props.children}
    </div>
  )

};