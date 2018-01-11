import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import { Button, Form, Input, Row, Radio, Upload, Icon, Col } from 'antd';
// import InputDetailFirstRead from './InputDetailFirstRead';
// import InputDetailSecondRead from './InputDetailSecondRead';
import InputHistoryButton from './InputHistoryButton';
import CreateNewData from './../../../utils/CreateNewData';
import UnitRepresentSelect from './../../../utils/UnitRepresentSelect';

const FormItem = Form.Item;
class InputDetailThird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      processData: {},
    };
  }
  // componentWillMount() {
  //   console.log('processData3', this.props.processData);
  //   if (this.props.disable) {
  //     const tempData = {
  //       oddNum: this.props.processData.applicantInfo.oddNum,
  //       register: this.props.processData.reviewerInfo.registrantName,
  //       receiver: this.props.processData.acceptInfo.acceptName,
  //       stroageStyle: this.props.processData.applicantInfo.stroageStyle,
  //       saveInfo: this.props.processData.registrantInfo.saveInfo,
  //       getCode: this.props.processData.registrantInfo.password,
  //       MD5Sure: this.props.processData.applicantInfo.MD5,
  //       relativeFile: this.props.processData.registrantInfo.registrantFile,
  //       InfoExplain: this.props.processData.registrantInfo.infoRemark,
  //     };
  //     this.setState({ processData: tempData });
  //   }
  // }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('this.context.user', this.context, this.props.processData);
    this.props.form.validateFields((err, values) => {
      console.log(err, values);
      if (!err) {
        console.log('Received Newvalues of form: ', values);
        values.handleId = this.context.user.ID;
        values.registrantName = this.context.user.NAME;
        values.processInstanceId = this.props.processData.reviewerInfo.processInstanceId;
        values.accept = values.acceptName.key;
        values.acceptName = values.acceptName.label;
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
    // const { initialData } = this.state;
    console.log('processData', processData);
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
            <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件入库登记单</div>
            <Row>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="单号"
                >
                  <span>{processData.applicantInfo.oddNum}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="入库登记人"
                >
                  <span>{processData.reviewerInfo.registrantName}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="登记单位"
                >
                  <span>{processData.registeUnit}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="验收人"
                >
                  <span>{processData.registrantInfo.acceptName}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="存储方式"
                >
                  <span>{processData.applicantInfo.stroageStyle === '0' ? '自持' : '网络存储' }</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="存储信息"
                >
                  <span>{processData.registrantInfo.saveInfo}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="提取码"
                >
                  <span>{processData.registrantInfo.password}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="MD5确认"
                >
                  <span>{processData.applicantInfo.MD5}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="相关文件"
                >
                  <span>{processData.registrantInfo.registrantFile}</span>
                </FormItem>
              </Col>
              <Col span={24}>
                <FormItem
                  {...formItemLayoutDesc}
                  label="信息说明"
                >
                  <span>{processData.registrantInfo.infoRemark}</span>
                </FormItem>
              </Col>
            </Row>
          </Form> :
            <Form onSubmit={this.handleSubmit} style={{ width: '80%', marginLeft: '10%', minHeight: 500 }}>
              <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件入库登记单</div>
              <FormItem style={{ position: 'fixed', top: 250, left: 270 }}>
                <Button style={{ width: 120, height: 30 }} htmlType="submit">提交</Button>
              </FormItem>
              <Row>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="单号"
                  >
                    <span>{processData.applicantInfo.oddNum}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="入库登记人"
                  >
                    <span>{this.context.user.NAME}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="登记单位"
                  >
                    <span>{this.context.user.SU_NAME}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="选择验收人"
                  >
                    {getFieldDecorator('acceptName', {
                      rules: [{ required: true, message: '请选择验收人!' }],
                    })(
                      <UnitRepresentSelect labelInValue onChange={(val) => { console.log('onChange', val); }} />
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="存储方式"
                  >
                    {getFieldDecorator('saveType', {
                      rules: [{ required: true, message: '请选择存储方式!' }],
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
                  >
                    {getFieldDecorator('password', {
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
                  >
                    {getFieldDecorator('MD5', {
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
                    {getFieldDecorator('infoRemark', {
                      rules: [{ message: '请输入信息说明' }],
                    })(
                      <Input type="textarea" rows={10} />
                    )}
                  </FormItem>
                </Col>
              </Row>
            </Form>
        }
        <InputHistoryButton processData={this.props.processData} step={3} />
      </div>
    );
  }
}

InputDetailThird.propTypes = {
  disable: PropTypes.bool.isRequired,
  form: PropTypes.object.isRequired,
  createData: PropTypes.func.isRequired,
  processData: PropTypes.object.isRequired,
  next: PropTypes.func.isRequired,
};
InputDetailThird.contextTypes = {
  user: PropTypes.object,
};
const FormInputDetailThird = Form.create()(InputDetailThird);
const WrapInputDetailThird = CreateNewData('/api/software-in/registrant')(FormInputDetailThird);
export default WrapInputDetailThird;
