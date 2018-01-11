import DeploymentRequest from './DeploymentRequest/DeploymentRequest'; // 调配申请
import DeploymentRequestDetail from './DeploymentRequest/DeploymentRequestDetail'; // 调配申请
import DeploymentScheme from './DeploymentScheme/DeploymentScheme';                       // 编配方案
import DeploymentSchemeDetail from './DeploymentScheme/DeploymentSchemeDetail';

const routes = {
  path: 'SoftwareDeployment',
  name: '软件调配管理',
  indexRoute: {
    component: DeploymentRequest,
  },
  childRoutes: [
    {
      path: 'DeploymentRequest',
      name: '调配申请',
      component: DeploymentRequest,
    },
    {
      path: 'DeploymentRequestDetail/:id',
      name: '调配申请详情',
      component: DeploymentRequestDetail,
    },
    {
      path: 'DeploymentRequestNew',
      name: '调配申请',
      component: DeploymentRequestDetail,
    },
    {
      path: 'DeploymentScheme',
      name: '调配方案',
      component: DeploymentScheme,
    },
    {
      path: 'DeploymentSchemeDetail/:id',
      name: '调配方案详情',
      component: DeploymentSchemeDetail,
    },
    {
      path: 'DeploymentSchemeNew',
      name: '新增调配方案',
      component: DeploymentSchemeDetail,
    },
  ],
};
export default routes;
