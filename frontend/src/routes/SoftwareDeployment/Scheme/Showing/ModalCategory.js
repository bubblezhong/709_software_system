import React, { PropTypes } from 'react';
import { Form, Input, Modal } from 'antd';

const FormItem = Form.Item;

const ModalCategory = Form.create()(
  (props) => {
    const {
      defaultValue,
      visible,
      title,
      form,
      onOk,
      onCancel,
    } = props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };
    return (
      <Modal
        visible={visible}
        title={title}
        width="400"
        okText="确认"
        onCancel={() => {
          form.resetFields();
          onCancel();
        }}
        onOk={() => {
          form.validateFields((err, values) => {
            if (!err) {
              onOk(values.category, defaultValue.indexList);
              form.resetFields();
            }
          });
        }}
      >
        <Form>
          <FormItem label="单位类别" {...formItemLayout}>
            {getFieldDecorator('category', {
              initialValue: defaultValue.value,
              rules: [{ required: true, message: '请输入单位类别!' }],
            })(
              <Input />,
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  },
);

ModalCategory.propTypes = {
  visible: PropTypes.bool,
  data: PropTypes.array,
  defaultValue: PropTypes.object,
};


export default ModalCategory;
