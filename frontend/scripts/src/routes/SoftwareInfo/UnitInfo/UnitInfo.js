import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Table, Button } from 'antd';
import moment from 'moment';
import InputSearch from './../../utils/InputSearch';
import './UnitInfo.css';
import LoadAndRefresh from './../../utils/LoadAndRefresh';

const ButtonGroup = Button.Group;
// const Search = Input.Search;
class UnitInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteBtn: 'none',
      searchValue: '',
      data: [],
    };
  }
  componentWillMount() {
    // this.handleData 作为 cb 传入高阶组件
    this.props.sendData(this.handleData);
    console.log('resp118');
  }
  handleData = (res) => {
    console.log('resp', res);
    const tempData = res.data.map((item) => {
      return {
        key: item.ID,
        number: item.SU_CODE,
        unit: item.SU_NAME,
        manager: item.MANAGER_NAME,
        time: item.CREATE_DATE,
        unitType: item.SU_TYPE,
      };
    });
    this.setState({ data: tempData });
  }
  render() {
    const columns = [{
      title: '编号',
      dataIndex: 'number',
    }, {
      title: '单位',
      dataIndex: 'unit',
    }, {
      title: '单位类型',
      dataIndex: 'unitType',
    }, {
      title: '负责人',
      dataIndex: 'manager',
    }, {
      title: '时间',
      dataIndex: 'time',
      render: (text) => {
        const time = moment(text).format('YYYY-MM-DD hh:mm');
        return time;
      },
    }, {
      title: '详情',
      dataIndex: 'detail',
      render: (text, row) => <Link to={`/main/SoftwareInfo/UnitDetail/${row.key}`}>详情</Link>,
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
            <Button icon="logout" style={{ width: 110, height: 40, fontSize: 14 }}>导出</Button>
            <Button icon="printer" style={{ width: 110, height: 40, fontSize: 14 }}>打印</Button>
          </ButtonGroup>
          <InputSearch />
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.state.data}
          pagination={{ pageSize: 10 }}
        />
      </div>
    );
  }
}

UnitInfo.propTypes = {
  sendData: PropTypes.func.isRequired,
};
const WrapInfoShow = LoadAndRefresh('/api/basic-unit/units')(UnitInfo);
export default WrapInfoShow;
