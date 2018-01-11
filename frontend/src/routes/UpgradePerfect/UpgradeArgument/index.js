import main from './main';
import Summary from './Summary';

const config = {
  path: 'UpgradeArgument',
  name: '升级需求论证',
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
