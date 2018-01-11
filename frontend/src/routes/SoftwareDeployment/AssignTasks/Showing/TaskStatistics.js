/* eslint-disable */
import React from 'react'
import { Row, Col, Card } from 'antd'
import createG2 from 'g2-react';
import { Stat } from 'g2';

// import { Table } from 'antd'
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
class Deploy extends React.Component{
  constructor (){
    super();
    this.state = {
        data: [
          {name: '已延期', value: 56 },
          {name: '未延期', value: 24 },
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

class Accept extends React.Component{
  constructor (){
    super();
    this.state = {
        data: [
          {name: '已验收', value: 56 },
          {name: '未验收', value: 24 },
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
class InstallUnit extends React.Component{
  constructor (){
    super();
    this.state = {
        data: [
          {name: '已安装单位', value: 56 },
          {name: '未安装单位', value: 24 },
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
class DevelopUnit extends React.Component{
  constructor (){
    super();
    this.state = {
        data: [
          {name: '研制单位1', value: 56 },
          {name: '研制单位2', value: 24 },
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

const TaskStatisics = (props) => (
  <Row>
    <Col span={12}><Card><h3>延期统计</h3><Deploy/></Card></Col>
    <Col span={12}><Card><h3>验收统计</h3><Accept/></Card></Col>
    <Col span={12}><Card><h3>安装单位统计</h3><InstallUnit/></Card></Col>
    <Col span={12}><Card><h3>研制单位统计</h3><DevelopUnit/></Card></Col>
  </Row>
)
export default TaskStatisics
