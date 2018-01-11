import React from 'react';
import { Table, Icon, Button } from 'antd';
// import './UndoTask.css';

const MesList = () => {
  const ButtonGroup = Button.Group;
  const Btns = (
    <ButtonGroup style={{ marginBottom: 10 }}>
      <Button icon="reload" style={{ width: 110, height: 40, fontSize: 14 }}>刷新</Button>
      <Button icon="tags-o" style={{ width: 110, height: 40, fontSize: 14 }}>标记已读</Button>
      <Button icon="file-add" style={{ width: 110, height: 40, fontSize: 14 }}>新增下级</Button>
      <Button icon="login" style={{ width: 110, height: 40, fontSize: 14 }}>导入</Button>
      <Button icon="logout" style={{ width: 110, height: 40, fontSize: 14 }}>导出</Button>
      <Button icon="printer" style={{ width: 110, height: 40, fontSize: 14 }}>打印</Button>
      <Button icon="delete" style={{ width: 110, height: 40, fontSize: 14 }}>删除</Button>
    </ButtonGroup>
  );
  const columns = [{
    title: ' ',
    dataIndex: 'mes',
    render: text => <span>{text}</span>,
  }, {
    title: '类型',
    dataIndex: 'type',
    render: text => <span>{text}</span>,
  }, {
    title: '内容',
    dataIndex: 'content',
  }, {
    title: '来源',
    dataIndex: 'source',
  }, {
    title: '时间',
    dataIndex: 'time',
  }];
  const data = [{
    key: '1',
    mes: <Icon type="mail" />,
    type: '软件出库',
    content: '单号：KB-20170426-0002,待您出库软件',
    source: '系统',
    time: '2017/5/18 20:39',
  }, {
    key: '2',
    mes: <Icon type="mail" />,
    type: '软件出库',
    content: '单号：KB-20170426-0002,待您出库软件',
    source: '系统',
    time: '2017/5/18 20:39',
  }, {
    key: '3',
    type: '软件出库',
    content: '单号：KB-20170426-0002,待您出库软件',
    source: '系统',
    time: '2017/5/18 20:39',
  }, {
    key: '4',
    type: '软件出库',
    content: '单号：KB-20170426-0002,待您出库软件',
    source: '系统',
    time: '2017/5/18 20:39',
  }, {
    key: '5',
    type: '软件出库',
    content: '单号：KB-20170426-0002,待您出库软件',
    source: '系统',
    time: '2017/5/18 20:39',
  }, {
    key: '6',
    mes: <Icon type="mail" />,
    type: '软件出库',
    content: '单号：KB-20170426-0002,待您出库软件',
    source: '系统',
    time: '2017/5/18 20:39',
  }, {
    key: '7',
    type: '软件出库',
    content: '单号：KB-20170426-0002,待您出库软件',
    source: '系统',
    time: '2017/5/18 20:39',
  }, {
    key: '8',
    type: '软件出库',
    content: '单号：KB-20170426-0002,待您出库软件',
    source: '系统',
    time: '2017/5/18 20:39',
  }, {
    key: '9',
    type: '软件出库',
    content: '单号：KB-20170426-0002,待您出库软件',
    source: '系统',
    time: '2017/5/18 20:39',
  }, {
    key: '10',
    type: '软件出库',
    content: '单号：KB-20170426-0002,待您出库软件',
    source: '系统',
    time: '2017/5/18 20:39',
  }, {
    key: '11',
    type: '软件出库',
    content: '单号：KB-20170426-0002,待您出库软件',
    source: '系统',
    time: '2017/5/18 20:39',
  }, {
    key: '12',
    type: '软件出库',
    content: '单号：KB-20170426-0002,待您出库软件',
    source: '系统',
    time: '2017/5/18 20:39',
  }, {
    key: '13',
    type: '软件出库',
    content: '单号：KB-20170426-0002,待您出库软件',
    source: '系统',
    time: '2017/5/18 20:39',
  }];

    // rowSelection object indicates the need for row selection
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
      />
    </div>
  );
};
export default MesList;
