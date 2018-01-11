import React, { PropTypes } from 'react';
import { Modal, Row, Col, Form } from 'antd';

const FormItem = Form.Item;
class OutputDetailThirdRead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialData: {
        oddNumbers: 'CL-20170427-0001',
        register: '张三',
        registeUnit: '中船重工XX研究所',
        handler: '李四',
        receiver: '王五',
        saveType: '自持',
        saveInfo: '存储介质编号02121122001',
        saveCode: 'skury3478hl3wi8',
        MD5Sure: 'djiaye87r3hl4i578ndf',
        relativeFile: '无',
        infoExplain: '出库登记出库登记出库登记出库登记出库登记出库登记出库登记出库登记出库登记',
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
        <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件出库登记单</div>
        <Row style={{ height: 450 }}>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="单号"
            >
              <span>{initialData.oddNumbers}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="出库登记人"
            >
              <span>{initialData.register}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="处理人"
            >
              <span>{initialData.handler}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="登记单位"
            >
              <span>{initialData.registeUnit}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="验收人"
              hasFeedback
            >
              <span>{initialData.receiver}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="存储方式"
            >
              <span>{initialData.saveType}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="存储信息"
              hasFeedback
            >
              <span>{initialData.saveInfo}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="提取码"
              hasFeedback
            >
              <span>{initialData.saveCode}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="MD5确认"
              hasFeedback
            >
              <span>{initialData.MD5Sure}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayout}
              label="相关文件"
              hasFeedback
            >
              <span>{initialData.relativeFile}</span>
            </FormItem>
          </Col>
          <Col span={24}>
            <FormItem
              {...formItemLayoutDesc}
              label="信息说明"
            >
              <span>{initialData.infoExplain}</span>
            </FormItem>
          </Col>
        </Row>
      </Modal>
    );
  }
}
OutputDetailThirdRead.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
};
export default OutputDetailThirdRead;
