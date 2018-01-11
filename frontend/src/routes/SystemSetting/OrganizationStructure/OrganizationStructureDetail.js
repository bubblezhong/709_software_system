import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Form, Row, Col, Input, Select } from 'antd';
import EditAndCreate from './../../utils/EditAndCreate';
import DevUnitSelect from './../../utils/DevUnitSelect';
import UnitRepresentSelect from './../../utils/UnitRepresentSelect';

const FormItem = Form.Item;
class OrganizationStructureDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editState: false,
      newState: false,
      initialData: {},
    };
  }
  componentWillMount() {
    if (this.props.location.pathname === '/main/SystemSetting/OrganizationStructureNew') {
      this.setState({ editState: true, initialData: {}, newState: true });
    } else {
      this.props.getData((res) => { this.hanldeInitialData(res); });
    }
  }
  onEdit = () => {
    this.setState({ editState: true });
  }
  onSave = () => {
    this.setState({ editState: false });
  }
  hanldeInitialData = (res) => {
    console.log('resp', res);
    res.data.MANAGER = res.data.MANAGER.toString();
    this.setState({ initialData: res.data });
  };
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
        <Link to="/main/SystemSetting/OrganizationStructure">
          <Button style={{ width: 85, height: 30 }} onClick={this.onSave}>
            <span style={{ marginRight: 8 }}>&lt;</span>
            <span>返回</span>
          </Button>
        </Link>
      );
    }
    let unitPid;
    if (initialData.PID !== undefined) {
      unitPid = initialData.PID.toString();
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
          <Form onSubmit={this.handleSubmit} style={{ fontSize: 16, height: 600 }} className="PlanDetailInfo_cointainer">
            <FormItem style={{ position: 'relative', top: -62, right: '-94%' }}>
              <Button style={{ width: 85, height: 30 }} type="primary" htmlType="submit">确定</Button>
            </FormItem>
            { this.state.newState ?
              <FormItem className="PlanDetailInfo_title" style={{ marginTop: -40 }}>新增下级</FormItem> :
                <FormItem className="PlanDetailInfo_title" style={{ marginTop: -40 }}>详情编辑</FormItem>
            }
            <Row style={{ marginTop: 60 }}>
              <Col span={12} style={{ height: 56 }} >
                <FormItem
                  {...formItemLayoutLeft}
                  label="名称"
                  style={{ fontSize: 16 }}
                >
                  {getFieldDecorator('SU_NAME', {
                    initialValue: initialData.SU_NAME,
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
                  label="编号"
                >
                  {getFieldDecorator('SU_CODE', {
                    initialValue: initialData.SU_CODE,
                    rules: [{ required: true, message: '请输入型号!' }],
                  })(
                    <Input />
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
                    rules: [{ required: true, message: '请选择单位类型!' }],
                  })(
                    <Select>
                      <Option value="研发单位">研发单位</Option>
                      <Option value="代表室">代表室</Option>
                      <Option value="使用部门">使用部门</Option>
                      <Option value="日常管理部门">日常管理部门</Option>
                      <Option value="05-yy中队指挥所">05-yy中队指挥所</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayoutLeft}
                  label="上级单位"
                >
                  {getFieldDecorator('PID', {
                    initialValue: unitPid,
                    rules: [{ required: true, message: '请选择上级单位!' }],
                  })(
                    <DevUnitSelect />
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem
                  {...formItemLayoutLeft}
                  label="选择联系人"
                >
                  {getFieldDecorator('MANAGER', {
                    initialValue: initialData.MANAGER,
                    rules: [{ required: true, message: '请选择联系人!' }],
                  })(
                    <UnitRepresentSelect />
                  )}
                </FormItem>
              </Col>
              <Col span={12} >
                <FormItem
                  {...formItemLayoutLeft}
                  label="联系电话"
                  style={{ fontSize: 16 }}
                >
                  {getFieldDecorator('PHONE', {
                    initialValue: initialData.PHONE,
                    rules: [{
                      required: true, message: '请输入联系电话',
                    }],
                  })(
                    <Input size="large" />
                  )}
                </FormItem>
              </Col>
              <Col span={12} >
                <FormItem
                  {...formItemLayoutLeft}
                  label="邮箱"
                  style={{ fontSize: 16 }}
                >
                  {getFieldDecorator('EMAIL', {
                    initialValue: initialData.EMAIL,
                    rules: [{
                      message: '请输入邮箱',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
              </Col>
              <Col span={12} >
                <FormItem
                  {...formItemLayoutLeft}
                  label="地址"
                  style={{ fontSize: 16 }}
                >
                  {getFieldDecorator('ADDR', {
                    initialValue: initialData.ADDR,
                    rules: [{
                      required: true, message: '请输入地址',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <FormItem
                {...formItemLayoutLeftBottom}
                label="单位说明"
                style={{ fontSize: 14 }}
              >
                {getFieldDecorator('SU_DESC', {
                  initialValue: initialData.SU_DESC,
                  rules: [{
                    message: '请输入单位说明',
                  }],
                })(
                  <Input type="textarea" rows={8} />
              )}
              </FormItem>
            </Row>
          </Form> :
            <Form style={{ fontSize: 16, height: 600 }} className="PlanDetailInfo_cointainer">
              <FormItem className="PlanDetailInfo_title">详情</FormItem>
              <Row style={{ marginBottom: 0, marginTop: 80 }}>
                <Col span={12} >
                  <FormItem
                    {...formItemLayoutLeft}
                    label="名称"
                  >
                    <span>{initialData.SU_NAME}</span>
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
                    label="上级单位"
                  >
                    <span>{initialData.P_NAME}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayoutLeft}
                    label="联系人"
                  >
                    <span>{initialData.USER_NAME}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayoutLeft}
                    label="联系电话"
                  >
                    <span>{initialData.PHONE}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayoutLeft}
                    label="邮箱"
                  >
                    <span>{initialData.EMAIL}</span>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem
                    {...formItemLayoutLeft}
                    label="地址"
                  >
                    <span>{initialData.ADDR}</span>
                  </FormItem>
                </Col>
              </Row>
              <Row style={{ marginBottom: 20 }}>
                <Col>
                  <FormItem
                    {...formItemLayoutLeftBottom}
                    label="单位说明"
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
OrganizationStructureDetail.propTypes = {
  form: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  getData: PropTypes.func.isRequired,
  editData: PropTypes.func.isRequired,
  createData: PropTypes.func.isRequired,
};
const FormOrganizationStructureDetail = Form.create()(OrganizationStructureDetail);
const WrapOrganizationStructureDetail = EditAndCreate('/api/basic-unit/unit/', '/api/basic-unit/unit/', '/api/basic-unit/unit')(FormOrganizationStructureDetail);
export default WrapOrganizationStructureDetail;
