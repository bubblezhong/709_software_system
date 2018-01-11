import React, { PropTypes } from 'react';
import l2t from 'list2tree';
import config from 'system-config';
import { asyncGet } from './../../../utils/AsyncGetAndPost';

class Organization extends React.Component {
  constructor() {
    super();
    this.state = {
      organization: [],
      organization_list: [],
    };
  }

  componentWillMount() {
    this.getOrganization();
  }
  getOrganization = () => {
    asyncGet(`${config.host}/SystemSetting/Organization/get_organization`).then((data) => {
      const result = l2t.ListToTree(data.data, 0);
      this.setState({
        organization: result,
        organization_list: data.data,
      });
    });
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        data: this.state.organization,
        data_list: this.state.organization_list,
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

Organization.propTypes = {
  children: PropTypes.node.isRequired,
};
