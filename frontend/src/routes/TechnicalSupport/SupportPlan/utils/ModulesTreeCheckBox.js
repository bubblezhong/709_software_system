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
    const { moduleList } = this.props;
    console.log('moduleList', moduleList);
    const value = e.target.value;
    const expandedKeys = moduleList.map((item) => {
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
  onCheck = (checkedKeys) => {
    const { moduleList } = this.props;
    const tempList = moduleList.filter((item) => {
      return !checkedKeys.every((key) => {
        return !key === item.key;
      });
    }).map((item) => {
      return {
        id: item.key,
        name: item.name,
        parent_id: item.parent_id,
      };
    });
    // console.log('tempList', tempList);
    this.props.onChange(tempList);


    // console.log('onCheck', checkedKeys, info);
  }
  render() {
    const { moduleTree } = this.props;
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
          checkable
          onCheck={this.onCheck}
          onExpand={this.onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
        >
          {loop([{ key: '0', label: '所有单元', children: moduleTree }])}
        </Tree>
      </div>
    );
  }
}

export default SearchTree;

SearchTree.propTypes = {
  moduleList: React.PropTypes.array,
  moduleTree: React.PropTypes.array,
  onChange: React.PropTypes.func,
};
