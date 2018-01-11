import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'antd';
import moment from 'moment';
import './Module.css';
import GetDetailInfo from './../../utils/GetDetailInfo';

class ModuleDetail extends React.Component {
  constructor(props) {
    super(props);
    let id;
    if (this.props.params.id) {
      id = this.props.params.id;
    }
    this.state = {
      id,
      data: {},
    };
  }
  componentWillMount() {
    this.props.sendInfo(this.handleData);
  }
  handleData = (res) => {
    console.log('res', res.data);
    this.setState({ data: res.data });
  }
  render() {
    const { data } = this.state;
    let status;
    if (data.STATUS === 0) {
      status = <span>未激活</span>;
    } else {
      status = <span>已激活</span>;
    }
    return (
      <div>
        <div style={{ overflow: 'hidden', marginBottom: 10 }}>
          <Link to="/main/SoftwareInfo/Module" className="MouduleDetail_return">
            <Button style={{ width: 85, height: 30 }}>
              <span style={{ marginRight: 8 }}>&lt;</span>
              <span>返回</span>
            </Button>
          </Link>
          <Link to="/main/SoftwareInfo/ModuleDelete">
            <Button type="primary" className="MouduleDetail_reflash">删除</Button>
          </Link>
          <Link to={`/main/SoftwareInfo/ModuleDetailEdit/${this.state.id}`}>
            <Button type="primary" className="MouduleDetail_reflash">编辑</Button>
          </Link>
        </div>
        <div className="MouduleDetail_container">
          <div className="MouduleDetail_container_title" >
            <h2>详情</h2>
          </div>
          <div className="MouduleDetail_container_list MouduleDetail_container_list2">
            <span style={{ display: 'inline-block', width: 96 }}>编号:</span>
            <span>{data.ID}</span>
          </div>
          <div className="MouduleDetail_container_list MouduleDetail_container_list1">
            <span style={{ display: 'inline-block', width: 96 }}>谱系名称:</span>
            <span>{data.NAME}</span>
          </div>
          <div className="MouduleDetail_container_list MouduleDetail_container_list3">
            <span style={{ display: 'inline-block', width: 96 }}>上级ID:</span>
            <span>{data.PID}</span>
          </div><div className="MouduleDetail_container_list MouduleDetail_container_list4">
            <span style={{ display: 'inline-block', width: 96 }}>状态:</span>
            {status}
          </div><div className="MouduleDetail_container_list MouduleDetail_container_list4">
            <span style={{ display: 'inline-block', width: 96 }}>创建人:</span>
            <span>{data.CREATE_USER}</span>
          </div><div className="MouduleDetail_container_list MouduleDetail_container_list5">
            <span style={{ display: 'inline-block', width: 96 }}>创建时间:</span>
            <span>{moment(data.CREATE_DATE).format('YYYY-MM-DD')}</span>
          </div>
        </div>
      </div>
    );
  }
}
ModuleDetail.propTypes = {
  params: PropTypes.object.isRequired,
  sendInfo: PropTypes.func.isRequired,
};
const WrapModuleDetail = GetDetailInfo('/api/basic-module/module/')(ModuleDetail);
export default WrapModuleDetail;
