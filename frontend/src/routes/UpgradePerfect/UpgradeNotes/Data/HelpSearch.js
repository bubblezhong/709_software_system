import React, { PropTypes } from 'react';
import config from 'system-config';
// import l2t from 'list2tree';
import { asyncGet } from './../../../utils/AsyncGetAndPost';

class HelpSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      resultList: [],
      loading: true,
    };
  }

  componentWillMount() {
    // 初始化数据
    let value = null;
    try {
      value = this.props.location.query.search;
    } catch (e) {
      console.log('err', e);
    }
    if (value) {
      this.searchHelp();
    }
  }

  componentWillReceiveProps(nextProps) {
    let value = null;
    try {
      value = nextProps.location.query.search;
    } catch (e) {
      console.log('err', e);
    }
    if (value) {
      this.searchHelp();
    }
  }

  // 搜索结果
  searchHelp = (options) => {
    asyncGet(`${config.host}/SoftwareInfo/Query/ListData?id=${options}`).then(() => {
      const resultList = [
        {
          id: 1,
          title: '结果1',
          description: '50个字个字50个字个字50个字个字50个字个字50个字个字',
          create_data: '2017-01-11 14:23:33',
        },
        {
          id: 2,
          title: '结果2',
          description: '50个字个字50个字个字50个字个字50个字个字50个字个字',
          create_data: '2017-01-11 14:23:33',
        },
        {
          id: 3,
          title: '结果3',
          description: '50个字个字50个字个字50个字个字50个字个字50个字个字',
          create_data: '2017-01-11 14:23:33',
        },
      ];
      this.setState({ resultList, loading: false });
    });
  };

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        // searchHelp: this.searchHelp,
        resultList: this.state.resultList,
        loading: this.state.loading,
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
  location: PropTypes.object,
};
