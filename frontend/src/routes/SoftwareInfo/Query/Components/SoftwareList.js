import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import {
  Table,
} from 'antd';
import { dictionarySoftware } from './../../../../DataDictionary/index';


class SoftwareList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.columns = [
      {
        title: '软件名称',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name > b.name,
        filteredValue: this.props.filteredSoftwareName || null,
        onFilter: (value, record) => record.category_name.includes(value),
      },
      {
        title: '唯一编码',
        dataIndex: 'UUID',
        key: 'uuid',
      },
      {
        title: '软件类型',
        dataIndex: 'type',
        key: 'type',
        filters: (() => {
          const type = dictionarySoftware.type;
          return Object.keys(type).map((item) => {
            return {
              key: item,
              value: item,
              text: type[item],
            };
          });
        })(),
        filterMultiple: true,
        onFilter: (value, record) => record.type.toString() === value.toString(),
        render: (text) => {
          return dictionarySoftware.type[text.toString()];
        },
      },
      {
        title: '软件状态',
        dataIndex: 'status',
        key: 'status',
        filters: (() => {
          const status = dictionarySoftware.status;
          return Object.keys(status).map((item) => {
            return {
              key: item,
              value: item,
              text: status[item],
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
              onClick={() => {
                browserHistory.push(`/main/SoftwareInfo/Query/Edit/${record.id}`);
              }}
              style={{ marginLeft: 5 }}
              className="tableCellAction"
            >
              修改
            </button>
            <button
              onClick={() => {
                this.props.deleteSoftware(record.id);
              }}
              style={{ marginLeft: 5 }}
              className="tableCellAction"
            >
              删除
            </button>
            <button
              onClick={() => {
                browserHistory.push(`/main/SoftwareInfo/Query/Detail/${record.id}`);
              }}
              style={{ marginLeft: 5 }}
              className="tableCellAction"
            >
              查看详情
            </button>
          </div>
        ),
      },
    ];
    this.onChange = this.onChange.bind(this);
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

  render() {
    console.log('this.props.filteredCategoryName: ', this.props.filteredCategoryName);
    // console.log('this.props.softwareList: ', this.props.softwareList);
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


SoftwareList.propTypes = {
  // 列表数据是否正在加载
  isSoftwareListLoading: PropTypes.bool.isRequired,
  // 软件列表
  softwareList: PropTypes.array.isRequired,
  // // 查看软件详情
  // showSoftwareInfo: PropTypes.func.isRequired,
  // // 显示软件表单
  // showSoftwareForm: PropTypes.func.isRequired,
  // 删除软件
  deleteSoftware: PropTypes.func.isRequired,
  // 谱系筛选
  filteredCategoryName: PropTypes.array.isRequired,
  // 搜索软件名称
  filteredSoftwareName: PropTypes.array.isRequired,
};


export default SoftwareList;
