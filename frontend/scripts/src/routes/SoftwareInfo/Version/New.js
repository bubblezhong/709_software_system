import React from 'react';
import { Row, Col } from 'antd';
import Form from './components/VersionForm';


const App = () => {
  return (
    <Row>
      <Col span={24}>
        <Form />
      </Col>
    </Row>
  );
};


export default App;
