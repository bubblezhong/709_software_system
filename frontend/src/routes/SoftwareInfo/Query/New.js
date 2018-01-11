import React, { Component, PropTypes } from 'react';
import {
  Form,
  Button,
  Row,
  Col,
  message,
} from 'antd';
import SoftwareFormItem from './Components/SoftwareFormItem';
import {
  addSoftware,
} from './../../../Models/Software/Software';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isButtonLoading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  /**
   * 添加软件信息
   * @param {object} data 软件信息
   * @return {Promise.<void>} null
   */
  async handleAdd(data) {
    try {
      const { res } = await addSoftware(data);
      console.log('res: ', res);
      if (res.code === 2000) {
        // 添加软件成功
        message.success('添加软件成功！');
        this.setState({
          isButtonLoading: false,
        });
      } else {
        // 添加软件失败
        message.error(res.message || '添加软件失败，请重试', 3);
        this.setState({
          isButtonLoading: false,
        });
      }
    } catch (e) {
      message.error(e.message || '添加软件信息失败，请重试', 3);
      this.setState({
        isButtonLoading: false,
      });
    }
  }


  handleSubmit() {
    // console.log('handleSubmit');
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        console.log('this.state.currentCategoryForm: ', this.state.currentCategoryForm);
        this.setState({
          isButtonLoading: true,
        });
        const data = values;
        data.modules_list = values.modules_list && values.modules_list.join(',');
        this.handleAdd(data);
      }
    });
  }

  render() {
    return (
      <Row>
        <Col span={24}>
          <Form>
            <SoftwareFormItem
              softwareInfo={{}}
              showFormType="new"
              form={this.props.form}
            />
            <Row>
              <Col offset={4} >
                <Button
                  type="primary"
                  size="large"
                  onClick={this.handleSubmit}
                  loading={this.state.isButtonLoading}
                >
                  添加软件
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    );
  }
}


App.propTypes = {
  form: PropTypes.object.isRequired,
};


export default Form.create({})(App);
