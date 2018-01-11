import React, { PropTypes } from 'react';
import { Button, Col, Icon, message, Row, Table, Upload } from 'antd';
import { Link } from 'react-router';
import './Info.css';

const config = require('./../../../../config/config');


const imgSrc = 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1100783569,297874501&fm=116&gp=0.jpg';
const imgTitle = '头像';
const uploadProps = {
  name: 'file',
  action: `${config.host}/uploadheadPortrait`,
  // headers: {
  //   authorization: 'authorization-text',
  //   withCredentials: true,
  //   credentials: 'include',
  // },
  withCredentials: true,
  onChange(info) {
    console.log('info: ', info);
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const App = (props) => {
  const { userinfo } = props;
  console.log('userinfo: ', userinfo);
  const columns = [{
    title: 'title',
    dataIndex: 'title',
  }, {
    title: 'value',
    dataIndex: 'value',
  }];
  const data = [{
    key: 'login_name',
    title: '用户名',
    value: userinfo.login_name,
  }, {
    key: 'real_name',
    title: '姓名',
    value: userinfo.real_name,
  }, {
    key: 'sex',
    title: '姓名',
    value: userinfo.sex,
  }, {
    key: 'mobile',
    title: '手机号码',
    value: userinfo.mobile,
  }, {
    key: 'telephone',
    title: '座机',
    value: userinfo.telephone,
  }, {
    key: 'email',
    title: '邮箱',
    value: userinfo.email,
  }, {
    key: 'birthday',
    title: '生日',
    value: userinfo.birthday && new Date(userinfo.birthday).toLocaleDateString(),
  }, {
    key: 'organization',
    title: '所属单位',
    value: userinfo.organizations && userinfo.organizations.map((item, index) => {
      return <Link to={`#/${item.id}`} key={index}>{item.name}</Link>;
    }),
  }, {
    key: 'role',
    title: '用户角色',
    value: userinfo.role && userinfo.role.map((item, index) => {
      return <Link to={`#/${item.id}`} key={index}>{item.name}</Link>;
    }),
  }, {
    key: 'address',
    title: '地址',
    value: userinfo.address,
  }, {
    key: 'remark',
    title: '备注',
    value: userinfo.remark,
  }, {
    key: 'status',
    title: '用户状态',
    value: userinfo.status,
  }, {
    key: 'create_date',
    title: '创建时间',
    value: userinfo.create_date && new Date(userinfo.create_date).toLocaleString(),
  }, {
    key: 'update_date',
    title: '上次修改时间',
    value: userinfo.update_date && new Date(userinfo.update_date).toLocaleString(),
  }];

  return (
    <Row>
      <Col span={16} className="info">
        <Table
          showHeader={false}
          pagination={false}
          bordered
          size="small"
          columns={columns}
          dataSource={data}
        />
      </Col>
      <Col style={{ textAlign: 'center' }}>
        <div>
          <img
            src={imgSrc}
            alt={imgTitle}
            style={{
              width: 130,
              height: 130,
              borderRadius: 8,
              margin: 5,
            }}
          />
        </div>
        <Upload {...uploadProps}>
          <p>
            <Button>
              <Icon type="upload" />修改头像
            </Button>
          </p>
        </Upload>
      </Col>
    </Row>
  );
};


App.propTypes = {
  userinfo: PropTypes.object.isRequired,
};


export default App;
