import React, { PropTypes, Component } from 'react';
import { Form, Input, TreeSelect, Select, Button, Row, Col, Card } from 'antd';
import Data from './../Data/FormData';

const Option = Select.Option;
const FormItem = Form.Item;

class RequestForm extends Component {
  state = {
    tempList: [1, 2, 3, 4],
  }
  createItem = (item, index) => {
    return (
      <Row style={{ marginBottom: 24 }}>
        <Col offset={6} span="16">
          <Card
            key={index}
            title={`关联请求 ${index + 1}`}
            extra={<a href="#s">取消关联</a>}
          >
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
          </Card>
        </Col>
      </Row>
    );
  }
  render() {
    const {
      form,         // 表单属性 包含各种表单操控借口
      defaultValue, // 初始值
      getSoftwareByTree, // function 通过谱系树获取软件列表
      softwareList = [], // array 软件列表
      tree = [],         // array 谱系图
    } = this.props;
    const {
      getFieldDecorator, // 初始化 表单子项
    } = form;
    const {
      tempList,
    } = this.state;
    // 布局样式
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };
    console.log('softwareList', softwareList);
    return (
      <Form>
        <FormItem label="汇总标题" {...formItemLayout}>
          {getFieldDecorator('title', {
            initialValue: defaultValue.title,
            rules: [{ required: true, message: '请输入汇总标题!' }],
          })(
            <Input placeholder="请输入需要汇总标题" />
          )}
        </FormItem>
        <FormItem label="保障软件所在谱系" {...formItemLayout}>
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
              placeholder="请选择需要申请保障的软件所在谱系"
              treeDefaultExpandAll
            />
          )}
        </FormItem>
        <FormItem label="保障软件" {...formItemLayout}>
          {getFieldDecorator('software', {
            initialValue: defaultValue.software,
            rules: [{ required: true, message: '请输入保障软件!' }],
          })(
            <Select placeholder="请选择需要保障的软件" >
              {softwareList.map(item => (
                <Option value={item.key} key={item.key}>{item.name}</Option>
              ))}
            </Select>
          )}
        </FormItem>
        <FormItem label="汇总描述" {...formItemLayout}>
          {getFieldDecorator('discription', {
            initialValue: defaultValue.discription,
            rules: [{ required: true, message: '请输入申请描述!' }],
          })(
            <Input type="textarea" placeholder="请输入需要汇总描述" />
          )}
        </FormItem>
        {tempList.length > 0 &&
          tempList.map(this.createItem)
        }
        <Row>
          <Col offset={6}>
            <Button
              type="primary"
            >添加保障请求</Button>
            <Button
              style={{ marginLeft: 16 }}
              type="primary"
            >保存</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

RequestForm.propTypes = {
  form: PropTypes.object,
  defaultValue: PropTypes.object,
  getSoftwareByTree: PropTypes.func,
  softwareList: PropTypes.array,
  tree: PropTypes.array,
};

const RequestFormForm = Form.create()(RequestForm);
const RequestFormWithData = props => (<Data><RequestFormForm {...props} /></Data>);
export default RequestFormWithData;
