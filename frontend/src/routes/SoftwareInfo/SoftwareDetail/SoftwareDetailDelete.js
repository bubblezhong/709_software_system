import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Form, Input, Cascader, Select, Row, Radio, Upload, Icon } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
class SoftwareDetailDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
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
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    return (
      <div>
        <div style={{ overflow: 'auto', marginBottom: 20 }}>
          <Link to="/main/SoftwareInfo/SoftwareDetail" className="SoftwareInfoDetail_return">
            <span>&lt;</span>
            <span>返回</span>
          </Link>
          <Link to="/main/SoftwareInfo/SoftwareInfoDetail/SoftwareDetailEdit">
            <Button type="primary" className="SoftwareInfoDetail_reflash">完成</Button>
          </Link>
        </div>
        <div>
          <Form onSubmit={this.handleSubmit}>
            <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '5%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件信息</div>
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
            <FormItem
              {...formItemLayout}
              label="编号"
              hasFeedback
            >
              {getFieldDecorator('number', {
                rules: [{
                  required: true, message: 'Please input your password!',
                }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="谱系"
            >
              {getFieldDecorator('ancestary', {
                initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
              })(
                <Cascader options={residences} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="研制单位"
              hasFeedback
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
            <FormItem
              {...formItemLayout}
              label="军代表"
              hasFeedback
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
            <FormItem
              {...formItemLayout}
              label="操作系统"
              hasFeedback
            >
              {getFieldDecorator('OperateSystem', {
                rules: [{ required: true, message: 'Please select your developUnit!' }],
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
            <FormItem
              {...formItemLayout}
              label="典型安装位置"
            >
              {getFieldDecorator('select-multiple', {
                rules: [
                  { required: true, message: 'Please select your favourite colors!', type: 'array' },
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
            <FormItem
              {...formItemLayout}
              label="软件模块关系"
            >
              {getFieldDecorator('moduleRelation', {
                rules: [
                  { required: true, message: 'Please select your favourite colors!', type: 'array' },
                ],
              })(
                <Select mode="multiple">
                  <Option value="远程目标判断软件">远程目标判断软件</Option>
                  <Option value="优化模块">优化模块</Option>
                  <Option value="目标指示模块">目标指示模块</Option>
                  <Option value="总体模块">总体模块</Option>
                  <Option value="声呐控制">声呐控制</Option>
                  <Option value="策略生成">策略生成</Option>
                  <Option value="定位计算">定位计算</Option>
                </Select>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="配套软件"
            >
              {getFieldDecorator('matingSoftware', {
                rules: [
                  { required: true, message: 'Please select your favourite colors!', type: 'array' },
                ],
              })(
                <Select mode="multiple">
                  <Option value="定位软件">定位软件</Option>
                  <Option value="指示软件">指示软件</Option>
                  <Option value="导航软件">导航软件</Option>
                  <Option value="引导软件">引导软件</Option>
                  <Option value="扫描软件">扫描软件</Option>
                  <Option value="测试软件">测试软件</Option>
                  <Option value="航速判读软件">航速判读软件</Option>
                </Select>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="软件描述"
            >
              {getFieldDecorator('softwareDescription', {
                rules: [{ required: true, message: 'Please input website!' }],
              })(
                <Input type="textarea" rows={10} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="存储方式"
            >
              <Row gutter={8}>
                <Radio.Group>
                  <Radio value="自持">自持</Radio>
                  <Radio value="网络存储">网络存储</Radio>
                </Radio.Group>
              </Row>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="存储位置"
              hasFeedback
            >
              {getFieldDecorator('savePos', {
                rules: [{
                  required: true, message: 'Please input your password!',
                }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="典型安装位置"
              hasFeedback
            >
              {getFieldDecorator('represent_install_pos', {
                rules: [{ required: true, message: 'Please select your developUnit!' }],
              })(
                <Select>
                  <Option value="中控板">中控板</Option>
                  <Option value="交叉控制板">交叉控制板</Option>
                  <Option value="指挥中心">指挥中心</Option>
                  <Option value="其他">其他</Option></Select>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="附件"
              hasFeedback
            >
              {getFieldDecorator('represent_install_pos', {
                rules: [{ required: true, message: 'Please select your developUnit!' }],
              })(
                <Upload>
                  <Button>
                    <Icon type="upload" /> Click to Upload
                  </Button>
                </Upload>
              )}
            </FormItem>
          </Form>
              );
        </div>
        {this.state.value}
      </div>
    );
  }
}

SoftwareDetailDelete.propTypes = {
  form: PropTypes.object.isRequired,
};
const WrapSoftwareDetailEdit = Form.create()(SoftwareDetailDelete);
export default WrapSoftwareDetailEdit;
