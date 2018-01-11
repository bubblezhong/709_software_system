import React from 'react';
import { Link } from 'react-router';
import { Button, Table } from 'antd';
import InputSearch from './../../utils/InputSearch';

const ButtonGroup = Button.Group;
class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [{
        key: '1',
        number: 'CL-20170427-0001',
        name: '远程目标判断软件',
        time: '2017/5/18 20:39',
        type: '日常使用登记',
        status: '未查看',
        operate: '详情',
      }, {
        key: '2',
        number: 'CL-20170427-0001',
        name: '远程目标判断软件',
        time: '2017/5/18 20:39',
        type: '日常使用登记',
        status: '未查看',
        operate: '详情',
      }, {
        key: '3',
        number: 'CL-20170427-0001',
        name: '远程目标判断软件',
        time: '2017/5/18 20:39',
        type: '日常使用登记',
        status: '未查看',
        operate: '详情',
      }, {
        key: '4',
        number: 'CL-20170427-0001',
        name: '远程目标判断软件',
        time: '2017/5/18 20:39',
        type: '日常使用登记',
        status: '未查看',
        operate: '详情',
      }, {
        key: '5',
        number: 'CL-20170427-0001',
        name: '远程目标判断软件',
        time: '2017/5/18 20:39',
        type: '日常使用登记',
        status: '未查看',
        operate: '详情',
      }, {
        key: '6',
        number: 'CL-20170427-0001',
        name: '远程目标判断软件',
        time: '2017/5/18 20:39',
        type: '日常使用登记',
        status: '未查看',
        operate: '详情',
      }, {
        key: '7',
        number: 'CL-20170427-0001',
        name: '远程目标判断软件',
        time: '2017/5/18 20:39',
        type: '日常使用登记',
        status: '未查看',
        operate: '详情',
      }, {
        key: '8',
        number: 'CL-20170427-0001',
        name: '远程目标判断软件',
        time: '2017/5/18 20:39',
        type: '日常使用登记',
        status: '未查看',
        operate: '详情',
      }, {
        key: '9',
        number: 'CL-20170427-0001',
        name: '远程目标判断软件',
        time: '2017/5/18 20:39',
        type: '日常使用登记',
        status: '未查看',
        operate: '详情',
      }],
    };
  }
  render() {
    const columns = [{
      title: '登记编号',
      dataIndex: 'number',
    }, {
      title: '软件名称',
      dataIndex: 'name',
    }, {
      title: '记录时间',
      dataIndex: 'time',
    }, {
      title: '记录类型',
      dataIndex: 'type',
    }, {
      title: '状态',
      dataIndex: 'status',
    }, {
      title: '操作',
      dataIndex: 'operate',
      render: (text, row) => <Link to={`/main/SoftwareDaily/RegistrationDetail/${row.key}`}>{text}</Link>,
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
        <div style={{ overflow: 'hidden', marginBottom: 10 }}>
          <ButtonGroup style={{ float: 'left' }}>
            <Button icon="reload" style={{ width: 110, height: 40, fontSize: 14 }}>刷新</Button>
            <Link style={{ color: '#000' }} to="/main/SoftwareDaily/RegistrationNew">
              <Button icon="file-add" style={{ width: 110, height: 40, fontSize: 14, borderRadius: 0 }}>日常登记</Button>
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
          columns={columns}
          dataSource={this.state.dataSource}
        />
      </div>
    );
  }
}


export default Registration;
