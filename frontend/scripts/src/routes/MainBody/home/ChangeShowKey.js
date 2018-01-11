import React, { PropTypes } from 'react';
import { Button, Modal } from 'antd';
import './Home.css';

class ChangeShowKey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataShow: [
        { label: '消息提醒', num: '12', path: '/main/Userinfo/Message' },
        { label: '入库申请', num: '12', path: '/main/InventoryRegistration/Input' },
        { label: '计划通知', num: '14', path: '/main/Userinfo/UndoTask' },
        { label: '消息通知', num: '12', path: '/main/Userinfo/Message' },
        { label: '出库申请', num: '3', path: '/main/InventoryRegistration/Output' },
        { label: '用户管理', num: '12', path: '/main/Userinfo/History' },
        { label: '调配申请', num: '12', path: '/main/SoftwareDeployment/DeploymentRequest' },
        { label: '调配方案', num: '12', path: '/main/SoftwareDeployment/Scheme' },
        { label: '调配审核', num: '12', path: '/main/Userinfo/History' },
        { label: '升级完善申请', num: '12', path: '/main/UpgradePerfect/UpgradeApply' },
        { label: '升级完善汇总', num: '12', path: '/main/UpgradePerfect/UpgradeSummary' },
        { label: '升级汇报', num: '12', path: '/main/UpgradePerfect/UpgradeRequest' },
        { label: '需求收集', num: '12', path: '/main/Userinfo/History' },
        { label: '需求汇总', num: '12', path: '/main/Userinfo/History' },
        { label: '信息查询', num: '12', path: '/main/SoftwareInfo/Query' },
        { label: '单位信息', num: '12', path: '/main/SoftwareInfo/UnitInfo' },
        { label: '软件信息', num: '12', path: '/main/SoftwareInfo/SoftwareDetail' },
        { label: '单元信息', num: '12', path: '/main/SoftwareInfo/Category' },
        { label: '谱系信息', num: '12', path: '/main/SoftwareInfo/Module' },
      ],
      visible: false,
    };
  }
  select = (index) => {
    const temp = this.state.dataShow.slice();
    if (temp[index].selected) {
      temp[index].selected = false;
    } else {
      temp[index].selected = true;
    }
    this.setState({ dataShow: temp });
  }
  warning = () => {
    Modal.warning({
      title: '提示',
      content: '最多选择7个快捷键入口',
    });
  }
  filter = () => {
    const temp = this.state.dataShow.filter((item) => {
      return item.selected === true;
    });
    console.log(temp);
    if (temp.length > 7) {
      const temps = temp.splice(0, 7);
      this.props.onChange(temps);
      this.warning();
    } else {
      this.props.onChange(temp);
    }
    this.props.showContent();
  }
  render() {
    const show = this.state.dataShow.map((item, index) => {
      return (
        <div key={index} className={item.selected ? 'ChangeShowKey_card_hover' : 'ChangeShowKey_card'} onClick={() => this.select(index)}>
          <span>{item.label}</span>
          <span className={item.selected ? 'ChangeShowKey_cardIcon_hover' : 'ChangeShowKey_cardIcon'}>
            <img src="./images/check.png" alt="" />
          </span>
        </div>
      );
    });
    return (
      <Modal width="70%" height="80%" maskClosable closable={false} footer={null} visible={this.props.visible} style={{ overflow: 'hidden' }} >
        <div className="ChangeShowKey_title">
          <span>快捷键入口(最多选择七个)</span>
          <Button onClick={this.props.showContent}>取消</Button>
          <Button type="primary" onClick={this.filter}>确定</Button>
        </div>
        <div style={{ overflow: 'auto', height: 400 }}>
          { show }
        </div>
      </Modal>
    );
  }

}
ChangeShowKey.propTypes = {
  visible: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  showContent: PropTypes.func.isRequired,
};
export default ChangeShowKey;
