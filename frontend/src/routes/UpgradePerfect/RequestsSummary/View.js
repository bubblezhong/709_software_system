import React, { PropTypes } from 'react';
import { Row, Col, Table } from 'antd';
// import EditForm from './Showing/EditForm';
import Data from './Data/NewAndEdit';
import TableList from './Showing/TableList';

const columns = [
  {
    title: '属性',
    dataIndex: 'key',
    key: 'key',
    width: '30%',
    render: (text) => {
      return (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <span>{text}</span>
        </div>
      );
    },
  },
  {
    title: '值',
    dataIndex: 'value',
    key: 'value',
    render: (text) => {
      return (
        <span>{text}</span>
      );
    },
  },
];

const Edit = () => {
  // const {
  //   // data,      // Data层 上传新汇总信息
  // } = props;
  // console.log('props', props);

  const dataSource = [
    {
      key: '汇总标题',
      value: 'title',
    }, {
      key: '升级软件所在谱系',
      value: 'tree',
    }, {
      key: '升级软件',
      value: 'software',
    }, {
      key: '描述',
      value: 'discription',
    },
  ];
  return (
    <Row>
      <Col span="16" offset={4}>
        <Table
          showHeader={false}
          columns={columns}
          dataSource={dataSource}
          bordered
          pagination={false}
        />
        <br />
        <TableList summaryList={[]} type="view" />
      </Col>
    </Row>
  );
};

Edit.propTypes = {
  data: PropTypes.object, // edit 需要
};


const NewWithData = props => (<Data><Edit {...props} /></Data>);
export default NewWithData;
