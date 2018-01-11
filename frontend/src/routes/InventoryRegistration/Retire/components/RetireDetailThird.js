import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import { Button, Select, Form, Input, Row, Radio, Upload, Icon, Col } from 'antd';
import RetireHistoryButton from './RetireHistoryButton';

const FormItem = Form.Item;
class RetireDetailThird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oddNumbers: 'CL-20170427-0001',
      register: '张三',
      registeUnit: '中船重工XX研究所',
      handler: '李四',
      saveType: '网络存储',
      saveCode: 'ltuirt89498324',
      Md5Confirm: 'ljudsery8347d',
      relativeFile: '无',
      InfoExplain: '软件退役软件退役软件退役软件退役软件退役软件退役软件退役软件退役软件退役软件退役软件退役软件退役软件退役软件退役',
    };
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const formItemLayoutDec = {
      labelCol: { span: 3 },
      wrapperCol: { span: 19 },
    };
    return (
      <div className="RetireDetail_stepsContent">
        <Form onSubmit={this.handleSubmit} style={{ width: '80%', marginLeft: '10%', minHeight: 500 }}>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件退役登记单</div>
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
                  label="退役登记人"
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
                >
                  <span>{this.state.registeUnit}</span>
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
                  <span>{this.state.saveType}</span>
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
                  <span>{this.state.Md5Confirm}</span>
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
                  {...formItemLayoutDec}
                  label="信息说明"
                >
                  <span>{this.state.InfoExplain}</span>
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
                    label="退役登记人"
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
                <Col style={{ height: 55.8 }} span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="选择验收人"
                    hasFeedback
                  >
                    {getFieldDecorator('receiver', {
                      rules: [{ required: true, message: 'Please select your developUnit!' }],
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
                    {...formItemLayout}
                    label="存储方式"
                  >
                    {getFieldDecorator('saveInfo', {
                      rules: [{ required: true, message: '请输入退役登记员' }],
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
                      rules: [{ required: true, message: '请输入退役登记员' }],
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
                    {...formItemLayoutDec}
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
        <RetireHistoryButton step={3} />
      </div>
    );
  }
}

RetireDetailThird.propTypes = {
  disable: PropTypes.bool.isRequired,
  form: PropTypes.object.isRequired,
};
const WrapRetireDetailThird = Form.create()(RetireDetailThird);
export default WrapRetireDetailThird;
