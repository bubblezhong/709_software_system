import React from 'react';
import l2t from 'list2tree';
import config from 'system-config';
// import { asyncGet } from 'async-get-and-post';
import { asyncGet } from './../../../utils/AsyncGetAndPost';

class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeID: null,
      data: { items: [] },  // 初始非必须选项
      jsonsTemp: [],
      organizationTree: [],
      organizationMap: {},
      softwareTree: [],
      moduleTree: [],
    };
  }

  componentWillMount = () => {
    this.getOrganization();
    this.getSoftware();
  };
  getOrganization = () => {
    asyncGet(`${config.host}/SystemSetting/Organization/get_organization`).then((data) => {
      const result = l2t.ListToTree(data.data, 0);
      this.setState({
        organizationTree: result,
      });
    });
  };
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
        this.setState({ softwareTree });
      });
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
        organizationTree: this.state.organizationTree,
        softwareTree: this.state.softwareTree,
        moduleTree: this.state.moduleTree,
        getModule: this.getModule,
      }),
    );

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}

EditModal.propTypes = {
  children: React.PropTypes.node,
};

export default EditModal;
