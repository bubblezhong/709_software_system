import React, { Component } from 'react';
import { Table } from 'antd';
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registrationInfo: {},
    };
    this.getRegistrationInfo = this.getRegistrationInfo.bind(this);
  }


  componentWillMount() {
    this.getRegistrationInfo();
  }

  getRegistrationInfo() {
    this.setState({
      registrationInfo: {
        id: 1,
        key: 1,
        name: '软件1',
        start_time: new Date(), // 开机时间
        halt_time: new Date(), // 关机时间
        fault_time: new Date(), // 故障发生时间
        usage: '软件使用情况软件使用情况软件使用情况软件使用情况', // 软件使用情况
        fault_description: '故障描述（如有故障）', // 故障描述（如有故障）
        is_fault_resolved: false, // 故障是否解决
        fault_level: 1, // 故障等级：1.易用性；2.一般；3.严重；4.致命
        fault_solution: '故障解决方法，描述或URL', // 故障解决方法，描述或URL
        report_status: 1, // 记录状态：1：草稿；2：未接收；3：已接收；4：待解决；5：已解决；
        modules_name_list: '单元, 单元1, 单元2',
        remark: '备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息',
        appendix: '附加信息附加信息附加信',
      },
    });
  }

  render() {
    const registrationInfo = this.state.registrationInfo;
    let faultLevel = '易用性';
    switch (registrationInfo.fault_level) {
      case 1:
        faultLevel = '易用性';
        break;
      case 2:
        faultLevel = '一般';
        break;
      case 3:
        faultLevel = '严重';
        break;
      case 4:
        faultLevel = '致命';
        break;
      default:
    }
    console.log('registrationInfo: ', registrationInfo);
    const columns = [{
      title: 'title',
      dataIndex: 'title',
    }, {
      title: 'value',
      dataIndex: 'value',
    }];
    const data = [{
      key: 'name',
      title: '软件名称',
      value: registrationInfo.name,
    }, {
      key: 'usage',
      title: '使用情况',
      value: registrationInfo.usage,
    }, {
      key: 'modules_name_list',
      title: '软件单元',
      value: registrationInfo.modules_name_list,
    }, {
      key: 'fault_description',
      title: '故障描述',
      value: registrationInfo.fault_description,
    }, {
      key: 'is_fault_resolved',
      title: '故障是否解决',
      value: registrationInfo.is_fault_resolved ? '是' : '否',
    }, {
      key: 'faultLevel',
      title: '故障等级',
      value: faultLevel,
    }, {
      key: 'fault_solution',
      title: '故障解决方法',
      value: registrationInfo.fault_solution,
    }, {
      key: 'start_time',
      title: '开机时间',
      value: moment(registrationInfo.start_time).format('YYYY-MM-DD HH:mm:ss'),
    }, {
      key: 'halt_time',
      title: '关机时间',
      value: moment(registrationInfo.halt_time).format('YYYY-MM-DD HH:mm:ss'),
    }, {
      key: 'fault_time',
      title: '故障时间',
      value: moment(registrationInfo.fault_time).format('YYYY-MM-DD HH:mm:ss'),
    }, {
      key: 'remark',
      title: '备注信息',
      value: registrationInfo.remark,
    }, {
      key: 'appendix',
      title: '附件信息',
      value: registrationInfo.appendix,
    }];
    return (
      <Table
        title={() => { return '使用情况登记详情'; }}
        showHeader={false}
        pagination={false}
        bordered
        columns={columns}
        dataSource={data}
      />
    );
  }
}


export default App;
