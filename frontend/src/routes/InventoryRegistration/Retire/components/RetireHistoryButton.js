import React, { PropTypes } from 'react';
import { Icon } from 'antd';
import RetireDetailFirstRead from './RetireDetailFirstRead';
import RetireDetailSecondRead from './RetireDetailSecondRead';
import RetireDetailThirdRead from './RetireDetailThirdRead';

class RetireHistoryButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRetireFirst: false,
      showRetireSecond: false,
      showRetireThird: false,
      showRetireForth: false,
    };
  }
  changeshow = (type) => {
    if (type === 'First') this.setState({ showRetireFirst: false });
    if (type === 'Second') this.setState({ showRetireSecond: false });
    if (type === 'Third') this.setState({ showRetireThird: false });
  }
  render() {
    const { step } = this.props;
    return (
      <div>
        { step > 1 &&
          <div style={{ position: 'relative', width: 100, textAlign: 'center', marginTop: 20, display: 'inline-block' }} onClick={() => { this.setState({ showRetireFirst: true }); }}>
            <Icon type="file" style={{ fontSize: 30, color: '#108ee9', display: 'inline-block' }} />
            <span style={{ position: 'absolute', left: 10, top: 35 }}>软件入库申请单</span>
          </div>
        }
        {
          step > 2 &&
          <div style={{ position: 'relative', width: 80, textAlign: 'center', marginTop: 20, display: 'inline-block' }} onClick={() => { this.setState({ showRetireSecond: true }); }}>
            <Icon type="file" style={{ fontSize: 30, color: '#108ee9', display: 'inline-block' }} />
            <span style={{ position: 'absolute', left: 10, top: 35 }}>入库审批单</span>
          </div>
        }
        {
          step > 3 &&
          <div style={{ position: 'relative', width: 80, textAlign: 'center', marginTop: 20, display: 'inline-block' }} onClick={() => { this.setState({ showRetireThird: true }); }}>
            <Icon type="file" style={{ fontSize: 30, color: '#108ee9', display: 'inline-block' }} />
            <span style={{ position: 'absolute', left: 10, top: 35 }}>入库登记单</span>
          </div>
        }
        <RetireDetailFirstRead
          visible={this.state.showRetireFirst}
          handleCancel={() => { this.changeshow('First'); }}
        />
        <RetireDetailSecondRead
          visible={this.state.showRetireSecond}
          handleCancel={() => { this.changeshow('Second'); }}
        />
        <RetireDetailThirdRead
          visible={this.state.showRetireThird}
          handleCancel={() => { this.changeshow('Third'); }}
        />
      </div>
    );
  }
}
RetireHistoryButton.propTypes = {
  step: PropTypes.number.isRequired,
};
export default RetireHistoryButton;
