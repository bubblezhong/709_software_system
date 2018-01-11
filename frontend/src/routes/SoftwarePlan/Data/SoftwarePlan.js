import React, { PropTypes } from 'react';
import config from 'system-config';
// import { asyncGet } from 'async-get-and-post';
import { asyncGet } from './../../utils/AsyncGetAndPost';

class SoftwarePlan extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        plan: [],
        options: [],
      },
    };
  }

  componentWillMount() {
    this.getData();
  }
  getData = () => {
    asyncGet(`${config.host}/SoftwarePlan/Plan/get_softwareplan`).then((result) => {
      this.setState({
        data: result.data,
      });
    });
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        data: this.state.data,
      })
    );

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}

export default SoftwarePlan;

SoftwarePlan.propTypes = {
  children: PropTypes.node,
};
