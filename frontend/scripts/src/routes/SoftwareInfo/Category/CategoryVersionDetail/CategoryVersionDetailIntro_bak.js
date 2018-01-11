import React from 'react';

class SoftwareInfoDetailIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 'MSSXL0678',
      developmentUnit: '中船-709所',
      representative: '张三',
      versionNum: 'V1.2.1.1',
      versionName: '声呐定位指示软件',
    };
  }
  render() {
    const Detail = (
      <div className="SoftwareInfoDetail_detail" >
        <div className="CategoryVersionDetail_headerpic">
          <span>单元版本</span>
        </div>
        <div className="SoftwareInfoDetail_content">
          <h2 style={{ display: 'inline-block' }}>{this.state.versionName}</h2>
          <h2 style={{ display: 'inline-block', marginLeft: 25 }}>版本编号：{this.state.versionNum}</h2>
          <div className="SoftwareInfoDetail_brief">
            <span>编号：</span>
            <span>{this.state.number}</span>
            <span>研制单位：</span>
            <span>{this.state.developmentUnit}</span>
            <span>军代表：</span>
            <span>{this.state.representative}</span>
          </div>
          <div style={{ fontSize: 14 }}>
            <p>2015年2月8日更新说明</p>
            <p> 1.修改模式设置类型</p>
            <p>2.更改尺寸判决条件</p>
            <p>3.增加支持设置典型反射距离</p>
          </div>
        </div>
      </div>
    );
    return (
      <div>
        { Detail }
      </div>
    );
  }
}
export default SoftwareInfoDetailIntro;
