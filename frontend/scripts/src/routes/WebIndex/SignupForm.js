import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Col, message } from 'antd';
import { browserHistory } from 'react-router';
const FormItem = Form.Item;

const SignupForm = Form.create()(class SignupForm extends React.Component {
  state = {
    passwordDirty: false,
    captcha_time: 0
  } 
  handleSubmit(e) {
    e.preventDefault(); 
    this.props.form.validateFields((err, values) => {
      if (!err) {
        $.ajax({
          method: 'POST',
          url: '/api/signup',
          data: values,
          dataType: 'json',
          success: function(data) {
            console.log("data from sever: ", data);
            if(data.code !== 0){
              message.error(data.msg)
            } else {
              browserHistory.push("/main");
            }
          }
        });
      }
    });
  }
  //?????
  getCaptcha = () => {
    console.log('getCaptcha');
    if (this.state.captcha_time <= 0) {
      var time_down =  window.setInterval(() => {
        if (this.state.captcha_time <= 0) {
          window.clearInterval(time_down);
        } else {
          this.setState((lastState) => ({
            captcha_time: lastState.captcha_time - 1
          }))
        }
      }, 1000);

      this.setState({captcha_time: 60}, () => {
        time_down
      });
      this.sendEmail();
    }
  }
  sendEmail = () => {
    this.props.form.validateFields(['email'], (err, values) => {
      if (!err) {
        console.log('values', values);
        $.ajax({
          method: 'POST',
          url: '/api/signup_email',
          data: values,
          dataType: 'json',
          success: function(data) {
            if(data.code === 0){
              message.success('邮件发送成功！');
            }
          }
        });
      }
    });
  }
  handlePasswordBlur = (e) => {
    const value = e.target.value;
    this.setState({ passwordDirty: this.state.passwordDirty || !!value });
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不相同!');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.passwordDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        span: 16,
        offset: 6,
      },
    };
    return (
      <div style={styles.form_container}>
        <Form onSubmit={this.handleSubmit.bind(this)} style={styles.login_form}>

          <FormItem
            {...formItemLayout}
            label="登录名"
            hasFeedback
          >
            {getFieldDecorator('login_name', {
              rules: [{ required: true, message: '请输入你的登录名!' }],
            })(
              <Input addonBefore={<Icon type="user" />} placeholder="登录名" />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="E-mail"
            hasFeedback
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: '不正确的E-mail地址!',
              }, {
                required: true, message: '请正确填写您的E-mail!',
              }],
            })(
              <Input addonBefore={<Icon type="mail" />} placeholder="电子邮箱" />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="密码"
            hasFeedback
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: '请输入你的密码!',
              }, {
                validator: this.checkConfirm,
              }],
            })(
              <Input type="password" onBlur={this.handlePasswordBlur} />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="重复密码"
            hasFeedback
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: '请再次输入你的密码!',
              }, {
                validator: this.checkPassword,
              }],
            })(
              <Input type="password" />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="用户名"
            hasFeedback
          >
            {getFieldDecorator('real_name', {
              rules: [{ required: true, message: '请输入你的用户名!' }],
            })(
              <Input addonBefore={<Icon type="user" />} placeholder="用户名" />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="验证码"
            extra="验证登录邮箱"
          >
            <Row gutter={8}>
              <Col span={12}>
                {getFieldDecorator('captcha', {
                  rules: [{ required: true, message: '请输入你获得的验证码!' }],
                })(
                  <Input size="large" />
                )}
              </Col>
              <Col span={12}>
                <Button size="large" style={{ width: '100%' }} onClick={() => { this.getCaptcha() }}>
                  {this.state.captcha_time <= 0 ? '获取验证码': this.state.captcha_time + 's'}
                </Button>
              </Col>
            </Row>
          </FormItem>

          <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
              rules: [{ required: true, message: '请阅读用户协议!' }]
            })(
              <Checkbox>我已阅读 <a>用户协议</a></Checkbox>
            )}
          </FormItem>

          <FormItem {...tailFormItemLayout} >
            <Button type="primary" htmlType="submit" size="large"> 注册 </Button>
          </FormItem>

        </Form>
      </div>
    );
  }
});

export default SignupForm;

const styles = {
  form_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh'
  },

  login_form: {
    width: 400,
    backgroundColor: 'white',
    padding: '50px',
    borderRadius: '5px'
  }

};
