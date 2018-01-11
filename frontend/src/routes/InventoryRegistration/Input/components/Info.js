import React, { Component, PropTypes } from 'react';
import { Modal, Table } from 'antd';
import moment from 'moment';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  handleOk() {
    console.log('Clicked OK');
    this.props.handleShowInfo(false);
  }

  handleCancel(e) {
    console.log('Clicked Caccle: ', e);
    this.props.handleShowInfo(false);
  }

  render() {
    console.log(' this.props.showInfo: ', this.props.showInfo);
    console.log('this.state: ', this.state);
    const info = this.props.info;
    const columns = [{
      title: 'title',
      dataIndex: 'title',
    }, {
      title: 'value',
      dataIndex: 'value',
    }];
    const data = [
      {
        key: 'apply_date',
        title: '入库申请时间',
        value: moment(info.applyDate).format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        key: 'apply_department',
        title: '单位',
        value: info.apply_department,
      },
      {
        key: 'apply_user_real_name',
        title: '申请人',
        value: info.apply_user_real_name,
      },
      {
        key: 'software_category',
        title: '谱系',
        value: info.software_category,
      },
      {
        key: 'software_name',
        title: '软件名称',
        value: info.software_name,
      },
      {
        key: 'status',
        title: '软件状态',
        value: info.status,
      },
      {
        key: 'version_name',
        title: '软件版本',
        value: info.version_name,
      },
      {
        key: 'version_name',
        title: '审批意见',
        value: info.version_name,
      },
      {
        key: 'date',
        title: '审批时间',
        value: moment(info.apply_date).format('YYYY-MM-DD HH:mm:ss'),
      },
    ];

    const stepDataSource = [{
      key: '1',
      name: '胡彦斌',
      remarks: '审批通过通过',
      time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    }, {
      key: '2',
      name: '胡彦祖',
      remarks: '审批通过通过审批通过通过审批通过通过审',
      time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    }, {
      key: '3',
      name: '胡彦祖',
      remarks: '审批通过通过',
      time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    }, {
      key: '4',
      name: '胡彦斌1212',
      remarks: '审批通过通过',
      time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    }];

    const stepColumns = [{
      title: '审批人',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '审批备注',
      dataIndex: 'remarks',
      key: 'remarks',
    }, {
      title: '审批时间',
      dataIndex: 'time',
      key: 'time',
    }];
    return (
      <div>
        <Modal
          title="软件详情"
          visible={this.props.showInfo}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Table
            title={() => { return '软件基本信息'; }}
            showHeader={false}
            pagination={false}
            bordered
            columns={columns}
            dataSource={data}
          />

          <Table
            pagination={false}
            bordered
            columns={stepColumns}
            dataSource={stepDataSource}
            size="small"
            style={{ marginTop: 30 }}
          />
        </Modal>
      </div>
    );
  }
}


Info.propTypes = {
  showInfo: PropTypes.bool.isRequired,
  handleShowInfo: PropTypes.func.isRequired,
  info: PropTypes.object.isRequired,
};


export default Info;
