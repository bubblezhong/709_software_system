import React, { PropTypes } from 'react';
import { Icon } from 'antd';
import InputDetailFirstRead from './InputDetailFirstRead';
import InputDetailSecondRead from './InputDetailSecondRead';
import InputDetailThirdRead from './InputDetailThirdRead';

class InputHistoryButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInputFirst: false,
      showInputSecond: false,
      showInputThird: false,
      showInputForth: false,
    };
  }
  changeshow = () => {
    console.log('changeshow1');
    this.setState({ showInputFirst: false });
    this.setState({ showInputSecond: false });
    this.setState({ showInputThird: false });
    // if (type === 'showInputSecond') this.setState({ showInputSecond: true });
    // if (type === 'showInputThird') this.setState({ showInputThird: true });
  }
  render() {
    const { step } = this.props;
    return (
      <div>
        { step > 1 &&
          <div style={{ position: 'relative', width: 100, textAlign: 'center', marginTop: 20, display: 'inline-block' }} onClick={() => { this.setState({ showInputFirst: true }); }}>
            <Icon type="check-circle-o" style={{ fontSize: 30, color: '#108ee9', display: 'inline-block' }} />
            <span style={{ position: 'absolute', left: 10, top: 35 }}>软件入库申请单</span>
          </div>
        }
        {
          step > 2 &&
          <div style={{ position: 'relative', width: 80, textAlign: 'center', marginTop: 20, display: 'inline-block' }} onClick={() => { this.setState({ showInputSecond: true }); }}>
            <Icon type="check-circle-o" style={{ fontSize: 30, color: '#108ee9', display: 'inline-block' }} />
            <span style={{ position: 'absolute', left: 10, top: 35 }}>入库审批单</span>
          </div>
        }
        {
          step > 3 &&
          <div style={{ position: 'relative', width: 80, textAlign: 'center', marginTop: 20, display: 'inline-block' }} onClick={() => { console.log('1'); this.setState({ showInputThird: true }); }}>
            <Icon type="check-circle-o" style={{ fontSize: 30, color: '#108ee9', display: 'inline-block' }} />
            <span style={{ position: 'absolute', left: 10, top: 35 }}>入库登记单</span>
          </div>
        }
        <InputDetailFirstRead
          visible={this.state.showInputFirst}
          handleCancel={this.changeshow}
        />
        <InputDetailSecondRead
          visible={this.state.showInputSecond}
          handleCancel={this.changeshow}
        />
        <InputDetailThirdRead
          visible={this.state.showInputThird}
          handleCancel={this.changeshow}
        />
      </div>
    );
  }
}
InputHistoryButton.propTypes = {
  step: PropTypes.number.isRequired,
};
export default InputHistoryButton;
