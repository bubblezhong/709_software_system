import React from 'react';
import { Form, Row, Col, Input, Radio } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
class PlanDetailInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        planName: '出库流程',
        id: 'JSS008sse',
        creator: '张三',
        state: '已发布',
        planDescribe: '计划信息 计划信息计划信息计划信息计划信息计划信息计划信息计划信息计划信息计划信息计划信息计划信息计划信息计划信息计划信息计划信息',
      },
      radiovalue: '仅管理员可见',
    };
  }
  render() {
    const formItemLayoutLeft = {
      labelCol: { span: 6 },
      wrapperCol: { span: 15 },
    };
    const formItemLayoutLeftRight = {
      labelCol: { span: 2 },
      wrapperCol: { span: 14 },
    };
    const formItemLayoutLeftBottom = {
      labelCol: { span: 3 },
      wrapperCol: { span: 15 },
    };
    return (
      <Form style={{ fontSize: 16 }} className="PlanDetailInfo_cointainer">
        <FormItem className="PlanDetailInfo_title">详情编辑</FormItem>
        <Row className="PlanDetailInfo_content">
          <Col span={12} >
            <FormItem
              {...formItemLayoutLeft}
              label="计划名称"
              style={{ fontSize: 16 }}
            >
              <Input style={{ height: 50 }} />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayoutLeftRight}
              label="ID"
              style={{ fontSize: 16 }}
            >
              <Input style={{ height: 50 }} />
            </FormItem>
          </Col>
        </Row>
        <Row className="PlanDetailInfo_content">
          <Col span={12}>
            <FormItem
              {...formItemLayoutLeft}
              label="状态"
              style={{ fontSize: 16 }}
            >
              <RadioGroup onChange={this.onChange} value={this.state.radiovalue}>
                <Radio value="仅管理员可见">草稿</Radio>
                <Radio value="结束">已发布</Radio>
                <Radio value="发布">已结束</Radio>
              </RadioGroup>
            </FormItem>
          </Col>
        </Row>
        <Row className="PlanDetailInfo_content_bottom">
          <FormItem
            {...formItemLayoutLeftBottom}
            label="计划描述"
            style={{ fontSize: 14 }}
          >
            <Input type="textarea" rows={8} />
          </FormItem>
        </Row>
      </Form>
    );
  }
}
export default PlanDetailInfo;
