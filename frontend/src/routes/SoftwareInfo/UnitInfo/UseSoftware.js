import React, { PropTypes } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router';
import moment from 'moment';
import './UnitInfo.css';
import GetDetailInfo from './../../utils/GetDetailInfo';

class UseSoftware extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentWillMount() {
    this.props.sendInfo(this.props.id, this.handleData);
  }
  handleData = (res) => {
    console.log('usesoftware', res);
    // this.setState({ InitialData: res.data });
    const tempData = res.data.map((item) => {
      return {
        key: item.ID,
        sort: item.ID,
        number: item.SW_CODE,
        ancestry: item.MODULE_TREE,
        name: item.NAME,
        version: item.SW_VERSION,
        time: item.UPDATE_DATE,
      };
    });
    this.setState({ data: tempData });
  }
  render() {
    const columns = [{
      title: '序号',
      dataIndex: 'sort',
    }, {
      title: '软件编号',
      dataIndex: 'number',
    }, {
      title: '谱系',
      dataIndex: 'ancestry',
    }, {
      title: '软件名称',
      dataIndex: 'name',
    }, {
      title: '版本',
      dataIndex: 'version',
    }, {
      title: '出库时间',
      dataIndex: 'time',
      render: (text) => {
        const time = moment(text).format('YYYY-MM-DD hh:mm');
        return time;
      },
    }, {
      title: '详情',
      dataIndex: 'operate',
      render: (text, row) => <Link to={`/main/SoftwareInfo/SoftwareInfoDetail/${row.key}`}>详情</Link>,
    }];
    return (
      <div>
        <Table
          columns={columns}
          dataSource={this.state.data}
          bordered
        />
      </div>
    );
  }
}
UseSoftware.propTypes = {
  id: PropTypes.string.isRequired,
  sendInfo: PropTypes.func.isRequired,
};
const WrapUseSoftware = GetDetailInfo('/api/basic-unit/use-sw-unit/')(UseSoftware);
export default WrapUseSoftware;
