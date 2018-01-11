import React, { PropTypes } from 'react';
import { message } from 'antd';
import config from 'system-config';
// import l2t from 'list2tree';
import { asyncGet, asyncPost } from './../../../utils/AsyncGetAndPost';

class NewAndEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      softwareList: [],
      tree: [],
    };
  }

  componentWillMount() {
    this.getRequests();
  }
  getRequests = () => {
    asyncGet(`${config.host}/upgrade-perfect/request/1`).then((cb) => {
      this.setState({ tree: cb.data });
    });
  }

  handleNew = (options) => {
    asyncPost(`${config.host}/upgrade-perfect/summary/new`, options).then((cb) => {
      if (cb.code === 0) message.success('新建成功');
    });
  }
  handleEdit = (options) => {
    asyncPost(`${config.host}/upgrade-perfect/summary/edit`, options).then((cb) => {
      if (cb.code === 0) message.success('修改成功');
    });
  }
  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        getSoftwareByTree: this.getSoftwareByTree,
        handleNew: this.handleNew,
        handleEdit: this.handleEdit,
      })
    );

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}

export default NewAndEdit;

NewAndEdit.propTypes = {
  children: PropTypes.node.isRequired,
};
