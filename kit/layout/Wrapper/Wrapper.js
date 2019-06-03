import React from 'react';

export const Wrapper = props => (
  <div
    className="u-width-p-12 u-height-p-10 u-pos-absolute d-flex flex-wrap u-overflow-auto u-bg-gray-lightest"
  >
    {props.children}
  </div>
);