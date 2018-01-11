import main from './main';
import HelpSearch from './HelpSearch';
import OneHelp from './OneHelp';

const config = {
  path: 'UpgradeNotes',
  name: '升级信息记录',
  component: main,
  indexRoute: {
    component: HelpSearch, // 所有请求列表
  },
  childRoutes: [
    {
      path: 'Help/:id',
      name: '帮助详情',
      component: OneHelp,
    },
    {
      path: 'History/:id',
      name: '故障维修记录',
      component: OneHelp,
    },
  ],
};

export default config;
