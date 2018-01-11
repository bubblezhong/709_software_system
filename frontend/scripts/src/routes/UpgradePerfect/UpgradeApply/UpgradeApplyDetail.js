import React, { PropTypes } from 'react';
import { Steps, Button } from 'antd';
import UpgradeApplyDetailFirst from './components/UpgradeApplyDetailFirst';
import UpgradeApplyDetailSecond from './components/UpgradeApplyDetailSecond';
import UpgradeApplyDetailThird from './components/UpgradeApplyDetailThird';
import UpgradeApplyOperationRecord from './components/UpgradeApplyOperationRecord';

const Step = Steps.Step;
class UpgradeApplyDetail extends React.Component {
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
    if (this.props.route.path === 'UpgradeApplyNew') {
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
  handleCancel = () => {
    this.setState({ operationRecord: false });
  }
  changeSteps = (index) => {
    if (index <= this.state.pagesData.status) {
      this.setState({ selectedStatus: index });
    }
  }
  render() {
    const { current, pagesData, selectedStatus } = this.state;
    const steps = [{
      title: '升级完善申请',
    }, {
      title: '申请审批',
    }, {
      title: '申请完成',
    }];
    return (
      <div style={{ position: 'relative' }}>
        <Steps current={current} style={{ width: '60%', marginLeft: '20%', height: 60 }}>
          {
            steps.map((item, index) => {
              let status = 'finish';
              if (index > current) {
                status = 'wait';
              } else if (index === selectedStatus) {
                status = 'process';
              }
              if (current === index) {
                status = 'process';
              }
              return (
                <Step className="InputDetail_step" key={item.title} title={item.title} status={status} onClick={() => this.changeSteps(index)} />
              );
            })
          }
        </Steps>
        <div>
          <div className="InputDetail_stepsContent_btn">
            <Button>刷新</Button>
            <Button>保存</Button>
            <Button onClick={this.next} style={{ display: current === 2 ? 'none' : 'block' }}>提交</Button>
            <Button>打印</Button>
            <Button>另存为</Button>
            <Button onClick={() => { this.setState({ operationRecord: true }); }}>操作记录</Button>
          </div>
          { selectedStatus === 0 &&
            <UpgradeApplyDetailFirst disable={pagesData.status > 0} /> }
          { selectedStatus === 1 &&
            <UpgradeApplyDetailSecond disable={pagesData.status > 1} /> }
          { selectedStatus === 2 &&
            <UpgradeApplyDetailThird disable={pagesData.status > 2} /> }
        </div>
        <UpgradeApplyOperationRecord
          visible={this.state.operationRecord}
          handleCancel={this.handleCancel}
        />
      </div>
    );
  }
}
UpgradeApplyDetail.propTypes = {
  route: PropTypes.object.isRequired,
};
export default UpgradeApplyDetail;
