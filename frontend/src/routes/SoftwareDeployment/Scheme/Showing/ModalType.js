import React, { PropTypes } from 'react';
import { AutoComplete, Form, Icon, Input, Modal } from 'antd';

const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;

const FormItem = Form.Item;


const dataSource = [{
  title: '船载',
  children: [
    '船载一类',
    '船载二类',
  ],
}, {
  title: '岸用',
  children: [
    '岸用一类',
    '岸用二类',
  ],
}, {
  title: '车载',
  children: [
    '车载类',
  ],
}];

const options = dataSource.map(group =>
  <OptGroup
    key={group.title}
    label={group.title}
  >
    {group.children.map(opt =>
      <Option key={opt} value={opt}>
        {opt}
      </Option>)
    }
  </OptGroup>);

const ModalType = Form.create()(
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
              onOk(values.type, defaultValue.indexList);
              form.resetFields();
            }
          });
        }}
      >
        <Form>
          <FormItem label="软件类别" {...formItemLayout}>
            {getFieldDecorator('type', {
              initialValue: defaultValue.value,
              rules: [{ required: true, message: '请选择软件类别!' }],
            })(
              <AutoComplete
                className="certain-category-search"
                dropdownClassName="certain-category-search-dropdown"
                dropdownMatchSelectWidth={false}
                dropdownStyle={{ width: 300 }}
                size="large"
                style={{ width: '100%' }}
                dataSource={options}
                placeholder="input here"
                optionLabelProp="value"
              >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
              </AutoComplete>,
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  },
);

ModalType.propTypes = {
  visible: PropTypes.bool,
  data: PropTypes.array,
  defaultValue: PropTypes.object,
};


export default ModalType;
