import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Row } from 'antd';
// import './Registration.css';

// const FormItem = Form.Item;
class OnlineHelpDetail extends React.Component {
  constructor(props) {
    super(props);
    let id = 0;
    if (this.props.params) {
      id = this.props.params.id;
    }
    console.log(id);
    this.state = {
      id,
      show: 'SoftwareVersion',
      InitialData: {
        content: '七○二所，1951年建立于上海黄浦江畔，1965年总部搬迁至无锡，在上海设有分部和青岛分部。数十年来建有功能齐全、配套完整的大中型科研试验设施近30座，设有两个国家级重点实验室，两个国家级检测中心，一个国家能源海洋工程装备研发中心和一个省级重点实验室，占地1300余亩，现有职工1500余人，其中拥有中国工程院院士2名， 国家“千人计划”1人，“万人计划”1人，“新世纪百千万人才工程”重点培养对象2人，国防科技工业511人才工程学术带头人2人，享受国务院政府津贴专家42名，省部级有突出贡献中青年专家19名。',
        number: 'MSSXL0678',
        status: '已接受',
        type: '故障登记',
        file: [{ name: '附件1', link: 'rrtb' }, { name: '附件2', link: 'rrtb' }],
        supportTitle: '技术保障方案标题1212',
        phenomenonDescribe: '测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，' +
        '测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测测试信息，测试信息，测试信息测试信息，测试信息，测试信息，测试信息测试信息，测试信息，测试信息，',
        operateDescribe: [{
          step: '解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决' +
            '解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决' +
            '解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决',
        }, {
          step: '解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决' +
            '解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决' +
            '解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决方案，测试信息解决' },
        ],
      },
    };
  }
  changeShow = (type) => {
    this.setState({ show: type });
  }
  render() {
    const { InitialData } = this.state;
    const operateSteps = InitialData.operateDescribe.map((item, index) => {
      return (
        <div key={index} style={{ marginBottom: 15 }}>
          <span>{`步骤${index + 1}:`}</span>
          <span>{item.step}</span>
        </div>
      );
    });
    return (
      <div>
        <div style={{ overflow: 'hidden', marginBottom: 20 }}>
          <Link to="/main/TechnicalSupport/OnlineHelp" className="SoftwareInfoDetail_return">
            <Button style={{ width: 85, height: 30 }}>
              <span style={{ marginRight: 8 }}>&lt;</span>
              <span>返回</span>
            </Button>
          </Link>
          <Link>
            <Button type="primary" className="SoftwareInfoDetail_reflash">删除</Button>
          </Link>
          <Link to={`/main/TechnicalSupport/OnlineHelpDetailEdit/${this.state.id}`}>
            <Button type="primary" className="SoftwareInfoDetail_reflash">编辑</Button>
          </Link>
        </div>
        <div className="SoftwareInfoDetail_detail" >
          <div className="DeploymentSchemeDetail_headerpic" style={{ marginLeft: '6%' }} >
            <span>在线帮助</span>
          </div>
          <div className="SoftwareInfoDetail_content">
            <h2>应用软件问题反馈</h2>
            <div className="SoftwareInfoDetail_brief">
              <span>日常登记编号：</span>
              <span>{InitialData.number}</span>
              <span>状态：</span>
              <span>{InitialData.status}</span>
              <span>类型：</span>
              <span>{InitialData.type}</span>
            </div>
            <div style={{ fontSize: 14 }}>
              {InitialData.content}
            </div>
            <div style={{ marginTop: 30 }}>
              <span>相关技术保障方案:</span>
              <Link to="/main/TechnicalSupport/SupportSchemeDetail/1" style={{ marginLeft: 19 }}>{InitialData.supportTitle}</Link>
              <span style={{ marginLeft: 40 }}>附件：</span>
              <Link style={{ marginLeft: 19 }}>{InitialData.file[0].name}</Link>
              <Link style={{ marginLeft: 19 }}>{InitialData.file[1].name}</Link>
            </div>
          </div>
        </div>
        <div style={{ fontSize: 16, padding: 20 }}>
          <h2 style={{ paddingBottom: 15, fontSize: 18 }}>现象说明</h2>
          <Row style={{ marginLeft: 35, textIndent: 2, fontSize: 14 }}>
            {InitialData.phenomenonDescribe}
          </Row>
          <h2 style={{ paddingBottom: 15, fontSize: 18, paddingTop: 20 }}>操作说明</h2>
          <Row style={{ marginLeft: 35, fontSize: 14 }}>
            {operateSteps}
          </Row>
        </div>
      </div>
    );
  }
}
OnlineHelpDetail.propTypes = {
  params: PropTypes.number.isRequired,
};
export default OnlineHelpDetail;
