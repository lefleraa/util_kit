import React from 'react';

import {
  Col
} from "react-bootstrap";

import {
  ScrollArea
} from "../../atoms";

export const Panel = props => {
  let size = props.auto ? "auto" : (props.size ? undefined : (props.grid ? props.grid : undefined));
  let orientation = props.row ? "u-width-p-12" : "u-height-p-10";
  let position = (props.alignItems ? "align-items-" + props.alignItems : "") + " " + (props.justifyContent ? "justify-content-" + props.justifyContent : "")
  return (
    <Col
      xs={size}
      className={`d-flex flex-column flex-nowrap u-pos-relative u-overflow-hidden p-0 ${props.className} ${orientation}`}
      style={{
        maxWidth: !props.row ? props.size : undefined,
        minWidth: !props.row ? props.size : undefined,
        maxHeight: props.row ? props.size : undefined,
        minHeight: props.row ? props.size : undefined
      }}
    >
      <ScrollArea
        className={`d-flex flex-column flex-nowrap ${position}`}
      >
        {props.children}
      </ScrollArea>
    </Col>
  )
};