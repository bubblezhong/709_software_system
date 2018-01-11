import React, { Component, PropTypes } from 'react';
import { Button, Col, message, Row, Steps } from 'antd';
import StepOne from './Showing/StepOne';
import StepTwo from './Showing/StepTwo';
// import StepThree from './Showing/StepThree';
import Data from './Data/RequestSteps';

const Step = Steps.Step;

class RequestSteps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepCurrent: 0,
      type: 1,
    };
  }

  render() {
    const { defaultValue, softwareList, moduleList } = this.props;
    const { stepCurrent, type } = this.state;
    return (
      <Row gutter={8}>
        <Col span="6">
          <Steps direction="vertical" current={stepCurrent}>
            <Step title="调配申请" description="使用部门或代表室提出调配申请" />
            <Step title="调配审批" description="主管部门对调配申请进行审批" />
          </Steps>
          <div style={{ margin: '10px 0' }}>
            {
              this.state.stepCurrent < 2
              &&
              <Button
                type="primary"
                onClick={() => this.setState({ stepCurrent: stepCurrent + 1 })}
              >下一项</Button>
            }
            {
              this.state.stepCurrent === 2
              &&
              <Button
                type="primary"
                onClick={() => message.success('完成加载!')}
              >完成</Button>
            }
            {
              this.state.stepCurrent > 0
              &&
              <Button
                style={{ marginLeft: 8 }}
                onClick={() => this.setState({ stepCurrent: stepCurrent - 1 })}
              >前一项</Button>
            }
          </div>
          <Button.Group>
            <Button
              type="primary"
              onClick={() => {
                this.setState({ type: 1 });
              }}
            >使用部门/代表室</Button>
            <Button
              type="primary"
              onClick={() => {
                this.setState({ type: 2 });
              }}
            >管理部门</Button>
          </Button.Group><br /><br />
          <span>当前角色：{ { 1: '使用部门/代表室', 2: '管理部门' }[type] }</span>
        </Col>
        <Col span="18">
          {stepCurrent === 0 &&
          <StepOne
            {...this.props}
            type={type}
            defaultValue={defaultValue}
            softwareList={softwareList}
            moduleList={moduleList}
          />
          }
          {stepCurrent === 1 &&
          <StepTwo
            {...this.props}
            type={type}
            step={2}
            defaultValue={defaultValue}
            softwareList={softwareList}
            moduleList={moduleList}
          />
          }
          {stepCurrent === 2 &&
          <StepTwo
            {...this.props}
            type={type}
            step={3}
            defaultValue={defaultValue}
            softwareList={softwareList}
            moduleList={moduleList}
          />
          }

        </Col>
      </Row>
    );
  }
}


RequestSteps.propTypes = {
  defaultValue: PropTypes.array,
  softwareList: PropTypes.array,
  moduleList: PropTypes.array,
};


const RequestStepsWithData = props =>
  (<Data {...props}><RequestSteps {...props} /></Data>);
export default RequestStepsWithData;
