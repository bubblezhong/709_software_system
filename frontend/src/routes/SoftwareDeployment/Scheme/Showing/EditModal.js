import React, { PropTypes } from 'react';
import { Card, Col, Form, Input, Modal, Radio, Row, TreeSelect } from 'antd';

const FormItem = Form.Item;

const EditModal = Form.create()(
  (props) => {
    const {
      visible,  //  控制是否显示
      onCancel, //  关闭时的回调
      onOk,     //  成功时的回调
      form,     //  Form 操作属性
      defaultValue = {
        group: [],
      }, //  初始值
      title,             //  弹框标题
      softwareTree = [], //  软件树
      organizationTree = [], //  单位树
      getModule,             //  根据软件树ID 获取 moduleTree 的 function
      moduleTree = [],       //  模块树
    } = props;
    const { getFieldDecorator } = form;
    // if (defaultValue.software_id && moduleTree.length === 0) {
    //   getModuleTree(defaultValue.software_id); // 初始化
    // }
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };
    const softwareInCard = (arr, index) => {
      return arr.map((item, softIndex) => {
        const result = (
          <FormItem label={`安装软件 ${softIndex + 1}`} {...formItemLayout}>
            {getFieldDecorator(`group[${index}].software[${softIndex}]`, {
              initialValue: item.id,
              rules: [{ required: true, message: '请选择安装的软件!' },
                {
                  validator: (rule, value, callback) => {
                    console.log('value', value);
                    if (value && value.split('_')[0] === 'software') {
                      callback();
                      getModule(value.split('_')[1]);
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
              />,
            )}
          </FormItem>
        );
        return result;
      });
    };
    const itemCard = defaultValue.group.map((groupItem, index) => {
      return (
        <Row>
          <Col span="6">
            <span style={{ float: 'right', marginRight: 8 }}>{`单位分组 ${index}:`}</span>
          </Col>
          <Col span="16">
            <Card bodyStyle={{ padding: 12 }}>
              <FormItem label={`单位分组 ${index + 1}`} {...formItemLayout}>
                {getFieldDecorator(`group[${index}].organization`, {
                  initialValue: groupItem.organization ?
                    groupItem.organization.map(Oitem => (Oitem.id.toString())) : [],
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
              {softwareInCard(groupItem.software, index)}
            </Card>
          </Col>
        </Row>
      );
    });
    return (
      <Modal
        visible={visible}
        title={title}
        width="800"
        okText="确认"
        onCancel={() => {
          form.resetFields();
          onCancel();
        }}
        onOk={() => {
          form.validateFields((err, values) => {
            if (!err) {
              if (defaultValue.id) values.id = defaultValue.id;
              values.module_list = JSON.stringify(values.module_list);
              console.log('submit:', values);
              onOk(values);
              form.resetFields();
            }
          });
        }}
      >
        <Form>
          <FormItem label="单位类别" {...formItemLayout}>
            {getFieldDecorator('category', {
              initialValue: defaultValue.category,
              rules: [{ required: true, message: '请输入单位类别!' }],
            })(
              <Input />,
            )}
          </FormItem>

          {itemCard}

          <FormItem label="模块列表">
            {getFieldDecorator('module_list', {
              initialValue: defaultValue.module_list ?
                JSON.parse(defaultValue.module_list).map(item => (item.toString())) : [],
              rules: [
                { required: true, message: '请选择申请软件对应模块!' },
              ],
            })(
              <TreeSelect
                style={{ width: '100%' }}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={moduleTree}
                treeCheckable
                multiple
                placeholder="请选择需要的模块"
                treeDefaultExpandAll
              />,
            )}
          </FormItem>

          <FormItem label="申请原因">
            {getFieldDecorator('request_reason', {
              initialValue: defaultValue.request_reason,
              rules: [{ required: true, message: '请输入申请原因!' }],
            })(
              <Input type="textarea" />,
            )}
          </FormItem>
          <FormItem >
            {getFieldDecorator('states', {
              initialValue: defaultValue.states ? parseInt(defaultValue.states, 10) : 0,
            })(
              <Radio.Group>
                <Radio value={0}>仅保存</Radio>
                <Radio value={1}>保存并上报</Radio>
              </Radio.Group>,
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  },
);

EditModal.propTypes = {
  visible: PropTypes.bool,
  data: PropTypes.array,
  defaultValue: PropTypes.object,
};


export default EditModal;
