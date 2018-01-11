import React, { PropTypes } from 'react';
import { Icon } from 'antd';
import OutputDetailFirstRead from './OutputDetailFirstRead';
import OutputDetailSecondRead from './OutputDetailSecondRead';
import OutputDetailThirdRead from './OutputDetailThirdRead';
import OutputDetailForthRead from './OutputDetailForthRead';
import OutputDetailFifthRead from './OutputDetailFifthRead';
import OutputDetailSixthRead from './OutputDetailSixthRead';

class OutputHistoryButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOutputFirst: false,
      showOutputSecond: false,
      showOutputThird: false,
      showOutputForth: false,
      showOutputFifth: false,
      showOutputSix: false,
    };
  }
  changeshow = (type) => {
    if (type === 'First') this.setState({ showOutputFirst: false });
    if (type === 'Second') this.setState({ showOutputSecond: false });
    if (type === 'Third') this.setState({ showOutputThird: false });
    if (type === 'Forth') this.setState({ showOutputForth: false });
    if (type === 'Fifth') this.setState({ showOutputFifth: false });
    if (type === 'Sixth') this.setState({ showOutputSixth: false });
  }
  render() {
    const { step } = this.props;
    return (
      <div>
        { step > 1 &&
          <div style={{ position: 'relative', width: 100, textAlign: 'center', marginTop: 20, display: 'inline-block' }} onClick={() => { this.setState({ showOutputFirst: true }); }}>
            <Icon type="file" style={{ fontSize: 30, color: '#108ee9', display: 'inline-block' }} />
            <span style={{ position: 'absolute', left: 10, top: 35 }}>软件出库申请单</span>
          </div>
        }
        {
          step > 2 &&
          <div style={{ position: 'relative', width: 80, textAlign: 'center', marginTop: 20, display: 'inline-block' }} onClick={() => { this.setState({ showOutputSecond: true }); }}>
            <Icon type="file" style={{ fontSize: 30, color: '#108ee9', display: 'inline-block' }} />
            <span style={{ position: 'absolute', left: 10, top: 35 }}>出库审批单</span>
          </div>
        }
        {
          step > 3 &&
          <div style={{ position: 'relative', width: 80, textAlign: 'center', marginTop: 20, display: 'inline-block' }} onClick={() => { this.setState({ showOutputThird: true }); }}>
            <Icon type="file" style={{ fontSize: 30, color: '#108ee9', display: 'inline-block' }} />
            <span style={{ position: 'absolute', left: 10, top: 35 }}>出库登记单</span>
          </div>
        }
        {
          step > 4 &&
          <div style={{ position: 'relative', width: 80, textAlign: 'center', marginTop: 20, display: 'inline-block' }} onClick={() => { this.setState({ showOutputForth: true }); }}>
            <Icon type="file" style={{ fontSize: 30, color: '#108ee9', display: 'inline-block' }} />
            <span style={{ position: 'absolute', left: 10, top: 35 }}>协调安装单</span>
          </div>
        }
        {
          step > 5 &&
          <div style={{ position: 'relative', width: 80, textAlign: 'center', marginTop: 20, display: 'inline-block' }} onClick={() => { this.setState({ showOutputFifth: true }); }}>
            <Icon type="file" style={{ fontSize: 30, color: '#108ee9', display: 'inline-block' }} />
            <span style={{ position: 'absolute', left: 10, top: 35 }}>交互验收单</span>
          </div>
        }
        {
          step > 6 &&
          <div style={{ position: 'relative', width: 80, textAlign: 'center', marginTop: 20, display: 'inline-block' }} onClick={() => { this.setState({ showOutputSixth: true }); }}>
            <Icon type="file" style={{ fontSize: 30, color: '#108ee9', display: 'inline-block' }} />
            <span style={{ position: 'absolute', left: 10, top: 35 }}>信息登记单</span>
          </div>
        }
        <OutputDetailFirstRead
          visible={this.state.showOutputFirst}
          handleCancel={() => { this.changeshow('First'); }}
        />
        <OutputDetailSecondRead
          visible={this.state.showOutputSecond}
          handleCancel={() => { this.changeshow('Second'); }}
        />
        <OutputDetailThirdRead
          visible={this.state.showOutputThird}
          handleCancel={() => { this.changeshow('Third'); }}
        />
        <OutputDetailForthRead
          visible={this.state.showOutputForth}
          handleCancel={() => { this.changeshow('Forth'); }}
        />
        <OutputDetailFifthRead
          visible={this.state.showOutputFifth}
          handleCancel={() => { this.changeshow('Fifth'); }}
        />
        <OutputDetailSixthRead
          visible={this.state.showOutputSixth}
          handleCancel={() => { this.changeshow('Sixth'); }}
        />
      </div>
    );
  }
}
OutputHistoryButton.propTypes = {
  step: PropTypes.number.isRequired,
};
export default OutputHistoryButton;
