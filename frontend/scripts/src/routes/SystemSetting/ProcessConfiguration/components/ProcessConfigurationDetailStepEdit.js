import React from 'react';
import { Modal, Timeline } from 'antd';
// import './SoftwarePlan.css';
import ProcessConfigurationDetailStepEditCard from './ProcessConfigurationDetailStepEditCard';
// import PlanDetailStepEditCardEditState from './PlanDetailStepEditCardEditState';


class ProcessConfigurationDetailStepEdit extends React.Component {
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
        <ProcessConfigurationDetailStepEditCard
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
          步骤管理
        </div>
        <Timeline pending={<a onClick={this.addStep}>点击添加</a>} style={{ marginLeft: '30%' }}>
          {Tree}
        </Timeline>
      </div>
    );
  }
}
export default ProcessConfigurationDetailStepEdit;
