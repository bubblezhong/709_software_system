import React from 'react';
import { Button, Card, Row, Table } from 'antd';
import Data from './../Data/FormData';

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
    defaultValue, // 初始值
    // getSoftwareByTree, // function 通过谱系树获取软件列表
    // softwareList = [], // array 软件列表
    // tree = [],         // array 谱系图
    type,              // 1: 使用部门 2:管理部门
    step,               // 步骤 2 或 3
  } = props;

  const tableData = [{
    key: 'title',
    value: '申请标题:',
    label: defaultValue.title,
  }, {
    key: 'tree',
    value: '软件谱系:',
    label: defaultValue.tree,
  }, {
    key: 'software',
    value: '申请软件:',
    label: defaultValue.software_id,
  }, {
    key: 'modules',
    value: '软件模块:',
    label: defaultValue.modules,
  }, {
    key: 'request_reason',
    value: '申请描述:',
    label: defaultValue.discription,
  }];

  return (
    <Card>
      <Table
        columns={columns}
        dataSource={tableData}
        pagination={false}
        bordered showHeader={false}
      />
      <Row type="flex" justify="end" gutter="8" style={{ marginTop: 16 }}>
        {step === 1 &&
        <Button.Group>
          {type === 1 && <Button type="primary">撤销提交</Button>}
          {type === 2 && <Button type="primary">驳回请求</Button>}
          {type === 2 && <Button type="primary">审核通过</Button>}
        </Button.Group>
        }
        {step === 2 && type === 2 &&
        <Button type="primary">撤销审核</Button>
        }
      </Row>
    </Card>
  );
};

StepTwo.propTypes = {
  defaultValue: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  step: React.PropTypes.string.isRequired,
};


const StepTwoWithData = props => (<Data><StepTwo {...props} /></Data>);
export default StepTwoWithData;
