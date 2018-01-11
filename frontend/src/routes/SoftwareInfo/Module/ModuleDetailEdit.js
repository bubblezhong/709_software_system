import React, { PropTypes } from 'react';
import { Link } from 'react-router';
// import moment from 'moment';
import { Button, Form, Input, Switch, Icon } from 'antd';
import './Module.css';
import EditAndCreate from './../../utils/EditAndCreate';
import ModuleTreeSelect from './../../utils/ModuleTreeSelect';
// import { createSelect } from './../../utils/CreateModuleSelect';
// import GetDetailInfo from './../../utils/GetDetailInfo';
// import RefreshData from './../../utils/RefreshData';
// import CreateNewData from './../../utils/CreateNewData';

const FormItem = Form.Item;
class ModuleDetailEdit extends React.Component {
  constructor(props) {
    super(props);
    let id;
    if (this.props.params.id) {
      id = this.props.params.id;
    }
    this.state = {
      id,
      newData: false,
      initialData: {
        moduleName: '参数测试软件',
        number: '001',
        fatherModule: '',
        status: true,
      },
      ancestaryTreeData: [],
    };
  }
  componentWillMount() {
    // console.log(new Date());
    // this.props.generateTree(this.handleSelect);
    // console.log('componentWillMount', this.state.initialData);
    if (this.state.id) {
      this.props.getData(this.handleInitialData);
    }
    if (this.props.location.pathname === '/main/SoftwareInfo/ModuleDetailAdd') {
      this.setState({ initialData: {}, newData: true });
    }
  }
  // handleSelect = (res) => {
  //   console.log('select', res);
  //   const treeData = createSelect(res.data);
  //   this.setState({ ancestaryTreeData: treeData });
  // }
  handleInitialData = (res) => {
    console.log('res35', res);
    res.data.PID = res.data.PID.toString();
    res.data.STATUS = res.data.STATUS === 1;
    this.setState({ initialData: res.data });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.newData);
    if (this.state.newData) {
      this.props.form.validateFields((err, values) => {
        console.log(err, values);
        if (!err) {
          console.log('Received values of form: ', values);
          const tempValues = {
            NAME: values.muduleName,
            PID: values.ancestary,
            STATUS: values.STATUS ? 1 : 0,
            UPDATE_USER: null,
          };
          console.log('addnew', tempValues);
          this.props.createData(tempValues, this.handleResult);
          console.log('Received');
        }
      });
    } else {
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          const tempValues = {
            NAME: values.muduleName,
            PID: values.ancestary,
            STATUS: values.STATUS ? 1 : 0,
            UPDATE_DATE: '2017-08-08T01:40:36.000Z',
            UPDATE_USER: null,
          };
          console.log('edit', tempValues);
          this.props.editData(tempValues, this.handleResult);
          console.log('Received');
        }
      });
    }
  }
  handleResult = (res) => {
    console.log('submit', res);
  }
  render() {
    const { initialData } = this.state;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    // let pidStr;
    // if (initialData.PID) {
    //   const pid = initialData.PID;
    //   pidStr = pid.toString();
    // }
    // console.log(pidStr);
    let toWhere;
    if (this.props.location.pathname === '/main/SoftwareInfo/ModuleDetailAdd') {
      toWhere = '/main/SoftwareInfo/Module';
    } else {
      toWhere = `/main/SoftwareInfo/ModuleDetail/${this.state.id}`;
    }
    return (
      <div>
        <div style={{ overflow: 'hidden', marginBottom: 20 }}>
          <Link to={toWhere} className="MouduleDetail_return">
            <Button style={{ width: 85, height: 30 }}>
              <span style={{ marginRight: 8 }}>&lt;</span>
              <span>返回</span>
            </Button>
          </Link>
          <Link to={`/main/SoftwareInfo/ModuleDetail/${this.state.id}`}>
            <Button type="primary" className="MouduleDetail_reflash">取消</Button>
          </Link>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem style={{ position: 'relative', top: -62, right: '-87%' }}>
            <Button style={{ width: 85, height: 30 }} type="primary" htmlType="submit">确定</Button>
          </FormItem>
          <div className="MouduleDetailEdit_container_title" >
            <h2>编辑</h2>
          </div>
          <FormItem
            {...formItemLayout}
            label="编号"
          >
            {getFieldDecorator('number', {
              initialValue: initialData.ID,
              rules: [{
                required: true, message: '请输入编号',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="谱系名称"
          >
            {getFieldDecorator('muduleName', {
              initialValue: initialData.NAME,
              rules: [{
                message: '请输入谱系名称!',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="上级谱系"
          >
            {getFieldDecorator('ancestary', {
              initialValue: initialData.PID,
              rules: [{ required: true, message: '请选择上级谱系!' }],
            })(
              <ModuleTreeSelect />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="状态"
          >
            {getFieldDecorator('state', {
              valuePropName: 'checked',
              initialValue: initialData.STATUS,
              rules: [{ required: true, message: '请选择状态' }],
            })(
              <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} />
            )}
          </FormItem>
        </Form>
      </div>
    );
  }
}
ModuleDetailEdit.propTypes = {
  form: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  getData: PropTypes.func.isRequired,
  editData: PropTypes.func.isRequired,
  createData: PropTypes.func.isRequired,
};
const FormModuleDetail = Form.create()(ModuleDetailEdit);
// export default WrapModuleDetailEdit;
// const LoadSelect = LoadAndRefresh('/api/basic-module/modules')(FormModuleDetail);
// const GetDefaultData = GetDetailInfo('/api/basic-module/module/')(LoadSelect);
// const EditData = RefreshData('api/basic-module/module/')(GetDefaultData);
// const CreateData = CreateNewData('/api/basic-module/module/')(EditData);
// export default CreateData;
const WrapModuleDetailEdit = EditAndCreate('/api/basic-module/module/', '/api/basic-module/module/', '/api/basic-module/module/')(FormModuleDetail);
export default WrapModuleDetailEdit;
