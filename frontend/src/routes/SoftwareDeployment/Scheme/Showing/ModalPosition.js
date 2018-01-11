import React, { PropTypes } from 'react';
import { AutoComplete, Form, Icon, Input, Modal } from 'antd';

const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;

const FormItem = Form.Item;


const dataSource = [{
  title: '船载',
  children: [
    '船头',
    '船尾',
  ],
}, {
  title: '岸用',
  children: [
    '一号位置',
    '二号位置',
  ],
}, {
  title: '车载',
  children: [
    '导航系统',
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

ModalCategory.propTypes = {
  visible: PropTypes.bool,
  data: PropTypes.array,
  defaultValue: PropTypes.object,
};


export default ModalCategory;
