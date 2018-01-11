import React from 'react';
import { Link } from 'react-router';
import { Table, Button } from 'antd';
import MenuManageDetail from './MenuManageDetail';
import InputSearch from './../../utils/InputSearch';

const ButtonGroup = Button.Group;

class OrganizationStructure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false,
      showEdit: false,
      newState: false,
      data: [{
        key: 1,
        num: '01',
        name: '主页',
        superiorID: '01',
        icon: 'desktop',
        status: '未启用',
        operate: '详情',
        children: [{
          key: 11,
          num: '01',
          name: '主页',
          superiorID: '01',
          icon: 'desktop',
          status: '未启用',
          operate: '详情',
        }, {
          key: 12,
          num: '01',
          name: '主页',
          superiorID: '01',
          icon: 'desktop',
          status: '未启用',
          operate: '详情',
          children: [{
            key: 121,
            num: '01',
            name: '主页',
            superiorID: '01',
            icon: 'desktop',
            status: '未启用',
            operate: '详情',
          }],
        }, {
          key: 13,
          num: '01',
          name: '主页',
          superiorID: '01',
          icon: 'desktop',
          status: '未启用',
          operate: '详情',
          children: [{
            key: 131,
            num: '01',
            name: '主页',
            superiorID: '01',
            icon: 'desktop',
            status: '未启用',
            operate: '详情',
            children: [{
              key: 1311,
              num: '01',
              name: '主页',
              superiorID: '01',
              icon: 'desktop',
              status: '未启用',
              operate: '详情',
            }, {
              key: 1312,
              num: '01',
              name: '主页',
              superiorID: '01',
              icon: 'desktop',
              status: '未启用',
              operate: '详情',
            }],
          }],
        }],
      }, {
        key: 2,
        num: '01',
        name: '主页',
        superiorID: '01',
        icon: 'desktop',
        status: '未启用',
        operate: '详情',
      }],
    };
  }
  handleCancel = () => {
    this.setState({ showDetail: false });
  }
  render() {
    const columns = [{
      title: 'ID',
      dataIndex: 'num',
      key: 'num',
    }, {
      title: '菜单名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '上级ID',
      dataIndex: 'superiorID',
      key: 'superiorID',
    }, {
      title: '图标',
      dataIndex: 'icon',
      key: 'personInCharge',
    }, {
      title: '是否启用',
      dataIndex: 'status',
      key: 'unitname',
    }, {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: () => (
        <span>
          <Link onClick={() => { this.setState({ showDetail: true, showEdit: false }); }}>详情</Link>
          &nbsp;&nbsp;
          <Link onClick={() => { this.setState({ showDetail: true, showEdit: true }); }}>编辑</Link>
        </span>
      ),
    }];
  // rowSelection objects indicates the need for row selection
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
      },
    };
    return (
      <div>
        <div>
          <ButtonGroup style={{ marginBottom: 10 }}>
            <Button icon="reload" style={{ width: 110, height: 40, fontSize: 14 }}>刷新</Button>
            <Button icon="file-add" style={{ width: 110, height: 40, fontSize: 14 }} onClick={() => { this.setState({ showDetail: true, newState: true }); }}>
              新增下级
            </Button>
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
        <MenuManageDetail
          newState={this.state.newState}
          visible={this.state.showDetail}
          showEdit={this.state.showEdit}
          handleCancel={this.handleCancel}
        />
      </div>
    );
  }
}


export default OrganizationStructure;
