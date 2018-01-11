/* eslint-disable */
import React, { PropTypes } from 'react';
import { Button, Col, Collapse, DatePicker, Form, Input, Radio, Row, Select, Switch, TreeSelect } from 'antd';
import moment from 'moment';
// import OrganizationSelect from './OrganizationSelect';

const customPanelStyle = {
  // background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: '1px solid #d9d9d9',
  borderRadiusR: 4,
};


const FormItem = Form.Item;

class EditPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempNewNode: [],
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
  handleDelete = (e) => {
    // 删除节点
    console.log('ev--', e);
  };
  addNode = () => {
    const tempNewNode = this.state.tempNewNode;
    tempNewNode.push({ active: true });
    this.setState({ tempNewNode });
  };

  render() {
    const { options, form, defaultValue, organizationTree } = this.props;
    const { tempNewNode } = this.state;
    const { getFieldDecorator } = form;
    const status = [{
      key: 'color',
      value: 'green',
      label: '绿色',
    }, {
      key: 'color',
      value: 'red',
      label: '红色',
    }, {
      key: 'color',
      value: 'blue',
      label: '蓝色',
    }];
    const selectOptins = status.filter(item => (item.key === 'color')).map(item => (
      <Select.Option key={item.value}>{item.label}</Select.Option>
    ));
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    const cardFormItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };
    const optionsItem = options
      .sort((a, b) => (new Date(a.node_date) - new Date(b.node_date)))
      .concat(tempNewNode)
      .map((item = {}, index) => {
        return (
          <Collapse.Panel header={(
            <Row>
              <Col span={4}>{item.title}</Col>
              <Col span={4} offset={4}>
                {status.filter((ele) => (ele.value == item.color))[0].label}
              </Col>
              <Col offset={8} span={4}>
                <Button type="danger" onClick={this.handleDelete(item.id)}>删除</Button>
              </Col>
            </Row>
          )}
                          key={index}
                          style={customPanelStyle}
          >
            <Form>
              <Row>
                <FormItem {...cardFormItemLayout} label="确认执行修改">
                  {getFieldDecorator(`options[${index}].active`, {})(
                    <Switch defaultChecked={item.active} />,
                  )}
                </FormItem>
              </Row><Row>
              <FormItem {...cardFormItemLayout} label="节点id">
                {getFieldDecorator(`options[${index}].id`, {
                  initialValue: item.id ?
                    item.id.toString() : null,
                })(
                  <Input disabled />,
                )}
              </FormItem>
            </Row><Row>
              <FormItem {...cardFormItemLayout} label="节点颜色">
                {getFieldDecorator(`options[${index}].color`, {
                  initialValue: item.color ?
                    item.color.toString() : null,
                  rules: [{ required: true, message: '请输入节点颜色!' }],
                })(
                  <Select >
                    {selectOptins}
                  </Select>,
                )}
              </FormItem>
            </Row><Row>
              <FormItem {...cardFormItemLayout} label="节点标题">
                {getFieldDecorator(`options[${index}].title`, {
                  initialValue: item.title ?
                    item.title.toString() : null,
                  rules: [{ required: true, message: '请输入节点标题!' }],
                })(
                  <Input />,
                )}
              </FormItem>
            </Row><Row>
              <FormItem {...cardFormItemLayout} label="节点描述">
                {getFieldDecorator(`options[${index}].description`, {
                  initialValue: item.description ?
                    item.description.toString() : null,
                  rules: [{ required: true, message: '请输入节点描述!' }],
                })(
                  <Input type="textarea" autosize />,
                )}
              </FormItem>
            </Row><Row>
              <FormItem {...cardFormItemLayout} label="节点时间">
                {getFieldDecorator(`options[${index}].node_date`, {
                  initialValue: item.node_date ?
                    moment(item.node_date) : null,
                  rules: [{ required: true, message: '请输入节点描述!' }],
                })(
                  <DatePicker
                    showTime
                    format="YYYY-MM-DD"
                    placeholder="请选择"
                  />,
                )}
              </FormItem>
            </Row><Row>
              <FormItem {...cardFormItemLayout} label="节点相关单位">
                {getFieldDecorator(`options[${index}].organization`, {
                  initialValue: item.organization ?
                    item.organization.map(Oitem => (Oitem.id.toString())) : [],
                  rules: [{ required: true, message: '请输入节点描述!' }],
                })(
                  <TreeSelect
                    treeData={organizationTree}
                    multiple
                    showCheckedStrategy={TreeSelect.SHOW_PARENT}
                    searchPlaceholder="请选择"
                    allowClear
                  />,
                )}
              </FormItem>
            </Row>
              <Row>
                <Col offset={6} span={4}>
                  <Button type="primary">保存</Button>
                </Col>
                <Col span={4}>
                  <Button type="primary">提交</Button>
                </Col>
                <Col span={4}>
                  <Button type="primary">关闭</Button>
                </Col>
                <Col span={4}>
                  <Button type="primary">撤销</Button>
                </Col>
              </Row>
            </Form>
          </Collapse.Panel>
        );
      });
    return (
      <div style={{ overflow: 'auto', margin: 30 }}>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="计划标题"
          >
            {getFieldDecorator('title', {
              initialValue: defaultValue.title ?
                defaultValue.title.toString() : null,
              rules: [{ required: true, message: '请输入计划标题!' }],
            })(
              <Input placeholder="最大字数不超过100" />,
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="计划描述"
          >
            {getFieldDecorator('description', {
              initialValue: defaultValue.description ?
                defaultValue.description : null,
              rules: [{ required: true, message: '请输入计划描述!' }],
            })(
              <Input type="textarea" placeholder="最大字数不超过1000， 超过请添加附件描述。" autosize />,
            )}
          </FormItem>

          <FormItem {...formItemLayout} label="计划状态">
            {getFieldDecorator('states', {
              initialValue: parseInt(defaultValue.states, 10),
              rules: [{ required: true, message: '请选择该计划的状态!' }],
            })(
              <Radio.Group>
                <Radio value={0}>仅管理员可见</Radio>
                <Radio value={1}>已结束</Radio>
                <Radio value={2}>已发布</Radio>
              </Radio.Group>,
            )}
          </FormItem>

          <FormItem wrapperCol={{ span: 12, offset: 4 }}>
            <Button type="primary" htmlType="submit">提交修改</Button>
          </FormItem>

        </Form>
        {optionsItem.length > 0 &&
        <Row>
          <Col span={4}>
              <span
                style={{
                  float: 'right',
                  marginRight: 8,
                  marginTop: 12,
                }}
              >计划节点信息:</span>
          </Col>
          <Col span={20}>
            <Collapse bordered={false}>
              {optionsItem}
            </Collapse>
          </Col>
        </Row>
        }
        <Row>
          <Col offset={4}>
            <Button type="primary" onClick={this.addNode}>添加新节点</Button>
          </Col>
        </Row>
      </div>
    );
  }
}


EditPlan.propTypes = {
  form: PropTypes.object,
  organizationTree: PropTypes.array,
  options: PropTypes.array,
  defaultValue: PropTypes.object,
  dictionary: PropTypes.array,
};


const NewEditPlan = Form.create({})(EditPlan);

export default NewEditPlan;
