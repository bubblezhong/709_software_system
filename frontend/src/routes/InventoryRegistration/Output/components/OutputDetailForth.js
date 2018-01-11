import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import { Button, Form, Input, Row, Radio, Upload, Icon, Col, Select } from 'antd';
import OutputHistoryButton from './OutputHistoryButton';

const FormItem = Form.Item;
class OutputDetailForth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handler: '李四',
      handleAction: ' ',
      receiver: '王五',
      relativeFile: '无',
      infoExplain: '协调安装协调安装协调安装协调安装协调安装协调安装协调安装协调安装协调安装',
    };
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      handleAction: e.target.value,
    });
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
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>出库协调安装</div>
          {this.props.disable ?
            <Row>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="状态"
                >
                  <span>待协调安装</span>
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
                  label="交付验收人"
                  hasFeedback
                >
                  <span>{this.state.receiver}</span>
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
                    label="状态"
                  >
                    <span>待协调安装</span>
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
                    {getFieldDecorator('handleAction', {
                      initialValue: this.state.handleAction,
                      rules: [{ required: true, message: '请选择处理动作' }],
                    })(
                      <Radio.Group onChange={this.onChange} >
                        <Radio value="通过">通过</Radio>
                        <Radio value="不通过">不通过</Radio>
                        <Radio value="分配任务">分配任务</Radio>
                      </Radio.Group>
                    )}
                  </FormItem>
                </Col>
                {this.state.handleAction === '通过' &&
                  <Col span={12}>
                    <FormItem
                      {...formItemLayout}
                      label="交付验收人"
                    >
                      {getFieldDecorator('receiver', {
                        rules: [{ type: 'array', required: true, message: '请选择交互验收人' }],
                      })(
                        <Select mode="multiple">
                          <Option value="张三">张三</Option>
                          <Option value="李四">李四</Option>
                          <Option value="王五">王五</Option>
                          <Option value="张飞">张飞</Option>
                          <Option value="王二">王二</Option>
                        </Select>
                      )}
                    </FormItem>
                  </Col>
                }
                {this.state.handleAction === '分配任务' &&
                  <Col span={12}>
                    <FormItem
                      {...formItemLayout}
                      label="分配到"
                    >
                      {getFieldDecorator('distribution', {
                        rules: [{ type: 'array', required: true, message: '请选择交互验收人' }],
                      })(
                        <Select mode="multiple">
                          <Option value="张三">张三</Option>
                          <Option value="李四">李四</Option>
                          <Option value="王五">王五</Option>
                          <Option value="张飞">张飞</Option>
                          <Option value="王二">王二</Option>
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
        <OutputHistoryButton step={4} />
      </div>
    );
  }
}

OutputDetailForth.propTypes = {
  disable: PropTypes.bool.isRequired,
  form: PropTypes.object.isRequired,
};
const WrapOutputDetailForth = Form.create()(OutputDetailForth);
export default WrapOutputDetailForth;
