import React from 'react';
import config from 'system-config';
// import { asyncGet } from 'async-get-and-post';
import { asyncGet } from './../../../utils/AsyncGetAndPost';

class Data extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentWillMount() {
    this.getData();
  }

  getData = () => {
    asyncGet(`${config.host}/SystemSetting/Dictionary/get_dictionary`).then((result) => {
      this.setState({
        data: result.data,
      });
    });
  };

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        data: this.state.data,
      }),
    );

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}

Data.propTypes = {
  children: React.PropTypes.object.isRequired,
};


export default Data;
