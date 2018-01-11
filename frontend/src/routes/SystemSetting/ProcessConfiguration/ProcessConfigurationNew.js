import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Switch, Button, Form, Row, Col, Input, Select } from 'antd';
// import PlanDetailInfo from './PlanDetailInfo';
// import PlanDetailInfoEdit from './PlanDetailInfoEdit';
// import PlanDetailStep from './PlanDetailStep';
// import PlanDetailStepEdit from './PlanDetailStepEdit';

const FormItem = Form.Item;
class ProcessConfigurationNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editState: false,
      newState: false,
      initialData: {
        id: '01',
      },
    };
  }
  onEdit = () => {
    this.setState({ editState: true });
  }
  onSave = () => {
    this.setState({ editState: false });
  }
  render() {
    const { initialData } = this.state;
    const { getFieldDecorator } = this.props.form;
    const formItemLayoutLeft = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <div>
        <div style={{ overflow: 'hidden', marginBottom: 20 }}>
          <Link to="/main/SystemSetting/ProcessConfiguration">
            <Button style={{ width: 85, height: 30 }} onClick={this.onSave}>
              <span style={{ marginRight: 8 }}>&lt;</span>
              <span>返回</span>
            </Button>
          </Link>
          <Button type="primary" className="SoftwareInfoDetail_reflash" onClick={this.onSave}>保存</Button>
        </div>
        <Form style={{ fontSize: 16, height: 400 }} className="PlanDetailInfo_cointainer">
          <Row style={{ marginTop: 80 }}>
            <Col span={12} style={{ height: 56 }} >
              <FormItem
                {...formItemLayoutLeft}
                label="流程名称"
                style={{ fontSize: 16 }}
              >
                {getFieldDecorator('processName', {
                  rules: [{ required: true, message: '请选择流程名称!' }],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayoutLeft}
                label="ID"
                style={{ fontSize: 16 }}
              >
                <span>{initialData.id}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayoutLeft}
                label="流程模块"
              >
                {getFieldDecorator('processNodule', {
                  rules: [{ required: true, message: '请选择上级单位!' }],
                })(
                  <Select>
                    <Option value="01-主页">01-主页</Option>
                    <Option value="02-日常监测">02-日常监测</Option>
                    <Option value="03-路网监测">03-路网监测</Option>
                    <Option value="04-路网监测">04-路网监测</Option>
                    <Option value="05-路网监测">05-路网监测</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayoutLeft}
                label="状态"
              >
                {getFieldDecorator('state', {
                  rules: [{ required: true, message: 'Please select your developUnit!' }],
                })(
                  <Switch defaultChecked={false} />
                )}
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
ProcessConfigurationNew.propTypes = {
  form: PropTypes.object.isRequired,
  // location: PropTypes.object.isRequired,
};
const WrapProcessConfigurationNew = Form.create()(ProcessConfigurationNew);
export default WrapProcessConfigurationNew;

