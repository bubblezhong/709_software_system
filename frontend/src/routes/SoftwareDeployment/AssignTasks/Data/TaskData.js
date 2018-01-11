import React from 'react';

class TaskData extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentWillMount() {
    // eslint-disable-next-line
    if (this.props.params.task_id !== 'New') {
      this.getTask();
    }
  }

  getTask() {
    this.setState({
      data: {
        softwareName: '软件',
        softwareType: '船',
        softwarePosition: '位置',
        useOrgName: '555',
        manageOrgName: '部门',
        deputyOrgname: '代表',
        planDate: '2017-1-1',
      },
    });
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        defaultValue: this.state.data,
      }),
    );
    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}


TaskData.propTypes = {
  children: React.PropTypes.object.isRequired,
};


export default TaskData;
