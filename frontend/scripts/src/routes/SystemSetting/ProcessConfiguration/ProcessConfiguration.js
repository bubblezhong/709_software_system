import React from 'react';
import { Link } from 'react-router';
import { Table, Button } from 'antd';
import InputSearch from './../../utils/InputSearch';

const ButtonGroup = Button.Group;

class UpgradeScheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        key: '1',
        id: '01',
        name: '流程名称',
        module: '通用',
        creator: '张三',
        time: '2017/5/18 18:21',
        status: '激活',
        detail: '详情',
      }, {
        key: '2',
        id: '01',
        name: '流程名称',
        module: '通用',
        creator: '张三',
        time: '2017/5/18 18:21',
        status: '激活',
        detail: '详情',
      }, {
        key: '3',
        id: '01',
        name: '流程名称',
        module: '通用',
        creator: '张三',
        time: '2017/5/18 18:21',
        status: '激活',
        detail: '详情',
      }, {
        key: '4',
        id: '01',
        name: '流程名称',
        module: '通用',
        creator: '张三',
        time: '2017/5/18 18:21',
        status: '激活',
        detail: '详情',
      }, {
        key: '5',
        id: '01',
        name: '流程名称',
        module: '通用',
        creator: '张三',
        time: '2017/5/18 18:21',
        status: '激活',
        detail: '详情',
      }, {
        key: '6',
        id: '01',
        name: '流程名称',
        module: '通用',
        creator: '张三',
        time: '2017/5/18 18:21',
        status: '激活',
        detail: '详情',
      }, {
        key: '7',
        id: '01',
        name: '流程名称',
        module: '通用',
        creator: '张三',
        time: '2017/5/18 18:21',
        status: '激活',
        detail: '详情',
      }, {
        key: '8',
        id: '01',
        name: '流程名称',
        module: '通用',
        creator: '张三',
        time: '2017/5/18 18:21',
        status: '激活',
        detail: '详情',
      }, {
        key: '9',
        id: '01',
        name: '流程名称',
        module: '通用',
        creator: '张三',
        time: '2017/5/18 18:21',
        status: '激活',
        detail: '详情',
      }, {
        key: '10',
        id: '01',
        name: '流程名称',
        module: '通用',
        creator: '张三',
        time: '2017/5/18 18:21',
        status: '激活',
        detail: '详情',
      }, {
        key: '11',
        id: '01',
        name: '流程名称',
        module: '通用',
        creator: '张三',
        time: '2017/5/18 18:21',
        status: '激活',
        detail: '详情',
      }, {
        key: '12',
        id: '01',
        name: '流程名称',
        module: '通用',
        creator: '张三',
        time: '2017/5/18 18:21',
        status: '激活',
        detail: '详情',
      }],
    };
  }
  render() {
    const columns = [{
      title: 'id',
      dataIndex: 'id',
    }, {
      title: '流程名称',
      dataIndex: 'name',
    }, {
      title: '流程模块',
      dataIndex: 'module',
    }, {
      title: '创建人',
      dataIndex: 'creator',
    }, {
      title: '创建时间',
      dataIndex: 'time',
    }, {
      title: '状态',
      dataIndex: 'status',
    }, {
      title: '操作',
      dataIndex: 'detail',
      render: (text, row) => (
        <Link to={`/main/SystemSetting/ProcessConfigurationDetail/${row.key}`}>详情</Link>
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
        <div>
          <ButtonGroup style={{ marginBottom: 10 }}>
            <Button icon="reload" style={{ width: 110, height: 40, fontSize: 14 }}>刷新</Button>
            <Link to="/main/SystemSetting/ProcessConfigurationNew">
              <Button icon="file-add" style={{ width: 110, height: 40, fontSize: 14, borderRadius: 0 }}>新增</Button>
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
          dataSource={this.state.data}
          pagination={{ pageSize: 10 }}
          bordered
        />
      </div>
    );
  }
}
export default UpgradeScheme;

