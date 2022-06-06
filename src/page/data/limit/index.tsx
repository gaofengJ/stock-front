import React from 'react';
import { Row, Col } from 'antd';
import LimitOne from './comps/limit-one';
import LimitTwo from './comps/limit-two';
import LimitThree from './comps/limit-three';
import LimitFour from './comps/limit-four';

import './index.less';

const DataLimit = () => (
  <div className="data-limit">
    <Row
      align="middle"
      gutter={[16, 32]}
      justify="space-around"
    >
      <Col xl={{ span: 12 }}><LimitOne /></Col>
      <Col xl={{ span: 12 }}><LimitTwo /></Col>
      <Col xl={{ span: 12 }}><LimitThree /></Col>
      <Col xl={{ span: 12 }}><LimitFour /></Col>
    </Row>
  </div>
);

export default DataLimit;
