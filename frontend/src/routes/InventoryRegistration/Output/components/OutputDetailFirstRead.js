import React, { PropTypes } from 'react';
import { Modal, Row, Col, Form, Tree } from 'antd';

const FormItem = Form.Item;
const TreeNode = Tree.TreeNode;
class OperationRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialData: {
        operateSystem: '塞班2.0',
        installPos: '中控板',
        matingSoftware: '无',
        softwareGrade: '内部保密',
        saveType: '自持',
        MD5Value: '259a2d1f68fef2c2b38eddd9b4eb2f10',
        oddNumbers: 'CL-20170427-0001',
        applicant: '张三',
        applyUnit: '中船重工xx研究所',
        handlePerson: '李四',
        taskSource: '中船重工xx研究所',
        auditor: '李四',
        file: '无',
        explain: '软件出库申请软件出库申请软件出库申请软件出库申请软件出库申请软件出库申请软件出库申请软件出库申请',
        softwareName: '指示软件',
        ancestary: '应用软件>C类应用软件>对下声呐定位',
        softwareVersion: 'v3.4.1',
        installUnit: '中船重工xx研究所',
        treeData: [{
          label: '声呐定位指示软件',
          value: '0-0',
          key: '0-0',
          children: [{
            label: '优化模块',
            value: '0-0-0',
            key: '0-0-0',
          }],
        }, {
          label: '优化模块',
          value: '0-1',
          key: '0-1',
          children: [{
            label: '目标指示模块',
            value: '0-1-0',
            key: '0-1-0',
          }, {
            label: '声呐控制',
            value: '0-1-1',
            key: '0-1-1',
          }, {
            label: '总体模块',
            value: '0-1-2',
            key: '0-1-2',
          }],
        }],
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
        <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件出库申请单基本信息</div>
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
              <span>{initialData.taskSource}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="审核人"
              hasFeedback
            >
              <span>{initialData.auditor}</span>
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
              label="说明"
            >
              <span>{initialData.explain}</span>
            </FormItem>
          </Col>
        </Row>
        <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>出库软件基本信息</div>
        <Row>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="软件名称"
              hasFeedback
            >
              <span>{initialData.softwareName}</span>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="软件版本"
            >
              <span>{initialData.softwareVersion}</span>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="安装单位"
            >
              <span>{initialData.installUnit}</span>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="谱系"
            >
              <span>{initialData.ancestary}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="软件模块关系"
            >
              <Tree
                style={{ marginTop: -15 }}
                showLine
                defaultExpandedKeys={['0-0-0']}
                onSelect={this.onSelect}
              >
                <TreeNode title="远程目标软件" key="0-0">
                  <TreeNode title="模块优化" key="0-0-0">
                    <TreeNode title="模块优化" key="0-0-0-0" />
                  </TreeNode>
                  <TreeNode title="目标指示模块" key="0-0-1">
                    <TreeNode title="声呐控制" key="0-0-1-0" />
                  </TreeNode>
                  <TreeNode title="总体生成" key="0-0-2">
                    <TreeNode title="leaf" key="0-0-2-0" />
                    <TreeNode title="leaf" key="0-0-2-1" />
                  </TreeNode>
                  <TreeNode title="策略生成" key="0-0-3">
                    <TreeNode title="leaf" key="0-0-3-0" />
                    <TreeNode title="leaf" key="0-0-3-1" />
                  </TreeNode>
                </TreeNode>
              </Tree>
            </FormItem>
          </Col>
        </Row>
        <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>出库软件描述信息</div>
        <Row>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="操作系统"
              hasFeedback
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
              label="配套软件"
            >
              <span>{initialData.matingSoftware}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="软件等级"
              hasFeedback
            >
              <span>{initialData.softwareGrade}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="存储方式"
              hasFeedback
            >
              <span>{initialData.saveType}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="MD5校验值"
              hasFeedback
            >
              <span>{initialData.MD5Value}</span>
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
