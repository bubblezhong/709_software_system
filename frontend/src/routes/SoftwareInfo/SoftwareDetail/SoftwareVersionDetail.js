import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'antd';
import SoftwareVersionUseUnit from './SoftwareVersionDetail/SoftwareVersionUseUnit';
// import SoftwareVersionDetailIntro from './SoftwareVersionDetail/SoftwareVersionDetailIntro';
import SoftwareVersionBasicInfo from './SoftwareVersionDetail/SoftwareVersionBasicInfo';
// import SoftwareVersionDetailEdit from './SoftwareVersionDetail/SoftwareVersionDetailEdit';
import './SoftwareDetail.css';
import GetDetailInfo from './../../utils/GetDetailInfo';

class SoftwareVersionDetail extends React.Component {
  constructor(props) {
    super(props);
    const id = this.props.params.id;
    this.state = {
      id,
      show: 'SoftwareVersion',
      editStatus: false,
      data: {},
    };
  }
  componentWillMount() {
    this.props.sendInfo(this.state.id, this.handleData);
  }
  handleData = (res) => {
    console.log('version', res);
    this.setState({ data: res.data });
  }
  returnUnEdit = () => {
    this.setState({ editStatus: false });
  }
  render() {
    const { data } = this.state;
    let descript = [];
    // console.log(data.SW_INFO);
    if (data.SW_INFO !== undefined) {
      descript = data.SW_INFO.split(',').map((item, index) => {
        return <p key={index}>{item}</p>;
      });
    }
    return (
      <div>
        <div style={{ overflow: 'hidden', marginBottom: 20 }}>
          <Link to="/main/SoftwareInfo/SoftwareInfoDetail/2" className="SoftwareInfoDetail_return">
            <Button style={{ width: 85, height: 30 }}>
              <span style={{ marginRight: 8 }}>&lt;</span>
              <span>返回</span>
            </Button>
          </Link>
          <Link to="/main/SoftwareInfo/SoftwareDetailDelete">
            <Button type="primary" className="SoftwareInfoDetail_reflash">删除</Button>
          </Link>
          <Link to={`/main/SoftwareInfo/SoftwareVersionDetailEdit/${this.state.id}`}>
            <Button type="primary" className="SoftwareInfoDetail_reflash">编辑</Button>
          </Link>
        </div>
        <div className="SoftwareInfoDetail_detail" >
          <div className="SoftwareVersionDetail_headerpic">
            <span>软件版本</span>
          </div>
          <div className="SoftwareInfoDetail_content">
            <h2 style={{ display: 'inline-block' }}>{data.NAME}</h2>
            <h2 style={{ display: 'inline-block', marginLeft: 25 }}>版本编号：{data.SW_VERSION}</h2>
            <div className="SoftwareInfoDetail_brief">
              <span>编号：</span>
              <span>{data.SW_CODE}</span>
              <span>研制单位：</span>
              <span>{data.MAKEUNIT}</span>
              <span>军代表：</span>
              <span>{data.SW_OWNER}</span>
            </div>
            <div style={{ fontSize: 14 }}>
              {descript}
            </div>
          </div>
        </div>
        <SoftwareVersionBasicInfo data={data} id={this.state.id} />
        <SoftwareVersionUseUnit id={this.state.id} />
      </div>
    );
  }
}
SoftwareVersionDetail.propTypes = {
  sendInfo: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
};
const WrapSoftwareVersionDetail = GetDetailInfo('/api/basic-software/software/')(SoftwareVersionDetail);
export default WrapSoftwareVersionDetail;
// export default SoftwareVersionDetail;
