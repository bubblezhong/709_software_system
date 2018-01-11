import React, { Component, PropTypes } from 'react';

import Data from './Data/SoftwarePlan';
import Showing from './Showing/SoftwarePlan';

class SoftwarePlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    // const page = this.props.routeParams.page;
    // console.log('SoftwarePlan page ', page);
    // console.log('props ShowingSetting √', this.props);
    const {
      dictionary,
      // authority
     } = this.props;
    console.log('dictionary ', dictionary);
    // console.log('authority ', authority);
    return (
      <Data><Showing dictionary={dictionary} /></Data>
    );
  }
}


SoftwarePlan.propTypes = {
  // page: PropTypes.object.isRequired,
  // routeParams: PropTypes.object,
  dictionary: PropTypes.object,
  // authority: PropTypes.object,
};


export default SoftwarePlan;
