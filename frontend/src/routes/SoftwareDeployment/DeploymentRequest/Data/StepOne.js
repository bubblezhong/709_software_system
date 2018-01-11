import React, { Component, PropTypes } from 'react';
import config from 'system-config';
import l2t from 'list2tree';
import { asyncGet } from './../../../utils/AsyncGetAndPost';

class DeploymentRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moduleTree: [],
      tree: [],
      software: [],
    };
  }

  componentWillMount() {
    this.getTree();
  }

  // componentWillReceiveProps(nextProps) {
  //   // console.log('nextProps', nextProps);
  //   if (nextProps.defaultValue.tree_id &&
  //       this.state.treeIdTemp !== nextProps.defaultValue.tree_id) {
  //     const { tree_id } = nextProps.defaultValue;
  //     this.getSoftware(tree_id);
  //   }
  //   if (nextProps.defaultValue.tree_id &&
  //       this.state.treeIdTemp !== nextProps.defaultValue.tree_id) {
  //     const { tree_id } = nextProps.defaultValue;
  //     this.getSoftware(tree_id);
  //   }
  // }

  getTree = () => {
    asyncGet(`${config.host}/SoftwareInfo/Tree/List`).then((treeResult) => {
      const treeList = treeResult.data;
      const tree = l2t.ListToTree(treeList, 0);
      this.setState({ tree });
    });
  };
  // (TODO) 修改API
  getSoftware = () => {
    asyncGet(`${config.host}/SoftwareInfo/Query/ListData`).then((software) => {
      this.setState({ software: software.data });
    });
  };
  getModule = (id) => {
    asyncGet(`${config.host}/SoftwareInfo/Tree/ModuleBySoftwareID/${id}`).then((data) => {
      const moduleTree = l2t.ListToTree(data.data, 0);
      this.setState({ moduleTree });
    });
  };

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        tree: this.state.tree,             // 谱系
        getSoftware: this.getSoftware,     // 根据 谱系 获取 不带版本的 软件列表
        software: this.state.software,     // 软件列表
        getModule: this.getModule,         // 根据 不带版本软件ID 获取模块树
        moduleTree: this.state.moduleTree, // 模块树 （不一定有）
      }),
    );

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}

DeploymentRequest.propTypes = {
  children: PropTypes.node.isRequired,
  // defaultValue: PropTypes.object,
};

export default DeploymentRequest;
