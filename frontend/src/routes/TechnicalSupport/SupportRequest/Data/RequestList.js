import React, { PropTypes } from 'react';
// import config from 'system-config';
// import { asyncGet } from './../../../utils/AsyncGetAndPost';

class RequestList extends React.Component {
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
    // asyncGet(`${config.host}/SystemSetting/User/get_user_list`).then((data) => {
    const result = [{
      id: 1,
      title: '标题',
      software: '软件',
      tree: '7',
      create_time: '2017-02-23 22:34:33',
      discription: '描述信息',
      statues: 0,
    }, {
      id: 2,
      title: '标题上',
      software: '软件2',
      tree: '7',
      create_time: '2017-04-11 22:34:33',
      discription: '描述信息',
      statues: 1,
    }];
    this.setState({
      data: result,
    });
    // });
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

export default RequestList;

RequestList.propTypes = {
  children: PropTypes.node.isRequired,
};
