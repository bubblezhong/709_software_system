import React, { Component, PropTypes } from 'react';
import {
  Form,
  Card,
  Input,
  Button,
  Select,
  DatePicker,
  Tabs,
  Table,
} from 'antd';


const FormItem = Form.Item;
const Option = Select.Option;
const TabPane = Tabs.TabPane;

class CollectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: true,
    };
    this.onEdit = this.onEdit.bind(this);
  }


  componentWillMount() {
  }

  onEdit(targetKey, action) {
    console.log('targetKey, action: ', targetKey, action);
    if (action === 'remove') {
      this.props.deleteSelectedRow(targetKey);
    } else if (action === 'add') {
      this.setState({
        showList: true,
      })
    }
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    const { title, description, reportStatusOption } = this.props.currentCollect;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 16 },
    };
    const selectedRows = this.props.selectedRows;
    console.log('this.props: ', this.props);
    const content = selectedRows.map((item, index) => {
      // 以 form 表单的形式展示
      // return (<RegistrationForm
      //   key={index}
      //   showFormType="edit"
      //   registrationInfo={item}
      // />);易用性；2.一般；3.严重；4.致命
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
          <Card key={index} style={{ margin: 10 }}>
            <Button
              shape="circle"
              icon="close"
              style={{ float: 'right', marginLeft: '5px' }}
              onClick={() => this.props.deleteSelectedRow(item.key)}
            />
            <Table
              title={() => { return '软件基本信息'; }}
              showHeader={false}
              pagination={false}
              bordered
              columns={columns}
              dataSource={data}
              size="small"
            />
            {/* <p>软件名称: <strong>{item.name}</strong></p>
              <p>单元列表: <strong>{item.modules_name_list}</strong></p>
              <p>记录状态: <strong>{reportStatus}</strong></p>
              <p>开机时间: <strong>{item.start_time}</strong></p>
              <p>关机时间: <strong>{item.halt_time}</strong></p>
              <p>故障发生时间: <strong>{item.fault_time}</strong></p>
              <p>登记时间: <strong>{item.report_time}</strong></p>
              <p>故障等级: <strong>{faultLevel}</strong></p>
              <p>软件使用情况: <strong>{item.usage}</strong></p>
              <p>故障描述: <strong>{item.fault_description}</strong></p>
              <p>故障解决方法: <strong>{item.fault_solution}</strong></p>
              <p>备注信息: <strong>{item.remark}</strong></p>
            <p>附加信息: <strong>{item.appendix}</strong></p> */}
          </Card>
        </TabPane>
      );
    });
    return (
      <div>
        <div
          // onSubmit={this.handleSubmit}
        >
          <FormItem
            {...formItemLayout}
            label="汇总标题"
            hasFeedback
          >
            {getFieldDecorator('title', {
              initialValue: title || '',
              rules: [{
                required: true,
                message: '请填写汇总标题',
              }],
            })(
              <Input
                type="textarea"
                rows={4}
                placeholder="请填写汇总描述"
              />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="记录状态"
            hasFeedback
          >
            {getFieldDecorator('report_status', {
              initialValue: reportStatusOption || '2',
              rules: [{
                required: true,
                message: '请填写汇总标题',
              }],
            })(
              <Select placeholder="请选择记录状态">
                <Option key="2">未接收</Option>
                <Option key="3">已接收</Option>
                <Option key="4">待解决</Option>
                <Option key="5">已解决</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="登记时间"
          >
            {getFieldDecorator('halt_time', {
              rules: [{ type: 'object', required: true, message: '请选择登记时间' }],
            })(
              <DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
              />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="汇总描述"
            hasFeedback
          >
            {getFieldDecorator('description', {
                initialValue: description || '',
              rules: [{
                required: true,
                message: '请填写汇总描述',
              }],
            })(
              <Input
                type="textarea"
                rows={4}
                placeholder="请填写汇总描述"
              />
            )}
          </FormItem>
        </div>
        <Tabs
          type="editable-card"
          style={{ marginTop: 20 }}
          defaultActiveKey="0"
          onEdit={this.onEdit}
        >
          {content}
        </Tabs>
      </div>
    );
  }
}


CollectForm.propTypes = {
  form: PropTypes.object.isRequired,
  selectedRows: PropTypes.array.isRequired,
  deleteSelectedRow: PropTypes.func.isRequired,
  currentCollect: PropTypes.object,
};

export default Form.create({})(CollectForm);
