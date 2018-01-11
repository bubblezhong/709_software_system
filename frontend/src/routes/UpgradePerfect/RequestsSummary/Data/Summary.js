import React, { PropTypes } from 'react';
import config from 'system-config';
import { asyncGet } from './../../../utils/AsyncGetAndPost';

class Summary extends React.Component {
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
    asyncGet(`${config.host}/SystemSetting/User/get_user_list`).then(() => {
      const data = [{
        title: '标题',
        software: '软件',
        create_time: '2017-02-23 22:34:33',
        discription: '描述信息',
        statues: 0,
      }, {
        title: '标题2',
        software: '软件2',
        create_time: '2017-02-23 22:34:33',
        discription: '描述信息q',
        statues: 2,
      }, {
        title: '标题3',
        software: '软件3',
        create_time: '2017-02-23 22:34:33',
        discription: '描述信息w',
        statues: 2,
      }];
      this.setState({
        data,
      });
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

export default Summary;

Summary.propTypes = {
  children: PropTypes.node.isRequired,
};
