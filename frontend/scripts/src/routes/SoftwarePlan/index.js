// import main from './main';

// const config = {
//   path: 'SoftwarePlan',
//   name: '计划制定',
//   target: 'SoftwarePlan', // 用于数据分流 标志 √
//   component: main,
// };

// export default config;
import Plan from './component/Plan';
import PlanRemind from './component/PlanRemind';
import PlanInfo from './component/PlanInfo';
import PlanDetail from './component/PlanDetail';

const routes = {
  path: 'SoftwarePlan',
  component: Plan,
  name: '计划管理',
  indexRoute: {
    component: PlanRemind,
  },
  target: 'SoftwarePlan',
  childRoutes: [
    {
      path: 'PlanRemind',
      name: '计划提醒',
      component: PlanRemind,
    },
    {
      path: 'PlanInfo',
      name: '计划信息',
      component: PlanInfo,
    },
    {
      path: 'PlanDetail/:id',
      name: '计划信息详情',
      component: PlanDetail,
    },
  ],
};
export default routes;
