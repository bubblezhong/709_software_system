/* eslint-disable */
import React from 'react';
import createG2 from 'g2-react';
import { Stat } from 'g2';

const Chart = createG2(chart => {
  chart.coord('theta', {
    radius: 0.8 // 设置饼图的大小
  });
  chart.legend('name', false);
  chart.intervalStack()
    .position(Stat.summary.percent('value'))
    .color('name')
    .label('name*..percent',function(name, percent){
      percent = (percent * 100).toFixed(2) + '%';
      return name + ' ' + percent;
    });
  chart.render();
  // 设置默认选中
  var geom = chart.getGeoms()[0]; // 获取所有的图形
  var items = geom.getData(); // 获取图形对应的数据
  geom.setSelected(items[1]); // 设置选中
});
class MyComponent extends React.Component{
  constructor (){
    super();
    this.state = {
        data: [
          {name: '使用单位', value: 56 },
          {name: '未使用单位', value: 24 },
        ],
        forceFit: true,
        width: 500,
        height: 450
    }
  }
  render() {
    return (
      <div>
        <Chart
          data={this.state.data}
          width={this.state.width}
          height={this.state.height}
          forceFit={this.state.forceFit} />
  </div>
    );
  }
}
export default MyComponent;
