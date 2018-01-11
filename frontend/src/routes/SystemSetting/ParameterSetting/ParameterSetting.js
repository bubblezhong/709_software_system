import React, { PropTypes } from 'react';
import { Form, Input, Button } from 'antd';
import '../SystemSetting.css';

const FormItem = Form.Item;

class ParameterSetting extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 10 },
    };
    const formTitleLayout = {
      labelCol: { span: 2 },
      wrapperCol: { span: 10 },
    };
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <div>
          <FormItem
            {...formTitleLayout}
            style={{ backgroundColor: '#edf7fc' }}
            label="基本信息"
          />
          <FormItem {...formItemLayout} label="系统标题">
            {getFieldDecorator('SystemTitle', {
              rules: [{
                required: true, message: '请输入您的系统标题',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="系统URL地址">
            {getFieldDecorator('UrlSize', {
              rules: [{
                required: true, message: '请输入您的系统URL地址',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="cookie加密码">
            {getFieldDecorator('CookiePassword', {
              rules: [{
                required: true, message: '请输入您的cookie加密码',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="数据库url">
            {getFieldDecorator('DatabaseUrl', {
              rules: [{
                required: true, message: '请输入您的数据库url',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="数据库用户名">
            {getFieldDecorator('DatabaseName', {
              rules: [{
                required: true, message: '请输入您的数据库用户名',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="数据库密码">
            {getFieldDecorator('DatabasePassword', {
              rules: [{
                required: true, message: '请输入您的数据库密码',
              }],
            })(
              <Input />
            )}
          </FormItem>
        </div>
        <div>
          <FormItem
            {...formTitleLayout}
            style={{ backgroundColor: '#edf7fc' }}
            label="高级信息"
          />
          <FormItem {...formItemLayout} label="SMTP服务器的用户邮箱">
            {getFieldDecorator('ServerEmail', {
              rules: [{
                required: true, message: '请输入您的SMTP服务器的用户邮箱',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="SMTP服务器的用户账号">
            {getFieldDecorator('ServerAccount', {
              rules: [{
                required: true, message: '请输入您的SMTP服务器的用户账号',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="SMTP服务器的用户密码">
            {getFieldDecorator('ServerPassword', {
              rules: [{
                required: true, message: '请输入您的SMTP服务器的用户密码',
              }],
            })(
              <Input type="password" />
            )}
          </FormItem>
        </div>
        <div>
          <FormItem style={{ marginLeft: '40%' }}>
            {getFieldDecorator('ServerPassword', {})(
              <div>
                <Button type="primary" htmlType="submit">确定</Button>
                <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                  取消
                </Button>
              </div>
            )}
          </FormItem>
        </div>
      </Form>
    );
  }
}
ParameterSetting.propTypes = {
  form: PropTypes.object.isRequired,
};
const WrapParameterSetting = Form.create()(ParameterSetting);
export default WrapParameterSetting;
