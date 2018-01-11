import React, { PropTypes } from 'react';
import { Row, Col, Modal } from 'antd';
import OutputDetailSixthForm from './OutputDetailSixthForm';
import OutputDetailSixthData from './OutputDetailSixthData';
import OutputDetailSixthTable from './OutputDetailSixthTable';
// import InfoRegisterRemind from './InfoRegisterRemind';
//
class OutputDetailSixth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      radioValue: ' ',
      showTable: false,
    };
  }
  onChange = (e) => {
    console.log(e.target.value);
    this.setState({ radioValue: e.target.value });
  }
  showTable = () => {
    this.setState({ showTable: true });
  }
  handleOk = () => {
    this.props.changeShowInfoRegister('ok');
  }
  handleCancel = () => {
    this.props.changeShowInfoRegister('cancel');
  }
  handleCancelTable = () => {
    this.setState({ showTable: false });
  }
  render() {
    const { showInfoRegister } = this.props;
    return (
      <div className="OutputDetailSixth_stepsContent" >
        <Row gutter={20}>
          <Col span={16} style={{ marginLeft: '10%' }} >
            <OutputDetailSixthForm disable={this.props.disable} />
          </Col>
          <Col span={5}>
            <OutputDetailSixthData showTable={this.showTable} />
          </Col>
        </Row>
        <Modal
          title="验收结果统计表"
          width="70%"
          height="50%"
          footer={null}
          visible={this.state.showTable}
          onCancel={this.handleCancelTable}
        >
          <OutputDetailSixthTable />
        </Modal>
        <Modal
          title="审核结果提示"
          closable={false}
          visible={showInfoRegister}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        有8个未通过审核
        </Modal>
      </div>
    );
  }
}
OutputDetailSixth.propTypes = {
  showInfoRegister: PropTypes.bool.isRequired,
  changeShowInfoRegister: PropTypes.func.isRequired,
  disable: PropTypes.bool.isRequired,
};
export default OutputDetailSixth;

