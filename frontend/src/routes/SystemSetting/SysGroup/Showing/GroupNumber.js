/* eslint-disable */
import React from 'react';
// import { asyncGet } from './../../../utils/AsyncGetAndPost';
// import config from './../../../../config/config';
import config from 'system-config';
// import { asyncGet } from 'async-get-and-post';
import { asyncGet } from './../../../utils/AsyncGetAndPost';

class GroupNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_list: false,
      user_list: [],
    };
  }

  getData = () => {
    asyncGet(`${config.host}/SystemSetting/Group/get_group_number/${this.props.record.key}`).then((result) => {
      this.setState({
        user_list: result.data,
        show_list: true,
      });
    });
  };

  render() {
    const { show_list, user_list } = this.state;
    let list = <span>暂无成员</span>;
    if (show_list && user_list.length > 0) {
      list = user_list.map((item, i) => (
        <a style={{ marginRight: 5 }} key={i.toString()}>{item.real_name}</a>),
      );
    }
    return (
      <span>
        {!show_list && <a onClick={this.getData}> 获取成员列表 </a>}
        {show_list && list}
      </span>
    );
  }
}

export default GroupNumber;

GroupNumber.propTypes = {
  record: React.PropTypes.object,
};
