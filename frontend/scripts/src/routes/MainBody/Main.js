import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import { Link } from 'react-router';
// import { asyncGet } from './../utils/AsyncGetAndPost';
import Sidebar from './Side';
import HeaderMenu from './HeaderMenu';
// import authorityJson from './authority.json';
import './Main.css';


// const config = require('./../../../config/config');


const { Header, Content, Footer, Sider } = Layout;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
      // authority: authorityJson,  // 初始 权限结构
      authority: [],
      dictionaryAll: {},
    };
  }

  componentWillMount() {
    // this.getAuthority();
  }
  render() {
    const { routes, children } = this.props;
    const childrenWithProps = React.Children.map(children,
      /*
       *  第一次页面初始刷新时 props dictionary的值为初始值
       *  当数据处理完毕后，setState 页面重新刷新，进行第二次刷新
       *  第二次刷新时 props dictionary的值为分配后的数据字典内容
       */
      child => React.cloneElement(child, {
        /*
         *  根据 target_modules 名称 进行第一次数据分配
         *  child.props.route.name 在 包内 index.js 文件进行定义
         *  {
         *     path: 'SystemSetting',
         *     name: 'SystemSetting', <---- 定义位置
         *     component: XXXXXX
         *   }
         *   第二次数据分配发生在 包内 main.js内
         */
        authority: this.state.authority[child.props.route.target],
      }),
    );
    const routesTemp = routes.filter(item => (item.path)); // 去掉 有误 的 路由
    const routerPath = routesTemp.map(item => item.path);
    const routers = routesTemp.map((item, index, sum) => {
      const path = routerPath.slice(0, index + 1).join('/');
      // console.log('666 sum', sum.length);
      return (
        <Breadcrumb.Item key={index}>
          {index === sum.length - 1 &&  // 当该项为 最后一级路由 不做跳转
          item.name
          }
          {index !== sum.length - 1 &&
          <Link to={path}>
            {item.name}
          </Link>
          }
        </Breadcrumb.Item>
      );
    });

    return (
      <Layout style={{ height: '100vh' }}>
        <Sider style={{ overflow: 'auto' }}>
          <Sidebar authority={{}} routes={routes} />
        </Sider>
        <Layout>
          <Header
            className="header"
          >
            <div className="logo" />
            <span className="title">软件装备运维管理系统</span>
            <div className="headerMenu">
              <HeaderMenu />
            </div>
          </Header>
          <Content style={{ padding: 20, backgroundColor: '#f2f2f2' }}>
            <Content style={{ padding: 20, minHeight: 300 }}>
              <Breadcrumb style={{ marginBottom: 20 }}>
                {routers}
              </Breadcrumb>
              { childrenWithProps }
            </Content>
            <Footer style={{ textAlign: 'center', marginTop: 20 }}>
              软件管理系统 ©2017
            </Footer>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.node,
  routes: React.PropTypes.array,
};


export default Main;
