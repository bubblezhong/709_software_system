import React, { PropTypes } from 'react';
import { Steps } from 'antd';

const Step = Steps.Step;

const App = props => (
  <Steps direction="vertical" current={props.currentStep}>
    <Step title="退役申请" description="代表室发起退役申请" />
    <Step title="退役审批" description="主管部门进行退役审批" />
    <Step title="退役完成" description="退役信息登记入库" />
  </Steps>
);

App.propTypes = {
  currentStep: PropTypes.number.isRequired,
};


export default App;
