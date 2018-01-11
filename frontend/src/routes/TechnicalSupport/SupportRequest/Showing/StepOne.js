import React from 'react';
import { Button, Card, Col, Form, Input, Row, Select, TreeSelect } from 'antd';
import { brotherity, browserHistory } from 'react-router';
import Data from './../Data/FormData';
import TableList from './TableList';

const Option = Select.Option;
const FormItem = Form.Item;

const StepOne = Form.create()(
  (props) => {
    const {
      submmitRequest,
      form,         // 表单属性 包含各种表单操控接口
      defaultValue, // 初始值
      getSoftwareByTree, // function 通过谱系树获取软件列表
      softwareList = [], // array 软件列表
      tree = [],         // array 谱系图
      type,
    } = props;
    const {
      getFieldDecorator, // 初始化 表单子项
    } = form;
    // 布局样式
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 16 },
    };
    // console.log('softwareList', softwareList);
    const handleSubmit = (e) => {
      e.preventDefault();
      form.validateFields((err, values) => {
        if (!err) {
          submmitRequest(values);
          browserHistory.push('/main/TechnicalSupport/SupportRequest');
        }
      });
    };
    return (
      <Card>
        <Form onSubmit={handleSubmit}>
          <FormItem label="申请标题" {...formItemLayout}>
            {getFieldDecorator('title', {
              initialValue: defaultValue.title,
              rules: [{ required: true, message: '请输入申请标题!' }],
            })(
              <Input placeholder="请输入申请标题" />,
            )}
          </FormItem>
          <FormItem label="软件谱系" {...formItemLayout}>
            {getFieldDecorator('tree', {
              initialValue: defaultValue.tree,
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
              />,
            )}
          </FormItem>
          <FormItem label="申请软件" {...formItemLayout}>
            {getFieldDecorator('software', {
              initialValue: defaultValue.software,
              rules: [{ required: true, message: '请输入申请软件!' }],
            })(
              <Select placeholder="请选择申请软件">
                {softwareList.map(item => (
                  <Option value={item.key} key={item.key}>{item.name}</Option>
                ))}
              </Select>,
            )}
          </FormItem>
          <FormItem label="软件模块" {...formItemLayout}>
            {getFieldDecorator('moduleTree', {
              initialValue: defaultValue.tree_id ?
                defaultValue.tree_id.toString() : null,
            })(
              <TreeSelect
                style={{ width: '100%' }}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                // treeData={moduleTreeUse}
                placeholder="如有需要，请选择需要的软件模块"
                treeDefaultExpandAll
                multiple
                treeCheckable
              />,
            )}
          </FormItem>
          <FormItem label="申请原因" {...formItemLayout}>
            {getFieldDecorator('discription', {
              initialValue: defaultValue.discription,
              rules: [{ required: true, message: '请输入申请描述!' }],
            })(
              <Input type="textarea" placeholder="请输入申请描述" />,
            )}
          </FormItem>
          <TableList
            summaryList={defaultValue.summaryList}
          />
          <Row type="flex" justify="end" gutter="8">
            <Button.Group>
              {type === 1 && <Button type="primary">保存</Button>}
              {type === 1 && <Button type="primary">提交请求</Button>}
              {type === 1 && <Button
                type="primary"
                onClick={() => {
                  brotherity.push('main/SoftwareDeployment/DeploymentRequest');
                }}
              >取消操作</Button>}
            </Button.Group>
            <Col span="4" />
          </Row>
        </Form>
      </Card>
    );
  },
);

const StepOneWithData = props => (<Data><StepOne {...props} /></Data>);
export default StepOneWithData;
