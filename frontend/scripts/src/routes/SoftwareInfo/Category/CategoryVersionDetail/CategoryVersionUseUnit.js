import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Table } from 'antd';
import moment from 'moment';
import GetDetailInfo from './../../../utils/GetDetailInfo';

class UseUnit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        key: '1',
        number: '01',
        unitName: 'XX中队指挥所',
        unitOrder: 'xx舰队>>XX支队',
        unitType: '研发单位',
        version: 'V1.23.5',
        installPos: '主控板',
        time: '2017/5/18 20:39',
        detail: '单位详情',
      }, {
        key: '2',
        number: '01',
        unitName: 'XX中队指挥所',
        unitOrder: 'xx舰队>>XX支队',
        unitType: '研发单位',
        version: 'V1.23.5',
        installPos: '主控板',
        time: '2017/5/18 20:39',
        detail: '单位详情',
      }, {
        key: '3',
        number: '01',
        unitName: 'XX中队指挥所',
        unitOrder: 'xx舰队>>XX支队',
        unitType: '研发单位',
        version: 'V1.23.5',
        installPos: '主控板',
        time: '2017/5/18 20:39',
        detail: '单位详情',
      }, {
        key: '4',
        number: '01',
        unitName: 'XX中队指挥所',
        unitOrder: 'xx舰队>>XX支队',
        unitType: '研发单位',
        version: 'V1.23.5',
        installPos: '主控板',
        time: '2017/5/18 20:39',
        detail: '单位详情',
      }, {
        key: '5',
        number: '01',
        unitName: 'XX中队指挥所',
        unitOrder: 'xx舰队>>XX支队',
        unitType: '研发单位',
        version: 'V1.23.5',
        installPos: '主控板',
        time: '2017/5/18 20:39',
        detail: '单位详情',
      }, {
        key: '6',
        number: '01',
        unitName: 'XX中队指挥所',
        unitOrder: 'xx舰队>>XX支队',
        unitType: '研发单位',
        version: 'V1.23.5',
        installPos: '主控板',
        time: '2017/5/18 20:39',
        detail: '单位详情',
      }, {
        key: '7',
        number: '01',
        unitName: 'XX中队指挥所',
        unitOrder: 'xx舰队>>XX支队',
        unitType: '研发单位',
        version: 'V1.23.5',
        installPos: '主控板',
        time: '2017/5/18 20:39',
        detail: '单位详情',
      }, {
        key: '8',
        number: '01',
        unitName: 'XX中队指挥所',
        unitOrder: 'xx舰队>>XX支队',
        unitType: '研发单位',
        version: 'V1.23.5',
        installPos: '主控板',
        time: '2017/5/18 20:39',
        detail: '单位详情',
      }, {
        key: '9',
        number: '01',
        unitName: 'XX中队指挥所',
        unitOrder: 'xx舰队>>XX支队',
        unitType: '研发单位',
        version: 'V1.23.5',
        installPos: '主控板',
        time: '2017/5/18 20:39',
        detail: '单位详情',
      }, {
        key: '10',
        number: '01',
        unitName: 'XX中队指挥所',
        unitOrder: 'xx舰队>>XX支队',
        unitType: '研发单位',
        version: 'V1.23.5',
        installPos: '主控板',
        time: '2017/5/18 20:39',
        detail: '单位详情',
      }, {
        key: '11',
        number: '01',
        unitName: 'XX中队指挥所',
        unitOrder: 'xx舰队>>XX支队',
        unitType: '研发单位',
        version: 'V1.23.5',
        installPos: '主控板',
        time: '2017/5/18 20:39',
        detail: '单位详情',
      }, {
        key: '12',
        number: '01',
        unitName: 'XX中队指挥所',
        unitOrder: 'xx舰队>>XX支队',
        unitType: '研发单位',
        version: 'V1.23.5',
        installPos: '主控板',
        time: '2017/5/18 20:39',
        detail: '单位详情',
      }],
    };
  }
  componentWillMount() {
    this.props.sendInfo(this.handleData);
  }
  handleData = (res) => {
    console.log('resUnit', res);
    const tempData = res.data.map((item, index) => {
      return {
        number: index,
        unitName: item.UNIT_NAME,
        unitOrder: item.UNIT_ORDER,
        unitType: item.UNIT_TYPE,
        version: item.SW_VERSION,
        installPos: item.SW_INSTALLPOS,
        time: item.SW_CREATE_DATE,
        unitId: item.UNIT_ID,
      };
    });
    this.setState({ data: tempData });
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
      render: (text, row) => <Link to={`/main/SoftwareInfo/UnitDetail/${row.unitId}`}>单位详情</Link>,
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
      <div style={{ padding: 30 }}>
        <h2 style={{ marginBottom: 10 }}>使用单位</h2>
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
UseUnit.propTypes = {
  sendInfo: PropTypes.func.isRequired,
};
const WrapUseUnit = GetDetailInfo('/api/basic-software/software-unit/')(UseUnit);
export default WrapUseUnit;
// export default UseUnit;
