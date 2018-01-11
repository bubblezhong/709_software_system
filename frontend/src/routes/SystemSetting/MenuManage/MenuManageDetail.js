import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import { Icon, Button, Form, Row, Col, Input, Select, Switch, Modal } from 'antd';
// import PlanDetailInfo from './PlanDetailInfo';
// import PlanDetailInfoEdit from './PlanDetailInfoEdit';
// import PlanDetailStep from './PlanDetailStep';
// import PlanDetailStepEdit from './PlanDetailStepEdit';
const FormItem = Form.Item;
class MenuManageDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    if (this.props.newState) {
      this.setState({ editState: true, initialData: {} });
    }
  }
  onEdit = () => {
    this.setState({ editState: true });
  }
  onSave = () => {
    this.setState({ editState: false });
  }
  onReturn = () => {
    console.log('onreturn1');
    this.props.handleCancel();
  }
  render() {
    const { initialData } = this.state;
    const { getFieldDecorator } = this.props.form;
    const formItemLayoutLeft = {
      labelCol: { span: 5 },
      wrapperCol: { span: 12 },
    };
    const formItemLayoutEdit = {
      labelCol: { span: 8 },
      wrapperCol: { span: 12 },
    };
    // let toWhere;
    // if (editState && !newState) {
    //   toWhere = (
    //     <Button className="SoftwareInfoDetail_reflash" onClick={this.onSave}>
    //       <span style={{ marginRight: 8 }}>&lt;</span>
    //       <span>返回</span>
    //     </Button>
    //   );
    // } else {
    //   toWhere = (
    //     <Link to="/main/SystemSetting/MenuManage">
    //       <Button className="SoftwareInfoDetail_reflash" onClick={this.onSave}>
    //         <span style={{ marginRight: 8 }}>&lt;</span>
    //         <span>返回</span>
    //       </Button>
    //     </Link>
    //   );
    // }
    return (
      <Modal
        closable={false}
        visible={this.props.visible}
        footer={null}
      >
        <div style={{ position: 'absolute', top: 0, left: 0 }}>
          <img width="520px" src="../../images/system_title.jpg" alt="" />
        </div>
        <div className="MenuManageDetail_modalTitle">菜单管理详情</div>
        {this.props.showEdit ?
          <Form style={{ fontSize: 16, padding: 0, borderRadius: 0, boederTop: 0 }} className="PlanDetailInfo_cointainer">
            <Row style={{ marginTop: 18 }}>
              <Col span={24}>
                <FormItem
                  {...formItemLayoutEdit}
                  label="ID"
                >
                  <span>{initialData.id}</span>
                </FormItem>
              </Col>
              <Col span={24} style={{ height: 56 }} >
                <FormItem
                  {...formItemLayoutEdit}
                  label="菜单名称"
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
              <Col span={24}>
                <FormItem
                  {...formItemLayoutEdit}
                  label="上级菜单ID"
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
              <Col span={24}>
                <FormItem
                  {...formItemLayoutEdit}
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
            <Form style={{ fontSize: 16, padding: 0, borderRadius: 0, boederTop: 0 }} className="PlanDetailInfo_cointainer">
              <Row style={{ marginTop: 18 }}>
                <Col span={24}>
                  <FormItem
                    style={{ borderBottom: '1px solid #dadada' }}
                    {...formItemLayoutLeft}
                    label="ID"
                  >
                    <span>{initialData.id}</span>
                  </FormItem>
                </Col>
                <Col span={24} >
                  <FormItem
                    style={{ borderBottom: '1px solid #dadada' }}
                    {...formItemLayoutLeft}
                    label="菜单名称"
                  >
                    <span>{initialData.menuName}</span>
                  </FormItem>
                </Col>
                <Col span={24}>
                  <FormItem
                    style={{ borderBottom: '1px solid #dadada' }}
                    {...formItemLayoutLeft}
                    label="上级菜单ID"
                  >
                    <span>{initialData.superiorId}</span>
                  </FormItem>
                </Col>
                <Col span={24}>
                  <FormItem
                    style={{ marginBottom: 0 }}
                    {...formItemLayoutLeft}
                    label="是否启用"
                  >
                    <span>{initialData.startUse}</span>
                  </FormItem>
                </Col>
              </Row>
            </Form>
        }
        {this.props.showEdit ?
          <div style={{ textAlign: 'center', marginTop: 10 }}>
            <Button onClick={this.onReturn} style={{ width: 80, height: 35, backgroundColor: '#00c1d1', color: '#fff', marginRight: 10 }}>取消</Button>
            <Button onClick={this.onSubmit} style={{ width: 80, height: 35, backgroundColor: '#00c1d1', color: '#fff' }}>确定</Button>
          </div> :
            <div style={{ textAlign: 'center', marginTop: 10 }}>
              <Button onClick={this.onReturn} style={{ width: 80, height: 35, backgroundColor: '#00c1d1', color: '#fff' }}>返回</Button>
            </div>
        }
      </Modal>
    );
  }
}
MenuManageDetail.propTypes = {
  form: PropTypes.object.isRequired,
  // location: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  showEdit: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
  newState: PropTypes.bool.isRequired,
};
const WrapMenuManageDetail = Form.create()(MenuManageDetail);
export default WrapMenuManageDetail;

