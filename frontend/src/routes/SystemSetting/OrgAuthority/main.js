import React, { Component } from 'react';
import Data from './Data/OrgAuthority';
import Showing from './Showing/OrgAuthority';

// eslint-disable-next-line
class main extends Component {
  render() {
    console.log('Authority main props:', this.props);
    return (
      <Data><Showing {...this.props} /></Data>
    );
  }
}

export default main;
