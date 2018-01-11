import React from 'react';
import l2t from 'list2tree';
import config from 'system-config';
// import { asyncGet } from 'async-get-and-post';
import { asyncGet } from './../../utils/AsyncGetAndPost';

class Organization extends React.Component {
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
    asyncGet(`${config.host}/SystemSetting/Organization/get_organization`).then((data) => {
      const result = l2t.ListToTree(data.data, 0);
      // console.log('organization tree', result);
      this.setState({
        data: result,
      });
    });
  }

  render() {
    // eslint-disable-next-line
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        organizationTree: this.state.data,
      })
    );

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}

export default Organization;
