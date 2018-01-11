import React from 'react';
import { Link } from 'react-router';
import { Table } from 'antd';

class SoftwareVersionTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        key: '1',
        number: '01',
        version: 'V1.23.5',
        unitName: 'XX中队指挥所',
        installPos: '主控板',
        time: '2017/5/18 20:39',
        operate: '软件详情',
      }, {
        key: '2',
        number: '01',
        version: 'V1.23.5',
        unitName: 'XX中队指挥所',
        installPos: '主控板',
        time: '2017/5/18 20:39',
        operate: '软件详情',
      }, {
        key: '3',
        number: '01',
        version: 'V1.23.5',
        unitName: 'XX中队指挥所',
        installPos: '主控板',
        time: '2017/5/18 20:39',
        operate: '软件详情',
      }, {
        key: '4',
        number: '01',
        version: 'V1.23.5',
        unitName: 'XX中队指挥所',
        installPos: '主控板',
        time: '2017/5/18 20:39',
        operate: '软件详情',
      }, {
        key: '5',
        number: '01',
        version: 'V1.23.5',
        unitName: 'XX中队指挥所',
        installPos: '主控板',
        time: '2017/5/18 20:39',
        operate: '软件详情',
      }, {
        key: '6',
        number: '01',
        version: 'V1.23.5',
        unitName: 'XX中队指挥所',
        installPos: '主控板',
        time: '2017/5/18 20:39',
        operate: '软件详情',
      }, {
        key: '7',
        number: '01',
        version: 'V1.23.5',
        unitName: 'XX中队指挥所',
        installPos: '主控板',
        time: '2017/5/18 20:39',
        operate: '软件详情',
      }, {
        key: '8',
        number: '01',
        version: 'V1.23.5',
        unitName: 'XX中队指挥所',
        installPos: '主控板',
        time: '2017/5/18 20:39',
        operate: '软件详情',
      }, {
        key: '9',
        number: '01',
        version: 'V1.23.5',
        unitName: 'XX中队指挥所',
        installPos: '主控板',
        time: '2017/5/18 20:39',
        operate: '软件详情',
      }, {
        key: '10',
        number: '01',
        version: 'V1.23.5',
        unitName: 'XX中队指挥所',
        installPos: '主控板',
        time: '2017/5/18 20:39',
        operate: '软件详情',
      }, {
        key: '11',
        number: '01',
        version: 'V1.23.5',
        unitName: 'XX中队指挥所',
        installPos: '主控板',
        time: '2017/5/18 20:39',
        operate: '软件详情',
      }, {
        key: '12',
        number: '01',
        version: 'V1.23.5',
        unitName: 'XX中队指挥所',
        installPos: '主控板',
        time: '2017/5/18 20:39',
        operate: '软件详情',
      }],
    };
  }
  render() {
    const columns = [{
      title: '序号',
      dataIndex: 'number',
    }, {
      title: '当前版本',
      dataIndex: 'version',
    }, {
      title: '研制单位',
      dataIndex: 'unitName',
    }, {
      title: '安装位置',
      dataIndex: 'installPos',
    }, {
      title: '操作',
      dataIndex: 'operate',
      render: text => <Link to="/main/SoftwareInfo/SoftwareInfoDetail/1">{text}</Link>,
    }, {
      title: '时间',
      dataIndex: 'time',
    }];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
      }),
    };
    return (
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={this.state.data}
        pagination={{ pageSize: 10 }}
        bordered
      />
    );
  }
}
export default SoftwareVersionTable;
