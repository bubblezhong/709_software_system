/* eslint-disable */
import React from 'react';
import { Table } from 'antd';

class PlanList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onChange } = this.props;
    const columns = [{
      title: '计划列表:',
      dataIndex: 'title',
      key: 'name',
      sorter: (a, b) => b.id - a.id,
      render: (text, record) => {
        return (
          <a onClick={() => {
            onChange(record.id);
          }}
          >{text}</a>
        );
      },
    }, {
      title: '计划状态:',
      dataIndex: 'states',
      key: 'states',
      sorter: (a, b) => b.states - a.states,
      render: (text) => {
        switch (parseInt(text, 10)) {
          case 0:
            return '仅管理员可见';
          case 1:
            return '已结束';
          case 2:
            return '已发布';
        }
      },
    }];
    return (
      <Table
        columns={columns}
        dataSource={this.props.data}
        rowKey={(record) => (record.id)}
        pagination={false}
      />
    );
  }
}


PlanList.propTypes = {
  onChange: React.PropTypes.func,
  data: React.PropTypes.array,
};
export default PlanList;
