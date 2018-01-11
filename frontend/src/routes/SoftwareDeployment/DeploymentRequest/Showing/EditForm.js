import React, { PropTypes } from 'react';
import { Modal, Form, Input, Button, TreeSelect } from 'antd';

const FormItem = Form.Item;

const EditForm = Form.create()(
  (props) => {
    const { visible, onCancel, onOk, form, defaultValue = {}, title,
      softwareTree = [], getData, moduleTree = [] } = props;
    const { getFieldDecorator } = form;
    if (defaultValue.software_id && moduleTree.length === 0) {
      getData(defaultValue.software_id); // 初始化
    }

    return (
      <Modal
        visible={visible}
        title={title}
        onCancel={onCancel}
        footer={[
          <Button
            key="back"
            size="large"
            onClick={() => {
              form.resetFields();
              onCancel();
            }}
          >取消</Button>,
          <Button
            key="save"
            type="primary"
            size="large"
            onClick={() => {
              form.validateFields((err, values) => {
                if (!err) {
                  if (defaultValue.id) values.id = defaultValue.id;
                  values.states = 0; // 仅保存
                  onOk(values);
                  form.resetFields();
                }
              });
            }}
          >
            保存
          </Button>,
          <Button
            key="submit"
            type="primary"
            size="large"
            onClick={() => {
              form.validateFields((err, values) => {
                if (!err) {
                  if (defaultValue.id) values.id = defaultValue.id;
                  values.states = 1; // 上报的信息
                  onOk(values);
                  form.resetFields();
                }
              });
            }}
          >
            上报
          </Button>,
        ]}
      >
        <Form vertical>
          <FormItem label="申请标题">
            {getFieldDecorator('request_title', {
              initialValue: defaultValue.request_title,
              rules: [{ required: true, message: '请输入申请标题!' }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem label="申请软件">
            {getFieldDecorator('software_id', {
              initialValue: defaultValue.software_id ? `software_${defaultValue.software_id}` : null,
              rules: [
                { required: true, message: '请选择申请软件!' },
                {
                  validator: (rule, value, callback) => {
                    console.log('value', value);
                    if (value && value.split('_')[0] === 'software') {
                      callback();
                      getData(value.split('_')[1]);
                      return;
                    }
                    callback('请选择软件!');
                  },
                },
              ],
            })(
              <TreeSelect
                style={{ width: '100%' }}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={softwareTree}
                placeholder="请选择需要申请的软件"
                treeDefaultExpandAll
              />
            )}
          </FormItem>

          <FormItem label="申请原因">
            {getFieldDecorator('request_reason', {
              initialValue: defaultValue.request_reason,
              rules: [{ required: true, message: '请输入申请原因!' }],
            })(
              <Input type="textarea" />
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
);

EditForm.propTypes = {
  visible: PropTypes.bool,
  data: PropTypes.array,
  defaultValue: PropTypes.object,
};


export default EditForm;
