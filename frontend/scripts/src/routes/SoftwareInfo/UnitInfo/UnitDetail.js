import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Icon } from 'antd';
import './UnitInfo.css';
import UseSoftware from './UseSoftware';
import DevelopSoftware from './DevelopSoftware';
import GetDetailInfo from './../../utils/GetDetailInfo';

const styles = {
  activeCard: {
    color: '#108ee9',
  },
  normalCard: {
    color: '#000',
  },
};
class UnitDetail extends React.Component {
  constructor(props) {
    super(props);
    let id;
    if (this.props.params.id) {
      id = this.props.params.id;
    }
    this.state = {
      id,
      data: [
        { name: '升级完善', val: 23 },
        { name: '技术保障', val: 621 },
        { name: '出入库登记', val: 50 },
        { name: '研发软件', val: 320 },
      ],
      show: 'UseSoftware',
      InitialData: {},
      ids: {},
    };
  }
  componentWillMount() {
    this.props.sendInfo(this.handleData);
    const obj = { id: this.state.id };
    this.setState({ ids: obj });
  }
  handleData = (res) => {
    // console.log(res);
    this.setState({ InitialData: res.data });
  }
  changeShow = (type) => {
    this.setState({ show: type });
  }
  render() {
    const { show, InitialData } = this.state;
    const staticProp = [
      { name: '升级完善', icon: 'exclamation-circle' },
      { name: '技术保障', icon: 'code-o' },
      { name: '出入库登记', icon: 'schedule' },
      { name: '研发软件', icon: 'database' },
    ];
    const InfoStatistics = this.state.data.map((item, index) => {
      return (
        <div key={index} className="UnitDetail_contentli">
          <Icon type={staticProp[index].icon} style={{ fontSize: 30, color: '#4d79fa' }} />
          <span style={{ marginLeft: 10 }}>{staticProp[index].name}</span>
          <span style={{ fontSize: 22 }}>{item.val}</span>
        </div>
      );
    });
    return (
      <div>
        <div style={{ overflow: 'hidden', marginBottom: 20 }}>
          <Link to="/main/SoftwareInfo/UnitInfo" className="UnitDetail_return">
            <Button style={{ width: 85, height: 30 }}>
              <span style={{ marginRight: 8 }}>&lt;</span>
              <span>返回</span>
            </Button>
          </Link>
          <Button type="primary" className="UnitDetail_reflash">刷新</Button>
        </div>
        <div className="UnitDetail_detail" >
          <div className="UnitDetail_headerpic">
            <span>单位</span>
          </div>
          <div className="uniteDetail_content">
            <h2>{InitialData.SU_NAME}</h2>
            <div className="SoftwareInfoDetail_brief">
              <span>编号：</span>
              <span>{InitialData.SU_CODE}</span>
              <span>研制单位：</span>
              <span>{InitialData.SU_TYPE}</span>
              <span>军代表：</span>
              <span>{InitialData.MANAGER_NAME}</span>
            </div>
            <div>
              {InitialData.SU_DESCRIBE}
            </div>
          </div>
        </div>
        <div className="UnitDetail_InfoStatistics">
          <h2>信息统计</h2>
          {InfoStatistics}
        </div>
        <div className="UserSoftware_title">
          <span onClick={() => this.changeShow('UseSoftware')} style={show === 'UseSoftware' ? styles.activeCard : styles.normalCard} >使用软件</span>
          <span>/</span>
          <span onClick={() => this.changeShow('DevelopSoftware')} style={show === 'DevelopSoftware' ? styles.activeCard : styles.normalCard} >研发软件</span>
        </div>
        {this.state.show === 'UseSoftware' &&
          <UseSoftware params={this.state.ids} />
        }
        {this.state.show === 'DevelopSoftware' &&
          <DevelopSoftware params={this.state.ids} />
        }
      </div>
    );
  }
}
UnitDetail.propTypes = {
  params: PropTypes.object.isRequired,
  sendInfo: PropTypes.func.isRequired,
};
const WrapUnitDetail = GetDetailInfo('/api/basic-unit/unit/')(UnitDetail);
export default WrapUnitDetail;
