import React, { Component } from 'react';
import { Layout, Row, Col, Breadcrumb } from 'antd';
import { Link } from 'react-router';
// import { asyncGet } from './../utils/AsyncGetAndPost';
import Sidebar from './Side';
import HeaderMenu from './HeaderMenu';
import authorityJson from './authority.json';
import './Main.css';


// const config = require('./../../../config/config');


const { Header, Content, Footer } = Layout;

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


  // getAuthority = () => {
  //   asyncGet(`${config.host}/SystemSetting/Authority/get_authority`).then((res) => {
  //     const authority = this.authorityMatch(res.data);
  //     // console.log('system new authority', authority);
  //     this.setState({ authority });
  //   });
  // };

  // authorityMatch = (data) => {
  //   const authority = authorityJson;
  //   data.forEach((item) => {
  //     // 判断 是否存在正确的 item 存储项
  //     if (authority[item.target_modules] && authority[item.target_modules][item.target_page]) {
  //       authority[item.target_modules][item.target_page][item.key] = item.value === 1 ? '' : 'none';
  //     }
  //   });
  //   return authority;
  // }

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
      })
    );
    const routesTemp = routes.filter(item => (item.path)); // 去掉 有误 的 路由
    const routerPath = routesTemp.map(item => item.path);
    const routers = routesTemp.map((item, index, sum) => {
      const path = routerPath.slice(0, index + 1).join('/');
      // console.log('666 sum', sum.length);
      return (
        <Breadcrumb.Item key={index}>
          {index === sum.length - 1 && // 当该项为 最后一级路由 不做跳转
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
      <Layout>
        <Header
          className="header"
        >
          <div className="logo" />
          <span className="title">软件管理系统</span>
          <div className="headerMenu">
            <HeaderMenu />
          </div>
        </Header>
        <Content
          style={{ padding: '0' }}
        >
          <Layout
            style={{ padding: '0', background: '#fff' }}
          >
            <Row>
              <Col span={6} style={{ maxWidth: 200, zIndex: 2 }}>
                {/* <Sidebar authority={this.state.authority.System.Sidebar} routes={routes} /> */}
                <Sidebar authority={{}} routes={routes} />
              </Col>
              <Col style={{ marginLeft: 200, padding: '0px 10px' }}>
                <Content style={{ padding: 20, minHeight: 300 }}>
                  <Breadcrumb style={{ marginBottom: 20 }}>
                    {routers}
                  </Breadcrumb>

                  { childrenWithProps }
                </Content>
              </Col>
            </Row>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          软件管理系统 ©2017 唯理科技
        </Footer>
      </Layout>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.node,
  routes: React.PropTypes.array,
};


export default Main;
