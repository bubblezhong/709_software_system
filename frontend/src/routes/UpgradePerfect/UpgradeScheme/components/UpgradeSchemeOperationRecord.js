import React, { PropTypes } from 'react';
import { Modal, Table } from 'antd';

class UpgradeSchemeOperationRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [{
        key: '1',
        number: '1',
        operator: '申请通过',
        handler: '刘仪伟',
        handleOpinions: '同意',
        handleTime: '2017-5-18 11:25',
      }, {
        key: '2',
        number: '2',
        operator: '申请通过',
        handler: '刘仪伟',
        handleOpinions: '同意',
        handleTime: '2017-5-18 11:25',
      }, {
        key: '3',
        number: '4',
        operator: '申请通过',
        handler: '刘仪伟',
        handleOpinions: '同意',
        handleTime: '2017-5-18 11:25',
      }],
    };
  }
  render() {
    const columns = [{
      title: '序号',
      dataIndex: 'number',
    }, {
      title: '动作',
      dataIndex: 'operator',
    }, {
      title: '处理人',
      dataIndex: 'handler',
    }, {
      title: '处理意见',
      dataIndex: 'handleOpinions',
    }, {
      title: '处理时间',
      dataIndex: 'handleTime',
    }];
    return (
      <Modal
        width="70%"
        height="80%"
        title="处理记录"
        visible={this.props.visible}
        onCancel={this.props.handleCancel}
        footer={null}
      >
        <Table dataSource={this.state.dataSource} columns={columns} bordered />
      </Modal>
    );
  }
}
UpgradeSchemeOperationRecord.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
};
export default UpgradeSchemeOperationRecord;
