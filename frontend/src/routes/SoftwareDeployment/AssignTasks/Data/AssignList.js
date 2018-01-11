import React, { PropTypes } from 'react';
import { message } from 'antd';
import config from 'system-config';
// import { asyncGet } from 'async-get-and-post';
import { asyncGet, asyncPost } from './../../../utils/AsyncGetAndPost';

class AssignList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentWillMount() {
    this.getData();
  }

  // 获取任务列表
  getData = () => {
    console.log('get Data');
    asyncGet(`${config.host}/SoftwareDeployment/AssignTasks/List`).then((data) => {
      this.setState({
        data: data.data,
      });
    });
  };

  // 发布任务
  publishTasks = (id) => {
    const data = { id };
    asyncPost(`${config.host}/SoftwareDeployment/Scheme/publish`, data)
      .then((result) => {
        if (result.code === 0) {
          message.success('发布成功');
          this.getData();
        }
      });
  };

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        publish: this.publishTasks,
        schemeList: this.state.data,
      }),
    );

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}
AssignList.propTypes = {
  children: PropTypes.node,
};
export default AssignList;
