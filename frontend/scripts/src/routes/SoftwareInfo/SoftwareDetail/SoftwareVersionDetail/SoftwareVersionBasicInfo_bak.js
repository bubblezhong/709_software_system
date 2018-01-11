import React from 'react';
import { Tree } from 'antd';

const TreeNode = Tree.TreeNode;
class SoftwareVersionBasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basicInfo: [
        { type: '软件类型：', content: '船载软件' },
        { type: '软件规模：', content: '100k' },
        { type: '操作系统：', content: '塞班2.0、CentOS7等' },
        { type: '典型安装位置：', content: '中控板、导航板' },
        { type: '配套软件：', content: '无' },
        { type: '存储方式：', content: '网络介质/存储介质' },
        { type: '存储位置：', content: '代表室/管理机关' },
        { type: 'MD5校验值：', content: '259a2d1f68fef2c2b38eddd9b4eb2f10' },
        { type: '附件：', content: '指导文件' },
      ],
    };
  }
  render() {
    const BasicInfo = this.state.basicInfo.map((item, index) => {
      return (
        <div key={index} className="SoftwareBasicInfo_brif_content">
          <span className="SoftwareBasicInfo_brif_type">{item.type}</span>
          <span>{item.content}</span>
        </div>
      );
    });
    const BasicTree = (
      <Tree
        showLine
        defaultExpandedKeys={['0-0-0']}
        className="SoftwareBasicInfo_tree_content"
      >
        <TreeNode title="远程目标软件" key="0-0">
          <TreeNode title="模块优化" key="0-0-0">
            <TreeNode title="模块优化" key="0-0-0-0" />
            <TreeNode title="模块优化" key="0-0-0-1" />
            <TreeNode title="模块优化" key="0-0-0-2" />
          </TreeNode>
          <TreeNode title="目标指示模块" key="0-0-1">
            <TreeNode title="声呐控制" key="0-0-1-0" />
          </TreeNode>
          <TreeNode title="总体生成" key="0-0-2">
            <TreeNode title="leaf" key="0-0-2-0" />
            <TreeNode title="leaf" key="0-0-2-1" />
          </TreeNode>
          <TreeNode title="策略生成" key="0-0-3">
            <TreeNode title="leaf" key="0-0-3-0" />
            <TreeNode title="leaf" key="0-0-3-1" />
          </TreeNode>
        </TreeNode>
      </Tree>
    );
    return (
      <div style={{ overflow: 'auto' }}>
        <div className="SoftwareBasicInfo_brif">
          <h2>基础信息</h2>
          {BasicInfo}
        </div>
        <div className="SoftwareBasicInfo_tree">
          <h2>软件组成单元</h2>
          {BasicTree}
        </div>
      </div>
    );
  }
}

export default SoftwareVersionBasicInfo;
