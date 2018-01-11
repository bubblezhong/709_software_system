import React, { Component, PropTypes } from 'react';
import {
  Input,
  Form,
  TreeSelect,
  Radio,
  Tooltip,
  Icon,
} from 'antd';

const FormItem = Form.Item;

// 软件谱系表单
class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputForm: false,
    };
  }

  /**
   * 处理谱系下拉菜单
   * @param {string} value 选中的值
   * @return {null} null
   */
  onChange(value) {
    // eslint-disable-next-line
    console.log(arguments);
    console.log('value: ', value);
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const categoryFormType = this.props.categoryFormType;
    const currentId = this.props.currentCategoryForm.key;
    const name = this.props.currentCategoryForm.name;
    const parentId = this.props.currentCategoryForm.parent_id;
    const status = this.props.currentCategoryForm.status || 0;
    console.log('this.props.currentCategoryForm: ', this.props.currentCategoryForm);
    let nameOption = {
      initialValue: name,
      rules: [{
        required: true,
        message: '请填写谱系名称',
      }],
    };
    // 修改谱系
    let treeSelectOption = {
      initialValue: parentId,
      rules: [{
        required: false,
        message: '请选择父级谱系',
      }],
    };
    if (categoryFormType === 'new') {
      // 添加新的谱系
      nameOption = {
        initialValue: '',
        rules: [{
          required: true,
          message: '请填写谱系名称',
        }],
      };
      treeSelectOption = {
        initialValue: null,
        rules: [{
          required: false,
          message: '请选择父级谱系',
        }],
      };
    } else if (categoryFormType === 'add') {
      // 添加下级谱系
      nameOption = {
        initialValue: '',
        rules: [{
          required: true,
          message: '请填写谱系名称',
        }],
      };
      treeSelectOption = {
        initialValue: currentId,
        rules: [{
          required: false,
          message: '请选择父级谱系',
        }],
      };
    }
    console.log('this.props.categoryList: ', this.props.categoryList);
    console.log('treeSelectOption: ', treeSelectOption);
    console.log('this.props.currentCategoryForm.', this.props.currentCategoryForm);
    console.log('nameOption: ', nameOption);
    console.log('treeSelectOption: ', treeSelectOption);
    // const categoryTreeData = ListToTree(this.props.categoryList, 0);
    // console.log('categoryTreeData: ', categoryTreeData);
    return (
      <div>
        <FormItem
          {...formItemLayout}
          label="谱系名称"
          hasFeedback
        >
          {getFieldDecorator('name', nameOption)(
            <Input
              placeholder="请填写谱系名称"
            />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              父级谱系:
              <Tooltip title="如果不选择，则表示谱系根节点">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('value', treeSelectOption)(
            <TreeSelect
              dropdownStyle={{ maxHeight: 300, overflow: 'auto' }}
              placeholder="请选择父级谱系"
              onChange={this.onChange}
              treeData={this.props.categoryList}
              multiple={false}
            />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="谱系状态"
        >
          {getFieldDecorator('status', {
            initialValue: parseInt(status, 10),
            rules: [{
              required: true,
              message: '请选择谱系状态',
            }],
          })(
            <Radio.Group>
              <Radio value={0}>激活</Radio>
              <Radio value={1}>未激活</Radio>
            </Radio.Group>
          )}
        </FormItem>
      </div>
    );
  }
}


CategoryForm.propTypes = {
  form: PropTypes.object.isRequired,
  categoryList: PropTypes.array.isRequired,
  categoryFormType: PropTypes.string.isRequired,
  currentCategoryForm: PropTypes.object.isRequired,
};

// export default Form.create({})(CategoryForm);
export default CategoryForm;
