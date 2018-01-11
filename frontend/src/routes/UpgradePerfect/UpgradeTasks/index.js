import main from './main';
import Summary from './Summary';

const config = {
  path: 'UpgradeTasks',
  name: '升级需求任务',
  component: main,
  indexRoute: {
    component: Summary,
  },
  childRoutes: [
    {
      path: 'TasksList/:summary_id',
      name: '新建汇总',
      component: Summary,
    },
  ],
};

export default config;
