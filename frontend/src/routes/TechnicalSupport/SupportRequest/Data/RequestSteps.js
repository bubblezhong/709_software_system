import React, { PropTypes } from 'react';
// import config from 'system-config';
// import { asyncGet } from './../../../utils/AsyncGetAndPost';

class RequestList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }

  componentWillMount() {
    const { params } = this.props;
    if (params.id !== 'new') {
      this.getData();
    }
  }

  getData = () => {
    // asyncGet(`${config.host}/SystemSetting/User/get_user_list`).then((data) => {
    const result = {
      id: 1,
      title: '标题',
      software: '软件',
      tree: '7',
      create_time: '2017-02-23 22:34:33',
      discription: '描述信息',
      statues: 0,
      summaryList: [
        { id: 1, title: '汇总标题1', create_time: '2017-01-12 13:23:23' },
        { id: 2, title: '汇总标题2', create_time: '2017-01-12 13:23:23' },
        { id: 3, title: '汇总标题3', create_time: '2017-01-12 13:23:23' },
        { id: 4, title: '汇总标题4', create_time: '2017-01-12 13:23:23' },
        { id: 5, title: '汇总标题5', create_time: '2017-01-12 13:23:23' },
        { id: 6, title: '汇总标题6', create_time: '2017-01-12 13:23:23' },
      ],
    };
    this.setState({
      data: result,
    });
    // });
  }

  submmitRequest = (options) => {
    console.log('options', options);
  };

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        data: this.state.data,
        submmitRequest: this.submmitRequest,
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
  params: PropTypes.object.isRequired,
};
