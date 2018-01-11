import SoftwareDaily from './SoftwareDaily';
import Collect from './Collect/Collect';
import CollectDetail from './Collect/CollectDetail';
import CollectDetailEdit from './Collect/CollectDetailEdit';
// import CollectDetail from './Collect/Detail';
import Registration from './Registration/Registration';
import RegistrationDetail from './Registration/RegistrationDetail';
import RegistrationDetailEdit from './Registration/RegistrationDetailEdit';
// import RegistrationEdit from './Registration/Edit';
// import RegistrationNew from './Registration/New';
// import RegistrationDetail from './Registration/Detail';

const routes = {
  path: 'SoftwareDaily',
  name: '软件日常管理',
  component: SoftwareDaily,
  indexRoute: {
    component: Registration,
  },
  childRoutes: [
    {
      path: 'Collect',
      name: '登记汇总',
      component: Collect,
    }, {
      path: 'CollectNew',
      name: '新增登记汇总',
      component: CollectDetailEdit,
    }, {
      path: 'CollectDetail/:id',
      name: '登记汇总详情',
      component: CollectDetail,
    }, {
      path: 'CollectDetailEdit/:id',
      name: '登记汇总编辑',
      component: CollectDetailEdit,
    }, {
      path: 'Registration',
      name: '日常登记',
      component: Registration,
    }, {
      path: 'RegistrationNew',
      name: '新增日常登记',
      component: RegistrationDetailEdit,
    }, {
      path: 'RegistrationDetail/:id',
      name: '日常登记详情',
      component: RegistrationDetail,
    }, {
      path: 'RegistrationDetailEdit/:id',
      name: '日常登记编辑',
      component: RegistrationDetailEdit,
    },
  ],
};

export default routes;
