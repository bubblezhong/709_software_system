import React, { PropTypes } from 'react';
import config from 'system-config';
// import l2t from 'list2tree';
import { asyncGet } from './../../../utils/AsyncGetAndPost';

class HelpSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      result: {},
      loading: true,
    };
  }

  componentWillMount() {
    // 初始化数据
    let value = null;
    console.log('this.props.params.id', this.props.params.id);
    try {
      value = this.props.params.id;
    } catch (e) {
      console.log('err', e);
    }
    if (value) {
      this.getOneHelp(value);
    }
  }

  // 搜索结果
  getOneHelp = (value) => {
    asyncGet(`${config.host}/SoftwareInfo/Query/ListData?id=${value}`).then(() => {
      const resultList = [
        {
          id: 1,
          title: '结果1',
          targe: ['第一类', '第二类'],
          description: '50个字个字50个字个字50个字个字50个字个字50个字个字',
          create_data: '2017-01-11 14:23:33',
        },
        {
          id: 2,
          title: '结果2',
          targe: ['第三类', '第二类'],
          description: '50个字个字50个字个字50个字个字50个字个字50个字个字',
          create_data: '2017-01-11 14:23:33',
        },
        {
          id: 3,
          title: '结果3',
          targe: ['第一类', '第三类'],
          description: '50个字个字50个字个字50个字个字50个字个字50个字个字',
          create_data: '2017-01-11 14:23:33',
        },
      ];
      const result = resultList.find(item => (item.id.toString() === value.toString()));
      // console.log('=====result', result);
      this.setState({ result, loading: false });
    });
  };

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        // searchHelp: this.searchHelp,
        result: this.state.result, // object
        loading: this.state.loading, // bool
      }),
    );

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}

export default HelpSearch;

HelpSearch.propTypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.object,
};
