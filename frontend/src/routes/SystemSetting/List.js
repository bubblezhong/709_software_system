import React from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;
const InputGroup = Input.Group;

const ShowingSetting = Form.create()(class ShowingSetting extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        this.props.setSettings(values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 12 },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 6,
      },
    };
    // console.log(this.props.data);
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="系统名称"
        >
          {getFieldDecorator('title', {
            initialValue: this.props.data.title,
            rules: [{
              required: true, message: '请输入系统名称',
            }],
          })(
            <Input placeholder="系统名称配置" />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout} >
          <Button type="primary" htmlType="submit" size="large"> 修改 </Button>
        </FormItem>

      </Form>
    );
  }
});

export default ShowingSetting;
