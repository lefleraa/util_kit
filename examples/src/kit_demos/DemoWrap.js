import React from 'react';

import {
  Tile
} from "../../../kit"

const DemoWrap = props => (
  <Tile
    className="p-5 mb-5"
  >
    {props.children}
  </Tile>
);

export default DemoWrap;