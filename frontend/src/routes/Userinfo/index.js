import Userinfo from './Userinfo';
import Info from './Showing/Info';
// import Message from './Showing/Message';
import MesRemind from './Showing/MesRemind';
import History from './Showing/History';
import UndoTask from './Showing/UndoTask';
import EditPassword from './Showing/EditPassword';


const routes = {
  path: 'Userinfo',
  component: Userinfo,
  name: '个人中心',
  target: 'Userinfo',
  indexRoute: {
    component: Info,
  },
  childRoutes: [
    {
      path: 'Info',
      name: '账号管理',
      component: Info,
    },
    {
      path: 'UndoTask',
      name: '待办事项',
      component: UndoTask,
    },
    {
      path: 'History',
      name: '历史记录',
      component: History,
    },
    {
      path: 'Message',
      name: '消息提醒',
      component: MesRemind,
    },
    {
      path: 'EditPassword',
      name: '密码修改',
      component: EditPassword,
    },
  ],
};


export default routes;
