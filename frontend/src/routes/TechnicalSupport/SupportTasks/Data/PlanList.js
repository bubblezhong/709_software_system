import React, { PropTypes } from 'react';
import config from 'system-config';
import { asyncGet } from './../../../utils/AsyncGetAndPost';

class PlanList extends React.Component {
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
    // console.log('getSoftwareByTree', id); √
    asyncGet(`${config.host}/SoftwareInfo/Query/ListData`).then(() => {
      // const softwareList = software.data;
      const data = [{
        id: 1,
        title: '标题1',
        software: '软件1',
        create_time: '2017-02-23 22:34:33',
        description: '描述信息1',
        status: 0,
      }, {
        id: 2,
        title: '标题2',
        software: '软件2',
        create_time: '2017-02-23 22:34:33',
        description: '描述信息2',
        status: 1,
      }, {
        id: 3,
        title: '标题3',
        software: '软件3',
        create_time: '2017-02-23 22:34:33',
        description: '描述信息3',
        status: 2,
      }, {
        id: 4,
        title: '标题4',
        software: '软件4',
        create_time: '2017-02-23 22:34:33',
        description: '描述信息4',
        status: 1,
      }];

      this.setState({ data });
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

export default PlanList;

PlanList.propTypes = {
  children: PropTypes.node.isRequired,
};
