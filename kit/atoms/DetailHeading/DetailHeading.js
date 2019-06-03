import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  color: PropTypes.string,
  tag: PropTypes.string,
  inverted: PropTypes.bool
};

const defaultProps = {
  color: "gray",
  tag: "p",
  inverted: false,
};

export const DetailHeading = ({
  className,
  inverted,
  color,
  tag,
  ...props
}) => {

  const Tag = tag;

  const classes = classNames(
    "u-text-uppercase u-text-medium small",
    inverted && "u-color-white",
    (color && !inverted) && `u-color-${color}`,
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

DetailHeading.displayName = 'DetailHeading';
DetailHeading.propTypes = propTypes;
DetailHeading.defaultProps = defaultProps;