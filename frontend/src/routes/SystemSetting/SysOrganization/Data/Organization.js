import React from 'react';
import { ListToTree } from './../../../../utils/list2tree';
import { asyncGet, asyncPost } from './../../../utils/AsyncGetAndPost';

const config = require('./../../../../../config/config');

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
    asyncGet(`${config.host}/getOrganizationList`).then((data) => {
      console.log('data: ', data);
      // TODO 单位列表树 1表示顶级单位
      const result = data.data && ListToTree(data.data, 0);
      console.log('result: ', result);
      this.setState({
        data: result,
      });
    });
  };
  editOrganization = (data, callback) => {
    console.log('editOrganization: ', data);
    asyncPost(`${config.host}/updateOrganization`, data).then((res) => {
      callback(res);
    });
  };

  addOrganization = (data, callback) => {
    console.log('addOrganization: ', data);
    asyncPost(`${config.host}/addOrganization`, data).then((res) => {
      callback(res);
    });
  };
  deleteOrganization = (data, callback) => {
    console.log('deleteOrganization: ', data);
    // eslint-disable-next-line
    asyncPost(`${config.host}/deleteOrganizationById`, { id: data }).then((res) => {
      callback(res);
    });
  };

  render() {
    // eslint-disable-next-line
    let childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        getData: this.getData,
        editOrganization: this.editOrganization,
        addOrganization: this.addOrganization,
        deleteOrganization: this.deleteOrganization,
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

export default Organization;
