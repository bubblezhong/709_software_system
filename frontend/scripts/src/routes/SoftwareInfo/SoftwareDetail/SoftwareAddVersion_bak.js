import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Form, Input, Select, Row, Radio, Upload, Icon, Col, Cascader } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
class SoftwareDetailEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialData: {
        options: [{
          value: '声呐定位指示软件',
          label: '声呐定位指示软件',
          children: [{
            value: '优化模块',
            label: '优化模块',
            children: [{
              value: 'v3.1.0',
              label: 'v3.1.0',
            }, {
              value: 'v3.1.1',
              label: 'v3.1.1',
            }, {
              value: 'v3.1.2',
              label: 'v3.1.2',
            }],
          }],
        }, {
          value: '远程目标定位指示软件',
          label: '远程目标定位指示软件',
          children: [{
            value: '总体模块',
            label: '总体模块',
            children: [{
              value: 'v2.0.1',
              label: 'v2.0.1',
            }, {
              value: 'v2.0.2',
              label: 'v2.0.2',
            }, {
              value: 'v2.0.3',
              label: 'v2.0.3',
            }],
          }],
        }],
      },
    };
  }
  render() {
    const { initialData } = this.state;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const formItemLayoutDesc = {
      labelCol: { span: 3 },
      wrapperCol: { span: 19 },
    };
    return (
      <Row>
        <div style={{ overflow: 'auto', marginBottom: 20 }}>
          <Link to="/main/SoftwareInfo/SoftwareInfoDetail/[object%20Object]" className="SoftwareInfoDetail_return">
            <Button style={{ width: 85, height: 30 }}>
              <span style={{ marginRight: 8 }}>&lt;</span>
              <span>返回</span>
            </Button>
          </Link>
          <Link to="/main/SoftwareInfo/SoftwareVersionDetail">
            <Button type="primary" className="SoftwareInfoDetail_reflash">完成</Button>
          </Link>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '5%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件版本基本信息</div>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="软件版本"
              >
                {getFieldDecorator('softwareVersion', {
                  rules: [{
                    required: true, message: '请输入软件名称!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="版本编号"
              >
                {getFieldDecorator('number', {
                  rules: [{
                    required: true, message: '请输入版本编号!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="软件类型"
              >
                {getFieldDecorator('softwareType', {
                  rules: [{ required: true, message: '请选择软件类型' }],
                })(
                  <Select>
                    <Option value="潜用软件">潜用软件</Option>
                    <Option value="船用软件">船用软件</Option>
                    <Option value="岸用软件">岸用软件</Option>
                    <Option value="04-yy中队指挥所">04-yy中队指挥所</Option>
                    <Option value="05-yy中队指挥所">05-yy中队指挥所</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={12} className="moduleRelation">
              <FormItem
                {...formItemLayout}
                label="软件模块关系"
              >
                {getFieldDecorator('moduleRelation', {
                  rules: [
                    { required: true, message: '请输入软件模块关系' },
                  ],
                })(
                  <Cascader placeholder=" " options={initialData.options} />
                  )}
              </FormItem>
            </Col>
          </Row>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '5%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>单位基本信息</div>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="研制单位"
              >
                {getFieldDecorator('developUnit', {
                  rules: [{ required: true, message: 'Please select your developUnit!' }],
                })(
                  <Select>
                    <Option value="01-xx中队指挥所">01-xx中队指挥所</Option>
                    <Option value="02-yy中队指挥所">02-yy中队指挥所</Option>
                    <Option value="03-yy中队指挥所">03-yy中队指挥所</Option>
                    <Option value="04-yy中队指挥所">04-yy中队指挥所</Option>
                    <Option value="05-yy中队指挥所">05-yy中队指挥所</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="军代表"
              >
                {getFieldDecorator('represent', {
                  rules: [{ required: true, message: 'Please select your developUnit!' }],
                })(
                  <Select>
                    <Option value="01-登记员A类">01-登记员A类</Option>
                    <Option value="02-维护员B类">02-维护员B类</Option>
                    <Option value="03-审批员B类">03-审批员B类</Option>
                    <Option value="04-登记员C类">04-登记员C类</Option>
                    <Option value="05-审批员C类">05-审批员C类</Option>
                    <Option value="06-维护员D类">06-维护员D类</Option>
                    <Option value="07-审批员C类">07-审批员C类</Option>
                    <Option value="08-登记员D类">08-登记员D类</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '5%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件描述信息</div>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="操作系统"
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
                label="典型安装位置"
              >
                {getFieldDecorator('select-multiple', {
                  rules: [
                    { required: true, message: '请输入典型安装位置!', type: 'array' },
                  ],
                })(
                  <Select mode="multiple">
                    <Option value="中控板">中控板</Option>
                    <Option value="交叉控制板">交叉控制板</Option>
                    <Option value="指挥中心">指挥中心</Option>
                    <Option value="其他">其他</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="存储位置"
              >
                {getFieldDecorator('savePos', {
                  rules: [{
                    required: true, message: '请输入存储位置',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="存储方式"
              >
                {getFieldDecorator('savePos', {
                  rules: [{
                    required: true, message: '请输入存储位置',
                  }],
                })(
                  <Radio.Group>
                    <Radio value="自持">自持</Radio>
                    <Radio value="网络存储">网络存储</Radio>
                  </Radio.Group>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="MD5校验"
              >
                <Input />
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="附件"
              >
                {getFieldDecorator('represent_install_pos', {
                  rules: [{ required: true, message: '请点击上传附件' }],
                })(
                  <Upload>
                    <Button>
                      <Icon type="upload" />点击上传
                    </Button>
                  </Upload>
                )}
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem
                {...formItemLayoutDesc}
                label="软件版本描述"
              >
                {getFieldDecorator('softwareDescription', {
                  rules: [{ required: true, message: '请输入软件描述' }],
                })(
                  <Input type="textarea" rows={10} />
                )}
              </FormItem>
            </Col>
          </Row>
        </Form>
        {this.state.value}
      </Row>
    );
  }
}

SoftwareDetailEdit.propTypes = {
  form: PropTypes.object.isRequired,
};
const WrapSoftwareDetailEdit = Form.create()(SoftwareDetailEdit);
export default WrapSoftwareDetailEdit;
