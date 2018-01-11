import { Table, Input } from 'antd';
import React from 'react';
import { Link } from 'react-router';
import '../DeploymentScheme.css';
import DeploymentSchemeDetailThirdStaticData from './DeploymentSchemeDetailThirdStaticData';
// import { json2table } from './json2table';


const Search = Input.Search;
class DeploymentSchemeDetailThird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        status: '未完成',
      }, {
        key: '2',
        number: 'CL-20170427-0001',
        taskType: '调配登记任务',
        taskDetail: '总体模块，其他模块',
        taskUnit: 'XX日常管理部门、XX机关',
        beginTime: '2017/5/19 20:39',
        endTime: '2017/8/19 20:39',
        status: '未完成',
      }, {
        key: '3',
        number: 'CL-20170427-0001',
        taskType: '调配登记任务',
        taskDetail: '总体模块，其他模块',
        taskUnit: 'XX日常管理部门、XX机关',
        beginTime: '2017/5/19 20:39',
        endTime: '2017/8/19 20:39',
        status: '未完成',
      }, {
        key: '4',
        number: 'CL-20170427-0001',
        taskType: '调配登记任务',
        taskDetail: '总体模块，其他模块',
        taskUnit: 'XX日常管理部门、XX机关',
        beginTime: '2017/5/19 20:39',
        endTime: '2017/8/19 20:39',
        status: '已完成',
      }, {
        key: '5',
        number: 'CL-20170427-0001',
        taskType: '调配登记任务',
        taskDetail: '总体模块，其他模块',
        taskUnit: 'XX日常管理部门、XX机关',
        beginTime: '2017/5/19 20:39',
        endTime: '2017/8/19 20:39',
        status: '已完成',
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
  render() {
    const { InitialData } = this.state;
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
      title: '状态',
      dataIndex: 'status',
      render: (text) => {
        if (text === '未完成') {
          return <span style={{ color: '#de0101' }}>{text}</span>;
        }
        return <span>{text}</span>;
      },
    }, {
      title: '操作',
      dataIndex: 'operate',
      render: (text, row) => (
        <Link to={`/main/InventoryRegistration/InputDetail/${row.key}`}>详情</Link>
      ),
    }];
    return (
      <div className="InputDetail_stepsContent">
        <div style={{ width: '80%', marginLeft: '12%', minHeight: 500, marginTop: 20 }}>
          <div className="SoftwareInfoDetail_detail" >
            <div className="DeploymentSchemeDetail_headerpic">
              <span>调配统计</span>
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
          <DeploymentSchemeDetailThirdStaticData />
          <div style={{ paddingBottom: 10, borderBottom: '1px solid #ccc' }}>
            <h2 style={{ margin: '20px 20px', display: 'inline-block' }}>调配任务详情</h2>
            <Search
              style={{ width: 380, height: 40, float: 'right', marginTop: 12 }}
            />
            <Table
              columns={columns}
              dataSource={this.state.dataSource}
              pagination={{ pageSize: 10 }}
              bordered
            />
          </div>
        </div>
      </div>
    );
  }
}

// DeploymentSchemeDetailFirstRead.propTypes = {
  // disable: PropTypes.bool.isRequired,
  // form: PropTypes.object.isRequired,
// };
// const WrapDeploymentSchemeDetailFirstRead = Form.create()(DeploymentSchemeDetailFirstRead);
export default DeploymentSchemeDetailThird;
