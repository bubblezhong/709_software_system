import React from 'react';
import createG2 from 'g2-react';
// import { Stat } from 'g2';

const Chart = createG2((chart) => {
  chart.col('month', {
    alias: '月份',
    range: [0, 1],
  });
  chart.col('temperature', {
    alias: '故障总数',
  });
  chart.line().position('month*temperature').size(2);
  chart.render();
});

// eslint-disable-next-line
const App = React.createClass({
  getInitialState() {
    return {
      data: [
        { month: '一月', temperature: 7.0 },
        { month: '二月', temperature: 6.9 },
        { month: '三月', temperature: 9.5 },
        { month: '四月', temperature: 14.5 },
        { month: '五月', temperature: 18.2 },
        { month: '六月', temperature: 21.5 },
        { month: '七月', temperature: 25.2 },
        { month: '八月', temperature: 26.5 },
        { month: '九月', temperature: 23.3 },
        { month: '十月', temperature: 18.3 },
        { month: '十一月', temperature: 13.9 },
        { month: '十二月', temperature: 9.6 },
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
