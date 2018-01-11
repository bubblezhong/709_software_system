import Software from './Software';
import Query from './Query/Query';
import QueryDetail from './Query/QueryDetail';
// import QueryNew from './Query/New';
// import QueryEdit from './Query/Edit';
// import QueryDetail from './Query/Detail';
// import Statistic from './Statistic/Statistic';CategoryDetailAddChild
import Category from './Category/Category';
import CategoryDetail from './Category/CategoryDetail';
import CategoryVersionDetail from './Category/CategoryVersionDetail';
import CategoryDetailEdit from './Category/CategoryDetailEdit';
// import CategoryAddChild from './Category/CategoryAddChild';
import Module from './Module/Module';
import ModuleDetail from './Module/ModuleDetail';
import ModuleDetailEdit from './Module/ModuleDetailEdit';
// import Version from './Version/Version';
// import VersionNew from './Version/New';
// import VersionEdit from './Version/Edit';SoftwareCategoryDetail
// import VersionDetail from './Version/Detail';
import UnitInfo from './UnitInfo/UnitInfo';
import UnitDetail from './UnitInfo/UnitDetail';
import SoftwareDetail from './SoftwareDetail/SoftwareDetail';
import SoftwareDetailEdit from './SoftwareDetail/SoftwareDetailEdit';
import SoftwareVersionDetailEdit from './SoftwareDetail/SoftwareVersionDetail/SoftwareVersionDetailEdit';
import SoftwareInfoDetail from './SoftwareDetail/SoftwareInfoDetail';
import SoftwareVersionDetail from './SoftwareDetail/SoftwareVersionDetail';

const routes = {
  path: 'SoftwareInfo',
  component: Software,
  name: '软件信息管理',
  target: 'SoftwareInfo',
  indexRoute: {
    component: Query,
  },
  childRoutes: [
    {
      path: 'Query',
      name: '信息查询',
      component: Query,
    }, {
      path: 'QueryDetail',
      name: '信息查询',
      component: QueryDetail,
    }, {
      path: 'UnitInfo',
      name: '单位信息',
      component: UnitInfo,
    }, {
      path: 'UnitDetail/:id',
      name: '单位详情',
      component: UnitDetail,
    }, {
      path: 'SoftwareDetail',
      name: '软件信息',
      component: SoftwareDetail,
    }, {
      path: 'SoftwareInfoDetail/:id',
      name: '软件信息详情',
      component: SoftwareInfoDetail,
    }, {
      path: 'SoftwareVersionDetail/:id',
      name: '软件版本详情',
      component: SoftwareVersionDetail,
    }, {
      path: 'SoftwareDetailEdit/:id',
      name: '软件信息编辑',
      component: SoftwareDetailEdit,
    }, {
      path: 'SoftwareDetailAdd',
      name: '新增软件信息',
      component: SoftwareDetailEdit,
    }, {
      path: 'SoftwareAddVersion/:id',
      name: '添加软件版本',
      component: SoftwareVersionDetailEdit,
    }, {
      path: 'SoftwareVersionDetailEdit/:id',
      name: '软件版本信息编辑',
      component: SoftwareVersionDetailEdit,
    }, {
      path: 'Category',
      name: '单元信息',
      component: Category,
    }, {
      path: 'CategoryVersionDetail/:id',
      name: '单元版本详情',
      component: CategoryVersionDetail,
    }, {
      path: 'CategoryDetail/:id',
      name: '单元详情',
      component: CategoryDetail,
    }, {
      path: 'CategoryDetailEdit/:id',
      name: '单元详情编辑',
      component: CategoryDetailEdit,
    }, {
      path: 'CategoryDetailAdd',
      name: '新增单元信息',
      component: CategoryDetailEdit,
    }, {
      path: 'CategoryAddChild/:id',
      name: '新增下级单元信息',
      component: CategoryDetailEdit,
    }, {
      path: 'Module',
      name: '谱系信息',
      component: Module,
    }, {
      path: 'ModuleDetail/:id',
      name: '谱系信息详情',
      component: ModuleDetail,
    }, {
      path: 'ModuleDetailEdit/:id',
      name: '谱系信息编辑',
      component: ModuleDetailEdit,
    }, {
      path: 'ModuleDetailAdd',
      name: '谱系信息新增',
      component: ModuleDetailEdit,
    },
  ],
};


export default routes;
