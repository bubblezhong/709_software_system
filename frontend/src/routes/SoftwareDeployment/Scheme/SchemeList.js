import React, { Component } from 'react';
import SchemeList from './Showing/SchemeList';
import DataSchemeList from './Data/SchemeList';

class SchemeListMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DataSchemeList>
        <SchemeList />
      </DataSchemeList>
    );
  }
}

export default SchemeListMain;
