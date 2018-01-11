import React, { Component, PropTypes } from 'react';
import { Button, Card, Col, Form, Input, message, Row, Select, TreeSelect } from 'antd';
import { browserHistory } from 'react-router';
import l2t from 'list2tree';

const FormItem = Form.Item;
const Option = Select.Option;
// const CheckboxGroup = Checkbox.Group;
// const TabPane = Tabs.TabPane;

const config = require('./../../../../../config/config');

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputForm: false,
      checkedList: [],
      options: [],
      categoryList: [], // 谱系列表
    };
    this.getCategoryList = this.getCategoryList.bind(this);
  }


  componentWillMount() {
    this.getCategoryList();
  }

  /**
   * 获取软件谱系列表
   * @return {null} null
   */
  getCategoryList() {
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
          this.setState({
            isCategoryListLoading: false,
            categoryList: list,
          });
        } else {
          // 获取软件谱系列表失败，reject
          return Promise.reject(new Error(result.message));
        }
      })
      .catch((exception) => {
        console.error(URL_GET_CATEGORY_LIST);
        console.error('exception: ', exception);
        message.error('获取软件谱系列表失败', 5);
      });
  }


  /**
   * 提交申请表单
   * @return {null} null
   */
  handleClick() {
    browserHistory.push('/main/InventoryRegistration/Output/Approve');
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const buttonItemLayout = {
      wrapperCol: { span: 14 },
    };
    const formItemLayout2 = {
      labelCol: { span: 3 },
      wrapperCol: { span: 19 },
    };
    return (
      <div>
        <Card>
          <Form onSubmit={this.handleSubmit}>
            <h2>软件出库信息</h2>
            <Row style={{ marginTop: 10 }}>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="谱系"
                  hasFeedback
                >
                  {getFieldDecorator('value', {
                    rules: [{
                      required: true,
                      message: '请选择谱系',
                    }],
                  })(
                    <TreeSelect
                      showSearch
                      dropdownStyle={{ maxHeight: 300, overflow: 'auto' }}
                      placeholder="请选择父级谱系"
                      allowClear
                      onChange={this.onChange}
                      treeData={this.state.categoryList}
                    />,
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="唯一编码"
                >
                  {getFieldDecorator('unique_code', {
                    rules: [{ required: true, message: '请填写软件唯一编码' }],
                  })(
                    <Input placeholder="请填写软件唯一编码" />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col
                span={24}
                style={{ marginTop: 15, marginBottom: 10 }}
              >
                <Row>
                  <Col span={12}>
                    <FormItem
                      {...formItemLayout}
                      label="版本名称"
                    >
                      {getFieldDecorator('version_name', {
                        rules: [{ required: true, message: '请填写版本名称' }],
                      })(
                        <Input placeholder="请填写版本名称" />,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem
                      {...formItemLayout}
                      label="版本编号"
                    >
                      {getFieldDecorator('version_code', {
                        rules: [{ required: true, message: '请填写版本编号' }],
                      })(
                        <Input placeholder="请填写版本编号" />,
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <FormItem
                      {...formItemLayout}
                      label="嵌装软件类型"
                      hasFeedback
                    >
                      {getFieldDecorator('software_type', {
                        initialValue: '1',
                        rules: [
                          { required: true, message: '请选择嵌装软件类型' },
                        ],
                      })(
                        <Select placeholder="请选择嵌装软件类型">
                          <Option value="1">嵌装软件类型1</Option>
                          <Option value="2">嵌装软件类型2</Option>
                        </Select>,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem
                      {...formItemLayout}
                      label="操作系统"
                      hasFeedback
                    >
                      {getFieldDecorator('operation_system', {
                        initialValue: '1',
                        rules: [
                          { required: true, message: '请选操作系统' },
                        ],
                      })(
                        <Select placeholder="请选择操作系统">
                          <Option value="1">操作系统1</Option>
                          <Option value="2">操作系统2</Option>
                        </Select>,
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <FormItem
                      {...formItemLayout}
                      label="软件状态"
                      hasFeedback
                    >
                      {getFieldDecorator('software_status', {
                        initialValue: '1',
                        rules: [
                          { required: true, message: '请选软件状态' },
                        ],
                      })(
                        <Select placeholder="请选择软件状态">
                          <Option value="1">软件状态1</Option>
                          <Option value="2">软件状态2</Option>
                        </Select>,
                      )}
                    </FormItem>
                  </Col>

                </Row>
                <Row>
                  <Col span={12}>
                    <FormItem
                      {...formItemLayout}
                      label="软件规模"
                      hasFeedback
                    >
                      {getFieldDecorator('software_scale', {
                        initialValue: '1',
                        rules: [
                          { required: true, message: '请选软件规模' },
                        ],
                      })(
                        <Select placeholder="请选择软件规模">
                          <Option value="1">软件规模1</Option>
                          <Option value="2">软件规模2</Option>
                        </Select>,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem
                      {...formItemLayout}
                      label="研发单位"
                    >
                      {getFieldDecorator('development_organization', {
                        initialValue: '单位1',
                        rules: [{ required: true, message: '请填写研发单位' }],
                      })(
                        <Input placeholder="请填写研发单位" />,
                      )}
                    </FormItem>
                  </Col>
                </Row>

                <Row>
                  <Col span={12}>
                    <FormItem
                      {...formItemLayout}
                      label="存储类型"
                      hasFeedback
                    >
                      {getFieldDecorator('store_type', {
                        initialValue: '1',
                        rules: [
                          { required: true, message: '请选存储类型' },
                        ],
                      })(
                        <Select placeholder="请选择存储类型">
                          <Option value="1">存储类型1</Option>
                          <Option value="2">存储类型2</Option>
                        </Select>,
                      )}
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem
                      {...formItemLayout}
                      label="存储介质"
                      hasFeedback
                    >
                      {getFieldDecorator('store_medium', {
                        initialValue: '1',
                        rules: [
                          { required: true, message: '请选存储介质' },
                        ],
                      })(
                        <Select placeholder="请选择存储介质">
                          <Option value="1">存储介质1</Option>
                          <Option value="2">存储介质2</Option>
                        </Select>,
                      )}
                    </FormItem>
                  </Col>
                </Row>

                <Row>
                  <Col span={24}>
                    <FormItem
                      {...formItemLayout2}
                      label="版本介绍"
                      hasFeedback
                    >
                      {getFieldDecorator('version_description', {
                        rules: [{ required: true, message: '请填写版本介绍' }],
                      })(
                        <Input type="textarea" rows={4} placeholder="请填写版本介绍" />,
                      )}
                    </FormItem>
                  </Col>
                </Row>

                <Row>
                  <Col span={24}>
                    <FormItem
                      {...formItemLayout2}
                      label="功能说明"
                      hasFeedback
                    >
                      {getFieldDecorator('features_description', {
                        rules: [{ required: true, message: '请填写功能说明' }],
                      })(
                        <Input type="textarea" rows={4} placeholder="请填写功能说明" />,
                      )}
                    </FormItem>
                  </Col>
                </Row>

                <Row>
                  <Col span={24}>
                    <FormItem
                      {...formItemLayout2}
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
              </Col>
            </Row>
          </Form>

          <Row>
            <Col offset={18}>
              <FormItem {...buttonItemLayout}>
                <Button
                  type="primary"
                  size="large"
                  onClick={() => this.handleClick()}
                >
                  提交出库申请
                </Button>
              </FormItem>
            </Col>
          </Row>

        </Card>
      </div>
    );
  }
}


InputForm.propTypes = {
  form: PropTypes.object.isRequired,
};

export default Form.create({})(InputForm);
