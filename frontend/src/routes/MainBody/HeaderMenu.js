import React from 'react';
import { Menu, Dropdown, Badge } from 'antd';
import './HeaderMenu.css';

const imgSrc = 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1100783569,297874501&fm=116&gp=0.jpg';
const imgTitle = '头像';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <span>个人信息</span>
    </Menu.Item>
    <Menu.Item key="1">
      <span>即时消息</span>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">
      退出登录
    </Menu.Item>
  </Menu>
);


const HeaderMenu = () => {
  return (
    <div>
      <Dropdown overlay={menu}>
        <Badge count={200}>
          <img src={imgSrc} alt={imgTitle} className="head" />
        </Badge>
      </Dropdown>
    </div>
  );
};


export default HeaderMenu;
