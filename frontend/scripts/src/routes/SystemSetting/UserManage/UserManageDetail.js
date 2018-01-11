import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Form, Row, Col, Input, Select, InputNumber } from 'antd';
// import PlanDetailInfo from './PlanDetailInfo';
// import PlanDetailInfoEdit from './PlanDetailInfoEdit';
// import PlanDetailStep from './PlanDetailStep';
// import PlanDetailStepEdit from './PlanDetailStepEdit';
import EditAndCreate from './../../utils/EditAndCreate';
import UnitNameSelect from './../../utils/UnitNameSelect';
import UnitTypeSelect from './../../utils/UnitTypeSelect';

const FormItem = Form.Item;
class UserManageDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newState: false,
      editState: false,
      initialData: {},
      unitType: '',
    };
  }
  componentWillMount() {
    if (this.props.location.pathname === '/main/SystemSetting/UserManageNew') {
      this.setState({ editState: true, initialData: {}, newState: true });
    } else {
      this.props.sendData(this.hanldeInitialData);
    }
  }
  onEdit = () => {
    this.setState({ editState: true });
  }
  onSave = () => {
    this.setState({ editState: false });
  }
  hanldeInitialData = (res) => {
    console.log('resuser', res.data);
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
          this.props.createData(values, this.handleResult);
          console.log('Received');
        }
      });
    } else {
      this.props.form.validateFields((err, values) => {
        if (!err) {
          values.ORGANIZATION_ID = values.ORGANIZATION_ID.toString();
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
  handleSelect = (val) => {
    console.log(val);
    this.setState({ unitType: val });
  }
  render() {
    const { initialData, newState, editState } = this.state;
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
        <Link to="/main/SystemSetting/UserManage">
          <Button style={{ width: 85, height: 30 }} onClick={this.onSave}>
            <span style={{ marginRight: 8 }}>&lt;</span>
            <span>返回</span>
          </Button>
        </Link>
      );
    }
    let SU_NAME;
    if (initialData.ORGANIZATION_ID !== undefined) {
      SU_NAME = initialData.ORGANIZATION_ID.toString();
    }
    console.log('SU_NAME', SU_NAME);
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
          <Form onSubmit={this.handleSubmit} style={{ fontSize: 16 }} className="PlanDetailInfo_cointainer">
            <FormItem style={{ position: 'relative', top: -62, right: '-95%' }}>
              <Button style={{ width: 85, height: 30 }} type="primary" htmlType="submit">确定</Button>
            </FormItem>
            { this.state.newState ?
              <FormItem className="PlanDetailInfo_title" style={{ marginTop: '-40px' }}>新增用户管理</FormItem> :
                <FormItem className="PlanDetailInfo_title" style={{ marginTop: '-40px' }}>详情编辑</FormItem>
            }
            <Row style={{ marginTop: 80 }}>
              <Col span={12} style={{ height: 55 }} >
                <FormItem
                  {...formItemLayoutLeft}
                  label="名称"
                  style={{ fontSize: 16 }}
                >
                  {getFieldDecorator('NAME', {
                    initialValue: initialData.NAME,
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
                  {getFieldDecorator('SU_TYPE', {
                    initialValue: initialData.SU_TYPE,
                    rules: [{ required: true, message: 'Please select your developUnit!' }],
                  })(
                    <UnitTypeSelect onChange={this.handleSelect} />
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayoutLeft}
                  label="单位名称"
                >
                  {getFieldDecorator('ORGANIZATION_ID', {
                    initialValue: SU_NAME,
                    rules: [{ required: true, message: '请选择单位类型!' }],
                  })(
                    <UnitNameSelect unitType={this.state.unitType} />
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
                {getFieldDecorator('SU_DESC', {
                  initialValue: initialData.SU_DESC,
                  rules: [{ message: '请输入备注' }],
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
                    <span>{initialData.NAME}</span>
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
                    label="单位类型"
                  >
                    <span>{initialData.SU_TYPE}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayoutLeft}
                    label="单位名称"
                  >
                    <span>{initialData.SU_NAME}</span>
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
                    label="备注"
                  >
                    <span style={{ display: 'inline-block' }}>{initialData.SU_DESC}</span>
                  </FormItem>
                </Col>
              </Row>
            </Form>
        }
      </div>
    );
  }
}
UserManageDetail.propTypes = {
  form: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  sendData: PropTypes.func.isRequired,
  editData: PropTypes.func.isRequired,
  createData: PropTypes.func.isRequired,
};
const FormUserManage = Form.create()(UserManageDetail);
const WrapUserManageDetail = EditAndCreate('/api/basic-user/user/', '/api/basic-user/user/', '/api/basic-user/user')(FormUserManage);
export default WrapUserManageDetail;

