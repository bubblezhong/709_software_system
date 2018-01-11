import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Tree } from 'antd';
import GetDetailInfoByType from './GetDetailInfoByType';

const TreeNode = Tree.TreeNode;
class GetCategoryBySoftware extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentWillReceiveProps(nextProps) {
    // console.log('this.props.id', nextProps);
    const params = { type: 'category' };
    this.props.getData(nextProps.id, params, (res) => { this.handleData(res); });
  }
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
    console.log('parseInt(selectedKeys[0], 10)', parseInt(selectedKeys[0], 10));
    browserHistory.push(`/main/SoftwareInfo/CategoryDetail/${parseInt(selectedKeys[0], 10)}`);
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
  createNode = (node, _list) => {
    const children = _list.filter((item) => {
      return node.ID === item.PID === true;
    });
    if (children.length === 0) {
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
  createSelect = (res) => {
    // const fatherKey = '';
    const nodes = res.filter((item) => {
      return item.PID === 0;
    });
    const DataToArr = nodes.map((node) => {
      const tempData = this.createNode(node, res);
      return tempData;
    });
    // console.log(DataToArr);
    // const keyData = this.setKey(DataToArr, fatherKey);
    // console.log('keyData', keyData);
    return DataToArr;
  };
  handleData = (res) => {
    // console.log('resppp', res);
    const treeData = this.createSelect(res.data);
    // console.log('select', treeData);
    this.setState({ data: treeData });
  }
  loop = (data) => {
    // console.log('data1', data);
    const tempData = data.map((item) => {
      if (item.children) {
        return <TreeNode title={item.name} key={item.key}>{this.loop(item.children)}</TreeNode>;
      }
      return <TreeNode title={item.name} key={item.key} />;
    });
    // console.log('tempData', tempData);
    return tempData;
  }
  render() {
    // console.log('loopprop', this.state.key);
    const treeNodes = this.loop(this.state.data);
    // console.log('treeNodes', treeNodes);
    const tProps = {
      showLine: true,
      defaultExpandAll: true,
    };
    // console.log('treeNodes', treeNodes.length !== 0);
    return (
      <div>
        {treeNodes.length !== 0 ?
          <Tree
            {...tProps}
            onSelect={this.onSelect}
          >
            <TreeNode title={this.props.softwareName} key="id0">
              {treeNodes}
            </TreeNode>
          </Tree> :
            <span />
        }
      </div>
    );
  }
}
GetCategoryBySoftware.propTypes = {
  // type: PropTypes.string.isRequired,
  // id: PropTypes.number.isRequired,
  getData: PropTypes.func.isRequired,
  softwareName: PropTypes.string.isRequired,
};
const wrapGetCategoryBySoftware = GetDetailInfoByType('/api/basic-software/use-category/')(GetCategoryBySoftware);
export default wrapGetCategoryBySoftware;
