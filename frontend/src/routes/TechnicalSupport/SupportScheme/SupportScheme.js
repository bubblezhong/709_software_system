import React from 'react';
import { Link } from 'react-router';
import { Table, Button } from 'antd';
import InputSearch from './../../utils/InputSearch';

const ButtonGroup = Button.Group;

class SupportScheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        key: '1',
        num: 'CL-20170427-0001',
        name: '应用软件',
        title: '技术保障申请标题112',
        unit: 'XX日常管理部门',
        operator: '张三',
        time: '2017/5/18 20:39',
        status: '申请中',
        detail: '详情',
      }, {
        key: '2',
        num: 'CL-20170427-0001',
        name: '应用软件',
        title: '技术保障申请标题112',
        unit: 'XX日常管理部门',
        operator: '张三',
        time: '2017/5/18 20:39',
        status: '申请中',
        detail: '详情',
      }, {
        key: '3',
        num: 'CL-20170427-0001',
        name: '应用软件',
        title: '技术保障申请标题112',
        unit: 'XX日常管理部门',
        operator: '张三',
        time: '2017/5/18 20:39',
        status: '申请中',
        detail: '详情',
      }, {
        key: '4',
        num: 'CL-20170427-0001',
        name: '应用软件',
        title: '技术保障申请标题112',
        unit: 'XX日常管理部门',
        operator: '张三',
        time: '2017/5/18 20:39',
        status: '申请中',
        detail: '详情',
      }, {
        key: '5',
        num: 'CL-20170427-0001',
        name: '应用软件',
        title: '技术保障申请标题112',
        unit: 'XX日常管理部门',
        operator: '张三',
        time: '2017/5/18 20:39',
        status: '申请中',
        detail: '详情',
      }, {
        key: '6',
        num: 'CL-20170427-0001',
        name: '应用软件',
        title: '技术保障申请标题112',
        unit: 'XX日常管理部门',
        operator: '张三',
        time: '2017/5/18 20:39',
        status: '申请中',
        detail: '详情',
      }, {
        key: '7',
        num: 'CL-20170427-0001',
        name: '应用软件',
        title: '技术保障申请标题112',
        unit: 'XX日常管理部门',
        operator: '张三',
        time: '2017/5/18 20:39',
        status: '申请中',
        detail: '详情',
      }, {
        key: '8',
        num: 'CL-20170427-0001',
        name: '应用软件',
        title: '技术保障申请标题112',
        unit: 'XX日常管理部门',
        operator: '张三',
        time: '2017/5/18 20:39',
        status: '申请中',
        detail: '详情',
      }, {
        key: '9',
        num: 'CL-20170427-0001',
        name: '应用软件',
        title: '技术保障申请标题112',
        unit: 'XX日常管理部门',
        operator: '张三',
        time: '2017/5/18 20:39',
        status: '申请中',
        detail: '详情',
      }, {
        key: '10',
        num: 'CL-20170427-0001',
        name: '应用软件',
        title: '技术保障申请标题112',
        unit: 'XX日常管理部门',
        operator: '张三',
        time: '2017/5/18 20:39',
        status: '申请中',
        detail: '详情',
      }, {
        key: '11',
        num: 'CL-20170427-0001',
        name: '应用软件',
        title: '技术保障申请标题112',
        unit: 'XX日常管理部门',
        operator: '张三',
        time: '2017/5/18 20:39',
        status: '申请中',
        detail: '详情',
      }, {
        key: '12',
        num: 'CL-20170427-0001',
        name: '应用软件',
        title: '技术保障申请标题112',
        unit: 'XX日常管理部门',
        operator: '张三',
        time: '2017/5/18 20:39',
        status: '申请中',
        detail: '详情',
      }],
    };
  }
  render() {
    const columns = [{
      title: '方案编号',
      dataIndex: 'num',
    }, {
      title: '软件名称',
      dataIndex: 'name',
    }, {
      title: '方案标题',
      dataIndex: 'title',
    }, {
      title: '制定单位',
      dataIndex: 'unit',
    }, {
      title: '制定人',
      dataIndex: 'operator',
    }, {
      title: '制定时间',
      dataIndex: 'time',
    }, {
      title: '状态',
      dataIndex: 'status',
    }, {
      title: '操作',
      dataIndex: 'detail',
      render: (text, row) => <Link to={`/main/TechnicalSupport/SupportSchemeDetail/${row.key}`}>{text}</Link>,
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
            <Link to="/main/TechnicalSupport/SupportSchemeNew">
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
        />
      </div>
    );
  }
}
export default SupportScheme;

