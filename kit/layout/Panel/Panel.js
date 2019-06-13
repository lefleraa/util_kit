import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  Col
} from "react-bootstrap";

import {
  ScrollArea
} from "../../atoms";

const propTypes = {
  direction: PropTypes.oneOf(['column', 'row', null]),
  size: PropTypes.number,
  grid: PropTypes.number,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  row: PropTypes.bool,
  auto: PropTypes.bool,
};

const defaultProps = {
  direction: 'column',
  row: false,
  auto: false,
};

const Panel = ({
  className,
  children,
  direction,
  size,
  grid,
  alignItems,
  justifyContent,
  row,
  auto,
  ...props
}) => {

  const classes = classNames(
    "d-flex flex-nowrap p-0",
    (row ? "u-width-p-12" : "u-height-p-10"),
    alignItems && "align-items-" + alignItems,
    justifyContent && "justify-content-" + justifyContent,
    direction ? "flex-" + direction : "flex-column",
    className
  );

  let sizeNum = auto ? "auto" : (size ? undefined : (grid ? grid : undefined));

  return (
    <Col
      {...props}
      xs={sizeNum}
      className={classNames(classes, "u-overflow-hidden u-pos-relative")}
      style={{
        maxWidth: !row ? size : undefined,
        minWidth: !row ? size : undefined,
        maxHeight: row ? size : undefined,
        minHeight: row ? size : undefined
      }}
    >
      <ScrollArea
        className={classes}
      >
        {children}
      </ScrollArea>
    </Col>
  )
};

Panel.displayName = 'Panel';
Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;

export {
  Panel
}