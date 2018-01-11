import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Modal, Table, Input, Button } from 'antd';

const Search = Input.Search;
class SupportSchemeDetailFirstAddRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }
  render() {
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
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
      }),
    };
    const Title = (
      <div>
        <span>技术保11障申请记录</span>
        <Button onClick={() => { this.props.handleCancel(); }} style={{ diaplay: 'inline-block', width: 110, height: 40, fontSize: 14, margin: '0 30px' }}>取消</Button>
        <Button type="primary" style={{ diaplay: 'inline-block', width: 110, height: 40, fontSize: 14 }}>确认</Button>
        <Search
          style={{ width: 380, height: 40, float: 'right' }}
        />
      </div>
    );
    return (
      <Modal
        width="80%"
        height="70%"
        title={Title}
        visible={this.props.visible}
        closable={false}
        footer={null}
      >
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.state.dataSource}
          pagination={{ pageSize: 10 }}
          bordered
        />
      </Modal>
    );
  }
}
SupportSchemeDetailFirstAddRecord.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
};
export default SupportSchemeDetailFirstAddRecord;
