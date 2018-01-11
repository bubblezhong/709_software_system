import React, { Component } from 'react';
import { Button, Col, Row } from 'antd';
import { browserHistory } from 'react-router';
import DataSchemeView from './Data/SchemeView';
import EditForm from './Showing/EditForm';

class NewScheme extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row>
        <Col span={24}>
          <Row type="flex" justify="start">
            <Button
              onClick={() => browserHistory.push('/main/SoftwareDeployment/Scheme/')}
            >放弃保存</Button>
          </Row>
          <DataSchemeView>
            <EditForm
              {...this.props}
              defaultValue={{ items: [] }/* 初值 */}
            />
          </DataSchemeView>
        </Col>
      </Row>
    );
  }
}

export default NewScheme;
