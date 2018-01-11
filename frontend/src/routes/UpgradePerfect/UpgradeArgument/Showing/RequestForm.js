import React from 'react';
import { Form, Modal, Input, TreeSelect, Select } from 'antd';
import Data from './../Data/FormData';

const Option = Select.Option;
const FormItem = Form.Item;

const RequestForm = Form.create()(
  (props) => {
    const {
      visible,      // 控制显示
      onCancel,     // 关闭窗口回调
      onOk,         // 执行成功回调
      form,         // 表单属性 包含各种表单操控借口
      defaultValue, // 初始值
      title,        // 弹框标题
      getSoftwareByTree, // function 通过谱系树获取软件列表
      softwareList = [], // array 软件列表
      tree = [],         // array 谱系图
    } = props;
    const {
      getFieldDecorator, // 初始化 表单子项
    } = form;
    // 布局样式
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };
    console.log('softwareList', softwareList);
    return (
      <Modal
        visible={visible}
        title={title}
        okText="确认"
        onCancel={onCancel}
        onOk={onOk}
      >
        <Form>
          <FormItem label="申请标题" {...formItemLayout}>
            {getFieldDecorator('title', {
              initialValue: defaultValue.title,
              rules: [{ required: true, message: '请输入申请标题!' }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem label="申请软件所在谱系" {...formItemLayout}>
            {getFieldDecorator('module', {
              initialValue: defaultValue.module,
              rules: [
                { required: true, message: '请选择软件所在谱系!' },
                {
                  validator: (rule, value, callback) => {
                    getSoftwareByTree(value);
                    callback();
                  },
                },
              ],
            })(
              <TreeSelect
                style={{ width: '100%' }}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={tree}
                placeholder="请选择需要申请的软件所在谱系"
                treeDefaultExpandAll
              />
            )}
          </FormItem>
          <FormItem label="申请软件" {...formItemLayout}>
            {getFieldDecorator('software', {
              initialValue: defaultValue.software,
              rules: [{ required: true, message: '请输入申请软件!' }],
            })(
              <Select>
                {softwareList.map(item => (
                  <Option value={item.key} key={item.key}>{item.name}</Option>
                ))}
              </Select>
            )}
          </FormItem>
          <FormItem label="申请描述" {...formItemLayout}>
            {getFieldDecorator('discription', {
              initialValue: defaultValue.discription,
              rules: [{ required: true, message: '请输入申请描述!' }],
            })(
              <Input type="textarea" />
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
);

const RequestFormWithData = props => (<Data><RequestForm {...props} /></Data>);
export default RequestFormWithData;
