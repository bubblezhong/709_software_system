import ParameterSetting from './ParameterSetting/ParameterSetting';
import OrganizationStructure from './OrganizationStructure/OrganizationStructure';
import OrganizationStructureDetail from './OrganizationStructure/OrganizationStructureDetail';
import UserManage from './UserManage/UserManage';
import UserManageDetail from './UserManage/UserManageDetail';
import RoleManage from './RoleManage/RoleManage';
import RoleManageDetail from './RoleManage/RoleManageDetail';
import MenuManage from './MenuManage/MenuManage';
import MenuManageDetail from './MenuManage/MenuManageDetail';
import AuthorityManage from './AuthorityManage/AuthorityManage';
import ProcessConfiguration from './ProcessConfiguration/ProcessConfiguration';
import ProcessConfigurationDetail from './ProcessConfiguration/ProcessConfigurationDetail';
import ProcessConfigurationNew from './ProcessConfiguration/ProcessConfigurationNew';
import Backup from './Backup/Backup';
import RecordInfo from './RecordInfo/RecordInfo';
import './SystemSetting.css';

const config = {
  path: 'SystemSetting',
  name: '系统设置',
  target: 'SystemSetting', // 用于数据分流 标志 √
  indexRoute: {
    component: ParameterSetting,
  },
  childRoutes: [
    {
      path: 'ParameterSetting',
      name: '参数设置',
      component: ParameterSetting,
    },
    {
      path: 'OrganizationStructure',
      name: '组织结构',
      component: OrganizationStructure,
    },
    {
      path: 'OrganizationStructureDetail/:id',
      name: '组织结构详情',
      component: OrganizationStructureDetail,
    },
    {
      path: 'OrganizationStructureNew',
      name: '新增组织结构',
      component: OrganizationStructureDetail,
    },
    {
      path: 'UserManage',
      name: '用户管理',
      component: UserManage,
    },
    {
      path: 'UserManageDetail/:id',
      name: '用户管理详情',
      component: UserManageDetail,
    },
    {
      path: 'UserManageNew',
      name: '新增用户管理',
      component: UserManageDetail,
    },
    {
      path: 'RoleManage',
      name: '角色管理',
      component: RoleManage,
    },
    {
      path: 'RoleManageDetail/:id',
      name: '角色管理详情',
      component: RoleManageDetail,
    },
    {
      path: 'RoleManageNew',
      name: '新增角色管理',
      component: RoleManageDetail,
    },
    {
      path: 'MenuManage',
      name: '菜单管理',
      component: MenuManage,
    },
    {
      path: 'MenuManageDetail/:id',
      name: '菜单管理详情',
      component: MenuManageDetail,
    },
    {
      path: 'MenuManageNew',
      name: '新增菜单管理',
      component: MenuManageDetail,
    },
    {
      path: 'AuthorityManage',
      name: '权限管理',
      component: AuthorityManage,
    },
    {
      path: 'ProcessConfiguration',
      name: '流程配置',
      component: ProcessConfiguration,
    },
    {
      path: 'ProcessConfigurationDetail/:id',
      name: '流程配置详情',
      component: ProcessConfigurationDetail,
    },
    {
      path: 'ProcessConfigurationNew',
      name: '新增流程配置',
      component: ProcessConfigurationNew,
    },
    {
      path: 'Backup',
      name: '初始化备份',
      component: Backup,
    },
    {
      path: 'RecordInfo',
      name: '日志信息',
      component: RecordInfo,
    },
  ],
};

export default config;
