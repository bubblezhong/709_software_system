import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import { Button, Form, Input, Row, Radio, Upload, Icon, Col } from 'antd';
import InputHistoryButton from './InputHistoryButton';
import CreateNewData from './../../../utils/CreateNewData';
import UnitRepresentSelect from './../../../utils/UnitRepresentSelect';

const FormItem = Form.Item;
// const Option = Select.Option;
class InputDetailSecond extends React.Component {
  constructor(props) {
    super(props);
    let id;
    if (this.props.params.id) {
      id = this.props.params.id;
    }
    this.state = {
      id,
      handleActionvalue: '',
      showInputFirst: true,
      initialValue: {},
    };
  }
  // componentWillMount() {
  //   console.log('this.props.processData.reviewerName,', this.props.processData);
  //   if (this.props.disable) {
  //     const tempData = {
  //       handler: this.props.processData.reviewerInfo.reviewerName,
  //       operateAction: this.props.processData.reviewerInfo.status,
  //       register: this.props.processData.reviewerInfo.registrantName,
  //       file: this.props.processData.reviewerInfo.reviewFile,
  //       softwareDescription: this.props.processData.reviewerInfo.remark,
  //     };
  //     this.setState({ initialValue: tempData });
  //   }
  // }
  RadioOnChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({ handleActionvalue: e.target.value });
  }
  changeshow = () => {
    this.setState({ showInputFirst: false });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('this.context.user', this.context, this.context.user);
    this.props.form.validateFields((err, values) => {
      console.log(err, values);
      if (!err) {
        console.log('Received Newvalues of form: ', values);
        values.handleId = this.context.user.ID;
        values.handleName = this.context.user.NAME;
        values.processInstanceId = this.state.id;
        values.registrant = values.registrantName.key;
        values.registrantName = values.registrantName.label;
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
    const { processData } = this.props;
    // const { initialValue } = this.state;
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
            <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>入库审核处理</div>
            <Row>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="处理人"
                >
                  <span>{processData.reviewerInfo.reviewerName}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="处理动作"
                >
                  <span>{processData.reviewerInfo.status}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="入库登记员"
                  hasFeedback
                >
                  <span>{processData.reviewerInfo.registrantName}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="相关文件"
                  hasFeedback
                >
                  <span>{processData.reviewerInfo.reviewFile}</span>
                </FormItem>
              </Col>
              <Col span={24}>
                <FormItem
                  {...formItemLayoutDesc}
                  label="说明"
                >
                  <span>{processData.reviewerInfo.remark}</span>
                </FormItem>
              </Col>
            </Row>
          </Form> :
            <Form onSubmit={this.handleSubmit} style={{ width: '80%', marginLeft: '10%', minHeight: 500 }}>
              <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>入库审核处理</div>
              <FormItem style={{ position: 'fixed', top: 250, left: 270 }}>
                <Button style={{ width: 120, height: 30 }} htmlType="submit">提交</Button>
              </FormItem>
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
                      <span>{this.context.user.NAME}</span>
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="处理动作"
                  >
                    {getFieldDecorator('status', {
                      rules: [
                        { required: true, message: '请选择处理动作' },
                      ],
                    })(
                      <Radio.Group
                        onChange={this.RadioOnChange}
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
                      label="选择入库登记员"
                    >
                      {getFieldDecorator('registrantName', {
                        rules: [{ required: true, message: '请输入入库登记员' }],
                      })(
                        <UnitRepresentSelect labelInValue onChange={(val) => { console.log('onChange', val); }} />
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
                        <UnitRepresentSelect labelInValue onChange={(val) => { console.log('onChange', val); }} />
                      )}
                    </FormItem>
                  </Col>
                }
                {this.state.handleActionvalue === '不通过' && ''}
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="相关文件"
                  >
                    {getFieldDecorator('reviewFile', {
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
                    label="说明"
                  >
                    {getFieldDecorator('remark', {
                      rules: [{ message: '请输入相关描述' }],
                    })(
                      <Input type="textarea" rows={10} />
                    )}
                  </FormItem>
                </Col>
              </Row>
            </Form>
        }
        <InputHistoryButton processData={this.props.processData} step={2} />
      </div>
    );
  }
}

InputDetailSecond.propTypes = {
  params: PropTypes.object.isRequired,
  disable: PropTypes.bool.isRequired,
  form: PropTypes.object.isRequired,
  createData: PropTypes.func.isRequired,
  processData: PropTypes.object.isRequired,
  next: PropTypes.func.isRequired,
};
InputDetailSecond.contextTypes = {
  user: PropTypes.object,
};
const FormInputDetailSecond = Form.create()(InputDetailSecond);
const WrapInputDetailSecond = CreateNewData('/api/software-in/review')(FormInputDetailSecond);
export default WrapInputDetailSecond;
