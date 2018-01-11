import React, { Component, PropTypes } from 'react';

class DeploymentRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}


DeploymentRequest.propTypes = {
  children: PropTypes.object.isRequired,
};


export default DeploymentRequest;
