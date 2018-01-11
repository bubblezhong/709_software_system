import main from './main';
import SchemeList from './SchemeList';
import SchemeView from './SchemeView';
import SchemeEdit from './SchemeEdit';
import SchemeNew from './SchemeNew';

const routes = {
  path: 'Scheme',
  component: main,
  name: '编配方案',
  indexRoute: {
    component: SchemeList,
  },
  childRoutes: [
    // require('./DeploymentRequest').default, // 调配申请
    {
      path: 'View/:id',
      name: '浏览',
      component: SchemeView,
    },
    {
      path: 'Edit/:id',
      name: '编辑',
      component: SchemeEdit,
    },
    {
      path: 'New',
      name: '新建',
      component: SchemeNew,
    },
  ],
};


export default routes;
