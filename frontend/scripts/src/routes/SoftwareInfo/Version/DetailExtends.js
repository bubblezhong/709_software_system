import React from 'react';
import { Collapse, Table } from 'antd';

const Panel = Collapse.Panel;


const App = (props) => {
  console.log('infoExtends: ', props.infoExtends);
  // eslint-disable-next-line
  const panel = props.infoExtends.map((item, index) => {
    let status = '激活';
    switch (item.status) {
      case 0:
        status = '激活';
        break;
      case 1:
        status = '未激活';
        break;
      case 2:
        status = '已删除';
        break;
      default:
        status = '激活';
    }
    const columns = [{
      title: 'title',
      dataIndex: 'title',
    }, {
      title: 'value',
      dataIndex: 'value',
    }];
    const data = [{
      key: '1',
      title: '软件版本名称',
      value: item.version_name,
    }, {
      key: '2',
      title: '软件版本编号',
      value: item.version_code,
    }, {
      key: '4',
      title: '研发单位',
      value: item.development_department_name,
    }, {
      key: '5',
      title: '操作系统',
      value: item.operation_system,
    }, {
      key: '6',
      title: '软件编码类型',
      value: item.software_language,
    }, {
      key: '7',
      title: '软件存储介质信息',
      value: item.software_storage,
    }, {
      key: '8',
      title: '软件存储介质信息',
      value: item.software_storage,
    }, {
      key: '9',
      title: '软件功能说明',
      value: item.software_info,
    }, {
      key: '10',
      title: '软件规模',
      value: item.software_magnitude,
    }, {
      key: '11',
      title: '软件用途说明',
      value: item.usage,
    }, {
      key: '12',
      title: '附加信息',
      value: item.appendix,
    }, {
      key: '13',
      title: '软件状态',
      value: status,
    }];
    return (
      <Panel
        header={`${item.version_name} ${item.version_code}`}
        key={index}
      >
        <Table
          showHeader={false}
          pagination={false}
          bordered
          columns={columns}
          dataSource={data}
        />
      </Panel>
    );
  });
  return (
    <Collapse>
      {panel}
    </Collapse>
  );
};


export default App;
