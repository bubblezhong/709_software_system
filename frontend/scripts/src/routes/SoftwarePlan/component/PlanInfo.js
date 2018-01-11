import React from 'react';
import { Link } from 'react-router';
import { Table, Button } from 'antd';

const InfoShow = () => {
  const ButtonGroup = Button.Group;
  const columns = [{
    title: '序号',
    dataIndex: 'num',
  }, {
    title: '内容',
    dataIndex: 'content',
  }, {
    title: '类型',
    dataIndex: 'type',
  }, {
    title: '制定任务',
    dataIndex: 'operator',
  }, {
    title: '时间',
    dataIndex: 'time',
  }, {
    title: '详情',
    dataIndex: 'detail',
    render: (text, row) => <Link to={`/main/SoftwarePlan/PlanDetail/${row.key}`}>{text}</Link>,
  }];
  const data = [{
    key: '1',
    num: '01',
    content: 'XX出库软件',
    type: '入库计划',
    operator: '张三',
    detail: '详情',
    time: '2017/5/18 20:39',
  }, {
    key: '2',
    num: '02',
    content: 'XX出库软件',
    type: '入库计划',
    operator: '张三',
    detail: '详情',
    time: '2017/5/18 20:39',
  }, {
    key: '3',
    num: '03',
    content: 'XX出库软件',
    type: '入库计划',
    operator: '张三',
    detail: '详情',
    time: '2017/5/18 20:39',
  }, {
    key: '4',
    num: '04',
    content: 'XX出库软件',
    type: '入库计划',
    operator: '张三',
    detail: '详情',
    time: '2017/5/18 20:39',
  }, {
    key: '5',
    num: '05',
    content: 'XX出库软件',
    type: '入库计划',
    operator: '张三',
    detail: '详情',
    time: '2017/5/18 20:39',
  }, {
    key: '6',
    num: '06',
    content: 'XX出库软件',
    type: '入库计划',
    operator: '张三',
    detail: '详情',
    time: '2017/5/18 20:39',
  }, {
    key: '7',
    num: '07',
    content: 'XX出库软件',
    type: '入库计划',
    operator: '张三',
    detail: '详情',
    time: '2017/5/18 20:39',
  }, {
    key: '8',
    num: '08',
    content: 'XX出库软件',
    type: '入库计划',
    operator: '张三',
    detail: '详情',
    time: '2017/5/18 20:39',
  }, {
    key: '9',
    num: '09',
    content: 'XX出库软件',
    type: '入库计划',
    operator: '张三',
    detail: '详情',
    time: '2017/5/18 20:39',
  }, {
    key: '10',
    num: '10',
    content: 'XX出库软件',
    type: '入库计划',
    operator: '张三',
    detail: '详情',
    time: '2017/5/18 20:39',
  }, {
    key: '11',
    num: '11',
    content: 'XX出库软件',
    type: '入库计划',
    operator: '张三',
    detail: '详情',
    time: '2017/5/18 20:39',
  }, {
    key: '12',
    num: '12',
    content: 'XX出库软件',
    type: '入库计划',
    operator: '张三',
    detail: '详情',
    time: '2017/5/18 20:39',
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
      <ButtonGroup style={{ marginBottom: 10 }}>
        <Button icon="reload" style={{ width: 110, height: 40, fontSize: 14 }}>刷新</Button>
        <Button icon="file-add" style={{ width: 110, height: 40, fontSize: 14 }}>新增</Button>
        <Button icon="login" style={{ width: 110, height: 40, fontSize: 14 }}>导入</Button>
        <Button icon="logout" style={{ width: 110, height: 40, fontSize: 14 }}>导出</Button>
        <Button icon="printer" style={{ width: 110, height: 40, fontSize: 14 }}>打印</Button>
        <Button icon="delete" style={{ width: 110, height: 40, fontSize: 14 }}>删除</Button>
      </ButtonGroup>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};
export default InfoShow;
