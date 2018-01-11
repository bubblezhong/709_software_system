import React, { PropTypes } from 'react';
import { Modal, Row, Col, Form } from 'antd';

const FormItem = Form.Item;
class OutputDetailSixthRead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialData: {
        checker: '李四',
        oddNumber: 'CL-20170427-0001',
        checkUnit: 'xx55501',
        checkResult: '通过',
        relativeFile: '无',
        remarks: '交付验收交付验收交付验收交付验收交付验收交付验收交付验收交付验收交付验收',
      },
    };
  }
  render() {
    const { initialData } = this.state;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const formItemLayoutDesc = {
      labelCol: { span: 3 },
      wrapperCol: { span: 19 },
    };
    return (
      <Modal
        width="70%"
        title="软件出库申请单"
        visible={this.props.visible}
        onCancel={this.props.handleCancel}
        footer={null}
      >
        <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>出库交付验收提交单</div>
        <Row style={{ height: 400 }}>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="验收单号"
            >
              <span>{initialData.oddNumber}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="状态"
            >
              <span>待交付验收</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="验收人"
            >
              <span>{initialData.checker}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="验收单位"
            >
              <span>{initialData.checkUnit}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="验收结果"
            >
              <span>{initialData.checkResult}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="交付验收单扫描件"
              hasFeedback
            >
              <span>{initialData.relativeFile}</span>
            </FormItem>
          </Col>
          <Col span={24}>
            <FormItem
              {...formItemLayoutDesc}
              label="备注"
            >
              <span>{initialData.remarks}</span>
            </FormItem>
          </Col>
        </Row>
      </Modal>
    );
  }
}
OutputDetailSixthRead.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
};
export default OutputDetailSixthRead;
