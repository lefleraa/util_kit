import React from 'react';
import classNames from 'classnames';

import PerfectScrollbar from 'react-perfect-scrollbar';

export const ScrollArea = ({
  className,
  containerRef,
  ...props
}) => {

  const classes = classNames(
    className
  );

  return (
    <PerfectScrollbar
      containerRef={containerRef}
      className={className}
    >
      {props.children}
    </PerfectScrollbar>
  )
};