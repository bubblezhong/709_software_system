import React, { PropTypes } from 'react';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}


Index.propTypes = {
  children: PropTypes.object.isRequired,
};


export default Index;
