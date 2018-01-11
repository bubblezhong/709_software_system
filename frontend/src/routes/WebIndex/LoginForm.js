import React, { PropTypes } from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { browserHistory } from 'react-router';
import bg from './bg.png';
import CreateNewData from './../utils/CreateNewData';


// const config = require('./../../../config/config');

const FormItem = Form.Item;
const styles = {
  form_container: {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  },

  login_form: {
    maxWidth: '400px',
    padding: '50px',
    borderRadius: '5px',
    marginRight: '10%',
    marginBottom: '10%',
  },

  login_form_forgot: {
    float: 'right',
  },

  login_form_button: {
    width: '100%',
  },
};


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(err, values);
      if (!err) {
        this.props.createData(values, (res) => { this.handleResult(res); });
        console.log('Received');
      }
    });
  }
  handleResult = (res) => {
    console.log('resres', res);
    if (res.code === 0) {
      browserHistory.push('/main');
    } else {
      message.error('登录失败，请重试');
      this.setState({ loading: false });
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div style={styles.form_container}>
        <Form onSubmit={this.handleSubmit} style={styles.login_form}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入你的用户名!' }],
            })(
              <Input addonBefore={<Icon type="user" />} placeholder="用户名" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入你的密码!' }],
            })(
              <Input addonBefore={<Icon type="lock" />} type="password" placeholder="密码" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住密码</Checkbox>
            )}
            <a style={styles.login_form_forgot}>忘记密码</a>
            <Button type="primary" htmlType="submit" style={styles.login_form_button} loading={this.state.loading}>
              登录
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
// const LoginForm = Form.create()();


LoginForm.propTypes = {
  form: PropTypes.object.isRequired,
  createData: PropTypes.func.isRequired,
};

const WrapLoginForm = Form.create()(LoginForm);
const NewLoginForm = CreateNewData('/api/basic-user/login')(WrapLoginForm);
export default NewLoginForm;
