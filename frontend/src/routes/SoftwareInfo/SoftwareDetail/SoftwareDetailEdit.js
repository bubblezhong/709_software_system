import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Switch, Button, Form, Input, Select, Row, Radio, Upload, Icon, Col } from 'antd';
import './SoftwareDetail.css';
import EditAndCreate from './../../utils/EditAndCreate';
import ModuleTreeSelect from './../../utils/ModuleTreeSelect';
// import SoftwareNameSelect from './../../utils/SoftwareNameSelect';
import DevUnitSelect from './../../utils/DevUnitSelect';
import UnitRepresentSelect from './../../utils/UnitRepresentSelect';
import CategoryTreeSelect from './../../utils/CategoryTreeSelect';
import SoftwareNameSelect from './../../utils/SoftwareNameSelect';

const FormItem = Form.Item;
const Option = Select.Option;
// const TreeNode = TreeSelect.TreeNode;
class SoftwareDetailEdit extends React.Component {
  constructor(props) {
    super(props);
    let id;
    if (this.props.params.id) {
      id = this.props.params.id;
    }
    this.state = {
      id,
      initialData: {},
      addNewStatus: false,
    };
  }
  componentWillMount() {
    if (this.state.id !== undefined) {
      this.props.getData(this.handleInitData);
    }
    if (this.props.location.pathname === '/main/SoftwareInfo/SoftwareDetailAdd') {
      this.setState({ addNewStatus: true });
    }
  }
  handleInitData = (res) => {
    console.log('resSW', res.data);
    const tempData = res.data;
    tempData.INSTALLPOS = tempData.INSTALLPOS.split(',');
    tempData.SW_SYSTEM = tempData.SW_SYSTEM.split(',');
    tempData.MODULE_RELATION = tempData.MODULE_RELATION.split(' ');
    tempData.SW_MATING = tempData.SW_MATING.split(',');
    // tempData.MODULE_RELATION = tempData.MODULE_RELATION.split(',');
    // console.log('lail', tempData.INSTALLPOS);
    tempData.STATUS = tempData.STATUS === 1;
    tempData.DEPARTMENT_ID = tempData.DEPARTMENT_ID.toString();
    tempData.MODULE_ID = tempData.MODULE_ID.toString();
    tempData.SW_OWNER = tempData.SW_OWNER.toString();
    tempData.SW_STORAGE = tempData.SW_STORAGE.toString();
    console.log('tempData', tempData);
    this.setState({ initialData: tempData });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.addNewStatus);
    if (this.state.addNewStatus) {
      this.props.form.validateFields((err, values) => {
        console.log(err, values);
        if (!err) {
          console.log('Received addNewvalues of form: ', values);
          values.INSTALLPOS = values.INSTALLPOS.join(',');
          values.SW_SYSTEM = values.SW_SYSTEM.join(',');
          values.SW_MATING = values.SW_MATING.join(',');
          values.MODULE_ID = parseInt(values.MODULE_ID, 10);
          values.PID = 0;
          values.DEPARTMENT_ID = parseInt(values.DEPARTMENT_ID, 10);
          values.MODULE_RELATION = values.MODULE_RELATION.join(' ');
          values.STATUS = values.STATUS ? 1 : 0;
          console.log(values);
          this.props.createData(values, this.handleResult);
          console.log('Received');
        }
      });
    } else {
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('values.INSTALLPOS', values.INSTALLPOS, values.MODULE_RELATION);
          values.INSTALLPOS = values.INSTALLPOS.join(',');
          values.SW_SYSTEM = values.SW_SYSTEM.join(',');
          values.PID = 0;
          // values.MODULE_RELATION = values.MODULE_RELATION.join(' ');
          // const temp = values.MODULE_RELATION.map((item) => {
          //   return item.value;
          // });
          values.MODULE_RELATION = values.MODULE_RELATION.join(' ');
          values.STATUS = values.STATUS ? 1 : 0;
          console.log('11188', values);
          this.props.editData(values, this.handleResult);
          console.log('Received');
        }
      });
    }
  }
  handleResult = (res) => {
    console.log(res);
  }
  handleSelect = (val) => {
    console.log(val);
  }
  render() {
    const { initialData } = this.state;
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
      <div>
        <div style={{ overflow: 'auto', marginBottom: 20 }}>
          <Link to="/main/SoftwareInfo/SoftwareInfoDetail/1" className="SoftwareInfoDetail_return">
            <Button style={{ width: 85, height: 30 }}>
              <span style={{ marginRight: 8 }}>&lt;</span>
              <span>返回</span>
            </Button>
          </Link>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem style={{ position: 'relative', top: -63, right: '-94%', zIndex: 9999 }}>
            <Button style={{ width: 80, height: 30 }} type="primary" htmlType="submit">确定</Button>
          </FormItem>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '5%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件基本信息</div>
          <Row>
            <Col style={{ height: 55.8 }} span={12}>
              <FormItem
                {...formItemLayout}
                label="谱系"
              >
                {getFieldDecorator('MODULE_ID', {
                  initialValue: initialData.MODULE_ID,
                  rules: [{ required: true, message: '请输入谱系!' }],
                })(
                  <ModuleTreeSelect />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="软件名称"
              >
                {getFieldDecorator('NAME', {
                  initialValue: initialData.NAME,
                  rules: [{
                    required: true, message: '请输入软件名称!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={12} className="moduleRelation">
              <FormItem
                {...formItemLayout}
                label="软件模块关系"
              >
                {getFieldDecorator('MODULE_RELATION', {
                  initialValue: initialData.MODULE_RELATION,
                  rules: [
                    { message: '请输入软件模块关系', type: 'array' },
                  ],
                })(
                  <CategoryTreeSelect onChange={this.handleSelect} multiple />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="编号"
              >
                {getFieldDecorator('SW_CODE', {
                  initialValue: initialData.SW_CODE,
                  rules: [{
                    required: true, message: '请输入编号!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
          </Row>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '5%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>单位基本信息</div>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="军代表"
              >
                {getFieldDecorator('SW_OWNER', {
                  initialValue: initialData.SW_OWNER,
                  rules: [{ required: true, message: '请选择军代表!' }],
                })(
                  <UnitRepresentSelect />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="研制单位"
              >
                {getFieldDecorator('DEPARTMENT_ID', {
                  initialValue: initialData.DEPARTMENT_ID,
                  rules: [
                    { required: true, message: '请输入研制单位!' },
                  ],
                })(
                  <DevUnitSelect />
                )}
              </FormItem>
            </Col>
          </Row>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '5%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件描述信息</div>
          <Row>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="操作系统"
              >
                {getFieldDecorator('SW_SYSTEM', {
                  initialValue: initialData.SW_SYSTEM,
                  rules: [
                    { required: true, message: '请输入操作系统!', type: 'array' },
                  ],
                })(
                  <Select mode="multiple">
                    <Option value="radhat">radhat</Option>
                    <Option value="linux">linux</Option>
                    <Option value="centOS">centOS</Option>
                    <Option value="Windows">Windows</Option>
                    <Option value="塞班">塞班</Option>
                    <Option value="Android">Android</Option>
                    <Option value="ubuntu">ubuntu</Option>
                    <Option value="其他">其他</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="典型安装位置"
              >
                {getFieldDecorator('INSTALLPOS', {
                  initialValue: initialData.INSTALLPOS,
                  rules: [
                    { required: true, message: '请输入典型安装位置!', type: 'array' },
                  ],
                })(
                  <Select mode="multiple">
                    <Option value="中控板">中控板</Option>
                    <Option value="交叉控制板">交叉控制板</Option>
                    <Option value="指挥中心">指挥中心</Option>
                    <Option value="其他">其他</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="存储位置"
              >
                {getFieldDecorator('SW_SAVEPOS', {
                  initialValue: initialData.SW_SAVEPOS,
                  rules: [{
                    required: true, message: '请输入存储位置',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="存储方式"
              >
                {getFieldDecorator('SW_STORAGE', {
                  initialValue: initialData.SW_STORAGE,
                  rules: [{ required: true, message: '请输入存储方式' }],
                })(
                  <Radio.Group>
                    <Radio value="0">自持</Radio>
                    <Radio value="1">网络存储</Radio>
                  </Radio.Group>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="配套软件"
              >
                {getFieldDecorator('SW_MATING', {
                  initialValue: initialData.SW_MATING,
                  rules: [
                    { required: true, message: '请输入配套软件', type: 'array' },
                  ],
                })(
                  <SoftwareNameSelect mode="multiple" />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="激活"
              >
                {getFieldDecorator('STATUS', {
                  valuePropName: 'checked',
                  initialValue: initialData.STATUS,
                  rules: [
                    { required: true, message: '请输入配套软件' },
                  ],
                })(
                  <Switch />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="附件"
              >
                {getFieldDecorator('SW_ANNEX', {
                  rules: [{ message: '请点击上传附件' }],
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
                label="软件描述"
              >
                {getFieldDecorator('SW_INFO', {
                  initialValue: initialData.SW_INFO,
                  rules: [{ message: '请输入软件描述' }],
                })(
                  <Input type="textarea" rows={10} />
                )}
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

SoftwareDetailEdit.propTypes = {
  getData: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  editData: PropTypes.func.isRequired,
  createData: PropTypes.func.isRequired,
  // children: PropTypes.object.isRequired,
};
const FormSoftwareDetail = Form.create()(SoftwareDetailEdit);
const WrapSoftwareDetailEdit = EditAndCreate('/api/basic-software/software/', '/api/basic-software/software/', '/api/basic-software/software')(FormSoftwareDetail);
export default WrapSoftwareDetailEdit;
