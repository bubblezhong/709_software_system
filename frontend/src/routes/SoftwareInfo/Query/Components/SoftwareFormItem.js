import React, { Component, PropTypes } from 'react';
import {
  Form,
  Radio,
  Select,
  TreeSelect,
  Input,
  message,
  Col,
  Row,
  Spin,
  Upload,
  Icon,
  Button,
} from 'antd';
import { ListToTree } from './../../../../utils/list2tree';
import {
  getSoftwareCategoryList,
} from './../../../../Models/Category/Category';
import {
  getSoftwareModuleList,
} from './../../../../Models/Module/Module';
import { dictionarySoftware } from './../../../../DataDictionary/index';


const { uploadURL } = require('./../../../../../config/config');


const SHOW_ALL = TreeSelect.SHOW_ALL;
const FormItem = Form.Item;
const Option = Select.Option;


class SoftwareForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 是否正在加载谱系列表
      isCategoryListLoading: false,
      // 是否正在加载单元列表
      isModuleListLoading: false,
      // 软件谱系列表
      categoryList: [],
      // 软件单元列表
      moduleList: [],
      modules_list: [],
    };
  }


  componentWillMount() {
    this.handleGetCategoryList();
    this.handleGetSoftwareModuleList();
  }


  /**
   * 获取单元列表
   * @return {Promise.<void>} null
   */
  async handleGetSoftwareModuleList() {
    try {
      const { res } = await getSoftwareModuleList();
      console.log('res: ', res);
      if (res.code === 1000) {
        // 获取软件单元列表成功 将数组转换为树
        const list = ListToTree(res.data, 0);
        // console.log('list: ', list);
        this.setState({
          isModuleListLoading: false,
          moduleList: list,
        });
      } else {
        message.error(res.message || '获取软件单元列表失败', 3);
        this.setState({
          isModuleListLoading: false,
        });
      }
    } catch (e) {
      console.log('e: ', e);
      message.error(e.message || '获取软件单元列表失败', 3);
      this.setState({
        isModuleListLoading: false,
      });
    }
  }

  /**
   * 获取软件谱系列表
   * @return {null} null
   */
  async handleGetCategoryList() {
    try {
      const { res } = await getSoftwareCategoryList();
      console.log('res: ', res);
      if (res.code !== 1000) {
        message.error(res.message || '获取软件谱系列表失败', 3);
        return false;
      }
      // 更新state中的用户个人信息
      this.setState({
        categoryList: ListToTree(res.data, 0),
        isCategoryListLoading: false,
      });
    } catch (e) {
      message.error(e.message || '获取软件谱系列表失败', 3);
      this.setState({
        isCategoryListLoading: false,
      });
    }
  }


  // TODO 文件上传
  handleChange(info) {
    let fileList = info.fileList;

    // 1. Limit the number of uploaded files
    //    Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    // 2. read from response and show file link
    fileList = fileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    // 3. filter successfully uploaded files according to response from server
    fileList = fileList.filter((file) => {
      if (file.response) {
        return file.response.status === 'success';
      }
      return true;
    });
    console.log('fileList: ', fileList);
    // this.setState({ fileList });
    // console.log('fileList: ', this.state.fileList);
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
    console.log('showFormType: ', showFormType);
    console.log('softwareInfo: ', softwareInfo);
    return (
      <Spin spinning={this.state.isModuleListLoading || this.state.isCategoryListLoading}>
        <Row>
          <Col span={24}>
            <FormItem
              {...formItemLayout}
              label="软件名称"
              hasFeedback
            >
              {getFieldDecorator('name', {
                // 如果是新建软件，则显示null；否则显示type
                initialValue: showFormType === 'new' ? null : softwareInfo.name,
                rules: [{ required: true, message: '请填写软件名称' }],
              })(
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
              {getFieldDecorator('type', {
                // 如果是新建软件，则显示null；否则显示type
                initialValue: showFormType === 'new' ? null : softwareInfo.type && softwareInfo.type.toString(),
                rules: [{ required: true, message: '请选择软件类型' }],
              })(
                <Select placeholder="请选择软件类型">
                  {
                    Object.keys(dictionarySoftware.type).map(item =>
                      <Option key={item}>{dictionarySoftware.type[item]}</Option>)
                  }
                </Select>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="软件谱系"
              hasFeedback
            >
              {getFieldDecorator('category_id', {
                // 如果是新建软件，则显示null；否则显示softwareInfo.category_id
                initialValue: showFormType === 'new' ? null : softwareInfo.category_id && softwareInfo.category_id.toString(),
                rules: [{ required: true, message: '请选择软件所属谱系' }],
              })(
                <TreeSelect
                  showSearch
                  dropdownStyle={{ maxHeight: 300, overflow: 'auto' }}
                  placeholder="请选择软件所属谱系"
                  allowClear
                  treeDefaultExpandAll
                  // onChange={this.onChange}
                  treeData={this.state.categoryList}
                />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="软件单元"
              hasFeedback
            >
              {getFieldDecorator('modules_list', {
                // 如果是新建软件，则显示null；否则显示softwareInfo.modules_list.split(',')
                initialValue: showFormType === 'new' ? null : softwareInfo.modules_list && softwareInfo.modules_list.split(','),
                rules: [{ required: true, message: '请选择该软件所包含的单元' }],
              })(
                <TreeSelect
                  // onChange={this.onChange}
                  multiple
                  treeCheckable
                  showCheckedStrategy={SHOW_ALL}
                  searchPlaceholder="请选择该软件所包含的单元"
                  treeData={this.state.moduleList}
                />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="用途说明"
              hasFeedback
            >
              {getFieldDecorator('usage', {
                // 如果是新建软件，则显示null；否则显示softwareInfo.usage
                initialValue: showFormType === 'new' ? null : softwareInfo.usage,
                rules: [{ required: true, message: '请填写软件功能应用描述' }],
              })(
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
              {getFieldDecorator('remark', {
                // 如果是新建软件，则显示null；否则显示softwareInfo.remark
                initialValue: showFormType === 'new' ? null : softwareInfo.remark,
                rules: [{ required: false, message: '请填写软件备注信息' }],
              })(
                <Input
                  type="textarea"
                  rows={4}
                  placeholder="请填写软件备注信息"
                />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="上传附件"
              hasFeedback
            >
              {getFieldDecorator('appendix', {
                // 如果是新建软件，则显示null；否则显示softwareInfo.appendix
                initialValue: showFormType === 'new' ? null : softwareInfo.appendix,
                rules: [{ required: false, message: '上传附件' }],
              })(
                <Upload
                  action={uploadURL}
                  onChange={this.handleChange}
                  multiple
                  // fileList={showFormType === 'new' ? null : softwareInfo.appendix}
                >
                  <Button>
                    <Icon type="upload" /> 上传附件
                  </Button>
                </Upload>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="软件状态"
            >
              {getFieldDecorator('status', {
                // 如果是新建软件，则显示null；否则显示softwareInfo.status
                initialValue: showFormType === 'new' ? 0 : softwareInfo.status,
                rules: [{ required: false, message: '请选择软件状态' }],
              })(
                <Radio.Group>
                  <Radio value={0}>激活</Radio>
                  <Radio value={1}>未激活</Radio>
                </Radio.Group>
              )}
            </FormItem>
          </Col>
        </Row>
      </Spin>
    );
  }
}


SoftwareForm.propTypes = {
  form: PropTypes.object.isRequired,
  softwareInfo: PropTypes.object.isRequired,
  showFormType: PropTypes.string.isRequired,
};

export default SoftwareForm;
