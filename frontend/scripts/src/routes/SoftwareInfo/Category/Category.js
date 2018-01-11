import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { Table, Button } from 'antd';
import moment from 'moment';
// import CategoryAddChild from './CategoryAddChild';
import InputSearch from './../../utils/InputSearch';
import LoadAndRefresh from './../../utils/LoadAndRefresh';
// import ListToTree from './../../utils/ListToTree';

const ButtonGroup = Button.Group;
class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addChild: false,
      data: [],
    };
  }
  componentWillMount() {
    this.props.sendData(this.handleData);
    console.log('resp118');
  }
  setKey = (dataNow, fatherKey) => {
    // console.log('dataNow', dataNow);
    for (let ii = 0; ii < dataNow.length; ii++) {
      dataNow[ii].key = fatherKey + ii;
      // console.log(dataNow[ii].key);
      if (dataNow[ii].children) {
        this.setKey(dataNow[ii].children, dataNow[ii].key);
      } else if (!dataNow[ii].children) {
        dataNow[ii].key = fatherKey + ii;
      }
    }
    return dataNow;
  }
  createNode = (node, _list) => {
    // const id = node.id;
    const children = _list.filter((item) => {
      // console.log(node.ID, item.PID);
      return node.ID === item.PID === true;
    });
    // console.log('children', children);
    if (children.length === 0) {
      return {
        id: node.ID,
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
  handleData = (res) => {
    console.log('resp', res);
    const fatherKey = '';
    const nodes = res.data.filter((item) => {
      // console.log(item.PID)
      return item.PID === 0;
    });
    // console.log(P_nodes)
    const DataToArr = nodes.map((node) => {
      // console.log(node);
      const tempData = this.createNode(node, res.data);
      console.log('tempData', tempData);
      return tempData;
    });
    console.log(DataToArr);
    const keyData = this.setKey(DataToArr, fatherKey);
    console.log('keyData', keyData);
    this.setState({ data: keyData });
  }
  render() {
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
          dataSource={this.state.data}
          pagination={{ pageSize: 10 }}
          bordered
        />
      </div>
    );
  }
}
Category.propTypes = {
  sendData: PropTypes.func.isRequired,
};
const WrapCategory = LoadAndRefresh('/api/basic-category/categories')(Category);
export default WrapCategory;
// export default Category;
