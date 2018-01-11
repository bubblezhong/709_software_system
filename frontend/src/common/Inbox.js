import React, { Component } from 'react';


class Inbox extends Component {
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || 'Welcome to your Inbox'}
      </div>
    );
  }
}


Inbox.propTypes = {
  children: React.PropTypes.object.isRequired,
};


export default Inbox;
