import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import { Button, Form, Input, Row, Upload, Icon, Col } from 'antd';
import OutputHistoryButton from './OutputHistoryButton';

const FormItem = Form.Item;
class OutputDetailSeventh extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
      oddNumbers: 'CL-20170427-0001',
      receiveUnit: '中船重工XX研究所',
      handler: '李四',
      relativeFile: '无',
      remarks: '信息接收信息接收信息接收信息接收信息接收信息接收信息接收',
    };
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const formItemLayoutDesc = {
      labelCol: { span: 3 },
      wrapperCol: { span: 19 },
    };
    return (
      <div className="InputDetail_stepsContent">
        <Form onSubmit={this.handleSubmit} style={{ width: '80%', marginLeft: '10%', minHeight: 500 }}>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>交付验证信息接收</div>
          {this.props.disable ?
            <Row>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="出库单号"
                >
                  <span>{this.state.oddNumbers}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="状态"
                >
                  <span>待交付信息接收</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="接收人"
                >
                  <span>{this.state.handler}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="接收单位"
                >
                  <span>{this.state.receiveUnit}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="相关文件"
                  hasFeedback
                >
                  <span>{this.state.relativeFile}</span>
                </FormItem>
              </Col>
              <Col span={24}>
                <FormItem
                  {...formItemLayoutDesc}
                  label="备注"
                >
                  <span>{this.state.remarks}</span>
                </FormItem>
              </Col>
            </Row> :
              <Row>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="出库单号"
                  >
                    <span>{this.state.oddNumbers}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="状态"
                  >
                    <span>待交付信息接收</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="接收人"
                  >
                    <span>{this.state.handler}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="接收单位"
                  >
                    <span>{this.state.receiveUnit}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="相关文件"
                    hasFeedback
                  >
                    {getFieldDecorator('relativeFile', {
                      rules: [{ required: true, message: '请点击上传相关附件' }],
                    })(
                      <Upload>
                        <Button>
                          <Icon type="upload" />点击上传
                        </Button>
                      </Upload>
                    )}
                  </FormItem>
                </Col>
                <Col span={24}>
                  <FormItem
                    {...formItemLayoutDesc}
                    label="备注"
                  >
                    {getFieldDecorator('remarks', {
                      rules: [{ required: true, message: '请输入信息说明' }],
                    })(
                      <Input type="textarea" rows={10} />
                    )}
                  </FormItem>
                </Col>
              </Row>
          }
        </Form>
        <OutputHistoryButton step={7} />
      </div>
    );
  }
}

OutputDetailSeventh.propTypes = {
  disable: PropTypes.bool.isRequired,
  form: PropTypes.object.isRequired,
};
const WrapOutputDetailSeventh = Form.create()(OutputDetailSeventh);
export default WrapOutputDetailSeventh;
