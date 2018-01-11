import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Modal, Button, Form, Input, Select, Row, Upload, Icon, Col, TreeSelect, Table } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const Search = Input.Search;
const ButtonGroup = Button.Group;
// const TreeNode = TreeSelect.TreeNode;
class UpgradeSummaryDetailEdit extends React.Component {
  constructor(props) {
    super(props);
    let id = 0;
    console.log(this.props);
    if (this.props.params.id) {
      id = this.props.params.id;
    }
    this.state = {
      id,
      showRecord: false,
      initialDataDefault: {
        number: 'CL-20170427-0001',
        register: '张三',
        unit: '中船重工xx研究所',
        status: '已接受',
      },
      initialData: {
        title: '',
        ancestary: [],
        softwarename: '',
        grade: '',
        Description: '',
        expectResult: '',
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
      dataSource: [{
        key: '1',
        number: 'CL-20170427-0001',
        title: '应用软件问题汇总',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '2',
        number: 'CL-20170427-0001',
        title: '应用软件问题汇总',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '3',
        number: 'CL-20170427-0001',
        title: '应用软件问题汇总',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '4',
        number: 'CL-20170427-0001',
        title: '应用软件问题汇总',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '5',
        number: 'CL-20170427-0001',
        title: '应用软件问题汇总',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '6',
        number: 'CL-20170427-0001',
        title: '应用软件问题汇总',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '7',
        number: 'CL-20170427-0001',
        title: '应用软件问题汇总',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '8',
        number: 'CL-20170427-0001',
        title: '应用软件问题汇总',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '9',
        number: 'CL-20170427-0001',
        title: '应用软件问题汇总',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }],
    };
  }
  componentWillMount() {
    if (this.props.location.pathname === '/main/SoftwareDaily/RegistrationNew') {
      this.setState({ initialData: {} });
    }
  }
  changeShow = () => {
    console.log(this.state.showRecord);
    if (this.state.showRecord) {
      this.setState({ showRecord: false });
    } else {
      this.setState({ showRecord: true });
    }
  }
  render() {
    const { initialData, initialDataDefault } = this.state;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const formItemLayoutDesc = {
      labelCol: { span: 3 },
      wrapperCol: { span: 19 },
    };
    let toWhere = '';
    if (this.props.params.id) {
      toWhere = `/main/UpgradePerfect/UpgradeSummaryDetail/${this.props.params.id}`;
      console.log('toWhere', toWhere);
    } else {
      toWhere = '/main/UpgradePerfect/UpgradeSummary';
      console.log('toWhere', toWhere);
    }
    const columns = [{
      title: '上报编号',
      dataIndex: 'number',
    }, {
      title: '上报标题',
      dataIndex: 'title',
    }, {
      title: '上报单位',
      dataIndex: 'unit',
    }, {
      title: '上报人',
      dataIndex: 'applicant',
    }, {
      title: '上报时间',
      dataIndex: 'time',
    }, {
      title: '操作',
      dataIndex: 'operate',
      render: (text, row) => <Link to={`/main/UpgradePerfect/UpgradeRequestDetail/${row.key}`}>{text}</Link>,
    }];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
      }),
    };
    const Title = (
      <div>
        <span>技术保11障申请记录</span>
        <Button onClick={() => { this.changeShow(); }} style={{ diaplay: 'inline-block', width: 110, height: 40, fontSize: 14, margin: '0 30px' }}>取消</Button>
        <Button type="primary" style={{ diaplay: 'inline-block', width: 110, height: 40, fontSize: 14 }}>确认</Button>
        <Search
          style={{ width: 380, height: 40, float: 'right' }}
        />
      </div>
    );
    return (
      <div>
        <div style={{ overflow: 'auto', marginBottom: 20 }}>
          <Link to={toWhere} className="SoftwareInfoDetail_return">
            <Button style={{ width: 85, height: 30 }}>
              <span style={{ marginRight: 8 }}>&lt;</span>
              <span>返回</span>
            </Button>
          </Link>
          <Link to={`/main/UpgradePerfect/UpgradeSummaryDetail/${this.state.id}`}>
            <Button className="SoftwareInfoDetail_reflash">取消</Button>
          </Link>
          <Link to={`/main/UpgradePerfect/UpgradeSummaryDetail/${this.state.id}`}>
            <Button type="primary" className="SoftwareInfoDetail_reflash">完成</Button>
          </Link>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '5%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>编辑</div>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="编号"
              >
                <span>{initialDataDefault.number}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="日常登记标题"
              >
                {getFieldDecorator('title', {
                  initialValue: initialData.title,
                  rules: [{
                    required: true, message: '请输入日常登记标题!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="汇总人"
              >
                <span>{initialDataDefault.register}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="汇总单位"
              >
                <span>{initialDataDefault.unit}</span>
              </FormItem>
            </Col>
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
                    style={{ width: 467 }}
                    value={this.state.value}
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
                  initialValue: initialData.softwarename,
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
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="状态"
              >
                <span>{initialDataDefault.status}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="需求等级"
              >
                {getFieldDecorator('grade', {
                  initialValue: initialData.grade,
                  rules: [{
                    required: true, message: '请选择需求等级!',
                  }],
                })(
                  <Select>
                    <Option value="易用性">定易用性</Option>
                    <Option value="一般">一般</Option>
                    <Option value="重要">重要</Option>
                    <Option value="严重">严重</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="附件信息"
              >
                {getFieldDecorator('file', {
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
                label="描述信息"
              >
                {getFieldDecorator('Description', {
                  initialValue: initialData.softwareDescription,
                })(
                  <Input type="textarea" rows={10} />
                )}
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem
                {...formItemLayoutDesc}
                label="预期效果"
              >
                {getFieldDecorator('expectResult', {
                  initialValue: initialData.defaultDescription,
                })(
                  <Input type="textarea" rows={10} />
                )}
              </FormItem>
            </Col>
          </Row>
        </Form>
        <div style={{ padding: 40, border: '1px solid #ccc', marginTop: 30 }}>
          <h2 style={{ margin: '20px 10px 20px 0', display: 'inline-block' }}>升级完善上报记录</h2>
          <ButtonGroup>
            <Button icon="reload" style={{ width: 110, height: 40, fontSize: 14 }}>刷新</Button>
            <Button onClick={() => { this.changeShow(); }} icon="file-add" style={{ width: 110, height: 40, fontSize: 14 }}>添加记录</Button>
            <Button icon="delete" style={{ width: 110, height: 40, fontSize: 14 }}>删除</Button>
          </ButtonGroup>
          <Search
            style={{ width: 380, height: 40, float: 'right', marginTop: 12 }}
          />
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={{ pageSize: 10 }}
            bordered
          />
        </div>
        <Modal
          width="80%"
          height="70%"
          title={Title}
          visible={this.state.showRecord}
          closable={false}
          footer={null}
        >
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={{ pageSize: 10 }}
            bordered
          />
        </Modal>
      </div>
    );
  }
}

UpgradeSummaryDetailEdit.propTypes = {
  form: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};
const WrapUpgradeSummaryDetailEdit = Form.create()(UpgradeSummaryDetailEdit);
export default WrapUpgradeSummaryDetailEdit;
