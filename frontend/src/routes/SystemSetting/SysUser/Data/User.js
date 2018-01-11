import React, { PropTypes } from 'react';
// import l2t from 'list2tree';
// import config from 'system-config';
// import { asyncGet, asyncPost } from 'async-get-and-post';
import { asyncGet, asyncPost } from './../../../utils/AsyncGetAndPost';
import { ListToTree } from './../../../../utils/list2tree';

const config = require('./../../../../../config/config');

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      organization: [],
      organization_list: [],
      role: [],
      class_list: [],
    };
  }

  componentWillMount() {
    this.getData();
    this.getOrganization();
    this.getRole();
    this.getCLass();
  }
  getData = () => {
    asyncGet(`${config.host}/get_userList`).then((data) => {
      this.setState({
        data: data.data,
      });
    });
  }
  getOrganization = () => {
    asyncGet(`${config.host}/getOrganizationList`).then((data) => {
      console.log('data: ', data);
      const result = data.data && ListToTree(data.data, 0);
      this.setState({
        organization: result,
        organization_list: data.data,
      });
    });
  }
  getRole = () => {
    asyncGet(`${config.host}/get_roleList`).then((data) => {
      this.setState({
        role: data.data,
      });
    });
  }

  getCLass = () => {
    asyncGet(`${config.host}/getGroupList`).then((data) => {
      console.log('data: ', data);
      this.setState({
        class_list: data.data,
      });
    });
  }

  editUser = (data, callback) => {
    asyncPost(`${config.host}/edit_userinfo`, data).then((res) => {
      callback(res);
    });
  }

  addUser = (data, callback) => {
    asyncPost(`${config.host}/add_user`, data).then((res) => {
      callback(res);
    });
  }
  deleteUser = (data, callback) => {
    asyncPost(`${config.host}/SystemSetting/User/delete_user`, { id: data }).then(() => {
      callback();
    });
  }

  activeUser = (id, active, callback) => {
    asyncPost(`${config.host}/SystemSetting/User/active_user`, { id, active: parseInt(active, 10) === 1 ? 0 : 1 }).then(() => {
      callback();
    });
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        getData: this.getData,
        editUser: this.editUser,
        addUser: this.addUser,
        deleteUser: this.deleteUser,
        activeUser: this.activeUser,
        data: this.state.data,
        organization: this.state.organization,
        organizationList: this.state.organization_list,
        role: this.state.role,
        classList: this.state.class_list,
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
};
