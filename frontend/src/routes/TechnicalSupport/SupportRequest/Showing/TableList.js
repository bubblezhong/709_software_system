/* eslint-disable */
import React, { PropTypes } from 'react';
import { Modal, Table } from 'antd';
import TableAll from './TableAll';

class TabCards extends React.Component {
  constructor() {
    super();
    this.state = {
      summaryList: [],
      visible: false,
    };
  }

  // componentWillReceiveProps () {
  //
  // }
  handleOk = () => {
    const temp = this.state.summaryList;
    temp.push({ a: 'aaa' });
    this.setState({
      summaryList: temp,
      visible: false,
    });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  showModal = () => {
    this.setState({ visible: true });
  };
  handleDelete = () => {
  };

  render() {
    const {
      // summaryList, // 统计列表
      visible,     // 是否开启弹出框
    } = this.state;
    const {
      summaryList,
    } = this.props;
    const tableTitle = (
      <span>
        <h2>关联汇总信息
        </h2>
        <a
          className="tableCellAction"
          onClick={this.showModal}
        >修改</a>
      </span>

    );
    const columns = [
      {
        title: tableTitle,
        children: [
          {
            title: '汇总标题',
            dataIndex: 'title',
            key: 'title',
          },
          {
            title: '创建时间',
            dataIndex: 'create_time',
            key: 'create_time',
          },
          {
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            render: (text, row) => (
              // 之后改成查看日常管理汇总  详情页
              <div>
                <a
                  className="tableCellAction"
                  onClick={() => {
                    window.open(`/main/SoftwareDaily/Collect/Detail/${row.id}`);
                  }}
                >详情</a>
                <a
                  className="tableCellAction"
                  onClick={this.handleDelete(row.id)}
                >删除</a>
              </div>
            ),
          },
        ],
      },
    ];
    // console.log('summaryList', summaryList);
    return (
      <div>
        <Table
          dataSource={summaryList}
          columns={columns}
          bordered
          size="middle"
        />
        <Modal
          title="添加关联汇总信息" visible={visible}
          onOk={this.handleOk} onCancel={this.handleCancel}
        >
          <TableAll />
        </Modal>
      </div>
    );
  }
}

export default TabCards;

TabCards.propTypes = {
  summaryList: PropTypes.array,
};
