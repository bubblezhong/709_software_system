import React from 'react';
import { Modal, Timeline } from 'antd';
import './SoftwarePlan.css';
import PlanDetailStepEditCard from './PlanDetailStepEditCard';
// import PlanDetailStepEditCardEditState from './PlanDetailStepEditCardEditState';


class PlanDetailStepEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      treeContent: [
        { type: '软件准备1', color: '#8d263d', stageType: '软件出库', starTime: '2017-05-01', endTime: '2017-08-21', stageDescribe: '测试信息，测试信息，测试信息', hanlder: '张三，李四', remind: '是' },
        { type: '软件准备2', color: '#39a1ed', stageType: '软件出库', starTime: '2017-05-01', endTime: '2017-08-21', stageDescribe: '测试信息，测试信息，测试信息', hanlder: '张三，李四', remind: '是' },
        { type: '软件准备3', color: '#8d26d1', stageType: '软件出库', starTime: '2017-05-01', endTime: '2017-08-21', stageDescribe: '测试信息，测试信息，测试信息', hanlder: '张三，李四', remind: '是' },
        { type: '软件准备4', color: '#faaa07', stageType: '软件出库', starTime: '2017-05-01', endTime: '2017-08-21', stageDescribe: '测试信息，测试信息，测试信息', hanlder: '张三，李四', remind: '是' },
        { type: '软件准备5', color: '#39a1ed', stageType: '软件出库', starTime: '2017-05-01', endTime: '2017-08-21', stageDescribe: '测试信息，测试信息，测试信息', hanlder: '张三，李四', remind: '是' },
        { type: '软件准备6', color: '#faaa07', stageType: '软件出库', starTime: '2017-05-01', endTime: '2017-08-21', stageDescribe: '测试信息，测试信息，测试信息', hanlder: '张三，李四', remind: '是' },
        {},
      ],
      show: 'Timetree',
      cardEditState: false,
      editCardId: 0,
    };
  }
  warning = () => {
    Modal.warning({
      title: 'This is a warning message',
      content: '此元素不能移动',
    });
  }
  addStep = () => {
    const tempArr = this.state.treeContent.slice();
    tempArr.push({});
    this.setState({ treeContent: tempArr });
  }
  edit = (index) => {
    this.setState({ cardEditState: true, editCardId: index });
  }
  delete = (index) => {
    const tempArr = this.state.treeContent.slice();
    tempArr.splice(index, 1);
    this.setState({ treeContent: tempArr });
  }
  moveUp = (index) => {
    if (index === 0) {
      this.warning();
      return;
    }
    const tempArr = this.state.treeContent.slice();
    const container = tempArr[index - 1];
    tempArr[index - 1] = tempArr[index];
    tempArr[index] = container;
    this.setState({ treeContent: tempArr });
  }
  moveDown = (index) => {
    if (index === this.state.treeContent.length - 1) {
      this.warning();
      return;
    }
    const tempArr = this.state.treeContent.slice();
    const container = tempArr[index + 1];
    tempArr[index + 1] = tempArr[index];
    tempArr[index] = container;
    this.setState({ treeContent: tempArr });
  }
  render() {
    const Tree = this.state.treeContent.map((item, index) => {
      return (
        <PlanDetailStepEditCard
          data={item}
          key={index}
          index={index}
          moveUp={() => this.moveUp(index)}
          moveDown={() => this.moveDown(index)}
          delete={() => this.delete(index)}
          edit={() => this.edit(index)}
        />
      );
    });
    return (
      <div className="PlanDetailStep_container">
        <div className="PlanDetailStep_title">
          计划步骤
        </div>
        <Timeline pending={<a onClick={this.addStep}>点击添加</a>} style={{ marginLeft: '30%' }}>
          {Tree}
        </Timeline>
      </div>
    );
  }
}
export default PlanDetailStepEdit;
