import React from 'react';
import { Icon, Button } from 'antd';
import './AuthorityManage.css';
import UnitData from './UnitData';
import RoleMenu from './RoleMenu';

const ButtonGroup = Button.Group;
const styles = {
  activeCard: {
    backgroundColor: '#6e95fe',
    color: '#fff',
  },
  normalCard: {
    backgroundColor: '#fff',
    color: '#000',
  },
};
class AuthorityManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'UnitData',
    };
  }
  changeShow = (type) => {
    this.setState({ show: type });
  }
  render() {
    const { show } = this.state;
    const Category = (
      <div className="AuthorityManage_title">
        <div className="AuthorityManage_unit" onClick={() => this.changeShow('UnitData')} style={show === 'UnitData' ? styles.activeCard : styles.normalCard}>
          <span style={{ height: 75, verticalAlign: 'middle', display: 'inline-block' }}>单位</span>
          <Icon type="arrow-right" style={{ fontSize: 30 }} />
          <span style={{ height: 75, verticalAlign: 'middle', display: 'inline-block' }}>数据</span>
        </div>
        <div className="AuthorityManage_role" onClick={() => this.changeShow('RoleMenu')} style={show === 'RoleMenu' ? styles.activeCard : styles.normalCard}>
          <span style={{ height: 75, verticalAlign: 'middle', display: 'inline-block' }}>角色</span>
          <Icon type="arrow-right" style={{ fontSize: 30 }} />
          <span style={{ height: 75, verticalAlign: 'middle', display: 'inline-block' }}>菜单</span>
        </div>
      </div>
    );
    const Btns = (
      <div className="AuthorityManage_Btn">
        <ButtonGroup style={{ marginBottom: 10 }}>
          <Button icon="reload" style={{ width: 110, height: 40, fontSize: 14 }}>刷新</Button>
          <Button icon="file-add" style={{ width: 110, height: 40, fontSize: 14 }}>新增下级</Button>
          <Button icon="login" style={{ width: 110, height: 40, fontSize: 14 }}>导入</Button>
          <Button icon="logout" style={{ width: 110, height: 40, fontSize: 14 }}>导出</Button>
          <Button icon="printer" style={{ width: 110, height: 40, fontSize: 14 }}>打印</Button>
          <Button icon="delete" style={{ width: 110, height: 40, fontSize: 14 }}>删除</Button>
        </ButtonGroup>
        <Button icon="save" className="AuthorityManage_save">保存</Button>
      </div>
    );
    return (
      <div>
        {Category}
        {Btns}
        {this.state.show === 'UnitData' &&
          <UnitData />
        }
        {this.state.show === 'RoleMenu' &&
          <RoleMenu />
        }

      </div>
    );
  }
}
export default AuthorityManage;
