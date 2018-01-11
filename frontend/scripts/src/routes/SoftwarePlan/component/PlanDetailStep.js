import React from 'react';
import { Timeline, Card } from 'antd';
import './SoftwarePlan.css';

class PlanDetailStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      treeContent: [
        { type: '软件准备', color: '#8d263d', stageType: '软件出库', starTime: '2017-05-01', endTime: '2017-08-21', stageDescribe: '测试信息，测试信息，测试信息', hanlder: '张三，李四', remind: '是' },
        { type: '软件准备', color: '#39a1ed', stageType: '软件出库', starTime: '2017-05-01', endTime: '2017-08-21', stageDescribe: '测试信息，测试信息，测试信息', hanlder: '张三，李四', remind: '是' },
        { type: '软件准备', color: '#8d26d1', stageType: '软件出库', starTime: '2017-05-01', endTime: '2017-08-21', stageDescribe: '测试信息，测试信息，测试信息', hanlder: '张三，李四', remind: '是' },
        { type: '软件准备', color: '#faaa07', stageType: '软件出库', starTime: '2017-05-01', endTime: '2017-08-21', stageDescribe: '测试信息，测试信息，测试信息', hanlder: '张三，李四', remind: '是' },
        { type: '软件准备', color: '#39a1ed', stageType: '软件出库', starTime: '2017-05-01', endTime: '2017-08-21', stageDescribe: '测试信息，测试信息，测试信息', hanlder: '张三，李四', remind: '是' },
        { type: '软件准备', color: '#faaa07', stageType: '软件出库', starTime: '2017-05-01', endTime: '2017-08-21', stageDescribe: '测试信息，测试信息，测试信息', hanlder: '张三，李四', remind: '是' },
      ],
      show: 'Timetree',
    };
  }
  render() {
    const Tree = this.state.treeContent.map((item, index) => {
      return (
        <div style={{ width: '80%' }} >
          <div style={{ width: '80%', marginLeft: '25%' }} key={index}>
            <Timeline.Item color={item.color}>
              <div style={{ position: 'absolute', left: -180, zIndex: 2, float: 'right', fontSize: 16, fontWeight: 600 }}>
                <span>阶段名称：</span>
                <span>{item.type}</span>
              </div>
              <Card bodyStyle={{ padding: 12, backgroundColor: '#f2f2f2' }}>
                <div className="PlanDetailStep_items">阶段类型：{item.stageType}</div>
                <div className="PlanDetailStep_items">阶段开始时间：{item.starTime}</div>
                <div className="PlanDetailStep_items">阶段结束时间：{item.endTime}</div>
                <div className="PlanDetailStep_items">阶段描述：：{item.stageDescribe}</div>
                <div className="PlanDetailStep_items">处理人：{item.hanlder}</div>
                <div className="PlanDetailStep_items">是否提醒：{item.remind}</div>
              </Card>
            </Timeline.Item>
          </div>
        </div>
      );
    });
    return (
      <div className="PlanDetailStep_container">
        <div className="PlanDetailStep_title">
          计划步骤
        </div>
        {Tree}
      </div>
    );
  }
}
export default PlanDetailStep;
