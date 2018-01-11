import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Tree, Form, Row, Col } from 'antd';
import './Category.css';

const FormItem = Form.Item;
const TreeNode = Tree.TreeNode;
class SoftwareBasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  render() {
    const formItemLayout = {
      labelCol: { span: 10 },
      wrapperCol: { span: 12 },
    };
    const { data } = this.props;
    console.log(data);
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
                <span>{data.SW_SAVEPOS}</span>
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
                <span>{data.SW_INSTALLPOS}</span>
              </FormItem>
            </Col>
            <Col span={24} style={{ height: 40, borderBottom: '1px solid #ccc', marginTop: 10 }}>
              <FormItem
                style={{ fontSize: 14 }}
                {...formItemLayout}
                label="谱系"
                hasFeedback
              >
                <span>{data.module}</span>
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
        </div>
      </div>
    );
  }
}
SoftwareBasicInfo.propTypes = {
  data: PropTypes.object.isRequired,
};
export default SoftwareBasicInfo;
