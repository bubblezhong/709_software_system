import React, { PropTypes } from 'react';
import { Table } from 'antd';

const Detial = (props) => {
  console.log('props.values', props.values);
  const { values } = props;
  // create_user_id:1
  // create_user_name:"用户1"
  // id:1
  // module_list:"[1,2,3,4,5]"
  // organization_id:1
  // organization_name:"机构1"
  // request_reason:"任意长度字符串"
  // request_title:"任意长度字符串22"
  // software_id:1
  // software_name:"软件名称"
  // states:3
  // target_plan:0

  const columns = [
    {
      title: '属性',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: '值',
      dataIndex: 'value',
      key: 'value',
    },
  ];
  const Org = (
    <a
      href={`/main/SystemSetting/Organization/View/${values.organization_id}`}
      target="_blank"
      rel="noreferrer noopener"
    >{values.organization_name}</a>
  );
  const tableData = [
    {
      key: '申请标题',
      value: values.request_title,
    },
    {
      key: '申请机构',
      value: Org,
    },
    {
      key: '申请人',
      value: values.create_user_name,
    },
    {
      key: '申请软件',
      value: values.software_name,
    },
    {
      key: '申请原因',
      value: values.request_reason,
    },

  ];
  return (
    <Table
      columns={columns}
      dataSource={tableData}
      pagination={false}
      bordered showHeader={false}
      size="small"
    />
  );
};

Detial.propTypes = {
  values: PropTypes.object,
};

export default Detial;
