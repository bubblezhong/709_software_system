import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import { Button, Form, Input, Row, Radio, Upload, Icon, Col } from 'antd';
import OutputHistoryButton from './OutputHistoryButton';

const FormItem = Form.Item;
class OutputDetailFifth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checker: '李四',
      oddNumber: 'CL-20170427-0001',
      checkUnit: 'xx55501',
      checkResult: '通过',
      relativeFile: '无',
      remarks: '交付验收交付验收交付验收交付验收交付验收交付验收交付验收交付验收交付验收',
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
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '3%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>出库交付验收提交单</div>
          {this.props.disable ?
            <Row>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="验收单号"
                >
                  <span>{this.state.oddNumber}</span>
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
                  <span>{this.state.checker}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="验收单位"
                >
                  <span>{this.state.checkUnit}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="验收结果"
                >
                  <span>{this.state.checkResult}</span>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayout}
                  label="交付验收单扫描件"
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
                    label="验收单号"
                  >
                    <span>{this.state.oddNumber}</span>
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
                    <span>{this.state.checker}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="验收单位"
                  >
                    <span>{this.state.checkUnit}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="验收结果"
                  >
                    {getFieldDecorator('checkResult', {
                      rules: [{ required: true, message: '请输入验收结果' }],
                    })(
                      <Radio.Group>
                        <Radio value="通过">通过</Radio>
                        <Radio value="不通过">不通过</Radio>
                      </Radio.Group>
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayout}
                    label="交付验收单扫描件"
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
                      rules: [{ message: '请输入信息说明' }],
                    })(
                      <Input type="textarea" rows={10} />
                    )}
                  </FormItem>
                </Col>
              </Row>
          }
        </Form>
        <OutputHistoryButton step={5} />
      </div>
    );
  }
}

OutputDetailFifth.propTypes = {
  form: PropTypes.object.isRequired,
  disable: PropTypes.bool.isRequired,
};
const WrapOutputDetailFifth = Form.create()(OutputDetailFifth);
export default WrapOutputDetailFifth;
