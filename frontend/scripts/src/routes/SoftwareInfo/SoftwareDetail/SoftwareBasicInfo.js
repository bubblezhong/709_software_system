import React, { PropTypes } from 'react';
import { Tree, Row, Col, Form } from 'antd';
import { Link } from 'react-router';
import './SoftwareDetail.css';

const TreeNode = Tree.TreeNode;
const FormItem = Form.Item;
class SoftwareBasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        softwareType: '船载软件',
        operateSystem: '塞班2.0、CentOS7等',
        matingSoftware: '无',
        installPos: '中控板、导航板',
        saveType: '网络介质/存储介质',
        savePos: '代表室/管理机关',
        module: '应用软件>C类应用软件>对下声呐定位',
        file: '指导文件1',
      },
    };
  }
  render() {
    const { data } = this.props;
    console.log(data);
    const formItemLayout = {
      labelCol: { span: 10 },
      wrapperCol: { span: 12 },
    };
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
    let saveType;
    if (data.SW_STORAGE === '0') {
      saveType = '自持';
    } else {
      saveType = '网络存储';
    }
    return (
      <div style={{ overflow: 'auto' }}>
        <div className="SoftwareBasicInfo_brif">
          <h2>基础信息</h2>
          <Row className="SoftwareBasicInfo_brif_content">
            <Col span={24} style={{ height: 40, borderBottom: '1px solid #ccc', marginTop: 10 }}>
              <FormItem
                style={{ fontSize: 14 }}
                {...formItemLayout}
                label="软件类型"
                hasFeedback
              >
                <span>{data.SW_TYPE}</span>
              </FormItem>
            </Col>
            <Col span={24} style={{ height: 40, borderBottom: '1px solid #ccc', marginTop: 10 }}>
              <FormItem
                style={{ fontSize: 14 }}
                {...formItemLayout}
                label="操作系统"
                hasFeedback
              >
                <span>{data.SW_SYSTEM}</span>
              </FormItem>
            </Col>
            <Col span={24} style={{ height: 40, borderBottom: '1px solid #ccc', marginTop: 10 }}>
              <FormItem
                style={{ fontSize: 14 }}
                {...formItemLayout}
                label="存储方式"
                hasFeedback
              >
                <span>{saveType}</span>
              </FormItem>
            </Col>
            <Col span={24} style={{ height: 40, borderBottom: '1px solid #ccc', marginTop: 10 }}>
              <FormItem
                style={{ fontSize: 14 }}
                {...formItemLayout}
                label="存储位置"
                hasFeedback
              >
                <span>{data.SW_SAVEPOS}</span>
              </FormItem>
            </Col>
            <Col span={24} style={{ height: 40, borderBottom: '1px solid #ccc', marginTop: 10 }}>
              <FormItem
                style={{ fontSize: 14 }}
                {...formItemLayout}
                label="配套软件"
                hasFeedback
              >
                <span>{data.SW_MATING}</span>
              </FormItem>
            </Col>
            <Col span={24} style={{ height: 40, borderBottom: '1px solid #ccc', marginTop: 10 }}>
              <FormItem
                style={{ fontSize: 14 }}
                {...formItemLayout}
                label="典型安装位置"
                hasFeedback
              >
                <span>{data.INSTALLPOS}</span>
              </FormItem>
            </Col>
            <Col span={24} style={{ height: 40, borderBottom: '1px solid #ccc', marginTop: 10 }}>
              <FormItem
                style={{ fontSize: 14 }}
                {...formItemLayout}
                label="谱系"
                hasFeedback
              >
                <span>{data.MODULE_TREE}</span>
              </FormItem>
            </Col>
            <Col span={24} style={{ height: 40, borderBottom: '1px solid #ccc', marginTop: 10 }}>
              <FormItem
                style={{ fontSize: 14 }}
                {...formItemLayout}
                label="附件"
                hasFeedback
              >
                <Link>{data.SW_ANNEX}</Link>
              </FormItem>
            </Col>
          </Row>
        </div>
        <div className="SoftwareBasicInfo_tree">
          <h2>软件组成单元</h2>
          {BasicTree}
        </div>
      </div>
    );
  }
}
SoftwareBasicInfo.propTypes = {
  data: PropTypes.object.isRequired,
};
export default SoftwareBasicInfo;
