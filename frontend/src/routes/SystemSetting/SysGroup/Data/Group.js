import React from 'react';
// import { asyncGet, asyncPost } from './../../../utils/AsyncGetAndPost';
// import config from './../../../../../config/config';
import config from 'system-config';
// import { asyncGet, asyncPost } from 'async-get-and-post';
import { asyncGet, asyncPost } from './../../../utils/AsyncGetAndPost';

class Group extends React.Component {
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
    asyncGet(`${config.host}/SystemSetting/Group/get_group_list`).then((result) => {
      this.setState({
        data: result.data,
      });
    });
  };
  editGroup = (data, callback) => {
    asyncPost(`${config.host}/SystemSetting/Group/edit_group`, data).then(() => {
      callback();
    });
  };
  addGroup = (data, callback) => {
    asyncPost(`${config.host}/SystemSetting/Group/add_group`, data).then(() => {
      callback();
    });
  };
  deleteGroup = (data, callback) => {
    asyncPost(`${config.host}/SystemSetting/Group/delete_group`, { id: data }).then(() => {
      callback();
    });
  };
  activeGroup = (id, active, callback) => {
    asyncPost(`${config.host}/SystemSetting/Group/active_group`, { id, active: active === 1 ? 0 : 1 }).then(() => {
      callback();
    });
  };

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        getData: this.getData,
        editGroup: this.editGroup,
        addGroup: this.addGroup,
        deleteGroup: this.deleteGroup,
        activeGroup: this.activeGroup,
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


Group.propTypes = {
  children: React.PropTypes.object.isRequired,
};


export default Group;
