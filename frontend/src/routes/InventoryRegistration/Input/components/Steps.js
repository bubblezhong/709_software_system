import React, { PropTypes } from 'react';
import { Steps } from 'antd';

const Step = Steps.Step;

const App = props => (
  <Steps direction="vertical" current={props.currentStep}>
    <Step title="入库申请" description="代表室发起入库申请" />
    <Step title="入库审批" description="主管部门进行入库审批" />
    <Step title="入库完成" description="信息入库" />
  </Steps>
);

App.propTypes = {
  currentStep: PropTypes.number.isRequired,
};


export default App;
