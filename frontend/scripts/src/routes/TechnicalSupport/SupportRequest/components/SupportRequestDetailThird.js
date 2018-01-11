import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Form, Row, Col, Table } from 'antd';

const FormItem = Form.Item;
// const Search = Input.Search;
// const ButtonGroup = Button.Group;
class SupportRequestDetailThird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialData: {
        softwareName: '远程目标判断软件',
        softwareAncestor: '总体模块',
        softwareModule: '应用软件->C类应用软件->对下声呐定位',
        oddNumbersRegister: 'CL-20170427-0001',
        applicant: '王五',
        applyUnit: '中船重工xx研究所',
        applyTitle: '技术保障申请标题1212',
        register: '张三',
        registerUnit: '中船重工xx研究所',
        taskSource: '调配任务-DP201705110321',
        file: '无',
        applyReason: '申请原因，测试信息，测试信息，申请原因，测试信息，测试信息，申请原因，测试信息，测试信息，申请原因，测试信息，测试信息，申请原因，测试信息，测试信息',
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
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const formItemLayoutDesc = {
      labelCol: { span: 3 },
      wrapperCol: { span: 19 },
    };
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
      render: (text, row) => <Link to={`/main/SoftwareDaily/CollectDetail/${row.key}`}>{text}</Link>,
    }];
    return (
      <div className="InputDetail_stepsContent">
        <Form onSubmit={this.handleSubmit} style={{ width: '80%', marginLeft: '10%', minHeight: 600 }}>
          <Row>
            <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>技术保障软件基本信息</div>
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
                label="软件模块"
              >
                <span>{initialData.softwareAncestor}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="软件谱系"
              >
                <span>{initialData.softwareModule}</span>
              </FormItem>
            </Col>
          </Row>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>技术保障申请单基本信息</div>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="申请单号"
                hasFeedback
              >
                <span>{initialData.oddNumbersApply}</span>
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
                label="申请标题"
                hasFeedback
              >
                <span>{initialData.applyTitle}</span>
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
                label="附件"
                hasFeedback
              >
                <span>{initialData.file}</span>
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem
                {...formItemLayoutDesc}
                label="申请原因"
                hasFeedback
              >
                <span>{initialData.applyReason}</span>
              </FormItem>
            </Col>
          </Row>
        </Form>
        <div style={{ fontSize: 16, padding: 10, width: '80%', marginLeft: '10%', border: '1px solid #ccc', marginTop: 20 }}>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', paddingLeft: 20 }}>
            <span style={{ lineHeight: '50px' }}>汇总信息</span>
          </div>
          <Table
            style={{ marginLeft: '3%', width: '90%' }}
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={{ pageSize: 10 }}
            bordered
          />
        </div>
      </div>
    );
  }
}

SupportRequestDetailThird.propTypes = {
  form: PropTypes.object.isRequired,
};
const WrapSupportRequestDetailThird = Form.create()(SupportRequestDetailThird);
export default WrapSupportRequestDetailThird;
