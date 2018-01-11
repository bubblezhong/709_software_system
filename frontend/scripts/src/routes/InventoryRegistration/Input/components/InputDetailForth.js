import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import { Button, Form, Input, Row, Radio, Upload, Icon, Col, Select } from 'antd';
import InputHistoryButton from './InputHistoryButton';

const FormItem = Form.Item;
const Option = Select.Option;
class InputDetailThird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handler: '李四',
      handleAction: ' ',
      distribution: 'YY指挥所',
      relativeFile: '无',
      softwareDescription: '无',
    };
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      handleAction: e.target.value,
    });
  }
  render() {
    console.log('forth', this.props.disable);
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
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件入库登记验收单</div>
          {this.props.disable ?
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
                  <span>{this.state.softwareDescription}</span>
                </FormItem>
              </Col>
            </Row> :
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
                      hasFeedback
                    >
                      {getFieldDecorator('distribution', {
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
                }
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
        <InputHistoryButton step={4} />
      </div>
    );
  }
}

InputDetailThird.propTypes = {
  disable: PropTypes.bool.isRequired,
  form: PropTypes.object.isRequired,
};
const WrapInputDetailThird = Form.create()(InputDetailThird);
export default WrapInputDetailThird;
