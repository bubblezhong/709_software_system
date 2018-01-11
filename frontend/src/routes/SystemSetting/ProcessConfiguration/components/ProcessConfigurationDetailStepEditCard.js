import React, { PropTypes } from 'react';
import { Timeline, Card, Button, Form, Icon, Input, Switch, Select } from 'antd';
// import PlanDetailStepEditCardEditState from './PlanDetailStepEditCardEditState';
// import './SoftwarePlan.css';

const FormItem = Form.Item;
class ProcessConfigurationDetailStepEditCard extends React.Component {
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
                <span>流程名称：</span> <br />
                <Input value={this.state.typeName} style={{ marginTop: 20, height: 40 }} />
              </div>
              <div className="PlanDetailStepEditCardEditState_btn" >
                <Button onClick={() => this.props.delete(index)}>取消</Button>
                <Button onClick={() => this.setState({ editState: false })}>确定</Button>
              </div>
            </div> :
              <div style={{ position: 'absolute', left: -180, zIndex: 2, float: 'right', fontSize: 16, fontWeight: 600 }}>
                <div>
                  <span>流程名称：</span>
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
                  label="步骤类型"
                >
                  {getFieldDecorator('stageType', {
                    rules: [{
                      required: true, message: '请输入步骤类型',
                    }],
                  })(
                    <Select>
                      <Option value="张三">张三</Option>
                      <Option value="李四">李四</Option>
                      <Option value="王五">王五</Option>
                      <Option value="张三1">张三1</Option>
                      <Option value="王五2">王五2</Option>
                    </Select>
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="步骤表单"
                  hasFeedback
                >
                  {getFieldDecorator('stepForm', {
                    rules: [{
                      required: true, message: '请选择步骤表单',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="角色"
                >
                  {getFieldDecorator('roler', {
                    rules: [{
                      required: true, message: '请选择角色',
                    }],
                  })(
                    <Select>
                      <Option value="张三">张三</Option>
                      <Option value="李四">李四</Option>
                      <Option value="王五">王五</Option>
                      <Option value="张三1">张三1</Option>
                      <Option value="王五2">王五2</Option>
                    </Select>
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="单位类型"
                >
                  {getFieldDecorator('unitType', {
                    rules: [{
                      required: true, message: '请选择单位类型',
                    }],
                  })(
                    <Select>
                      <Option value="张三">张三</Option>
                      <Option value="李四">李四</Option>
                      <Option value="王五">王五</Option>
                      <Option value="张三1">张三1</Option>
                      <Option value="王五2">王五2</Option>
                    </Select>
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="下一步处理人"
                >
                  {getFieldDecorator('handler', {
                    rules: [{
                      required: true, message: '请选择下一步处理人',
                    }],
                  })(
                    <Select>
                      <Option value="张三">张三</Option>
                      <Option value="李四">李四</Option>
                      <Option value="王五">王五</Option>
                      <Option value="张三1">张三1</Option>
                      <Option value="王五2">王五2</Option>
                    </Select>
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="多人处理"
                >
                  {getFieldDecorator('multiHandler', {
                    rules: [{ required: true, message: '请选择是否多人处理!' }],
                  })(
                    <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} />
                  )}
                </FormItem>
              </Form>
            </Card> :
              <Card bodyStyle={{ padding: 12, backgroundColor: '#f2f2f2' }}>
                <div className="PlanDetailStep_items">步骤类型：{data.stepType}</div>
                <div className="PlanDetailStep_items">步骤表单：{data.stepForm}</div>
                <div className="PlanDetailStep_items">角色：{data.role}</div>
                <div className="PlanDetailStep_items">单位类型：：{data.unitType}</div>
                <div className="PlanDetailStep_items">下一步处理人：{data.hanlder}</div>
                <div className="PlanDetailStep_items">多人处理：{data.multiHandle}</div>
              </Card>
          }
        </div>
      </Timeline.Item>
    );
  }
}
ProcessConfigurationDetailStepEditCard.propTypes = {
  data: PropTypes.object.isRequired,
  moveUp: PropTypes.func.isRequired,
  moveDown: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  delete: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
};

const WrapProcessConfigurationDetailStepEditCard =
  Form.create()(ProcessConfigurationDetailStepEditCard);
export default WrapProcessConfigurationDetailStepEditCard;
