import React, { Component } from 'react';
import createG2 from 'g2-react';
import { Stat } from 'g2';

const Chart = createG2((chart) => {
  chart.col('year', {
    type: 'linear',
    tickInterval: 25,
  });
  chart.col('..percent', {
    // eslint-disable-next-line
    formatter: function (value) {
      // eslint-disable-next-line
      value = value || 0;
      // eslint-disable-next-line
      value = value * 100;
      // eslint-disable-next-line
      return parseInt(value);
    },
    alias: 'percent(%)',
  });
  chart.areaStack().position(Stat.summary.percent('year*value'))
    .color('软件统计', ['#ffd54f', '#ef6c00', '#1976d2', '#64b5f6']);
  chart.render();
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { country: 'Asia', year: '1750', value: 502 },
        { country: 'Asia', year: '1800', value: 635 },
        { country: 'Asia', year: '1850', value: 809 },
        { country: 'Asia', year: '1900', value: 947 },
        { country: 'Asia', year: '1950', value: 1402 },
        { country: 'Asia', year: '1999', value: 3634 },
        { country: 'Asia', year: '2050', value: 5268 },
        { country: 'Africa', year: '1750', value: 106 },
        { country: 'Africa', year: '1800', value: 107 },
        { country: 'Africa', year: '1850', value: 111 },
        { country: 'Africa', year: '1900', value: 133 },
        { country: 'Africa', year: '1950', value: 221 },
        { country: 'Africa', year: '1999', value: 767 },
        { country: 'Africa', year: '2050', value: 1766 },
        { country: 'Europe', year: '1750', value: 163 },
        { country: 'Europe', year: '1800', value: 203 },
        { country: 'Europe', year: '1850', value: 276 },
        { country: 'Europe', year: '1900', value: 408 },
        { country: 'Europe', year: '1950', value: 547 },
        { country: 'Europe', year: '1999', value: 729 },
        { country: 'Europe', year: '2050', value: 628 },
        { country: 'Oceania', year: '1750', value: 200 },
        { country: 'Oceania', year: '1800', value: 200 },
        { country: 'Oceania', year: '1850', value: 200 },
        { country: 'Oceania', year: '1900', value: 300 },
        { country: 'Oceania', year: '1950', value: 230 },
        { country: 'Oceania', year: '1999', value: 300 },
        { country: 'Oceania', year: '2050', value: 460 },
      ],
      forceFit: true,
      width: 500,
      height: 450,
    };
  }

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
  }
}

export default App;
