import React, { Component, PropTypes } from 'react';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        ...this.props,
      })
    );

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}


Main.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Main;
