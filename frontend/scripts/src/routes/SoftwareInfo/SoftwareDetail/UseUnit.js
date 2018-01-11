import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Table } from 'antd';
import moment from 'moment';
import GetDetailInfo from './../../utils/GetDetailInfo';

class UseUnit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.props.sendInfo(this.handleData);
  }
  handleData = (res) => {
    console.log('resU11NIT', res);
    const useUnitData = res.data.map((item) => {
      return {
        key: item.SW_ID,
        number: item.SW_ID,
        unitName: item.UNIT_NAME,
        unitOrder: item.UNIT_ORDER,
        unitType: item.UNIT_TYPE,
        version: item.SW_VERSION,
        installPos: item.SW_INSTALLPOS,
        time: item.SW_CREATE_DATE,
      };
    });
    this.setState({ data: useUnitData });
  }
  render() {
    const columns = [{
      title: '序号',
      dataIndex: 'number',
    }, {
      title: '单位名称',
      dataIndex: 'unitName',
    }, {
      title: '单位序列',
      dataIndex: 'unitOrder',
    }, {
      title: '单位类型',
      dataIndex: 'unitType',
    }, {
      title: '当前版本',
      dataIndex: 'version',
    }, {
      title: '安装位置',
      dataIndex: 'installPos',
    }, {
      title: '时间',
      dataIndex: 'time',
      render: (text) => {
        const time = moment(text).format('YYYY-MM-DD hh:mm');
        return time;
      },
    }, {
      title: '操作',
      dataIndex: 'detail',
      render: (text, row) => <Link to={`/main/SoftwareInfo/UnitDetail/${row.key}`}>单位详情</Link>,
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
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={this.state.data}
        pagination={{ pageSize: 10 }}
        bordered
      />
    );
  }
}
UseUnit.propTypes = {
  sendInfo: PropTypes.func.isRequired,
};
const WrapUseUnit = GetDetailInfo('/api/basic-software/software-unit/')(UseUnit);
export default WrapUseUnit;
// export default UseUnit;
