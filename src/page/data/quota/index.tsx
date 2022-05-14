import React from 'react';
import { Row, Col } from 'antd';
import Statistics from './comps/statistics';
import UpNum from './comps/up-num';
import Sentiment from './comps/sentiment';

import './index.less';

const DataQuota = () => (
  <div style={{ overflowY: 'auto', padding: '20px', maxHeight: '100%' }}>
    <Row
      align="middle"
      gutter={[16, 32]}
      justify="space-around"
    >
      <Col xl={{ span: 12 }}><Statistics /></Col>
      <Col xl={{ span: 12 }}><UpNum /></Col>
      <Col xl={{ span: 12 }}><Sentiment /></Col>
      <Col xl={{ span: 12 }} />
    </Row>
  </div>
);

export default DataQuota;
