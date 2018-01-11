import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import { Form, Row, Col, Modal } from 'antd';
// import InputDetailFirstRead from './InputDetailFirstRead';
// import InputDetailSecondRead from './InputDetailSecondRead';

const FormItem = Form.Item;
class InputDetailThird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { processData } = this.props;
    console.log('processData3,', processData);
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
                <span>{processData.applicantInfo.oddNum}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="入库登记人"
              >
                <span>{processData.reviewerInfo.registrantName}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="登记单位"
              >
                <span>{processData.reviewerInfo.registrantUnit}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="验收人"
              >
                <span>{processData.registrantInfo.acceptName}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="存储方式"
              >
                <span>{processData.applicantInfo.stroageStyle === '0' ? '自持' : '网络存储' }</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="存储信息"
              >
                <span>{processData.registrantInfo.saveInfo}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="提取码"
              >
                <span>{processData.registrantInfo.password}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="MD5确认"
              >
                <span>{processData.applicantInfo.MD5}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="相关文件"
              >
                <span>{processData.registrantInfo.registrantFile}</span>
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem
                {...formItemLayoutDesc}
                label="信息说明"
              >
                <span>{processData.registrantInfo.infoRemark}</span>
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
  processData: PropTypes.object.isRequired,
};
const WrapInputDetailThird = Form.create()(InputDetailThird);
export default WrapInputDetailThird;
