import React, { PropTypes } from 'react';
import { Modal, Row, Col, Form } from 'antd';

const FormItem = Form.Item;
class OperationRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialData: {
      },
    };
  }
  // componentWillMount() {
  //   console.log(this.props.processData);
  //   this.setState({ initialData: this.props.processData });
  // }
  render() {
    // const { initialData } = this.state;
    const { processData } = this.props;
    console.log('processData1', processData);
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
        style={{ top: 10 }}
        title="软件入库申请单"
        visible={this.props.visible}
        onCancel={this.props.handleCancel}
        footer={null}
      >
        <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件入库申请单基本信息</div>
        <Row>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="单号"
            >
              <span>{processData.oddNum}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="申请人"
            >
              <span>{processData.applicant}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="申请单位"
            >
              <span>{processData.applyUnit}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="任务来源"
            >
              <span>{processData.taskSource}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="审核人"
            >
              <span>{processData.reviewerName}</span>
            </FormItem>
          </Col>
          <Col span={24}>
            <FormItem
              {...formItemLayoutDesc}
              label="说明"
            >
              <span>{processData.remark}</span>
            </FormItem>
          </Col>
        </Row>
        <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件单元基本信息</div>
        <Row>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="谱系"
            >
              <span>{processData.MODULE_NAME}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="软件名称"
            >
              <span>{processData.SW_NAME}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="软件单元名称"
            >
              <span>{processData.CATEGROY_NAME}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="软件单元版本"
            >
              <span>{processData.version}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="软件单元等级"
            >
              <span>{processData.softwareGrade}</span>
            </FormItem>
          </Col>
        </Row>
        <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件单元描述信息</div>
        <Row>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="操作系统"
            >
              <span>{processData.system}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="典型安装位置"
            >
              <span>{processData.installPos}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="代码规模"
            >
              <span>{processData.codeSize}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="MD5校验值"
            >
              <span>{processData.MD5}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="存储方式"
            >
              <span>{processData.stroageStyle === '0' ? '自持' : '网络存储' }</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="附件"
            >
              <span>{processData.adjunct}</span>
            </FormItem>
          </Col>
          <Col span={24}>
            <FormItem
              {...formItemLayoutDesc}
              label="单元版本描述"
            >
              <span>{processData.description}</span>
            </FormItem>
          </Col>
        </Row>
      </Modal>
    );
  }
}
OperationRecord.propTypes = {
  processData: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
};
export default OperationRecord;
