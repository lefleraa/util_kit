import React from 'react';

import {
  Container as BsContainer
} from "react-bootstrap";

export const Container = props => (
  <BsContainer
    {...props}
    className="p-0"
    fluid
  >
    {props.children}
  </BsContainer>
);