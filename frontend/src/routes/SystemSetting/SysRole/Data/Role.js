import React, { PropTypes } from 'react';
import { asyncGet, asyncPost } from './../../../utils/AsyncGetAndPost';

const config = require('./../../../../../config/config');


class Role extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentWillMount() {
    this.getData();
  }

  getData = () => {
    asyncGet(`${config.host}/get_roleList`).then((result) => {
      this.setState({
        data: result.data,
      });
    });
  };
  editRole = (data, callback) => {
    asyncPost(`${config.host}/updateRole`, data).then((res) => {
      callback(res);
    });
  };

  addRole = (data, callback) => {
    asyncPost(`${config.host}/addRole`, data).then((res) => {
      callback(res);
    });
  };
  deleteRole = (data, callback) => {
    asyncPost(`${config.host}/deleteRole`, { id: data }).then((res) => {
      callback(res);
    });
  };

  activeRole = (id, active, callback) => {
    asyncPost(`${config.host}/SystemSetting/Role/active_role`, { id, active: active === 1 ? 0 : 1 }).then(() => {
      callback();
    });
  };

  render() {
    // eslint-disable-next-line
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        getData: this.getData,
        editRole: this.editRole,
        addRole: this.addRole,
        deleteRole: this.deleteRole,
        activeRole: this.activeRole,
        data: this.state.data,
      }),
    );

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}


Role.children = {
  children: PropTypes.object.isRequired,
};


export default Role;
