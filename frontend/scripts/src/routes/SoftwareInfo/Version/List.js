import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Modal, Table } from 'antd';
import { dictionarySoftware } from './../../../DataDictionary/index';

const confirm = Modal.confirm;


class List extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '版本名称',
        dataIndex: 'version_name',
        key: 'version_name',
        sorter: (a, b) => a.version_name > b.version_name,
      },
      {
        title: '软件版本编号',
        dataIndex: 'version_code',
        key: 'version_code',
      },
      {
        title: '研发单位名称',
        dataIndex: 'development_department_name',
        key: 'development_department_name',
      },
      {
        title: '操作系统',
        dataIndex: 'operation_system',
        key: 'operation_system',
        filters: (() => {
          const data = dictionarySoftware.operation_system;
          return Object.keys(data).map((item) => {
            return {
              key: item,
              value: item,
              text: data[item],
            };
          });
        })(),
        onFilter: (value, record) => record.operation_system.toString() === value.toString(),
        render: (text) => {
          return dictionarySoftware.operation_system[text.toString()];
        },
      },
      {
        title: '软件编码类型',
        dataIndex: 'software_language',
        key: 'software_language',
        filters: (() => {
          const data = dictionarySoftware.language;
          return Object.keys(data).map((item) => {
            return {
              key: item,
              value: item,
              text: data[item],
            };
          });
        })(),
        onFilter: (value, record) => record.software_language.toString() === value.toString(),
        render: (text) => {
          return dictionarySoftware.language[text.toString()];
        },
      },
      {
        title: '软件存储介质',
        dataIndex: 'software_storage',
        key: 'software_storage',
      },
      {
        title: '软件规模',
        dataIndex: 'software_magnitude',
        key: 'software_magnitude',
        filters: (() => {
          const data = dictionarySoftware.magnitude;
          return Object.keys(data).map((item) => {
            return {
              key: item,
              value: item,
              text: data[item],
            };
          });
        })(),
        onFilter: (value, record) => record.software_magnitude.toString() === value.toString(),
        render: (text) => {
          return dictionarySoftware.magnitude[text.toString()];
        },
      },
      {
        title: '软件状态',
        dataIndex: 'status',
        key: 'status',
        filters: (() => {
          const data = dictionarySoftware.status;
          return Object.keys(data).map((item) => {
            return {
              key: item,
              value: item,
              text: data[item],
            };
          });
        })(),
        filterMultiple: true,
        onFilter: (value, record) => record.status.toString() === value.toString(),
        render: (text) => {
          return dictionarySoftware.status[text.toString()];
        },
      },
      {
        title: '操作',
        key: 'action',
        dataIndex: 'action',
        render: (text, record) => (
          <div>
            <button
              onClick={() => browserHistory.push(`/main/SoftwareInfo/Version/Edit/${record.key}`)}
              style={{ marginLeft: 5 }}
              className="tableCellAction"
            >
              修改
            </button>
            <button
              onClick={() => this.deleteSoftware(record.key)}
              style={{ marginLeft: 5 }}
              className="tableCellAction"
            >
              删除
            </button>
            <button
              onClick={() => browserHistory.push(`/main/SoftwareInfo/Version/Detail/${record.key}`)}
              style={{ marginLeft: 5 }}
              className="tableCellAction"
            >
              查看详情
            </button>
          </div>
        ),
      },
    ];
    this.state = {
      // addInfoVisible: false,
      // value: '',
      // tableData: [],
    };
    this.onChange = this.onChange.bind(this);
    this.deleteSoftware = this.deleteSoftware.bind(this);
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
   * 删除软件
   * @param {string} key 软件的 ID
   * @return {null} null
   */
  deleteSoftware(key) {
    console.log('deleteSoftware: ', key);
    confirm({
      title: '警告',
      content: '确定要删除该软件吗?',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {
      },
    });
  }

  render() {
    const dataSource = this.props.softwareList.map((item, index) => {
      item.key = index;
      return item;
    });
    return (
      <div>
        <Table
          columns={this.columns}
          onChange={this.onChange}
          bordered
          dataSource={dataSource}
          loading={this.props.isSoftwareListLoading}
        />
      </div>
    );
  }
}


List.propTypes = {
  // 列表数据是否正在加载
  isSoftwareListLoading: PropTypes.bool.isRequired,
  // 软件列表
  softwareList: PropTypes.array.isRequired,
};


export default List;
