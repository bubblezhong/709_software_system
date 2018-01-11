import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Tree } from 'antd';
import GetDetailInfoByType from './GetDetailInfoByType';

const TreeNode = Tree.TreeNode;
class GetCategoryVersionBySoftware extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempData: {},
      categoryData: [],
      categoryVersionData: [],
      categoryVersionId: '',
      data: [],
    };
  }
  componentWillReceiveProps(nextProps) {
    // console.log('nextProps', nextProps);
    this.setState({ tempData: nextProps.data, categoryVersionId: nextProps.id });
    const params = { type: 'version' };
    this.props.getData(nextProps.data.SW_ID, params, (res) => { this.handleData(res); });
  }
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
    console.log('parseInt(selectedKeys[0], 1011)', parseInt(selectedKeys[0], 10));
    browserHistory.push(`/main/SoftwareInfo/CategoryVersionDetail/${parseInt(selectedKeys[0], 10)}`);
  }
  // setKey = (dataNow, fatherKey) => {
  //   for (let ii = 0; ii < dataNow.length; ii++) {
  //     dataNow[ii].key = fatherKey + ii;
  //     if (dataNow[ii].children) {
  //       this.setKey(dataNow[ii].children, dataNow[ii].key);
  //     } else if (!dataNow[ii].children) {
  //       dataNow[ii].key = fatherKey + ii;
  //     }
  //   }
  //   return dataNow;
  // };
  getVersion = (id) => {
    const tempData = this.state.categoryVersionData.filter((item) => {
      return item.CATEGORY_ID === id;
    });
    return tempData[0].CATEGORY_VERSION;
  }
  createNode = (node, _list) => {
    const children = _list.filter((item) => {
      return node.ID === item.PID === true;
    });
    if (children.length === 0) {
      // console.log(node.SU_NAME, this.state.tempData.SU_NAME);
      if (node.SU_NAME === this.state.tempData.SU_NAME) {
        // console.log('/api/basic-software/use-category/', this.state.categoryVersionId);
        const version = this.getVersion(node.ID);
        return {
          name: `${node.SU_NAME}${version}`,
          key: node.ID,
        };
      }
      return {
        name: node.SU_NAME,
        key: node.ID,
      };
    }
    const temp = children.map((item) => {
      return this.createNode(item, _list);
    });
    return {
      name: node.SU_NAME,
      key: node.ID,
      children: temp,
    };
  };
  createSelect = (data) => {
    // const fatherKey = '';
    const nodes = data.filter((item) => {
      return item.PID === 0;
    });
    const DataToArr = nodes.map((node) => {
      const tempData = this.createNode(node, data);
      return tempData;
    });
    // const keyData = this.setKey(DataToArr, fatherKey);
    return DataToArr;
  };
  handleData = (res) => {
    // console.log('resres', res);
    this.setState({ categoryData: res.data.category, categoryVersionData: res.data.version });
    const treeData = this.createSelect(this.state.categoryData);
    this.setState({ data: treeData });
  }
  loop = (data) => {
    const tempData = data.map((item) => {
      if (item.children) {
        return <TreeNode title={item.name} key={item.key}>{this.loop(item.children)}</TreeNode>;
      }
      return <TreeNode title={item.name} key={item.key} />;
    });
    return tempData;
  }
  render() {
    const treeNodes = this.loop(this.state.data);
    return (
      <div>
        {treeNodes.length !== 0 ?
          <Tree
            onSelect={this.onSelect}
            showLine
            defaultExpandAll
          >
            <TreeNode title={this.state.tempData.SW_NAME} key="id0">
              {treeNodes}
            </TreeNode>
          </Tree> :
            <span />
        }
      </div>
    );
  }
}
GetCategoryVersionBySoftware.propTypes = {
  // id: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  // softwareDetail: PropTypes.object.isRequired,
};
const wrapGetCategoryVersionBySoftware = GetDetailInfoByType('/api/basic-software/use-category/')(GetCategoryVersionBySoftware);
export default wrapGetCategoryVersionBySoftware;
