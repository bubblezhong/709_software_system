import React, { PropTypes } from 'react';
import { Modal, Row, Col, Form } from 'antd';

const FormItem = Form.Item;
class OperationRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialData: {
        oddNumbers: 'CL-20170427-0001',
        applicant: '张三',
        applyUnit: '中船重工xx研究所',
        handlePerson: '李四',
        takeSource: 'DD201705855782调度任务',
        checker: '王五',
        explain: '无',
        softwareName: '指示软件',
        unitName: '策略生成',
        module: '应用软件>参数测量软件>定位软件',
        unitVersion: 'V3.0.8',
        grade: '保密',
        operateSystem: 'linux',
        installPos: '中空板',
        matingSoftware: '无',
        savePos: '中空板',
        codeScale: '677k',
        MD5Value: 'fsuah7384hkearjw8573',
        saveType: '自持',
        file: '无',
        softwareDescription: '无',
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
              hasFeedback
            >
              <span>{initialData.oddNumbers}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="申请人"
              hasFeedback
            >
              <span>{initialData.applicant}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="申请单位"
              hasFeedback
            >
              <span>{initialData.applyUnit}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="处理人"
              hasFeedback
            >
              <span>{initialData.handlePerson}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="任务来源"
              hasFeedback
            >
              <span>{initialData.takeSource}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="审核人"
              hasFeedback
            >
              <span>{initialData.checker}</span>
            </FormItem>
          </Col>
          <Col span={24}>
            <FormItem
              {...formItemLayoutDesc}
              label="说明"
            >
              <span>{initialData.explain}</span>
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
              <span>{initialData.module}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="软件名称"
              hasFeedback
            >
              <span>{initialData.softwareName}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="软件单元名称"
              hasFeedback
            >
              <span>{initialData.unitName}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="软件单元版本"
            >
              <span>{initialData.unitVersion}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="软件单元等级"
            >
              <span>{initialData.grade}</span>
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
              <span>{initialData.operateSystem}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="典型安装位置"
            >
              <span>{initialData.installPos}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="代码规模"
            >
              <span>{initialData.codeScale}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="MD5校验值"
            >
              <span>{initialData.MD5Value}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="存储方式"
            >
              <span>{initialData.saveType}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="附件"
            >
              <span>{initialData.file}</span>
            </FormItem>
          </Col>
          <Col span={24}>
            <FormItem
              {...formItemLayoutDesc}
              label="软件描述"
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
