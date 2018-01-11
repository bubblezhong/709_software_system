import React from 'react';
import { Tree, Input } from 'antd';

const TreeNode = Tree.TreeNode;
const Search = Input.Search;

class SearchTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedKeys: [],
      searchValue: '',
      autoExpandParent: true,
    };
  }

  onExpand = (expandedKeys) => {
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }
  onChange = (e) => {
    const { data_list } = this.props;
    const value = e.target.value;
    const expandedKeys = data_list.map((item) => {
      if (item.label.indexOf(value) > -1) {
        return item.parent_id;
      }
      return null;
    }).filter((item, i, self) => item && self.indexOf(item) === i);
    this.setState({
      expandedKeys,
      searchValue: value,
      autoExpandParent: true,
    });
  }

  findLable = (id) => {
    // console.log('props:', this.props);
    // console.log('Organization id', id);
    let valueTemp = '';
    console.log('data_list', this.props.data_list);
    if (id === '0') valueTemp = '系统';
    let x = 0;
    while (valueTemp === '') {
      if (this.props.data_list[x].key === id) valueTemp = this.props.data_list[x].label;
      x++;
    }
    return valueTemp;
  }
  render() {
    const { searchValue, expandedKeys, autoExpandParent } = this.state;
    const loop = data => data.map((item) => {
      const index = item.label.search(searchValue);
      const beforeStr = item.label.substr(0, index);
      const afterStr = item.label.substr(index + searchValue.length);
      const title = index > -1 ? (
        <span>
          {beforeStr}
          <span style={{ color: '#f50' }}>{searchValue}</span>
          {afterStr}
        </span>
      ) : <span>{item.label}</span>;
      if (item.children) {
        return (
          <TreeNode key={item.key} title={title}>
            {loop(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} title={title} />;
    });
    return (
      <div>
        <Search style={{ width: '100%' }} placeholder="搜索" onChange={this.onChange} />
        <Tree
          onSelect={(key) => {
            const label = this.findLable(key[0]);
            this.props.onChange({ type: 'organization', id: key[0], label });
          }}
          onExpand={this.onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
        >
          {loop([{ key: '0', label: '所有机构', children: this.props.data }])}
        </Tree>
      </div>
    );
  }
}

export default SearchTree;

SearchTree.propTypes = {
  onChange: React.PropTypes.func,
  data: React.PropTypes.array,
  data_list: React.PropTypes.array,
};
