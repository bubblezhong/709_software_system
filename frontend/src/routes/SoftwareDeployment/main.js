import React, { Component, PropTypes } from 'react';

class SoftwarePlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const {
      // dictionary,
      authority = {},
     } = this.props;
    const dictionaryMap = {};
    const dictionaryFilter = [];
    // console.log('props', this);
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        authority,
        dictionaryMap,
        dictionaryFilter,
      })
    );
    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}


SoftwarePlan.propTypes = {
  children: PropTypes.node,
  // dictionary: PropTypes.object,
  authority: PropTypes.object,
};


export default SoftwarePlan;
