import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Col, Form, Button, Row, Table, Input } from 'antd';
// import './Registration.css';

const FormItem = Form.Item;
const Search = Input.Search;
const ButtonGroup = Button.Group;
class CollectDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.params);
    let id = 0;
    if (this.props.params) {
      id = this.props.params.id;
    }
    this.state = {
      id,
      show: 'SoftwareVersion',
      InitialData: {
        content: '七○二所，1951年建立于上海黄浦江畔，1965年总部搬迁至无锡，在上海设有分部和青岛分部。数十年来建有功能齐全、配套完整的大中型科研试验设施近30座，设有两个国家级重点实验室，两个国家级检测中心，一个国家能源海洋工程装备研发中心和一个省级重点实验室，占地1300余亩，现有职工1500余人，其中拥有中国工程院院士2名， 国家“千人计划”1人，“万人计划”1人，“新世纪百千万人才工程”重点培养对象2人，国防科技工业511人才工程学术带头人2人，享受国务院政府津贴专家42名，省部级有突出贡献中青年专家19名。',
        number: 'MSSXL0678',
        status: '已接受',
        type: '故障登记',
        file: [{ name: '附件1', link: 'rrtb' }, { name: '附件2', link: 'rrtb' }],
      },
      basicData: {
        registeUnit: 'xx453队',
        register: '塞班2.0、CentOS7等',
        software: '声呐定位软件',
        beginTime: '2017/5/12 12:00',
        endTime: '2017/5/12 12:00',
        level: '一般',
        savePos: '代表室/管理机关',
        module: '应用软件>C类应用软件>对下声呐定位',
        failTime: '2017/5/13 11:00',
        solve: '是',
        describeInfo: '测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信',
      },
      dataSource: [{
        key: '1',
        number: 'CL-20170427-0001',
        type: '调配登记任务',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '2',
        number: 'CL-20170427-0001',
        type: '调配登记任务',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '3',
        number: 'CL-20170427-0001',
        type: '调配登记任务',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '4',
        number: 'CL-20170427-0001',
        type: '调配登记任务',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '5',
        number: 'CL-20170427-0001',
        type: '调配登记任务',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '6',
        number: 'CL-20170427-0001',
        type: '调配登记任务',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '7',
        number: 'CL-20170427-0001',
        type: '调配登记任务',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '8',
        number: 'CL-20170427-0001',
        type: '调配登记任务',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }, {
        key: '9',
        number: 'CL-20170427-0001',
        type: '调配登记任务',
        applicant: '张三',
        unit: 'XX日常管理部门、XX机关',
        time: '2017/5/19 20:39',
        operate: '详情',
      }],
    };
  }
  changeShow = (type) => {
    this.setState({ show: type });
  }
  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    const formItemLayoutFault = {
      labelCol: { span: 3 },
      wrapperCol: { span: 20 },
    };
    const { InitialData, basicData } = this.state;
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
      }),
    };
    const columns = [{
      title: '登记编号',
      dataIndex: 'number',
    }, {
      title: '记录类型',
      dataIndex: 'type',
    }, {
      title: '登记单位',
      dataIndex: 'unit',
    }, {
      title: '登记人',
      dataIndex: 'applicant',
    }, {
      title: '登记时间',
      dataIndex: 'time',
    }, {
      title: '操作',
      dataIndex: 'operate',
      render: (text, row) => <Link to={`/main/SoftwareDaily/RegistrationDetail/${row.key}`}>{text}</Link>,
    }];
    return (
      <div>
        <div style={{ overflow: 'hidden', marginBottom: 20 }}>
          <Link to="/main/SoftwareDaily/Collect" className="SoftwareInfoDetail_return">
            <Button style={{ width: 85, height: 30 }}>
              <span style={{ marginRight: 8 }}>&lt;</span>
              <span>返回</span>
            </Button>
          </Link>
          <Link>
            <Button type="primary" className="SoftwareInfoDetail_reflash">删除</Button>
          </Link>
          <Link to={`/main/SoftwareDaily/CollectDetailEdit/${this.state.id}`}>
            <Button type="primary" className="SoftwareInfoDetail_reflash">编辑</Button>
          </Link>
        </div>
        <div className="SoftwareInfoDetail_detail" >
          <div className="DeploymentSchemeDetail_headerpic" style={{ marginLeft: '6%' }} >
            <span>日常汇总</span>
          </div>
          <div className="SoftwareInfoDetail_content">
            <h2>应用软件问题反馈</h2>
            <div className="SoftwareInfoDetail_brief">
              <span>日常登记编号：</span>
              <span>{InitialData.number}</span>
              <span>状态：</span>
              <span>{InitialData.status}</span>
              <span>类型：</span>
              <span>{InitialData.type}</span>
            </div>
            <div style={{ fontSize: 14 }}>
              {InitialData.content}
            </div>
            <div style={{ marginTop: 30 }}>
              <span>附件：</span>
              <Link style={{ marginLeft: 19 }}>{InitialData.file[0].name}</Link>
              <Link style={{ marginLeft: 19 }}>{InitialData.file[1].name}</Link>
            </div>
          </div>
        </div>
        <div style={{ fontSize: 16, padding: 20 }}>
          <h2 style={{ borderBottom: '1px solid #e4e4e4', paddingBottom: 20, fontSize: 18 }}>汇总信息</h2>
          <Row className="RegistrationDetail_RegisterInfo" >
            <Col span={12} style={{ height: 40, borderBottom: '1px solid #e4e4e4', marginTop: 19 }}>
              <FormItem
                style={{ fontSize: 16 }}
                {...formItemLayout}
                label="汇总单位"
              >
                <span>{basicData.registeUnit}</span>
              </FormItem>
            </Col>
            <Col span={12} style={{ height: 40, borderBottom: '1px solid #e4e4e4', marginTop: 19 }}>
              <FormItem
                style={{ fontSize: 16 }}
                {...formItemLayout}
                label="汇总人"
              >
                <span>{basicData.register}</span>
              </FormItem>
            </Col>
            <Col span={12} style={{ height: 40, borderBottom: '1px solid #e4e4e4', marginTop: 19 }}>
              <FormItem
                style={{ fontSize: 16 }}
                {...formItemLayout}
                label="软件"
              >
                <span>{basicData.software}</span>
              </FormItem>
            </Col>
            <Col span={12} style={{ height: 40, borderBottom: '1px solid #e4e4e4', marginTop: 19 }}>
              <FormItem
                style={{ fontSize: 16 }}
                {...formItemLayout}
                label="谱系"
              >
                <span>{basicData.module}</span>
              </FormItem>
            </Col>
            <Col span={12} style={{ height: 40, borderBottom: '1px solid #e4e4e4', marginTop: 19 }}>
              <FormItem
                style={{ fontSize: 16 }}
                {...formItemLayout}
                label="故障等级"
              >
                <span>{basicData.level}</span>
              </FormItem>
            </Col>
            <Col span={12} style={{ height: 40, borderBottom: '1px solid #e4e4e4', marginTop: 19 }}>
              <FormItem
                style={{ fontSize: 16 }}
                {...formItemLayout}
                label="是否解决"
              >
                <span>{basicData.solve}</span>
              </FormItem>
            </Col>
            <Col span={24} style={{ borderBottom: '1px solid #e4e4e4', marginTop: 19 }}>
              <FormItem
                style={{ fontSize: 14 }}
                {...formItemLayoutFault}
                label="描述信息"
              >
                <span>{basicData.describeInfo}</span>
              </FormItem>
            </Col>
          </Row>
        </div>
        <div style={{ fontSize: 16, padding: 20 }}>
          <h2 style={{ paddingBottom: 20, fontSize: 18, display: 'inline-block', width: '10%' }}>日常登记记录</h2>
          <div style={{ overflow: 'auto', display: 'inline-block', position: 'relative', top: 12, width: '90%' }}>
            <ButtonGroup style={{ float: 'left' }}>
              <Button icon="reload" style={{ width: 110, height: 40, fontSize: 14 }}>刷新</Button>
              <Button icon="file-add" style={{ width: 110, height: 40, fontSize: 14 }}>添加记录</Button>
              <Button icon="delete" style={{ width: 110, height: 40, fontSize: 14 }}>删除</Button>
            </ButtonGroup>
            <Search
              placeholder="搜索软件名称、申请单位等"
              style={{ width: 380, height: 40, float: 'right' }}
              onSearch={value => console.log(value)}
            />
          </div>
          <Table
            rowSelection={rowSelection}
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
CollectDetail.propTypes = {
  params: PropTypes.number.isRequired,
};
export default CollectDetail;
