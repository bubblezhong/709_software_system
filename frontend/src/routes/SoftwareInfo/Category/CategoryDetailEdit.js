import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Form, Input, Select, Row, Radio, Upload, Icon, Col, Switch } from 'antd';
import './Category.css';
import EditAndCreate from './../../utils/EditAndCreate';
import ModuleTreeSelect from './../../utils/ModuleTreeSelect';
import CategoryTreeSelect from './../../utils/CategoryTreeSelect';
import SoftwareNameSelect from './../../utils/SoftwareNameSelect';
import DevUnitSelect from './../../utils/DevUnitSelect';
import UnitRepresentSelect from './../../utils/UnitRepresentSelect';


const FormItem = Form.Item;
const Option = Select.Option;
// const TreeNode = TreeSelect.TreeNode;
class CategoryDetailEdit extends React.Component {
  constructor(props) {
    super(props);
    console.log('111id', this.props);
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
    if (this.props.location.pathname === '/main/SoftwareInfo/CategoryDetailAdd') {
      this.setState({ addNewStatus: true });
    }
  }
  handleInitData = (res) => {
    console.log('category', res);
    console.log(this.props.children.props.routes[2].name);
    if (this.props.children.props.routes[2].name === '新增下级单元信息') {
      console.log('rescategory', res);
      this.setState({ initialData: {
        PID: res.data.PID,
        SW_ID: res.data.SW_ID,
        SW_MODULE_ID: res.data.SW_MODULE_ID,
      } });
    } else {
      const tempData = res.data;
      tempData.INSTALLPOS = tempData.INSTALLPOS.split(',');
      tempData.SU_SYSTEM = tempData.SU_SYSTEM.split(',');
      tempData.SU_STORAGE = tempData.SU_STORAGE.toString();
      tempData.SW_MODULE_ID = tempData.SW_MODULE_ID.toString();
      tempData.PID = tempData.PID.toString();
      tempData.SW_ID = tempData.SW_ID.toString().split(',');
      tempData.SW_DEPARTMENT_ID = tempData.SW_DEPARTMENT_ID.toString();
      tempData.SU_OWNERID = tempData.SU_OWNERID.toString();
      console.log('lail', tempData.INSTALLPOS);
      this.setState({ initialData: tempData });
    }
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
          values.SU_SYSTEM = values.SU_SYSTEM.join(',');
          console.log(values);
          this.props.createData(values, this.handleResult);
          console.log('Received');
        }
      });
    } else {
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received valuesEdit of form: ', JSON.stringify(values));
          values.INSTALLPOS = values.INSTALLPOS.join(',');
          values.SU_SYSTEM = values.SU_SYSTEM.join(',');
          values.SW_ID = values.SW_ID.join(',');
          console.log(JSON.stringify(values));
          this.props.editData(values, this.handleResult);
          console.log('Received');
        }
      });
    }
  }
  handleResult = (res) => {
    console.log('editandcreat', res);
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
    let toWhere;
    if (this.props.location.pathname === '/main/SoftwareInfo/CategoryDetailAdd') {
      toWhere = '/main/SoftwareInfo/Category';
    } else {
      toWhere = `/main/SoftwareInfo/CategoryDetail/${this.state.id}`;
    }
    return (
      <div>
        <div style={{ overflow: 'auto', marginBottom: 20 }}>
          <Link to={toWhere} className="SoftwareInfoDetail_return">
            <Button style={{ width: 85, height: 30 }}>
              <span style={{ marginRight: 8 }}>&lt;</span>
              <span>返回</span>
            </Button>
          </Link>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem style={{ position: 'relative', top: -62, right: '-95%' }}>
            <Button style={{ width: 85, height: 30 }} type="primary" htmlType="submit">确定</Button>
          </FormItem>
          <div style={{ marginBottom: 20, marginTop: 20, marginLeft: '5%', width: '90%', height: 50, backgroundColor: '#edf7fc', lineHeight: '50px', paddingLeft: 20 }}>软件单元基本信息</div>
          <Row>
            <Col style={{ height: 55.8 }} span={12}>
              <FormItem
                {...formItemLayout}
                label="谱系"
              >
                {getFieldDecorator('SW_MODULE_ID', {
                  initialValue: initialData.SW_MODULE_ID,
                  rules: [{ required: true, message: '请输入谱系!' }],
                })(
                  <ModuleTreeSelect />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="软件11名称"
              >
                {getFieldDecorator('SW_ID', {
                  initialValue: initialData.SW_ID,
                  rules: [{
                    message: '请选择软件名称!',
                  }],
                })(
                  <SoftwareNameSelect />
                  )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="上级单元"
              >
                {getFieldDecorator('PID', {
                  initialValue: initialData.PID,
                  rules: [{
                    required: true, message: '请输入上级单元ID!',
                  }],
                })(
                  <CategoryTreeSelect />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="软件单元名称"
              >
                {getFieldDecorator('SU_NAME', {
                  initialValue: initialData.SU_NAME,
                  rules: [{
                    required: true, message: '请输入软件单元名称!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="编号"
              >
                {getFieldDecorator('SU_CODE', {
                  initialValue: initialData.SU_CODE,
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
                {getFieldDecorator('SU_OWNERID', {
                  initialValue: initialData.SU_OWNERID,
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
                    { required: true, message: '请选择研制单位!' },
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
                {getFieldDecorator('SU_SYSTEM', {
                  initialValue: initialData.SU_SYSTEM,
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
                {getFieldDecorator('SU_SAVEPOS', {
                  initialValue: initialData.SU_SAVEPOS,
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
                {getFieldDecorator('SU_STORAGE', {
                  initialValue: initialData.SU_STORAGE,
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
                label="激活"
              >
                {getFieldDecorator('STATUS', {
                  initialValue: true,
                  rules: [{ required: true, message: '请选择是否激活' }],
                })(
                  <Switch defaultChecked={false} />,
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="附件"
              >
                {getFieldDecorator('SU_ANNEX', {
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
                label="软件单元描述"
              >
                {getFieldDecorator('SU_DESCRIBE', {
                  initialValue: initialData.SU_DESCRIBE,
                  rules: [{ required: true, message: '请输入软件描述' }],
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

CategoryDetailEdit.propTypes = {
  form: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  getData: PropTypes.func.isRequired,
  editData: PropTypes.func.isRequired,
  createData: PropTypes.func.isRequired,
};
const FormCategoryDetail = Form.create()(CategoryDetailEdit);
const WrapCategoryDetailEdit = EditAndCreate('/api/basic-category/category/', '/api/basic-category/category/', '/api/basic-category/category')(FormCategoryDetail);
export default WrapCategoryDetailEdit;
