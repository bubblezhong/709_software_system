import React, { PropTypes } from 'react';
import { Modal, Row, Col, Form } from 'antd';

const FormItem = Form.Item;
class OperationRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialData: {
        handler: '李四',
        handleAction: ' ',
        receiver: '王五',
        relativeFile: '无',
        infoExplain: '协调安装协调安装协调安装协调安装协调安装协调安装协调安装协调安装协调安装',
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
        <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>出库协调安装</div>
        <Row style={{ height: 450 }}>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="状态"
            >
              <span>待协调安装</span>
            </FormItem>
          </Col>
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
              label="交付验收人"
              hasFeedback
            >
              <span>{initialData.receiver}</span>
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
              label="信息说明"
            >
              <span>{initialData.infoExplain}</span>
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
