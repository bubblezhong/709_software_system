import React, { Component, PropTypes } from 'react';
import { Modal, Table } from 'antd';
import { dictionarySoftware } from './../../../DataDictionary/index';

const confirm = Modal.confirm;


class CategoryList extends Component {

  constructor(props) {
    super(props);
    // 绑定作用域
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }


  /**
   * 编辑谱系
   * @param {object} record 当前行的谱系数据
   * @return {null} null
   */
  handleEdit(record) {
    console.log('handleEdit: ', record);
    this.props.showCategoryForm('edit', record);
  }


  /**
   * 添加下级谱系
   * @param {object} record 当前行的谱系的 id
   * @return {null} null
   */
  handleAdd(record) {
    console.log('handleAdd: ', record);
    // 显示添加（下级）谱系的表单
    this.props.showCategoryForm('add', record);
  }


  /**
   * 删除谱系
   * @param {key} key 当前行的谱系的 id
   * @return {null} null
   */
  handleDelete(key) {
    console.log('handleDelete: ', key);
    const { handleDeleteCategory } = this.props;
    confirm({
      title: '警告',
      content: '确定要删除该谱系吗?',
      onOk() {
        const { value: id } = key;
        console.log('id: ', id);
        return handleDeleteCategory(id);
      },
      onCancel() {
      },
    });
  }


  render() {
    const columns = [
      {
        title: '谱系名称',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name > b.name,
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        width: 100,
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
              onClick={() => {
                this.handleAdd(record);
              }}
              style={{ marginLeft: 5 }}
              className="tableCellAction"
            >
              添加下级谱系
            </button>
            <button
              onClick={() => {
                this.handleDelete(record);
              }}
              style={{ marginLeft: 5 }}
              className="tableCellAction"
            >
              删除
            </button>
          </div>
        ),
      },
    ];
    return (
      <div>
        <Table
          columns={columns}
          bordered
          dataSource={this.props.categoryList}
          loading={this.props.isCategoryListLoading}
          pagination={false}
        />
      </div>
    );
  }
}


CategoryList.propTypes = {
  // 谱系列表是否处于正在加载的状态
  isCategoryListLoading: PropTypes.bool.isRequired,
  // 谱系列表
  categoryList: PropTypes.array.isRequired,
  // 显示新建谱系的表单
  showCategoryForm: PropTypes.func.isRequired,
  // 删除谱系
  handleDeleteCategory: PropTypes.func.isRequired,
};


export default CategoryList;
