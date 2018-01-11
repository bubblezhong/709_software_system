import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import { Form, Row, Col, Modal } from 'antd';

const FormItem = Form.Item;
// const Option = Select.Option;
class InputDetailFirst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handleActionvalue: '',
      initialValue: {
        handler: '张三',
        operateAction: '通过',
        register: '李四',
        file: '无',
        softwareDescription: '无',
        showInputFirst: true,
      },
    };
  }
  RadioOnChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({ handleActionvalue: e.target.value });
  }
  changeshow = () => {
    this.setState({ showInputFirst: false });
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
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>入库审核处理</div>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="处理动作"
              >
                <span>{initialValue.handler}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="处理动作"
              >
                <span>{initialValue.operateAction}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="入库登记员"
              >
                <span>{initialValue.register}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="相关文件"
              >
                <span>{initialValue.file}</span>
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem
                {...formItemLayoutDesc}
                label="软件描述"
              >
                <span>{initialValue.softwareDescription}</span>
              </FormItem>
            </Col>
          </Row>
        </div>
      </Modal>
    );
  }
}

InputDetailFirst.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
};
// const WrapInputDetailFirst = Form.create()(InputDetailFirst);
export default InputDetailFirst;
