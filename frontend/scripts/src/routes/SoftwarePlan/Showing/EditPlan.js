import React from 'react';
import Data from './../Data/Organization';
import Showing from './EditForm';

class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <Data><Showing {...this.props} /></Data>
    );
  }
}
export default Edit;
