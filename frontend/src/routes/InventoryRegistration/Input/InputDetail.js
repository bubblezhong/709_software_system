import React, { PropTypes } from 'react';
import { Steps, Button } from 'antd';
import { browserHistory } from 'react-router';
import InputDetailFirst from './components/InputDetailFirst';
import InputDetailSecond from './components/InputDetailSecond';
import InputDetailThird from './components/InputDetailThird';
import InputDetailForth from './components/InputDetailForth';
import InputDetailFifth from './components/InputDetailFifth';
import OperationRecord from './components/OperationRecord';
import GetDetailInfo from './../../utils/GetDetailInfo';
import './Input.css';

const Step = Steps.Step;
class InputDetail extends React.Component {
  constructor(props) {
    super(props);
    let id;
    if (this.props.params.id) {
      id = this.props.params.id;
    }
    this.state = {
      id,
      current: 0,
      operationRecord: false,
      undoTask: false,
      flag: false,
      pagesData: {},
      processData: {},
    };
  }
  componentWillMount() {
    let data = {};
    if (this.props.route.path === 'InputNew') {
      this.setState({ undoTask: true });
      data = {
        status: 1,
      };
      this.setState({ pagesData: data, current: data.status });
    } else if (this.props.routeParams.type === 'check') {
      this.props.sendInfo(this.state.id, (res) => { this.handleShowData(res); });
    } else {
      this.props.sendInfo(this.state.id, (res) => { this.handleSubmitData(res); });
      // this.setState({ undoTask: true, pagesData: data, current: data.status });
    }
  }
  handleShowData = (res) => {
    console.log('res1111', res);
    let dataStatus = {};
    switch (res.data.processStatus) {
      case '已结束':
        switch (res.data.currentName) {
          case '2':
            dataStatus = { status: 1 };
            break;
          case '3':
            dataStatus = { status: 2 };
            break;
          case '4':
            dataStatus = { status: 3 };
            break;
          default:
            dataStatus = { status: 5 };
        }
        break;
      case '入库验收':
        dataStatus = { status: 3 };
        break;
      case '入库登记':
        dataStatus = { status: 2 };
        break;
      case '入库审批':
        dataStatus = { status: 1 };
        break;
      default:
        dataStatus = { status: 0 };
    }
    console.log('data', dataStatus);
    this.setState({ pagesData: dataStatus, current: dataStatus.status, processData: res.data });
  }
  handleSubmitData = (res) => {
    console.log('res', res);
    let dataStatus = {};
    switch (res.data.processStatus) {
      case '入库验收':
        dataStatus = { status: 4 };
        break;
      case '入库登记':
        dataStatus = { status: 3 };
        break;
      case '入库审批':
        dataStatus = { status: 2 };
        break;
      default:
        dataStatus = { status: 1 };
    }
    this.setState({
      pagesData: dataStatus,
      current: dataStatus.status,
      processData: res.data,
      undoTask: true,
    });
  }
  next = () => {
    console.log('1111111');
    // const tempCurrent = this.state.current + 1;
    // this.setState({ current: tempCurrent });
    // if (this.state.id) {
    this.props.sendInfo(this.state.id, (res) => { this.handleShowData(res); });
    // }
    this.setState({ undoTask: false });
  }
  InitialNext = (id) => {
    console.log('id', id);
    this.props.sendInfo(id, (res) => { this.handleShowData(res); });
    this.setState({ undoTask: false });
  }
  prev = () => {
    const tempCurrent = this.state.current - 1;
    // const tempselectedStatus = this.state.selectedStatus - 1;
    this.setState({ current: tempCurrent });
  }
  handleCancel = () => {
    this.setState({ operationRecord: false });
  }
  render() {
    const { current, undoTask, pagesData, flag } = this.state;
    console.log('undoTask', undoTask, flag, current);
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
          <Button onClick={() => { browserHistory.push('/main/InventoryRegistration/Input'); }}>返回</Button>
          <Button>打印</Button>
          <Button>另存为</Button>
          <Button onClick={() => { this.setState({ operationRecord: true }); }}>操作记录</Button>
        </div>
        {undoTask ?
          <div>
            <Steps style={{ width: '60%', marginLeft: '20%', height: 60 }}>
              {
                steps.map((item, index) => {
                  let status = 'finish';
                  if (index > current - 1) {
                    status = 'wait';
                  } else if (index === current - 1) {
                    status = 'process';
                  }
                  return (
                    <Step className="InputDetail_step" key={item.title} title={item.title} status={status} />
                  );
                })
              }
            </Steps>
            { current === 1 &&
              <InputDetailFirst
                disable={flag}
                InitialNext={this.InitialNext}
                processData={this.state.processData}
                {...this.props}
              /> }
            { current === 2 &&
              <InputDetailSecond
                disable={flag}
                next={() => { this.next(); }}
                processData={this.state.processData}
                {...this.props}
              />
            }
            { current === 3 &&
              <InputDetailThird
                disable={flag}
                next={() => { this.next(); }}
                processData={this.state.processData}
                {...this.props}
              />
            }
            { current === 4 &&
              <InputDetailForth
                disable={flag}
                next={() => { this.next(); }}
                processData={this.state.processData}
                {...this.props}
              />
            }
            { current === 5 &&
              <InputDetailFifth
                disable={flag}
                next={() => { this.next(); }}
                processData={this.state.processData}
                {...this.props}
              />
            }
          </div> :
            <div>
              <Steps style={{ width: '60%', marginLeft: '20%', height: 60 }}>
                {
                  steps.map((item, index) => {
                    let status = 'finish';
                    if (index > current - 1) {
                      status = 'wait';
                    }
                    return (
                      <Step className="InputDetail_step" key={item.title} title={item.title} status={status} />
                    );
                  })
                }
              </Steps>
              { current === 1 &&
                <InputDetailFirst
                  InitialNext={this.InitialNext}
                  processData={this.state.processData}
                  disable={pagesData.status > 0}
                />
              }
              { current === 2 &&
                <InputDetailSecond
                  next={() => { this.next(); }}
                  disable={pagesData.status > 0}
                  processData={this.state.processData}
                  {...this.props}
                />
              }
              { current === 3 &&
                <InputDetailThird
                  next={() => { this.next(); }}
                  disable={pagesData.status > 1}
                  processData={this.state.processData}
                  {...this.props}
                />
              }
              { current === 4 &&
                <InputDetailForth
                  next={() => { this.next(); }}
                  disable={pagesData.status > 2}
                  processData={this.state.processData}
                  {...this.props}
                />
              }
              { current === 5 &&
                <InputDetailFifth
                  next={() => { this.next(); }}
                  disable={pagesData.status > 3}
                  processData={this.state.processData}
                  {...this.props}
                />
              }
            </div>
        }
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
  routeParams: PropTypes.object.isRequired,
  sendInfo: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
};
InputDetail.contextTypes = {
  user: PropTypes.object,
};
const WrapInputDetail = GetDetailInfo('/api/software-in/history/')(InputDetail);
export default WrapInputDetail;
