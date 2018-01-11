import React from 'react';
import { Link } from 'react-router';
import { Button, Table } from 'antd';
import InputSearch from './../../utils/InputSearch';

// const Search = Input.Search;
const ButtonGroup = Button.Group;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        key: '1',
        number: 'CL-20170427-0001',
        ancestry: '应用软件>C类应用软件>对下声呐定位',
        name: '远程目标判断软件',
        unit_name: '声呐控制',
        unit_version: 'V3.0.0.1',
        applicant: '张三',
        creator: '中船重工XX研究所',
        time: '2017/5/18 20:39',
        status: '待录入',
        operate: '详情',
      }, {
        key: '2',
        number: 'CL-20170427-0001',
        ancestry: '应用软件>C类应用软件>对下声呐定位',
        name: '远程目标判断软件',
        unit_name: '声呐控制',
        unit_version: 'V3.0.0.1',
        applicant: '张三',
        creator: '中船重工XX研究所',
        time: '2017/5/18 20:39',
        status: '待录入',
        operate: '详情',
      }, {
        key: '3',
        number: 'CL-20170427-0001',
        ancestry: '应用软件>C类应用软件>对下声呐定位',
        name: '远程目标判断软件',
        unit_name: '声呐控制',
        unit_version: 'V3.0.0.1',
        applicant: '张三',
        creator: '中船重工XX研究所',
        time: '2017/5/18 20:39',
        status: '待录入',
        operate: '详情',
      }, {
        key: '4',
        number: 'CL-20170427-0001',
        ancestry: '应用软件>C类应用软件>对下声呐定位',
        name: '远程目标判断软件',
        unit_name: '声呐控制',
        unit_version: 'V3.0.0.1',
        applicant: '张三',
        creator: '中船重工XX研究所',
        time: '2017/5/18 20:39',
        status: '待录入',
        operate: '详情',
      }, {
        key: '5',
        number: 'CL-20170427-0001',
        ancestry: '应用软件>C类应用软件>对下声呐定位',
        name: '远程目标判断软件',
        unit_name: '声呐控制',
        unit_version: 'V3.0.0.1',
        applicant: '张三',
        creator: '中船重工XX研究所',
        time: '2017/5/18 20:39',
        status: '待录入',
        operate: '详情',
      }, {
        key: '6',
        number: 'CL-20170427-0001',
        ancestry: '应用软件>C类应用软件>对下声呐定位',
        name: '远程目标判断软件',
        unit_name: '声呐控制',
        unit_version: 'V3.0.0.1',
        applicant: '张三',
        creator: '中船重工XX研究所',
        time: '2017/5/18 20:39',
        status: '待录入',
        operate: '详情',
      }, {
        key: '7',
        number: 'CL-20170427-0001',
        ancestry: '应用软件>C类应用软件>对下声呐定位',
        name: '远程目标判断软件',
        unit_name: '声呐控制',
        unit_version: 'V3.0.0.1',
        applicant: '张三',
        creator: '中船重工XX研究所',
        time: '2017/5/18 20:39',
        status: '待录入',
        operate: '详情',
      }, {
        key: '8',
        number: 'CL-20170427-0001',
        ancestry: '应用软件>C类应用软件>对下声呐定位',
        name: '远程目标判断软件',
        unit_name: '声呐控制',
        unit_version: 'V3.0.0.1',
        applicant: '张三',
        creator: '中船重工XX研究所',
        time: '2017/5/18 20:39',
        status: '待录入',
        operate: '详情',
      }, {
        key: '9',
        number: 'CL-20170427-0001',
        ancestry: '应用软件>C类应用软件>对下声呐定位',
        name: '远程目标判断软件',
        unit_name: '声呐控制',
        unit_version: 'V3.0.0.1',
        applicant: '张三',
        creator: '中船重工XX研究所',
        time: '2017/5/18 20:39',
        status: '待录入',
        operate: '详情',
      }],
    };
  }
  render() {
    const Btns = (
      <div style={{ overflow: 'auto', marginBottom: 10 }}>
        <ButtonGroup style={{ float: 'left' }}>
          <Button icon="reload" style={{ width: 110, height: 40, fontSize: 14 }}>刷新</Button>
          <Link to="/main/SoftwareDeployment/DeploymentRequestNew">
            <Button icon="file-add" style={{ width: 110, height: 40, fontSize: 14, borderRadius: 0 }}>申请调配</Button>
          </Link>
          <Button icon="login" style={{ width: 110, height: 40, fontSize: 14 }}>导入</Button>
          <Button icon="logout" style={{ width: 110, height: 40, fontSize: 14 }}>导出</Button>
          <Button icon="printer" style={{ width: 110, height: 40, fontSize: 14 }}>打印</Button>
          <Button icon="delete" style={{ width: 110, height: 40, fontSize: 14 }}>撤销</Button>
        </ButtonGroup>
        <InputSearch />
      </div>
    );
    const columns = [{
      title: '单号',
      dataIndex: 'number',
    }, {
      title: '谱系',
      dataIndex: 'ancestry',
    }, {
      title: '软件名称',
      dataIndex: 'name',
    }, {
      title: '软件单元版本',
      dataIndex: 'unit_version',
    }, {
      title: '申请人',
      dataIndex: 'applicant',
    }, {
      title: '研制单位',
      dataIndex: 'creator',
    }, {
      title: '申请时间',
      dataIndex: 'time',
    }, {
      title: '状态',
      dataIndex: 'status',
    }, {
      title: '操作',
      dataIndex: 'operate',
      render: (text, row) => <Link to={`/main/SoftwareDeployment/DeploymentRequestDetail/${row.key}`}>{text}</Link>,
    }];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
      }),
    };
    return (
      <div>
        {Btns}
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.state.data}
          bordered
        />
      </div>
    );
  }
}

export default App;
