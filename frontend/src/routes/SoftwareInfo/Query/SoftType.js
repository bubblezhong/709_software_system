import React from 'react';
import createG2 from 'g2-react';
import G2 from 'g2';
import './Query.css';

const Chart = createG2((chart) => {
  const Stat = G2.Stat;
  // 重要：绘制饼图时，必须声明 theta 坐标系
  chart.coord('theta', {
    radius: 1, // 设置饼图的大小
  });
  chart.legend(false);
  chart.intervalStack()
    .position(Stat.summary.percent('value'))
    .color('name')
    .label('name*..percent', (name, percent) => {
      const percent1 = (percent * 100).toFixed(2);
      return name + percent1;
    }, {
      title: null,
      offset: -1,
    });
  chart.render();
  // 设置默认选中
  const geom = chart.getGeoms()[0]; // 获取所有的图形
  const items = geom.getData(); // 获取图形对应的数据
  geom.setSelected(items[1]); // 设置选中
});
class SoftType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: '其他软件', value: 56.33 },
        { name: '多用软件', value: 24.03 },
        { name: '船载软件', value: 10.38 },
        { name: '岸基软件', value: 4.77 },
        { name: '水下软件', value: 9.1 },
      ],
      forceFit: true,
      height: 350,
      plotCfg: {
        margin: [80, 30, 30, 10],
      },
    };
  }
  render() {
    return (
      <div className="softType">
        <h2>
          软件类型统计
        </h2>
        <div style={{ position: 'relative', top: 30 }}>
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
export default SoftType;
