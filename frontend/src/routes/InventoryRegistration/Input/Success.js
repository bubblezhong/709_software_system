import React from 'react';
import { Row, Col, Alert } from 'antd';
import Steps from './components/Steps';
import HeaderBack from './components/HeaderBack';

const App = () => (
  <Row>
    <Col span={24}>
      <HeaderBack />
      <Row>
        <Col span={4}>
          <Steps currentStep={2} />
        </Col>
        <Col span={20}>
          <Alert
            message="入库完成"
            description={<p>入库完成</p>}
            type="success"
            showIcon
          />
        </Col>
      </Row>
    </Col>
  </Row>
);


export default App;
