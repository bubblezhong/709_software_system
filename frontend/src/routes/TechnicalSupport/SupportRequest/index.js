import main from './main';
import RequestList from './RequestList';
import RequestSteps from './RequestSteps';

const config = {
  path: 'SupportRequest',
  name: '技术保障申请',
  component: main,
  indexRoute: {
    component: RequestList, // 所有请求列表
  },
  childRoutes: [
    {
      path: 'Steps/:id',
      name: '申请流程',
      component: RequestSteps,
    },
    // {
    //   path: 'Edit/:id',
    //   name: '编辑',
    //   component: SchemeEdit,
    // },
    // {
    //   path: 'New',
    //   name: '新建',
    //   component: SchemeNew,
    // },
  ],

};

export default config;
