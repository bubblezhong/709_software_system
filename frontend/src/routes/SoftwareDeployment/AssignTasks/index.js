import main from './main';
import AssignList from './AssignList';
import TaskList from './TaskList';
import TaskEdit from './TaskEdit';
import TaskView from './TaskView';

const routes = {
  path: 'AssignTasks',
  component: main,
  name: '编配任务',
  target: 'AssignTasks', // 用于数据分流 标志 √
  indexRoute: {
    component: AssignList,
  },
  childRoutes: [
    {
      path: 'TaskList/:scheme_id',
      name: '方案任务列表',
      component: TaskList,
    },
    {
      path: 'TaskEdit/:scheme_id/:task_id',
      name: '编辑任务',
      component: TaskEdit,
    },
    {
      path: 'TaskView/:scheme_id/:task_id',
      name: '任务细节',
      component: TaskView,
    },
    // {
    //   path: 'AssignTasks',
    //   name: '任务详情',
    //   component: AssignTasks,
    // },
  ],
};


export default routes;
