import React, { Component } from 'react';
import Data from './Data/Dictionary';
import Showing from './Showing/Dictionary';

// eslint-disable-next-line
class main extends Component {
  render() {
    // console.log('Dictionary main props:', this.props);
    return (
      <Data><Showing {...this.props} /></Data>
    );
  }
}

export default main;
