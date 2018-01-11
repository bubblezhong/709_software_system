import React, { Component, PropTypes } from 'react';
import { Button, Col, Form, Input, Row, Select, TreeSelect } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

const SHOW_ALL = TreeSelect.SHOW_ALL;
const treeDataModule = [{
  label: '目标指示模块',
  value: '0-0',
  key: '0-0',
  children: [{
    label: '策略生成',
    value: '0-0-0',
    key: '0-0-0',
  }],
}, {
  label: '总体模块',
  value: '0-1',
  key: '0-1',
  children: [{
    label: '策略生成',
    value: '0-1-0',
    key: '0-1-0',
  }, {
    label: '定位计算',
    value: '0-1-1',
    key: '0-1-1',
  }, {
    label: '预处理',
    value: '0-1-2',
    key: '0-1-2',
  }],
}];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    console.log('props: ', this.props);
    const info = this.props.info || {};
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
      <Form onSubmit={this.handleSubmit}>
        <h6>软件基础信息</h6>
        <Row>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="所属谱系"
              hasFeedback
            >
              {getFieldDecorator('apply_category', {
                initialValue: info.apply_category,
                rules: [
                  { required: true, message: '请选择软件谱系' },
                ],
              })(
                <Select placeholder="请选软件谱系">
                  <Option value="谱系1">谱系1</Option>
                  <Option value="谱系2">谱系2</Option>
                </Select>,
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="所属软件"
              hasFeedback
            >
              {getFieldDecorator('software_name', {
                initialValue: info.software_name,
                rules: [
                  { required: true, message: '请选择软件名称' },
                ],
              })(
                <Select placeholder="请选择软件名称">
                  <Option value="软件1">软件1</Option>
                  <Option value="软件2">软件2</Option>
                </Select>,
              )}
            </FormItem>
          </Col>
        </Row>
        <h6>软件单元信息</h6>
        <Row>
          <Col span={24}>
            <FormItem
              labelCol={{ span: 3 }}
              wrapperCol={{ span: 19 }}
              label="软件单元"
              hasFeedback
            >
              {getFieldDecorator('modules_name', {
                initialValue: this.state.value,
              })(
                <TreeSelect
                  treeData={treeDataModule}
                  multiple
                  treeCheckable
                  showCheckedStrategy={SHOW_ALL}
                  searchPlaceholder="请选择软件单元"
                />,
              )}
            </FormItem>
          </Col>
        </Row>
        <h6>软件版本信息</h6>
        <Row>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="版本名称"
            >
              {getFieldDecorator('version_name', {
                initialValue: info.version_name,
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
                initialValue: info.version_code,
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
                initialValue: info.software_type,
                rules: [
                  { required: true, message: '请选择嵌装软件类型' },
                ],
              })(
                <Select placeholder="请选择嵌装软件类型">
                  <Option value="嵌装软件类型1">嵌装软件类型1</Option>
                  <Option value="嵌装软件类型2">嵌装软件类型2</Option>
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
                // initialValue: info.operation_system,
                rules: [
                  { required: true, message: '请选操作系统' },
                ],
              })(
                <Select placeholder="请选择操作系统">
                  <Option value="操作系统1">操作系统1</Option>
                  <Option value="操作系统2">操作系统2</Option>
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
                initialValue: info.software_status,
                rules: [
                  { required: true, message: '请选软件状态' },
                ],
              })(
                <Select placeholder="请选择软件状态">
                  <Option value="软件状态1">软件状态1</Option>
                  <Option value="软件状态2">软件状态2</Option>
                </Select>,
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="软件安装位置"
              hasFeedback
            >
              {getFieldDecorator('software_status', {
                initialValue: info.software_status,
                rules: [
                  { required: true, message: '请选软件安装位置' },
                ],
              })(
                <Select placeholder="请选择安装位置">
                  <Option value="安装位置1">安装位置1</Option>
                  <Option value="安装位置2">安装位置2</Option>
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
                initialValue: info.software_scale,
                rules: [
                  { required: true, message: '请选软件规模' },
                ],
              })(
                <Select placeholder="请选择软件规模">
                  <Option value="软件规模1">软件规模1</Option>
                  <Option value="软件规模2">软件规模2</Option>
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
                initialValue: info.development_organization,
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
                initialValue: info.store_type,
                // initialValues: this.props.data.store_type,
                rules: [
                  { required: true, message: '请选存储类型' },
                ],
              })(
                <Select placeholder="请选择存储类型">
                  <Option value="存储类型1">存储类型1</Option>
                  <Option value="存储类型2">存储类型2</Option>
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
                initialValue: info.store_medium,
                rules: [
                  { required: true, message: '请选存储介质' },
                ],
              })(
                <Select placeholder="请选择存储介质">
                  <Option value="存储介质1">存储介质1</Option>
                  <Option value="存储介质2">存储介质2</Option>
                </Select>,
              )}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="代表室"
              hasFeedback
            >
              {getFieldDecorator('representative', {
                initialValue: info.representative,
                // initialValues: this.props.data.store_type,
                rules: [
                  { required: true, message: '请选存代表室' },
                ],
              })(
                <Select placeholder="请选择代表室">
                  <Option value="代表室1">代表室1</Option>
                  <Option value="代表室2">代表室2</Option>
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
                initialValue: info.version_description,
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
                initialValue: info.features_description,
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
              wrapperCol={{
                xs: { span: 8, offset: 0 },
                sm: { span: 8, offset: 3 },
              }}
            >
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}


App.propTypes = {
  form: PropTypes.object.isRequired,
  info: PropTypes.object,
};

export default Form.create({})(App);
