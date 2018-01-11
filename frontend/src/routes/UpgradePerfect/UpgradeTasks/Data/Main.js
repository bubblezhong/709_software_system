import React, { PropTypes } from 'react';
import config from 'system-config';
import { asyncGet } from './../../../utils/AsyncGetAndPost';

class User extends React.Component {
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
    asyncGet(`${config.host}/SystemSetting/User/get_user_list`).then((data) => {
      this.setState({
        data: data.data,
      });
    });
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        data: this.state.data,
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
