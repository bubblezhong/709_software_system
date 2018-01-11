import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Form, Input, Select, Row, Upload, Icon, Col, TreeSelect } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
// const TreeNode = TreeSelect.TreeNode;
class OnlineHelpDetailEdit extends React.Component {
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
        supportScheme: '',
        defaultSolve: '',
        Description: '',
        phenomenonDescription: '',
        operateInfo: '',
      },
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
      addStatus: false,
    };
  }
  componentWillMount() {
    if (this.props.location.pathname === '/main/TechnicalSupport/OnlineHelpDetailNew') {
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
      toWhere = `/main/TechnicalSupport/OnlineHelpDetail/${this.props.params.id}`;
      console.log('toWhere', toWhere);
    } else {
      toWhere = '/main/TechnicalSupport/OnlineHelp';
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
          <Link to={`/main/TechnicalSupport/OnlineHelpDetail/${this.state.id}`}>
            <Button className="SoftwareInfoDetail_reflash">取消</Button>
          </Link>
          <Link to={`/main/TechnicalSupport/OnlineHelpDetail/${this.state.id}`}>
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
                label="名称"
              >
                {getFieldDecorator('title', {
                  initialValue: initialData.title,
                  rules: [{
                    required: true, message: '请输入名称!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="制定人"
              >
                <span>{initialDataDefault.register}</span>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="制定单位"
              >
                <span>{initialDataDefault.unit}</span>
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
                    style={{ width: 467 }}
                    value={this.state.value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    treeData={this.state.ancestaryTreeData}
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
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="相关技术保障方案"
              >
                {getFieldDecorator('supportScheme', {
                  rules: [{
                    required: true, message: '请选择相关技术保障方案!',
                  }],
                })(
                  <Select>
                    <Option value="DD2017051102111应用技术保障方案">DD2017051102111应用技术保障方案</Option>
                    <Option value="DD2017051102应用技术保障方案">DD2017051102应用技术保障方案</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="附件"
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
                  initialValue: initialData.Description,
                })(
                  <Input type="textarea" rows={10} />
                )}
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem
                {...formItemLayoutDesc}
                label="现象说明"
              >
                {getFieldDecorator('phenomenonDescription', {
                  initialValue: initialData.phenomenonDescription,
                })(
                  <Input type="textarea" rows={10} />
                )}
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem
                {...formItemLayoutDesc}
                label="操作信息"
              >
                {getFieldDecorator('operateInfo', {
                  initialValue: initialData.operateInfo,
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

OnlineHelpDetailEdit.propTypes = {
  form: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};
const WrapOnlineHelpDetailEdit = Form.create()(OnlineHelpDetailEdit);
export default WrapOnlineHelpDetailEdit;
