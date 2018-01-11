import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col, Icon } from 'antd';
import ChangeShowKey from './ChangeShowKey';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddBtn: false,
      items: [
        { label: '提醒信息', num: '12', path: '/main/Userinfo/Message' },
        { label: '入库申请', num: '12', path: '/main/InventoryRegistration/Input' },
        { label: '待处理', num: '12', path: '/main/Userinfo/UndoTask' },
        { label: '消息通知', num: '12', path: '/main/Userinfo/Message' },
        { label: '我的申请', num: '12', path: '/main/Userinfo/History' },
        { label: '出库申请', num: '12', path: '/main/Userinfo/History' },
        { label: '计划通知', num: '12', path: '/main/SoftwarePlan/PlanRemind' },
      ],
    };
  }
  componentDidMount() {
    const adminValue = document.getElementsByClassName('admin_value');
    for (let i = 0; i < adminValue.length; i++) {
      console.log(parseInt(adminValue[i].innerHTML, 10));
      if (parseInt(adminValue[i].innerHTML, 10) > 0) {
        adminValue[i].style.color = 'red';
        adminValue[i].parentNode.parentNode.style.color = '#f6b45d';
      }
    }
  }
  ChangeShowKey = (arr) => {
    this.setState({ items: arr });
  }
  showAddBtn = () => {
    if (!this.state.showAddBtn) {
      this.setState({ showAddBtn: true });
    } else {
      this.setState({ showAddBtn: false });
    }
  }
  render() {
    const arr = this.state.items.map((item, index) => {
      const color = ['#339dec', '#98d87d', '#ffd562', '#f27b71', '#8996e7', '#98c0ff', '#54beb6'];
      const sty = { backgroundColor: color[index], position: 'relative', display: 'block' };
      return (
        <Link className="admin_right" key={index} style={sty} to={item.path} >
          <p>
            <span className="label">{item.label}</span>
            <span className="labelNum">{item.num}</span>
          </p>
        </Link>
      );
    });
    const addBtn = (
      <div className="admin_right" style={{ backgroundColor: '#e4e4e4', position: 'relative', display: 'block' }} onClick={() => this.showAddBtn()} >
        <Icon type="setting" style={{ fontSize: 60, position: 'absolute', top: '50%', left: '50%', marginTop: -30, marginLeft: -30 }} />
      </div>
    );
    arr.push(addBtn);
    const admin = (
      <div className="admin">
        <div className="personInfo">
          <div className="adminImg">
            <img src="../../images/u30.png" height="97" width="97" alt="" />
          </div>
          <div className="myInfo">
            <h5>管理员</h5>
            <span>中船重工研究所</span>
          </div>
        </div>
        <div className="myNews">
          <Link to="/main/Userinfo/Message" style={{ display: 'inline-block', width: '33%' }}>
            <div>
              <Icon type="message" style={{ fontSize: 30 }} />
            </div>
            <div>
              <p>消息</p>
              <p className="admin_value">4</p>
            </div>
          </Link>
          <Link to="/main/Userinfo/UndoTask" style={{ display: 'inline-block', width: '33%' }}>
            <div>
              <Icon type="clock-circle-o" style={{ fontSize: 30 }} />
            </div>
            <div>
              <p >待处理</p>
              <p className="admin_value">5</p>
            </div>
          </Link>
          <Link to="/main/Userinfo/UndoTask" style={{ display: 'inline-block', width: '33%' }}>
            <div>
              <Icon type="exclamation-circle-o" style={{ fontSize: 30 }} />
            </div>
            <div>
              <p>未通过</p>
              <p className="admin_value">0</p>
            </div>
          </Link>
        </div>
      </div>
     );
    return (
      <div>
        <Row gutter={8}>
          <Col span={8}>
            {admin}
          </Col>
          <Col span={16}>
            <Row gutter={8}>
              <Col span={6}>
                {arr[0]}
              </Col>
              <Col span={6}>
                {arr[1]}
              </Col>
              <Col span={6}>
                {arr[2]}
              </Col>
              <Col span={6}>
                {arr[3]}
              </Col>
            </Row>
            <Row gutter={8} >
              <Col span={6}>
                {arr[4]}
              </Col>
              <Col span={6}>
                {arr[5]}
              </Col>
              <Col span={6}>
                {arr[6]}
              </Col>
              <Col span={6}>
                {arr[7]}
              </Col>
            </Row>
          </Col>
        </Row>
        <ChangeShowKey
          onChange={this.ChangeShowKey}
          showContent={this.showAddBtn}
          visible={this.state.showAddBtn}
        />
      </div>
    );
  }
}


export default Home;
