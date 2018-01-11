import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import { Button, Form, Input, TreeSelect, Select, Row, Upload, Icon, Col, Tree } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const TreeNode = Tree.TreeNode;
class RetireDetailFirst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialData: {
        oddNumbers: 'CL-20170427-0001',
        applicant: '张三',
        applyUnit: '中船重工xx研究所',
        handlePerson: '李四',
        operateSystem: '塞班2.0',
        installPos: '中控板',
        matingSoftware: '无',
        softwareGrade: '内部保密',
        saveType: '自持',
        MD5Value: '259a2d1f68fef2c2b38eddd9b4eb2f10',
        taskSource: 'D578ug工作调度',
        auditor: '张溪搜',
        explain: '无',
        softwareName: '远程目标软件',
        module: '应用软件>C类应用软件>对下声呐定位',
        softwareVersion: 'V.2.4.1',
        installUnit: '中船重工101',
        file: '无',
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
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件退役申请单基本信息</div>
          {this.props.disable ?
            <Row>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="单号"
                >
                  <span>{initialData.oddNumbers}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="申请人"
                >
                  <span>{initialData.applicant}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="申请单位"
                >
                  <span>{initialData.applyUnit}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="处理人"
                >
                  <span>{initialData.handlePerson}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="任务来源"
                >
                  <span>{initialData.taskSource}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="审核人"
                >
                  <span>{initialData.auditor}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="说明"
                >
                  <span>{initialData.explain}</span>
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
            </Row> :
              <Row>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="单号"
                  >
                    <span>{initialData.oddNumbers}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="申请人"
                  >
                    <span>{initialData.applicant}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="申请单位"
                  >
                    <span>{initialData.applyUnit}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="处理人"
                  >
                    <span>{initialData.handlePerson}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="任务来源"
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
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="附件"
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
              </Row>
          }
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>退役软件基本信息</div>
          {this.props.disable ?
            <Row>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="软件名称"
                >
                  <span>{initialData.softwareName}</span>
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="谱系"
                >
                  <span>{initialData.module}</span>
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="软件版本"
                >
                  <span>{initialData.softwareVersion}</span>
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="软件安装单位"
                >
                  <span>{initialData.installUnit}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="软件模块关系"
                >
                  {getFieldDecorator('moduleRelation', {
                    rules: [
                      { message: '请输入软件模块关系' },
                    ],
                  })(
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
                    )}
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
                  <FormItem
                    {...formItemLayout}
                    label="软件名称"
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
                  <FormItem
                    {...formItemLayout}
                    label="软件单元版本"
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
                  <FormItem
                    {...formItemLayout}
                    label="软件安装单位"
                  >
                    {getFieldDecorator('installUnit', {
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
                    label="软件模块关系"
                  >
                    {getFieldDecorator('moduleRelation', {
                      rules: [
                        { message: '请输入软件模块关系' },
                      ],
                    })(
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
                      )}
                  </FormItem>
                </Col>
              </Row>
          }
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>退役软件描述信息</div>
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

RetireDetailFirst.propTypes = {
  form: PropTypes.object.isRequired,
  disable: PropTypes.bool.isRequired,
};
const WrapRetireDetailFirst = Form.create()(RetireDetailFirst);
export default WrapRetireDetailFirst;
