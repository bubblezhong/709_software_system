import { Table, Button } from 'antd';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import '../SupportScheme.css';
// import { json2table } from './json2table';

// const Search = Input.Search;
// const ButtonGroup = Button.Group;
class SupportSchemeDetailFirstRead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      InitialData: {
        content: '七○二所，1951年建立于上海黄浦江畔，1965年总部搬迁至无锡，在上海设有分部和青岛分部。数十年来建有功能齐全、配套完整的大中型科研试验设施近30座，设有两个国家级重点实验室，两个国家级检测中心，一个国家能源海洋工程装备研发中心和一个省级重点实验室，占地1300余亩，现有职工1500余人，其中拥有中国工程院院士2名， 国家“千人计划”1人，“万人计划”1人，“新世纪百千万人才工程”重点培养对象2人，国防科技工业511人才工程学术带头人2人，享受国务院政府津贴专家42名，省部级有突出贡献中青年专家19名。',
        number: 'MSSXL0678',
        developmentUnit: '中岸用软件-709所',
        softwareName: 'XX软件',
        file: ['附件1', '附件2'],
        status: '定制中',
        time: '2017/05/12',
        headTitle: '应用软件技术保障方案00211',
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
      deploymentSchemeData: [{
        key: '0',
        num: '0',
        softwarePos: '岸基指挥所',
        softwareType: '',
        moduleInfo: '',
        children: [
          {
            key: '00',
            num: '00',
            softwarePos: 'XX指挥所',
            softwareType: '',
            moduleInfo: '',
            children: [
              {
                key: '000',
                num: '000',
                softwarePos: '主控板0',
                softwareType: '岸用软件',
                moduleInfo: '总体模块、xx模块、xx模块',
              }, {
                key: '001',
                num: '0021',
                softwarePos: '主控板1',
                softwareType: '岸用软件',
                moduleInfo: '总体模块、xx模块、xx模块',
              }, {
                key: '002',
                num: '0022',
                softwarePos: '主控板2',
                softwareType: '岸用软件',
                moduleInfo: '总体模块、xx模块、xx模块',
              },
            ],
          },
        ],
      }],
    };
  }
  changeEditStatus = () => {
    this.props.changeEdit();
  }
  render() {
    const { InitialData } = this.state;
    const columns = [{
      title: '编号',
      dataIndex: 'number',
    }, {
      title: '申请标题',
      dataIndex: 'title',
    }, {
      title: '申请单位',
      dataIndex: 'unit',
    }, {
      title: '申请人',
      dataIndex: 'applicant',
    }, {
      title: '申请时间',
      dataIndex: 'time',
    }, {
      title: '操作',
      dataIndex: 'operate',
      render: (text, row) => <Link to={`/main/TechnicalSupport/SupportRequestDetail/${row.key}`}>{text}</Link>,
    }];
    const deploymentSchemeColumns = [{
      title: '软件安装单位与位置',
      dataIndex: 'softwarePos',
      key: 'softwarePos',
    }, {
      title: '软件类型',
      dataIndex: 'softwareType',
      key: 'softwareType',
    }, {
      title: '模块信息',
      dataIndex: 'moduleInfo',
      key: 'moduleInfo',
    }];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
      }),
    };
    return (
      <div className="InputDetail_stepsContent">
        <div style={{ overflow: 'hidden', width: '80%', marginLeft: '12%' }}>
          <Button style={{ float: 'right', width: 80, height: 30 }} type="primary" onClick={() => { this.changeEditStatus(); }}>编辑</Button>
        </div>
        <div style={{ width: '80%', marginLeft: '12%', minHeight: 500, marginTop: 20 }}>
          <div className="SoftwareInfoDetail_detail" >
            <div className="SupportSchemeDetail_headerpic">
              <span>技术保障方案</span>
            </div>
            <div className="SoftwareInfoDetail_content">
              <h2 style={{ display: 'inline-block' }}>{InitialData.headTitle}</h2>
              <time style={{ float: 'right' }} >{InitialData.time}</time>
              <div className="DeploymentSchemeDetail_brief">
                <span>编号：</span>
                <span>{InitialData.number}</span>
                <span>制定单位：</span>
                <span>{InitialData.developmentUnit}</span>
                <span>软件：</span>
                <span>{InitialData.softwareName}</span>
                <span>状态：</span>
                <span>{InitialData.status}</span>
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
          <div style={{ paddingBottom: 10, borderBottom: '1px solid #ccc' }}>
            <h2 style={{ margin: '20px 20px', display: 'inline-block' }}>技术保障申请列表</h2>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={this.state.dataSource}
              pagination={{ pageSize: 10 }}
              bordered
            />
          </div>
          <div style={{ paddingBottom: 10, borderBottom: '1px solid #ccc' }}>
            <h2 style={{ margin: '20px 20px', display: 'inline-block' }}>调配方案详情</h2>
            <Table
              rowSelection={rowSelection}
              columns={deploymentSchemeColumns}
              dataSource={this.state.deploymentSchemeData}
              bordered
              defaultExpandAllRows
              pagination={false}
            />
          </div>
        </div>
      </div>
    );
  }
}

SupportSchemeDetailFirstRead.propTypes = {
  // disable: PropTypes.bool.isRequired,
  // form: PropTypes.object.isRequired,
  changeEdit: PropTypes.func.isRequired,
};
export default SupportSchemeDetailFirstRead;
