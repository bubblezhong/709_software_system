import React, { Component } from 'react';
import { Row, Col, Button, Popconfirm } from 'antd';
import { browserHistory } from 'react-router';
import PlanForm from './Showing/PlanForm';

// eslint-disable-next-line
class EditPlan extends Component {
  render() {
    return (
      <Row>
        <Col span="24">
          <Popconfirm
            placement="top"
            title="现在离开所有未保存数据将清空，确认离开吗？"
            onConfirm={() => browserHistory.push('/main/TechnicalSupport/SupportPlan')}
            okText="回到列表" cancelText="关闭"
          >
            <Button style={{ marginBottom: 8 }}>返回列表</Button>
          </Popconfirm>

          <PlanForm {...this.props} />
        </Col>
      </Row>
    );
  }
}
EditPlan.propTypes = {
  // form: PropTypes.object,
};

export default EditPlan;
