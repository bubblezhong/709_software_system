import React, { PropTypes } from 'react';
import { Button, Col, Row, Table } from 'antd';
import { browserHistory, Link } from 'react-router';
import Data from './Data/RequestList';

// eslint-disable-next-line
function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

const RequestList = (props) => {
  const { data } = props;
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
        return (<Link to={`/main/TechnicalSupport/SupportRequest/Steps/${row.id}`}>流程处理</Link>);
      },
    },
  ];
  return (
    <Row>
      <Col span="24">
        <Button
          type="primary"
          style={{ marginBottom: 8 }}
          onClick={() => browserHistory.push('/main/TechnicalSupport/SupportRequest/Steps/new')}
        >新建申请</Button>
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
          bordered
          rowKey="id"
        />
      </Col>
    </Row>
  );
};

RequestList.propTypes = {
  data: PropTypes.array,
};

const RequestListData = props => (<Data><RequestList {...props} /></Data>);
export default RequestListData;
