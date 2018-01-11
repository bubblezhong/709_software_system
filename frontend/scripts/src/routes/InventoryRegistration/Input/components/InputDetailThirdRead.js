import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import { Form, Row, Col, Modal } from 'antd';
// import InputDetailFirstRead from './InputDetailFirstRead';
// import InputDetailSecondRead from './InputDetailSecondRead';

const FormItem = Form.Item;
class InputDetailThird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oddNumbers: 'CL-20170427-0001',
      register: '张三',
      registeUnit: '中船重工XX研究所',
      handler: '李四',
      receiver: '张大伞',
      saveType: '自持',
      saveInfo: '存储中控板',
      getCode: 'dhaskjrq7ikawu47',
      MD5Sure: 'dfjhaye7rw4ekfjeu',
      relativeFile: '无',
      InfoExplain: '无',
    };
  }
  render() {
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
        height="80%"
        title="软件入库登记单"
        visible={this.props.visible}
        onCancel={this.props.handleCancel}
        footer={null}
      >
        <div style={{ height: 500 }}>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件入库登记单</div>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="单号"
              >
                <span>{this.state.oddNumbers}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="入库登记人"
              >
                <span>{this.state.register}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="处理人"
              >
                <span>{this.state.handler}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="登记单位"
              >
                <span>{this.state.registeUnit}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="验收人"
                hasFeedback
              >
                <span>{this.state.receiver}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="存储方式"
              >
                <span>{this.state.saveType}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="存储信息"
                hasFeedback
              >
                <span>{this.state.saveInfo}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="提取码"
                hasFeedback
              >
                <span>{this.state.getCode}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="MD5确认"
                hasFeedback
              >
                <span>{this.state.MD5Sure}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="相关文件"
                hasFeedback
              >
                <span>{this.state.relativeFile}</span>
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem
                {...formItemLayoutDesc}
                label="信息说明"
              >
                <span>{this.state.InfoExplain}</span>
              </FormItem>
            </Col>
          </Row>
        </div>
      </Modal>
    );
  }
}

InputDetailThird.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
};
const WrapInputDetailThird = Form.create()(InputDetailThird);
export default WrapInputDetailThird;
