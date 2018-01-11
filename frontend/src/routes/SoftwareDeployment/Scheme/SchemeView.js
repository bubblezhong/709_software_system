import React, { Component } from 'react';
import SchemeView from './Showing/SchemeView';
import DataSchemeView from './Data/SchemeView';

class SchemeViewMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { params } = this.props;
    return (
      <DataSchemeView activeID={params.id}>
        <SchemeView {...this.props} activeID={params.id} />
      </DataSchemeView>
    );
  }
}
SchemeViewMain.propTypes = {
  params: React.PropTypes.object,
};

export default SchemeViewMain;
