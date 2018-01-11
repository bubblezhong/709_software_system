/* eslint-disable */
import React, { PropTypes } from 'react';
import { Button, Card, Checkbox, Col, Form, Input, message, Modal, Row, Select, Table, Tabs, TreeSelect } from 'antd';
import OrganizationTree from './OrganizationTree';
import RoleList from './RoleList';
import ClassList from './ClassList';

const FormItem = Form.Item;
const confirm = Modal.confirm;
const Option = Select.Option;
const TabPane = Tabs.TabPane;
const CheckboxGroup = Checkbox.Group;

const CollectionCreateForm = Form.create()(
  (props) => {
    const {
      visible, onCancel, onCreate, form,
      organizationList = [], roleList = [], defaultValue, title,
    } = props;
    console.log('roleList: ', roleList);
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
          <FormItem label="登录名">
            {getFieldDecorator('login_name', {
              initialValue: defaultValue.login_name,
              rules: [{ required: true, message: '请输入登录名!' }],
            })(
              <Input />,
            )}
          </FormItem>
          {title === '添加用户' &&
          <FormItem label="初始密码">
            <div style={{ display: 'flex', flexDirecation: 'row', justifyContent: 'flex-start', marginBottom: 16 }}>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入初始密码!' }],
              })(
                <Input size="large" />,
              )}
              <Button
                size="large" style={{ marginLeft: 8 }} onClick={() => {
                  const password = Math.random().toString(36).slice(6).substr(1, 8);
                  form.setFieldsValue({ password });
                }}
              >随机</Button>
            </div>
          </FormItem>
          }
          <FormItem label="所在机构">
            {getFieldDecorator('organization_id', {
              initialValue: defaultValue.organization_id ?
                defaultValue.organization_id.toString() : null,
              rules: [
                { required: true, message: '请选择上级机构名称!' },
              ],
            })(
              <TreeSelect
                style={{ width: '100%' }}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={organizationList}
                placeholder="请选择用户所在机构！"
                treeDefaultExpandAll
              />,
            )}
          </FormItem>
          <FormItem label="用户角色">
            {getFieldDecorator('role_id', {
              initialValue: defaultValue.role_id ? defaultValue.role_id.toString() : null,
              rules: [{ required: true, message: '请选择用户角色!' }],
            })(
              <Select
                style={{ width: '100%' }}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="请选择用户角色！"
              >
                {roleList.map((item) => (
                  <Option value={item.id && item.id.toString()} key={item.id}>{item.name}</Option>
                ))}
              </Select>,
            )}
            {/*<Select*/}
              {/*style={{ width: '100%' }}*/}
              {/*dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}*/}
              {/*placeholder="请选择用户角色！"*/}
            {/*>*/}
              {/*{roleList.map((item) => (*/}
                {/*<Option value={item.id && item.id.toString()} key={item.id}>{item.name}</Option>*/}
              {/*))}*/}
            {/*</Select>*/}
          </FormItem>
          {/*<FormItem label="用户角色">*/}
            {/*<Select defaultValue="lucy" style={{ width: 120 }}>*/}
              {/*<Option value="jack">Jack</Option>*/}
              {/*<Option value="lucy">Lucy</Option>*/}
              {/*<Option value="disabled" disabled>Disabled</Option>*/}
              {/*<Option value="Yiminghe">yiminghe</Option>*/}
            {/*</Select>*/}
          {/*</FormItem>*/}
        </Form>
      </Modal>
    );
  },
);


class User extends React.Component {
  constructor() {
    super();
    this.state = {
      edit_temp_value: {},   // 编辑时存储原信息的地方
      edit: false,           // 是否打开编辑标签
      add_temp_id: '0',      // ？？ 忘了
      add: false,            // 是否打开新建标签
      move_user_targe: {},   // 迁移用户标记
      searchValue: '',      // 搜索信息
      search_targe: [],      // 搜索目标范围
      row_selection_temp: [], // 行选择器 存储
    };
  }

  checkboxOption = [
    { label: '登录名', value: 'login_name' },
    { label: '所在机构', value: 'organization_name' },
    { label: '用户角色', value: 'role_name' },
    { label: '邮箱', value: 'email' },
    { label: '真实姓名', value: 'real_name' },
  ];
  columns = [
    {
      title: '登录名',
      dataIndex: 'login_name',
      key: 'login_name',
    },
    {
      title: '所在机构',
      dataIndex: 'organization_name',
      key: 'organization_id',
    },
    {
      title: '用户角色',
      dataIndex: 'role_name',
      key: 'role_name',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '真实姓名',
      dataIndex: 'real_name',
      key: 'real_name',
    },
    {
      title: '用户组',
      dataIndex: 'class_list',
      key: 'class_list',
      render: (text = []) => {
        // console.log('text: ', text);
        return text.map(item => (item.name)).join('、');
      },
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
      filters: [{
        text: '男',
        value: 0,
      }, {
        text: '女',
        value: 1,
      }],
      onFilter: (value, record) => parseInt(record.gender, 10) === parseInt(value, 10),
      render: (text) => {
        let gender = '未知';
        if (parseInt(text, 10) === 0) {
          gender = '男';
        } else if (parseInt(text, 10) === 1) {
          gender = '女';
        }
        return (
          <span>{gender}</span>
        );
      },
    },
    {
      title: '激活状态',
      dataIndex: 'active',
      key: 'active',
      filters: [{
        text: '激活',
        value: 1,
      }, {
        text: '未激活',
        value: 0,
      }],
      onFilter: (value, record) => parseInt(record.active, 10) === parseInt(value, 10),
      render: (text, record) => (
        // eslint-disable-next-line
        <a
          onClick={() => {
            this.activeUser(record.key, text);
          }}
        >
          {parseInt(text, 10) === 1 ? '激活' : '未激活'}
        </a>
      ),
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text, record) => (
        <span>
          <a
            onClick={() => {
              this.editUser(record);
            }}
            style={{ marginLeft: 5 }}
          >
            修改
          </a>
          <a
            onClick={() => {
              this.deleteUser(record.key);
            }}
            style={{ marginLeft: 5 }}
          >
            删除
          </a>
        </span>
      ),
    },
  ];

  editUser = (record) => {
    this.setState({ edit: true, edit_temp_value: record });
  };
  addUser = () => {
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

  deleteUser = (id) => {
    console.log(id);
    const _this = this;
    confirm({
      title: '你确定删除该用户吗?',
      content: '删除该用户可能将导致未知的错误！',
      onOk() {
        _this.props.deleteUser(id, () => {
          message.success('删除成功！');
        });
      },
      onCancel() {
      },
    });
  };

  activeUser = (id, active) => {
    const _active = parseInt(active, 10);
    console.log(id);
    const value = _active === 1 ? '取消激活' : '激活';
    const _this = this;
    confirm({
      title: `你确定${value}该用户吗?`,
      content: `${value}该用户可能将导致未知的错误！`,
      onOk() {
        _this.props.activeUser(id, _active, (res) => {
          if (res.code === 1000) {
            message.success(`${value}成功！`);
            _this.props.getData();
          } else {
            message.error('修改失败！');
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
        values.id = this.state.edit_temp_value.id;
        console.log('values: ', values);
        console.log('this.state.edit_temp_value: ', this.state.edit_temp_value);
        const { edit_temp_value } = this.state;
        const data = { ...this.state.edit_temp_value, ...values };
        this.props.editUser(data, (res) => {
          if (res.code === 3000) {
            message.success('修改成功！');
            form.resetFields();
            this.props.getData();
            this.setState({ edit: false });
          } else {
            message.error('修改失败！');
          }
        });
      }
    });
  };
  handleAdd = () => {
    const form = this.formAdd;
    form.validateFields((err, values) => {
      if (!err) {
        this.props.addUser(values, (res) => {
          console.log('res: ', res);
          if (res.code === 1000) {
            message.success('添加成功！');
            form.resetFields();
            this.props.getData();
            this.setState({ add: false });
          } else {
            message.error('添加失败！');
          }
        });
      }
    });
  };

  render() {
    const { organization, role, organizationList, classList, data } = this.props;
    const { move_user_targe, searchValue, search_targe } = this.state;
    console.log('organizationList', organizationList);
    // 右上角 按钮信息
    let tempShowingValue = '';
    if (move_user_targe.type === 'organization') {
      tempShowingValue = `机构 ${move_user_targe.label}`;
    } else if (move_user_targe.type === 'role') {
      tempShowingValue = `角色 ${move_user_targe.label}`;
    } else if (move_user_targe.type === 'class') {
      tempShowingValue = `用户组 ${move_user_targe.label}`;
    }

    // 根据筛选信息进行 数据 search filter 匹配
    let userData = data.map((item, key) => {
      return { ...item, key }
    });
    if (searchValue) { // searchValue 搜索文字 不为空时进行检索
      userData = data.filter((item) => {
        // 判断搜索范围内 是否存在匹配项
        // search_targe: [ string, string, ... ]
        return !search_targe.every((target) => {
          // 匹配 是否数据中的 该项 与 目标文字匹配
          if (item[target]) { // 当目标不为 null 进行判断
            return item[target].toString().indexOf(searchValue.toString()) === -1;
          }
          return true;
        });
      });
    }
    console.log('move_user_targe', move_user_targe);
    if (move_user_targe.label) { // 操作域 范围
      if (move_user_targe.type === 'organization') {
        userData = data.filter((item) => {
          return item.organization_id === parseInt(move_user_targe.id, 10);
        });
      } else if (move_user_targe.type === 'role') {
        userData = data.filter((item) => {
          return item.role_id === parseInt(move_user_targe.id, 10);
        });
      } else if (move_user_targe.type === 'class') {
        userData = data.filter((item) => {
          return !item.class_list.every((check) => {
            return check.class_id !== parseInt(move_user_targe.id, 10);
          });
        });
      }
    }
    const rowSelection = {
      onChange: (selectedRowKeys) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, selectedRowKeys);
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
      },
    };
    return (
      <div>
        <Row gutter={8}>
          <Col span={5}>
            <Card style={{ height: '100%' }}>
              <Tabs size="small">
                <TabPane tab="机构" key="1">
                  <OrganizationTree
                    data={organization}
                    data_list={organizationList}
                    onChange={(result) => {
                      this.setState({ move_user_targe: result });
                    }}
                  />
                </TabPane>
                <TabPane tab="角色" key="2">
                  <RoleList
                    data={role}
                    onChange={(result) => {
                      this.setState({ move_user_targe: result });
                    }}
                  />
                </TabPane>
                <TabPane tab="用户组" key="3">
                  <ClassList
                    data={classList}
                    onChange={(result) => {
                      this.setState({ move_user_targe: result });
                    }}
                  />
                </TabPane>
              </Tabs>
            </Card>
          </Col>
          <Col span={19}>
            <div style={{ display: 'flex', flexDirecation: 'row', justifyContent: 'flex-end', marginBottom: 8 }}>
              <Input.Search
                placeholder="搜索"
                onSearch={(value) => {
                  this.setState({ searchValue: value });
                }}
              />
              <Button type="primary" style={{ marginLeft: 8 }} disabled={!tempShowingValue}>
                {tempShowingValue ? `为 ${tempShowingValue} 新建用户` : '请选择操作域'}
              </Button>
              <Button
                type="primary"
                disabled={!tempShowingValue}
                icon="close-circle-o"
                onClick={() => this.setState({ move_user_targe: {} })}
              />
              <Button
                type="primary"
                onClick={() => {
                  this.moveUser();
                }}
                style={{ marginLeft: 8 }}
              >
                转移用户
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  this.addUser();
                }}
                style={{ marginLeft: 8 }}
              >
                新建用户
              </Button>
            </div>
            <div style={{ display: 'flex', flexDirecation: 'row', justifyContent: 'flex-start', marginBottom: 8 }}>
              <span>搜索范围: &nbsp;&nbsp;</span>
              <CheckboxGroup
                options={this.checkboxOption}
                onChange={checkedValues => this.setState({ search_targe: checkedValues })}
              />
            </div>
            <Table
              columns={this.columns}
              dataSource={userData}
              bordered
              rowSelection={rowSelection}
            />
          </Col>
        </Row>

        <CollectionCreateForm
          organizationList={organization}
          roleList={role}
          title="修改用户信息"
          defaultValue={this.state.edit_temp_value}
          ref={this.saveFormRef}
          visible={this.state.edit}
          onCancel={this.handleCancel}
          onCreate={this.handleEdit}
        />
        <CollectionCreateForm
          organizationList={organization}
          roleList={role}
          title="添加用户"
          defaultValue={{}}
          ref={this.saveAddFormRef}
          visible={this.state.add}
          onCancel={this.handleCancel}
          onCreate={this.handleAdd}
        />
      </div>
    );
  }
}

export default User;

User.propTypes = {
  editUser: PropTypes.func,
  addUser: PropTypes.func,
  getData: PropTypes.func,
  organization: PropTypes.array,
  role: PropTypes.array,
  organizationList: PropTypes.array,
  classList: PropTypes.array,
  data: PropTypes.array,
};
