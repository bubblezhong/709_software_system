import React, { PropTypes } from 'react';
import { Form, Input, Button, TreeSelect, Col, Row, Icon, Table, Popconfirm } from 'antd';
// import { Link } from 'react-router';
import ModalCategory from './ModalCategory';
import ModalOrganizations from './ModalOrganizations';
import ModalSoftware from './ModalSoftware';
import ModulesTree from './../utils/ModulesTree';
import { json2table } from './../utils/json2table';

const FormItem = Form.Item;

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    const { defaultValue } = this.props;
    this.state = {
      defaultValue,
      loading: true,
      visible: {},
      categoryTemp: {},
      organizationsTemp: {},
      softwareTemp: {},
    };
  }
  // 获取初始值
  componentWillReceiveProps = (nextProps) => {
    if (this.state.loading && nextProps.defaultValue.title) {
      this.setState({ defaultValue: nextProps.defaultValue, loading: false });
    }
  }
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { form } = this.props;
  //   form.validateFields((err, values) => {
  //     if (!err) {
  //       values.options = values.options.filter(item => (item.active));
  //       console.log('发送编辑信息: ', values);
  //     } else {
  //       console.log('[err]', err);
  //     }
  //   });
  // }
  submmit = () => {
    const { form } = this.props;
    const { defaultValue } = this.state;
    form.validateFields((err, values) => {
      if (!err) {
        console.log('submmit values', values);
        console.log('submmit defaultValue', defaultValue);
      } else {
        console.log('[err]', err);
      }
    });
  }
  onCancel = () => {
    this.setState({
      visible: {},
      categoryTemp: {},
    });
  }
  addNode = () => {
    console.log('add:', this);
    const temp = this.state.defaultValue;
    temp.items.push({
      category: null,
      group: [{
        organization: [],
        software: [{
          info: { id: null },
          type: null,
          modules: [{ id: null }],
        }],
      }],
    });
    this.setState({ defaultValue: temp });
  }
  copyNode = (indexS) => {
    const indexList = indexS.split('_');
    const temp = this.state.defaultValue;
    // 找到原有信息
    const newNode = temp.items[indexList[0]];
    // 解除深度拷贝
    const deepNewNode = JSON.parse(JSON.stringify(newNode));
    temp.items.push(deepNewNode);
    this.setState({ defaultValue: temp });
  }
  deleteNode = (indexS) => {
    const indexList = indexS.split('_');
    const temp = this.state.defaultValue;
    temp.items.splice(indexList[0], 1);
    this.setState({ defaultValue: temp });
  }
  copyOrganizations = (indexS) => {
    const indexList = indexS.split('_');
    const temp = this.state.defaultValue;
    //  找到原有信息
    const newOrgs = temp.items[indexList[0]].group[indexList[1]];
    // 解除深度拷贝
    const deepNewOrgs = JSON.parse(JSON.stringify(newOrgs));
    temp.items[indexList[0]].group.push(deepNewOrgs);
    this.setState({ defaultValue: temp });
  }
  deleteOrganizations = (indexS) => {
    const indexList = indexS.split('_');
    const temp = this.state.defaultValue;
    temp.items[indexList[0]].group.splice(indexList[1], 1);
    this.setState({ defaultValue: temp });
  }
  copySoftware = (indexS) => {
    const indexList = indexS.split('_');
    const temp = this.state.defaultValue;
    //  找到原有信息
    const newSoft = temp.items[indexList[0]].group[indexList[1]].software[indexList[2]];
    // 解除深度拷贝
    const deepnewSoft = JSON.parse(JSON.stringify(newSoft));
    temp.items[indexList[0]].group[indexList[1]].software.push(deepnewSoft);
    this.setState({ defaultValue: temp });
  }
  deleteSoftware = (indexS) => {
    const indexList = indexS.split('_');
    const temp = this.state.defaultValue;
    temp.items[indexList[0]].group[indexList[1]].software.splice(indexList[2], 1);
    this.setState({ defaultValue: temp });
  }
  editCategory = (value, indexS) => {
    const indexList = indexS.split('_');
    this.setState({
      visible: { category: true },
      categoryTemp: {
        value,
        indexList,
      },
    });
  }
  categoryOnOk = (newValue, indexList) => {
    const temp = this.state.defaultValue;
    temp.items[indexList[0]].category = newValue;
    this.setState({
      defaultValue: temp,
      visible: {},
      categoryTemp: {},
    });
  }
  editOrganization = (value, indexS) => {
    const indexList = indexS.split('_');
    this.setState({
      visible: { organizations: true },
      organizationsTemp: {
        value,
        indexList,
      },
    });
  }
  editSoftware = (value, indexS) => {
    const indexList = indexS.split('_');
    this.setState({
      visible: { software: true },
      softwareTemp: {
        value,
        indexList,
      },
    });
  }

  organizationsOnOk = (newValue, indexList) => {
    const temp = this.state.defaultValue;
    // console.log('temp', temp);
    temp.items[indexList[0]].group[indexList[1]].organization = newValue;
    this.setState({
      defaultValue: temp,
      visible: {},
      organizationsTemp: {},
    });
  }
  softwareOnOk = (newValue, indexList) => {
    const temp = this.state.defaultValue;
    // console.log('temp', temp);
    temp.items[indexList[0]].group[indexList[1]].software[indexList[2]] = newValue;
    this.setState({
      defaultValue: temp,
      visible: {},
      softwareTemp: {},
    });
  }
  render() {
    const { form           // 表单操作
      // , defaultValue      // 初始值
      , getModule          // function 根据 软件id 获取模块信息
      , softwareTree = [], // 谱系-软件 树
    } = this.props;
    const {
      defaultValue,   // 总体值
      visible,        // 弹出框 开启标识
      categoryTemp,   // category 弹框 信息传递
      organizationsTemp, // organizations 弹框 信息传递
      softwareTemp,   // software 弹框 信息传递
     } = this.state;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    const columnsTemp = [
      {
        title: '序号',
        dataIndex: 'key',
        key: 'key',
        width: 50,
        render: (value, row, index) => {
          return index + 1;
        },
      },
      {
        title: '单位类别',
        dataIndex: 'category',
        key: 'category',
        render: (value, row) => {
          const trueChildren = (
            <span>
              {value}
              <Icon
                type="edit"
                style={{ marginLeft: 4 }}
                onClick={() => this.editCategory(value, row.key)}
              />
              <Icon
                type="copy"
                style={{ marginLeft: 4 }}
                onClick={() => this.copyNode(row.key)}
              />
              <Popconfirm title="确定要删除吗？" okText="删除" cancelText="取消" onConfirm={() => this.deleteNode(row.key)}>
                <Icon
                  type="delete"
                  style={{ marginLeft: 4 }}
                />
              </Popconfirm>
            </span>
          );
          const falseChildren = (
            <span>
              <button
                className="tableCellAction"
                onClick={() => this.editCategory(value, row.key)}
              >点击填写</button>
              <Icon
                type="delete"
                style={{ marginLeft: 4 }}
                onClick={() => this.deleteNode(row.key)}
              />
            </span>
          );
          const obj = {
            children: (value) ? trueChildren : falseChildren,
            props: {
              rowSpan: row.categoryRowSpan,
            },
          };
          return obj;
        },
      },
      {
        title: '单位',
        dataIndex: 'organization',
        key: 'organization',
        render: (value, row) => {
          const children = (
            <ul>
              {value.map((item, i) => (
                <li key={i}>
                  <a
                    href={`/main/SystemSetting/Organization/View/${item.id}`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >{item.name}</a>
                </li>
              ))}
            </ul>
          );
          const trueChildren = (
            <span>
              {children}
              <Icon
                type="edit"
                onClick={() => this.editOrganization(value, row.key)}
              />
              <Icon
                type="copy"
                style={{ marginLeft: 4 }}
                onClick={() => this.copyOrganizations(row.key)}
              />
              <Popconfirm
                title="确定要删除吗？"
                okText="删除"
                cancelText="取消" onConfirm={() => this.deleteOrganizations(row.key)}
              >
                <Icon
                  type="delete"
                  style={{ marginLeft: 4 }}
                />
              </Popconfirm>
            </span>
          );
          const falseChildren = (
            <button
              className="tableCellAction"
              onClick={() => this.editOrganization(value, row.key)}
            >点击填选</button>
          );
          const obj = {
            children: value[0] ? trueChildren : falseChildren,
            props: {
              rowSpan: row.orgListRowSpan,
            },
          };
          return obj;
        },
      },
      {
        title: '软件安装位置',
        dataIndex: 'position',
        key: 'position',
      },
      {
        title: '软件版本',
        dataIndex: 'software',
        key: 'software',
        render: (value, row) => {
          const softwareValue = {};
          softwareValue.info = row.software;
          softwareValue.type = row.type;
          softwareValue.modules = row.modules;

          const trueChildren = (
            <span>
              {value.name}
              <Icon
                type="edit"
                onClick={() => this.editSoftware(softwareValue, row.key)}
              />
              <Icon
                type="copy"
                style={{ marginLeft: 4 }}
                onClick={() => this.copySoftware(row.key)}
              />
              <Icon
                type="delete"
                style={{ marginLeft: 4 }}
                onClick={() => this.deleteSoftware(row.key)}
              />
            </span>
          );
          const falseChildren = (
            <button
              className="tableCellAction"
              onClick={() => this.editSoftware(softwareValue, row.key)}
            >点击填选</button>
          );

          return value.name ? trueChildren : falseChildren;
        },
      },
      {
        title: '软件类型',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: '模块信息',
        dataIndex: 'modules',
        key: 'modules',
        render: (value) => {
          console.log('modules value', value);
          const result = (
            <ModulesTree
              list={value}
            />
          );

          // const result = (
          //   <ul>
          //     {value.map((item, i) => (<li key={i}><a>{item.name}</a></li>))}
          //   </ul>
          // );
          return result;
        },
      },
    ];

    const tempViewList = json2table(defaultValue.items);

    return (
      <Row>
        <Col span={24}>
          <Form>
            <FormItem label="方案标题" {...formItemLayout}>
              {getFieldDecorator('title', {
                initialValue: defaultValue.title,
                rules: [{ required: true, message: '请输入申请标题!' }],
              })(
                <Input />
              )}
            </FormItem>

            <FormItem label="安装软件" {...formItemLayout}>
              {getFieldDecorator('software_id', {
                initialValue: defaultValue.software_id ? `software_${defaultValue.software_id}` : null,
                rules: [
                  { required: true, message: '请选择安装的软件!' },
                  {
                    validator: (rule, value, callback) => {
                      console.log('value', value);
                      if (value && value.split('_')[0] === 'software') {
                        callback();
                        getModule(value.split('_')[1]);
                        return;
                      }
                      callback('请选择软件!');
                    },
                  },
                ],
              })(
                <TreeSelect
                  style={{ width: '100%' }}
                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                  treeData={softwareTree}
                  placeholder="请选择需要申请的软件"
                  treeDefaultExpandAll
                />
              )}
            </FormItem>

            <Row>
              <Table
                columns={columnsTemp}
                dataSource={tempViewList} bordered
                pagination={false}
                size="small"
                rowKey="key"
              />
            </Row>

            <FormItem >
              <Row type="flex" justify="space-between" style={{ marginTop: 8 }}>
                <Button
                  onClick={this.addNode}
                >添加单位分类</Button>
                <Button type="primary" onClick={this.submmit}>提交修改</Button>
              </Row>
            </FormItem>

          </Form>
        </Col>
        <ModalCategory
          defaultValue={categoryTemp}
          visible={visible.category}
          title="填写单位分类"
          onOk={this.categoryOnOk}
          onCancel={this.onCancel}
        />
        <ModalOrganizations
          defaultValue={organizationsTemp}
          visible={visible.organizations}
          title="选择单位列表"
          onOk={this.organizationsOnOk}
          onCancel={this.onCancel}
        />
        <ModalSoftware
          defaultValue={softwareTemp}
          visible={visible.software}
          title="选择软件列表"
          onOk={this.softwareOnOk}
          onCancel={this.onCancel}
        />
      </Row>
    );
  }
}

EditForm.propTypes = {
  form: PropTypes.object,
  defaultValue: PropTypes.object,
  getModule: PropTypes.func,
  softwareTree: PropTypes.arr,
};

const NewEditForm = Form.create({})(EditForm);

export default NewEditForm;
