import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import { Form, Row, Col, Modal } from 'antd';

const FormItem = Form.Item;
// const Option = Select.Option;
class InputDetailSecondRead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handleActionvalue: '',
      initialValue: {},
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
    // const { initialValue } = this.state;
    const { reviewerInfo } = this.props;
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
                label="处理人"
              >
                <span>{reviewerInfo.reviewerName}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="处理动作"
              >
                <span>{reviewerInfo.status}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="入库登记员"
              >
                <span>{reviewerInfo.registrantName}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="相关文件"
              >
                <span>{reviewerInfo.reviewFile}</span>
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem
                {...formItemLayoutDesc}
                label="说明"
              >
                <span>{reviewerInfo.remark}</span>
              </FormItem>
            </Col>
          </Row>
        </div>
      </Modal>
    );
  }
}

InputDetailSecondRead.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
  reviewerInfo: PropTypes.object.isRequired,
};
// const WrapInputDetailSecondRead = Form.create()(InputDetailSecondRead);
export default InputDetailSecondRead;
