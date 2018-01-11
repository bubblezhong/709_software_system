import React, { PropTypes } from 'react';
import { Steps, Button, Modal } from 'antd';
import RetireDetailFirst from './components/RetireDetailFirst';
import RetireDetailSecond from './components/RetireDetailSecond';
import RetireDetailThird from './components/RetireDetailThird';
import RetireDetailForth from './components/RetireDetailForth';
import RetireDetailFifth from './components/RetireDetailFifth';
import RetireOperationRecord from './components/RetireOperationRecord';
import './Retire.css';

const Step = Steps.Step;
class RetireDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 3,
      operationRecord: false,
      pagesData: {},
      selectedStatus: 0,
    };
  }
  componentWillMount() {
    let data = {};
    if (this.props.route.path === 'RetireNew') {
      data = {
        status: 2,
      };
    } else {
      data = {
        status: 2,
      };
    }
    this.setState({ pagesData: data, current: data.status, selectedStatus: data.status });
  }
  next = () => {
    if (this.state.selectedStatus === this.state.current) {
      const tempCurrent = this.state.current + 1;
      const tempselectedStatus = this.state.selectedStatus + 1;
      this.setState({ current: tempCurrent, selectedStatus: tempselectedStatus });
    } else {
      Modal.error({
        title: '提交失败',
        content: '请勿重复提交',
      });
    }
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
      title: '软件退役申请',
    }, {
      title: '退役审批',
    }, {
      title: '退役登记',
    }, {
      title: '退役登记验收',
    }, {
      title: '退役申请完成',
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
                <Step className="InputDetail_step" key={item.title} title={item.title} status={status} />
              );
            })
          }
        </Steps>
        <div>
          <div className="RetireDetail_stepsContent_btn">
            <Button>刷新</Button>
            <Button>保存</Button>
            <Button onClick={this.next} style={{ display: current === 4 ? 'none' : 'block' }}>提交</Button>
            <Button onClick={this.prev}>撤销</Button>
            <Button>打印</Button>
            <Button>另存为</Button>
            <Button onClick={() => { this.setState({ operationRecord: true }); }}>操作记录</Button>
          </div>
        </div>
        { selectedStatus === 0 && <RetireDetailFirst disable={pagesData.status > 0} /> }
        { selectedStatus === 1 && <RetireDetailSecond disable={pagesData.status > 1} /> }
        { selectedStatus === 2 && <RetireDetailThird disable={pagesData.status > 2} /> }
        { selectedStatus === 3 && <RetireDetailForth disable={pagesData.status > 3} /> }
        { selectedStatus === 4 && <RetireDetailFifth disable={pagesData.status > 4} /> }
        <RetireOperationRecord
          visible={this.state.operationRecord}
          handleCancel={this.handleCancel}
        />
      </div>
    );
  }
}
RetireDetail.propTypes = {
  route: PropTypes.object.isRequired,
};
export default RetireDetail;
 componentWillMount() {
    let data = {};
    if (this.props.route.path === 'RetireNew') {
      data = {
        status: 2,
      };
    } else {
      if (this.props.routes[1].path === 'undoTask') {
        this.setState({ unDotask: true });
        data = {
          status: 1,
        };
      } else {
        data = {
          status: 1,
        };
      }
    }
    this.setState({ pagesData: data, current: data.status });
  }