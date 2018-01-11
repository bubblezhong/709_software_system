import React, { PropTypes } from 'react';
import { Table, Input } from 'antd';
import './AuthorityManage.css';

const Search = Input.Search;
class UnitData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLeft: [{
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
      dataRight: [{
        key: 1,
        name: '中船重工研究所',
        num: '01',
        unitType: '研发单位',
        personInCharge: '李四',
        SuperiorID: '00',
        sort: '1',
        check: '详情',
        children: [{
          key: 11,
          name: '中船重工研究所',
          num: '01',
          unitType: '研发单位',
          personInCharge: '李四',
          SuperiorID: '00',
          sort: '1',
          check: '详情',
        }, {
          key: 12,
          name: '中船重工研究所',
          num: '01',
          unitType: '研发单位',
          personInCharge: '李四',
          SuperiorID: '00',
          sort: '1',
          check: '详情',
          children: [{
            key: 121,
            name: '中船重工研究所',
            num: '01',
            unitType: '研发单位',
            personInCharge: '李四',
            SuperiorID: '00',
            sort: '1',
            check: '详情',
          }],
        }, {
          key: 13,
          name: '中船重工研究所',
          num: '01',
          unitType: '研发单位',
          personInCharge: '李四',
          SuperiorID: '00',
          sort: '1',
          check: '详情',
          children: [{
            key: 131,
            name: '中船重工研究所',
            num: '01',
            unitType: '研发单位',
            personInCharge: '李四',
            SuperiorID: '00',
            sort: '1',
            check: '详情',
            children: [{
              key: 1311,
              name: '中船重工研究所',
              num: '01',
              unitType: '研发单位',
              personInCharge: '李四',
              SuperiorID: '00',
              sort: '1',
              check: '详情',
            }, {
              key: 1312,
              name: '中船重工研究所',
              num: '01',
              unitType: '研发单位',
              personInCharge: '李四',
              SuperiorID: '00',
              sort: '1',
              check: '详情',
            }],
          }],
        }],
      }, {
        key: 2,
        name: '中船重工研究所',
        num: '01',
        check: '详情',
      }, {
        key: 3,
        name: '中船重工研究所',
        num: '01',
        check: '详情',
      }, {
        key: 4,
        name: '中船重工研究所',
        num: '01',
        check: '详情',
      }, {
        key: 5,
        name: '中船重工研究所',
        num: '01',
        check: '详情',
      }, {
        key: 6,
        name: '中船重工研究所',
        num: '01',
        check: '详情',
      }],
    };
  }
  render() {
    const columnsLeft = [{
      title: '编号',
      dataIndex: 'num',
    }, {
      title: '名称',
      dataIndex: 'name',
    }, {
      title: '单位类型',
      dataIndex: 'title',
    }, {
      title: '查看',
      dataIndex: 'detail',
      render: text => <a>{text}</a>,
    }];
    const columnsRight = [{
      title: '编号',
      dataIndex: 'num',
    }, {
      title: '名称',
      dataIndex: 'name',
    }, {
      title: '查看',
      dataIndex: 'check',
      render: text => <a>{text}</a>,
    }];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
      }),
    };
    const UnitTitleLeft = (
      <div className="UnitData_title">
        <span style={{ fontSize: 16 }}>单位</span>
        <Search
          style={{ width: '30%', height: 40, float: 'right' }}
          placeholder="请输入"
        />
      </div>
    );
    const UnitTitleRight = (
      <div className="UnitData_title">
        <span style={{ fontSize: 16 }}>单位【中船重工709所】对应数据</span>
        <Search
          style={{ width: '30%', height: 40, float: 'right' }}
          placeholder="请输入"
        />
      </div>
    );
    return (
      <div style={{ overflow: 'auto', display: this.props.show }}>
        <div className="UnitData_left">
          {UnitTitleLeft}
          <Table
            style={{ width: '100%' }}
            rowSelection={rowSelection}
            columns={columnsLeft}
            dataSource={this.state.dataLeft}
            pagination={{ pageSize: 10 }}
          />
        </div>
        <div className="UnitData_right">
          {UnitTitleRight}
          <Table
            style={{ width: '100%' }}
            rowSelection={rowSelection}
            columns={columnsRight}
            dataSource={this.state.dataRight}
            pagination={{ pageSize: 10 }}
          />
        </div>
      </div>
    );
  }
}
UnitData.propTypes = {
  show: PropTypes.string.isRequired,
};
export default UnitData;
