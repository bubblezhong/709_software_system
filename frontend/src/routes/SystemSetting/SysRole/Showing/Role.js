/* eslint-disable */
import React from 'react';
import { Button, Form, Input, message, Modal, Radio, Table } from 'antd';

const FormItem = Form.Item;
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
        <Form layout="vertical">
          <FormItem label="角色名称">
            {getFieldDecorator('name', {
              initialValue: default_value.name,
              rules: [{ required: true, message: '请输入角色名称!' }],
            })(
              <Input />,
            )}
          </FormItem>
          <FormItem label="角色描述">
            {getFieldDecorator('description', {
              initialValue: default_value.description,
            })(
              <Input type="textarea" />,
            )}
          </FormItem>
          <FormItem >
            {getFieldDecorator('active', {
              initialValue: default_value.active ? default_value.active : 0,
            })(
              <Radio.Group>
                <Radio value={0}>激活</Radio>
                <Radio value={1}>未激活</Radio>
              </Radio.Group>,
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  },
);


class Role extends React.Component {
  constructor() {
    super();
    this.state = {
      edit_temp_value: {},
      edit: false,
      add: false,
    };
    this.deleteRole = this.deleteRole.bind(this);
  }

  columns = [
    {
      title: '角色名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '角色描述',
      dataIndex: 'description',
      key: 'description',
      width: 300,
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text, record) => (
        <span>
          <a onClick={() => {
            this.editRole(record);
          }} style={{ marginLeft: 5 }}>修改</a>
          <a onClick={() => {
            this.deleteRole(record.key);
          }} style={{ marginLeft: 5 }}>删除</a>
        </span>
      ),
    },
  ];

  editRole = (record) => {
    console.log('edit record', record);
    this.setState({ edit: true, edit_temp_value: record });
  };
  addRole = () => {
    this.setState({ add: true });
  };
  saveFormRef = (form) => {
    this.formEdit = form;
  };
  saveAddFormRef = (form) => {
    this.formAdd = form;
  };
  handleCancel = () => {
    this.formEdit.resetFields(); // 初始化表单 刷新掉 default值
    this.formAdd.resetFields();  // 初始化表单 刷新掉 default值
    this.setState({
      edit: false,
      delete: false,
      add: false,
      edit_temp_value: {},
      add_temp_id: '0',
    });
  };

  activeRole = (id, active) => {
    console.log(id);
    const value = active.toString() === '1' ? '取消激活' : '激活';
    const _this = this;
    confirm({
      title: `你确定${value}该角色吗?`,
      content: `${value}该角色可能将导致未知的错误！`,
      onOk() {
        _this.props.activeRole(id, active, () => {
          message.success(`${value}成功！`);
          _this.props.getData();
        });
      },
      onCancel() {
      },
    });
  };


  deleteRole = (id) => {
    console.log(id);
    const _this = this;
    confirm({
      title: '你确定删除该角色吗?',
      content: '删除该角色可能将导致未知的错误！',
      onOk() {
        _this.props.deleteRole(id, (res) => {
          if (res.code === 1000) {
            message.success('删除成功！');
            _this.props.getData();
          } else {
            message.error('删除失败，请重试！');
          }
        });
      },
      onCancel() {
      },
    });
  };

  handleEdit = () => {
    const form = this.formEdit;
    form.validateFields((err, values) => {
      if (!err) {
        values.id = this.state.edit_temp_value.key;
        this.props.editRole(values, (res) => {
          if (res.code === 1000) {
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
        this.props.addRole(values, (res) => {
          if (res.code === 1000) {
            message.success('新建成功！');
            form.resetFields();
            this.props.getData();
            this.setState({ add: false });
          } else {
            message.error('新建失败，请重试！');
          }
        });
      }
    });
  };

  render() {
    console.log('Role Dictionary:', this.props);
    const data = this.props.data.map((item, key) => {
      return { ...item, key };
    });
    return (
      <div>
        <Button type="primary" onClick={() => {
          this.addRole();
        }} style={{ marginBottom: 8 }}>新建角色</Button>
        <Table columns={this.columns} dataSource={data} bordered />
        <CollectionCreateForm
          title="修改角色"
          default_value={this.state.edit_temp_value}
          ref={this.saveFormRef}
          visible={this.state.edit}
          onCancel={this.handleCancel}
          onCreate={this.handleEdit}
        />
        <CollectionCreateForm
          title="新建角色"
          default_value={{ parent_id: this.state.add_temp_id }}
          ref={this.saveAddFormRef}
          visible={this.state.add}
          onCancel={this.handleCancel}
          onCreate={this.handleAdd}
        />
      </div>
    );
  }
}

export default Role;

Role.propTypes = {
  editRole: React.PropTypes.func,
  addRole: React.PropTypes.func,
  getData: React.PropTypes.func,
  data: React.PropTypes.array,
};
