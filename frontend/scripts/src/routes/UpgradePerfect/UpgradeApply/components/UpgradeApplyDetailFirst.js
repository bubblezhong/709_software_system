import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Table, Button, Form, Input, TreeSelect, Select, Row, Upload, Icon, Col } from 'antd';
// import SupportRequestDetailFirstDisable from './SupportRequestDetailFirstDisable';

const FormItem = Form.Item;
const Search = Input.Search;
const ButtonGroup = Button.Group;
class UpgradeApplyDetailFirst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialData: {
        oddNumbers: 'CL-20170427-0001',
        applicant: '张三',
        applyUnit: '中船重工xx研究所',
        applyTitle: '李四',
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
        handlePerson: '李四',
        explain: '无',
        softwareName: '指示软件',
        unitName: '策略生成',
        category: '应用软件>参数测量软件>定位软件',
        module: '总体模块',
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
      dataSource: [{
        key: '1',
        number: 'CL-20170427-0001',
        title: '调配登记任务',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '2',
        number: 'CL-20170427-0001',
        title: '调配登记任务',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '3',
        number: 'CL-20170427-0001',
        title: '调配登记任务',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '4',
        number: 'CL-20170427-0001',
        title: '调配登记任务',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '5',
        number: 'CL-20170427-0001',
        title: '调配登记任务',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '6',
        number: 'CL-20170427-0001',
        title: '调配登记任务',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '7',
        number: 'CL-20170427-0001',
        title: '调配登记任务',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '8',
        number: 'CL-20170427-0001',
        title: '调配登记任务',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '9',
        number: 'CL-20170427-0001',
        title: '调配登记任务',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }],
    };
  }
  render() {
    const { initialData } = this.state;
    const { getFieldDecorator } = this.props.form;
    const columns = [{
      title: '编号',
      dataIndex: 'number',
    }, {
      title: '汇总标题',
      dataIndex: 'title',
    }, {
      title: '汇总单位',
      dataIndex: 'unit',
    }, {
      title: '汇总人',
      dataIndex: 'applicant',
    }, {
      title: '汇总时间',
      dataIndex: 'time',
    }, {
      title: '操作',
      dataIndex: 'operate',
      render: (text, row) => <Link to={`/main/UpgradePerfect/UpgradeSummaryDetail/${row.key}`}>{text}</Link>,
    }];
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
        <Form onSubmit={this.handleSubmit} style={{ width: '80%', marginLeft: '10%', paddingBottom: 50 }}>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>升级完善申请单基本信息</div>
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
                  label="申请标题"
                >
                  <span>{initialData.applyTitle}</span>
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
                  <Link>{initialData.takeSource}</Link>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="审核人"
                >
                  <span>{initialData.checker}</span>
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
                  label="说明"
                >
                  <span>{initialData.explain}</span>
                </FormItem>
              </Col>
              <Col span={24}>
                <FormItem
                  {...formItemLayoutDesc}
                  label="申请原因"
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
                    label="申请标题"
                  >
                    <Input />
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
                    label="申请原因"
                  >
                    {getFieldDecorator('applyReason', {
                      rules: [{ required: true, message: '请输入相关申请原因' }],
                    })(
                      <Input type="textarea" rows={10} />
                    )}
                  </FormItem>
                </Col>
                <Col span={24}>
                  <FormItem
                    {...formItemLayoutDesc}
                    label="说明"
                  >
                    {getFieldDecorator('description', {
                      rules: [{ required: true, message: '请输入相关说明' }],
                    })(
                      <Input type="textarea" rows={10} />
                    )}
                  </FormItem>
                </Col>
              </Row>
          }
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>升级完善软件基本信息</div>
          {this.props.disable ?
            <Row>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="软件名称"
                >
                  <span>{initialData.softwareName}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="谱系"
                >
                  <span>{initialData.category}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="软件模块"
                >
                  <span>{initialData.module}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label=""
                />
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
                    label="软件单元"
                  >
                    {getFieldDecorator('module', {
                      rules: [{ required: true, message: '请输入软件单元!' }],
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
              </Row>
          }
        </Form>
        {this.props.disable &&
          <div style={{ fontSize: 16, padding: 10, width: '80%', marginLeft: '10%', border: '1px solid #ccc', marginTop: 20 }}>
            <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', paddingLeft: 20 }}>
              <span style={{ lineHeight: 50 }}>升级完善汇总信息</span>
              <div style={{ overflow: 'hidden', display: 'inline-block', position: 'relative', top: 5, width: '90%', marginLeft: 30, verticalAlign: 'top' }}>
                <ButtonGroup style={{ float: 'left' }}>
                  <Button icon="reload" style={{ width: 110, height: 40, fontSize: 14, backgroundColor: '#edf7fc' }}>刷新</Button>
                  <Button icon="file-add" style={{ width: 110, height: 40, fontSize: 14, backgroundColor: '#edf7fc' }}>添加记录</Button>
                  <Button icon="delete" style={{ width: 110, height: 40, fontSize: 14, backgroundColor: '#edf7fc' }}>删除</Button>
                </ButtonGroup>
                <Search
                  placeholder="搜索软件名称、申请单位等"
                  style={{ width: 380, height: 40, float: 'right', backgroundColor: '#edf7fc' }}
                  onSearch={value => console.log(value)}
                />
              </div>
            </div>
            <Table
              style={{ marginLeft: '3%', width: '90%' }}
              columns={columns}
              dataSource={this.state.dataSource}
              pagination={{ pageSize: 10 }}
              bordered
            />
          </div>
        }
      </div>
    );
  }
}

UpgradeApplyDetailFirst.propTypes = {
  form: PropTypes.object.isRequired,
  disable: PropTypes.bool.isRequired,
};
const WrapUpgradeApplyDetailFirst = Form.create()(UpgradeApplyDetailFirst);
export default WrapUpgradeApplyDetailFirst;
