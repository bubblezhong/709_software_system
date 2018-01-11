import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {
  Form,
  Button,
  Row,
  Col,
} from 'antd';
import RegistrationForm from './Components/RegistrationForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  handleSubmit() {
    console.log('handleSubmit');
  }

  render() {
    return (
      <Row>
        <Col span={24}>
          <Form
            onSubmit={this.handleSubmit}
          >
            <RegistrationForm
              registrationInfo={{}}
              showFormType="new"
            />
            <Row>
              <Col offset={3} >
                <Button type="primary" onClick={() => browserHistory.push('/main/SoftwareDaily/Registration')}>新建使用情况登记</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    );
  }
}


export default Form.create({})(App);
