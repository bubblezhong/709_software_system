import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import { Button, Form, Input, Row, Radio, Upload, Icon, Col, Select } from 'antd';
import OutputHistoryButton from './OutputHistoryButton';

const FormItem = Form.Item;
class OutputDetailThird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oddNumbers: 'CL-20170427-0001',
      register: '张三',
      registeUnit: '中船重工XX研究所',
      handler: '李四',
      receiver: '王五',
      saveType: '自持',
      saveInfo: '存储介质编号02121122001',
      saveCode: 'skury3478hl3wi8',
      MD5Sure: 'djiaye87r3hl4i578ndf',
      relativeFile: '无',
      infoExplain: '出库登记出库登记出库登记出库登记出库登记出库登记出库登记出库登记出库登记',
    };
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
        <Form onSubmit={this.handleSubmit} style={{ width: '80%', marginLeft: '10%', minHeight: 500 }}>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件出库登记单</div>
          {this.props.disable ?
            <Row>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="单号"
                >
                  <span>{this.state.oddNumbers}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="出库登记人"
                >
                  <span>{this.state.register}</span>
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
                  label="登记单位"
                >
                  <span>{this.state.registeUnit}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="验收人"
                  hasFeedback
                >
                  <span>{this.state.receiver}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="存储方式"
                >
                  <span>{this.state.saveType}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="存储信息"
                  hasFeedback
                >
                  <span>{this.state.saveInfo}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="提取码"
                  hasFeedback
                >
                  <span>{this.state.saveCode}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="MD5确认"
                  hasFeedback
                >
                  <span>{this.state.MD5Sure}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="相关文件"
                  hasFeedback
                >
                  <span>{this.state.relativeFile}</span>
                </FormItem>
              </Col>
              <Col span={24}>
                <FormItem
                  {...formItemLayoutDesc}
                  label="信息说明"
                >
                  <span>{this.state.infoExplain}</span>
                </FormItem>
              </Col>
            </Row> :
              <Row>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="单号"
                  >
                    <span>{this.state.oddNumbers}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="出库登记人"
                  >
                    <span>{this.state.register}</span>
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
                    label="登记单位"
                  >
                    <span>{this.state.registeUnit}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="选择验收人"
                    hasFeedback
                  >
                    {getFieldDecorator('receiver', {
                      rules: [{ required: true, message: 'Please select your developUnit!' }],
                    })(
                      <Select>
                        <Option value="张三">张三</Option>
                        <Option value="李四">李四</Option>
                        <Option value="王五">王五</Option>
                        <Option value="张飞">张飞</Option>
                        <Option value="王二">王二</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="存储方式"
                  >
                    {getFieldDecorator('saveType', {
                      rules: [{ required: true, message: '请输入存储方式' }],
                    })(
                      <Radio.Group>
                        <Radio value="自持">自持</Radio>
                        <Radio value="网络存储">网络存储</Radio>
                      </Radio.Group>
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="存储信息"
                    hasFeedback
                  >
                    {getFieldDecorator('saveInfo', {
                      rules: [{ required: true, message: '请输入存储信息' }],
                    })(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="提取码"
                    hasFeedback
                  >
                    {getFieldDecorator('saveode', {
                      rules: [{ required: true, message: '请输入提取码' }],
                    })(
                      <Input />
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="MD5确认"
                    hasFeedback
                  >
                    {getFieldDecorator('MD5Sure', {
                      rules: [{ required: true, message: '请输入MD5确认' }],
                    })(
                      <Input />
                    )}
                  </FormItem>
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
                    label="信息说明"
                  >
                    {getFieldDecorator('softwareDescription', {
                      rules: [{ required: true, message: '请输入信息说明' }],
                    })(
                      <Input type="textarea" rows={10} />
                    )}
                  </FormItem>
                </Col>
              </Row>
          }
        </Form>
        <OutputHistoryButton step={3} />
      </div>
    );
  }
}

OutputDetailThird.propTypes = {
  form: PropTypes.object.isRequired,
  disable: PropTypes.bool.isRequired,
};
const WrapOutputDetailThird = Form.create()(OutputDetailThird);
export default WrapOutputDetailThird;
