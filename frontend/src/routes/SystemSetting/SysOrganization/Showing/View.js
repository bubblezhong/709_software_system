import React from 'react';
import { Card, Row, Col, Table, Breadcrumb } from 'antd';
// import { Link } from 'react-router';

const columns = [
  {
    title: '属性',
    dataIndex: 'value',
    key: 'value',
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
    dataIndex: 'label',
    key: 'label',
    render: (text) => {
      return (
        <span>{text}</span>
      );
    },
  },
];
const columnsSoft = [
  {
    title: '软件名称',
    dataIndex: 'name',
    key: 'name',
    render: (text, row) => {
      return (  // TODO 改为正确的软件信息页
        <a
          href={`/main/SystemSetting/Organization/View/${row.id}`}
          target="_blank"
          rel="noreferrer noopener"
        >{text}</a>
      );
    },
  },
  {
    title: '安装位置',
    dataIndex: 'install_location',
    key: 'install_location',
  },
  {
    title: '安装时间',
    dataIndex: 'install_time',
    key: 'install_time',
  },
];
const ViewOrg = (props) => {
  const { data, dictionaryMap, softList } = props;
  console.log('props', props);
  let orgTree = null;
  if (data.organizationTree) {
    orgTree = (
      <Breadcrumb separator=">">
        {data.organizationTree.map(item => (
          <Breadcrumb.Item>
            <a
              href={`/main/SystemSetting/Organization/View/${item.id}`}
              target="_blank"
              rel="noreferrer noopener"
            >{item.name}</a></Breadcrumb.Item>
        ))}
      </Breadcrumb>
    );
  }
  const tableData = [
    {
      key: 'name',
      value: '单位名称',
      label: data.name,
    },
    {
      key: 'department_type',
      value: '机构类型',
      label: data.department_type ?
      dictionaryMap.department_type[data.department_type.toString()] : null,
    },
    {
      key: 'orgTree',
      value: '从属关系',
      label: data.organizationTree ? orgTree : null,
    },
  ];
  return (
    <Row type="flex" justify="center" >
      <Col xs={22} sm={20} md={16} lg={14}>
        <Card>
          <h3 style={{ textAlign: 'center', marginBottom: 30 }}>{data.name}</h3>
          <Table
            columns={columns}
            dataSource={tableData}
            pagination={false}
            bordered showHeader={false}
          />
          <h3 style={{ marginTop: 16, marginBottom: 30 }}>软件嵌装情况：</h3>
          <Table
            columns={columnsSoft}
            dataSource={softList}
            rowKey="id"
            bordered
          />
        </Card>
      </Col>
    </Row>
  );
};

ViewOrg.propTypes = {
  data: React.PropTypes.object,
  dictionaryMap: React.PropTypes.object,
  softList: React.PropTypes.array,
};

export default ViewOrg;
