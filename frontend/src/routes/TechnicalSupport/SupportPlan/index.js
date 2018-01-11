import main from './main';
import PlanList from './PlanList';
import PlanView from './PlanView';
import EditPlan from './EditPlan';

const config = {
  path: 'SupportPlan',
  name: '技术保障方案',
  component: main,
  indexRoute: {
    component: PlanList, // 所有请求列表
  },
  childRoutes: [
    {
      path: 'PlanView/:id',
      name: '方案详情',
      component: PlanView,
    },
    {
      path: 'EditPlan/:id',
      name: '编辑方案',
      component: EditPlan,
    },
  ],
};

export default config;
