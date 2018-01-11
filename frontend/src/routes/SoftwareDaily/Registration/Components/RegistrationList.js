import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import {
  Table,
  Modal,
} from 'antd';
import moment from 'moment';

const confirm = Modal.confirm;

class RegistrationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // addInfoVisible: false,
      // value: '',
      // tableData: [],
      // selectedRowKeys: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
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
   * 选择表格行
   * @param  {array} selectedRowKeys 选中的行的key组成的数组
   * @param {array} selectedRows 选中的行的数据的数组
   * @return {null}                 null
   */
  onSelectChange(selectedRowKeys, selectedRows) {
    console.log('selectedRowKeys changed: ', selectedRowKeys, selectedRows);
    // this.setState({ selectedRowKeys, selectedRows });
    this.props.onSelectChange(selectedRowKeys, selectedRows);
  }


  /**
   * 编辑汇总信息
   * @param {object} record 当前行的单元数据
   * @return {null} null
   */
  handleEdit(record) {
    console.log('handleEdit: ', record);
    this.props.showRegistrationForm('edit', record);
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
    this.props.showRegistrationInfo(record);
  }

  // 表头信息
  columns = [
    {
      title: '软件名称',
      dataIndex: 'name',
      key: 'name',
      // fixed: 'left',
      // width: 100,
      sorter: (a, b) => a.name > b.name,
    },
    {
      title: '故障发生时间',
      dataIndex: 'fault_time',
      key: 'fault_time',
      // fixed: 'left',
      // width: 100,
      sorter: (a, b) => a.fault_time > b.fault_time,
      render: (a) => { return moment(a).format('YYYY-MM-DD HH:mm:ss'); },
    },
    {
      title: '记录状态',
      dataIndex: 'report_status',
      key: 'report_status',
      // width: 150,
      filters: [{
        text: '草稿',
        value: 1,
      }, {
        text: '未接收',
        value: 2,
      }, {
        text: '已接收',
        value: 3,
      }, {
        text: '待解决',
        value: 4,
      }, {
        text: '已解决',
        value: 5,
      }],
      filterMultiple: true,
      onFilter: (value, record) => record.status.indexOf(value) === 0,
      render: (a) => {
        switch (a) {
          case 1:
            return '草稿';
          case 2:
            return '未接收';
          case 3:
            return '已接收';
          case 4:
            return '待解决';
          case 5:
            return '已解决';
          default:
            return '草稿';
        }
      },
    },
    {
      title: '是否解决',
      dataIndex: 'is_fault_resolved',
      key: 'is_fault_resolved',
      filters: [{
        text: '已解决',
        value: true,
      }, {
        text: '未解决',
        value: false,
      }],
      filterMultiple: true,
      onFilter: (value, record) => record.status.indexOf(value) === 0,
      render: (a) => {
        switch (a) {
          case true:
            return '已解决';
          case false:
            return '未解决';
          default:
            return '已解决';
        }
      },
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
              browserHistory.push(`/main/SoftwareDaily/Registration/Edit/${record.key}`);
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
            onClick={() => {
              browserHistory.push(`/main/SoftwareDaily/Registration/Detail/${record.key}`);
            }}
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
    const { selectedRowKeys } = this.props;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <div>
        <Table
          rowSelection={rowSelection}
          columns={this.columns}
          onChange={this.onChange}
          bordered
          dataSource={this.props.registrationList}
          loading={this.props.isRegistrationListLoading}
        />
      </div>
    );
  }
}


RegistrationList.propTypes = {
  // 列表数据是否正在加载
  isRegistrationListLoading: PropTypes.bool.isRequired,
  // 软件列表
  registrationList: PropTypes.array.isRequired,
  // // 查看软件详情
  // showRegistrationInfo: PropTypes.func.isRequired,
  // // 显示软件表单
  // showRegistrationForm: PropTypes.func.isRequired,
  // // 删除软件
  // deleteRegistration: PropTypes.func.isRequired,
  selectedRowKeys: PropTypes.array,
  onSelectChange: PropTypes.func,
  showRegistrationInfo: PropTypes.func,
  showRegistrationForm: PropTypes.func,
};


export default RegistrationList;
