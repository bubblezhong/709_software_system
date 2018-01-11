import React from 'react';
import createG2 from 'g2-react';
// import { Stat } from 'g2';

const Chart = createG2((chart) => {
  chart.col('month', {
    alias: '月份',
    range: [0, 1],
  });
  chart.col('temperature', {
    alias: '软件入库统计',
  });
  chart.line().position('month*temperature').size(2);
  chart.render();
});

// eslint-disable-next-line
const App = React.createClass({
  getInitialState() {
    return {
      data: [
        { month: '一月', temperature: 17 },
        { month: '二月', temperature: 16 },
        { month: '三月', temperature: 19 },
        { month: '四月', temperature: 4 },
        { month: '五月', temperature: 8 },
        { month: '六月', temperature: 2 },
        { month: '七月', temperature: 5 },
        { month: '八月', temperature: 6 },
        { month: '九月', temperature: 13 },
        { month: '十月', temperature: 15 },
        { month: '十一月', temperature: 1 },
        { month: '十二月', temperature: 6 },
      ],
      forceFit: true,
      width: 500,
      height: 450,
    };
  },
  render() {
    return (
      <div>
        <Chart
          data={this.state.data}
          width={this.state.width}
          height={this.state.height}
          forceFit={this.state.forceFit}
        />
      </div>
    );
  },
});

export default App;
