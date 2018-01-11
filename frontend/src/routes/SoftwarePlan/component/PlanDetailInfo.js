import React from 'react';
import { Form, Row, Col } from 'antd';

const FormItem = Form.Item;
class PlanDetailInfoEdit extends React.Component {
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
    };
  }
  render() {
    console.log(this.state.data.planName);
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
        <FormItem className="PlanDetailInfo_title">详情</FormItem>
        <Row className="PlanDetailInfo_contentRead">
          <Col span={12} >
            <FormItem
              {...formItemLayoutLeft}
              label="计划名称"
              style={{ fontSize: 16 }}
            >
              <span>{this.state.data.planName}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayoutLeftRight}
              label="ID"
              style={{ fontSize: 16 }}
            >
              <span>{this.state.data.id}</span>
            </FormItem>
          </Col>
        </Row>
        <Row className="PlanDetailInfo_contentRead">
          <Col span={12}>
            <FormItem
              {...formItemLayoutLeft}
              label="指定人"
              style={{ fontSize: 16 }}
            >
              <span>{this.state.data.creator}</span>
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              {...formItemLayoutLeftRight}
              label="状态"
              style={{ fontSize: 16 }}
            >
              <span>{this.state.data.state}</span>
            </FormItem>
          </Col>
        </Row>
        <Row className="PlanDetailInfo_content_bottom">
          <FormItem
            {...formItemLayoutLeftBottom}
            label="计划描述"
            style={{ fontSize: 14 }}
          >
            <span style={{ display: 'inline-block', width: 800 }}>{this.state.data.planDescribe}</span>
          </FormItem>
        </Row>
      </Form>
    );
  }
}
export default PlanDetailInfoEdit;
