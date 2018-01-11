
// export default config;
import SupportRequest from './SupportRequest/SupportRequest';
import SupportRequestDetail from './SupportRequest/SupportRequestDetail';
import SupportScheme from './SupportScheme/SupportScheme';
import SupportSchemeDetail from './SupportScheme/SupportSchemeDetail';
import OnlineHelp from './OnlineHelp/OnlineHelp';
import OnlineHelpDetail from './OnlineHelp/OnlineHelpDetail';
import OnlineHelpDetailEdit from './OnlineHelp/OnlineHelpDetailEdit';

const routes = {
  path: 'TechnicalSupport',
  name: '技术保障支持',
  indexRoute: {
    component: SupportRequest,
  },
  childRoutes: [
    {
      path: 'SupportRequest',
      name: '技术保障申请',
      component: SupportRequest,
    }, {
      path: 'SupportRequestDetail/:id',
      name: '技术保障申请详情',
      component: SupportRequestDetail,
    }, {
      path: 'SupportRequestNew',
      name: '申请技术保障',
      component: SupportRequestDetail,
    }, {
      path: 'SupportScheme',
      name: '技术保障方案',
      component: SupportScheme,
    }, {
      path: 'SupportSchemeDetail/:id',
      name: '技术保障方案',
      component: SupportSchemeDetail,
    }, {
      path: 'SupportSchemeNew',
      name: '申请保障方案',
      component: SupportSchemeDetail,
    }, {
      path: 'OnlineHelp',
      name: '在线帮助库',
      component: OnlineHelp,
    }, {
      path: 'OnlineHelpDetail/:id',
      name: '在线帮助库详情',
      component: OnlineHelpDetail,
    }, {
      path: 'OnlineHelpDetailEdit/:id',
      name: '在线帮助库详情编辑',
      component: OnlineHelpDetailEdit,
    }, {
      path: 'OnlineHelpDetailNew',
      name: '新增在线帮助库',
      component: OnlineHelpDetailEdit,
    },
  ],
};

export default routes;
