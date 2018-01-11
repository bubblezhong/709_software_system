import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import { Button, Form, Input, Row, Radio, Upload, Icon, Col, Select } from 'antd';

const FormItem = Form.Item;
class InputDetailThird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handleActionvalue: '',
      initialData: {
        handler: '李四',
        handleAction: '同意',
        distribution: '王小二',
        relativeFile: '无',
        InfoExplain: '退役登记验收退役登记验收退役登记验收退役登记验收退役登记验收退役登记验收退役登记验收退役登记验收退役登记验收退役登',
      },
    };
  }
  RadioOnChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({ handleActionvalue: e.target.value });
  }
  render() {
    const { initialData } = this.state;
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
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件退役登记验收单</div>
          {this.props.disable ?
            <Row>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="状态"
                >
                  <span>待退役登记验收</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="处理人"
                >
                  <span>{initialData.handler}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="处理动作"
                >
                  <span>{initialData.handleAction}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="分配给"
                  hasFeedback
                >
                  <span>{initialData.distribution}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="相关文件"
                  hasFeedback
                >
                  <span>{initialData.relativeFile}</span>
                </FormItem>
              </Col>
              <Col span={24}>
                <FormItem
                  {...formItemLayoutDesc}
                  label="信息说明"
                >
                  <span>{initialData.InfoExplain}</span>
                </FormItem>
              </Col>
            </Row> :
              <Row>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="状态"
                  >
                    <span>待退役登记验收</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="处理人"
                  >
                    <span>{initialData.handler}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="处理动作"
                  >
                    {getFieldDecorator('handleAction', {
                      rules: [{ required: true, message: 'Please select your developUnit!' }],
                    })(
                      <Radio.Group
                        onChange={this.RadioOnChange}
                        value={this.state.handleActionvalue}
                      >
                        <Radio value="接收">接收</Radio>
                        <Radio value="不接收">不接收</Radio>
                        <Radio value="分配任务">分配任务</Radio>
                      </Radio.Group>
                    )}
                  </FormItem>
                </Col>
                {this.state.handleActionvalue === '分配任务' &&
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
                    {getFieldDecorator('InfoExplain', {
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

InputDetailThird.propTypes = {
  disable: PropTypes.bool.isRequired,
  form: PropTypes.object.isRequired,
};
const WrapInputDetailThird = Form.create()(InputDetailThird);
export default WrapInputDetailThird;
