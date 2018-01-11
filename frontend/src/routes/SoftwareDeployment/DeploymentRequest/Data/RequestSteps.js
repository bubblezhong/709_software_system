import React, { Component, PropTypes, message } from 'react';
import config from 'system-config';
import l2t from 'list2tree';
import { asyncGet } from './../../../utils/AsyncGetAndPost';

class DeploymentRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultValue: {},
      softwareList: [],
      moduleList: [],
    };
  }
  componentWillMount() {
    const { id } = this.props.params;
    this.getRequest(id);
  }
  getRequest = (id) => {
    asyncGet(`${config.host}/SoftwareDeployment/DeploymentRequest/GetOneById/${id}`).then((result) => {
      if (result.code === 0) {
        const defaultValue = result.data.request;
        const softwareList = result.data.software_list;
        const moduleListOld = result.data.module_list;
        const moduleList = l2t.ListToTree(moduleListOld, 0);
        this.setState({ defaultValue, softwareList, moduleList });
      } else message.error(result.msg);
    });
  }
  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        defaultValue: this.state.defaultValue,
        softwareList: this.state.softwareList,
        moduleList: this.state.moduleList,
      })
    );

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}

DeploymentRequest.propTypes = {
  params: PropTypes.object,
  children: PropTypes.node,
};

export default DeploymentRequest;
