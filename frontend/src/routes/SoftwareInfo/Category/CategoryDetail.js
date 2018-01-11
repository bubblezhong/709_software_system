import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'antd';
import moment from 'moment';
import UseUnit from './UseUnit';
import CategoryVersion from './CategoryVersion';
import CategoryBasicInfo from './CategoryBasicInfo';
// import CategoryInfoDetailIntro from './CategoryDetailIntro';
import './Category.css';
import GetDetailInfo from './../../utils/GetDetailInfo';

const styles = {
  activeCard: {
    color: '#108ee9',
  },
  normalCard: {
    color: '#000',
  },
};
class CategoryDetail extends React.Component {
  constructor(props) {
    super(props);
    const id = this.props.params.id;
    this.state = {
      show: 'CategoryVersion',
      id,
      data: {},
      treeData: [],
    };
  }
  componentWillMount() {
    this.props.sendInfo(this.state.id, this.handleData);
    // console.log(moment('2017-08-15T16:00:00.000Z').format('YYYY-MM-DD HH:mm'));
  }
  handleData = (res) => {
    // console.log('respcate', res.data);
    const tempTreeData = res.data.tree.map((item) => {
      item.CREATE_DATE = moment(item.CREATE_DATE).format('YYYY-MM-DD');
      return item;
    });
    // console.log('tempdata', tempTreeData);
    this.setState({ data: res.data, treeData: tempTreeData });
  }
  changeShow = (type) => {
    this.setState({ show: type });
  }
  render() {
    const { show, data } = this.state;
    // console.log(data);
    return (
      <div>
        <div style={{ overflow: 'auto' }}>
          <Link to="/main/SoftwareInfo/Category" className="SoftwareInfoDetail_return">
            <Button style={{ width: 85, height: 30 }}>
              <span style={{ marginRight: 8 }}>&lt;</span>
              <span>返回</span>
            </Button>
          </Link>
          <Link to="/main/SoftwareInfo/SoftwareDetailDelete">
            <Button type="primary" className="SoftwareInfoDetail_reflash">删除</Button>
          </Link>
          <Link to={`/main/SoftwareInfo/CategoryDetailEdit/${this.state.id}`}>
            <Button type="primary" className="SoftwareInfoDetail_reflash">编辑</Button>
          </Link>
        </div>
        <div className="SoftwareInfoDetail_detail" >
          <div className="CategoryDetail_headerpic">
            <span>单元</span>
          </div>
          <div className="SoftwareInfoDetail_content">
            <h2>{data.SU_NAME}</h2>
            <div className="SoftwareInfoDetail_brief">
              <span>编号：</span>
              <span>{data.SU_CODE}</span>
              <span>研制单位：</span>
              <span>{data.SW_MAKEUNIT}</span>
              <span>军代表：</span>
              <span>{data.SW_OWNER}</span>
            </div>
            <div>
              {data.SU_DESCRIBE}
            </div>
          </div>
        </div>
        <CategoryBasicInfo data={data} />
        <div className="UserSoftware_title">
          <span onClick={() => this.changeShow('CategoryVersion')} style={show === 'CategoryVersion' ? styles.activeCard : styles.normalCard} >单元版本</span>
          <span>/</span>
          <span onClick={() => this.changeShow('UseUnit')} style={show === 'UseUnit' ? styles.activeCard : styles.normalCard} >使用单位</span>
        </div>
        {this.state.show === 'CategoryVersion' &&
          <CategoryVersion id={this.state.id} />
        }
        {this.state.show === 'UseUnit' &&
          <UseUnit id={this.state.id} />
        }
      </div>
    );
  }
}
CategoryDetail.propTypes = {
  params: PropTypes.object.isRequired,
  sendInfo: PropTypes.func.isRequired,
};
const WrapCategoryDetail = GetDetailInfo('/api/basic-category/category/')(CategoryDetail);
// const WrapCategoryDetailUseUnit
//  = GetDetailInfo(' /api/basic-category/software-unit/')(WrapCategoryDetail);
export default WrapCategoryDetail;
