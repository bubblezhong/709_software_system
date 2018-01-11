import React, { Component, PropTypes } from 'react';
import { Button, DatePicker, Form, Input, message, Radio, Select } from 'antd';
import moment from 'moment';
import EditPassword from './EditPassword';
import { updateUserinfo } from './../Data/Userinfo';
import './Info.css';

// const config = require('./../../../../config/config');


const FormItem = Form.Item;
// const imgSrc = 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1100783569,297874501&fm=116&gp=0.jpg';
// const imgTitle = '头像';
// const uploadProps = {
//   name: 'file',
//   action: '/upload.do',
//   headers: {
//     authorization: 'authorization-text',
//   },
//   onChange(info) {
//     if (info.file.status !== 'uploading') {
//       console.log(info.file, info.fileList);
//     }
//     if (info.file.status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully`);
//     } else if (info.file.status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
// };


class Info extends Component {
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
        this.update(values);
      }
    });
  }

  async update(data) {
    const { res } = await updateUserinfo(data);
    console.log('res: ', res);
    if (res.code === 3000) {
      message.success('修改个人信息成功');
    } else {
      message.error(res.message);
    }
  }

  checkPassword(rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码不一致');
    } else {
      callback();
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { userinfo } = this.props;
    console.log('userinfo: ', userinfo);
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
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 60 }}>
        <Select.Option value="86">+86</Select.Option>
      </Select>,
    );
    console.log(moment(userinfo.birthday).format());
    return (
      <div>
        <Form
          onSubmit={this.handleSubmit}
        >
          <FormItem
            {...formItemLayout}
            label="真实姓名"
            hasFeedback
          >
            {getFieldDecorator('real_name', {
              initialValue: userinfo.real_name,
              rules: [{
                required: true,
                message: '请填写您的真实姓名',
              }],
            })(
              <Input />,
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="性别"
          >
            {getFieldDecorator('gender', {
              initialValue: userinfo.gender && userinfo.gender.toString(),
            })(
              <Radio.Group>
                <Radio value="0">男</Radio>
                <Radio value="1">女</Radio>
              </Radio.Group>,
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="手机号码"
          >
            {getFieldDecorator('mobile', {
              initialValue: userinfo.mobile,
              rules: [{
                required: true,
                message: '请填写您的手机号码',
              }],
            })(
              <Input addonBefore={prefixSelector} />,
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="座机"
            hasFeedback
          >
            {getFieldDecorator('telephone', {
              initialValue: userinfo.telephone,
              rules: [{
                required: false,
                message: '请填写您的座机号码',
              }],
            })(
              <Input />,
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="邮箱"
            hasFeedback
          >
            {getFieldDecorator('email', {
              initialValue: userinfo.email,
              rules: [{
                type: 'email',
                message: '邮箱格式错误',
              }, {
                required: true,
                message: '请输入您的邮箱',
              }],
            })(
              <Input />,
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="详细地址"
          >
            {getFieldDecorator('address', {
              initialValue: userinfo.address,
              rules: [{
                required: false,
                message: '请填写您的详细地址',
              }],
            })(
              <Input />,
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="生日"
          >
            {getFieldDecorator('birthday', {
              initialValue: userinfo.birthday ? moment() : moment(userinfo.birthday),
              rules: [{ required: false, message: '请选择您的生日' }],
            })(
              <DatePicker />,
            )}
          </FormItem>
          <FormItem
            {...tailFormItemLayout}
          >
            <Button
              type="primary"
              htmlType="submit"
              size="large"
            >
              更新个人信息
            </Button>
          </FormItem>
        </Form>
        <div style={{ marginTop: 50 }}>
          <EditPassword />
        </div>
      </div>
    );
  }
}


Info.propTypes = {
  form: PropTypes.object,
  userinfo: PropTypes.object.isRequired,
};


export default Form.create({})(Info);
