import React from 'react';
import createG2 from 'g2-react';
import G2 from 'g2';
import './Query.css';

const Chart = createG2((chart) => {
  const Stat = G2.Stat;
  chart.legend({
    position: 'right',
    title: '技术支持',
  });
  chart.coord('theta', {
    radius: 1,
    inner: 0.55,
  });
  chart.tooltip({
    title: null,
  });
  chart.intervalStack().position(Stat.summary.percent('profit'))
    .color('area')
    .label('..percent', {
      offset: -2,
    })
    .style({
      lineWidth: 0,
    });
  chart.render();
});
class TechnicSupport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { area: '已修复', profit: 80 },
        { area: '未修复', profit: 100 },
      ],
      forceFit: true,
      height: 300,
      plotCfg: {
        margin: '20px 50px 80px 20px',
      },
    };
  }
  render() {
    return (
      <div className="technicSupport">
        <h2>
          技术保障软件
        </h2>
        <div style={{ marginTop: 50 }} >
          <Chart
            data={this.state.data}
            height={this.state.height}
            forceFit={this.state.forceFit}
          />
        </div>
      </div>
    );
  }
}
export default TechnicSupport;
