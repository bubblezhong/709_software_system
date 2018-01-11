import React, { Component, PropTypes } from 'react';
import {
  Form,
  Tabs,
  Table,
} from 'antd';

const TabPane = Tabs.TabPane;


class CollectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  componentWillMount() {
  }


  render() {
    const { title, description } = this.props.currentCollect;
    const selectedRows = this.props.selectedRows;
    console.log('this.props: ', this.props);
    const content = selectedRows.map((item, index) => {
      let faultLevel = '易用性';
      switch (parseInt(item.fault_level, 10)) {
        case 1:
          faultLevel = '易用性';
          break;
        case 2:
          faultLevel = '易用性';
          break;
        case 3:
          faultLevel = '易用性';
          break;
        case 4:
          faultLevel = '易用性';
          break;
        default:
          faultLevel = '易用性';
      }
      let reportStatus = '草稿';
      switch (parseInt(item.fault_level, 10)) {
        case 1:
          reportStatus = '草稿';
          break;
        case 2:
          reportStatus = '未接收';
          break;
        case 3:
          reportStatus = '已接收';
          break;
        case 4:
          reportStatus = '待解决';
          break;
        case 5:
          reportStatus = '已解决';
          break;
        default:
          reportStatus = '易用性';
      }
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
        value: item.name,
      }, {
        key: 'modules_name_list',
        title: '单元列表',
        value: item.modules_name_list,
      }, {
        key: 'reportStatus',
        title: '记录状态',
        value: reportStatus,
      }, {
        key: 'start_time',
        title: '开机时间',
        value: item.start_time,
      }, {
        key: 'halt_time',
        title: '关机时间',
        value: item.halt_time,
      }, {
        key: 'fault_time',
        title: '故障发生时间',
        value: item.fault_time,
      }, {
        key: 'report_time',
        title: '登记时间',
        value: item.report_time,
      }, {
        key: 'faultLevel',
        title: '故障等级',
        value: faultLevel,
      }, {
        key: 'usage',
        title: '软件使用情况',
        value: item.usage,
      }, {
        key: 'fault_description',
        title: '故障描述',
        value: item.fault_description,
      }, {
        key: 'fault_solution',
        title: '故障解决方法',
        value: item.fault_solution,
      }, {
        key: 'remark',
        title: '备注信息',
        value: item.remark,
      }, {
        key: 'appendix',
        title: '附加信息',
        value: item.appendix,
      }];
      return (
        <TabPane tab={item.name} key={index} style={{ marginTop: 10 }}>
          <Table
            title={() => { return '软件基本信息'; }}
            showHeader={false}
            pagination={false}
            bordered
            columns={columns}
            dataSource={data}
            size="small"
          />
        </TabPane>
      );
    });
    return (
      <div>
        <h3>{title}</h3>
        <div style={{ marginTop: 20, marginBottom: 20 }}>{description}</div>
        <Tabs
          type="card"
          style={{ marginTop: 20 }}
          defaultActiveKey="0"
        >
          {content}
        </Tabs>
      </div>
    );
  }
}


CollectForm.propTypes = {
  selectedRows: PropTypes.array.isRequired,
  currentCollect: PropTypes.object,
};


export default Form.create({})(CollectForm);
