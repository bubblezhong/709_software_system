import React, { Component } from 'react';
import Data from './Data/Role';
import Showing from './Showing/Role';

// eslint-disable-next-line
class main extends Component {
  render() {
    console.log('Role main props:', this.props);
    return (
      <Data><Showing {...this.props} /></Data>
    );
  }
}

export default main;
