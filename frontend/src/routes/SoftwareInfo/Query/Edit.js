import React, { Component, PropTypes } from 'react';
import {
  Form,
  Button,
  Row,
  Col,
  message,
  Spin,
} from 'antd';
import SoftwareFormItem from './Components/SoftwareFormItem';
import {
  getSoftwareById,
  updateSoftware,
} from './../../../Models/Software/Software';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      isButtonLoading: false,
      softwareInfo: {},
    };
    this.handleGetSoftwareById = this.handleGetSoftwareById.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }


  componentWillMount() {
    this.handleGetSoftwareById();
  }

  async handleGetSoftwareById() {
    this.setState({ loading: true });
    try {
      const { id } = this.props.params;
      const { res } = await getSoftwareById(id);
      console.log('res: ', res);
      if (res.code === 1000) {
        this.setState({
          softwareInfo: res.software[0],
          loading: false,
        });
      } else {
        message.error(res.message || '获取软件列表失败', 3);
        this.setState({ loading: false });
      }
    } catch (e) {
      console.log(e);
      this.setState({ loading: false });
      message.error(e.message || '获取软件列表失败', 3);
    }
  }


  // 更新软件信息
  async handleUpdate(data) {
    try {
      const { res } = await updateSoftware(data);
      console.log('res11: ', res);
      if (res.code === 3000) {
        message.success('更新软件信息成功', 3);
        this.setState({
          softwareInfo: res.data[0],
        });
      } else {
        message.error(res.message || '更新软件信息失败', 3);
      }
    } catch (e) {
      console.log(e.message || '更新软件信息失败');
    }
    this.setState({ isButtonLoading: false });
  }


  handleSubmit() {
    console.log('handleSubmit');
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        console.log('this.state.currentCategoryForm: ', this.state.currentCategoryForm);
        this.setState({
          isButtonLoading: true,
        });
        const { id } = this.state.softwareInfo;
        console.log('softwareInfo: ', this.state.softwareInfo);
        const data = values;
        data.id = id;
        data.modules_list = values.modules_list && values.modules_list.join(',');
        console.log('data: ', data);
        this.handleUpdate(data);
      }
    });
  }

  render() {
    return (
      <Spin spinning={this.state.loading}>
        <Row>
          <Col span={24}>
            <Form>
              <SoftwareFormItem
                softwareInfo={this.state.softwareInfo}
                showFormType="edit"
                form={this.props.form}
              />
              <Row>
                <Col offset={4}>
                  <Button
                    type="primary"
                    size="large"
                    onClick={this.handleSubmit}
                    loading={this.state.isButtonLoading}
                  >
                    修改软件
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Spin>
    );
  }
}


App.propTypes = {
  form: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};


export default Form.create({})(App);
