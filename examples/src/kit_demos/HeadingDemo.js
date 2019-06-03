import React, { Fragment } from 'react';

import {
  Heading,
  DetailHeading
} from "../../../kit"

const HeadingDemo = () => (
  <Fragment>

    <Heading display={1}>Display 1</Heading>
    <Heading display={2}>Display 2</Heading>
    <Heading display={3}>Display 3</Heading>
    <Heading display={4}>Display 4</Heading>

    <Heading level={1}>Heading 1</Heading>
    <Heading level={2}>Heading 2</Heading>
    <Heading level={3}>Heading 3</Heading>
    <Heading level={4}>Heading 4</Heading>
    <Heading level={5}>Heading 5</Heading>
    <Heading level={6}>Heading 6</Heading>

    <DetailHeading>Detail Heading</DetailHeading>

  </Fragment>
);

export default HeadingDemo;
