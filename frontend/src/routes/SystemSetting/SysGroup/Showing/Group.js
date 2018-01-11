/* eslint-disable */
import React from 'react';
import { Table, Button, Modal, Form, Input, message, Radio } from 'antd';
import GroupNumber from './GroupNumber';

const FormItem = Form.Item;
// const TreeNode = TreeSelect.TreeNode;
const confirm = Modal.confirm;

const CollectionCreateForm = Form.create()(
  (props) => {
    const { visible, onCancel, onCreate, form, default_value, title } = props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title={title}
        okText="确认"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form vertical>
          <FormItem label="用户组名称">
            {getFieldDecorator('name', {
              initialValue: default_value.name,
              rules: [{ required: true, message: '请输入用户组名称!' }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem label="用户组描述">
            {getFieldDecorator('description', {
              initialValue: default_value.description,
            })(
              <Input type="textarea" />
            )}
          </FormItem>
          <FormItem >
            {getFieldDecorator('active', {
              initialValue: default_value.active ? default_value.active : 0,
            })(
              <Radio.Group>
                <Radio value={1}>激活</Radio>
                <Radio value={0}>未激活</Radio>
              </Radio.Group>
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
);


class Group extends React.Component {
  constructor() {
    super();
    this.state = {
      edit_temp_value: {},
      edit: false,
      add: false,
    };
  }
  columns = [
    {
      title: '用户组名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '用户组描述',
      dataIndex: 'description',
      key: 'description',
      width: 300,
    },
    {
      title: '激活状态',
      dataIndex: 'active',
      key: 'active',
      width: 300,
      filters: [{
        text: '激活',
        value: 1,
      }, {
        text: '未激活',
        value: 0,
      }],
      onFilter: (value, record) => record.active === value,
      render: (text, record) => (
        <a onClick={() => { this.activeGroup(record.key, text); }} >{text === 1 ? '激活' : '未激活'}</a>
      )
    },
    {
      title: '用户组成员',
      // dataIndex: 'active',
      // key: 'active',
      // width: 300,
      render: (text, record) => (
        <GroupNumber record={record} />
      ),
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text, record) => (
        <span>
          <a onClick={() => { this.editGroup(record); }} style={{ marginLeft: 5 }}>修改</a>
          <a onClick={() => { this.deleteGroup(record.key); }} style={{ marginLeft: 5 }}>删除</a>
        </span>
      ),
    },
  ]

  editGroup = (record) => {
    this.setState({ edit: true, edit_temp_value: record });
  }
  addGroup = () => {
    this.setState({ add: true });
  }
  saveFormRef = (form) => {
    this.formEdit = form;
  }
  saveAddFormRef = (form) => {
    this.formAdd = form;
  }
  handleCancel = () => {
    // 初始化编辑表单 刷新掉 default值
    this.formEdit.resetFields();
    // 初始化添加表单 刷新掉 default值
    this.formAdd.resetFields();
    this.setState({
      edit: false,
      delete: false,
      add: false,
      edit_temp_value: {},
      add_temp_id: '0',
    });
  }

  activeGroup = (id, active) => {
    console.log(id);
    const value = active === 1 ? '取消激活' : '激活';
    const _this = this;
    confirm({
      title: `你确定${value}该用户组吗?`,
      content: `${value}该用户组可能将导致未知的错误！`,
      onOk() {
        _this.props.activeGroup(id, active, () => {
          message.success(`${value}成功！`);
          _this.props.getData();
        });
      },
      onCancel() {},
    });
  }


  deleteGroup = (id) => {
    console.log(id);
    const _this = this;
    confirm({
      title: '你确定删除该用户组吗?',
      content: '删除该用户组可能将导致未知的错误！',
      onOk() {
        _this.props.deleteGroup(id, () => {
          message.success('删除成功！');
          this.props.getData();
        });
      },
      onCancel() {},
    });
  }

  handleEdit = () => {
    const form = this.formEdit;
    form.validateFields((err, values) => {
      if (!err) {
        values.id = this.state.edit_temp_value.key;
        this.props.editGroup(values, () => {
          message.success('修改成功！');
          form.resetFields();
          this.props.getData();
          this.setState({ edit: false });
        });
      }
    });
  }
  handleAdd = () => {
    const form = this.formAdd;
    form.validateFields((err, values) => {
      if (!err) {
        this.props.addGroup(values, () => {
          message.success('新建成功！');
          form.resetFields();
          this.props.getData();
          this.setState({ add: false });
        });
      }
    });
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={() => { this.addGroup(); }} style={{ marginBottom: 8 }}>新建用户组</Button>
        <Table columns={this.columns} dataSource={this.props.data} bordered />
        <CollectionCreateForm
          title="修改用户组"
          default_value={this.state.edit_temp_value}
          ref={this.saveFormRef}
          visible={this.state.edit}
          onCancel={this.handleCancel}
          onCreate={this.handleEdit}
        />
        <CollectionCreateForm
          title="新建用户组"
          default_value={{}}
          ref={this.saveAddFormRef}
          visible={this.state.add}
          onCancel={this.handleCancel}
          onCreate={this.handleAdd}
        />
      </div>
    );
  }
}

export default Group;

Group.propTypes = {
  editGroup: React.PropTypes.func,
  addGroup: React.PropTypes.func,
  getData: React.PropTypes.func,
  data: React.PropTypes.array,
};
