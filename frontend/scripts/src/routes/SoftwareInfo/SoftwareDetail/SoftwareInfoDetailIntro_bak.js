import React from 'react';
import './SoftwareDetail.css';

class SoftwareInfoDetailIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      InitialData: {
        content: '七○二所，1951年建立于上海黄浦江畔，1965年总部搬迁至无锡，在上海设有分部和青岛分部。数十年来建有功能齐全、配套完整的大中型科研试验设施近30座，设有两个国家级重点实验室，两个国家级检测中心，一个国家能源海洋工程装备研发中心和一个省级重点实验室，占地1300余亩，现有职工1500余人，其中拥有中国工程院院士2名， 国家“千人计划”1人，“万人计划”1人，“新世纪百千万人才工程”重点培养对象2人，国防科技工业511人才工程学术带头人2人，享受国务院政府津贴专家42名，省部级有突出贡献中青年专家19名。',
        number: 'MSSXL0678',
        developmentUnit: '中船-709所',
        representative: '张三',
      },
    };
  }
  render() {
    const { InitialData } = this.state;
    return (
      <div className="SoftwareInfoDetail_detail" >
        <div className="SoftwareInfoDetail_headerpic">
          <span>软件</span>
        </div>
        <div className="SoftwareInfoDetail_content">
          <h2>声呐定位指示软件</h2>
          <div className="SoftwareInfoDetail_brief">
            <span>编号：</span>
            <span>{InitialData.number}</span>
            <span>研制单位：</span>
            <span>{InitialData.developmentUnit}</span>
            <span>军代表：</span>
            <span>{InitialData.representative}</span>
          </div>
          <div>
            {InitialData.content}
          </div>
        </div>
      </div>
    );
  }
}
export default SoftwareInfoDetailIntro;
