import React, { PropTypes } from 'react';
import { Card, Form, Input, Row, Switch, TreeSelect } from 'antd';

const FormItem = Form.Item;

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    const submitble = this.props.item.active;
    this.state = {
      submitble,
    };
  }

  render() {
    const {
      form          // 表单操作
      , item      // 初始值
      , index
      , organizationTree,
    } = this.props;
    const { submitble } = this.state;
    const { getFieldDecorator } = form;

    const cardFormItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };

    return (
      <FormItem label={`节点${index + 1}信息`} labelCol={{ span: 4 }}>
        <Card bodyStyle={{ padding: 12 }} key={index}>

          <Row>
            <FormItem {...cardFormItemLayout} label="确认执行修改">
              {getFieldDecorator(`options[${index}].active`, {
                rules: [
                  {
                    validator: (rule, value, callback) => {
                      console.log('value', value);
                      this.setState({ submitble: value });
                      callback();
                    },
                  },
                ],
              })(
                <Switch defaultChecked={item.active} />,
              )}
            </FormItem>
          </Row>
          <Row>
            <FormItem {...cardFormItemLayout} label="节点id">
              {getFieldDecorator(`options[${index}].id`, {
                initialValue: item.id ?
                  item.id.toString() : null,
              })(
                <Input disabled />,
              )}
            </FormItem>
          </Row>
          <Row>
            <FormItem {...cardFormItemLayout} label="节点标题">
              {getFieldDecorator(`options[${index}].title`, {
                initialValue: item.title ?
                  item.title.toString() : null,
                rules: [{ required: submitble, message: '请输入节点标题!' }],
              })(
                <Input />,
              )}
            </FormItem>
          </Row>
          <Row>
            <FormItem {...cardFormItemLayout} label="节点描述">
              {getFieldDecorator(`options[${index}].description`, {
                initialValue: item.description ?
                  item.description.toString() : null,
                rules: [{ required: submitble, message: '请输入节点描述!' }],
              })(
                <Input type="textarea" autosize />,
              )}
            </FormItem>
          </Row>
          <Row>
            <FormItem {...cardFormItemLayout} label="节点相关单位">
              {getFieldDecorator(`options[${index}].organization`, {
                initialValue: item.organization ?
                  item.organization.map(Oitem => (Oitem.id.toString())) : [],
                rules: [{ required: submitble, message: '请输入节点描述!' }],
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
        </Card>
      </FormItem>
    );
  }
}

EditForm.propTypes = {
  form: PropTypes.object,
  item: PropTypes.object,
  organizationTree: PropTypes.arr,
  index: PropTypes.string,
};

const NewEditForm = Form.create({})(EditForm);

export default NewEditForm;
