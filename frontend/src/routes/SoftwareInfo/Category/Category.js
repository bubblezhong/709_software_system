import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { Table, Button } from 'antd';
import moment from 'moment';
import InputSearch from './../../utils/InputSearch';
import LoadAndRefresh from './../../utils/LoadAndRefresh';

const ButtonGroup = Button.Group;
class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addChild: false,
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
        code: node.SU_CODE,
        mudule: node.MODULE_TREE,
        softwareName: node.SW_NAME,
        unitName: node.SU_NAME,
        creator: node.DE_NAME,
        CreateTime: node.CREATE_DATE,
        status: node.STATUS,
      };
    }
    const temp = children.map((item) => {
      return this.createNode(item, _list);
    });
    return {
      id: node.ID,
      key: node.ID,
      code: node.SU_CODE,
      mudule: node.MODULE_TREE,
      softwareName: node.SW_NAME,
      unitName: node.SU_NAME,
      creator: node.DE_NAME,
      CreateTime: node.CREATE_DATE,
      status: node.STATUS,
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
    console.log('this.context.user', this.context, this.context.color);
    const dataSource = this.handleData(this.props.res.data);
    const columns = [{
      title: '编号',
      dataIndex: 'code',
      key: 'code',
    }, {
      title: '系谱',
      dataIndex: 'mudule',
      key: 'mudule',
    }, {
      title: '软件名称',
      dataIndex: 'softwareName',
      key: 'softwareName',
    }, {
      title: '软件单元名称',
      dataIndex: 'unitName',
      key: 'unitName',
    }, {
      title: '研制单位',
      dataIndex: 'creator',
      key: 'creator',
    }, {
      title: '创建时间',
      dataIndex: 'CreateTime',
      key: 'CreateTime',
      render: (text) => {
        const time = moment(text).format('YYYY-MM-DD hh:mm');
        return time;
      },
    }, {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (text) => {
        if (text === 1) {
          return <span>已激活</span>;
        }
        return <span>未激活</span>;
      },
    }, {
      title: '新增下级',
      dataIndex: 'addChild',
      key: 'addChild',
      render: (text, row) => (
        <Link to={`/main/SoftwareInfo/CategoryAddChild/${row.id}`} >
          新增下级
        </Link>
      ),
    }, {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: (text, row) => (
        <span>
          <Link to={`/main/SoftwareInfo/CategoryDetail/${row.id}`}>详情</Link>
        </span>
      ),
    }];
  // rowSelection objects indicates the need for row selection
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
      },
    };
    return (
      <div>
        <div>
          <ButtonGroup style={{ marginBottom: 10 }}>
            <Button icon="reload" style={{ width: 110, height: 40, fontSize: 14 }}>刷新</Button>
            <Button icon="file-add" onClick={() => browserHistory.push('/main/SoftwareInfo/CategoryDetailAdd')} style={{ width: 110, height: 40, fontSize: 14 }}>新增</Button>
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
          dataSource={dataSource}
          pagination={{ pageSize: 10 }}
          bordered
        />
      </div>
    );
  }
}
Category.propTypes = {
  res: PropTypes.object.isRequired,
};
Category.contextTypes = {
  color: PropTypes.object,
};
const WrapCategory = LoadAndRefresh('/api/basic-category/categories')(Category);
export default WrapCategory;
