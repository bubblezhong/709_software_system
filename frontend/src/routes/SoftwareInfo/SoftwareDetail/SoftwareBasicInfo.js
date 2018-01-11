import React, { PropTypes } from 'react';
import { Row, Col, Form } from 'antd';
import { Link } from 'react-router';
import './SoftwareDetail.css';
import GetCategoryBySoftware from './../../utils/GetCategoryBySoftware';

// const TreeNode = Tree.TreeNode;
const FormItem = Form.Item;
class SoftwareBasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  render() {
    const { data } = this.props;
    // console.log(data, 'data.NAME', data.NAME);
    const formItemLayout = {
      labelCol: { span: 10 },
      wrapperCol: { span: 12 },
    };
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
          <GetCategoryBySoftware id={this.props.id} type="category" softwareName={data.NAME} />
        </div>
      </div>
    );
  }
}

SoftwareBasicInfo.propTypes = {
  data: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};
export default SoftwareBasicInfo;
