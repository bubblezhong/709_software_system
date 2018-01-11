import React, { Component, PropTypes } from 'react';

class AssignTasksMain extends Component {
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


AssignTasksMain.propTypes = {
  children: PropTypes.node.isRequired,
};


export default AssignTasksMain;
