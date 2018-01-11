import React from 'react';
import { Button, Card, Col, Form, Input, Row } from 'antd';

// const Option = Select.Option;
const FormItem = Form.Item;

const EditForm = Form.create()(
  (props) => {
    const {
      form,         // 表单属性 包含各种表单操控接口
      defaultValue,
    } = props;
    const {
      getFieldDecorator, // 初始化 表单子项
    } = form;
    // 布局样式
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 16 },
    };
    return (
      <Card>
        <Form>
          <FormItem label="任务安装软件" {...formItemLayout}>
            {getFieldDecorator('softwareName', {
              initialValue: defaultValue.softwareName,
              rules: [{ required: true, message: '请输入任务安装软件名字!' }],
            })(
              <Input placeholder="请输入任务安装软件名字" />,
            )}
          </FormItem>
          <FormItem label="软件类型" {...formItemLayout}>
            {getFieldDecorator('softwareType', {
              initialValue: defaultValue.softwareType,
              rules: [{ required: true, message: '请输入软件类型!' }],
            })(
              <Input placeholder="请输入软件类型" />,
            )}
          </FormItem>
          <FormItem label="安装位置" {...formItemLayout}>
            {getFieldDecorator('softwarePosition', {
              initialValue: defaultValue.softwarePosition,
              rules: [{ required: true, message: '请输入安装位置!' }],
            })(
              <Input placeholder="请输入安装位置" />,
            )}
          </FormItem>
          <FormItem label="安装单位" {...formItemLayout}>
            {getFieldDecorator('useOrgName', {
              initialValue: defaultValue.useOrgName,
              rules: [{ required: true, message: '请输入安装单位!' }],
            })(
              <Input placeholder="请输入安装单位" />,
            )}
          </FormItem>
          <FormItem label="日常管理部门" {...formItemLayout}>
            {getFieldDecorator('manageOrgName', {
              initialValue: defaultValue.manageOrgName,
              rules: [{ required: true, message: '请输入日常管理部门!' }],
            })(
              <Input placeholder="请输入日常管理部门" />,
            )}
          </FormItem>
          <FormItem label="代表室" {...formItemLayout}>
            {getFieldDecorator('deputyOrgname', {
              initialValue: defaultValue.deputyOrgname,
              rules: [{ required: true, message: '请输入代表室!' }],
            })(
              <Input placeholder="请输入代表室" />,
            )}
          </FormItem>
          <FormItem label="计划安装时间" {...formItemLayout}>
            {getFieldDecorator('planDate', {
              initialValue: defaultValue.planDate,
              rules: [{ required: true, message: '请输入计划安装时间!' }],
            })(
              <Input placeholder="请输入计划安装时间" />,
            )}
          </FormItem>
          <Row>
            <Col offset={4}>
              <Button>提交</Button>
            </Col>
          </Row>
        </Form>
      </Card>
    );
  },
);


EditForm.propTypes = {
  form: React.PropTypes.object.isRequired,
  defaultValue: React.PropTypes.object.isRequired,
};


export default EditForm;
