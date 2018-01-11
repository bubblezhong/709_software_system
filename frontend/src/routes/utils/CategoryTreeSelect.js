import React, { PropTypes } from 'react';
import { TreeSelect } from 'antd';
import LoadAndRefresh from './LoadAndRefresh';
// import { createSelect } from './CreateTreeAndKey';

const SHOW_PARENT = TreeSelect.SHOW_PARENT;
class CategoryTreeSelect extends React.Component {
  setKey = (dataNow, fatherKey) => {
    for (let ii = 0; ii < dataNow.length; ii++) {
      dataNow[ii].key = fatherKey + ii;
      if (dataNow[ii].children) {
        this.setKey(dataNow[ii].children, dataNow[ii].key);
      } else if (!dataNow[ii].children) {
        dataNow[ii].key = fatherKey + ii;
      }
    }
    return dataNow;
  };
  createNode = (node, _list) => {
    const children = _list.filter((item) => {
      return node.ID === item.PID === true;
    });
    if (children.length === 0) {
      return {
        label: node.SU_NAME,
        value: node.ID.toString(),
      };
    }
    const temp = children.map((item) => {
      return this.createNode(item, _list);
    });
    return {
      label: node.SU_NAME,
      value: node.ID.toString(),
      children: temp,
    };
  };
  createSelect = (data) => {
    const fatherKey = '';
    const nodes = Array.isArray(data) ? data.filter((item) => {
      return item.PID === 0;
    }) : [];
    const DataToArr = nodes.map((node) => {
      const tempData = this.createNode(node, data);
      return tempData;
    });
    const keyData = this.setKey(DataToArr, fatherKey);
    return keyData;
  };
  handleSelect = (data) => {
    const treeData = Array.isArray(data) ? this.createSelect(data) : [];
    return treeData;
  }
  render() {
    // console.log('this.props.res.data', this.props.res.data);
    const moduleTreeData = this.handleSelect(this.props.res.data);
    const tProps = {
      dropdownStyle: { maxHeight: 400, overflow: 'auto' },
      treeData: moduleTreeData,
      treeDefaultExpandAll: true,
      showCheckedStrategy: SHOW_PARENT,
      treeCheckStrictly: true,
    };
    return (
      <TreeSelect
        {...tProps}
        {...this.props}
      />
    );
  }
}
CategoryTreeSelect.propTypes = {
  res: PropTypes.object.isRequired,
};
const wrapCategoryTreeSelect = LoadAndRefresh('/api/basic-category/categories')(CategoryTreeSelect);
export default wrapCategoryTreeSelect;
