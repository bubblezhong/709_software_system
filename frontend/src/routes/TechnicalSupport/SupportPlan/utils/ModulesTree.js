import React from 'react';
import { Tree } from 'antd';
import l2t from 'list2tree';

const TreeNode = Tree.TreeNode;

class ModulesTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const {
      list = [],
    } = this.props;
    let tree = [];
    // let expandedKeys = [];
    if (list && list.length > 0) {
      const deepList = JSON.parse(JSON.stringify(list));
      // expandedKeys = deepList.map(item => (item.id));
      tree = l2t.ListToTree(deepList, 0);
    }

    const loop = data => data.map((item) => {
      if (item.children) {
        return (
          <TreeNode key={item.key} title={item.label} >
            {loop(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} title={item.label} />;
    });
    return (
      <div>
        <Tree
          defaultExpandAll
          autoExpandParent
        >
          {loop([{
            key: '0',
            label: '软件',
            children: tree,
          }])}
        </Tree>
      </div>
    );
  }
}

export default ModulesTree;

ModulesTree.propTypes = {
  list: React.PropTypes.array,
};
