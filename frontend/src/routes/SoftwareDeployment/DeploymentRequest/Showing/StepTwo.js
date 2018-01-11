/* eslint-disable */
import React, { PropTypes } from 'react';
import { Breadcrumb, Button, Card, Row, Table } from 'antd';
import Data from './../Data/StepOne';
import StepTwoModule from './StepTwoModule';

const columns = [
  {
    title: '属性',
    dataIndex: 'value',
    key: 'value',
    width: '16.7%',
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

const StepTwo = (props) => {
  const {
    defaultValue = {}, // 初始值
    // tree = [],         // 谱系树
    // getSoftware,       // 根据谱系ID获取软件列表
    // software = [],     // 软件列表
    // getModule,         // 根据软件ID获取模块树
    // moduleTree = [],   // 模块树
    type,              // 1: 使用部门 2:管理部门
    step,               // 步骤 2 或 3
    // softwareList = [], // 后端初始化数据
    moduleList = [],   // 后端初始化数据
  } = props;
  // console.log('two defaultValue', defaultValue);

  let softTree = null;
  if (defaultValue.tree_list) {
    softTree = (
      <Breadcrumb separator=">">
        {defaultValue.tree_list.map(item => (
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
      key: 'request_title',
      value: '申请标题:',
      label: defaultValue.request_title,
    },
    {
      key: 'tree_list',
      value: '软件谱系:',
      label: defaultValue.tree_list ? softTree : null,
    },
    {
      key: 'software',
      value: '申请软件:',
      label: defaultValue.software_id,
    },
    {
      key: 'modules',
      value: '软件模块:',
      label: <StepTwoModule modules={defaultValue.modules} moduleList={moduleList} />,
    },
    {
      key: 'request_reason',
      value: '申请原因:',
      label: defaultValue.request_reason,
    },
  ];

  return (
    <Card>
      <Row>
        <Table
          columns={columns}
          dataSource={tableData}
          pagination={false}
          bordered showHeader={false}
        />
      </Row>

      <Row type="flex" justify="end" gutter="8" style={{ marginTop: 16 }}>
        {step === 2 &&
        <Button.Group>
          {type === 1 && <Button type="primary">撤销提交</Button>}
          {type === 2 && <Button type="primary">驳回请求</Button>}
          {type === 2 && <Button type="primary">审核通过</Button>}
        </Button.Group>
        }
        {step === 3 && type === 2 &&
        <Button type="primary">撤销审核</Button>
        }
      </Row>

    </Card>
  );
};

StepTwo.propTypes = {
  // visible: PropTypes.bool,
  // data: PropTypes.array,
  defaultValue: PropTypes.object,
};

const StepOneWithData = props => (<Data><StepTwo {...props} /></Data>);
export default StepOneWithData;
