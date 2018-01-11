import main from './main';
import Summary from './Summary';
import New from './New';
import Edit from './Edit';
import View from './View';

const config = {
  path: 'RequestsSummary',
  name: '升级需求汇总',
  component: main,
  indexRoute: {
    component: Summary,
  },
  childRoutes: [
    {
      path: 'new',
      name: '新建汇总',
      component: New,
    },
    {
      path: 'edit/:id',
      name: '修改汇总',
      component: Edit,
    },
    {
      path: 'view/:id',
      name: '详情',
      component: View,
    },
  ],
};

export default config;
