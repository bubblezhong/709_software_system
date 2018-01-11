import React, { PropTypes } from 'react';
import { Button, Form, Input, Radio, Upload, Icon, Select, Row, Col } from 'antd';

const FormItem = Form.Item;
class SupportRequestDetailSecond extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      radioValue: ' ',
      handler: '张三',
      handleAction: '同意',
      distribution: '王五',
      infoReceiver: '李四',
      file: '无',
      remarks: '信息登记信息登记信息登记信息登记信息登记信息登记信息登记信息登记',
    };
  }
  onChange = (e) => {
    this.setState({ radioValue: e.target.value });
  }
  render() {
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
        <Form onSubmit={this.handleSubmit} style={{ width: '80%', marginLeft: '10%', minHeight: 500, paddingBottom: 50 }}>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>技术保障申请处理</div>
          {this.props.disable ?
            <Row>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="状态"
                >
                  <span>待审核</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="处理人"
                >
                  <span>{this.state.handler}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="处理动作"
                >
                  <span>{this.state.handleAction}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="分配给"
                  hasFeedback
                >
                  <span>{this.state.distribution}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="信息接收员"
                  hasFeedback
                >
                  <span>{this.state.infoReceiver}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="附件"
                  hasFeedback
                >
                  <span>{this.state.file}</span>
                </FormItem>
              </Col>
              <Col span={24}>
                <FormItem
                  {...formItemLayoutDesc}
                  label="备注"
                >
                  <span>{this.state.remarks}</span>
                </FormItem>
              </Col>
            </Row> :
              <Row>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="状态"
                  >
                    <span>待审核</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="处理人"
                  >
                    <span>{this.state.handler}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="处理动作"
                  >
                    {getFieldDecorator('hanldeAction', {
                      rules: [{ required: true, message: '请选择处理动作' }],
                    })(
                      <Radio.Group onChange={this.onChange}>
                        <Radio value="通过">通过</Radio>
                        <Radio value="不通过">不通过</Radio>
                        <Radio value="分配任务">分配任务</Radio>
                      </Radio.Group>
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  { this.state.radioValue === '分配任务' &&
                    <FormItem
                      {...formItemLayout}
                      label="分配给"
                      hasFeedback
                    >
                      {getFieldDecorator('distribution', {
                        rules: [{ required: true, message: '请选择分配人' }],
                      })(
                        <Select>
                          <Option value="张三">张三</Option>
                          <Option value="王五">王五</Option>
                          <Option value="李四">李四</Option>
                          <Option value="王小二">王小二</Option>
                          <Option value="李大思">李大思</Option>
                        </Select>
                      )}
                    </FormItem>
                  }
                  { this.state.radioValue === '通过' &&
                    <FormItem
                      {...formItemLayout}
                      label="选择审核员"
                      hasFeedback
                    >
                      {getFieldDecorator('infoReceiver', {
                        rules: [{ required: true, message: '请选择审核员' }],
                      })(
                        <Select>
                          <Option value="张三">张三</Option>
                          <Option value="王五">王五</Option>
                          <Option value="李四">李四</Option>
                          <Option value="王小二">王小二</Option>
                          <Option value="李大思">李大思</Option>
                        </Select>
                      )}
                    </FormItem>
                  }
                  { this.state.radioValue === '不通过' && '' }
                  { this.state.radioValue === ' ' && '' }
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="相关文件"
                    hasFeedback
                  >
                    {getFieldDecorator('relativeFile', {
                      rules: [{ required: true, message: '请点击上传相关附件' }],
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
                    label="说明"
                  >
                    {getFieldDecorator('remarks', {
                      rules: [{ required: true, message: '请输入信息说明' }],
                    })(
                      <Input type="textarea" rows={10} />
                    )}
                  </FormItem>
                </Col>
              </Row>
          }
        </Form>
      </div>
    );
  }
}
SupportRequestDetailSecond.propTypes = {
  form: PropTypes.object.isRequired,
  disable: PropTypes.bool.isRequired,
};
const WrapSupportRequestDetailSecond = Form.create()(SupportRequestDetailSecond);
export default WrapSupportRequestDetailSecond;

