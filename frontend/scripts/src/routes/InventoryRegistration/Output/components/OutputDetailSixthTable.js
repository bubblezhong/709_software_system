import React from 'react';
import { Table } from 'antd';

class OutputDetailSixthTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [{
        key: '1',
        acceptanceNumber: 'CL-20170427-0001',
        acceptanceUnit: '中船重工xxx研究所',
        receiver: 'receiver',
        acceptanceTime: '2017-4-26 16:08',
        acceptanceResult: '不通过',
        remark: ' ',
        scanningCopy: '扫描件1',
        operate: '重新验收',
      }, {
        key: '2',
        acceptanceNumber: 'CL-20170427-0001',
        acceptanceUnit: '中船重工xxx研究所',
        receiver: 'receiver',
        acceptanceTime: '2017-4-26 16:08',
        acceptanceResult: '不通过',
        remark: ' ',
        scanningCopy: '扫描件1',
        operate: '重新验收',
      }, {
        key: '3',
        acceptanceNumber: 'CL-20170427-0001',
        acceptanceUnit: '中船重工xxx研究所',
        receiver: 'receiver',
        acceptanceTime: '2017-4-26 16:08',
        acceptanceResult: '不通过',
        remark: ' ',
        scanningCopy: '扫描件1',
        operate: '重新验收',
      }, {
        key: '4',
        acceptanceNumber: 'CL-20170427-0001',
        acceptanceUnit: '中船重工xxx研究所',
        receiver: 'receiver',
        acceptanceTime: '2017-4-26 16:08',
        acceptanceResult: '不通过',
        remark: ' ',
        scanningCopy: '扫描件1',
        operate: '重新验收',
      }, {
        key: '5',
        acceptanceNumber: 'CL-20170427-0001',
        acceptanceUnit: '中船重工xxx研究所',
        receiver: 'receiver',
        acceptanceTime: '2017-4-26 16:08',
        acceptanceResult: '未验收',
        remark: ' ',
        scanningCopy: '扫描件1',
        operate: '重新验收',
      }, {
        key: '6',
        acceptanceNumber: 'CL-20170427-0001',
        acceptanceUnit: '中船重工xxx研究所',
        receiver: 'receiver',
        acceptanceTime: '2017-4-26 16:08',
        acceptanceResult: '未验收',
        remark: ' ',
        scanningCopy: '扫描件1',
        operate: '重新验收',
      }, {
        key: '7',
        acceptanceNumber: 'CL-20170427-0001',
        acceptanceUnit: '中船重工xxx研究所',
        receiver: 'receiver',
        acceptanceTime: '2017-4-26 16:08',
        acceptanceResult: '未验收',
        remark: ' ',
        scanningCopy: '扫描件1',
        operate: '重新验收',
      }, {
        key: '8',
        acceptanceNumber: 'CL-20170427-0001',
        acceptanceUnit: '中船重工xxx研究所',
        receiver: 'receiver',
        acceptanceTime: '2017-4-26 16:08',
        acceptanceResult: '未验收',
        remark: ' ',
        scanningCopy: '扫描件1',
        operate: '重新验收',
      }, {
        key: '9',
        acceptanceNumber: 'CL-20170427-0001',
        acceptanceUnit: '中船重工xxx研究所',
        receiver: 'receiver',
        acceptanceTime: '2017-4-26 16:08',
        acceptanceResult: '未验收',
        remark: ' ',
        scanningCopy: '扫描件1',
        operate: '重新验收',
      }],
    };
  }
  render() {
    const columns = [{
      title: '验收单号',
      dataIndex: 'acceptanceNumber',
      key: 'acceptanceNumber',
    }, {
      title: '验收单位',
      dataIndex: 'acceptanceUnit',
      key: 'acceptanceUnit',
    }, {
      title: '验收人',
      dataIndex: 'receiver',
      key: 'receiver',
    }, {
      title: '验收时间',
      dataIndex: 'acceptanceTime',
      key: 'acceptanceTime',
    }, {
      title: '验收结果',
      dataIndex: 'acceptanceResult',
      key: 'acceptanceResult',
      render: (text) => {
        if (text === '不通过') {
          return <span style={{ color: '#ff0000' }}>{text}</span>;
        }
        return <span>{text}</span>;
      },
    }, {
      title: '备注',
      dataIndex: 'remark',
      key: 'remark',
    }, {
      title: '扫描件',
      dataIndex: 'scanningCopy',
      key: 'scanningCopy',
      render: text => <a>{text}</a>,
    }, {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: text => <a>{text}</a>,
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
        dataSource={this.state.dataSource}
        columns={columns}
        rowSelection={rowSelection}
        bordered
      />
    );
  }
}
export default OutputDetailSixthTable;

