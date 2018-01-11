import React, { PropTypes } from 'react';
import { Steps, Button, Icon } from 'antd';
import DeploymentSchemeDetailFirst from './components/DeploymentSchemeDetailFirst';
import DeploymentSchemeDetailSecond from './components/DeploymentSchemeDetailSecond';
import DeploymentSchemeDetailThird from './components/DeploymentSchemeDetailThird';
import DeploymentSchemeOperationRecord from './components/DeploymentSchemeOperationRecord';
import './DeploymentScheme.css';

const Step = Steps.Step;
class DeploymentSchemeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      operationRecord: false,
      pagesData: {},
      selectedStatus: 0,
    };
  }
  componentWillMount() {
    let data = {};
    if (this.props.route.path === 'DeploymentSchemeNew') {
      data = {
        status: 0,
      };
    } else {
      data = {
        status: 2,
      };
    }
    this.setState({ pagesData: data, current: data.status, selectedStatus: data.status });
  }
  next = () => {
    const tempCurrent = this.state.current + 1;
    const tempselectedStatus = this.state.selectedStatus + 1;
    this.setState({ current: tempCurrent, selectedStatus: tempselectedStatus });
  }
  prev = () => {
    const tempCurrent = this.state.current - 1;
    const tempselectedStatus = this.state.selectedStatus - 1;
    this.setState({ current: tempCurrent, selectedStatus: tempselectedStatus });
  }
  handleCancel = () => {
    this.setState({ operationRecord: false });
  }
  changeSteps = (index) => {
    if (index <= this.state.current) {
      this.setState({ selectedStatus: index });
    }
  }
  render() {
    const { current, pagesData, selectedStatus } = this.state;
    const steps = [{
      title: '软件调配方案',
    }, {
      title: '软件调配任务',
    }, {
      title: '调配任务统计',
    }];
    return (
      <div style={{ position: 'relative' }}>
        <Steps current={current} style={{ width: '60%', marginLeft: '20%', height: 60 }}>
          {
            steps.map((item, index) => {
              let status = 'finish';
              let flag = false;
              let addIcon;
              if (index > current) {
                status = 'wait';
              } else if (index === selectedStatus) {
                flag = true;
                status = 'error';
              }
              if (index === current) {
                flag = false;
                status = 'process';
              }
              if (flag) {
                addIcon = <Icon type="bulb" />;
              }
              return (
                <Step icon={addIcon} className="InputDetail_step" key={item.title} title={item.title} status={status} onClick={() => this.changeSteps(index)} />
              );
            })
          }
        </Steps>
        <div>
          <div className="InputDetail_stepsContent_btn">
            <Button>刷新</Button>
            <Button>保存</Button>
            <Button onClick={this.next} style={{ display: current === 2 ? 'none' : 'block' }}>提交</Button>
            <Button onClick={this.prev}>撤销</Button>
            <Button>打印</Button>
            <Button>另存为</Button>
            <Button onClick={() => { this.setState({ operationRecord: true }); }}>操作记录</Button>
          </div>
          { selectedStatus === 0 &&
            <DeploymentSchemeDetailFirst disable={pagesData.status > 0} /> }
          { selectedStatus === 1 &&
            <DeploymentSchemeDetailSecond disable={pagesData.status > 1} /> }
          { selectedStatus === 2 &&
            <DeploymentSchemeDetailThird disable={pagesData.status > 2} /> }
        </div>
        <DeploymentSchemeOperationRecord
          visible={this.state.operationRecord}
          handleCancel={this.handleCancel}
        />
      </div>
    );
  }
}
DeploymentSchemeDetail.propTypes = {
  route: PropTypes.object.isRequired,
};
export default DeploymentSchemeDetail;
