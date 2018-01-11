import { Select, DatePicker, Table, Input, Button, Modal, Row, Col, Form } from 'antd';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
// import '../SupportScheme.css';
// import { json2table } from './json2table';

const FormItem = Form.Item;
const Search = Input.Search;
const RangePicker = DatePicker.RangePicker;
class UpgradeSchemeDetailThird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTask: false,
      editState: false,
      InitialData: {
        content: '七○二所，1951年建立于上海黄浦江畔，1965年总部搬迁至无锡，在上海设有分部和青岛分部。数十年来建有功能齐全、配套完整的大中型科研试验设施近30座，设有两个国家级重点实验室，两个国家级检测中心，一个国家能源海洋工程装备研发中心和一个省级重点实验室，占地1300余亩，现有职工1500余人，其中拥有中国工程院院士2名， 国家“千人计划”1人，“万人计划”1人，“新世纪百千万人才工程”重点培养对象2人，国防科技工业511人才工程学术带头人2人，享受国务院政府津贴专家42名，省部级有突出贡献中青年专家19名。',
        number: 'MSSXL0678',
        developmentUnit: '中岸用软件-709所',
        softwareName: 'XX软件',
        file: ['附件1', '附件2'],
        status: '定制中',
        time: '2017/05/12',
        schemeName: '应用软件调配方案',
      },
      taskDistributeDate: {},
      dataSource: [{
        key: '1',
        number: 'CL-20170427-0001',
        taskType: '调配登记任务',
        taskDetail: '总体模块，其他模块',
        taskUnit: 'XX日常管理部门、XX机关',
        beginTime: '2017/5/19 20:39',
        endTime: '2017/8/19 20:39',
      }, {
        key: '2',
        number: 'CL-20170427-0001',
        taskType: '调配登记任务',
        taskDetail: '总体模块，其他模块',
        taskUnit: 'XX日常管理部门、XX机关',
        beginTime: '2017/5/19 20:39',
        endTime: '2017/8/19 20:39',
      }, {
        key: '3',
        number: 'CL-20170427-0001',
        taskType: '调配登记任务',
        taskDetail: '总体模块，其他模块',
        taskUnit: 'XX日常管理部门、XX机关',
        beginTime: '2017/5/19 20:39',
        endTime: '2017/8/19 20:39',
      }, {
        key: '4',
        number: 'CL-20170427-0001',
        taskType: '调配登记任务',
        taskDetail: '总体模块，其他模块',
        taskUnit: 'XX日常管理部门、XX机关',
        beginTime: '2017/5/19 20:39',
        endTime: '2017/8/19 20:39',
      }, {
        key: '5',
        number: 'CL-20170427-0001',
        taskType: '调配登记任务',
        taskDetail: '总体模块，其他模块',
        taskUnit: 'XX日常管理部门、XX机关',
        beginTime: '2017/5/19 20:39',
        endTime: '2017/8/19 20:39',
      }],
    };
  }
  handleOk = () => {
    this.setState({
      editState: false,
    });
  }
  handleCancel = () => {
    this.setState({
      editState: false,
    });
  }
  changeShowTask = () => {
    if (this.state.showTask) {
      this.setState({ showTask: false });
    } else {
      this.setState({ showTask: true });
    }
  }
  render() {
    const { InitialData } = this.state;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const formItemLayoutDesc = {
      labelCol: { span: 3 },
      wrapperCol: { span: 19 },
    };
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
      }),
    };
    const columns = [{
      title: '任务编号',
      dataIndex: 'number',
    }, {
      title: '任务类型',
      dataIndex: 'taskType',
    }, {
      title: '任务详情',
      dataIndex: 'taskDetail',
    }, {
      title: '任务单位',
      dataIndex: 'taskUnit',
    }, {
      title: '开始时间',
      dataIndex: 'beginTime',
    }, {
      title: '结束时间',
      dataIndex: 'endTime',
    }, {
      title: '操作',
      dataIndex: 'operate',
      render: () => (
        <span style={{ color: '#416ade', cursor: 'pointer' }} onClick={() => this.setState({ editState: true })}>编辑</span>
      ),
    }];
    return (
      <div className="InputDetail_stepsContent">
        <div style={{ overflow: 'hidden', width: '80%', marginLeft: '12%' }}>
          <Button style={{ float: 'right', width: 100, height: 40 }} type="primary" onClick={() => this.changeShowTask()}>生出任务</Button>
        </div>
        <div style={{ width: '80%', marginLeft: '12%', minHeight: 500, marginTop: 20 }}>
          <div className="SoftwareInfoDetail_detail" >
            <div className="SupportSchemeDetail_headerpic">
              <span>技术保障任务</span>
            </div>
            <div className="SoftwareInfoDetail_content">
              <h2 style={{ display: 'inline-block' }}>
                <span>方案名称：</span>
                <span>{InitialData.schemeName}</span>
              </h2>
              <time style={{ float: 'right' }} >{InitialData.time}</time>
              <div className="DeploymentSchemeDetail_brief">
                <span>方案编号：</span>
                <span>{InitialData.number}</span>
                <span>方案制定单位：</span>
                <span>{InitialData.developmentUnit}</span>
                <span>软件：</span>
                <span>{InitialData.softwareName}</span>
              </div>
              <div>
                {InitialData.content}
              </div>
              <div style={{ marginTop: 10 }}>
                <span>附件：</span>
                <Link style={{ marginLeft: 15 }} >{InitialData.file[0]}</Link>
                <Link style={{ marginLeft: 15 }} >{InitialData.file[1]}</Link>
              </div>
            </div>
          </div>
          {this.state.showTask &&
            <div style={{ paddingBottom: 10, borderBottom: '1px solid #ccc' }}>
              <h2 style={{ margin: '20px 20px', display: 'inline-block' }}>调配任务详情</h2>
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
          }
        </div>
        <Modal
          width="60%"
          height="80%"
          title="任务分配"
          visible={this.state.editState}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="任务编号"
              >
                <span>11111111</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="选择任务类型"
                hasFeedback
              >
                {getFieldDecorator('taskType', {
                  rules: [{ required: true, message: '请选择任务类型!' }],
                })(
                  <Select style={{ display: 'block' }}>
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
                label="选择任务单位"
              >
                {getFieldDecorator('softwareGrade', {
                  rules: [{ required: true, message: '请选择任务单位!' }],
                })(
                  <Select style={{ display: 'block' }}>
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
                label="任务时间"
              >
                {getFieldDecorator('range-picker', {
                  rules: [{ required: true, message: '请选择任务时间!' }],
                })(
                  <RangePicker />
                )}
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem
                {...formItemLayoutDesc}
                label="任务详情"
              >
                {getFieldDecorator('softwareDescription', {
                  rules: [{ required: true, message: '请输入信息说明' }],
                })(
                  <Input type="textarea" rows={10} />
                )}
              </FormItem>
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}

UpgradeSchemeDetailThird.propTypes = {
  // disable: PropTypes.bool.isRequired,
  form: PropTypes.object.isRequired,
};
const WrapUpgradeSchemeDetailThird = Form.create()(UpgradeSchemeDetailThird);
export default WrapUpgradeSchemeDetailThird;
