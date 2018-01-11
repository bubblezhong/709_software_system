import React from 'react';
import { Table, Button } from 'antd';

const History = () => {
  const Btns = (
    <Button icon="reload" style={{ width: 110, height: 40, fontSize: 14, marginBottom: 10, marginLeft: 0 }}>刷新</Button>
  );
  const columns = [{
    title: '类型',
    dataIndex: 'type',
  }, {
    title: '内容',
    dataIndex: 'content',
  }, {
    title: '最后操作人',
    dataIndex: 'operator',
  }, {
    title: '时间',
    dataIndex: 'time',
  }, {
    title: '状态',
    dataIndex: 'status',
  }, {
    title: '详情',
    dataIndex: 'detail',
    render: text => <a>{text}</a>,
  }];
  const data = [{
    key: '1',
    type: '软件入库',
    content: '单号：KB-20170426-0002,待您出库软件',
    operator: '张三',
    time: '2017/5/18 20:39',
    status: '异常关闭',
    detail: '详情',
  }, {
    key: '2',
    type: '软件入库',
    content: '单号：KB-20170426-0002,待您出库软件',
    operator: '张三',
    time: '2017/5/18 20:39',
    status: '异常关闭',
    detail: '详情',
  }, {
    key: '3',
    type: '软件入库',
    content: '单号：KB-20170426-0002,待您出库软件',
    operator: '张三',
    time: '2017/5/18 20:39',
    status: '异常关闭',
    detail: '详情',
  }, {
    key: '4',
    type: '软件入库',
    content: '单号：KB-20170426-0002,待您出库软件',
    operator: '张三',
    time: '2017/5/18 20:39',
    status: '异常关闭',
    detail: '详情',
  }, {
    key: '5',
    type: '软件入库',
    content: '单号：KB-20170426-0002,待您出库软件',
    operator: '张三',
    time: '2017/5/18 20:39',
    status: '异常关闭',
    detail: '详情',
  }, {
    key: '6',
    type: '软件入库',
    content: '单号：KB-20170426-0002,待您出库软件',
    operator: '张三',
    time: '2017/5/18 20:39',
    status: '异常关闭',
    detail: '详情',
  }, {
    key: '7',
    type: '软件入库',
    content: '单号：KB-20170426-0002,待您出库软件',
    operator: '张三',
    time: '2017/5/18 20:39',
    status: '异常关闭',
    detail: '详情',
  }, {
    key: '8',
    type: '软件入库',
    content: '单号：KB-20170426-0002,待您出库软件',
    operator: '张三',
    time: '2017/5/18 20:39',
    status: '异常关闭',
    detail: '详情',
  }, {
    key: '9',
    type: '软件入库',
    content: '单号：KB-20170426-0002,待您出库软件',
    operator: '张三',
    time: '2017/5/18 20:39',
    status: '异常关闭',
    detail: '详情',
  }, {
    key: '10',
    type: '软件入库',
    content: '单号：KB-20170426-0002,待您出库软件',
    operator: '张三',
    time: '2017/5/18 20:39',
    status: '异常关闭',
    detail: '详情',
  }, {
    key: '11',
    type: '软件入库',
    content: '单号：KB-20170426-0002,待您出库软件',
    operator: '张三',
    time: '2017/5/18 20:39',
    status: '异常关闭',
    detail: '详情',
  }, {
    key: '12',
    type: '软件入库',
    content: '单号：KB-20170426-0002,待您出库软件',
    operator: '张三',
    time: '2017/5/18 20:39',
    status: '异常关闭',
    detail: '详情',
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
        dataSource={data}
        pagination={{ pageSize: 10 }}
        bordered
      />
    </div>
  );
};
export default History;
