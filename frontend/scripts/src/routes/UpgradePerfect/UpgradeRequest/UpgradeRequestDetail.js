import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Col, Form, Button, Row } from 'antd';
// import './Registration.css';

const FormItem = Form.Item;
class UpgradeRequestDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.params);
    let id = 0;
    if (this.props.params) {
      id = this.props.params.id;
    }
    this.state = {
      id,
      show: 'SoftwareVersion',
      InitialData: {
        content: '七○二所，1951年建立于上海黄浦江畔，1965年总部搬迁至无锡，在上海设有分部和青岛分部。数十年来建有功能齐全、配套完整的大中型科研试验设施近30座，设有两个国家级重点实验室，两个国家级检测中心，一个国家能源海洋工程装备研发中心和一个省级重点实验室，占地1300余亩，现有职工1500余人，其中拥有中国工程院院士2名， 国家“千人计划”1人，“万人计划”1人，“新世纪百千万人才工程”重点培养对象2人，国防科技工业511人才工程学术带头人2人，享受国务院政府津贴专家42名，省部级有突出贡献中青年专家19名。',
        number: 'MSSXL0678',
        status: '已接受',
        file: [{ name: '附件1', link: 'rrtb' }, { name: '附件2', link: 'rrtb' }],
        upgradeTitle: '应用软件xx需求上报',
      },
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
      },
      faultDate: {
        describe: '测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，' +
        '测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，',
        method: '解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决' +
        '解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决' +
        '解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决',
      },
    };
  }
  changeShow = (type) => {
    this.setState({ show: type });
  }
  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    const formItemLayoutFault = {
      labelCol: { span: 3 },
      wrapperCol: { span: 20 },
    };
    const { InitialData, basicData, faultDate } = this.state;
    return (
      <div>
        <div style={{ overflow: 'hidden', marginBottom: 20 }}>
          <Link to="/main/UpgradePerfect/UpgradeRequest" className="SoftwareInfoDetail_return">
            <Button style={{ width: 85, height: 30 }}>
              <span style={{ marginRight: 8 }}>&lt;</span>
              <span>返回</span>
            </Button>
          </Link>
          <Link>
            <Button type="primary" className="SoftwareInfoDetail_reflash">撤销</Button>
          </Link>
          <Link to={`/main/UpgradePerfect/UpgradeRequestDetailEdit/${this.state.id}`}>
            <Button type="primary" className="SoftwareInfoDetail_reflash">编辑</Button>
          </Link>
        </div>
        <div className="SoftwareInfoDetail_detail" >
          <div className="DeploymentSchemeDetail_headerpic" style={{ marginLeft: '6%' }} >
            <span style={{ width: 90, left: 16 }}>升级完善上报</span>
          </div>
          <div className="SoftwareInfoDetail_content">
            <h2>{InitialData.upgradeTitle}</h2>
            <div className="SoftwareInfoDetail_brief">
              <span>编号：</span>
              <span>{InitialData.number}</span>
              <span>状态：</span>
              <span>{InitialData.status}</span>
            </div>
            <div style={{ fontSize: 14 }}>
              {InitialData.content}
            </div>
            <div style={{ marginTop: 30 }}>
              <span>附件：</span>
              <Link style={{ marginLeft: 19 }}>{InitialData.file[0].name}</Link>
              <Link style={{ marginLeft: 19 }}>{InitialData.file[1].name}</Link>
            </div>
          </div>
        </div>
        <div style={{ fontSize: 16, padding: 20 }}>
          <h2 style={{ borderBottom: '1px solid #e4e4e4', paddingBottom: 20, fontSize: 18 }}>上报信息</h2>
          <Row className="RegistrationDetail_RegisterInfo" >
            <Col span={12} style={{ height: 40, borderBottom: '1px solid #e4e4e4', marginTop: 19 }}>
              <FormItem
                style={{ fontSize: 16 }}
                {...formItemLayout}
                label="上报单位"
              >
                <span>{basicData.registeUnit}</span>
              </FormItem>
            </Col>
            <Col span={12} style={{ height: 40, borderBottom: '1px solid #e4e4e4', marginTop: 19 }}>
              <FormItem
                style={{ fontSize: 16 }}
                {...formItemLayout}
                label="上报人"
              >
                <span>{basicData.register}</span>
              </FormItem>
            </Col>
            <Col span={12} style={{ height: 40, borderBottom: '1px solid #e4e4e4', marginTop: 19 }}>
              <FormItem
                style={{ fontSize: 16 }}
                {...formItemLayout}
                label="软件"
              >
                <span>{basicData.software}</span>
              </FormItem>
            </Col>
            <Col span={12} style={{ height: 40, borderBottom: '1px solid #e4e4e4', marginTop: 19 }}>
              <FormItem
                style={{ fontSize: 16 }}
                {...formItemLayout}
                label="谱系"
              >
                <span>{basicData.module}</span>
              </FormItem>
            </Col>
            <Col span={12} style={{ height: 40, borderBottom: '1px solid #e4e4e4', marginTop: 19 }}>
              <FormItem
                style={{ fontSize: 16 }}
                {...formItemLayout}
                label="等级"
              >
                <span>{basicData.level}</span>
              </FormItem>
            </Col>
            <Col span={12} style={{ height: 40, borderBottom: '1px solid #e4e4e4', marginTop: 19 }}>
              <FormItem
                style={{ fontSize: 16 }}
                {...formItemLayout}
                label=""
              />
            </Col>
          </Row>
        </div>
        <div style={{ fontSize: 16 }}>
          <Row className="RegistrationDetail_DefaultInfo">
            <Col span={24} style={{ borderBottom: '1px solid #e4e4e4' }}>
              <FormItem
                style={{ fontSize: 14 }}
                {...formItemLayoutFault}
                label="预期效果"
              >
                {faultDate.describe}
              </FormItem>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
UpgradeRequestDetail.propTypes = {
  params: PropTypes.number.isRequired,
};
export default UpgradeRequestDetail;
