import React, { PropTypes } from 'react';
import { Button, Form, Input, TreeSelect, Select, Row, Upload, Icon, Col } from 'antd';
// import DeploymentRequestDetailFirstDisable from './DeploymentRequestDetailFirstDisable';

const FormItem = Form.Item;
class DeploymentRequestDetailFirst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialData: {
        oddNumbers: 'CL-20170427-0001',
        applicant: '张三',
        applyUnit: '中船重工xx研究所',
        handlePerson: '李四',
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
        ancestaryTreeData: [{
          label: '应用软件',
          value: '0-0',
          key: '0-0',
          children: [{
            label: '参数测量软件',
            value: '0-0-1',
            key: '0-0-1',
          }, {
            label: '参数测量软件',
            value: '0-0-2',
            key: '0-0-2',
          }],
        }, {
          label: '参数测量软件',
          value: '0-1',
          key: '0-1',
        }],
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
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const formItemLayoutDesc = {
      labelCol: { span: 3 },
      wrapperCol: { span: 19 },
    };
    console.log(this.props.disable);
    return (
      <div className="InputDetail_stepsContent" style={{ height: 660 }}>
        <Form onSubmit={this.handleSubmit} style={{ width: '80%', marginLeft: '10%', minHeight: 900 }}>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件调配申请单基本信息</div>
          {this.props.disable ?
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
            </Row> :
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
                    {getFieldDecorator('taskSource', {
                      rules: [{ required: true, message: 'Please select your developUnit!' }],
                    })(
                      <Select>
                        <Option value="DD2017051102112升级完善任务">DD2017051102112升级完善任务</Option>
                        <Option value="DD2017051102112调度任务">DD2017051102112调度任务</Option>
                        <Option value="03-yy中队指挥所">03-yy中队指挥所</Option>
                        <Option value="04-yy中队指挥所">04-yy中队指挥所</Option>
                        <Option value="05-yy中队指挥所">05-yy中队指挥所</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="选择审核人"
                    hasFeedback
                  >
                    {getFieldDecorator('applyUnit', {
                      rules: [{ required: true, message: 'Please select your developUnit!' }],
                    })(
                      <Select>
                        <Option value="张三">张三</Option>
                        <Option value="李四">李四</Option>
                        <Option value="王五">王五</Option>
                        <Option value="张三1">张三1</Option>
                        <Option value="王五2">王五2</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="附件"
                    hasFeedback
                  >
                    {getFieldDecorator('represent_install_pos', {
                      rules: [{ required: true, message: '请点击上传附件' }],
                    })(
                      <Upload>
                        <Button>
                          <Icon type="upload" />点击上传
                        </Button>
                      </Upload>
                    )}
                  </FormItem>
                </Col>
                <Col span={24}>
                  <FormItem
                    {...formItemLayoutDesc}
                    label="说明"
                  >
                    {getFieldDecorator('softwareDescription', {
                      rules: [{ required: true, message: '请输入相关说明' }],
                    })(
                      <Input type="textarea" rows={10} />
                    )}
                  </FormItem>
                </Col>
              </Row>
          }
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>调配软件基本信息</div>
          {this.props.disable ?
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
              <Col span={24}>
                <FormItem
                  {...formItemLayoutDesc}
                  label="软件描述"
                >
                  <span>{initialData.explain}</span>
                </FormItem>
              </Col>
            </Row> :
              <Row>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="谱系"
                    hasFeedback
                  >
                    {getFieldDecorator('ancestary', {
                      rules: [{ required: true, message: '请输入谱系!' }],
                    })(
                      <TreeSelect
                        style={{ width: 356 }}
                        value={initialData.value}
                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                        treeData={initialData.ancestaryTreeData}
                        treeDefaultExpandAll
                        onChange={this.onChange}
                      />
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="软件名称"
                    hasFeedback
                  >
                    {getFieldDecorator('softwarename', {
                      rules: [{
                        required: true, message: '请输入软件名称!',
                      }],
                    })(
                      <Select>
                        <Option value="定位软件">定位软件1</Option>
                        <Option value="指示软件">指示软件</Option>
                        <Option value="导航软件">导航软件</Option>
                        <Option value="引导软件">引导软件</Option>
                        <Option value="扫描软件">扫描软件</Option>
                        <Option value="策略生成">策略生成</Option>
                        <Option value="定位计算">定位计算</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
                <Col span={24}>
                  <FormItem
                    {...formItemLayoutDesc}
                    label="软件描述"
                  >
                    {getFieldDecorator('softwareDescription', {
                      rules: [{ required: true, message: '请输入相关说明' }],
                    })(
                      <Input type="textarea" rows={10} />
                    )}
                  </FormItem>
                </Col>
              </Row>
          }
        </Form>
      </div>
    );
  }
}

DeploymentRequestDetailFirst.propTypes = {
  form: PropTypes.object.isRequired,
  disable: PropTypes.bool.isRequired,
};
const WrapDeploymentRequestDetailFirst = Form.create()(DeploymentRequestDetailFirst);
export default WrapDeploymentRequestDetailFirst;
