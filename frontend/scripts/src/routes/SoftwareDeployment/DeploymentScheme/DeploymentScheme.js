import React from 'react';
import { Link } from 'react-router';
import { Button, Table } from 'antd';
import InputSearch from './../../utils/InputSearch';

// const Search = Input.Search;
const ButtonGroup = Button.Group;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deploymentRequestData: [{
        key: '1',
        number: 'CL-20170427-0001',
        scheme_title: '应用软件XX调配方案',
        name: '远程目标判断软件',
        department: 'XX日常管理部门、XX机关',
        begin_time: '2017/5/18 20:39',
        end_time: '2017/5/19 20:39',
        status: '制定中',
        operate: '详情',
      }, {
        key: '2',
        number: 'CL-20170427-0001',
        scheme_title: '应用软件XX调配方案',
        name: '远程目标判断软件',
        department: 'XX日常管理部门、XX机关',
        begin_time: '2017/5/18 20:39',
        end_time: '2017/5/19 20:39',
        status: '制定中',
        operate: '详情',
      }, {
        key: '3',
        number: 'CL-20170427-0001',
        scheme_title: '应用软件XX调配方案',
        name: '远程目标判断软件',
        department: 'XX日常管理部门、XX机关',
        begin_time: '2017/5/18 20:39',
        end_time: '2017/5/19 20:39',
        status: '制定中',
        operate: '详情',
      }, {
        key: '4',
        number: 'CL-20170427-0001',
        scheme_title: '应用软件XX调配方案',
        name: '远程目标判断软件',
        department: 'XX日常管理部门、XX机关',
        begin_time: '2017/5/18 20:39',
        end_time: '2017/5/19 20:39',
        status: '制定中',
        operate: '详情',
      }, {
        key: '5',
        number: 'CL-20170427-0001',
        scheme_title: '应用软件XX调配方案',
        name: '远程目标判断软件',
        department: 'XX日常管理部门、XX机关',
        begin_time: '2017/5/18 20:39',
        end_time: '2017/5/19 20:39',
        status: '制定中',
        operate: '详情',
      }, {
        key: '6',
        number: 'CL-20170427-0001',
        scheme_title: '应用软件XX调配方案',
        name: '远程目标判断软件',
        department: 'XX日常管理部门、XX机关',
        begin_time: '2017/5/18 20:39',
        end_time: '2017/5/19 20:39',
        status: '制定中',
        operate: '详情',
      }, {
        key: '7',
        number: 'CL-20170427-0001',
        scheme_title: '应用软件XX调配方案',
        name: '远程目标判断软件',
        department: 'XX日常管理部门、XX机关',
        begin_time: '2017/5/18 20:39',
        end_time: '2017/5/19 20:39',
        status: '制定中',
        operate: '详情',
      }, {
        key: '8',
        number: 'CL-20170427-0001',
        scheme_title: '应用软件XX调配方案',
        name: '远程目标判断软件',
        department: 'XX日常管理部门、XX机关',
        begin_time: '2017/5/18 20:39',
        end_time: '2017/5/19 20:39',
        status: '制定中',
        operate: '详情',
      }, {
        key: '9',
        number: 'CL-20170427-0001',
        scheme_title: '应用软件XX调配方案',
        name: '远程目标判断软件',
        department: 'XX日常管理部门、XX机关',
        begin_time: '2017/5/18 20:39',
        end_time: '2017/5/19 20:39',
        status: '制定中',
        operate: '详情',
      }],
    };
  }
  render() {
    const Columns = [{
      title: '方案编号',
      dataIndex: 'number',
    }, {
      title: '方案标题',
      dataIndex: 'scheme_title',
    }, {
      title: '软件名称',
      dataIndex: 'name',
    }, {
      title: '方案制定部门',
      dataIndex: 'department',
    }, {
      title: '开始时间',
      dataIndex: 'begin_time',
    }, {
      title: '结束时间',
      dataIndex: 'end_time',
    }, {
      title: '状态',
      dataIndex: 'status',
    }, {
      title: '操作',
      dataIndex: 'operate',
      render: (text, row) => <Link to={`/main/SoftwareDeployment/DeploymentSchemeDetail/${row.key}`}>{text}</Link>,
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
      <div>
        <div style={{ overflow: 'auto', marginBottom: 10 }}>
          <ButtonGroup style={{ float: 'left' }}>
            <Button icon="reload" style={{ width: 110, height: 40, fontSize: 14 }}>刷新</Button>
            <Link to="/main/SoftwareDeployment/DeploymentSchemeNew">
              <Button icon="file-add" style={{ width: 110, height: 40, fontSize: 14, borderRadius: 0 }}>新增方案</Button>
            </Link>
            <Button icon="login" style={{ width: 110, height: 40, fontSize: 14 }}>导入</Button>
            <Button icon="logout" style={{ width: 110, height: 40, fontSize: 14 }}>导出</Button>
            <Button icon="printer" style={{ width: 110, height: 40, fontSize: 14 }}>打印</Button>
            <Button icon="delete" style={{ width: 110, height: 40, fontSize: 14 }}>删除</Button>
          </ButtonGroup>
          <InputSearch />
        </div>
        <Table
          rowSelection={rowSelection}
          columns={Columns}
          dataSource={this.state.deploymentRequestData}
          bordered
        />
      </div>
    );
  }
}

export default App;
