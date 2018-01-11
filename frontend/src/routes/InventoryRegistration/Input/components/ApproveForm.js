import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import {
  Input,
  Form,
  Row,
  Col,
  Button,
  Modal,
} from 'antd';

const FormItem = Form.Item;
const confirm = Modal.confirm;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  /**
   * 批准／驳回申请
   * @param {number} value 1批准/0驳回
   * @return {null} null
   */
  handleClick(value) {
    console.log('value: ', value);
    let title = null;
    let content = null;
    switch (value) {
      case 1:
        title = '批准申请';
        content = '确认批准申请？';
        break;
      case 0:
        title = '驳回申请';
        content = '确认驳回申请？';
        break;
      default:
    }
    confirm({
      title,
      content,
      onOk() {
        console.log('OK');
        browserHistory.push('/main/InventoryRegistration/Input/Success');
      },
      onCancel() {},
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    // const formItemLayout2 = {
    //   labelCol: { span: 3 },
    //   wrapperCol: { span: 21 },
    // };
    const buttonItemLayout = {
      wrapperCol: { span: 24 },
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col span={24}>
            <h6>审批备注:</h6>
            <FormItem
              label=""
              hasFeedback
            >
              {getFieldDecorator('approve_note', {
                rules: [{ required: true, message: '请填审批备注备注' }],
              })(
                <Input type="textarea" rows={4} placeholder="请填审批备注备注" />
              )}
            </FormItem>
            <FormItem {...buttonItemLayout} style={{ float: 'right' }}>
              <Button
                type="primary"
                size="large"
                style={{ marginLeft: 10 }}
                onClick={() => this.handleClick(0)}
              >
                驳回申请
              </Button>
              <Button
                type="primary"
                size="large"
                style={{ marginLeft: 10 }}
                onClick={() => this.handleClick(1)}
              >
                批准申请
              </Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}


App.propTypes = {
  form: PropTypes.object.isRequired,
};

export default Form.create({})(App);
