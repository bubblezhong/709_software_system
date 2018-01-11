import React, { PropTypes } from 'react';
import { TreeSelect } from 'antd';
import LoadAndRefresh from './LoadAndRefresh';
// import { createSelect } from './CreateTreeAndKey';

const SHOW_PARENT = TreeSelect.SHOW_PARENT;
class CategoryTreeSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moduleTreeData: [],
    };
  }
  componentWillMount() {
    // console.log('ModuleTreeSelect');
    this.props.sendData(this.handleSelect);
  }
  onChange = (value) => {
    console.log('value', value);
  }
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
  createSelect = (res) => {
    const fatherKey = '';
    const nodes = res.filter((item) => {
      return item.PID === 0;
    });
    const DataToArr = nodes.map((node) => {
      const tempData = this.createNode(node, res);
      return tempData;
    });
    // console.log(DataToArr);
    const keyData = this.setKey(DataToArr, fatherKey);
    // console.log('keyData', keyData);
    return keyData;
  };
  handleSelect = (res) => {
    console.log('select', res);
    const treeData = this.createSelect(res.data);
    console.log('select', treeData);
    this.setState({ moduleTreeData: treeData });
  }
  render() {
    const { moduleTreeData } = this.state;
    const tProps = {
      dropdownStyle: { maxHeight: 400, overflow: 'auto' },
      treeData: moduleTreeData,
      treeDefaultExpandAll: true,
      multiple: true,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
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
  sendData: PropTypes.func.isRequired,
};
const wrapCategoryTreeSelect = LoadAndRefresh('/api/basic-category/categories')(CategoryTreeSelect);
export default wrapCategoryTreeSelect;
