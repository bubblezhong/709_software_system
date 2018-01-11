import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Form, Input, Cascader, Switch, Icon, Row, Col, Select } from 'antd';

const FormItem = Form.Item;
class ModuleDetailEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { type: '谱系名称:', value: '参数测试软件' },
        { type: '编号:', value: '02' },
        { type: '上级ID:', value: '01-应用软件' },
        { type: '状态:', value: '已激活' },
        { type: '创建人:', value: '张三' },
        { type: '创建时间:', value: '2017/05/01 11:01' },
      ],
    };
  }
  render() {
    const residences = [{
      value: '应用软件',
      label: '应用软件',
      children: [{
        value: '参数测量软件',
        label: '参数测量软件',
        children: [{
          value: '定位软件',
          label: '定位软件',
        }],
      }],
    }, {
      value: '向下定位软件',
      label: '向下定位软件',
      children: [{
        value: '深度测量软件',
        label: '深度测量软件',
        children: [{
          value: '扫描软件',
          label: '扫描软件',
        }],
      }],
    }];
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <div>
        <div style={{ overflow: 'hidden', marginBottom: 20 }}>
          <Link to="/main/SoftwareInfo/Category" className="MouduleDetail_return">
            <Button style={{ width: 85, height: 30 }}>
              <span style={{ marginRight: 8 }}>&lt;</span>
              <span>返回</span>
            </Button>
          </Link>
          <Link to="/main/SoftwareInfo/ModuleDelete">
            <Button type="primary" className="MouduleDetail_reflash">取消</Button>
          </Link>
          <Link to="/main/SoftwareInfo/Category">
            <Button type="primary" className="MouduleDetail_reflash">保存</Button>
          </Link>
        </div>
        <Form>
          <div className="MouduleDetailEdit_container_title" >
            <h2>新增单元基本信息</h2>
          </div>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="软件名称"
                hasFeedback
              >
                {getFieldDecorator('softwarename', {
                  rules: [{
                    required: true, message: 'Please input your E-mail!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="单元名称"
                hasFeedback
              >
                {getFieldDecorator('unitname', {
                  rules: [{
                    required: true, message: 'Please input your E-mail!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="编号"
                hasFeedback
              >
                {getFieldDecorator('number', {
                  rules: [{
                    required: true, message: 'Please input your number',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="上级单元"
              >
                {getFieldDecorator('ancestary', {
                  rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
                })(
                  <Cascader options={residences} placeholder="选择软件谱系ID" />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="操作系统"
                hasFeedback
              >
                {getFieldDecorator('OperateSystem', {
                  rules: [{ required: true, message: '请输入典型操作系统！' }],
                })(
                  <Select>
                    <Option value="radhat">radhat</Option>
                    <Option value="linux">linux</Option>
                    <Option value="centOS">centOS</Option>
                    <Option value="Windows">Windows</Option>
                    <Option value="塞班">塞班</Option>
                    <Option value="Android">Android</Option>
                    <Option value="ubuntu">ubuntu</Option>
                    <Option value="其他">其他</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="状态"
              >
                {getFieldDecorator('state', {
                  rules: [{ required: true, message: 'Please select your habitual state!' }],
                })(
                  <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} />
                )}
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
ModuleDetailEdit.propTypes = {
  form: PropTypes.object.isRequired,
};
const WrapModuleDetailEdit = Form.create()(ModuleDetailEdit);
export default WrapModuleDetailEdit;

