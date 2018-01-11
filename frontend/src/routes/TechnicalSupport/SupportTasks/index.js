import main from './main';
import PlanList from './PlanList';
import TasksList from './TasksList';
import TasksForm from './Showing/TasksForm';
import TasksView from './Showing/TasksView';

const config = {
  path: 'SupportTasks',
  name: '技术保障任务',
  component: main,
  indexRoute: {
    component: PlanList, // 所有请求列表
  },
  // TODO 补全 单一任务 详情页
  childRoutes: [{
    path: ':id/Tasks',
    name: '任务列表',
    indexRoute: {
      component: TasksList,
    },
    childRoutes: [{
      path: ':taskId/Edit',
      name: '编辑任务',
      component: TasksForm,
    }, {
      path: ':taskId/View',
      name: '任务详情',
      component: TasksView,
    },
    ],
  }],
};

export default config;
