import React, { Component, PropTypes } from 'react';

class SchemeMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        ...this.props,
      }),
    );

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}


SchemeMain.propTypes = {
  children: PropTypes.node.isRequired,
};


export default SchemeMain;
