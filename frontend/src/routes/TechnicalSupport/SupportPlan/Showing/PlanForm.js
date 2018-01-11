/* eslint-disable */
import React, { PropTypes } from 'react';
import { Button, Col, DatePicker, Form, Icon, Input, Popconfirm, Row, Select, Table, TreeSelect } from 'antd';
import moment from 'moment';
import Data from '../Data/PlanDetail';
import ModalCategory from './ModalCategory';
import ModalOrganizations from './ModalOrganizations';
import ModalPosition from './ModalPosition';
import ModalType from './ModalType';
import ModalRequest from './ModalRequest';
import ModalModules from './ModalModules';
import ModulesTree from './../utils/ModulesTree';
import { json2table } from './../utils/json2table';

const FormItem = Form.Item;

class PlanForm extends React.Component {
  constructor(props) {
    super(props);
    const { defaultValue } = this.props;
    let defaultValueTemp = defaultValue;
    if (!defaultValue) {
      defaultValueTemp = { request_list: [] };
    }
    this.state = {
      defaultValue: defaultValueTemp,
      loading: true,
      visible: {},
      infoTempCategory: {},
      infoTempOrg: {},
      infoTempPosition: {},
      infoTempModules: {},
      infoTempRequest: {},
      infoTempType: {},
    };
  }

  // 获取初始值
  componentWillReceiveProps = (nextProps) => {
    if (this.state.loading && nextProps.defaultValue.title) {
      this.setState({ defaultValue: nextProps.defaultValue, loading: false });
    }
  };
  onSubmmit = () => {
    const { form } = this.props;
    const { defaultValue } = this.state;
    form.validateFields((err, fieldsValue) => {
      if (!err) {
        console.log('submmit values', fieldsValue);
        console.log('submmit defaultValue', defaultValue);
      } else {
        const rangeValue = fieldsValue['dueTime'];
        const values = {
          'dueTime': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
        };                   //格式化日期
        console.log('[err]', err);
      }
    });
  };
  onCancel = () => {
    this.setState({
      visible: {},
      infoTempCategory: {},
      infoTempOrg: {},
      infoTempPosition: {},
      infoTempModules: {},
      infoTempRequest: {},
      infoTempType: {},
    });
  };
  addNode = () => {
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
  };
  copyNode = (indexS) => {
    const indexList = indexS.split('_');
    const temp = this.state.defaultValue;
    // 找到原有信息
    const newNode = temp.items[indexList[0]];
    // 解除深度拷贝
    const deepNewNode = JSON.parse(JSON.stringify(newNode));
    temp.items.push(deepNewNode);
    this.setState({ defaultValue: temp });
  };
  deleteNode = (indexS) => {
    const indexList = indexS.split('_');
    const temp = this.state.defaultValue;
    temp.items.splice(indexList[0], 1);
    this.setState({ defaultValue: temp });
  };
  copyOrganizations = (indexS) => {
    const indexList = indexS.split('_');
    const temp = this.state.defaultValue;
    //  找到原有信息
    const newOrgs = temp.items[indexList[0]].group[indexList[1]];
    // 解除深度拷贝
    const deepNewOrgs = JSON.parse(JSON.stringify(newOrgs));
    temp.items[indexList[0]].group.push(deepNewOrgs);
    this.setState({ defaultValue: temp });
  };
  deleteOrganizations = (indexS) => {
    const indexList = indexS.split('_');
    const temp = this.state.defaultValue;
    temp.items[indexList[0]].group.splice(indexList[1], 1);
    this.setState({ defaultValue: temp });
  };
  copySoftware = (indexS) => {
    const indexList = indexS.split('_');
    const temp = this.state.defaultValue;
    //  找到原有信息
    const newSoft = temp.items[indexList[0]].group[indexList[1]].software[indexList[2]];
    // 解除深度拷贝
    const deepnewSoft = JSON.parse(JSON.stringify(newSoft));
    temp.items[indexList[0]].group[indexList[1]].software.push(deepnewSoft);
    this.setState({ defaultValue: temp });
  };
  deleteSoftware = (indexS) => {
    const indexList = indexS.split('_');
    const temp = this.state.defaultValue;
    temp.items[indexList[0]].group[indexList[1]].software.splice(indexList[2], 1);
    this.setState({ defaultValue: temp });
  };
  editCategory = (value, indexS) => {
    const indexList = indexS.split('_');
    this.setState({
      visible: { category: true },
      infoTempCategory: {
        value,
        indexList,
      },
    });
  };
  categoryOnOk = (newValue, indexList) => {
    const temp = this.state.defaultValue;
    temp.items[indexList[0]].category = newValue;
    this.setState({
      defaultValue: temp,
      visible: {},
      infoTempCategory: {},
    });
  };
  editPosition = (value, indexS) => {
    const indexList = indexS.split('_');
    this.setState({
      visible: { position: true },
      infoTempPosition: {
        value,
        indexList,
      },
    });
  };
  editRequest = () => {
    const { defaultValue } = this.state;
    this.setState({
      visible: { request: true },
      infoTempRequest: {
        value: defaultValue.request_list,
      },
    });
  };
  requestOnOk = (newValue) => {
    const temp = this.state.defaultValue;
    temp.request_list = newValue;
    // console.log('newValue', newValue);
    this.setState({
      defaultValue: temp,
      visible: {},
      infoTempRequest: {},
    });
  };
  positionOnOk = (newValue, indexList) => {
    const temp = this.state.defaultValue;
    temp.items[indexList[0]].group[indexList[1]].software[indexList[2]].position = newValue;
    this.setState({
      defaultValue: temp,
      visible: {},
      infoTempPosition: {},
    });
  };
  modulesOnOk = (newValue, indexList) => {
    const temp = this.state.defaultValue;
    // console.log('OKKKK', newValue, indexList);
    temp.items[indexList[0]].group[indexList[1]].software[indexList[2]].modules = newValue;
    this.setState({
      defaultValue: temp,
      visible: {},
      infoTempModules: {},
    });
  };
  editOrganization = (value, indexS) => {
    const indexList = indexS.split('_');
    this.setState({
      visible: { organizations: true },
      infoTempOrg: {
        value,
        indexList,
      },
    });
  };
  editType = (value, indexS) => {
    const indexList = indexS.split('_');
    this.setState({
      visible: { type: true },
      infoTempType: {
        value,
        indexList,
      },
    });
  };
  typeOnOk = (newValue, indexList) => {
    const temp = this.state.defaultValue;
    temp.items[indexList[0]].group[indexList[1]].software[indexList[2]].type = newValue;
    this.setState({
      defaultValue: temp,
      visible: {},
      infoTempType: {},
    });
  };

  editModules = (value, indexS) => {
    const indexList = indexS.split('_');
    this.setState({
      visible: { modules: true },
      infoTempModules: {
        value,
        indexList,
      },
    });
  };

  organizationsOnOk = (newValue, indexList) => {
    const temp = this.state.defaultValue;
    // console.log('temp', temp);
    temp.items[indexList[0]].group[indexList[1]].organization = newValue;
    this.setState({
      defaultValue: temp,
      visible: {},
      infoTempOrg: {},
    });
  };

  render() {
    const {
      form,           // 表单操作
      getModule,          // function 根据 软件id 获取模块信息
      getSoftware,        // function 根据 谱系id 获取软件列表
      // softwareTree = [],  // 谱系-软件 树
      treeTree = [],      // 谱系树
      softwareList = [],  // 软件列表
      moduleTree = [],    // 模块树
      moduleList = [],    // 模块列表
    } = this.props;
    const {
      defaultValue,   // 总体值
      visible,        // 弹出框 开启标识
      // infoTemp,       // 所有的 信息传递
      infoTempCategory = {},
      infoTempOrg = {},
      infoTempPosition = {},
      infoTempModules = {},
      infoTempRequest = {},
      infoTempType = {},
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
              <Popconfirm title="确定要删除吗？" okText="删除"
                          cancelText="取消" onConfirm={() => this.deleteNode(row.key)}
              >
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
        render: (value, row) => {
          const trueChildren = (
            <span>
              {value}
              <Icon
                type="edit"
                onClick={() => this.editPosition(value, row.key)}
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
              onClick={() => this.editPosition(value, row.key)}
            >点击填选</button>
          );
          return value ? trueChildren : falseChildren;
        },
      },
      {
        title: '软件类型',
        dataIndex: 'type',
        key: 'type',
        render: (value, row) => {
          const trueChildren = (
            <span>
              {value}
              <Icon
                type="edit"
                onClick={() => this.editType(value, row.key)}
              />
            </span>
          );
          const falseChildren = (
            <button
              className="tableCellAction"
              onClick={() => this.editPosition(value, row.key)}
            >点击填选</button>
          );
          return value ? trueChildren : falseChildren;
        },
      },
      {
        title: '模块信息',
        dataIndex: 'modules',
        key: 'modules',
        render: (value, row) => {
          // console.log('modules value', value);
          const result = (
            <div>
              <Icon
                type="edit"
                onClick={() => this.editModules(value, row.key)}
              />
              <ModulesTree
                list={value}
              />
            </div>
          );

          return result;
        },
      },
    ];

    const tempViewList = json2table(defaultValue.items);
    // console.log('softwareList', softwareList);
    const softwareListOptions = softwareList.map((item) => {
      const key = item.key.toString();
      return (
        <Select.Option value={key} key={key}>
          {item.name}
        </Select.Option>
      );
    });
    // console.log('========defaultValue.request_list', defaultValue.request_list);
    return (
      <Row>
        <Col span={24}>
          <Form>
            <FormItem label="方案标题" {...formItemLayout}>
              {getFieldDecorator('title', {
                initialValue: defaultValue.title,
                rules: [{ required: true, message: '请输入申请标题!' }],
              })(
                <Input />,
              )}
            </FormItem>

            <FormItem label="安装软件所在谱系" {...formItemLayout}>
              {getFieldDecorator('tree_id', {
                initialValue: defaultValue.tree_id,
                rules: [
                  { required: true, message: '请选择软件所在谱系!' },
                  {
                    validator: (rule, value, callback) => {
                      // console.log('value', value);
                      if (value) {
                        getSoftware(value);
                        callback();
                        return;
                      }
                      callback('请选择软件所在谱系!');
                    },
                  },
                ],
              })(
                <TreeSelect
                  style={{ width: '100%' }}
                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                  treeData={treeTree}
                  placeholder="请选择软件所在谱系！"
                  treeDefaultExpandAll
                />,
              )}
            </FormItem>

            <FormItem label="安装软件" {...formItemLayout}>
              {getFieldDecorator('software_id', {
                initialValue: defaultValue.software_id,
                rules: [
                  { required: true, message: '请选择安装的软件!' },
                  {
                    validator: (rule, value, callback) => {
                      // console.log('value', value);
                      if (value) {
                        getModule(value);
                        callback();
                        return;
                      }
                      callback('请选择软件!');
                    },
                  },
                ],
              })(
                <Select
                  style={{ width: '100%' }}
                  placeholder="请选择需要申请的软件"
                >
                  {softwareListOptions}
                </Select>,
              )}
            </FormItem>
            <FormItem label="任务完成时间段" {...formItemLayout}>
              {getFieldDecorator('dueTime', {
                initialValue: defaultValue.dueTime &&
                defaultValue.dueTime.map((ele) => moment(ele, 'YYYY/MM/DD')),
                rules: [{ type: 'array', required: true, message: '请输入任务完成时间段' }],
              })(
                <DatePicker.RangePicker />,
              )}
            </FormItem>
            <FormItem label="相关调配请求" {...formItemLayout}>
              {
                !defaultValue.request_list && '加载中...'
              }{defaultValue.request_list &&
            defaultValue.request_list.length === 0 &&
            '暂无相关请求'
            }{defaultValue.request_list &&
            defaultValue.request_list.length === 1 &&
            `${defaultValue.request_list[0].request_title} 共1条`
            }{defaultValue.request_list &&
            defaultValue.request_list.length > 1 &&
            `${defaultValue.request_list[0].request_title} 等 共
                ${defaultValue.request_list.length}条`
            }{`  `}
              <Button
                size="small"
                onClick={() => {
                  this.editRequest();
                }}
              >选择</Button>
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
                <Button type="primary" onClick={this.onSubmmit}>提交修改</Button>
              </Row>
            </FormItem>

          </Form>
        </Col>
        <ModalRequest
          defaultValue={infoTempRequest}
          visible={visible.request}
          title="选择关联调配请求"
          onOk={this.requestOnOk}
          onCancel={this.onCancel}
        />
        <ModalCategory
          defaultValue={infoTempCategory}
          visible={visible.category}
          title="填写单位分类"
          onOk={this.categoryOnOk}
          onCancel={this.onCancel}
        />
        <ModalOrganizations
          defaultValue={infoTempOrg}
          visible={visible.organizations}
          title="选择单位列表"
          onOk={this.organizationsOnOk}
          onCancel={this.onCancel}
        />
        <ModalPosition
          defaultValue={infoTempPosition}
          visible={visible.position}
          title="选择软件安装位置"
          onOk={this.positionOnOk}
          onCancel={this.onCancel}
        />
        <ModalType
          defaultValue={infoTempType}
          visible={visible.type}
          title="选择软件类别"
          onOk={this.typeOnOk}
          onCancel={this.onCancel}
        />
        <ModalModules
          defaultValue={infoTempModules}
          visible={visible.modules}
          title="选择软件模块组成"
          onOk={this.modulesOnOk}
          onCancel={this.onCancel}
          moduleTree={moduleTree}
          moduleList={moduleList}
        />
      </Row>
    );
  }
}


PlanForm.propTypes = {
  form: PropTypes.object,
  defaultValue: PropTypes.object,
};

const FormShow = Form.create({})(PlanForm);
const PlanFormData = (props) => (<Data {...props}><FormShow {...props} /></Data>);
export default PlanFormData;
