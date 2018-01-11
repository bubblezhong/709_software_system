import React, { Component, PropTypes } from 'react';
import l2t from 'list2tree';
import {
  Form,
  Radio,
  Select,
  TreeSelect,
  Input,
  message,
} from 'antd';

const config = require('./../../../../config/config');

const FormItem = Form.Item;
const Option = Select.Option;

class SoftwareForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 软件谱系列表
      categoryList: [],
      // 软件单元列表
      moduleList: [],
    };
    this.getCategoryList = this.getCategoryList.bind(this);
    this.getModuleList = this.getModuleList.bind(this);
  }


  componentWillMount() {
    Promise.all([
      this.getCategoryList(),
      this.getModuleList(),
    ])
    .then((result) => {
      console.log('aaaaaresult: ', result);
      this.setState({
        categoryList: result[0],
        moduleList: result[1],
      });
    })
    .catch((exception) => {
      console.log('exception: ', exception);
      message.error('获取软件谱系列表失败', 5);
    });
  }

  /**
    * 获取软件谱系列表
    * @return {null} null
    */
  getCategoryList() {
    return new Promise((resolve, reject) => {
      const URL_GET_CATEGORY_LIST = `${config.host}/software/category/list`;
      fetch(URL_GET_CATEGORY_LIST)
        .then((response) => {
          console.log(URL_GET_CATEGORY_LIST);
          console.log('response: ', response);
          return response.json();
        })
        .then((result) => {
          console.log(URL_GET_CATEGORY_LIST);
          console.log('result: ', result);
          // 判断从 API 获取到的信息是否正确
          if (result.code === 0) {
            // 获取软件谱系列表成功
            // 将数组转换为树
            const list = l2t.ListToTree(result.data.softwareCategoryList, 0);
            // this.setState({
            //   categoryList: list,
            // });
            return resolve(list);
          }
          // 获取软件谱系列表失败，reject
          return reject(new Error(result.message));
        })
        .catch((exception) => {
          console.error(URL_GET_CATEGORY_LIST);
          console.error('exception: ', exception);
          return reject(exception);
        });
    });
  }


  /**
    * 获取软件单元列表
    * @return {null} null
    */
  getModuleList() {
    return new Promise((resolve, reject) => {
      const URL_GET_MODULE_LIST = `${config.host}/software/module/list`;
      fetch(URL_GET_MODULE_LIST)
        .then((response) => {
          console.log(URL_GET_MODULE_LIST);
          console.log('response: ', response);
          return response.json();
        })
        .then((result) => {
          console.log(URL_GET_MODULE_LIST);
          console.log('result: ', result);
          // 判断从 API 获取到的信息是否正确
          if (result.code === 0) {
            // 获取软件谱系列表成功
            // 将数组转换为树
            const list = l2t.ListToTree(result.data.softwareModuleList, 0);
            // this.setState({
            //   categoryList: list,
            // });
            return resolve(list);
          }
          // 获取软件谱系列表失败，reject
          return reject(new Error(result.message));
        })
        .catch((exception) => {
          console.error(URL_GET_MODULE_LIST);
          console.error('exception: ', exception);
          return reject(exception);
        });
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 16 },
    };
    const softwareInfo = this.props.softwareInfo;
    const showFormType = this.props.showFormType;
    console.log('this.props: ', this.props);
    let nameOption = {
      initialValue: '',
      rules: [{
        required: true,
        message: '请填写软件名称',
      }],
    };
    let typeOption = {
      initialValue: '1',
      rules: [
      { required: true, message: '请选择软件类型' },
      ],
    };
    let categoryOption = {
      initialValue: [],
      rules: [{
        required: true,
        message: '请选择软件谱系',
      }],
    };
    let usageOption = {
      initialValue: '',
      rules: [{
        required: false,
        message: '请填写软件功能用途说明',
      }],
    };
    let remarkOption = {
      initialValue: '',
      rules: [{
        required: false,
        message: '请填写软件备注信息',
      }],
    };
    let appendixOption = {
      initialValue: '',
      rules: [{
        required: false,
        message: '请填写软件附加信息',
      }],
    };
    let statusOption = {
      initialValue: 0,
      rules: [{
        required: true,
        message: '请选择软件状态',
      }],
    };
    if (showFormType === 'edit') {
      nameOption = {
        initialValue: softwareInfo.name,
        rules: [{
          required: true,
          message: '请填写软件名称',
        }],
      };
      typeOption = {
        initialValue: softwareInfo.type,
        rules: [
        { required: true, message: '请选择软件类型' },
        ],
      };
      categoryOption = {
        initialValue: softwareInfo.category,
        rules: [{
          required: true,
          message: '请选择软件谱系',
        }],
      };
      usageOption = {
        initialValue: softwareInfo.usage,
        rules: [{
          required: false,
          message: '请填写软件功能用途说明',
        }],
      };
      remarkOption = {
        initialValue: softwareInfo.remark,
        rules: [{
          required: false,
          message: '请填写软件备注信息',
        }],
      };
      appendixOption = {
        initialValue: softwareInfo.appendix,
        rules: [{
          required: false,
          message: '请填写软件附加信息',
        }],
      };
      statusOption = {
        initialValue: softwareInfo.status,
        rules: [{
          required: true,
          message: '请选择软件状态',
        }],
      };
    }
    return (
      <Form
        onSubmit={this.handleSubmit}
      >
        <FormItem
          {...formItemLayout}
          label="软件名称"
          hasFeedback
        >
          {getFieldDecorator('name', nameOption)(
            <Input
              placeholder="请填写软件名称"
            />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="软件类型"
          hasFeedback
        >
          {getFieldDecorator('magnitude', typeOption)(
            <Select placeholder="请选择软件类型">
              <Option key="1">常规软件</Option>
              <Option key="2">导航软件</Option>
              <Option key="3">目标指示软件</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="软件谱系"
          hasFeedback
        >
          {getFieldDecorator('value', categoryOption)(
            <TreeSelect
              showSearch
              dropdownStyle={{ maxHeight: 300, overflow: 'auto' }}
              placeholder="请选择软件谱系"
              allowClear
              treeDefaultExpandAll
              onChange={this.onChange}
              treeData={this.state.categoryList}
            />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="用途说明"
          hasFeedback
        >
          {getFieldDecorator('usage', usageOption)(
            <Input
              type="textarea"
              rows={4}
              placeholder="请填写软件功能应用描述"
            />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="备注信息"
          hasFeedback
        >
          {getFieldDecorator('remark', remarkOption)(
            <Input
              type="textarea"
              rows={4}
              placeholder="请填写软件备注信息"
            />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="附加信息"
          hasFeedback
        >
          {getFieldDecorator('appendix', appendixOption)(
            <Input
              type="textarea"
              rows={4}
              placeholder="请填写软件附加信息"
            />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="软件状态"
        >
          {getFieldDecorator('status', statusOption)(
            <Radio.Group>
              <Radio value={0}>激活</Radio>
              <Radio value={1}>未激活</Radio>
            </Radio.Group>
          )}
        </FormItem>
      </Form>
    );
  }
}


SoftwareForm.propTypes = {
  form: PropTypes.object.isRequired,
  softwareInfo: PropTypes.object.isRequired,
  showFormType: PropTypes.string.isRequired,
};

export default Form.create({})(SoftwareForm);
