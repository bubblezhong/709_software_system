import React, { PropTypes } from 'react';
import config from 'system-config';
import l2t from 'list2tree';
import { asyncGet } from './../../../utils/AsyncGetAndPost';

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      softwareList: [],
      tree: [],
    };
  }

  componentWillMount() {
    const { treeId } = this.props;
    this.getSoftware();
    if (treeId) {
      this.getSoftwareByTree(treeId);
    }
  }
  getSoftware = () => {
    asyncGet(`${config.host}/SoftwareInfo/Tree/List`).then((cb) => {
      const treeList = cb.data;
      treeList.forEach((item) => {
        item.id = item.id.toString();
        item.parent_id = item.parent_id.toString();
      });
      const tree = l2t.ListToTree(treeList, '0');
      this.setState({ tree });
    });
  }

  getSoftwareByTree = (id) => {
    // console.log('getSoftwareByTree', id); √
    asyncGet(`${config.host}/SoftwareInfo/Query/ListData?id=${id}`).then((software) => {
      const softwareList = software.data;
      this.setState({ softwareList });
    });
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        getSoftwareByTree: this.getSoftwareByTree,
        softwareList: this.state.softwareList,
        tree: this.state.tree,
      })
    );

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}

export default User;

User.propTypes = {
  children: PropTypes.node.isRequired,
  treeId: PropTypes.num,
};
