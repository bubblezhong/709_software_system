import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Mytask from './home/Mytask';
import MyCheck from './home/Mycheck';
import Admin from './home/Admin';
// import './home/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
    };
  }

  render() {
    return (
      <div>
        <Row gutter={8}>
          <Admin />
        </Row>
        <Row gutter={8}>
          <Col span={12}><Mytask /></Col>
          <Col span={12}><MyCheck /></Col>
        </Row>
      </div>
    );
  }
}


export default Home;
