import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Form, Row, Col, Input, Select, InputNumber } from 'antd';
import EditAndCreate from './../../utils/EditAndCreate';
import UnitTypeSelect from './../../utils/UnitTypeSelect';
// import PlanDetailInfo from './PlanDetailInfo';
// import PlanDetailInfoEdit from './PlanDetailInfoEdit';
// import PlanDetailStep from './PlanDetailStep';
// import PlanDetailStepEdit from './PlanDetailStepEdit';

const FormItem = Form.Item;
const Option = Select.Option;
class RoleManageDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newState: false,
      editState: false,
      initialData: {},
    };
  }
  componentWillMount() {
    if (this.props.location.pathname === '/main/SystemSetting/RoleManageNew') {
      this.setState({ editState: true, initialData: {}, newState: true });
    } else {
      this.props.sendData((res) => { this.handleInitialData(res); });
    }
  }
  onEdit = () => {
    this.setState({ editState: true });
  }
  onSave = () => {
    this.setState({ editState: false });
  }
  handleInitialData = (res) => {
    console.log('res', res);
    this.setState({ initialData: res.data });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.newState);
    if (this.state.newState) {
      this.props.form.validateFields((err, values) => {
        console.log(err, values);
        if (!err) {
          console.log('Received values of form: ', values);
          // const tempValues = {
          //   NAME: values.muduleName,
          //   PID: values.ancestary,
          //   UPDATE_USER: null,
          // };
          // console.log('addnew', tempValues);
          this.props.createData(values, this.handleResult);
          console.log('Received');
        }
      });
    } else {
      this.props.form.validateFields((err, values) => {
        if (!err) {
          // values.ORGANIZATION_ID = values.ORGANIZATION_ID.toString();
          console.log('Received values of form: ', values);
          this.props.editData(values, this.handleResult);
          console.log('Received');
        }
      });
    }
  }
  handleResult = (res) => {
    console.log('useReas', res);
  }
  render() {
    const { initialData, editState, newState } = this.state;
    const { getFieldDecorator } = this.props.form;
    const formItemLayoutLeft = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const formItemLayoutLeftBottom = {
      labelCol: { span: 3 },
      wrapperCol: { span: 19 },
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
        <Link to="/main/SystemSetting/RoleManage">
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
          { this.state.newState ?
             '' :
               <Button type="primary" className="SoftwareInfoDetail_reflash" onClick={this.onEdit}>编辑</Button>
          }
        </div>
        {this.state.editState ?
          <Form onSubmit={this.handleSubmit} style={{ fontSize: 16, height: 500 }} className="PlanDetailInfo_cointainer">
            <FormItem style={{ position: 'relative', top: -62, right: '-94%' }}>
              <Button style={{ width: 85, height: 30, zIndex: 999 }} type="primary" htmlType="submit">确定</Button>
            </FormItem>
            { this.state.newState ?
              <FormItem className="PlanDetailInfo_title" style={{ marginTop: '-40px' }}>新增角色管理</FormItem> :
                <FormItem className="PlanDetailInfo_title" style={{ marginTop: '-40px' }}>详情编辑</FormItem>
            }
            <Row style={{ marginTop: 80 }}>
              <Col span={12} style={{ height: 55 }} >
                <FormItem
                  {...formItemLayoutLeft}
                  label="名称"
                  style={{ fontSize: 16 }}
                >
                  {getFieldDecorator('ROLENAME', {
                    initialValue: initialData.ROLENAME,
                    rules: [{
                      required: true, message: '请输入名称',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayoutLeft}
                  label="类型"
                >
                  {getFieldDecorator('TYPE', {
                    initialValue: initialData.TYPE,
                    rules: [{ required: true, message: '请选择类型!' }],
                  })(
                    <Select>
                      <Option value="游客">游客</Option>
                      <Option value="一般用户">一般用户</Option>
                      <Option value="审批用户">审批用户</Option>
                      <Option value="管理员">管理员</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayoutLeft}
                  label="单位类型"
                >
                  {getFieldDecorator('ORG_TYPE', {
                    initialValue: initialData.ORG_TYPE,
                    rules: [{ required: true, message: '请选择单位类型!' }],
                  })(
                    <UnitTypeSelect />
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayoutLeft}
                  label="排序"
                >
                  {getFieldDecorator('NUM', {
                    initialValue: initialData.NUM,
                    rules: [{ required: true, message: '请排序!' }],
                  })(
                    <InputNumber min={1} max={10} size="large" />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <FormItem
                {...formItemLayoutLeftBottom}
                label="备注"
                style={{ fontSize: 14 }}
              >
                {getFieldDecorator('REMARK', {
                  initialValue: initialData.REMARK,
                  rules: [{
                    message: '请输入备注',
                  }],
                })(
                  <Input type="textarea" rows={8} />
              )}
              </FormItem>
            </Row>
          </Form> :
            <Form style={{ fontSize: 16, height: 500 }} className="PlanDetailInfo_cointainer">
              <FormItem className="PlanDetailInfo_title">详情</FormItem>
              <Row style={{ marginTop: 80 }}>
                <Col span={12} >
                  <FormItem
                    {...formItemLayoutLeft}
                    label="名称"
                  >
                    <span>{initialData.ROLENAME}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayoutLeft}
                    label="单位类型"
                  >
                    <span>{initialData.ORG_TYPE}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayoutLeft}
                    label="类型"
                  >
                    <span>{initialData.TYPE}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayoutLeft}
                    label="排序"
                  >
                    <span>{initialData.NUM}</span>
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormItem
                    {...formItemLayoutLeftBottom}
                    label="单位说明"
                  >
                    <span style={{ display: 'inline-block' }}>{initialData.REMARK}</span>
                  </FormItem>
                </Col>
              </Row>
            </Form>
        }
      </div>
    );
  }
}
RoleManageDetail.propTypes = {
  form: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  sendData: PropTypes.func.isRequired,
  editData: PropTypes.func.isRequired,
  createData: PropTypes.func.isRequired,
};
const FormRoleManageDetail = Form.create()(RoleManageDetail);
const WrapRoleManageDetail = EditAndCreate('/api/basic-role/role/', '/api/basic-role/role/', '/api/basic-role/role')(FormRoleManageDetail);
export default WrapRoleManageDetail;

