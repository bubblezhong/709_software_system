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
    .label('name*..percent', function (name, percent) {
      percent = (percent * 100).toFixed(2) + '%';
      return name + ' ' + percent;
    });
  chart.render();
  // 设置默认选中
  var geom = chart.getGeoms()[0]; // 获取所有的图形
  var items = geom.getData(); // 获取图形对应的数据
  geom.setSelected(items[1]); // 设置选中
});
class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: '已延期', value: 56 },
        { name: '未延期', value: 24 },
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
          forceFit={this.state.forceFit} />
      </div>
    );
  }
}
export default MyComponent;
// class TaskStatisics extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       data: [],
//     }
//   }
//   componentWillMount(){
//     this.getData();
//   }
//   getData(){
//     this.setState({
//       data:[{
//         unit: 20,
//         delay: 40,
//         accept: 52,
//         developUnit: '单位1,单位2'
//       }]
//     });
//   }
//   render(){
//     const columns = [{
//       title: '已安装单位比例(%)',
//       dataIndex: 'unit'
//     },{
//       title: '延期比例(%)',
//       dataIndex: 'delay'
//     },{
//       title: '验收情况统计(%)',
//       dataIndex: 'accept'
//     },{
//       title: '研制单位统计',
//       dataIndex: 'developUnit'
//     }];
//     return (
//       <Table
//         dataSource={this.state.data}
//         columns={columns}
//         pagination={false}
//         bordered={true} />
//       )
//   }
// }
