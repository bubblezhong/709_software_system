import React from 'react';
import createG2 from 'g2-react';
import G2 from 'g2';
import './Query.css';

const Chart = createG2((chart) => {
  const Stat = G2.Stat;
  chart.legend({
    position: 'right',
    title: '操作系统',
  });
  chart.coord('theta', {
    radius: 1,
    inner: 0.55,
  });
  chart.tooltip({
    title: '操作系统',
  });
  chart.intervalStack().position(Stat.summary.percent('value'))
    .color('name')
    .label('..percent', {
      offset: -2,
    })
    .style({
      lineWidth: 1,
    });
  chart.render();
});
class OperateSystem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Linux', value: 38 },
        { name: 'windows', value: 12 },
        { name: '塞班', value: 20 },
        { name: 'UNIX', value: 10 },
        { name: '其他', value: 20 },
      ],
      forceFit: true,
      height: 350,
      plotCfg: {
        margin: [50, 85, 60, 15],
      },
    };
  }
  render() {
    return (
      <div className="operateSystem">
        <h2>
          操作系统统计
        </h2>
        <div>
          <Chart
            data={this.state.data}
            height={this.state.height}
            plotCfg={this.state.plotCfg}
            forceFit={this.state.forceFit}
          />
        </div>
      </div>
    );
  }
}
export default OperateSystem;

// 饼图
// import React from 'react';
// import createG2 from 'g2-react';
// import { Stat } from 'g2';

// const OperateSystem = createG2((chart) => {
//   chart.legend({
//     position: 'bottom',
//     itemWrap: true, // 自动换行
//     spacingX: 20,
//   });

//   chart.coord('theta', {
//     radius: 1,
//     inner: 0.7,
//   });
//   chart.tooltip({
//     title: null,
//   });
//   chart.intervalStack()
//     .position(Stat.summary.percent('number'))
//     .color('name')
//     // .label('..percent')
//     .style({
//       lineWidth: 0,
//     });
//   chart.render();

//   // chart.on('plotclick', function(ev) {
//   //   console.log(ev.shape);
//   // });
// });

// export default OperateSystem;
