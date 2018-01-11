import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Icon, Button, Form, Row, Col, Input, Select, Switch } from 'antd';
// import PlanDetailInfo from './PlanDetailInfo';
// import PlanDetailInfoEdit from './PlanDetailInfoEdit';
// import PlanDetailStep from './PlanDetailStep';
// import PlanDetailStepEdit from './PlanDetailStepEdit';

const FormItem = Form.Item;
class MenuManageDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newState: false,
      editState: false,
      initialData: {
        menuName: '主页',
        id: '01',
        superiorId: '05水上交通',
        startUse: '是',
      },
    };
  }
  componentWillMount() {
    if (this.props.location.pathname === '/main/SystemSetting/MenuManageNew') {
      this.setState({ editState: true, initialData: {}, newState: true });
    }
  }
  onEdit = () => {
    this.setState({ editState: true });
  }
  onSave = () => {
    this.setState({ editState: false });
  }
  render() {
    const { initialData, editState, newState } = this.state;
    const { getFieldDecorator } = this.props.form;
    const formItemLayoutLeft = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    let toWhere;
    if (editState && !newState) {
      toWhere = (
        <Button style={{ width: 85, height: 30 }} onClick={this.onSave}>
          <span style={{ marginRight: 8 }}>&lt;</span>
          <span>返回</span>
        </Button>
      );
    } else {
      toWhere = (
        <Link to="/main/SystemSetting/MenuManage">
          <Button style={{ width: 85, height: 30 }} onClick={this.onSave}>
            <span style={{ marginRight: 8 }}>&lt;</span>
            <span>返回</span>
          </Button>
        </Link>
      );
    }
    return (
      <div>
        <div style={{ overflow: 'hidden', marginBottom: 20 }}>
          {toWhere}
          <Button type="primary" className="SoftwareInfoDetail_reflash" onClick={this.onSave}>保存</Button>
          { this.state.newState ?
             '' :
               <Button type="primary" className="SoftwareInfoDetail_reflash" onClick={this.onEdit}>编辑</Button>
          }
        </div>
        {this.state.editState ?
          <Form style={{ fontSize: 16, height: 400 }} className="PlanDetailInfo_cointainer">
            { this.state.newState ?
              <FormItem className="PlanDetailInfo_title">新增下级</FormItem> :
                <FormItem className="PlanDetailInfo_title">详情编辑</FormItem>
            }
            <Row style={{ marginTop: 80 }}>
              <Col span={12}>
                <FormItem
                  {...formItemLayoutLeft}
                  label="ID"
                >
                  <span>{initialData.id}</span>
                </FormItem>
              </Col>
              <Col span={12} style={{ height: 56 }} >
                <FormItem
                  {...formItemLayoutLeft}
                  label="菜单名称"
                  style={{ fontSize: 16 }}
                >
                  {getFieldDecorator('menuName', {
                    initialValue: initialData.menuName,
                    rules: [{
                      required: true, message: '请输入菜单名称',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayoutLeft}
                  label="上级ID"
                >
                  {getFieldDecorator('superiorId', {
                    initialValue: initialData.unitType,
                    rules: [{ required: true, message: '请选择上级ID!' }],
                  })(
                    <Select>
                      <Option value="01-主页">01-主页</Option>
                      <Option value="02-日常监测">02-日常监测</Option>
                      <Option value="03-路网监测">03-路网监测</Option>
                      <Option value="04-路网监测">04-路网监测</Option>
                      <Option value="05-路网监测">05-路网监测</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayoutLeft}
                  label="图标"
                >
                  {getFieldDecorator('flag', {
                    initialValue: initialData.unitType,
                    rules: [{ required: true, message: '请选择图标!' }],
                  })(
                    <Select>
                      <Option value="DD2017051102112升级完善任务">DD2017051102112升级完善任务</Option>
                      <Option value="DD2017051102112调度任务">DD2017051102112调度任务</Option>
                      <Option value="03-路网监测">03-yy中队指挥所</Option>
                      <Option value="04-yy中队指挥所">04-yy中队指挥所</Option>
                      <Option value="05-yy中队指挥所">05-yy中队指挥所</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayoutLeft}
                  label="是否启用"
                >
                  {getFieldDecorator('startUse', {
                    rules: [{ required: true, message: '请选择启用!' }],
                  })(
                    <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} />
                  )}
                </FormItem>
              </Col>
            </Row>
          </Form> :
            <Form style={{ fontSize: 16 }} className="PlanDetailInfo_cointainer">
              <FormItem className="PlanDetailInfo_title">详情</FormItem>
              <Row className="SystemSetting" style={{ marginBottom: 50 }}>
                <Col span={12}>
                  <FormItem
                    {...formItemLayoutLeft}
                    label="ID"
                  >
                    <span>{initialData.id}</span>
                  </FormItem>
                </Col>
                <Col span={12} >
                  <FormItem
                    style={{ borderRight: '1px solid #ccc' }}
                    {...formItemLayoutLeft}
                    label="菜单名称"
                  >
                    <span>{initialData.menuName}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayoutLeft}
                    label="上级菜单ID"
                  >
                    <span>{initialData.superiorId}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    style={{ borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc' }}
                    {...formItemLayoutLeft}
                    label="图标"
                  >
                    <span>{initialData.flag}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    style={{ borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc' }}
                    {...formItemLayoutLeft}
                    label="是否启用"
                  >
                    <span>{initialData.startUse}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    style={{ borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc', height: 35 }}
                    {...formItemLayoutLeft}
                  />
                </Col>
              </Row>
            </Form>
        }
      </div>
    );
  }
}
MenuManageDetail.propTypes = {
  form: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};
const WrapMenuManageDetail = Form.create()(MenuManageDetail);
export default WrapMenuManageDetail;

