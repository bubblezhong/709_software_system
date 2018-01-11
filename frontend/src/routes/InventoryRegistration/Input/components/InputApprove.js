import React, { Component } from 'react';
import { message, Card, Tabs, Table } from 'antd';
import ApproveForm from './ApproveForm';
import { inputProgress } from './../../../../Models/Process/Input';
import { dictionarySoftware } from './../../../../DataDictionary/index';


// const config = require('./../../../../../config/config');

const TabPane = Tabs.TabPane;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apply: [],
      user: {},
    };
    this.getApproveById = this.getApproveById.bind(this);
  }


  componentWillMount() {
    this.getApproveById('47445de2554b4c94b5866f2d8722a0e4');
  }

  /**
   * 根据ID获取待审批的申请
   * @param {number} id 入库申请单 ID
   * @return {null} null
   */
  async getApproveById(id) {
    try {
      const data = { UUID: id };
      const { res } = await inputProgress(data);
      if (res.code === 1000) {
        message.success('获取入库信息成功');
        this.setState({ apply: res.software, user: res.APPLICANT[0] });
      } else {
        message.error('获取入库信息失败');
      }
    } catch (exception) {
      console.log('exception: ', exception);
    }
  }

  callback(key) {
    console.log(key);
  }

  render() {
    const apply = this.state.apply;
    const user = this.state.user;
    const modules = apply.map((module, i) => {
      const columns = [{
        title: 'title',
        dataIndex: 'title',
      }, {
        title: 'value',
        dataIndex: 'value',
      }];
      const data = [{
        key: 'IDENTIFY_ID',
        title: '唯一编码',
        value: module.IDENTIFY_ID,
      }, {
        key: 'VERSION_NAME',
        title: '版本名称',
        value: module.VERSION_NAME,
      }, {
        key: 'VERSION_CODE',
        title: '版本编号',
        value: module.VERSION_CODE,
      }, {
        key: 'STORAGE_TYPE',
        title: '存储类型',
        value: module.STORAGE_TYPE,
      }, {
        key: 'OPERATION_SYSTEM',
        title: '操作系统',
        value: dictionarySoftware.operation_system[module.OPERATION_SYSTEM],
      }, {
        key: 'MAGNITUDE',
        title: '软件规模',
        value: dictionarySoftware.magnitude[module.MAGNITUDE],
      }, {
        key: 'DEVELOPMENT_DEPARTMENT_ID',
        title: '研发单位',
        value: module.DEVELOPMENT_DEPARTMENT_ID,
      }, {
        key: 'STORAGE_LOCATION',
        title: '存储位置',
        value: module.STORAGE_LOCATION,
      }, {
        key: 'DESCRIPTION',
        title: '版本介绍',
        value: module.DESCRIPTION,
      }];
      return (
        <TabPane tab={module.module_name} key={i}>
          <Table
            showHeader={false}
            pagination={false}
            bordered
            size="small"
            columns={columns}
            dataSource={data}
          />
        </TabPane>
      );
    });
    let applyStatus = '待审批';
    switch (apply.applyStatus) {
      case 0:
        applyStatus = '待审批';
        break;
      case 1:
        applyStatus = '已通过';
        break;
      default:
    }
    const title = `${user.real_name} [${applyStatus}]`;
    const columns = [{
      title: 'title',
      dataIndex: 'title',
    }, {
      title: 'value',
      dataIndex: 'value',
    }];
    const data = [{
      key: 'organization_id',
      title: '申请单位',
      value: user.organization_id,
    }, {
      key: 'real_name',
      title: '申请人',
      value: apply.real_name,
    }, {
      key: 'mobile',
      title: '联系电话',
      value: apply.mobile,
    }];
    return (
      <Card
        title={title}
      >
        <Table
          showHeader={false}
          pagination={false}
          bordered
          size="middle"
          columns={columns}
          dataSource={data}
        />
        <Tabs
          defaultActiveKey="0"
          type="card"
          style={{ marginTop: 20, marginBottom: 20 }}
        >
          {modules}
        </Tabs>
        <div>
          <ApproveForm />
        </div>
      </Card>
    );
  }
}

export default App;
