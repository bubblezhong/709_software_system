import React, { Component } from 'react';
import { Button, Col, Row } from 'antd';
import { browserHistory } from 'react-router';
import DataSchemeView from './Data/SchemeView';
import EditForm from './Showing/EditForm';

class SchemeEditMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { params } = this.props;
    return (
      <Row>
        <Col span={24}>
          <Row type="flex" justify="space-between">
            <Button
              onClick={() => browserHistory.push(`/main/SoftwareDeployment/Scheme/View/${params.id}`)}
            >浏览</Button>
            <Button type="primary" onClick={this.addNode}>添加方案条目</Button>
          </Row>
          <DataSchemeView activeID={params.id}>
            <EditForm {...this.props} />
          </DataSchemeView>
        </Col>
      </Row>
    );
  }
}
SchemeEditMain.propTypes = {
  params: React.PropTypes.object,
};

export default SchemeEditMain;
