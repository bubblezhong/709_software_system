import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Form, DatePicker, Input, Select, Row, Radio, Upload, Icon, Col, TreeSelect } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
// const TreeNode = TreeSelect.TreeNode;
class RegistrationDetailEdit extends React.Component {
  constructor(props) {
    super(props);
    let id = 0;
    console.log(this.props);
    if (this.props.params.id) {
      id = this.props.params.id;
    }
    this.state = {
      id,
      initialDataDefault: {
        number: 'CL-20170427-0001',
        register: '张三',
        unit: '中船重工xx研究所',
      },
      initialData: {
        title: '',
        ancestary: [],
        softwarename: '',
        registerType: '',
        beginTime: '',
        endTime: '',
        defaultTime: '',
        defaultGrade: '',
        defaultSolve: '',
        Description: '',
        defaultDescription: '',
        defaultSolveMethod: '',
        ancestaryTreeData: [{
          label: '应用软件',
          value: '0-0',
          key: '0-0',
          children: [{
            label: '参数测量软件',
            value: '0-0-1',
            key: '0-0-1',
          }, {
            label: '参数测量软件',
            value: '0-0-2',
            key: '0-0-2',
          }],
        }, {
          label: '参数测量软件',
          value: '0-1',
          key: '0-1',
        }],
      },
      addStatus: false,
    };
  }
  componentWillMount() {
    if (this.props.location.pathname === '/main/SoftwareDaily/RegistrationNew') {
      this.setState({ initialData: {} });
    }
  }
  render() {
    const { initialData, initialDataDefault } = this.state;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const formItemLayoutDesc = {
      labelCol: { span: 3 },
      wrapperCol: { span: 19 },
    };
    let toWhere = '';
    if (this.props.params.id) {
      toWhere = `/main/SoftwareDaily/RegistrationDetail/${this.props.params.id}`;
      console.log('toWhere', toWhere);
    } else {
      toWhere = '/main/SoftwareDaily/Registration';
      console.log('toWhere', toWhere);
    }
    return (
      <div>
        <div style={{ overflow: 'auto', marginBottom: 20 }}>
          <Link to={toWhere} className="SoftwareInfoDetail_return">
            <Button style={{ width: 85, height: 30 }}>
              <span style={{ marginRight: 8 }}>&lt;</span>
              <span>返回</span>
            </Button>
          </Link>
          <Link to={`/main/SoftwareDaily/RegistrationDetail/${this.state.id}`}>
            <Button className="SoftwareInfoDetail_reflash">取消</Button>
          </Link>
          <Link to={`/main/SoftwareDaily/RegistrationDetail/${this.state.id}`}>
            <Button type="primary" className="SoftwareInfoDetail_reflash">完成</Button>
          </Link>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '5%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>编辑</div>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="编号"
              >
                <span>{initialDataDefault.number}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="登记人"
              >
                <span>{initialDataDefault.register}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="登记单位"
              >
                <span>{initialDataDefault.unit}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="日常登记标题"
              >
                {getFieldDecorator('title', {
                  initialValue: initialData.title,
                  rules: [{
                    required: true, message: '请输入日常登记标题!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="谱系"
              >
                {getFieldDecorator('ancestary', {
                  initialValue: initialData.ancestary,
                  rules: [{ required: true, message: '请输入谱系!' }],
                })(
                  <TreeSelect
                    value={this.state.value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    treeData={initialData.ancestaryTreeData}
                    treeDefaultExpandAll
                    onChange={this.onChange}
                  />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="软件名称"
              >
                {getFieldDecorator('softwarename', {
                  rules: [{
                    required: true, message: '请选择软件名称!',
                  }],
                })(
                  <Select>
                    <Option value="定位软件">定位软件1</Option>
                    <Option value="指示软件">指示软件</Option>
                    <Option value="导航软件">导航软件</Option>
                    <Option value="引导软件">引导软件</Option>
                    <Option value="扫描软件">扫描软件</Option>
                    <Option value="策略生成">策略生成</Option>
                    <Option value="定位计算">定位计算</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col style={{ height: 55 }} span={12}>
              <FormItem
                {...formItemLayout}
                label="故障等级"
              >
                {getFieldDecorator('defauleGrade', {
                  rules: [{
                    required: true, message: '请选择故障等级!',
                  }],
                })(
                  <Select>
                    <Option value="一般">一般</Option>
                    <Option value="困难">困难</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="开机时间"
              >
                {getFieldDecorator('beginTime', {
                  initialValue: initialData.beginTime,
                  rules: [{ required: true, message: '请选择开机时间' }],
                })(
                  <DatePicker
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                  />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="关机时间"
              >
                {getFieldDecorator('endTime', {
                  initialValue: initialData.endTime,
                  rules: [{ required: true, message: '请选择关机时间' }],
                })(
                  <DatePicker
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                  />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="故障时间"
              >
                {getFieldDecorator('defaultTime', {
                  initialValue: initialData.defaultTime,
                  rules: [{ required: true, message: '请选择故障时间' }],
                })(
                  <DatePicker
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                  />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="登记类型"
              >
                {getFieldDecorator('registerType', {
                  initialValue: initialData.saveType,
                  rules: [{ required: true, message: '请输入存储方式' }],
                })(
                  <Radio.Group>
                    <Radio value="日常记录">日常记录</Radio>
                    <Radio value="故障登记">故障登记</Radio>
                  </Radio.Group>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="故障是否解决"
              >
                {getFieldDecorator('defaultSolve', {
                  initialValue: initialData.saveType,
                  rules: [{ required: true, message: '请选择故障是否解决' }],
                })(
                  <Radio.Group>
                    <Radio value="是">是</Radio>
                    <Radio value="否">否</Radio>
                  </Radio.Group>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="附件信息"
              >
                {getFieldDecorator('file', {
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
                label="描述信息"
              >
                {getFieldDecorator('Description', {
                  initialValue: initialData.softwareDescription,
                })(
                  <Input type="textarea" rows={10} />
                )}
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem
                {...formItemLayoutDesc}
                label="故障描述"
              >
                {getFieldDecorator('defaultDescription', {
                  initialValue: initialData.defaultDescription,
                })(
                  <Input type="textarea" rows={10} />
                )}
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem
                {...formItemLayoutDesc}
                label="故障解决办法"
              >
                {getFieldDecorator('defaultSolveMethod', {
                  initialValue: initialData.defaultSolve,
                })(
                  <Input type="textarea" rows={10} />
                )}
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

RegistrationDetailEdit.propTypes = {
  form: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};
const WrapRegistrationDetailEdit = Form.create()(RegistrationDetailEdit);
export default WrapRegistrationDetailEdit;
