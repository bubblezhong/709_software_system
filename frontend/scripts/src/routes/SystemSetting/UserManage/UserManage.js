import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Table, Button } from 'antd';
import InputSearch from './../../utils/InputSearch';
import LoadAndRefresh from './../../utils/LoadAndRefresh';

const ButtonGroup = Button.Group;

class UserManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentWillMount() {
    this.props.sendData(this.handleData);
  }
  handleData = (res) => {
    console.log('res', res);
    const tempData = res.data.map((item) => {
      return {
        key: item.ID,
        name: item.NAME,
        type: item.TYPE,
        unitType: item.SU_TYPE,
        sort: item.NUM,
        remark: item.SU_DESC,
      };
    });
    this.setState({ data: tempData });
  }
  render() {
    const columns = [{
      title: '名称',
      dataIndex: 'name',
    }, {
      title: '类型',
      dataIndex: 'type',
    }, {
      title: '单位类型',
      dataIndex: 'unitType',
    }, {
      title: '排序',
      dataIndex: 'sort',
    }, {
      title: '备注',
      dataIndex: 'remark',
    }, {
      title: '操作',
      dataIndex: 'detail',
      render: (text, row) => (
        <Link to={`/main/SystemSetting/UserManageDetail/${row.key}`}>详情</Link>
      ),
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
        <div>
          <ButtonGroup style={{ marginBottom: 10 }}>
            <Button icon="reload" style={{ width: 110, height: 40, fontSize: 14 }}>刷新</Button>
            <Link to="/main/SystemSetting/UserManageNew">
              <Button icon="file-add" style={{ width: 110, height: 40, fontSize: 14, borderRadius: 0 }}>新增</Button>
            </Link>
            <Button icon="login" style={{ width: 110, height: 40, fontSize: 14 }}>导入</Button>
            <Button icon="logout" style={{ width: 110, height: 40, fontSize: 14 }}>导出</Button>
            <Button icon="printer" style={{ width: 110, height: 40, fontSize: 14 }}>打印</Button>
            <Button icon="delete" style={{ width: 110, height: 40, fontSize: 14 }}>删除</Button>
          </ButtonGroup>
          <InputSearch />
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.state.data}
          pagination={{ pageSize: 10 }}
          bordered
        />
      </div>
    );
  }
}
UserManage.propTypes = {
  sendData: PropTypes.func.isRequired,
};
const WrapUserManage = LoadAndRefresh('/api/basic-user/users')(UserManage);
export default WrapUserManage;

