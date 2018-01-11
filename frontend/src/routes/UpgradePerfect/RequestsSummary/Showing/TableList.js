import React, { PropTypes } from 'react';
import { Table, Modal } from 'antd';

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
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }
  showModal = () => {
    this.setState({ visible: true });
  }
  render() {
    const {
      // summaryList, // 统计列表
      visible,     // 是否开启弹出框
    } = this.state;
    const {
      summaryList,
      type = 'view',
    } = this.props;
    const tableTitle = (
      <span>
        <h2>关联升级需求</h2>
        {type === 'edit' &&
          <button
            className="tableCellAction"
            onClick={this.showModal}
          >修改</button>
        }
      </span>
    );
    const columns = [
      {
        title: tableTitle,
        children: [
          {
            title: '升级请求标题',
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
              <button
                className="tableCellAction"
                onClick={() => {
                  window.open(`/main/SoftwareDeployment/Scheme/View/${row.id}`);
                }}
              >详情</button>
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
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default TabCards;

TabCards.propTypes = {
  summaryList: PropTypes.array,
  type: PropTypes.string,
};
