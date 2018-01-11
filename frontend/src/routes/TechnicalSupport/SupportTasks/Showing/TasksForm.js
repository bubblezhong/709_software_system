import React, { PropTypes } from 'react';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import { browserHistory } from 'react-router';
import Data from '../Data/TaskData';

const FormItem = Form.Item;
const Option = Select.Option;

class PlanForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // tempNewNode: [],
    };
  }

  componentWillUnmount = () => {
    const { form } = this.props;
    form.resetFields();
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        values.options = values.options.filter(item => (item.active));
        console.log('发送编辑信息: ', values);
      } else {
        console.log('[err]', err);
      }
    });
  };
  // addNode = () => {
  //   const tempNewNode = this.state.tempNewNode;
  //   tempNewNode.push({ active: true });
  //   this.setState({ tempNewNode });
  // }
  render() {
    const {
      form,
      defaultValue = {}, // 初始值
      params,
    } = this.props;
    const {
      getFieldDecorator,
    } = form;

    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 15 },
    };

    return (
      <div style={{ overflow: 'auto', margin: 30 }}>
        <Button
          onClick={() => {
            browserHistory.push(`/main/TechnicalSupport/SupportTasks/${params.id}/Tasks`);
          }
          }
        >返回列表</Button>
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="任务标题">
            {getFieldDecorator('title', {
              initialValue: defaultValue.title ?
                defaultValue.title.toString() : null,
              rules: [{ required: true, message: '请输入任务标题!' }],
            })(
              <Input placeholder="请输入任务标题" />,
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="任务软件">
            {getFieldDecorator('software', {
              initialValue: defaultValue.software ?
                defaultValue.software.toString() : null,
              rules: [{ required: true, message: '请输入任务软件!' }],
            })(
              <Input placeholder="请输入任务软件" />,
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="任务时间">
            {getFieldDecorator('create_time', {
              initialValue: defaultValue.create_time ?
                defaultValue.create_time.toString() : null,
              rules: [{ required: true, message: '请输入任务时间!' }],
            })(
              <Input placeholder="请输入任务时间" />,
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="计划描述">
            {getFieldDecorator('description', {
              initialValue: defaultValue.description ?
                defaultValue.description : null,
              rules: [{ required: true, message: '请输入计划描述!' }],
            })(
              <Input type="textarea" placeholder="请输入计划描述，最大字数不超过1000。" autosize />,
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="任务状态">
            {getFieldDecorator('status', {
              initialValue: defaultValue.status,
              rules: [{ required: true, message: '请选择任务状态!' }],
            })(
              <Select placeholder="请输入任务状态">
                <Option value={0}>已保存</Option>
                <Option value={1}>已生成任务</Option>
                <Option value={2}>任务已下发</Option>
              </Select>,
            )}
          </FormItem>
          <Row>
            <Col offset={4}>
              <Button type="primary" style={{ marginRight: 20 }}>保存</Button>
              <Button type="primary">生成任务</Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}


PlanForm.propTypes = {
  params: PropTypes.object,
  form: PropTypes.object,
  defaultValue: PropTypes.object,
};


const FormShow = Form.create({})(PlanForm);
const PlanFormData = props => (<Data {...props}><FormShow {...props} /></Data>);
export default PlanFormData;
