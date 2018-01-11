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
    if (!(this.props.params.id && this.props.params.id === 'New')) {
      this.getData();
    }
  }

  getData = () => {
    // console.log('getSoftwareByTree', id); √
    asyncGet(`${config.host}/SoftwareInfo/Query/ListData`).then(() => {
      // const softwareList = software.data;
      const data = {
        id: 1,
        title: '标题1',
        software: '软件1',
        create_time: '2017-02-23 22:34:33',
        description: '描述信息1',
        status: 0,
      };
      this.setState({ data });
    });
  };

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

export default PlanList;

PlanList.propTypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.object.isRequired,
};
