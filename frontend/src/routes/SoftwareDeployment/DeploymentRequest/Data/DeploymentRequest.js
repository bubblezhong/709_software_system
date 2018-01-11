import React, { Component, PropTypes } from 'react';
import config from 'system-config';
// import l2t from 'list2tree';
import { asyncGet, asyncPost } from './../../../utils/AsyncGetAndPost';

class DeploymentRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      softwareTree: [],
    };
  }
  componentWillMount() {
    this.getData();
    // this.getSoftware();
  }
  // getSoftware = () => {
  //   asyncGet(`${config.host}/SoftwareInfo/Tree/List`).then((tree) => {
  //     asyncGet(`${config.host}/SoftwareInfo/Query/List`).then((software) => {
  //       console.log('SoftwareInfo Result:', tree.data);
  //       const treeList = tree.data;
  //       treeList.forEach((item) => {
  //         item.id = `tree_${item.id}`;
  //         item.parent_id = `tree_${item.parent_id}`;
  //       });
  //       const softwareList = software.data;
  //       softwareList.forEach((item, i) => {
  //         item.id = `software_${item.key}`;
  //         // item.parent_id = `tree_${item.tree_id}` // 正式使用
  //         item.parent_id = `tree_${i}`;   // 临时使用
  //       });
  //       const result = treeList.concat(softwareList);
  //       // console.log('getSoftware Result:::', result);
  //       const softwareTree = l2t.ListToTree(result, 'tree_0');
  //       // console.log('treeResult', treeResult);
  //       this.setState({ softwareTree });
  //     });
  //   });
  // }

  getData = () => {
    asyncGet(`${config.host}/SoftwareDeployment/DeploymentRequest/get_list`).then((data) => {
      this.setState({
        data: data.data,
      });
    });
  }
  editRequest = (values) => {
    asyncPost(`${config.host}/SoftwareDeployment/DeploymentRequest/edit`, values).then(() => {
      this.getData();
    });
  }
  addRequest = (values) => {
    // 新建 请求信息 内容仅保存
    asyncPost(`${config.host}/SoftwareDeployment/DeploymentRequest/add`, values).then(() => {
      this.getData();
    });
  }

  submitRequest = (id) => {
    // 根据 ID 上报信息
    asyncGet(`${config.host}/SoftwareDeployment/DeploymentRequest/Submit/${id}`).then((data) => {
      this.setState({
        data: data.data,
      });
    });
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        data: this.state.data,
        softwareTree: this.state.softwareTree,
        editRequest: this.editRequest,
        addRequest: this.addRequest,
        submitRequest: this.submitRequest,
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
