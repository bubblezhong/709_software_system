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
      console.log('finding...', x);
      if (this.props.data[x].key.toString() === id.toString()) {
        console.log('find it !');
        valueTemp = this.props.data[x].name;
      }
      x++;
    }
    return valueTemp;
  }
  render() {
    return (
      <div>
        {/*
        <Search style={{ width: '100%' }} placeholder="搜索" onChange={this.onChange} /> */}
        <div style={{ overflow: 'auto' }}>
          <Menu
            onSelect={(item) => {
              const label = this.findLable(item.key);
              this.props.onChange({ type: 'class', id: item.key, label });
            }}
          >
            {this.props.data.map((item, index) => (
              <Menu.Item key={`item-${index}-${item.key}`}> {item.name}</Menu.Item>
            )
            )}
          </Menu>
        </div>
      </div>
    );
  }
}

export default RoleList;


RoleList.propTypes = {
  onChange: React.PropTypes.func,
  data: React.PropTypes.array,
};
