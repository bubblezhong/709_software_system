import React, { PropTypes } from 'react';
import { Button, Form, Input, Select, Row, Radio, Upload, Icon, Col, TreeSelect } from 'antd';
// import InputDetailFirstDisable from './InputDetailFirstDisable';

const FormItem = Form.Item;
// const TreeNode = Tree.TreeNode;
const Option = Select.Option;
// const SHOW_PARENT = TreeSelect.SHOW_PARENT;
class InputDetailFirst extends React.Component {
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
    console.log(this.props.disable);
    return (
      <div className="InputDetail_stepsContent">
        <Form onSubmit={this.handleSubmit} style={{ width: '80%', marginLeft: '10%', minHeight: 900 }}>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件入库申请单基本信息</div>
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
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件单元基本信息</div>
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
            </Row> :
              <Row>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="谱系"
                  >
                    {getFieldDecorator('ancestary', {
                      initialValue: initialData.ancestary,
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
                  >
                    {getFieldDecorator('softwarename', {
                      rules: [{
                        required: true, message: '请选择软件名称!',
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
                <Col style={{ height: 55.8 }} span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="软件单元名称"
                  >
                    {getFieldDecorator('categoryName', {
                      rules: [{
                        required: true, message: '请输入软件单元名称!',
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
                    label="软件单元版本"
                  >
                    {getFieldDecorator('categoryVersion', {
                      rules: [{ type: 'array', required: true, message: '请输入谱系!' }],
                    })(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="软件单元等级"
                  >
                    {getFieldDecorator('softwareGrade', {
                      rules: [{ required: true, message: '请输入软件等级!' }],
                    })(
                      <Select>
                        <Option value="公开">公开</Option>
                        <Option value="内部公开">内部公开</Option>
                        <Option value="保密">保密</Option>
                        <Option value="机密">机密</Option>
                        <Option value="秘密">秘密</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
              </Row>
          }
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件单元描述信息</div>
          {this.props.disable ?
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
            </Row> :
              <Row>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="操作系统"
                  >
                    {getFieldDecorator('OperateSystem', {
                      rules: [{ required: true, message: '请输入典型操作系统！' }],
                    })(
                      <Select>
                        <Option value="radhat">radhat</Option>
                        <Option value="linux">linux</Option>
                        <Option value="centOS">centOS</Option>
                        <Option value="Windows">Windows</Option>
                        <Option value="塞班">塞班</Option>
                        <Option value="Android">Android</Option>
                        <Option value="ubuntu">ubuntu</Option>
                        <Option value="其他">其他</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="典型安装位置"
                  >
                    {getFieldDecorator('select-multiple', {
                      rules: [
                        { required: true, message: '请输入典型安装位置!', type: 'array' },
                      ],
                    })(
                      <Select mode="multiple">
                        <Option value="中控板">中控板</Option>
                        <Option value="交叉控制板">交叉控制板</Option>
                        <Option value="指挥中心">指挥中心</Option>
                        <Option value="其他">其他</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="代码规模"
                  >
                    {getFieldDecorator('codeSize', {
                      rules: [{ required: true, message: '请输入代码规模' }],
                    })(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="MD5校验值"
                  >
                    {getFieldDecorator('MD5Value', {
                      rules: [{ required: true, message: '请输入MD5校验值' }],
                    })(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="存储方式"
                  >
                    {getFieldDecorator('saveType', {
                      rules: [{ required: true, message: '请输入存储方式' }],
                    })(
                      <Radio.Group>
                        <Radio value="自持">自持</Radio>
                        <Radio value="网络存储">网络存储</Radio>
                      </Radio.Group>
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="附件"
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
                    label="软件描述"
                  >
                    {getFieldDecorator('softwareDescription', {
                      rules: [{ required: true, message: '请输入软件描述' }],
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

InputDetailFirst.propTypes = {
  form: PropTypes.object.isRequired,
  disable: PropTypes.bool.isRequired,
};
const WrapInputDetailFirst = Form.create()(InputDetailFirst);
export default WrapInputDetailFirst;
