import React, { Component, PropTypes } from 'react';
import config from 'system-config';
// import l2t from 'list2tree';
import { asyncGet } from './../../../utils/AsyncGetAndPost';

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

  getData = () => {
    asyncGet(`${config.host}/SoftwareDeployment/DeploymentRequest/get_list`).then((data) => {
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

DeploymentRequest.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DeploymentRequest;
