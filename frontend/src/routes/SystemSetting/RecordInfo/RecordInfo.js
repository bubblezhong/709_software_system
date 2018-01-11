import React from 'react';
import { Table, Button, Input } from 'antd';

const Search = Input.Search;
const ButtonGroup = Button.Group;

class RecordInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        key: '1',
        type: 'pc登录',
        operator: '管理员',
        remark: '[admin]登录成功',
        IP: '220.222.161.203',
        browser: 'Chrome',
        deviceID: '2589347553',
        ID: '552',
        detail: '详情',
      }, {
        key: '2',
        type: 'pc登录',
        operator: '管理员',
        remark: '[admin]登录成功',
        IP: '220.222.161.203',
        browser: 'Chrome',
        deviceID: '2589347553',
        ID: '552',
        detail: '详情',
      }, {
        key: '3',
        type: 'pc登录',
        operator: '管理员',
        remark: '[admin]登录成功',
        IP: '220.222.161.203',
        browser: 'Chrome',
        deviceID: '2589347553',
        ID: '552',
        detail: '详情',
      }, {
        key: '4',
        type: 'pc登录',
        operator: '管理员',
        remark: '[admin]登录成功',
        IP: '220.222.161.203',
        browser: 'Chrome',
        deviceID: '2589347553',
        ID: '552',
        detail: '详情',
      }, {
        key: '5',
        type: 'pc登录',
        operator: '管理员',
        remark: '[admin]登录成功',
        IP: '220.222.161.203',
        browser: 'Chrome',
        deviceID: '2589347553',
        ID: '552',
        detail: '详情',
      }, {
        key: '6',
        type: 'pc登录',
        operator: '管理员',
        remark: '[admin]登录成功',
        IP: '220.222.161.203',
        browser: 'Chrome',
        deviceID: '2589347553',
        ID: '552',
        detail: '详情',
      }, {
        key: '7',
        type: 'pc登录',
        operator: '管理员',
        remark: '[admin]登录成功',
        IP: '220.222.161.203',
        browser: 'Chrome',
        deviceID: '2589347553',
        ID: '552',
        detail: '详情',
      }, {
        key: '8',
        type: 'pc登录',
        operator: '管理员',
        remark: '[admin]登录成功',
        IP: '220.222.161.203',
        browser: 'Chrome',
        deviceID: '2589347553',
        ID: '552',
        detail: '详情',
      }, {
        key: '9',
        type: 'pc登录',
        operator: '管理员',
        remark: '[admin]登录成功',
        IP: '220.222.161.203',
        browser: 'Chrome',
        deviceID: '2589347553',
        ID: '552',
        detail: '详情',
      }, {
        key: '10',
        type: 'pc登录',
        operator: '管理员',
        remark: '[admin]登录成功',
        IP: '220.222.161.203',
        browser: 'Chrome',
        deviceID: '2589347553',
        ID: '552',
        detail: '详情',
      }, {
        key: '11',
        type: 'pc登录',
        operator: '管理员',
        remark: '[admin]登录成功',
        IP: '220.222.161.203',
        browser: 'Chrome',
        deviceID: '2589347553',
        ID: '552',
        detail: '详情',
      }, {
        key: '12',
        type: 'pc登录',
        operator: '管理员',
        remark: '[admin]登录成功',
        IP: '220.222.161.203',
        browser: 'Chrome',
        deviceID: '2589347553',
        ID: '552',
        detail: '详情',
      }],
    };
  }
  render() {
    const Btns = (
      <div>
        <ButtonGroup style={{ marginBottom: 10 }}>
          <Button icon="reload" style={{ width: 110, height: 40, fontSize: 14 }}>刷新</Button>
          <Button icon="file-add" style={{ width: 110, height: 40, fontSize: 14 }}>新增</Button>
          <Button icon="login" style={{ width: 110, height: 40, fontSize: 14 }}>导入</Button>
          <Button icon="logout" style={{ width: 110, height: 40, fontSize: 14 }}>导出</Button>
          <Button icon="printer" style={{ width: 110, height: 40, fontSize: 14 }}>打印</Button>
          <Button icon="delete" style={{ width: 110, height: 40, fontSize: 14 }}>删除</Button>
        </ButtonGroup>
        <Search
          placeholder="搜索软件名称、申请单位等"
          style={{ width: 380, height: 40, float: 'right' }}
          onSearch={value => console.log(value)}
        />
      </div>
    );
    const columns = [{
      title: '类型',
      dataIndex: 'type',
    }, {
      title: '操作人',
      dataIndex: 'operator',
    }, {
      title: '备注',
      dataIndex: 'remark',
    }, {
      title: 'IP',
      dataIndex: 'IP',
    }, {
      title: '浏览器',
      dataIndex: 'browser',
    }, {
      title: '设备ID',
      dataIndex: 'deviceID',
    }, {
      title: 'ID',
      dataIndex: 'ID',
    }, {
      title: '操作',
      dataIndex: 'detail',
      render: () => (
        <span>
          <span style={{ fontWeight: 900, marginLeft: 10 }}>X &nbsp;&nbsp;&nbsp;</span>
        </span>
      ),
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
        {Btns}
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.state.data}
          pagination={{ pageSize: 10 }}
          bordered
        />
      </div>
    );
  }
}
export default RecordInfo;

