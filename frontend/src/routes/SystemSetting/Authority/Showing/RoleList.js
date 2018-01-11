import React from 'react';
import { Menu } from 'antd';

class RoleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  findLable = (id) => {
    let valueTemp = '';
    let x = 0;
    while (valueTemp === '') {
      if (this.props.data[x].key.toString() === id.toString()) valueTemp = this.props.data[x].name;
      x++;
    }
    return valueTemp;
  }
  render() {
    return (
      <div style={{ overflow: 'auto' }}>
        <Menu
          onSelect={(item) => {
            console.log('item', item);
            const label = this.findLable(item.key);
            this.props.onChange({ type: 'role', id: item.key, label });
          }}
        >
          {this.props.data.map(item => (
            <Menu.Item key={item.key}> {item.name}</Menu.Item>
          ))}
        </Menu>
      </div>
    );
  }
}

export default RoleList;

RoleList.propTypes = {
  onChange: React.PropTypes.func,
  data: React.PropTypes.array,
};
