import React, { Component, PropTypes } from 'react';
import { Col, DatePicker, Form, Input, Radio, Row, Select } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  componentWillMount() {
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    const registrationInfo = this.props.registrationInfo;
    const showFormType = this.props.showFormType;
    console.log('this.props: ', this.props);
    let nameOption = {
      initialValue: '',
      rules: [{
        required: true,
        message: '请填写软件名称',
      }],
    };
    let typeOption = {
      initialValue: '1',
      rules: [
        { required: true, message: '请选择软件类型' },
      ],
    };
    let usageOption = {
      initialValue: '',
      rules: [{
        required: false,
        message: '请填写软件功能用途说明',
      }],
    };
    let remarkOption = {
      initialValue: '',
      rules: [{
        required: false,
        message: '请填写软件备注信息',
      }],
    };
    let appendixOption = {
      initialValue: '',
      rules: [{
        required: false,
        message: '请填写软件附加信息',
      }],
    };
    let statusOption = {
      initialValue: 0,
      rules: [{
        required: true,
        message: '请选择软件状态',
      }],
    };
    if (showFormType === 'edit') {
      nameOption = {
        initialValue: registrationInfo.name,
        rules: [{
          required: true,
          message: '请填写软件名称',
        }],
      };
      typeOption = {
        initialValue: registrationInfo.type,
        rules: [
          { required: true, message: '请选择软件类型' },
        ],
      };
      usageOption = {
        initialValue: registrationInfo.usage,
        rules: [{
          required: false,
          message: '请填写软件功能用途说明',
        }],
      };
      remarkOption = {
        initialValue: registrationInfo.remark,
        rules: [{
          required: false,
          message: '请填写软件备注信息',
        }],
      };
      appendixOption = {
        initialValue: registrationInfo.appendix,
        rules: [{
          required: false,
          message: '请填写软件附加信息',
        }],
      };
      statusOption = {
        initialValue: registrationInfo.status,
        rules: [{
          required: true,
          message: '请选择软件状态',
        }],
      };
    }
    return (
      <Row>
        <Col span={12}>
          <FormItem
            {...formItemLayout}
            label="软件名称"
            hasFeedback
          >
            {getFieldDecorator('name', nameOption)(
              <Select placeholder="请选择软件名称">
                <Option key="1">软件1</Option>
                <Option key="2">软件2</Option>
                <Option key="3">软件3</Option>
              </Select>,
            )}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            {...formItemLayout}
            label="登记类型"
            hasFeedback
          >
            {getFieldDecorator('report_type', nameOption)(
              <Select placeholder="请选择登记类型">
                <Option key="1">日常记录登记</Option>
                <Option key="2">故障记录登记</Option>
              </Select>,
            )}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            {...formItemLayout}
            label="记录状态"
            hasFeedback
          >
            {getFieldDecorator('report_status', typeOption)(
              <Select placeholder="请选择记录状态">
                <Option key="1">草稿</Option>
                <Option key="2">未接收</Option>
                <Option key="3">已接收</Option>
                <Option key="4">待解决</Option>
                <Option key="5">已解决</Option>
              </Select>,
            )}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            {...formItemLayout}
            label="故障等级"
            hasFeedback
          >
            {getFieldDecorator('fault_level', typeOption)(
              <Select placeholder="请选择故障等级">
                <Option key="1">易用性</Option>
                <Option key="2">一般</Option>
                <Option key="3">严重</Option>
                <Option key="4">致命</Option>
              </Select>,
            )}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            {...formItemLayout}
            label="开机时间"
          >
            {getFieldDecorator('start_time', {
              rules: [{ type: 'object', required: true, message: '请选择开机时间' }],
            })(
              <DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
              />,
            )}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            {...formItemLayout}
            label="关机时间"
          >
            {getFieldDecorator('halt_time', {
              rules: [{ type: 'object', required: true, message: '请选择关机时间' }],
            })(
              <DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
              />,
            )}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            {...formItemLayout}
            label="故障时间"
          >
            {getFieldDecorator('fault_time', {
              rules: [{ type: 'object', required: true, message: '请选择故障时间' }],
            })(
              <DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
              />,
            )}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            {...formItemLayout}
            label="故障是否解决"
          >
            {getFieldDecorator('is_fault_resolved', statusOption)(
              <Radio.Group>
                <Radio value={0}>已解决</Radio>
                <Radio value={1}>未解决</Radio>
              </Radio.Group>,
            )}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            {...formItemLayout}
            label="故障描述"
            hasFeedback
          >
            {getFieldDecorator('fault_description', usageOption)(
              <Input
                type="textarea"
                rows={4}
                placeholder="请填写软件使用情况"
              />,
            )}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            {...formItemLayout}
            label="故障解决方法"
            hasFeedback
          >
            {getFieldDecorator('fault_solution', usageOption)(
              <Input
                type="textarea"
                rows={4}
                placeholder="请填写故障解决方法"
              />,
            )}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            {...formItemLayout}
            label="备注信息"
            hasFeedback
          >
            {getFieldDecorator('remark', remarkOption)(
              <Input
                type="textarea"
                rows={4}
                placeholder="请填写软件备注信息"
              />,
            )}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            {...formItemLayout}
            label="附加信息"
            hasFeedback
          >
            {getFieldDecorator('appendix', appendixOption)(
              <Input
                type="textarea"
                rows={4}
                placeholder="请填写软件附加信息"
              />,
            )}
          </FormItem>
        </Col>
      </Row>
    );
  }
}


RegistrationForm.propTypes = {
  form: PropTypes.object.isRequired,
  registrationInfo: PropTypes.object.isRequired,
  showFormType: PropTypes.string.isRequired,
};

export default Form.create({})(RegistrationForm);
