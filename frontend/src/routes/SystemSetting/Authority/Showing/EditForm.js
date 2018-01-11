import React, { PropTypes } from 'react';
import { Input, Form, Modal, Select } from 'antd';
import config from 'system-config';
import { asyncPost } from 'async-get-and-post';

const FormItem = Form.Item;
const Option = Select.Option;
class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  handleSubmit = () => {
    const { form, defaultValue, type, onCancel } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        let URL = '';
        if (type === 'add') {
          values.id = defaultValue.id;
          URL = '/setting/set_dictionary';
        } else if (type === 'add') {
          URL = '/setting/add_dictionary';
        }
        // console.log('values', values);
        asyncPost(`${config.host}${URL}`, values).then(() => {
          form.resetFields();
          onCancel();
        });
      }
    });
  }
  render() {
    const { form, visible, type, onCancel, defaultValue, select } = this.props;
    const { getFieldDecorator } = form;

    // console.log('defaultValue:', defaultValue);
    let title = '';
    if (type === 'edit') title = '编辑条目';
    if (type === 'add') title = '新建条目';

    return (
      <Modal
        visible={visible}
        title={title}
        okText="确认"
        onCancel={onCancel}
        onOk={this.handleSubmit}
      >
        <Form vertical>
          <FormItem label="所属模块">
            {getFieldDecorator('target_modules', {
              initialValue: defaultValue.target_modules ?
                            defaultValue.target_modules.toString() : null,
              rules: [{ required: true, message: '请选择所属模块!' }],
            })(
              <Select
                style={{ width: '100%' }}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="请选择所属模块！"
              >
                {select.target_modules.map((item, i) => (
                  <Option value={item.value.toString()} key={i.toString()}>{item.text}</Option>
               ))}
              </Select>
            )}
          </FormItem>
          <FormItem label="所属页面">
            {getFieldDecorator('target_page', {
              initialValue: defaultValue.target_page ?
                            defaultValue.target_page.toString() : null,
              rules: [{ required: true, message: '请选择所属页面!' }],
            })(
              <Select
                style={{ width: '100%' }}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder="请选择所属页面！"
              >
                {select.target_page.map((item, i) => (
                  <Option value={item.value.toString()} key={i.toString()}>{item.text}</Option>
               ))}
              </Select>
            )}
          </FormItem>

          <FormItem label="字段key">
            {getFieldDecorator('key', {
              initialValue: defaultValue.key ?
                            defaultValue.key.toString() : null,
              rules: [{ required: true, message: '请输入字段key!' }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem label="字段value信息值">
            {getFieldDecorator('value', {
              initialValue: defaultValue.value ?
                            defaultValue.value.toString() : null,
              rules: [{ required: true, message: '请输入字段value信息值!' }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem label="字段label信息值">
            {getFieldDecorator('label', {
              initialValue: defaultValue.label ?
                            defaultValue.label.toString() : null,
              rules: [{ required: true, message: '请输入字段label信息值!' }],
            })(
              <Input />
            )}
          </FormItem>

        </Form>
      </Modal>
    );
  }
}

const EditForm = Form.create()(Edit);

export default EditForm;


Edit.propTypes = {
  form: PropTypes.object,
  visible: PropTypes.bool,
  type: PropTypes.string,
  onCancel: PropTypes.func,
  defaultValue: PropTypes.object,
  select: PropTypes.object,
};
