import React, { Component } from 'react';
import Data from './Data/Organization';
import Showing from './Showing/Organization';

// eslint-disable-next-line
class main extends Component {
  render() {
    return (
      <Data><Showing {...this.props} /></Data>
    );
  }
}

export default main;
