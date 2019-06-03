import React from 'react';
import classNames from 'classnames';

import PerfectScrollbar from 'react-perfect-scrollbar';

export const ScrollArea = ({
  className,
  ...props
}) => {

  const classes = classNames(
    className
  );

  return (
    <PerfectScrollbar
      className={className}
    >
      {props.children}
    </PerfectScrollbar>
  )
};