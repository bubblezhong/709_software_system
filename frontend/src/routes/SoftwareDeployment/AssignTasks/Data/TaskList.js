// 新建编配任务 初始化
import React, { PropTypes } from 'react';
import config from 'system-config';
// import jsonToList from './../utils/jsonToList';
// import { asyncGet } from 'async-get-and-post';
import { asyncGet } from './../../../utils/AsyncGetAndPost';

class TaskList extends React.Component {
  // componentWillMount = () => {
  //   if (this.props.params.scheme_id) {
  //     this.getScheme(this.props.params.scheme_id);
  //   }
  // }
  getScheme = (id, cb) => {
    asyncGet(`${config.host}/SoftwareDeployment/AssignTasks/TasksByScheme/${id}`).then((data) => {
      // const result = jsonToList(data.data);
      cb(null, data.data);
    });
  };

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        getScheme: this.getScheme,
      }),
    );

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}
TaskList.propTypes = {
  children: PropTypes.node,
};
export default TaskList;
