import React, { Component, PropTypes } from 'react';
import { Menu, Icon } from 'antd';
import { browserHistory } from 'react-router';
import './Sidebar.css';

const SubMenu = Menu.SubMenu;
const URL_PREFIX = '/main/';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    const { routes } = this.props;
    let current = 0;
    let defaultOpenKeys = [];
    if (routes[2] && routes[2].path) {
      current = routes[2].path;
      defaultOpenKeys = [routes[1].path];
    } else {
      current = routes[1].path;
    }
    this.state = {
      openKeys: defaultOpenKeys,
      current,
      // defaultOpenKeys,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('props: ', this.props.routes);
    console.log('click: ', e);
    if (e.key === 'home') { // 首页特例
      this.setState({
        current: 'home',
      }, () => {
        browserHistory.push('/main');
      });
      return;
    }
    const url = URL_PREFIX + e.keyPath.reverse().join('/');
    console.log('url: ', url);
    this.setState({
      current: e.key,
    }, () => {
      browserHistory.push(url);
    });
  }

  render() {
    const { authority } = this.props;
    // console.log('authority', authority);

    // const authorityMap = {};
    // authority.forEach((item) => {
    //   authorityMap[item.key] = item.value === 1 ? '' : 'none';
    // });
    // console.log('System authorityMap', authority);
    // console.log('this.state.current: ', this.state.current);
    // console.log('this.state.defaultOpenKeys: ', this.state.defaultOpenKeys);
    return (
      <div>
        <Menu
          defaultSelectedKeys={[this.state.current]}
          openKeys={this.state.openKeys}
          onOpenChange={(openKeys) => {
            console.log('openKeys', openKeys);
            // console.log();
            this.setState({ openKeys: openKeys.slice(-1) });
          }}
          theme="dark"
          onClick={this.handleClick}
          mode="inline"
          style={{ width: 200, minHeight: 800, background: '#404040' }}
        >
          <Menu.Item key="home" style={{ display: authority.Home, marginTop: 50 }}>
            <Icon type="home" />首页
          </Menu.Item>
          <SubMenu
            key="SoftwareInfo"
            title={
              <span>
                <Icon type="mail" />
                <span>软件信息管理</span>
              </span>
            }
          >
            <Menu.Item key="Query" style={{ display: authority.softSearch }} >信息查询</Menu.Item>
            <Menu.Item key="UnitInfo">单位信息</Menu.Item>
            <Menu.Item key="SoftwareDetail" style={{ display: authority.softtongji }}>软件信息</Menu.Item>
            <Menu.Item key="Category">单元信息</Menu.Item>
            <Menu.Item key="Module">谱系信息</Menu.Item>
          </SubMenu>
          <SubMenu
            key="InventoryRegistration"
            title={
              <span>
                <Icon type="appstore" />
                <span>软件库存登记管理</span>
              </span>
            }
          >
            <Menu.Item key="Input">软件入库</Menu.Item>
            <Menu.Item key="Output">软件出库</Menu.Item>
            <Menu.Item key="Retire">软件退役</Menu.Item>
          </SubMenu>
          {/* <Menu.Item key="SoftwarePlan"><Icon type="setting" />计划制定</Menu.Item>*/}
          <SubMenu
            key="SoftwarePlan"
            title={
              <span>
                <Icon type="setting" />
                <span>计划管理</span>
              </span>
            }
          >
            <Menu.Item key="PlanRemind">计划提醒</Menu.Item>
            <Menu.Item key="PlanInfo">计划信息</Menu.Item>
          </SubMenu>
          <SubMenu
            key="SoftwareDeployment"
            title={
              <span>
                <Icon type="book" />
                <span>软件调配管理</span>
              </span>
            }
          >
            <Menu.Item key="DeploymentRequest">调配申请</Menu.Item>
            <Menu.Item key="DeploymentScheme">调配方案</Menu.Item>
            {/* <Menu.Item key="AssignTasks">编配任务</Menu.Item> */}
          </SubMenu>
          <SubMenu
            key="SoftwareDaily"
            title={
              <span>
                <Icon type="setting" />
                <span>软件日常登记</span>
              </span>
            }
          >
            <Menu.Item key="Registration">日常登记</Menu.Item>
            <Menu.Item key="Collect">登记汇总</Menu.Item>
          </SubMenu>
          <SubMenu
            key="TechnicalSupport"
            title={
              <span>
                <Icon type="setting" />
                <span>技术保障支持</span>
              </span>
            }
          >
            <Menu.Item key="SupportRequest">技术保障申请</Menu.Item>
            {/*  <Menu.Item key="RequestsSummary">故障信息汇总</Menu.Item>  */}
            <Menu.Item key="SupportScheme">技术保障方案</Menu.Item>
            {/*  <Menu.Item key="SupportTasks">技术保障任务</Menu.Item>  /*}
            {/*  <Menu.Item key="65">支持信息记录</Menu.Item> */}
            {/*  <Menu.Item key="66">故障维修记录</Menu.Item> */}
            <Menu.Item key="OnlineHelp">在线帮助库</Menu.Item>
          </SubMenu>
          <SubMenu
            key="UpgradePerfect"
            title={
              <span>
                <Icon type="setting" />
                <span>升级完善管理</span>
              </span>
            }
          >
            <Menu.Item key="UpgradeRequest">升级需求上报</Menu.Item>
            <Menu.Item key="UpgradeSummary">升级完善汇总</Menu.Item>
            <Menu.Item key="UpgradeApply">升级完善申请</Menu.Item>
            <Menu.Item key="UpgradeScheme">升级完善方案</Menu.Item>
          </SubMenu>
          <SubMenu
            key="Userinfo"
            title={
              <span>
                <Icon type="user" />
                <span>个人中心</span>
              </span>
            }
          >
            <Menu.Item key="Info">账号管理</Menu.Item>
            <Menu.Item key="UndoTask">待办事项</Menu.Item>
            <Menu.Item key="History">历史记录</Menu.Item>
            <Menu.Item key="Message">消息提醒</Menu.Item>
            <Menu.Item key="EditPassword">密码修改</Menu.Item>
          </SubMenu>
          <SubMenu
            key="SystemSetting"
            title={
              <span>
                <Icon type="setting" />
                <span>系统设置</span>
              </span>
            }
          >
            <Menu.Item key="ParameterSetting">参数设置</Menu.Item>
            <Menu.Item key="OrganizationStructure">组织结构</Menu.Item>
            <Menu.Item key="UserManage">用户管理</Menu.Item>
            <Menu.Item key="RoleManage">角色管理</Menu.Item>
            <Menu.Item key="MenuManage">菜单管理</Menu.Item>
            <Menu.Item key="AuthorityManage">权限管理</Menu.Item>
            <Menu.Item key="ProcessConfiguration">流程配置</Menu.Item>
            <Menu.Item key="Backup">初始化备份</Menu.Item>
            <Menu.Item key="RecordInfo">日志信息</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }

}


export default Sidebar;

Sidebar.propTypes = {
  authority: PropTypes.object,
  routes: PropTypes.array,
};
