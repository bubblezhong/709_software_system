import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Table, Modal } from 'antd';

const confirm = Modal.confirm;


class CollectList extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleShowDetails = this.handleShowDetails.bind(this);
  }


  /**
   * 监听表格变化事件
   * @param {object} pagination 页码
   * @param {object} filters 页码
   * @param {object} sorter 页码
   * @return {null} null
   */
  onChange(pagination, filters, sorter) {
    console.log('params: ', pagination, filters, sorter);
  }

  /**
   * 编辑汇总信息
   * @param {object} record 当前行的单元数据
   * @return {null} null
   */
  handleEdit(record) {
    console.log('handleEdit: ', record);
    this.props.showCollectForm(record);
  }

  /**
   * TODO 删除汇总信息
   * @param {key} key 当前行的 id
   * @return {null} null
   */
  handleDelete(key) {
    console.log('handleDelete: ', key);
    confirm({
      title: '警告',
      content: '确定要删除该汇总信息吗?',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        })
        .catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    });
  }

  /**
   * 查看详情
   * @param {object} record 当前行的记录
   * @return {null} null
   */
  handleShowDetails(record) {
    this.props.showDetails(record);
  }


  // 表头信息
  columns = [
    {
      title: '汇总标题',
      dataIndex: 'title',
      key: 'title',
      sorter: (a, b) => a.title > b.title,
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 200,
      render: (text, record) => (
        <div>
          <button
            onClick={() => {
              this.handleEdit(record);
            }}
            style={{ marginLeft: 5 }}
            className="tableCellAction"
          >
            修改
          </button>
          <button
            onClick={() => { this.handleDelete(record); }}
            style={{ marginLeft: 5 }}
            className="tableCellAction"
          >
            删除
          </button>
          <button
            onClick={() => { browserHistory.push(`/main/SoftwareDaily/Collect/Detail/${record.id}`); }}
            style={{ marginLeft: 5 }}
            className="tableCellAction"
          >
            查看详情
          </button>
        </div>
      ),
    },
  ]

  render() {
    return (
      <Table
        columns={this.columns}
        onChange={this.onChange}
        bordered
        dataSource={this.props.collectList}
        loading={this.props.isCollectListLoading}
        expandedRowRender={record => <p>{record.description}</p>}
      />
    );
  }
}


CollectList.propTypes = {
  collectList: PropTypes.array.isRequired,
  isCollectListLoading: PropTypes.bool.isRequired,
  showCollectForm: PropTypes.func.isRequired,
  showDetails: PropTypes.func.isRequired,
};


export default CollectList;
