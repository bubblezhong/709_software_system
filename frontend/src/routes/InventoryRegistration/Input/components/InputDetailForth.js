import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import { Button, Form, Input, Row, Radio, Upload, Icon, Col, Select } from 'antd';
import InputHistoryButton from './InputHistoryButton';
import CreateNewData from './../../../utils/CreateNewData';

const FormItem = Form.Item;
const Option = Select.Option;
class InputDetailThird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      handleAction: e.target.value,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('this.context.user', this.context, this.props.processData);
    this.props.form.validateFields((err, values) => {
      console.log(err, values);
      if (!err) {
        console.log('Received Newvalues of form: ', values);
        values.handleId = this.context.user.ID;
        values.handleName = this.context.user.NAME;
        values.processInstanceId = this.props.processData.registrantInfo.processInstanceId;
        console.log(JSON.stringify(values));
        this.props.createData(values, (res) => { this.handleResult(res); });
        console.log('Received');
      }
    });
  }
  handleResult = (res) => {
    console.log('resres', res);
    if (res.code === 0) {
      this.props.next();
    }
  }
  render() {
    // console.log('forth', this.props.disable);
    const { processData } = this.props;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const formItemLayoutDesc = {
      labelCol: { span: 3 },
      wrapperCol: { span: 19 },
    };
    return (
      <div className="InputDetail_stepsContent">
        {this.props.disable ?
          <Form onSubmit={this.handleSubmit} style={{ width: '80%', marginLeft: '10%', minHeight: 500 }}>
            <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件入库登记验收单</div>
            <Row>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="状态"
                >
                  <span>待入库登记验收</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="处理人"
                >
                  <span>{processData.acceptInfo.acceptName}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="处理动作"
                >
                  <span>{processData.acceptInfo.status}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="分配给"
                >
                  <span>{this.state.distribution}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="相关文件"
                >
                  <span>{processData.acceptInfo.registrantFile}</span>
                </FormItem>
              </Col>
              <Col span={24}>
                <FormItem
                  {...formItemLayoutDesc}
                  label="信息说明"
                >
                  <span>{processData.acceptInfo.remark}</span>
                </FormItem>
              </Col>
            </Row>
          </Form> :
            <Form onSubmit={this.handleSubmit} style={{ width: '80%', marginLeft: '10%', minHeight: 500 }}>
              <FormItem style={{ position: 'fixed', top: 250, left: 270 }}>
                <Button style={{ width: 120, height: 30 }} htmlType="submit">提交</Button>
              </FormItem>
              <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件入库登记验收单</div>
              <Row>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="状态"
                  >
                    <span>待入库登记验收</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="处理人"
                  >
                    <span>{this.context.user.NAME}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="处理动作"
                  >
                    {getFieldDecorator('status', {
                      initialValue: this.state.handleAction,
                      rules: [{ required: true, message: '请选择处理动作' }],
                    })(
                      <Radio.Group onChange={this.onChange} >
                        <Radio value="接收">接收</Radio>
                        <Radio value="不接收">不接收</Radio>
                        <Radio value="分配任务">分配任务</Radio>
                      </Radio.Group>
                    )}
                  </FormItem>
                </Col>
                {this.state.handleAction === '分配任务' &&
                  <Col span={12}>
                    <FormItem
                      {...formItemLayout}
                      label="分配给"
                    >
                      {getFieldDecorator('distribution', {
                        rules: [{ required: true, message: '请选择分配人!' }],
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
                }
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="相关文件"
                  >
                    {getFieldDecorator('registrantFile', {
                      rules: [{ message: '请点击上传相关附件' }],
                    })(
                      <Upload>
                        <Button>
                          <Icon type="upload" />点击上传
                        </Button>
                      </Upload>
                    )}
                  </FormItem>
                </Col>
                <Col span={24}>
                  <FormItem
                    {...formItemLayoutDesc}
                    label="信息说明"
                  >
                    {getFieldDecorator('remark', {
                      rules: [{ message: '请输入信息说明' }],
                    })(
                      <Input type="textarea" rows={10} />
                    )}
                  </FormItem>
                </Col>
              </Row>
            </Form>
        }
        <InputHistoryButton processData={this.props.processData} step={4} />
      </div>
    );
  }
}

InputDetailThird.propTypes = {
  disable: PropTypes.bool.isRequired,
  form: PropTypes.object.isRequired,
  createData: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  processData: PropTypes.object.isRequired,
};
InputDetailThird.contextTypes = {
  user: PropTypes.object,
};
const FormInputDetailThird = Form.create()(InputDetailThird);
const WrapInputDetailThird = CreateNewData('/api/software-in/accept')(FormInputDetailThird);
export default WrapInputDetailThird;
