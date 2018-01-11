import React, { PropTypes } from 'react';
import { Steps, Button, Modal } from 'antd';
import InputDetailFirst from './components/InputDetailFirst';
import InputDetailSecond from './components/InputDetailSecond';
import InputDetailThird from './components/InputDetailThird';
import InputDetailForth from './components/InputDetailForth';
import InputDetailFifth from './components/InputDetailFifth';
import OperationRecord from './components/OperationRecord';
import './Input.css';

const Step = Steps.Step;
class InputDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log('jshdfusi', this.props);
    this.state = {
      current: 0,
      operationRecord: false,
      pagesData: {},
      selectedStatus: 0,
      nextData: {},
    };
  }
  componentWillMount() {
    let data = {};
    if (this.props.route.path === 'InputNew') {
      data = {
        status: 0,
      };
    } else {
      data = {
        status: 1,
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
    const { current, selectedStatus } = this.state;
    const steps = [{
      title: '软件入库申请',
    }, {
      title: '入库审批',
    }, {
      title: '入库登记',
    }, {
      title: '入库登记验收',
    }, {
      title: '入库申请完成',
    }];
    return (
      <div style={{ position: 'relative' }}>
        <div className="InputDetail_stepsContent_btn" style={{ marginTop: 50 }}>
          <Button>保存</Button>
          <Button onClick={this.prev}>撤销</Button>
          { selectedStatus === 0 && <Button>打印</Button> }
          { selectedStatus === 4 && <Button>打印</Button> }
          <Button>另存为</Button>
          <Button onClick={() => { this.setState({ operationRecord: true }); }}>操作记录</Button>
        </div>
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
          { selectedStatus === 0 && <InputDetailFirst next={() => { this.next(); }} /> }
          { selectedStatus === 1 && <InputDetailSecond /> }
          { selectedStatus === 2 && <InputDetailThird /> }
          { selectedStatus === 3 && <InputDetailForth /> }
          { selectedStatus === 4 && <InputDetailFifth /> }
        </div>
        <OperationRecord
          visible={this.state.operationRecord}
          handleCancel={this.handleCancel}
        />
      </div>
    );
  }
}
InputDetail.propTypes = {
  route: PropTypes.object.isRequired,
};
InputDetail.contextTypes = {
  user: PropTypes.object,
};
export default InputDetail;
