import React, { PropTypes } from 'react';
import { Button, Col, message, Row, Steps } from 'antd';
import StepOne from './Showing/StepOne';
import StepTwo from './Showing/StepTwo';
import Data from './Data/RequestSteps';

const Step = Steps.Step;
class RequestSteps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepCurrent: 0,
      type: 1,
    };
  }

  render() {
    const { submmitRequest, data } = this.props;
    const { stepCurrent, type } = this.state;

    return (
      <Row gutter={8}>
        <Col span="6">
          <Steps direction="vertical" current={stepCurrent}>
            <Step title="保障申请" description="使用部门或代表室提出保障申请" />
            <Step title="保障审批" description="主管部门对保障申请进行审批" />
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
            >
              使用部门/代表室
            </Button>
            <Button
              type="primary"
              onClick={() => {
                this.setState({ type: 2 });
              }}
            >
              管理部门
            </Button>
          </Button.Group><br /><br />
          <span>当前角色：{ { 1: '使用部门/代表室', 2: '管理部门' }[type] }</span>
        </Col>
        <Col span="18">
          {stepCurrent === 0 &&
          <StepOne
            type={type}
            submmitRequest={submmitRequest}
            defaultValue={data}
          />
          }
          {stepCurrent > 0 &&
          <StepTwo
            type={type}
            defaultValue={data}
            step={stepCurrent}
          />
          }
        </Col>
      </Row>
    );
  }
}


RequestSteps.propTypes = {
  data: PropTypes.object,
  submmitRequest: PropTypes.func,
};

const StepsData = props => (<Data {...props}><RequestSteps {...props} /></Data>);
export default StepsData;
