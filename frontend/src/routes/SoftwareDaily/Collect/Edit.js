import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {
  Form,
  Button,
  Row,
  Col,
  message,
} from 'antd';
import CollectForm from './Components/CollectForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      softwareInfo: {},
    }
    this.getSoftwarInfo = this.getSoftwarInfo.bind(this);
  }

  componentWillMount() {
    this.getSoftwarInfo();
  }

  getSoftwarInfo() {
    const { id } = this.props.params;
    if (!id) {
      message.error('请求参数不合法，请重新进入该页面');
      return false;
    }
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
        modules_name_list: '单元${i}, 单元1, 单元2',
        remark: '备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息',
        appendix: '附加信息附加信息附加信',
      },
    })
  }

  handleSubmit() {
    console.log('handleSubmit');
  }

  render() {
    return (
      <Row>
        <Col span={24}>
          <Form
            onSubmit={this.handleSubmit}
          >
            <CollectForm
              registrationInfo={this.state.registrationInfo}
              showFormType="edit"
            />
            <Row>
              <Col offset={3} >
                <Button type="primary" onClick={() => browserHistory.push('/main/SoftwareDaily/Collect//')}>修改</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    );
  }
}


export default Form.create({})(App);
