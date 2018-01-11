import React, { PropTypes } from 'react';
import config from 'system-config';
// import { asyncGet } from 'async-get-and-post';
// import { asyncGet } from './../../../async-get-and-post/index';
import { asyncGet } from './../../../utils/AsyncGetAndPost';

class Authority extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      role: [],
    };
  }

  componentWillMount() {
    this.getData();
    this.getRole();
  }
  getData = () => {
    asyncGet(`${config.host}/SystemSetting/Authority/get_authority`).then((result) => {
      this.setState({
        data: result.data,
      });
    });
  }
  getRole = () => {
    asyncGet(`${config.host}/SystemSetting/Role/get_role_list`).then((data) => {
      this.setState({
        role: data.data,
      });
    });
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        data: this.state.data,
        role: this.state.role,
      })
    );

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}

export default Authority;

Authority.propTypes = {
  children: PropTypes.node,
};
