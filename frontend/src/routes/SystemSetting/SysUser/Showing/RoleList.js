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
    const { data = [] } = this.props;
    return (
      <div style={{ overflow: 'auto' }}>
        <Menu
          onSelect={(item) => {
            console.log('item', item);
            const label = this.findLable(item.key);
            this.props.onChange({ type: 'role', id: item.key, label });
          }}
        >
          {data.map((item, index) => (
            <Menu.Item key={`Item-${index}`}> {item.name}</Menu.Item>
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
