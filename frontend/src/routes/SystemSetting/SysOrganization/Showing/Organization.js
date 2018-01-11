/* eslint-disable */
import React from 'react';
import { Button, Form, Input, message, Modal, Select, Table, TreeSelect } from 'antd';
import { Link } from 'react-router';
import { dictionaryOrganization } from './../../../../DataDictionary/index';

const FormItem = Form.Item;
// const TreeNode = TreeSelect.TreeNode;
const confirm = Modal.confirm;

const CollectionCreateForm = Form.create()(
  (props) => {
    const { visible, onCancel, onCreate, form, treeData, default_value, title } = props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title={title}
        okText="确认"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <FormItem label="机构名称">
            {getFieldDecorator('name', {
              initialValue: default_value.name,
              rules: [{ required: true, message: '请输入机构名称!' }],
            })(
              <Input />,
            )}
          </FormItem>

          <FormItem label="机构类型">
            {getFieldDecorator('department_type', {
              initialValue: default_value.department_type && default_value.department_type.toString(),
              rules: [{ required: true, message: '请输入机构名称!' }],
            })(
              <Select placeholder="请选择机构类型！">
                {Object.keys(dictionaryOrganization.departmentType).map((item, i) => {
                  return (
                    <Select.Option
                      key={i.toString()}
                      value={item}>
                      {dictionaryOrganization.departmentType[item]}
                    </Select.Option>
                  );
                })}
              </Select>,
            )}
          </FormItem>

          <FormItem label="上级机构">
            {getFieldDecorator('parent_id', {
              initialValue: default_value.parent_id === undefined ? '0' : default_value.parent_id,
              rules: [
                { required: true, message: '请选择上级机构名称!' },
                {
                  validator: (rule, value, callback) => {
                    if (value !== default_value.key) {
                      callback();
                      return;
                    }
                    callback('不能选择本机构为上级机构!');
                  },
                },
              ],
            })(
              <TreeSelect
                style={{ width: '100%' }}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={treeData}
                placeholder="请选择上级机构"
                treeDefaultExpandAll
              />,
            )}
          </FormItem>

        </Form>
      </Modal>
    );
  },
);


class Organization extends React.Component {
  constructor() {
    super();
    this.state = {
      edit_temp_value: {},
      edit: false,
      add_temp_id: '0',
      add: false,
    };
  }

  editOrganization = (record) => {
    this.setState({ edit: true, edit_temp_value: record });
  };
  addOrganization = (id) => {
    this.setState({ add: true, add_temp_id: id });
  };
  saveFormRef = (form) => {
    this.formEdit = form;
  };
  saveAddFormRef = (form) => {
    this.formAdd = form;
  };
  handleCancel = () => {
    // 初始化编辑表单 刷新掉 default值
    this.formEdit.resetFields();
    // 初始化新建表单 刷新掉 default值
    this.formAdd.resetFields();
    this.setState({
      edit: false,
      delete: false,
      add: false,
      edit_temp_value: {},
      add_temp_id: '0',
    });
  };

  deleteOrganization = (id) => {
    // console.log(id);
    const _this = this;
    confirm({
      title: '你确定删除该机构吗?',
      content: '删除该机构可能将导致未知的错误！',
      onOk() {
        _this.props.deleteOrganization(id, (res) => {
          if (res.code === 1000) {
            message.success('删除成功！');
          } else {
            message.error('删除失败，请重试！');
          }
          _this.props.getData();
        });
      },
      onCancel() {
      },
    });
  };
  handleEdit = () => {
    const form = this.formEdit;
    form.validateFields((err, values) => {
      console.log('values: ', values);
      if (!err) {
        values.id = this.state.edit_temp_value.key;
        this.props.editOrganization(values, (res) => {
          if (res.code === 3000) {
            message.success('修改成功！');
            form.resetFields();
            this.props.getData();
            this.setState({ edit: false });
          } else {
            message.error('修改失败，请重试！');
          }
        });
      }
    });
  };
  handleAdd = () => {
    const form = this.formAdd;
    form.validateFields((err, values) => {
      if (!err) {
        this.props.addOrganization(values, (res) => {
          if (res.code === 2000) {
            message.success('添加成功！');
            form.resetFields();
            this.props.getData();
            this.setState({ add: false });
          } else {
            message.error('添加失败，请重试！');
          }
        });
      }
    });
  };

  render() {
    console.log('this.props: ', this.props);
    const { dictionaryFilter = {} } = this.props;
    const columns = [
      {
        title: '机构名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '机构类型',
        dataIndex: 'department_type',
        key: 'department_type',
        render: (text) => (
          <span> {dictionaryOrganization.departmentType[text]} </span>
        ),
      },
      {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 250,
        render: (text, record) => (
          <span>
            <a onClick={() => {
              this.editOrganization(record);
            }} style={{ marginLeft: 5 }}>修改</a>
            <a onClick={() => {
              this.deleteOrganization(record.key);
            }} style={{ marginLeft: 5 }}>删除</a>
            <a onClick={() => {
              this.addOrganization(record.key);
            }} style={{ marginLeft: 5 }}>添加下级机构</a>
            <Link style={{ marginLeft: 5 }} to={`/main/SystemSetting/Organization/View/${record.key}`}>查看详情</Link>
          </span>
        ),
      },
    ];

    return (
      <div>
        <Button type="primary" onClick={() => {
          this.addOrganization('0');
        }} style={{ marginBottom: 8 }}>新建机构</Button>
        <Table columns={columns} dataSource={this.props.data} bordered />
        <CollectionCreateForm
          treeData={[{ value: '0', label: '无', children: this.props.data }]}
          title="修改机构信息"
          default_value={this.state.edit_temp_value}
          ref={this.saveFormRef}
          visible={this.state.edit}
          onCancel={this.handleCancel}
          onCreate={this.handleEdit}
          departmentType={dictionaryFilter.departmentType}
        />
        <CollectionCreateForm
          treeData={[{ value: '0', label: '无', children: this.props.data }]}
          title="添加机构信息"
          default_value={{ parent_id: this.state.add_temp_id }}
          ref={this.saveAddFormRef}
          visible={this.state.add}
          onCancel={this.handleCancel}
          onCreate={this.handleAdd}
          departmentType={dictionaryFilter.department_type}
        />
      </div>
    );
  }
}

Organization.propTypes = {
  editOrganization: React.PropTypes.func,
  addOrganization: React.PropTypes.func,
  getData: React.PropTypes.func,
  data: React.PropTypes.array,
  dictionaryFilter: React.PropTypes.object,
  dictionaryMap: React.PropTypes.object,
};


Organization.defaultProps = {
  dictionaryFilter: {},
};

export default Organization;
