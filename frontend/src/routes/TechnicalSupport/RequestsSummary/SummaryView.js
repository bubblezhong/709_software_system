import React, { PropTypes } from 'react';
import { Row, Col, Table } from 'antd';
import moment from 'moment';
import Data from './Data/Main';

const columns = [
  {
    title: '属性',
    dataIndex: 'value',
    key: 'value',
    width: '30%',
    render: (text) => {
      return (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <span>{text}</span>：
        </div>
      );
    },
  },
  {
    title: '值',
    dataIndex: 'label',
    key: 'label',
    render: (text) => {
      return (
        <span>{text}</span>
      );
    },
  },
];

const data = {
  title: '标题',
  software: '软件',
  create_time: '2017-02-23 22:34:33',
  discription: '描述信息',
  statues: 0,
};


const RequestsSummary = (props) => {
  const tableData = [
    {
      key: 'title',
      value: '汇总标题',
      label: data.title,
    },
    {
      key: 'software',
      value: '汇总软件',
      label: data.software,
    },
    {
      key: 'create_time',
      value: '汇总时间',
      label: moment(data.create_time).format('YYYY年MM月DD日 HH时mm分ss秒'),
    },
    {
      key: 'discription',
      value: '汇总描述',
      label: data.discription,
    },
  ];
  return (
    <Row>
      <Col span="24">
        <Table
          columns={columns}
          dataSource={tableData}
          pagination={false}
          bordered showHeader={false}
        />
      </Col>
    </Row>
  );
};

RequestsSummary.propTypes = {
  dictionary: PropTypes.object,
  authority: PropTypes.object,
};

const MainWithData = props => (<Data><RequestsSummary {...props} /></Data>);
export default MainWithData;
