import main from './main';
import Summary from './Summary';
import NewSummary from './NewSummary';
import SummaryView from './SummaryView';
import EditSummary from './EditSummary';

const config = {
  path: 'RequestsSummary',
  name: '故障信息汇总',
  component: main,
  indexRoute: {
    component: Summary,
  },
  childRoutes: [
    {
      path: 'NewSummary',
      name: '新建汇总',
      component: NewSummary,
    },
    {
      path: 'EditSummary/:id',
      name: '编辑汇总',
      component: EditSummary,
    },
    {
      path: 'SummaryView/:id',
      name: '汇总信息',
      component: SummaryView,
    },
  ],
};

export default config;
