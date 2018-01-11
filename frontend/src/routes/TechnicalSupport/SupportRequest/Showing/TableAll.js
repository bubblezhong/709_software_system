import React, { Component } from 'react';
import { message, Table } from 'antd';

const config = require('../../../../../config/config');

class TableAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collectList: [],
      selectId: [],
    };
  }

  componentWillMount = () => {
    this.getCollectList();
  };

  getCollectList = () => {
    const URL_GET_COLLECT_LIST = `${config.host}/sofatware_daily/collect/list`;
    fetch(URL_GET_COLLECT_LIST)
      .then(response => response.json())
      .then((result) => {
        if (result.code === 0) {
          // const list = map.
          this.setState({
            collectList: result.data.list,
          });
        }
      })
      .catch((exception) => {
        console.console.error('URL_GET_COLLECT_LIST: ', URL_GET_COLLECT_LIST);
        console.error('exception: ', exception);
        message.error('获取日常使用情况汇总列表失败', 10);
      });
  };


  rowSelection = {
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
      this.setState({
        selectId: selectedRows,
      });
    },
  };

  render() {
    const columns = [{
      title: '汇总标题',
      dataIndex: 'title',
    }, {
      title: '创建时间',
      dataIndex: 'start_time',
    }];
    return (
      <Table
        rowSelection={this.rowSelection}
        columns={columns}
        dataSource={this.state.collectList}
      />
    );
  }
}
export default TableAll;
