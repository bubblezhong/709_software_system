import React from 'react';
import { Row, Col, Table } from 'antd';
import Data from './Data/Main';
import EditButton from './Showing/EditButton';

const UpgradeRequest = () => {
  // const { dictionary, authority } = props;
  // console.log('props', props);
  const columns = [
    {
      title: '申请标题',
      dataIndex: 'title',
      sorter: (a, b) => a.title.length - b.title.length,
    },
    {
      title: '申请软件',
      dataIndex: 'software',
      sorter: (a, b) => a.software.length - b.software.length,
    },
    {
      title: '申请时间',
      dataIndex: 'create_time',
      sorter: (a, b) => a.create_time.length - b.create_time.length,
    },
    {
      title: '申请描述',
      dataIndex: 'discription',
      sorter: (a, b) => a.discription.length - b.discription.length,
    },
    {
      title: '申请状态',
      dataIndex: 'statues',
      sorter: (a, b) => a.statues - b.statues,
      render: (text) => {
        let buttons = null;
        switch (parseInt(text, 10)) {
          case 0:
            buttons = (<a>已保存</a>);
            break;
          case 1:
            buttons = (<a>已上报</a>);
            break;
          case 2:
            buttons = (<a>驳回</a>);
            break;
          case 3:
            buttons = (<a>已安排升级任务</a>);
            break;
          default:
            buttons = null;
        }
        return buttons;
      },
    },
    {
      title: '操作',
      render: (text, row) => {
        return (<EditButton type="edit" defaultValue={row} />);
      },
    },
  ];
  const data = [{
    title: '标题',
    software: '软件',
    tree: '7',
    create_time: '2017-02-23 22:34:33',
    discription: '描述信息',
    statues: 0,
  }, {
    title: '标题2',
    software: '软件2',
    tree: '7',
    create_time: '2017-02-24 22:34:33',
    discription: '描述信息2',
    statues: 1,
  }, {
    title: '标题3',
    software: '软件3',
    tree: '7',
    create_time: '2017-02-25 22:34:33',
    discription: '描述信息3',
    statues: 2,
  }];
  return (
    <Row>
      <Col span="24">
        <EditButton />
        <Table
          columns={columns}
          dataSource={data}
          bordered
        />
      </Col>
    </Row>
  );
};


const MainWithData = props => (<Data><UpgradeRequest {...props} /></Data>);
export default MainWithData;
