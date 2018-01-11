import React, { Component, PropTypes } from 'react';
import {
  Input,
  Form,
  Select,
  TreeSelect,
  Radio,
  message,
  Spin,
  Tooltip,
  Icon,
} from 'antd';
import { ListToTree } from './../../../utils/list2tree';
import {
  getSoftwareCategoryList,
} from './../../../Models/Category/Category';
import {
  getSoftwareByCategoryId,
} from './../../../Models/Software/Software';


const FormItem = Form.Item;
const Option = Select.Option;

// 软件单元表单
class ModuleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputForm: false,
      categoryList: [],
      softwareList: [],
      loading: false,
      tip: '',
    };
    this.onCategoryChange = this.onCategoryChange.bind(this);
  }

  componentWillMount() {
    this.handleGetCategoryList();
    const moduleFormType = this.props.moduleFormType; // 表单类型
    // 不是新建单元，说明是添加下级或者修改。需要查询出单元对应的谱系，以及该谱系对应的软件
    console.log('不是新建单元，说明是添加下级或者修改。需要查询出单元对应的谱系，以及该谱系对应的软件');
    if (moduleFormType !== 'new') {
      const categoryId = this.props.currentModuleForm.category_id; // 当前单元所属谱系 ID
      console.log('categoryId: ', categoryId);
      // 根据谱系ID查询软件
      this.handleGetSoftwareByCategoryId(categoryId);
    }
  }


  /**
   * 处理单元下拉菜单
   * @param {string} value 选中的值
   * @return {null} null
   */
  onCategoryChange(value) {
    // eslint-disable-next-line
    // console.log(arguments);
    console.log('value: ', value);
    // 根据谱系ID查询软件
    this.setState({
      loading: true,
    });
    this.handleGetSoftwareByCategoryId(value);
  }


  /**
   * 根据谱系ID获取对应的软件列表
   * @param {number} id 谱系ID
   * @return {Promise.<void>} Promise
   */
  async handleGetSoftwareByCategoryId(id) {
    try {
      const { res } = await getSoftwareByCategoryId(id);
      console.log('res: ', res);
      if (res.code === 1000) {
        this.setState({
          softwareList: res.data,
          loading: false,
        });
      } else {
        message.error(res.message || '获取谱系对应的软件列表失败');
        this.setState({
          loading: false,
        });
      }
    } catch (e) {
      console.log(e.message || '获取谱系对应的软件列表失败');
      this.setState({
        loading: false,
      });
    }
  }


  /**
   * 获取谱系列表
   * @return {null} null
   */
  async handleGetCategoryList() {
    const { res } = await getSoftwareCategoryList();
    console.log('res: ', res);
    // 判断返回的个人信息是否正确
    if (res.code !== 1000) {
      message.error(res.message || '获取谱系列表失败');
      return false;
    }
    // 更新state中的用户个人信息
    this.setState({
      categoryList: ListToTree(res.data, 0),
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    console.log('this.props.currentModuleForm: ', this.props.currentModuleForm);
    const moduleList = this.props.moduleList;
    const moduleFormType = this.props.moduleFormType; // 表单类型
    const currentId = this.props.currentModuleForm.key; // 当前单元 ID
    const categoryId = this.props.currentModuleForm.category_id; // 当前单元所属谱系 ID
    const softwareInfoId = this.props.currentModuleForm.software_info_id; // 当前单元所属软件 ID
    const name = this.props.currentModuleForm.name; // 当前单元名称
    const parentId = this.props.currentModuleForm.parent_id || 0; // 当前单元的父级单元 ID
    const magnitude = this.props.currentModuleForm.magnitude; // 当前单元的规模
    const importantLevel = this.props.currentModuleForm.important_level; // 当前单元的重要等级
    const developmentDepartment = this.props.currentModuleForm.development_department_id; // 研制单位
    const status = this.props.currentModuleForm.status || 0; // 当前单元的状态
    let initialParentId = null; // 添加下级单元-id；修改-parentId；新建-null
    if (moduleFormType === 'add') initialParentId = currentId;
    if (moduleFormType === 'edit') initialParentId = parentId;
    console.log('this.props: ', this.props);
    console.log('parentId: ', parentId);
    console.log('this.props.moduleList: ', this.props.moduleList);
    return (
      <Spin tip={this.state.tip} spinning={this.state.loading}>
        <FormItem
          {...formItemLayout}
          label="单元名称"
          hasFeedback
        >
          {getFieldDecorator('name', {
            initialValue: moduleFormType === 'edit' ? name : null, // 只有编辑模式显示 name
            rules: [{ required: true, message: '请输入单元名称' }],
          })(
            <Input placeholder="请输入单元名称" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              父级单元
              <Tooltip title="0 表示单元根节点">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('parent_id', {
            // 添加下级单元-id；修改-parentId；新建-null
            initialValue: initialParentId && initialParentId.toString(),
            rules: [{ required: true, message: '请选择父级单元' }],
          })(
            <TreeSelect
              dropdownStyle={{ maxHeight: 300, overflow: 'auto' }}
              placeholder="请选择父级单元"
              allowClear
              treeData={moduleList}
            />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="谱系"
          hasFeedback
        >
          {getFieldDecorator('category_id', {
            initialValue: moduleFormType === 'new' ? null : categoryId && categoryId.toString(),
            rules: [{ required: true, message: '请选择谱系' }],
          })(
            <TreeSelect
              dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
              placeholder="请选择谱系"
              onChange={this.onCategoryChange}
              treeData={this.state.categoryList}
              style={{ minWidth: 200 }}
            />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="所属软件"
          hasFeedback
        >
          {getFieldDecorator('software_info_id', {
            initialValue: moduleFormType === 'new' ? null : softwareInfoId,
            rules: [{ required: false, message: '请选择单元所属软件' }],
          })(
            <TreeSelect
              dropdownStyle={{ maxHeight: 300, overflow: 'auto' }}
              placeholder="请选择单元所属软件"
              allowClear
              treeData={this.state.softwareList}
            />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="单元规模"
          hasFeedback
        >
          {getFieldDecorator('magnitude', {
            initialValue: moduleFormType === 'new' ? null : magnitude && magnitude.toString(),
            rules: [{ required: true, message: '请选择单元规模' }],
          })(
            <Select placeholder="请选择单元规模">
              <Option key="1">0-10 klog</Option>
              <Option key="2">10-50 klog</Option>
              <Option key="3">50-10 0klog</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="重要等级"
          hasFeedback
        >
          {getFieldDecorator('important_level', {
            initialValue: moduleFormType === 'new' ? null : importantLevel && importantLevel.toString(),
            rules: [{ required: true, message: '请选择单元重要等级' }],
          })(
            <Select placeholder="请选择单元重要等级">
              <Option value="1" key="1">A</Option>
              <Option value="2" key="2">B</Option>
              <Option value="3" key="3">C</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="研制单位"
          hasFeedback
        >
          {getFieldDecorator('development_department_id', {
            initialValue: moduleFormType === 'new' ? null : developmentDepartment && developmentDepartment.toString(),
            rules: [{ required: true, message: '请选择单元研制单位' }],
          })(
            <Select placeholder="请选单元择研制单位">
              <Option key="1">研制单位1</Option>
              <Option key="2">研制单位2</Option>
              <Option key="3">研制单位3</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="单元状态"
        >
          {getFieldDecorator('status', {
            initialValue: parseInt(status, 10),
            rules: [{
              required: true,
              message: '请选择单元状态',
            }],
          })(
            <Radio.Group>
              <Radio value={0}>激活</Radio>
              <Radio value={1}>未激活</Radio>
            </Radio.Group>
          )}
        </FormItem>
      </Spin>
    );
  }
}


ModuleForm.propTypes = {
  form: PropTypes.object.isRequired,
  moduleList: PropTypes.array.isRequired,
  moduleFormType: PropTypes.string.isRequired,
  currentModuleForm: PropTypes.object.isRequired,
};

export default ModuleForm;
