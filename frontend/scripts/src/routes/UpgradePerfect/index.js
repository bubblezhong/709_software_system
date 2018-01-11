
// export default config;
import UpgradeRequest from './UpgradeRequest/UpgradeRequest';
import UpgradeRequestDetail from './UpgradeRequest/UpgradeRequestDetail';
import UpgradeRequestDetailEdit from './UpgradeRequest/UpgradeRequestDetailEdit';
import UpgradeSummary from './UpgradeSummary/UpgradeSummary';
import UpgradeSummaryDetail from './UpgradeSummary/UpgradeSummaryDetail';
import UpgradeSummaryDetailEdit from './UpgradeSummary/UpgradeSummaryDetailEdit';
import UpgradeApply from './UpgradeApply/UpgradeApply';
import UpgradeApplyDetail from './UpgradeApply/UpgradeApplyDetail';
// import UpgradeApplyDetailEdit from './UpgradeApply/UpgradeApplyDetailEdit';
import UpgradeScheme from './UpgradeScheme/UpgradeScheme';
import UpgradeSchemeDetail from './UpgradeScheme/UpgradeSchemeDetail';

const routes = {
  path: 'UpgradePerfect',
  name: '升级完善管理',
  indexRoute: {
    component: UpgradeRequest,
  },
  childRoutes: [
    {
      path: 'UpgradeRequest',
      name: '升级完善上报',
      component: UpgradeRequest,
    }, {
      path: 'UpgradeRequestDetail/:id',
      name: '升级完善上报',
      component: UpgradeRequestDetail,
    }, {
      path: 'UpgradeRequestDetailEdit/:id',
      name: '升级完善上报详情编辑',
      component: UpgradeRequestDetailEdit,
    }, {
      path: 'UpgradeRequestNew',
      name: '新增升级完善上报',
      component: UpgradeRequestDetailEdit,
    }, {
      path: 'UpgradeSummary',
      name: '升级完善汇总',
      component: UpgradeSummary,
    }, {
      path: 'UpgradeSummaryDetail/:id',
      name: '升级完善汇总详情',
      component: UpgradeSummaryDetail,
    }, {
      path: 'UpgradeSummaryDetailEdit/:id',
      name: '升级完善汇总详情编辑',
      component: UpgradeSummaryDetailEdit,
    }, {
      path: 'UpgradeSummaryNew',
      name: '新增升级完善汇总',
      component: UpgradeSummaryDetailEdit,
    }, {
      path: 'UpgradeApply',
      name: '升级保障申请',
      component: UpgradeApply,
    }, {
      path: 'UpgradeApplyDetail/:id',
      name: '升级保障申请',
      component: UpgradeApplyDetail,
    }, {
      path: 'UpgradeApplyNew',
      name: '申请升级保障',
      component: UpgradeApplyDetail,
    }, {
      path: 'UpgradeScheme',
      name: '升级完善方案',
      component: UpgradeScheme,
    }, {
      path: 'UpgradeSchemeDetail/:id',
      name: '升级完善方案详情',
      component: UpgradeSchemeDetail,
    }, {
      path: 'UpgradeSchemeNew',
      name: '升级完善方案详情',
      component: UpgradeSchemeDetail,
    },
  ],
};

export default routes;
