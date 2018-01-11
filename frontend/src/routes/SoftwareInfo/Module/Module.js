import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import { Table, Button } from 'antd';
import InputSearch from './../../utils/InputSearch';
import LoadAndRefresh from './../../utils/LoadAndRefresh';
// import { createSelect } from './../../utils/LoadAndRefresh';

const ButtonGroup = Button.Group;
class Module extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  createNode = (node, _list) => {
    const children = _list.filter((item) => {
      return node.ID === item.PID === true;
    });
    if (children.length === 0) {
      return {
        id: node.ID,
        key: node.ID,
        num: node.ID,
        softwareName: node.NAME,
        creator: node.CREATE_NAME,
        time: node.CREATE_DATE,
        state: node.STATUS,
      };
    }
    const temp = children.map((item) => {
      return this.createNode(item, _list);
    });
    return {
      id: node.ID,
      key: node.ID,
      num: node.ID,
      softwareName: node.NAME,
      creator: node.CREATE_NAME,
      time: node.CREATE_DATE,
      state: node.STATUS,
      children: temp,
    };
  }
  handleData = (data) => {
    const nodes = Array.isArray(data) ? data.filter((item) => {
      return item.PID === 0;
    }) : [];
    const DataToArr = nodes.map((node) => {
      const tempData = this.createNode(node, data);
      return tempData;
    });
    return DataToArr;
  }
  render() {
    const dataSource = this.handleData(this.props.res.data);
    const columns = [{
      title: '编号',
      dataIndex: 'num',
      key: 'num',
    }, {
      title: '谱系名称',
      dataIndex: 'softwareName',
      key: 'softwareName',
    }, {
      title: '创建人',
      dataIndex: 'creator',
      key: 'creator',
    }, {
      title: '创建时间',
      dataIndex: 'time',
      key: 'time',
      render: (text) => {
        const time = moment(text).format('YYYY-MM-DD hh:mm');
        return time;
      },
    }, {
      title: '状态',
      dataIndex: 'state',
      key: 'state',
      render: (text) => {
        if (text === 0) {
          return <span>已激活</span>;
        }
        return <span>未激活</span>;
      },
    }, {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: (text, row) => (
        <span>
          <Link to={`/main/SoftwareInfo/ModuleDetail/${row.id}`}>详情</Link>
        </span>
      ),
    }];
  // rowSelection objects indicates the need for row selection
    // const rowSelection = {
    //   onChange: (selectedRowKeys, selectedRows) => {
    //     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    //   },
    //   onSelect: (record, selected, selectedRows) => {
    //     console.log(record, selected, selectedRows);
    //   },
    //   onSelectAll: (selected, selectedRows, changeRows) => {
    //     console.log(selected, selectedRows, changeRows);
    //   },
    // };
    return (
      <div>
        <div>
          <ButtonGroup style={{ marginBottom: 10 }}>
            <Button icon="reload" style={{ width: 110, height: 40, fontSize: 14 }}>刷新</Button>
            <Link to="/main/SoftwareInfo/ModuleDetailAdd">
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
          columns={columns}
          dataSource={dataSource}
          pagination={{ pageSize: 10 }}
          bordered
          defaultExpandAllRows
        />
      </div>
    );
  }
}
Module.propTypes = {
  res: PropTypes.object.isRequired,
};
const WrapModule = LoadAndRefresh('/api/basic-module/modules')(Module);
export default WrapModule;
