import React, { Component, PropTypes } from 'react';
import config from 'system-config';
import l2t from 'list2tree';
import { asyncGet } from './../../../utils/AsyncGetAndPost';

class DeploymentRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moduleTree: [],
      softwareTree: [],
    };
  }
  componentWillMount() {
    this.getSoftware();
  }
  getSoftware = () => {
    asyncGet(`${config.host}/SoftwareInfo/Tree/List`).then((tree) => {
      asyncGet(`${config.host}/SoftwareInfo/Query/ListData`).then((software) => {
        // console.log('SoftwareInfo Result:', tree.data);
        const treeList = tree.data;
        treeList.forEach((item) => {
          item.id = `tree_${item.id}`;
          item.parent_id = `tree_${item.parent_id}`;
        });
        const softwareList = software.data;
        softwareList.forEach((item, i) => {
          item.id = `software_${item.key}`;
          // item.parent_id = `tree_${item.tree_id}` // 正式使用
          item.parent_id = `tree_${i}`;   // 临时使用
        });
        const result = treeList.concat(softwareList);
        // console.log('getSoftware Result:::', result);
        const softwareTree = l2t.ListToTree(result, 'tree_0');
        // console.log('treeResult', treeResult);
        this.setState({ softwareTree, software: software.data });
      });
    });
  }

  getData = (id) => {
    asyncGet(`${config.host}/SoftwareInfo/Tree/ModuleBySoftwareID/${id}`).then((data) => {
      const moduleTree = l2t.ListToTree(data.data, 0);
      this.setState({ moduleTree });
    });
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        moduleTree: this.state.moduleTree,
        softwareTree: this.state.softwareTree,
        getData: this.getData,
      })
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
};

export default DeploymentRequest;
