import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import { Button } from 'antd';
import UseUnit from './UseUnit';
import SoftwareVersion from './SoftwareVersion';
import SoftwareBasicInfo from './SoftwareBasicInfo';
// import SoftwareInfoDetailIntro from './SoftwareInfoDetailIntro';
import './SoftwareDetail.css';
import GetDetailInfo from './../../utils/GetDetailInfo';

const styles = {
  activeCard: {
    color: '#108ee9',
  },
  normalCard: {
    color: '#000',
  },
};
class SoftwareInfoDetail extends React.Component {
  constructor(props) {
    super(props);
    const id = this.props.params.id;
    console.log('detail', this.props);
    this.state = {
      show: 'SoftwareVersion',
      id,
      InitialData: {},
      treeData: [],
      ids: {},
    };
  }
  componentWillMount() {
    this.props.sendInfo(this.handleData);
    const obj = { id: this.state.id };
    this.setState({ ids: obj });
  }
  handleData = (res) => {
    console.log('resp', res.data);
    const tempTreeData = res.data.tree.map((item) => {
      item.CREATE_DATE = moment(item.CREATE_DATE).format('YYYY-MM-DD');
      return item;
    });
    console.log('tempdata', tempTreeData);
    this.setState({ InitialData: res.data, treeData: tempTreeData });
  }
  changeShow = (type) => {
    this.setState({ show: type });
  }
  render() {
    const { show, InitialData } = this.state;
    return (
      <div>
        <div style={{ overflow: 'hidden', marginBottom: 20 }}>
          <Link to="/main/SoftwareInfo/SoftwareDetail" className="SoftwareInfoDetail_return">
            <Button style={{ width: 85, height: 30 }}>
              <span style={{ marginRight: 8 }}>&lt;</span>
              <span>返回</span>
            </Button>
          </Link>
          <Link to="/main/SoftwareInfo/SoftwareDetailDelete">
            <Button type="primary" className="SoftwareInfoDetail_reflash">删除</Button>
          </Link>
          <Link to={`/main/SoftwareInfo/SoftwareDetailEdit/${this.state.id}`}>
            <Button type="primary" className="SoftwareInfoDetail_reflash">编辑</Button>
          </Link>
        </div>
        <div className="SoftwareInfoDetail_detail" >
          <div className="SoftwareInfoDetail_headerpic">
            <span>软件</span>
          </div>
          <div className="SoftwareInfoDetail_content">
            <h2>{InitialData.NAME}</h2>
            <div className="SoftwareInfoDetail_brief">
              <span>编号：</span>
              <span>{InitialData.SW_CODE}</span>
              <span>研制单位：</span>
              <span>{InitialData.MAKEUNIT}</span>
              <span>军代表：</span>
              <span>{InitialData.SW_OWNER}</span>
            </div>
            <div>
              {InitialData.SW_INFO}
            </div>
          </div>
        </div>
        <SoftwareBasicInfo data={InitialData} />
        <div className="UserSoftware_title">
          <span onClick={() => this.changeShow('SoftwareVersion')} style={show === 'SoftwareVersion' ? styles.activeCard : styles.normalCard} >软件版本</span>
          <span>/</span>
          <span onClick={() => this.changeShow('UseUnit')} style={show === 'UseUnit' ? styles.activeCard : styles.normalCard} >使用单位</span>
        </div>
        {this.state.show === 'SoftwareVersion' &&
          <SoftwareVersion data={this.state.treeData} {...this.props} />
        }
        {this.state.show === 'UseUnit' &&
          <UseUnit params={this.state.ids} />
        }
      </div>
    );
  }
}
SoftwareInfoDetail.propTypes = {
  sendInfo: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
};
const WrapSoftwareInfoDetail = GetDetailInfo('/api/basic-software/software/')(SoftwareInfoDetail);
export default WrapSoftwareInfoDetail;
