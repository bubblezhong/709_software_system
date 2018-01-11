import Input from './Input/Input';
import InputDetail from './Input/InputDetail';
import InputList from './Input/List';
import OutputList from './Output/List';
import OutputDetail from './Output/OutputDetail';
import RetireList from './Retire/List';
import RetireDetail from './Retire/RetireDetail';

// 软件库存登记管理
const routes = {
  path: 'InventoryRegistration',
  component: Input,
  name: '软件库存登记管理',
  indexRoute: {
    component: InputList,
  },
  target: 'InventoryRegistration',
  childRoutes: [
    {
      path: 'Input',
      name: '软件入库',
      component: InputList,
    },
    {
      path: 'InputDetail/:type/:id',
      name: '软件入库详情',
      component: InputDetail,
    },
    {
      path: 'InputNew',
      name: '软件入库申请',
      component: InputDetail,
    },
    {
      path: 'Output',
      name: '软件出库',
      component: OutputList,
    },
    {
      path: 'OutputDetail/:type/:id',
      name: '软件出库详情',
      component: OutputDetail,
    },
    {
      path: 'OutputNew',
      name: '软件出库申请',
      component: OutputDetail,
    },
    {
      path: 'Retire',
      name: '软件退役',
      component: RetireList,
    },
    {
      path: 'RetireDetail/:type/:id',
      name: '软件退役详情',
      component: RetireDetail,
    },
    {
      path: 'RetireNew',
      name: '软件退役申请',
      component: RetireDetail,
    },
  ],
};


export default routes;
