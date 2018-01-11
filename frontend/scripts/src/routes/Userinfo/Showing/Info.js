import React, { Component, PropTypes } from 'react';
import {
  Card,
  Icon,
} from 'antd';
import { browserHistory } from 'react-router';
import { getLoginUserinfo } from './../Data/Userinfo';
import Display from './Display';
import Edit from './Edit';
import './Info.css';

const config = require('./../../../../config/config');


class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      userinfo: {}, // 用户个人信息
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    this.userinfo();
  }


  // 获取用户个人信息
  async userinfo() {
    const { res } = await getLoginUserinfo();
    console.log('res: ', res);
    // 判断返回的个人信息是否正确
    if (res.code !== 1000) {
      browserHistory.push(config.loginPage);
      return false;
    }
    // 更新state中的用户个人信息
    this.setState({
      userinfo: res.user,
    });
  }


  handleEdit(e) {
    e.preventDefault();
    // 获取最新的用户信息
    this.userinfo();
    // 将页面切换到编辑
    this.setState({
      editable: !this.state.editable,
    });
  }


  // 提交数据
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.setState({
          editable: false,
        });
      }
    });
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
    const { editable, userinfo } = this.state;
    return (
      <Card
        title="个人信息"
        loading={false}
        extra={
          // eslint-disable-next-line
            <a
              href="#"
              onClick={this.handleEdit}
            >
              <Icon type="edit" /> 修改
            </a>}
        style={{
          width: '90%',
          margin: 5,
        }}
      >
        {
          editable ? <Edit userinfo={userinfo} /> : <Display userinfo={userinfo} />
        }
      </Card>
    );
  }
}


Info.propTypes = {
  form: PropTypes.object,
};


export default Info;
