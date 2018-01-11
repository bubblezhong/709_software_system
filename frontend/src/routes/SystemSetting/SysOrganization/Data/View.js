import React, { PropTypes } from 'react';
import config from 'system-config';
// import { asyncGet, asyncPost } from 'async-get-and-post';
import { asyncGet } from './../../../utils/AsyncGetAndPost';

class Organization extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      softList: [],
    };
  }

  componentWillMount() {
    const { params } = this.props;
    this.getOrganizationById(params.id);
    this.getOrgSoftById(params.id);
  }

  // componentWillReceiveProps(nextProps) {
  //   const { params } = nextProps.props;
  //   this.getOrganizationById(params.id);
  // }
  getOrganizationById = (id) => {
    asyncGet(`${config.host}/SystemSetting/Organization/GetInfoById/${id}`).then((data) => {
      this.setState({
        data: data.data,
      });
    });
  };

  getOrgSoftById = (id) => {
    asyncGet(`${config.host}/SystemSetting/Organization/GetSoftByOrgId/${id}`).then((data) => {
      this.setState({
        softList: data.data,
      });
    });
  };

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        data: this.state.data,
        softList: this.state.softList,
      }),
    );

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}

Organization.propTypes = {
  params: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default Organization;
