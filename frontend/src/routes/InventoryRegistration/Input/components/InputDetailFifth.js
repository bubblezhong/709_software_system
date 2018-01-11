import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import { Form, Row, Col } from 'antd';

// const TreeNode = Tree.TreeNode;
const FormItem = Form.Item;
class InputDetailFirst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { processData } = this.props;
    console.log('processData5', processData);
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const formItemLayoutDesc = {
      labelCol: { span: 3 },
      wrapperCol: { span: 19 },
    };
    return (
      <div className="InputDetail_stepsContent">
        <Form onSubmit={this.handleSubmit} style={{ width: '80%', marginLeft: '10%', minHeight: 900 }}>
          <Row>
            <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>入库软件基本信息</div>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="软件谱系"
              >
                <span>{processData.applicantInfo.MODULE_NAME}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="软件名称"
              >
                <span>{processData.applicantInfo.SW_NAME}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="软件单元名称"
              >
                <span>{processData.applicantInfo.CATEGROY_NAME}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="软件单元版本"
              >
                <span>{processData.applicantInfo.version}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="软件单元等级"
              >
                <span>{processData.applicantInfo.softwareGrade}</span>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>入库软件描述信息</div>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="存储方式"
              >
                <span>{processData.applicantInfo.stroageStyle === '0' ? '自持' : '网络存储'}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="代码规模"
              >
                <span>{processData.applicantInfo.codeSize}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="操作系统"
              >
                <span>{processData.applicantInfo.system}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="MD5校验值"
              >
                <span>{processData.applicantInfo.MD5}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="典型安装位置"
              >
                <span>{processData.applicantInfo.installPos}</span>
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem
                {...formItemLayoutDesc}
                label="版本描述"
              >
                <span>{processData.applicantInfo.description}</span>
              </FormItem>
            </Col>
          </Row>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>入库软件申请信息</div>
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
                label="申请人"
              >
                <span>{processData.applicantInfo.applicantName}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="任务来源"
              >
                <span>{processData.applicantInfo.taskSource}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="附件"
              >
                <span>{processData.applicantInfo.adjunct}</span>
              </FormItem>
            </Col>
          </Row>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>入库软件登记信息</div>
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
                <span>{processData.reviewerInfo.registerUnit}</span>
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
                label="信息说明"
              >
                <span>{processData.registrantInfo.infoRemark}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="附件"
              >
                <span>{processData.registrantInfo.registrantFile}</span>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

InputDetailFirst.propTypes = {
  processData: PropTypes.object.isRequired,
};
const WrapInputDetailFirst = Form.create()(InputDetailFirst);
export default WrapInputDetailFirst;
