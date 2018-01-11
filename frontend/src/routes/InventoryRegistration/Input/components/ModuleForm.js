import React, { Component, PropTypes } from 'react';
import { Col, Form, Input, Row, Select } from 'antd';
import { dictionarySoftware } from './../../../../DataDictionary/index';

const FormItem = Form.Item;
const Option = Select.Option;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    const { module } = this.props;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const formItemLayout2 = {
      labelCol: { span: 3 },
      wrapperCol: { span: 19 },
    };
    // const { moduleName, moduleKey } = this.props.module;
    return (
      <Form>
        <Row>
          <Col>
            <Row>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="单元名称"
                >
                  {getFieldDecorator('version_name', {
                    initialValue: module.name,
                    rules: [{ required: true, message: '请填写单元名称' }],
                  })(
                    <Input placeholder="请填写单元名称" />,
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="单元编号"
                >
                  {getFieldDecorator('version_code', {
                    initialValue: module.code,
                    rules: [{ required: true, message: '请填写单元编号' }],
                  })(
                    <Input placeholder="请填写单元编号" />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="操作系统"
                  hasFeedback
                >
                  {getFieldDecorator('operation_system', {
                    rules: [
                      { required: true, message: '请选操作系统' },
                    ],
                  })(
                    <Select placeholder="请选择操作系统">
                      {
                        Object.keys(dictionarySoftware.operation_system).map(item => (
                          <Option key={item} value={item}>
                            {dictionarySoftware.operation_system[item]}
                          </Option>
                        ))
                      }
                    </Select>,
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="代码规模"
                  hasFeedback
                >
                  {getFieldDecorator('MAGNITUDE', {
                    rules: [
                      { required: true, message: '请选代码规模' },
                    ],
                  })(
                    <Select placeholder="请选择代码规模">
                      {
                        Object.keys(dictionarySoftware.magnitude).map(item => (
                          <Option key={item} value={item}>
                            {dictionarySoftware.magnitude[item]}
                          </Option>
                        ))
                      }
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="存储位置"
                  hasFeedback
                >
                  {getFieldDecorator('STORAGE_LOCATION', {
                    rules: [
                      { required: true, message: '请填写存储位置' },
                    ],
                  })(
                    <Input placeholder="请填写存储位置" />,
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="存储方式"
                >
                  {getFieldDecorator('STORAGE_TYPE', {
                    rules: [{ required: true, message: '请填写存储方式' }],
                  })(
                    <Input placeholder="请填写存储方式" />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="研发单位"
                >
                  {getFieldDecorator('development_organization_id', {
                    initialValue: module.development_department_id
                      && module.development_department_id.toString(),
                    rules: [{ required: true, message: '请选择研发单位' }],
                  })(
                    <Select placeholder="请选择研发单位">
                      <Option value="1">研发单位1</Option>
                      <Option value="2">研发单位2</Option>
                    </Select>,
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="军代表"
                >
                  {getFieldDecorator('REPRESENTATIVE', {
                    rules: [{ required: true, message: '请选择军代表' }],
                  })(
                    <Select placeholder="请选择军代表">
                      <Option value="军代表1">军代表1</Option>
                      <Option value="军代表2">军代表2</Option>
                    </Select>,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="安装位置"
                  hasFeedback
                >
                  {getFieldDecorator('INSTALL_LOCATION', {
                    rules: [
                      { required: true, message: '请填写典型安装位置' },
                    ],
                  })(
                    <Input placeholder="请填写典型安装位置" />,
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <FormItem
                  {...formItemLayout2}
                  label="单元描述"
                  hasFeedback
                >
                  {getFieldDecorator('DESCRIPTION', {
                    rules: [{ required: true, message: '请填写单元描述' }],
                  })(
                    <Input type="textarea" rows={4} placeholder="请填写单元描述" />,
                  )}
                </FormItem>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    );
  }
}


App.propTypes = {
  form: PropTypes.object.isRequired,
  module: PropTypes.object.isRequired,
};

export default Form.create({})(App);
