import React, { PropTypes } from 'react';
import { Timeline, Card, Button, Input, Form, Icon, Switch } from 'antd';
import './SoftwarePlan.css';

const FormItem = Form.Item;
class PlanDetailStepEditCardEditState extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.data);
    console.log(this.props.index);
    this.state = {
      borderShow: false,
    };
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const { data } = this.props;
    return (
      <div style={{ width: '80%', marginLeft: '5%', position: 'relative' }} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        <div className="PlanDetailStepEdit_border" />
        <div style={{ width: '50%', marginLeft: '25%' }} >
          <Timeline.Item color={data.color}>
            <div style={{ position: 'absolute', left: -180, zIndex: 2, float: 'right', fontSize: 16, fontWeight: 600 }}>
              <div>
                <span>阶段名称：</span> <br />
                <Input style={{ marginTop: 20, height: 40 }} />
              </div>
              <div className="PlanDetailStepEditCardEditState_btn" >
                <Button>取消</Button>
                <Button>确定</Button>
              </div>
            </div>
            <Card bodyStyle={{ padding: 12, backgroundColor: '#f2f2f2' }}>
              <Form>
                <FormItem
                  {...formItemLayout}
                  label="阶段类型"
                  hasFeedback
                >
                  {getFieldDecorator('stageType', {
                    rules: [{
                      required: true, message: 'Please input your E-mail!',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="开始时间"
                  hasFeedback
                >
                  {getFieldDecorator('beginTime', {
                    rules: [{
                      required: true, message: 'Please input your number',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="结束时间"
                  hasFeedback
                >
                  {getFieldDecorator('endTime', {
                    rules: [{
                      required: true, message: 'Please input your number',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="阶段描述"
                  hasFeedback
                >
                  {getFieldDecorator('stageDescribe', {
                    rules: [{
                      required: true, message: 'Please input your number',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="处理人"
                  hasFeedback
                >
                  {getFieldDecorator('handler', {
                    rules: [{
                      required: true, message: 'Please input your number',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="是否提醒"
                >
                  {getFieldDecorator('state', {
                    rules: [{ required: true, message: 'Please select your habitual state!' }],
                  })(
                    <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} />
                  )}
                </FormItem>
              </Form>
            </Card>
          </Timeline.Item>
        </div>
      </div>
    );
  }
}
PlanDetailStepEditCardEditState.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  form: PropTypes.object.isRequired,
};
const WrapPlanDetailStepEditCardEditState = Form.create()(PlanDetailStepEditCardEditState);
export default WrapPlanDetailStepEditCardEditState;
