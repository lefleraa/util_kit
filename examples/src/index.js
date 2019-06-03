import React from 'react';
import { render } from 'react-dom';
import "./index.css";

import {
  Wrapper,
  Container,
  Panel
} from "../../kit"

import {
  BtnDemo,
  HeadingDemo,
  DemoWrap
} from "./kit_demos"

import {
  Row,
  Col
} from "react-bootstrap";

const Demos = () => (
  <Wrapper>


    <Panel
      className="u-bg-white"
      grid={2}
    >
      <Panel
        row
        auto
      >
        <div className="pt-4 pb-4 pl-4 pr-4 u-border-b-1">
          blah
        </div>
      </Panel>
      <Panel
        row
        justifyContent="center"
      >
        <div className="pt-4 pb-4 pl-4 pr-4">
          <Row>
            <Col>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, tempora molestiae doloribus consectetur mollitia accusantium deleniti excepturi voluptatum culpa ducimus facilis sint itaque doloremque, necessitatibus neque hic pariatur rerum earum?
            </Col>
            <Col>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem fuga voluptatum dolores voluptatibus nesciunt sed error doloremque debitis possimus ullam harum autem, impedit quos esse aliquid eaque animi ducimus distinctio?
            </Col>
          </Row>
        </div>
      </Panel>
    </Panel>


    <Panel>
      <Panel
        row
        auto
      >
        <div className="pt-4 pb-4 pl-5 pr-5 u-border-b-1">
          blah
        </div>
      </Panel>
      <Panel
        row
      >
        <div className="pt-5 pb-5 pl-5 pr-5">
          <Container>
            <Row>
              <Col>
                <DemoWrap>
                  <HeadingDemo />
                </DemoWrap>
                <DemoWrap>
                  <BtnDemo />
                </DemoWrap>
              </Col>
            </Row>
          </Container>
        </div>
      </Panel>
    </Panel>


    <Panel
      className="u-bg-gray-lighter"
      size={300}
    >
      <div className="pt-4 pb-4 pl-4 pr-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut asperiores odit sit unde ducimus! Labore suscipit quam perspiciatis laudantium et numquam ratione recusandae veritatis ipsa, odit fugit minus placeat.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut asperiores odit sit unde ducimus! Labore suscipit quam perspiciatis laudantium et numquam ratione recusandae veritatis ipsa, odit fugit minus placeat.
      </div>
    </Panel>


  </Wrapper>
);

render(<Demos />, document.getElementById("root"));