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
    console.log('this.props', this.props);
    this.state = {
      current: 3,
      operationRecord: false,
      pagesData: {},
      undoTask: false,
      flag: false,
    };
  }
  componentWillMount() {
    let data = {};
    if (this.props.route.path === 'RetireNew') {
      this.setState({ undoTask: true });
      data = {
        status: 1,
      };
    } else if (this.props.routeParams.type === 'check') {
      data = {
        status: 2,
      };
    } else {
      this.setState({ undoTask: true });
      data = {
        status: 2,
      };
    }
    this.setState({ pagesData: data, current: data.status });
  }
  next = () => {
    this.setState({ flag: true, undoTask: false });
    Modal.success({
      title: '提交结果',
      content: '提交成功',
    });
  }
  prev = () => {
    const tempCurrent = this.state.current - 1;
    this.setState({ current: tempCurrent });
  }
  handleCancel = () => {
    this.setState({ operationRecord: false });
  }
  render() {
    const { current, pagesData, undoTask, flag } = this.state;
    console.log('undoTask', undoTask, current);
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
        <div className="RetireDetail_stepsContent_btn">
          <Button>刷新</Button>
          <Button>保存</Button>
          <Button onClick={this.next} style={{ display: current === 4 ? 'none' : 'block' }}>提交</Button>
          <Button onClick={this.prev}>撤销</Button>
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
            { current === 1 && <RetireDetailFirst disable={flag} /> }
            { current === 2 && <RetireDetailSecond disable={flag} /> }
            { current === 3 && <RetireDetailThird disable={flag} /> }
            { current === 4 && <RetireDetailForth disable={flag} /> }
            { current === 5 && <RetireDetailFifth disable={flag} /> }
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
              { current === 1 && <RetireDetailFirst disable={pagesData.status > 0} /> }
              { current === 2 && <RetireDetailSecond disable={pagesData.status > 1} /> }
              { current === 3 && <RetireDetailThird disable={pagesData.status > 2} /> }
              { current === 4 && <RetireDetailForth disable={pagesData.status > 3} /> }
              { current === 5 && <RetireDetailFifth disable={pagesData.status > 4} /> }
            </div>
        }
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
  // routes: PropTypes.array.isRequired,
  routeParams: PropTypes.object.isRequired,
};
export default RetireDetail;
