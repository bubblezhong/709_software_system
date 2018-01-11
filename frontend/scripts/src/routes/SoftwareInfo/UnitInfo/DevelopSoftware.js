import React, { PropTypes } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router';
import moment from 'moment';
import GetDetailInfo from './../../utils/GetDetailInfo';
import './UnitInfo.css';

class DevelopSoftware extends React.Component {
  constructor(props) {
    super(props);
    let id;
    if (this.props.params.id) {
      id = this.props.params.id;
    }
    console.log('this.props.params.id', this.props.params.id);
    this.state = {
      id,
      data: [],
    };
  }
  componentWillMount() {
    this.props.sendInfo(this.handleData);
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
        software_type: item.SW_TYPE,
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
      title: '单号',
      dataIndex: 'number',
    }, {
      title: '谱系',
      dataIndex: 'ancestry',
    }, {
      title: '软件名称',
      dataIndex: 'name',
    }, {
      title: '软件类型',
      dataIndex: 'software_type',
    }, {
      title: '录入时间',
      dataIndex: 'time',
      render: (text) => {
        const time = moment(text).format('YYYY-MM-DD hh:mm');
        return time;
      },
    }, {
      title: '状态',
      dataIndex: 'status',
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
DevelopSoftware.propTypes = {
  params: PropTypes.object.isRequired,
  sendInfo: PropTypes.func.isRequired,
};
const WrapDevelopSoftware = GetDetailInfo('/api/basic-unit/dev-sw-unit/')(DevelopSoftware);
export default WrapDevelopSoftware;
