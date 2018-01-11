import React, { PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import { Table, Button } from 'antd';
import moment from 'moment';
import InputSearch from './../../utils/InputSearch';
import LoadAndRefresh from './../../utils/LoadAndRefresh';

// const Search = Input.Search;
const ButtonGroup = Button.Group;
class SoftwareDetail extends React.Component {
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
        number: item.SW_CODE,
        ancestry: item.MODULE_TREE,
        name: item.NAME,
        devUnit: item.SU_NAME,
        time: item.CREATE_TIME,
        status: item.STATUS,
      };
    });
    this.setState({ data: tempData });
  }
  render() {
    const columns = [{
      title: '编号',
      dataIndex: 'number',
    }, {
      title: '谱系',
      dataIndex: 'ancestry',
    }, {
      title: '软件名称',
      dataIndex: 'name',
    }, {
      title: '研制单位',
      dataIndex: 'devUnit',
    }, {
      title: '创建时间',
      dataIndex: 'time',
      render: (text) => {
        const time = moment(text).format('YYYY-MM-DD hh:mm');
        return time;
      },
    }, {
      title: '状态',
      dataIndex: 'status',
      render: (text) => {
        if (text === 1) {
          return <span>已激活</span>;
        }
        return <span>未激活</span>;
      },
    }, {
      title: '操作',
      dataIndex: 'detail',
      render: (text, row) => <Link to={`/main/SoftwareInfo/SoftwareInfoDetail/${row.key}`}>详情</Link>,
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
            <Button onClick={() => browserHistory.push('/main/SoftwareInfo/SoftwareDetailAdd')} icon="file-add" style={{ width: 110, height: 40, fontSize: 14 }}>新增</Button>
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
SoftwareDetail.propTypes = {
  sendData: PropTypes.func.isRequired,
};
const WrapSoftwareDetail = LoadAndRefresh('/api/basic-software/softwares')(SoftwareDetail);
export default WrapSoftwareDetail;
