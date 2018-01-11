import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import { Button, Form, Input, Select, Row, Upload, Icon, Col, TreeSelect, Tree } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const TreeNode = Tree.TreeNode;
const SHOW_PARENT = TreeSelect.SHOW_PARENT;
class OutputDetailFirst extends React.Component {
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
      },
    };
  }
  render() {
    const { initialData } = this.state;
    const tProps = {
      treeData: this.state.treeData,
      multiple: true,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
    };
    const { getFieldDecorator } = this.props.form;
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
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件出库申请单基本信息</div>
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
                    {getFieldDecorator('auditor', {
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
                    {getFieldDecorator('file', {
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
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>出库软件基本信息</div>
          {this.props.disable ?
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
            </Row> :
              <Row>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="谱系"
                  >
                    {getFieldDecorator('ancestary', {
                      rules: [{ required: true, message: '请输入谱系!' }],
                    })(
                      <TreeSelect
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
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="软件模块关系"
                  >
                    {getFieldDecorator('moduleRelation', {
                      rules: [
                        { required: true, message: '请输入软件模块关系', type: 'array' },
                      ],
                    })(
                      <TreeSelect {...tProps} />
                      )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="软件版本"
                  >
                    {getFieldDecorator('softwareVersion', {
                      rules: [{ required: true, message: '请选择软件版本!' }],
                    })(
                      <Select>
                        <Option value="V3.1.1.1">V3.1.1.1</Option>
                        <Option value="V.2.7.1.1">V.2.7.1.1</Option>
                        <Option value="V.2.1.2.3">V.2.1.2.3</Option>
                        <Option value="V.4.1.1.1">V.4.1.1.1</Option>
                        <Option value="V.3.2.1.1">V.3.2.1.1</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="安装单位"
                  >
                    {getFieldDecorator('installUnit', {
                      rules: [{ type: 'array', required: true, message: '请输入软件等级!' }],
                    })(
                      <Select mode="multiple" >
                        <Option value="xx中队指挥所">xx中队指挥所</Option>
                        <Option value="yy中队指挥所">yy中队指挥所</Option>
                        <Option value="zz大队指挥所">zz大队指挥所</Option>
                        <Option value="中船重工709">中船重工709</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
              </Row>
          }
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
                {getFieldDecorator('select-multiple', {
                  rules: [
                    { message: '请输入典型安装位置!' },
                  ],
                })(
                  <span>{initialData.installPos}</span>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="配套软件"
              >
                {getFieldDecorator('matingSoftware', {
                  rules: [
                    { message: '请输入配套软件' },
                  ],
                })(
                  <span>{initialData.matingSoftware}</span>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="软件等级"
                hasFeedback
              >
                {getFieldDecorator('softwareGrade', {
                  rules: [{
                    message: '请输入软件等级',
                  }],
                })(
                  <span>{initialData.softwareGrade}</span>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="存储方式"
                hasFeedback
              >
                {getFieldDecorator('saveType', {
                  rules: [{ message: '请输入代码规模' }],
                })(
                  <span>{initialData.saveType}</span>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="MD5校验值"
                hasFeedback
              >
                {getFieldDecorator('MD5Value', {
                  rules: [{ message: '请输入MD5校验值' }],
                })(
                  <span>{initialData.MD5Value}</span>
                )}
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

OutputDetailFirst.propTypes = {
  disable: PropTypes.bool.isRequired,
  form: PropTypes.object.isRequired,
};
const WrapOutputDetailFirst = Form.create()(OutputDetailFirst);
export default WrapOutputDetailFirst;
