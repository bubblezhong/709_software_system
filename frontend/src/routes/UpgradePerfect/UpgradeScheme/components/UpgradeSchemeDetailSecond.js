import { Row, Col, Form, Radio, Select, Button, Icon, Input, Upload } from 'antd';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
// import '../SupportScheme.css';
// import { json2table } from './json2table';

const FormItem = Form.Item;
// const Search = Input.Search;
// const RangePicker = DatePicker.RangePicker;
class UpgradeSchemeDetailSecond extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTask: false,
      editState: false,
      InitialData: {
        content: '七○二所，1951年建立于上海黄浦江畔，1965年总部搬迁至无锡，在上海设有分部和青岛分部。数十年来建有功能齐全、配套完整的大中型科研试验设施近30座，设有两个国家级重点实验室，两个国家级检测中心，一个国家能源海洋工程装备研发中心和一个省级重点实验室，占地1300余亩，现有职工1500余人，其中拥有中国工程院院士2名， 国家“千人计划”1人，“万人计划”1人，“新世纪百千万人才工程”重点培养对象2人，国防科技工业511人才工程学术带头人2人，享受国务院政府津贴专家42名，省部级有突出贡献中青年专家19名。',
        number: 'MSSXL0678',
        developmentUnit: '中岸用软件-709所',
        softwareName: 'XX软件',
        file: ['附件1', '附件2'],
        status: '论证不通过',
        time: '2017/05/12',
        schemeName: '应用软件调配方案',
        handler: '张三',
        radioValue: '不通过',
      },
      radioValue: '不通过',
      basicData: {
        registeUnit: 'xx453队',
        register: '塞班2.0、CentOS7等',
        software: '声呐定位软件',
        beginTime: '2017/5/12 12:00',
        endTime: '2017/5/12 12:00',
        level: '一般',
        savePos: '代表室/管理机关',
        module: '应用软件>C类应用软件>对下声呐定位',
        failTime: '2017/5/13 11:00',
        solve: '是',
        describeInfo: '测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信',
      },
      taskDistributeDate: {},
    };
  }
  onChange = (e) => {
    console.log(e.target.value);
    this.setState({ radioValue: e.target.value });
  }
  handleOk = () => {
    this.setState({
      editState: false,
    });
  }
  handleCancel = () => {
    this.setState({
      editState: false,
    });
  }
  render() {
    const { InitialData, radioValue } = this.state;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const formItemLayoutDesc = {
      labelCol: { span: 3 },
      wrapperCol: { span: 19 },
    };
    const { getFieldDecorator } = this.props.form;
    // const formItemLayout = {
    //   labelCol: { span: 6 },
    //   wrapperCol: { span: 14 },
    // };
    // const formItemLayoutDesc = {
    //   labelCol: { span: 3 },
    //   wrapperCol: { span: 19 },
    // };
    let status;
    if (InitialData.status === '论证不通过') {
      console.log('status');
      status = <span style={{ color: '#f03' }}>论证不通过</span>;
    } else {
      status = <span>论证不通过</span>;
    }
    return (
      <div className="InputDetail_stepsContent">
        <div style={{ width: '80%', marginLeft: '12%', minHeight: 500, marginTop: 20 }}>
          <div className="SoftwareInfoDetail_detail" >
            <div className="DeploymentSchemeDetail_headerpic">
              <span>方案论证</span>
            </div>
            <div className="SoftwareInfoDetail_content">
              <h2 style={{ display: 'inline-block' }}>
                <span>方案名称：</span>
                <span>{InitialData.schemeName}</span>
              </h2>
              <time style={{ float: 'right' }} >{InitialData.time}</time>
              <div className="DeploymentSchemeDetail_brief">
                <span>方案编号：</span>
                <span>{InitialData.number}</span>
                <span>方案制定单位：</span>
                <span>{InitialData.developmentUnit}</span>
                <span>软件：</span>
                <span>{InitialData.softwareName}</span>
                <span>状态：</span>
                {status}
              </div>
              <div>
                {InitialData.content}
              </div>
              <div style={{ marginTop: 10 }}>
                <span>附件：</span>
                <Link style={{ marginLeft: 15 }} >{InitialData.file[0]}</Link>
                <Link style={{ marginLeft: 15 }} >{InitialData.file[1]}</Link>
              </div>
            </div>
          </div>
          <div style={{ fontSize: 16, padding: 20 }}>
            <h2 style={{ borderBottom: '1px solid #e4e4e4', paddingBottom: 20, fontSize: 18, marginBottom: 20 }}>汇总信息</h2>
            <Row className="RegistrationDetail_RegisterInfo" >
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="处理人"
                >
                  <span>{InitialData.handler}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="处理动作"
                >
                  {getFieldDecorator('hanldeAction', {
                    rules: [{ required: true, message: '请选择处理动作' }],
                  })(
                    <Radio.Group onChange={this.onChange}>
                      <Radio value="通过">通过</Radio>
                      <Radio value="不通过">不通过</Radio>
                      <Radio value="分配任务">分配任务</Radio>
                    </Radio.Group>
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="相关文件"
                  hasFeedback
                >
                  {getFieldDecorator('relativeFile', {
                    rules: [{ required: true, message: '请点击上传相关附件' }],
                  })(
                    <Upload>
                      <Button>
                        <Icon type="upload" />点击上传
                      </Button>
                    </Upload>
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                { radioValue === '分配任务' &&
                  <FormItem
                    {...formItemLayout}
                    label="分配给"
                    hasFeedback
                  >
                    {getFieldDecorator('distribution', {
                      rules: [{ required: true, message: '请选择分配人' }],
                    })(
                      <Select style={{ display: 'block' }}>
                        <Option value="张三">张三</Option>
                        <Option value="王五">王五</Option>
                        <Option value="李四">李四</Option>
                        <Option value="王小二">王小二</Option>
                        <Option value="李大思">李大思</Option>
                      </Select>
                    )}
                  </FormItem>
                }
                { radioValue === '通过' &&
                  <FormItem
                    {...formItemLayout}
                    label="选择审核员"
                    hasFeedback
                  >
                    {getFieldDecorator('infoReceiver', {
                      rules: [{ required: true, message: '请选择审核员' }],
                    })(
                      <Select style={{ display: 'block' }}>
                        <Option value="张三">张三</Option>
                        <Option value="王五">王五</Option>
                        <Option value="李四">李四</Option>
                        <Option value="王小二">王小二</Option>
                        <Option value="李大思">李大思</Option>
                      </Select>
                    )}
                  </FormItem>
                }
                { radioValue === '不通过' && '' }
                { radioValue === ' ' && '' }
              </Col>
              <Col span={24}>
                <FormItem
                  {...formItemLayoutDesc}
                  label="说明"
                >
                  {getFieldDecorator('remarks', {
                    rules: [{ required: true, message: '请输入信息说明' }],
                  })(
                    <Input type="textarea" rows={10} />
                  )}
                </FormItem>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

UpgradeSchemeDetailSecond.propTypes = {
  // disable: PropTypes.bool.isRequired,
  form: PropTypes.object.isRequired,
};
const WrapUpgradeSchemeDetailSecond = Form.create()(UpgradeSchemeDetailSecond);
export default WrapUpgradeSchemeDetailSecond;
