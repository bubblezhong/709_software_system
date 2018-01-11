import React from 'react';
import { Tree } from 'antd';

const TreeNode = Tree.TreeNode;

class SearchTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  findParents(list, targe) {
    const temp = [];

    const findTree = (treeNode, pId) => {
      let isPar = false;
      if (treeNode.children) {
        isPar = treeNode.children.every((item) => {
          return findTree(item, pId);
        });
      }
      console.log('isPar', isPar);
      if (isPar) {
        temp.push(treeNode.id);
      }
      return treeNode.id === pId;
    };
    findTree(list, targe);

    console.log('temp', temp);

    return temp;
  }

  render() {
    const {
      // modules,      // 被选中的树
      moduleList,   // 模块树
    } = this.props;
    // const sumModuleList = moduleList
    // let showModules = [];
    // this.findParents(moduleList, modules)
    const loop =
      data => data.map((item) => {
        if (item.children) {
          return (
            <TreeNode key={item.key} title={item.label}>
              {loop(item.children)}
            </TreeNode>
          );
        }
        return (<TreeNode key={item.key} title={item.label} />);
      });
    return (
      <Tree
        autoExpandParent
      >
        {loop([{ key: '0', label: '软件', children: moduleList }])}
      </Tree>
    );
  }
}

export default SearchTree;

SearchTree.propTypes = {
  moduleList: React.PropTypes.array,
};
