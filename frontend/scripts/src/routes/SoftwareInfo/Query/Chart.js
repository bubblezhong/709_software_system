import React from 'react';
import { Row, Col } from 'antd';
import OperateSystem from './OperateSystem';
import SoftType from './SoftType';
import TechnicSupport from './TechnicSupport';
import UpgradePerfect from './UpgradePerfect';

const Chart = () => {
  return (
    <div>
      <Row gutter={20}>
        <Col span={6} >
          <OperateSystem />
        </Col>
        <Col span={6} >
          <SoftType />
        </Col>
        <Col span={6} >
          <TechnicSupport />
        </Col>
        <Col span={6} >
          <UpgradePerfect />
        </Col>
      </Row>
    </div>
  );
};

export default Chart;

