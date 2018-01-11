import React, { PropTypes } from 'react';
import { Modal, Row, Col, Form } from 'antd';

const FormItem = Form.Item;
class OperationRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialData: {
        handler: '张三',
        handleAction: '同意',
        distribution: '王五',
        infoReceiver: '李四',
        file: '无',
        remarks: '信息登记信息登记信息登记信息登记信息登记信息登记信息登记信息登记',
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
        title="信息登记请单"
        visible={this.props.visible}
        onCancel={this.props.handleCancel}
        footer={null}
      >
        <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>出库交付验收信息登记</div>
        <Row style={{ height: 450 }}>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="状态"
            >
              <span>待交付验收信息登记</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="汇总人"
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
              label="分配给"
              hasFeedback
            >
              <span>{initialData.distribution}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="信息接收员"
              hasFeedback
            >
              <span>{initialData.infoReceiver}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="附件"
              hasFeedback
            >
              <span>{initialData.file}</span>
            </FormItem>
          </Col>
          <Col span={24}>
            <FormItem
              {...formItemLayoutDesc}
              label="备注"
            >
              <span>{initialData.remarks}</span>
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
