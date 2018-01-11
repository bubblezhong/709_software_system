import React, { PropTypes } from 'react';
import { Form, Switch, Row, Col, Input, Select } from 'antd';

const FormItem = Form.Item;
class ProcessConfigurationDetailInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        processName: '出库流程',
        processModule: '日常监测',
        id: 'JSS008sse',
        creator: '张三',
        state: false,
      },
    };
  }
  render() {
    console.log(this.state.data.planName);
    const { getFieldDecorator } = this.props.form;
    const { data } = this.state;
    const formItemLayoutLeft = {
      labelCol: { span: 6 },
      wrapperCol: { span: 15 },
    };
    const formItemLayoutLeftRight = {
      labelCol: { span: 2 },
      wrapperCol: { span: 14 },
    };
    return (
      <div>
        {this.props.editState ?
          <Form style={{ fontSize: 16 }} className="PlanDetailInfo_cointainer">
            <FormItem className="PlanDetailInfo_title">详情编辑</FormItem>
            <Row className="PlanDetailInfo_content">
              <Col span={12} >
                <FormItem
                  {...formItemLayoutLeft}
                  label="流程名称"
                  style={{ fontSize: 16 }}
                >
                  {getFieldDecorator('processName', {
                    initialValue: data.processName,
                    rules: [{ required: true, message: '请选择流程名称!' }],
                  })(
                    <Input style={{ height: 50 }} />
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayoutLeftRight}
                  label="ID"
                  style={{ fontSize: 16 }}
                >
                  <span style={{ position: 'relative', top: 8 }}>{data.id}</span>
                </FormItem>
              </Col>
            </Row>
            <Row className="ProcessConfigDetailInfo_Edit PlanDetailInfo_content" style={{ borderBottom: 0, marginBottom: 0 }}>
              <Col span={12}>
                <FormItem
                  {...formItemLayoutLeft}
                  label="流程模块"
                >
                  {getFieldDecorator('processModule', {
                    rules: [{ required: true, message: '请选择流程模块!' }],
                  })(
                    <Select>
                      <Option value="DD2017051102112升级完善任务">DD2017051102112升级完善任务</Option>
                      <Option value="DD2017051102112调度任务">DD2017051102112调度任务</Option>
                      <Option value="03-yy中队指挥所">03-yy中队指挥所</Option>
                      <Option value="04-yy中队指挥所">04-yy中队指挥所</Option>
                      <Option value="05-yy中队指挥所">05-yy中队指挥所</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayoutLeftRight}
                  label="状态"
                  style={{ fontSize: 16 }}
                >
                  {getFieldDecorator('state', {
                    initialValue: data.processName,
                    rules: [{ required: true, message: 'Please select your developUnit!' }],
                  })(
                    <Switch style={{ marginTop: 12 }} defaultChecked={false} />
                  )}
                </FormItem>
              </Col>
            </Row>
          </Form> :
            <Form style={{ fontSize: 16 }} className="PlanDetailInfo_cointainer">
              <FormItem className="PlanDetailInfo_title">详情</FormItem>
              <Row className="PlanDetailInfo_contentRead">
                <Col span={12} >
                  <FormItem
                    {...formItemLayoutLeft}
                    label="流程名称"
                    style={{ fontSize: 16 }}
                  >
                    <span>{data.processName}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayoutLeftRight}
                    label="ID"
                    style={{ fontSize: 16 }}
                  >
                    <span>{data.id}</span>
                  </FormItem>
                </Col>
              </Row>
              <Row className="PlanDetailInfo_contentRead">
                <Col span={12}>
                  <FormItem
                    {...formItemLayoutLeft}
                    label="流程模块"
                    style={{ fontSize: 16 }}
                  >
                    <span>{data.processModule}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayoutLeftRight}
                    label="状态"
                    style={{ fontSize: 16 }}
                  >
                    <Switch defaultChecked={data.state} />
                  </FormItem>
                </Col>
              </Row>
            </Form>
        }
      </div>
    );
  }
}
ProcessConfigurationDetailInfo.propTypes = {
  editState: PropTypes.bool.isRequired,
  form: PropTypes.object.isRequired,
};
const WrapProcessConfigurationDetailInfo = Form.create()(ProcessConfigurationDetailInfo);
export default WrapProcessConfigurationDetailInfo;
