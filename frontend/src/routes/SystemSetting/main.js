import React, { Component, PropTypes } from 'react';
// import { Tabs } from 'antd';
import { browserHistory } from 'react-router';
// import SysOrganization from './SysOrganization/main';
// import SysUser from './SysUser/main';
// import SysRole from './SysRole/main';
// import SysGroup from './SysGroup/main';
// import DataDictionary from './DataDictionary/main';
// import Authority from './Authority/main';
// import OrgAuthority from './OrgAuthority/main';
//
// const TabPane = Tabs.TabPane;

class ShowingSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  changeOutTabs = (key) => {
    browserHistory.push(`/main/SystemSetting/${key}`);
  }
  render() {
    // const { dictionary, authority } = this.props;
    //
    // // 生成 字段字典
    // const dictionaryMap = {
    //   target_modules: {},
    //   target_page: {},
    //   authority_name: {},
    //   department_type: {}, // 单位类型
    //   authority_type: {},
    // };
    // // 生成 过滤项
    // const dictionaryFilter = {
    //   target_modules: [],
    //   target_page: [],
    //   department_type: [], // 单位类型
    //   authority_name: [],
    //   authority_type: [],
    // };
    // dictionary.forEach((item) => {
    //   if (dictionaryMap[item.key] && dictionaryFilter[item.key]) {  // 防止 由 异常数据导致的 错误
    //     console.log('item.key', item.key);
    //     dictionaryMap[item.key][item.value] = item.label;
    //     dictionaryFilter[item.key].push({ text: item.label, value: item.value });
    //   }
    // });
    //
    // const childrenWithProps = React.Children.map(this.props.children,
    //   child => React.cloneElement(child, {
    //     dictionaryMap,
    //     dictionaryFilter,
    //     authority,
    //   })
    // );

    return (
      <div>
        {/* {childrenWithProps} */}
        {this.props.children}
      </div>
    );
  }
}


ShowingSetting.propTypes = {
  children: PropTypes.node.isRequired,
  // routeParams: PropTypes.object.isRequired,
  // dictionary: PropTypes.object,
  // authority: PropTypes.object,
};


export default ShowingSetting;
