import React from 'react';
import { Timeline, Card } from 'antd';
// import './SoftwarePlan.css';

class ProcessConfigurationDetailStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      treeContent: [
        { type: '软件准备', color: '#8d263d', stepType: '软件出库', stepForm: '2017-05-01', role: '登记员c类', unitType: '代表室', hanlder: '张三，李四', multiHandle: '是' },
        { type: '软件准备', color: '#39a1ed', stepType: '软件出库', stepForm: '2017-05-01', role: '登记员c类', unitType: '代表室', hanlder: '张三，李四', multiHandle: '是' },
        { type: '软件准备', color: '#8d26d1', stepType: '软件出库', stepForm: '2017-05-01', role: '登记员c类', unitType: '代表室', hanlder: '张三，李四', multiHandle: '是' },
        { type: '软件准备', color: '#faaa07', stepType: '软件出库', stepForm: '2017-05-01', role: '登记员c类', unitType: '代表室', hanlder: '张三，李四', multiHandle: '是' },
        { type: '软件准备', color: '#39a1ed', stepType: '软件出库', stepForm: '2017-05-01', role: '登记员c类', unitType: '代表室', hanlder: '张三，李四', multiHandle: '是' },
        { type: '软件准备', color: '#faaa07', stepType: '软件出库', stepForm: '2017-05-01', role: '登记员c类', unitType: '代表室', hanlder: '张三，李四', multiHandle: '是' },
      ],
      show: 'Timetree',
    };
  }
  render() {
    const Tree = this.state.treeContent.map((item, index) => {
      return (
        <div style={{ width: '80%' }} key={index}>
          <div style={{ width: '80%', marginLeft: '25%' }}>
            <Timeline.Item color={item.color}>
              <div style={{ position: 'absolute', left: -180, zIndex: 2, float: 'right', fontSize: 16, fontWeight: 600 }}>
                <span>流程名称：</span>
                <span>{item.type}</span>
              </div>
              <Card bodyStyle={{ padding: 12, backgroundColor: '#f2f2f2' }}>
                <div className="PlanDetailStep_items">步骤类型：{item.stepType}</div>
                <div className="PlanDetailStep_items">步骤表单：{item.stepForm}</div>
                <div className="PlanDetailStep_items">角色：{item.role}</div>
                <div className="PlanDetailStep_items">单位类型：：{item.unitType}</div>
                <div className="PlanDetailStep_items">下一步处理人：{item.hanlder}</div>
                <div className="PlanDetailStep_items">多人处理：{item.multiHandle}</div>
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
export default ProcessConfigurationDetailStep;
