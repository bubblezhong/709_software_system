import React, { PropTypes } from 'react';
import { Form, Input, TreeSelect, Card, Select, Button, Row, Col } from 'antd';
import { brotherity } from 'react-router';
import Data from './../Data/StepOne';

const FormItem = Form.Item;

const StepOne = Form.create()(
  (props) => {
    const {
      form,
      defaultValue = {}, // 初始值
      tree = [],         // 谱系树
      getSoftware,       // 根据谱系ID获取软件列表
      software = [],     // 软件列表
      getModule,         // 根据软件ID获取模块树
      moduleTree = [],   // 模块树

      softwareList = [], // 后端初始化数据
      moduleList = [],   // 后端初始化数据
      type,              // 1: 使用部门 2:管理部门
    } = props;
    const { getFieldDecorator } = form;

    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 16 },
    };
    let softwareListUse = softwareList;
    if (software.length > 0) {
      softwareListUse = software;
    }
    let moduleTreeUse = moduleList;
    if (moduleTree.length > 0) {
      moduleTreeUse = moduleTree;
    }
    console.log('tree', tree);
    return (
      <Card>
        <Form>
          <FormItem label="申请标题" {...formItemLayout}>
            {getFieldDecorator('request_title', {
              initialValue: defaultValue.request_title,
              rules: [{ required: true, message: '请输入申请标题!' }],
            })(
              <Input placeholder="请输入申请标题" />
            )}
          </FormItem>
          <FormItem label="软件谱系" {...formItemLayout}>
            {getFieldDecorator('tree_id', {
              initialValue: defaultValue.tree_id ?
                defaultValue.tree_id.toString() : null,
              rules: [
                { required: true, message: '请选择谱系!' },
                {
                  validator: (rule, value, callback) => {
                    getSoftware(value);
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
            {getFieldDecorator('software_id', {
              initialValue: defaultValue.software_id ?
                defaultValue.software_id.toString() : null,
              rules: [
                { required: true, message: '请选择软件!' },
                {
                  validator: (rule, value, callback) => {
                    getModule(value);
                    callback();
                  },
                },
              ],
            })(
              <Select>
                {softwareListUse.map(item => (
                  <Select.Option
                    value={item.key ?
                    item.key.toString() : item.id.toString()}
                  >{item.name}</Select.Option>
                ))}
              </Select>
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
                treeData={moduleTreeUse}
                placeholder="如有需要，请选择需要的软件模块"
                treeDefaultExpandAll
                multiple
                treeCheckable
              />
            )}
          </FormItem>

          <FormItem label="申请原因" {...formItemLayout}>
            {getFieldDecorator('request_reason', {
              initialValue: defaultValue.request_reason,
              rules: [{ required: true, message: '请输入申请原因!' }],
            })(
              <Input type="textarea" />
            )}
          </FormItem>

          <FormItem>
            <Row type="flex" justify="end" gutter="8">
              <Button.Group>
                {type === 1 && <Button type="primary" >保存</Button>}
                {type === 1 && <Button type="primary" >提交请求</Button>}
                {type === 1 && <Button
                  type="primary"
                  onClick={() => {
                    brotherity.push('main/SoftwareDeployment/DeploymentRequest');
                  }}
                >取消操作</Button>}
              </Button.Group>

              <Col span="4" />
            </Row>
          </FormItem>

        </Form>
      </Card>
    );
  }
);

StepOne.propTypes = {
  // visible: PropTypes.bool,
  // data: PropTypes.array,
  defaultValue: PropTypes.object,
};

const StepOneWithData = props => (<Data {...props}><StepOne {...props} /></Data>);
export default StepOneWithData;
