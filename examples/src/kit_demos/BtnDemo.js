import React, { Fragment } from 'react';

import {
  Btn
} from "../../../kit"

const BtnDemo = () => (
  <Fragment>
    <Btn
      variant="primary"
      onClick={() => console.log("click primary")}
      className="mr-1"
    >
      primary
    </Btn>
    <Btn
      variant="secondary"
      onClick={() => console.log("click secondary")}
      className="mr-1"
    >
      secondary
    </Btn>
    <Btn
      variant="default"
      href="#"
      className="mr-1"
    >
      default
    </Btn>
    <Btn
      variant="subtle"
      href="#"
      className="mr-1"
    >
      subtle
    </Btn>
    <Btn
      className="mt-1"
      block
      size="lg"
    >
      default
    </Btn>
  </Fragment>
);

export default BtnDemo;
