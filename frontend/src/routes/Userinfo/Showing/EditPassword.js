import React, { Component, PropTypes } from 'react';
import { Button, Form, Input, message } from 'antd';
import { updatePassword } from './../Data/Userinfo';
import './Info.css';


const FormItem = Form.Item;


class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.update({ oldPwd: values.oldPwd, newPwd: values.newPwd });
      }
    });
  }

  checkPassword(rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('newPwd')) {
      callback('两次密码不一致');
    } else {
      callback();
    }
  }

  async update(data) {
    const { res } = await updatePassword(data);
    console.log('res: ', res);
    if (res.code === 1000) {
      message.success('修改密码成功');
    } else {
      message.error(res.message);
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 16 },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 4,
      },
    };
    return (
      <Form
        onSubmit={this.handleSubmit}
      >
        <div className="headers">
          <span>详情</span>
        </div>
        <FormItem
          {...formItemLayout}
          label="旧密码"
          hasFeedback
          className="ant-rows"
        >
          {getFieldDecorator('oldPwd', {
            rules: [{
              required: true, message: '请输入您的旧密码',
            }, {
              validator: this.checkConfirm,
            }],
          })(
            <Input type="password" onBlur={this.handlePasswordBlur} style={{ width: 400, height: 40 }} />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="新密码"
          hasFeedback
          className="ant-rows"
        >
          {getFieldDecorator('newPwd', {
            rules: [{
              required: true, message: '请输入您的新密码',
            }, {
              validator: this.checkConfirm,
            }],
          })(
            <Input type="password" onBlur={this.handlePasswordBlur} style={{ width: 400, height: 40 }} />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="确认密码"
          hasFeedback
          className="ant-rows"
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '请再次输入您的新密码',
            }, {
              validator: this.checkPassword,
            }],
          })(
            <Input type="password" style={{ width: 400, height: 40 }} />,
          )}
        </FormItem>
        <FormItem
          {...tailFormItemLayout}
          id="btnnn"
        >
          <Button
            style={{ marginLeft: 180 }}
            type="primary"
            htmlType="submit"
            size="large"
          >
            修改
          </Button>
        </FormItem>
      </Form>
    );
  }
}


App.propTypes = {
  form: PropTypes.object,
};


export default Form.create({})(App);
