import React, { PropTypes } from 'react';
import l2t from 'list2tree';
import config from 'system-config';
// import { asyncGet } from 'async-get-and-post';
import { asyncGet } from './../../../utils/AsyncGetAndPost';

// const config_ = require('./../../../../../config/config');

class Authority extends React.Component {
  constructor() {
    super();
    this.state = {
      softwareTree: [],
      organization: [],
      orgAuthority: [],
      organizationList: [],
    };
  }

  componentWillMount() {
    this.getSoftware();
    this.getOrg();
    this.getOrgAuthority();
  }

  getSoftware = () => {
    asyncGet(`${config.host}/SoftwareInfo/Tree/List`).then((tree) => {
      asyncGet(`${config.host}/SoftwareInfo/Query/List`).then((software) => {
        console.log('SoftwareInfo Result:', tree.data);
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
  }

  getOrg = () => {
    asyncGet(`${config.host}/SystemSetting/Organization/get_organization`).then((data) => {
      const result = l2t.ListToTree(data.data, 0);
      this.setState({
        organization: result,
        organizationList: data.data,
      });
    });
  }
  getOrgAuthority = () => {
    asyncGet(`${config.host}/SystemSetting/OrgAuthority/get_org_authority`).then((data) => {
      this.setState({
        orgAuthority: data.data,
      });
    });
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        softwareTree: this.state.softwareTree,
        organization: this.state.organization,
        organizationList: this.state.organizationList,
        orgAuthority: this.state.orgAuthority,
      })
    );

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}

Authority.propTypes = {
  children: PropTypes.node,
};

export default Authority;
