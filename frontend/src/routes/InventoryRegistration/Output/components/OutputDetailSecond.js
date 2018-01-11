import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import { Button, Form, Input, Select, Row, Radio, Upload, Icon, Col } from 'antd';
import OutputHistoryButton from './OutputHistoryButton';

const FormItem = Form.Item;
const Option = Select.Option;
class InputDetailFirst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handleActionvalue: '',
      initialData: {
        confirmDirty: false,
        autoCompleteResult: [],
        handler: '张三',
        handleAction: '同意',
        register: '王五',
        relativeFile: '无',
        softwareDescription: '出库审批出库审批出库审批出库审批出库审批出库审批出库审批出库审批出库审批出库审批出库审批',
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
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>出库审核处理</div>
          {this.props.disable ?
            <Row>
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
                  label="入库登记员"
                  hasFeedback
                >
                  <span>{initialData.register}</span>
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
                  label="说明"
                >
                  <span>{initialData.softwareDescription}</span>
                </FormItem>
              </Col>
            </Row> :
              <Row>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="处理人"
                  >
                    {getFieldDecorator('matingSoftware', {
                      rules: [
                        { message: '请输入处理人' },
                      ],
                    })(
                      <span>{initialData.handler}</span>
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="处理动作"
                  >
                    {getFieldDecorator('handleAction', {
                      rules: [
                        { message: '请输入处理人' },
                      ],
                    })(
                      <Radio.Group
                        onChange={this.RadioOnChange}
                        value={this.state.handleActionvalue}
                      >
                        <Radio value="通过">通过</Radio>
                        <Radio value="不通过">不通过</Radio>
                        <Radio value="分配任务">分配任务</Radio>
                      </Radio.Group>
                    )}
                  </FormItem>
                </Col>
                {this.state.handleActionvalue === '通过' &&
                  <Col span={12}>
                    <FormItem
                      {...formItemLayout}
                      label="选择出库登记员"
                    >
                      {getFieldDecorator('register', {
                        rules: [{ required: true, message: '请输入出库登记员' }],
                      })(
                        <Select>
                          <Option value="张三">张三</Option>
                          <Option value="李四">李四</Option>
                          <Option value="王五">王五</Option>
                          <Option value="其他">其他</Option></Select>
                      )}
                    </FormItem>
                  </Col>
                }
                {this.state.handleActionvalue === '分配任务' &&
                  <Col span={12}>
                    <FormItem
                      {...formItemLayout}
                      label="分配给"
                    >
                      {getFieldDecorator('distribution', {
                        rules: [{ required: true, message: '请输入入库登记员' }],
                      })(
                        <Select>
                          <Option value="张三">张三</Option>
                          <Option value="李四">李四</Option>
                          <Option value="王五">王五</Option>
                          <Option value="其他">其他</Option></Select>
                      )}
                    </FormItem>
                  </Col>
                }
                {this.state.handleActionvalue === '不通过' && ''}
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
                    {getFieldDecorator('softwareDescription', {
                      rules: [{ required: true, message: '请输入软件描述' }],
                    })(
                      <Input type="textarea" rows={10} />
                    )}
                  </FormItem>
                </Col>
              </Row>
          }
        </Form>
        <OutputHistoryButton step={2} />
      </div>
    );
  }
}

InputDetailFirst.propTypes = {
  form: PropTypes.object.isRequired,
  disable: PropTypes.bool.isRequired,
};
const WrapInputDetailFirst = Form.create()(InputDetailFirst);
export default WrapInputDetailFirst;
