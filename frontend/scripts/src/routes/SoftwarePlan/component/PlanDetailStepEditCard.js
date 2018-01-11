import React, { PropTypes } from 'react';
import { Timeline, Card, Button, Form, Icon, Input, Switch, DatePicker, Select } from 'antd';
// import PlanDetailStepEditCardEditState from './PlanDetailStepEditCardEditState';
import './SoftwarePlan.css';

const FormItem = Form.Item;
class PlanDetailStepEditCard extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.data);
    console.log(this.props.index);
    const editState = !this.props.data.type;
    this.state = {
      editButtonShow: 'none',
      borderShow: false,
      editState,
      typeName: '',
    };
  }
  handleMouseOver = () => {
    this.setState({ editButtonShow: 'block', borderShow: true });
  }
  handleMouseOut = () => {
    this.setState({ editButtonShow: 'none', borderShow: false });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const { data, index } = this.props;
    return (
      <Timeline.Item color={data.color} style={{ width: '80%', position: 'relative' }} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        <div className={this.state.borderShow ? 'PlanDetailStepEdit_border' : ''} />
        <div style={{ width: '80%', marginLeft: '5%' }} >
          {this.state.editState ?
            <div style={{ position: 'absolute', left: -180, zIndex: 2, float: 'right', fontSize: 16, fontWeight: 600 }}>
              <div>
                <span>阶段名称：</span> <br />
                <Input value={this.state.typeName} style={{ marginTop: 20, height: 40 }} />
              </div>
              <div className="PlanDetailStepEditCardEditState_btn" >
                <Button onClick={() => this.props.delete(index)}>取消</Button>
                <Button onClick={() => this.setState({ editState: false })}>确定</Button>
              </div>
            </div> :
              <div style={{ position: 'absolute', left: -180, zIndex: 2, float: 'right', fontSize: 16, fontWeight: 600 }}>
                <div>
                  <span>阶段名称：</span>
                  <span>{data.type}</span>
                </div>
                <div className="PlanDetailStepEdit_btn" style={{ display: this.state.editButtonShow }} >
                  <Button icon="edit" onClick={() => this.setState({ editState: true })}>编辑</Button> <br />
                  <Button icon="up" onClick={() => this.props.moveUp(index)} >上移</Button><br />
                  <Button icon="down" onClick={() => this.props.moveDown(index)}>下移</Button><br />
                  <Button icon="delete" onClick={() => this.props.delete(index)}>删除</Button><br />
                </div>
              </div>
          }
          {this.state.editState ?
            <Card bodyStyle={{ padding: 12, backgroundColor: '#f2f2f2' }}>
              <Form>
                <FormItem
                  {...formItemLayout}
                  label="阶段类型"
                  hasFeedback
                >
                  {getFieldDecorator('stageType', {
                    rules: [{
                      required: true, message: '请输入阶段类型',
                    }],
                  })(
                    <Input style={{ height: 40 }} />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="开始时间"
                  hasFeedback
                >
                  {getFieldDecorator('beginTime', {
                    rules: [{
                      required: true, message: '请选择开始时间',
                    }],
                  })(
                    <DatePicker style={{ height: 40 }} />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="结束时间"
                  hasFeedback
                >
                  {getFieldDecorator('endTime', {
                    rules: [{
                      required: true, message: '请选择结束时间',
                    }],
                  })(
                    <DatePicker style={{ height: 40 }} />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="阶段描述"
                  hasFeedback
                >
                  {getFieldDecorator('stageDescribe', {
                    rules: [{
                      required: true, message: '请输入阶段描述',
                    }],
                  })(
                    <Input style={{ height: 40 }} />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="处理人"
                  hasFeedback
                >
                  {getFieldDecorator('handler', {
                    rules: [{
                      required: true, message: '请选择处理人类别',
                    }],
                  })(
                    <Select style={{ height: 40 }}>
                      <Option value="登记员A类">登记员A类</Option>
                      <Option value="维护员B类">维护员B类</Option>
                      <Option value="审批员B类">审批员B类</Option>
                      <Option value="登记员C类">登记员C类</Option>
                      <Option value="审批员C类">审批员C类</Option>
                      <Option value="维护员D类">维护员D类</Option>
                      <Option value="审批员C类">审批员C类</Option>
                      <Option value="登记员D类">登记员D类</Option>
                    </Select>
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
            </Card> :
              <Card bodyStyle={{ padding: 12, backgroundColor: '#f2f2f2' }}>
                <div className="PlanDetailStep_items">阶段类型：{data.stageType}</div>
                <div className="PlanDetailStep_items">阶段开始时间：{data.starTime}</div>
                <div className="PlanDetailStep_items">阶段结束时间：{data.endTime}</div>
                <div className="PlanDetailStep_items">阶段描述：：{data.stageDescribe}</div>
                <div className="PlanDetailStep_items">处理人：{data.hanlder}</div>
                <div className="PlanDetailStep_items">是否提醒：{data.remind}</div>
              </Card>
          }
        </div>
      </Timeline.Item>
    );
  }
}
PlanDetailStepEditCard.propTypes = {
  data: PropTypes.object.isRequired,
  moveUp: PropTypes.func.isRequired,
  moveDown: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  delete: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
};

const WrapPlanDetailStepEditCard = Form.create()(PlanDetailStepEditCard);
export default WrapPlanDetailStepEditCard;
