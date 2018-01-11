import React, { Component, PropTypes } from 'react';
import {
  Button,
  Card,
  Checkbox,
  Col,
  Form,
  Icon,
  Input,
  message,
  Row,
  Select,
  Spin,
  Tabs,
  Tooltip,
  TreeSelect,
} from 'antd';
import { browserHistory } from 'react-router';
import { ListToTree } from './../../../../utils/list2tree';
import ModuleForm from './ModuleForm';
import { getSoftwareCategoryList } from './../../../../Models/Category/Category';
import { getSoftwareByCategoryId } from './../../../../Models/Software/Software';
import { getSoftwareModuleListBySoftwareId } from './../../../../Models/Module/Module';
import { inputStart } from './../../../../Models/Process/Input';


const config = require('./../../../../../config/config');


const FormItem = Form.Item;
const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;
const TabPane = Tabs.TabPane;

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputForm: false,
      checkedCategoryId: null,
      checkedList: [], // checked module list
      options: [],
      categoryList: [],
      isLoading: false,
      softwareList: [], // software list by checked category id
      softwareId: null,  // software id
    };
    this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
    this.handleGetSoftwareByCategoryId = this.handleGetSoftwareByCategoryId.bind(this);
    this.categoryList = this.categoryList.bind(this);
    this.handleInputStart = this.handleInputStart.bind(this);
  }


  componentWillMount() {
    // TODO 初始化模块
    this.categoryList();
    // this.setState({
    //   options: [
    //     { label: '软件模块1', value: 'mod-1' },
    //     { label: '软件模块2', value: 'mod-2' },
    //     { label: '软件模块3', value: 'mod-3' },
    //   ],
    //   checkedList: ['mod-1', 'mod-2', 'mod-3'],
    // });
  }


  /**
   * 监听 checkbox 的改变
   * @param  {number|string} checkedCategoryId 改变后选中的项
   * @return {null}             null
   */
  onChange(checkedCategoryId) {
    console.log('checkedCategoryId: ', checkedCategoryId);
    this.setState({ checkedCategoryId }, () => {
      this.handleGetSoftwareByCategoryId(checkedCategoryId);
    });
  }


  /**
   * 监听 chekcbox of module list 的改变
   * @param  {array} checkedList 改变后选中的项
   * @return {null}             null
   */
  onCheckBoxChange(checkedList) {
    console.log('checkedList: ', checkedList);
    this.setState({ checkedList });
  }

  /**
   * 提交申请表单
   * @return {null} null
   */
  async handleClick() {
    // eslint-disable-next-line
    console.log('this.refs: ', this.refs);
    const { checkedList } = this.state;
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const modules = [];
        for (let i = 0; i < checkedList.length; i++) {
          // eslint-disable-next-line
          console.log(`ref${i}:`, this.refs[`ref${i}`]);
          // eslint-disable-next-line
          if (!(this.refs[`ref${i}`])) {
            // 如果没有加载对应的 module form，则不能提交继续获取表单的值
            message.error('请填写单元信息');
            return false;
          }
          // eslint-disable-next-line
          this.refs[`ref${i}`].validateFieldsAndScroll((err, values) => {
            if (!err) {
              // console.log('111Received values of form: ', values);
              modules.push(values);
            }
          });
        }
        // 判断  module form 的数据项数是否等于 checkedList.length
        // 如果不等，说明数据获取不全
        if (modules.length !== checkedList.length) {
          message.error('请填写单元信息', 5);
          return false;
        }
        console.log('all form modules: ', modules);
        const data = {
          ...values,
          modules,
        };
        const fixData = {
          softwareId: data.software_id,
          categoryId: data.category_id,
          description: data.apply_note,
          data: data.modules.map((item) => {
            return {
              developmentId: item.development_organization_id,
              magnitude: item.MAGNITUDE,
              softwareLocation: item.STORAGE_LOCATION,
              perpresentative: item.development_organization_id,
              starageType: item.STORAGE_TYPE,
              operationType: item.operation_system,
              versionName: item.version_name,
              versionCode: item.version_code,
              installLocation: item.INSTALL_LOCATION,
              attachment: '',
              description: item.DESCRIPTION,
            };
          }),
        };
        console.log('fixData: ', fixData);
        this.handleInputStart(fixData);
      }
    });
  }


  async handleInputStart(data) {
    this.setState({ isLoading: true });
    try {
      const { res } = await inputStart(data);
      if (res.code === 1000) {
        message.success('操作成功！');
        this.setState({ isLoading: false });
        browserHistory.push('/main/InventoryRegistration/Input/Approve');
      } else {
        message.error(res.message || '操作失败，请重试');
        this.setState({ isLoading: false });
      }
    } catch (exception) {
      message.error(exception.message || '操作失败，请重试');
      this.setState({ isLoading: false });
    }
  }


  /**
   * 获取软件谱系列表
   * @return {null} null
   */
  async categoryList() {
    this.setState({
      isLoading: true,
    });
    const { res } = await getSoftwareCategoryList();
    console.log('res: ', res);
    // 判断返回的个人信息是否正确
    if (res.code !== 1000) {
      browserHistory.push(config.loginPage);
      return false;
    }
    // 更新state中的谱系列表
    this.setState({
      categoryList: ListToTree(res.data, 0),
      isLoading: false,
    });
  }

  /**
   * get software list by category id
   * @param {string|number} id category id
   * @return {null} null
   */
  async handleGetSoftwareByCategoryId(id) {
    this.setState({ isLoading: true });
    const { res } = await getSoftwareByCategoryId(id);
    console.log('res: ', res);
    if (res.code !== 1000) {
      message.error(res.message || '获取软件谱系所对应的软件列表失败');
      return false;
    }
    this.setState({ isLoading: false, softwareList: res.data });
    return true;
  }


  /**
   * change software id
   * @param {string} value software id
   * @return {null} null
   */
  async handleChangeSoftware(value) {
    console.log('value: ', value);
    this.setState({ softwareId: value, isLoading: true });
    const { res } = await getSoftwareModuleListBySoftwareId(value);
    console.log('res: ', res);
    if (res.code !== 1000) {
      message.error(res.message || '获取软件所对应的模块列表失败');
      this.setState({ isLoading: false });
      return false;
    }
    const options = res.data.map((item) => {
      const data = item;
      data.label = item.name;
      data.value = item.id.toString();
      return data;
    });
    const checkedList = res.data.map((item) => {
      return item.id.toString();
    });
    console.log('options: ', options);
    this.setState({
      isLoading: false,
      checkedList,
      options,
    });
    return true;
  }


  render() {
    const { isLoading, checkedCategoryId, softwareList, checkedList, options } = this.state;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const buttonItemLayout = {
      wrapperCol: { span: 14 },
    };
    console.log('checkedList: ', checkedList);
    console.log('options: ', options);
    const moduleForm = checkedList.map((item, index) => {
      console.log('item: ', item);
      const module = options.filter((option) => {
        if (option.value.toString() === item.toString()) {
          return option;
        }
        return false;
      });
      // eslint-disable-next-line
      console.log('`ref${index}`: ', `ref${index}`);
      return (
        <TabPane tab={module[0].label} key={index}>
          <ModuleForm
            item={item}
            module={module[0]}
            // eslint-disable-next-line
            ref={`ref${index}`}
          />
        </TabPane>
      );
    });
    return (
      <Spin spinning={this.state.isLoading}>
        <Card>
          <Form>
            <h2>基本信息</h2>
            <Row style={{ marginTop: 10 }}>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="单位名称"
                  hasFeedback
                >
                  {getFieldDecorator('apply_department', {
                    rules: [
                      { required: true, message: '请选择单位名称' },
                    ],
                  })(
                    <Select placeholder="请选择单位名称">
                      <Option value="1">单位1</Option>
                      <Option value="2">单位2</Option>
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label={(
                    <span>
                    谱系:
                      <Tooltip title="根据谱系筛选软件">
                        <Icon type="question-circle-o" />
                      </Tooltip>
                    </span>
                  )}
                  hasFeedback
                >
                  {getFieldDecorator('category_id', {
                    rules: [{
                      required: true,
                      message: '请选择软件所属谱系',
                    }],
                  })(
                    <TreeSelect
                      dropdownStyle={{ maxHeight: 300, overflow: 'auto' }}
                      placeholder="请选择父级谱系"
                      onChange={this.onChange}
                      treeData={this.state.categoryList}
                      multiple={false}
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label={(
                    <span>
                      软件名称
                      <Tooltip title="根据谱系筛选软件">
                        <Icon type="question-circle-o" />
                      </Tooltip>
                    </span>
                  )}
                  hasFeedback
                >
                  {getFieldDecorator('software_id', {
                    rules: [
                      { required: true, message: '请选择软件名称' },
                    ],
                  })(
                    <Select
                      placeholder="请选择软件名称"
                      disabled={!(!isLoading && checkedCategoryId)}
                      onChange={value => this.handleChangeSoftware(value)}
                    >
                      {
                        softwareList.map((item, index) => (
                          <Option
                            key={index.toString()}
                            value={item.id && item.id.toString()}
                          >
                            {item.name}
                          </Option>
                        ))
                      }
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <h2>软件模块</h2>
            <Row>
              <Col
                span={12}
                style={{ marginTop: 15, marginBottom: 10 }}
              >
                <CheckboxGroup
                  options={options}
                  value={checkedList}
                  onChange={this.onCheckBoxChange}
                />
              </Col>
            </Row>
          </Form>

          <div>
            <Tabs type="card" style={{ marginTop: 10 }} defaultActiveKey="0">
              {moduleForm}
            </Tabs>
          </div>
          <Row>
            <Col span={24}>
              <FormItem
                label="申请备注"
                hasFeedback
              >
                {getFieldDecorator('apply_note', {
                  rules: [{ required: false, message: '请填写申请备注' }],
                })(
                  <Input type="textarea" rows={4} placeholder="请填写申请备注" />,
                )}
              </FormItem>
            </Col>
          </Row>
          <FormItem {...buttonItemLayout}>
            <Button
              type="primary"
              size="large"
              onClick={() => this.handleClick()}
            >
              保存草稿
            </Button>
            <Button
              type="primary"
              size="large"
              onClick={() => this.handleClick()}
            >
              提交申请
            </Button>
          </FormItem>
        </Card>
      </Spin>
    );
  }
}


InputForm.propTypes = {
  form: PropTypes.object.isRequired,
};

export default Form.create({})(InputForm);
