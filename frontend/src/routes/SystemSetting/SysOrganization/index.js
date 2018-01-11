import main from './main';
import Organization from './Organization';
import View from './View';

const config = {
  path: 'Organization',
  name: '单位管理',
  component: main,
  indexRoute: {
    component: Organization,
  },
  childRoutes: [
    {
      path: 'View/:id',
      name: '查看详情',
      component: View,
    },
  ],
};
export default config;
