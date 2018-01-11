import React, { Component } from 'react';
import Data from './Data/View';
import Showing from './Showing/View';

// eslint-disable-next-line
class View extends Component {
  render() {
    const { params } = this.props;
    return (
      <Data params={params}>
        <Showing {...this.props} />
      </Data>
    );
  }
}

View.propTypes = {
  params: React.PropTypes.object.isRequired,
};


export default View;
