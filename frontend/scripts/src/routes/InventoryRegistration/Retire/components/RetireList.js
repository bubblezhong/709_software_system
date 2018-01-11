import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router';
// import moment from 'moment';
// import { getInputList } from './../../../../Models/Process/Input';
// import '../../../Common/Common.css';
// import { dictionaryProcessInput } from './../../../../DataDictionary/index';


const InputList = () => {
  const columns = [{
    title: '单号',
    dataIndex: 'number',
  }, {
    title: '谱系',
    dataIndex: 'ancestry',
  }, {
    title: '软件名称',
    dataIndex: 'name',
  }, {
    title: '软件单元名称',
    dataIndex: 'unit_name',
  }, {
    title: '软件版本',
    dataIndex: 'unit_version',
  }, {
    title: '申请人',
    dataIndex: 'applicant',
  }, {
    title: '研制单位',
    dataIndex: 'creator',
  }, {
    title: '申请时间',
    dataIndex: 'time',
  }, {
    title: '状态',
    dataIndex: 'status',
  }, {
    title: '操作',
    dataIndex: 'operate',
    render: (text, row) => <Link to={`/main/InventoryRegistration/RetireDetail/${row.key}`} >{text}</Link>,
  }];
  const dataSource = [{
    key: '1',
    number: 'CL-20170427-0001',
    ancestry: '应用软件>C类应用软件>对下声呐定位',
    name: '远程目标判断软件',
    unit_name: '声呐控制',
    unit_version: 'V3.0.0.1',
    applicant: '张三',
    creator: '中船重工XX研究所',
    time: '2017/5/18 20:39',
    status: '待录入',
    operate: '详情',
  }, {
    key: '2',
    number: 'CL-20170427-0001',
    ancestry: '应用软件>C类应用软件>对下声呐定位',
    name: '远程目标判断软件',
    unit_name: '声呐控制',
    unit_version: 'V3.0.0.1',
    applicant: '张三',
    creator: '中船重工XX研究所',
    time: '2017/5/18 20:39',
    status: '待录入',
    operate: '详情',
  }, {
    key: '3',
    number: 'CL-20170427-0001',
    ancestry: '应用软件>C类应用软件>对下声呐定位',
    name: '远程目标判断软件',
    unit_name: '声呐控制',
    unit_version: 'V3.0.0.1',
    applicant: '张三',
    creator: '中船重工XX研究所',
    time: '2017/5/18 20:39',
    status: '待录入',
    operate: '详情',
  }, {
    key: '4',
    number: 'CL-20170427-0001',
    ancestry: '应用软件>C类应用软件>对下声呐定位',
    name: '远程目标判断软件',
    unit_name: '声呐控制',
    unit_version: 'V3.0.0.1',
    applicant: '张三',
    creator: '中船重工XX研究所',
    time: '2017/5/18 20:39',
    status: '待录入',
    operate: '详情',
  }, {
    key: '5',
    number: 'CL-20170427-0001',
    ancestry: '应用软件>C类应用软件>对下声呐定位',
    name: '远程目标判断软件',
    unit_name: '声呐控制',
    unit_version: 'V3.0.0.1',
    applicant: '张三',
    creator: '中船重工XX研究所',
    time: '2017/5/18 20:39',
    status: '待录入',
    operate: '详情',
  }, {
    key: '6',
    number: 'CL-20170427-0001',
    ancestry: '应用软件>C类应用软件>对下声呐定位',
    name: '远程目标判断软件',
    unit_name: '声呐控制',
    unit_version: 'V3.0.0.1',
    applicant: '张三',
    creator: '中船重工XX研究所',
    time: '2017/5/18 20:39',
    status: '待录入',
    operate: '详情',
  }, {
    key: '7',
    number: 'CL-20170427-0001',
    ancestry: '应用软件>C类应用软件>对下声呐定位',
    name: '远程目标判断软件',
    unit_name: '声呐控制',
    unit_version: 'V3.0.0.1',
    applicant: '张三',
    creator: '中船重工XX研究所',
    time: '2017/5/18 20:39',
    status: '待录入',
    operate: '详情',
  }, {
    key: '8',
    number: 'CL-20170427-0001',
    ancestry: '应用软件>C类应用软件>对下声呐定位',
    name: '远程目标判断软件',
    unit_name: '声呐控制',
    unit_version: 'V3.0.0.1',
    applicant: '张三',
    creator: '中船重工XX研究所',
    time: '2017/5/18 20:39',
    status: '待录入',
    operate: '详情',
  }, {
    key: '9',
    number: 'CL-20170427-0001',
    ancestry: '应用软件>C类应用软件>对下声呐定位',
    name: '远程目标判断软件',
    unit_name: '声呐控制',
    unit_version: 'V3.0.0.1',
    applicant: '张三',
    creator: '中船重工XX研究所',
    time: '2017/5/18 20:39',
    status: '待录入',
    operate: '详情',
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
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={dataSource}
      bordered
    />
  );
};


export default InputList;
