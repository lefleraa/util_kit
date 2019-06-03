import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  color: PropTypes.string,
  tag: PropTypes.string,
  level: PropTypes.number,
  inverted: PropTypes.bool,
  display: PropTypes.number
};

const defaultProps = {
  color: "gray-darker",
  tag: "h1",
  level: 1,
  inverted: false,
};

export const Heading = ({
  className,
  inverted,
  color,
  tag,
  level,
  display,
  ...props
}) => {

  const Tag = level ? "h" + level : tag;

  const classes = classNames(
    inverted && "u-color-white",
    (color && !inverted) && `u-color-${color}`,
    display && `display-${display} u-text-bold`,
    className
  );

  return (
    <Tag
      className={classes}
    >
      {props.children}
    </Tag>
  );

}

Heading.displayName = 'Heading';
Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;