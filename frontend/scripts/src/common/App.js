import React, { Component } from 'react';
import { Link } from 'react-router';
import config from './../../config/config';
import { asyncGet } from './../utils/AsyncGetAndPost';

class App extends Component {

  componentWillMount() {
    asyncGet(`${config.host}/cros`)
      .then((result) => {
        console.log('result', result);
      });
    // this.getMessage(`${config.host}/cros`)
    //   .then((result) => {
    //     console.log('result', result);
    //   })
    //   .catch((error) => {
    //     console.error('error: ', error);
    //   });
  }

  // async getMessage(url) {
  //   try {
  //     const response = await fetch(url);
  //     const data = response.json();
  //     console.log(data);
  //     return data;
  //   } catch (error) {
  //     console.log('Oops, error: ', error);
  //     return error;
  //   }
  // }

  render() {
    return (
      <div>
        <h1>软件管理系统</h1>
        <ul>
          <li><Link to="/SoftwareInfo">软件基本信息管理</Link></li>
          <li><Link to="/InventoryRegistration">软件库存登记管理</Link></li>
          <li><Link to="/SoftwarePlan">软件计划管理</Link></li>
          <li><Link to="/SoftwareDeployment">软件调配管理</Link></li>
          <li><Link to="/SoftwareDaily">软件日常管理</Link></li>
          <li><Link to="/TechnicalSupport">技术保障支持</Link></li>
          <li><Link to="/UpgradePerfect">升级完善</Link></li>
          <li><Link to="/Userinfo">个人中心</Link></li>
          <li><Link to="/SystemSetting">系统配置</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}


App.propTypes = {
  children: React.PropTypes.object,
};


export default App;
