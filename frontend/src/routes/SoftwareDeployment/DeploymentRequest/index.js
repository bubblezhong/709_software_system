import main from './main';
import DeploymentRequest from './DeploymentRequest';
import RequestSteps from './RequestSteps';

const routes = {
  path: 'DeploymentRequest',
  component: main,
  name: '调配管理',
  indexRoute: {
    component: DeploymentRequest,
  },
  childRoutes: [
    {
      path: 'Steps/:id',
      name: '流程处理',
      component: RequestSteps,
    },
  ],
};


export default routes;
