import React, { PropTypes } from 'react';
import { Modal, Row, Col, Form } from 'antd';

const FormItem = Form.Item;
class OperationRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialData: {
        confirmDirty: false,
        autoCompleteResult: [],
        handler: '张三',
        handleAction: '同意',
        register: '王五',
        relativeFile: '无',
        softwareDescription: '出库审批出库审批出库审批出库审批出库审批出库审批出库审批出库审批出库审批出库审批出库审批',
      },
    };
  }
  render() {
    const { initialData } = this.state;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const formItemLayoutDesc = {
      labelCol: { span: 3 },
      wrapperCol: { span: 19 },
    };
    return (
      <Modal
        width="70%"
        title="软件出库申请单"
        visible={this.props.visible}
        onCancel={this.props.handleCancel}
        footer={null}
      >
        <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>出库审核处理</div>
        <Row style={{ height: 300 }}>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="处理人"
            >
              <span>{initialData.handler}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="处理动作"
            >
              <span>{initialData.handleAction}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="出库登记员"
              hasFeedback
            >
              <span>{initialData.register}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="相关文件"
              hasFeedback
            >
              <span>{initialData.relativeFile}</span>
            </FormItem>
          </Col>
          <Col span={24}>
            <FormItem
              {...formItemLayoutDesc}
              label="说明"
            >
              <span>{initialData.softwareDescription}</span>
            </FormItem>
          </Col>
        </Row>
      </Modal>
    );
  }
}
OperationRecord.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
};
export default OperationRecord;
