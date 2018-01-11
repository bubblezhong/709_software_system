import React, { PropTypes } from 'react';
import { TreeSelect } from 'antd';
import GetDetailInfoByType from './GetDetailInfoByType';
// import { createSelect } from './CreateTreeAndKey';

const SHOW_PARENT = TreeSelect.SHOW_PARENT;
class CategoryTreeSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      treeDefaultExpandedKeys: ['00'],
      moduleTreeData: [],
      treeData: [],
      versionData: [],
    };
  }
  componentWillMount() {
    const params = { type: 'version' };
    console.log(19, this.props.params.id, params);
    this.props.getData(this.props.params.id, params, (res) => { this.handleSelect(res); });
  }
  // componentWillReceiveProps(nextProps) {
    // console.log('nextProps', nextProps);
    // this.setState({ tempData: nextProps.data, categoryVersionId: nextProps.id });
    // const type = 'version';
    // this.props.getData(nextProps.data.SW_ID, type, (res) => { this.handleData(res); });
  // }
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
  getVersion = (id, parentName) => {
    const versionTemp = this.state.versionData.filter((item) => {
      return item.CATEGORY_ID === id;
    });
    console.log('versionTemp', versionTemp);
    const version = versionTemp.map((item) => {
      console.log('item', item);
      return {
        label: item.CATEGORY_VERSION,
        name: `${parentName}${item.CATEGORY_VERSION}`,
        value: item.ID.toString(),
      };
    });
    return version;
  }
  createNode = (node, _list) => {
    const children = _list.filter((item) => {
      return node.ID === item.PID === true;
    });
    if (children.length === 0) {
      const version = this.getVersion(node.ID, node.SU_NAME);
      console.log('version', version);
      return {
        label: node.SU_NAME,
        name: node.SU_NAME,
        value: node.ID.toString(),
        children: version,
      };
    }
    const temp = children.map((item) => {
      return this.createNode(item, _list);
    });
    return {
      label: node.SU_NAME,
      name: node.SU_NAME,
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
    // console.log(DataToArr);
    const keyData = this.setKey(DataToArr, fatherKey);
    // console.log('keyData', keyData);
    return keyData;
  };
  handleSelect = (res) => {
    // console.log('selwwect', res);
    this.setState({ treeData: res.data.categroy, versionData: res.data.version });
    const treeData = this.createSelect(this.state.treeData);
    // console.log('select', treeData);
    this.setState({ moduleTreeData: treeData });
  }
  render() {
    const { moduleTreeData, treeDefaultExpandedKeys } = this.state;
    const tProps = {
      dropdownStyle: { maxHeight: 400, overflow: 'auto' },
      treeData: moduleTreeData,
      treeDefaultExpandedKeys,
      multiple: true,
      showCheckedStrategy: SHOW_PARENT,
      treeNodeLabelProp: 'name',
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
  // id: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
};
const wrapCategoryTreeSelect = GetDetailInfoByType('/api/category-version/categories-versions/')(CategoryTreeSelect);
export default wrapCategoryTreeSelect;
