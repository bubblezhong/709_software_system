import React, { PropTypes } from 'react';
import { Steps, Button, Modal } from 'antd';
import OutputDetailFirst from './components/OutputDetailFirst';
import OutputDetailSecond from './components/OutputDetailSecond';
import OutputDetailThird from './components/OutputDetailThird';
import OutputDetailForth from './components/OutputDetailForth';
import OutputDetailFifth from './components/OutputDetailFifth';
import OutputDetailSixth from './components/OutputDetailSixth';
import OutputDetailSeventh from './components/OutputDetailSeventh';
import OutputDetailEighth from './components/OutputDetailEighth';
import OutputDetailOperationRecord from './components/OutputDetailOperationRecord';
import './Output.css';

const Step = Steps.Step;
class OutputDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 6,
      showInfoRegister: false,
      data: {},
      selectedStatus: 6,
      operationRecord: false,
    };
  }
  componentWillMount() {
    let data = {};
    if (this.props.route.path === 'OutputNew') {
      data = {
        status: 0,
      };
    } else {
      data = {
        status: 3,
      };
    }
    this.setState({ pagesData: data, current: data.status, selectedStatus: data.status });
  }
  changeShowInfoRegister = (type) => {
    if (type === 'ok') {
      this.setState({ showInfoRegister: false, current: 6, selectedStatus: 6 });
    } else {
      this.setState({ showInfoRegister: false });
    }
  }
  handleCancel = () => {
    this.setState({ operationRecord: false });
  }
  prev = () => {
    const tempCurrent = this.state.current - 1;
    const tempselectedStatus = this.state.selectedStatus - 1;
    this.setState({ current: tempCurrent, selectedStatus: tempselectedStatus });
  }
  next = () => {
    if (this.state.selectedStatus === this.state.current) {
      if (this.state.current === 5 && this.state.selectedStatus === 5) {
        this.setState({ showInfoRegister: true });
      } else {
        const tempCurrent = this.state.current + 1;
        const tempselectedStatus = this.state.selectedStatus + 1;
        this.setState({ current: tempCurrent, selectedStatus: tempselectedStatus });
      }
    } else {
      Modal.error({
        title: '提交失败',
        content: '请勿重复提交',
      });
    }
  }
  changeSteps = (index) => {
    if (index <= this.state.current) {
      this.setState({ selectedStatus: index });
    }
  }
  render() {
    const { current, pagesData, selectedStatus } = this.state;
    const steps = [{
      title: '出库申请',
    }, {
      title: '出库审批',
    }, {
      title: '出库登记',
    }, {
      title: '协调安装',
    }, {
      title: '交付验收',
    }, {
      title: '信息登记',
    }, {
      title: '信息接收',
    }, {
      title: '出库申请完成',
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
            <Button onClick={this.next} style={{ display: current === 7 ? 'none' : 'block' }}>提交</Button>
            <Button onClick={this.prev}>撤销</Button>
            <Button>打印</Button>
            <Button>另存为</Button>
            <Button onClick={() => { this.setState({ operationRecord: true }); }}>操作记录</Button>
          </div>
          <div>
            { selectedStatus === 0 &&
              <OutputDetailFirst disable={pagesData.status > 0} /> }
            { selectedStatus === 1 &&
              <OutputDetailSecond disable={pagesData.status > 1} /> }
            { selectedStatus === 2 &&
              <OutputDetailThird disable={pagesData.status > 2} /> }
            { selectedStatus === 3 &&
              <OutputDetailForth disable={pagesData.status > 3} /> }
            { selectedStatus === 4 &&
              <OutputDetailFifth disable={pagesData.status > 4} /> }
            { selectedStatus === 5 &&
              <OutputDetailSixth
                showInfoRegister={this.state.showInfoRegister}
                changeShowInfoRegister={this.changeShowInfoRegister}
                disable={pagesData.status > 5}
              />
            }
            { selectedStatus === 6 &&
              <OutputDetailSeventh disable={pagesData.status > 6} /> }
            { selectedStatus === 7 &&
              <OutputDetailEighth disable={pagesData.status > 7} /> }
          </div>
          <OutputDetailOperationRecord
            visible={this.state.operationRecord}
            handleCancel={this.handleCancel}
          />
        </div>
      </div>
    );
  }
}
OutputDetail.propTypes = {
  route: PropTypes.object.isRequired,
};
export default OutputDetail;
