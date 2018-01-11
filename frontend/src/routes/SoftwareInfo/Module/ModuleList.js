import React, { Component, PropTypes } from 'react';
import { Modal, Table } from 'antd';
import { dictionarySoftware } from './../../../DataDictionary/index';


const confirm = Modal.confirm;


class ModuleList extends Component {

  constructor(props) {
    super(props);
    // 绑定作用域
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }


  /**
   * 编辑单元
   * @param {object} record 当前行的单元数据
   * @return {null} null
   */
  handleEdit(record) {
    console.log('handleEdit: ', record);
    this.props.showModuleForm('edit', record);
  }


  /**
   * 添加下级单元
   * @param {object} record 当前行的单元的 id
   * @return {null} null
   */
  handleAdd(record) {
    console.log('handleAdd: ', record);
    // 显示添加（下级）单元的表单
    this.props.showModuleForm('add', record);
  }


  // /**
  //  * TODO 删除单元
  //  * @param {key} key 当前行的单元的 id
  //  * @return {null} null
  //  */
  // handleDelete(key) {
  //   console.log('handleDelete: ', key);
  //   confirm({
  //     title: '警告',
  //     content: '确定要删除该单元吗?',
  //     onOk() {
  //       return new Promise((resolve, reject) => {
  //         setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
  //       })
  //       .catch(() => console.log('Oops errors!'));
  //     },
  //     onCancel() {},
  //   });
  // }

  /**
   * 删除单元
   * @param {key} key 当前行的单元的 id
   * @return {null} null
   */
  handleDelete(key) {
    console.log('handleDelete: ', key);
    const { handleDeleteModule } = this.props;
    confirm({
      title: '警告',
      content: '确定要删除该单元吗?',
      onOk() {
        const { value: id } = key;
        console.log('id: ', id);
        return handleDeleteModule(id);
      },
      onCancel() {
      },
    });
  }


  render() {
    const columns = [
      {
        title: '单元名称',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name > b.name,
      },
      {
        // TODO 所属谱系名称
        title: '所属谱系',
        dataIndex: 'category_id',
        key: 'category_id',
      },
      {
        // TODO 所属软件名称
        title: '所属软件',
        dataIndex: 'software_info_id',
        key: 'software_info_id',
      },
      {
        title: '单元规模',
        dataIndex: 'magnitude',
        key: 'magnitude',
        render: (text) => {
          return dictionarySoftware.magnitude[text.toString()];
        },
      },
      {
        title: '重要等级',
        dataIndex: 'important_level',
        key: 'important_level',
        render: (text) => {
          return dictionarySoftware.important_level[text.toString()];
        },
      },
      {
        // TODO 研制单位名称
        title: '研制单位',
        dataIndex: 'development_department_id',
        key: 'development_department_id',
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
                this.handleDelete(record);
              }}
              style={{ marginLeft: 5 }}
              className="tableCellAction"
            >
              删除
            </button>
            <button
              onClick={() => {
                this.handleAdd(record);
              }}
              style={{ marginLeft: 5 }}
              className="tableCellAction"
            >
              添加下级单元
            </button>
          </div>
        ),
      },
    ];
    return (
      <div>
        <Table
          columns={columns}
          onChange={this.onChange}
          bordered
          dataSource={this.props.moduleList}
          loading={this.props.isModuleListLoading}
        />
      </div>
    );
  }
}


ModuleList.propTypes = {
  // 单元列表是否处于正在加载的状态
  isModuleListLoading: PropTypes.bool.isRequired,
  // 单元列表
  moduleList: PropTypes.array.isRequired,
  // 显示新建单元的表单
  showModuleForm: PropTypes.func.isRequired,
  // 删除单元
  handleDeleteModule: PropTypes.func.isRequired,
};


export default ModuleList;
