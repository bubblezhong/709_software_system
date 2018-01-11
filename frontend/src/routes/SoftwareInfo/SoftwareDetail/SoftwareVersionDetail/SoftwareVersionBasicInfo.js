import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Form, Row, Col } from 'antd';
import GetCategoryVersionBySoftware from './../../../utils/GetCategoryVersionBySoftware';
// import './Category.css';

const FormItem = Form.Item;
// const TreeNode = Tree.TreeNode;
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
    // console.log(data);
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
                label="软件规模"
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
                <span>{data.SW_STORAGE}</span>
              </FormItem>
            </Col>
            <Col span={24} style={{ height: 40, borderBottom: '1px solid #ccc', marginTop: 10 }}>
              <FormItem
                style={{ fontSize: 14 }}
                {...formItemLayout}
                label="MD5"
                hasFeedback
              >
                <span>{data.MD5}</span>
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
          <GetCategoryVersionBySoftware id={this.props.id} type="version" softwareDetail={data} />
        </div>
      </div>
    );
  }
}
SoftwareBasicInfo.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};
export default SoftwareBasicInfo;
