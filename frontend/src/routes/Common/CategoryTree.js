import React, { Component } from 'react';
import { TreeSelect, message } from 'antd';
import { ListToTree } from './../../utils/list2tree';
import {
  getSoftwareCategoryList,
} from './../../Models/Category/Category';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
    };
    this.onChange = this.onChange.bind(this);
  }


  componentWillMount() {
    this.handleGetCategoryList();
  }

  onChange(value, label, extra) {
    this.props.onCategoryChange(value, label, extra);
  }


  /**
   * 获取软件谱系列表
   * @return {null} null
   */
  async handleGetCategoryList() {
    const { res } = await getSoftwareCategoryList();
    console.log('res: ', res);
    // 判断返回的个人信息是否正确
    if (res.code !== 1000) {
      message.error(res.message || '获取软件谱系列表失败，请重试');
      return false;
    }
    // 更新state中的谱系列表
    this.setState({
      categoryList: ListToTree(res.data, 0),
    });
  }

  render() {
    return (
      <TreeSelect
        multiple
        showSearch
        treeCheckable
        filterTreeNode
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="请选择谱系进行筛选"
        allowClear
        onChange={this.onChange}
        treeData={this.state.categoryList}
        style={{ minWidth: 200 }}
      />
    );
  }
}


App.propTypes = {
  onCategoryChange: React.PropTypes.func.isRequired,
};


export default App;
