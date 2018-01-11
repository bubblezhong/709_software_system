import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import moment from 'moment';
import 'moment/locale/zh-cn';
import NotFound from './common/NotFound';
import Index from './routes/WebIndex/Index';
import LoginForm from './routes/WebIndex/LoginForm';
import MainBody from './routes/MainBody/Main';
import Home from './routes/MainBody/Home';
import './index.less';
// import UserinfoRoutes from './routes/Userinfo/routes';

// 推荐在入口文件全局设置 locale
moment.locale('zh-cn');

// const InventoryRegistration = () => {
//   return <h1>软件库存登记管理</h1>;
// };

// const SoftwarePlan = () => {
//   return <h1>软件计划管理</h1>;
// };


// const SoftwareDeployment = () => {
//   return <h1>软件调配管理</h1>;
// };

// const SoftwareDaily = () => {
//   return <h1>软件日常管理</h1>;
// };

// const TechnicalSupport = () => {
//   return <h1>技术保障支持</h1>;
// };

// const UpgradePerfect = () => {
//   return <h1>升级完善</h1>;
// };

// const SystemSetting = () => {
//   return <h1>系统配置</h1>;
// };
const MainBodySetting = [
  {
    path: '/',
    component: Index,
    indexRoute: {
      component: LoginForm,
    },
  }, {
    path: '/main',
    component: MainBody,
    name: '首页',
    indexRoute: {
      component: Home,
    },
    childRoutes: [
      // {
      //   path: 'InventoryRegistration',
      //   component: InventoryRegistration,
      // },
      // {
      //   path: 'SoftwarePlan',
      //   component: SoftwarePlan,
      // }, {
      //   path: 'SoftwareDeployment',
      //   component: SoftwareDeployment,
      // }, {
        // path: 'TechnicalSupport',
        // component: TechnicalSupport,
      // }, {
      //   path: 'UpgradePerfect',
      //   component: UpgradePerfect,
      // },
      // 升级完善管理
      // eslint-disable-next-line
      require('./routes/UpgradePerfect').default,
      // 技术保障支持
      // eslint-disable-next-line
      require('./routes/TechnicalSupport').default,
      // 软件调配管理
      // eslint-disable-next-line
      require('./routes/SoftwareDeployment').default,
      // 软件库存登记管理
      // eslint-disable-next-line
      require('./routes/InventoryRegistration').default,
      // 软件日常管理
      // eslint-disable-next-line
      require('./routes/SoftwareDaily').default,
      // 软件日常计划
      // eslint-disable-next-line
      require('./routes/SoftwarePlan').default,
      // eslint-disable-next-line
      require('./routes/SoftwareInfo').default,
      // eslint-disable-next-line
      require('./routes/Userinfo').default,
      // eslint-disable-next-line
      require('./routes/SystemSetting').default,
      // require('./routes/SysOrganization').default,
    ],
  }, {
    path: '*',
    component: NotFound,
  },
];

ReactDOM.render((
  <Router history={browserHistory} routes={MainBodySetting} />
),
document.getElementById('root'));
