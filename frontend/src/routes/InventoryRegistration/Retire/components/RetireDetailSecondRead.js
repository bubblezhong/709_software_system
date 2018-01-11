import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import { Form, Row, Col, Modal } from 'antd';

const FormItem = Form.Item;
// const Option = Select.Option;
class RetireDetailSecondRead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handleActionvalue: '',
      initialValue: {
        handler: '张三',
        handleAction: '同意',
        relativeFile: '无',
        register: '李四',
        explain: '无',
      },
    };
  }
  render() {
    const { initialValue } = this.state;
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
        width="60%"
        height="70%"
        title="入库审批单"
        visible={this.props.visible}
        onCancel={this.props.handleCancel}
        footer={null}
      >
        <div style={{ height: 400 }}>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>退役审核处理</div>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="处理人"
              >
                <span>{initialValue.handler}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="处理动作"
              >
                <span>{initialValue.handleAction}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="相关文件"
                hasFeedback
              >
                <span>{initialValue.relativeFile}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="登记员"
                hasFeedback
              >
                <span>{initialValue.register}</span>
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem
                {...formItemLayoutDesc}
                label="说明"
              >
                <span>{initialValue.explain}</span>
              </FormItem>
            </Col>
          </Row>
        </div>
      </Modal>
    );
  }
}

RetireDetailSecondRead.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
};
// const WrapRetireDetailSecondRead = Form.create()(RetireDetailSecondRead);
export default RetireDetailSecondRead;
