import React from 'react';
import { Form, Button, Input, TreeSelect, Select, Row, Col } from 'antd';
import Data from './../Data/EditForm';
import TableList from './TableList';

const Option = Select.Option;
const FormItem = Form.Item;

const EditForm = Form.create()(
  (props) => {
    const {
      form,         // 表单属性 包含各种表单操控借口
      defaultValue, // 初始值
      handleSubmmit, // 提交数据
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
    const wrapperColLayout = {
      wrapperCol: { span: 16, offset: 6 },
    };

    return (
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
          {getFieldDecorator('tree', {
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
        <Row style={{ marginBottom: 24 }}>
          <Col span={16} offset={6}>
            <TableList summaryList={[]} type="edit" />
          </Col>
        </Row>

        <FormItem {...wrapperColLayout}>
          <Button
            onClick={() => {
              form.validateFields((err, values) => {
                if (!err) {
                  console.log('Received values of form: ', values);
                  handleSubmmit(values);
                }
              });
            }}
          >提交</Button>
        </FormItem>
      </Form>
    );
  }
);

const EditFormWithData = props => (<Data><EditForm {...props} /></Data>);
export default EditFormWithData;
