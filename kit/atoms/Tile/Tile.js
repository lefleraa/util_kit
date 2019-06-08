import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  active: PropTypes.bool,
  component: PropTypes.string
};

const defaultProps = {
  active: false,
  component: "div"
};

const Tile = ({
  className,
  active,
  ...props
}) => {

  const classes = classNames(
    "tile",
    active && "tile-active",
    className
  );

  const Tag = component;

  return (
    <Tag
      {...props}
      className={classes}
    >
      {props.children}
    </Tag>
  )

};

Tile.displayName = 'Tile';
Tile.propTypes = propTypes;
Tile.defaultProps = defaultProps;

export {
  Tile
};