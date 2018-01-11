import React from 'react';
import { Link } from 'react-router';
import { Table, Button } from 'antd';
import InputSearch from './../../utils/InputSearch';
import LoadAndRefresh from './../../utils/LoadAndRefresh';

const ButtonGroup = Button.Group;

class OrganizationStructure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentWillReceiveProps(nextProps) {
    // console.log('nextProps', nextProps);
    this.handleData(nextProps.res);
  }
  // componentWillMount() {
  //   this.props.sendData((res) => { this.handleData(res); });
  //   console.log('resp118');
  // }
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
        name: node.SU_NAME,
        num: node.SU_CODE,
        unitType: node.SU_TYPE,
        personInCharge: node.MANAGER_NAME,
        SuperiorID: node.PID,
        sort: node.NUM,
      };
    }
    const temp = children.map((item) => {
      return this.createNode(item, _list);
    });
    return {
      id: node.ID,
      name: node.SU_NAME,
      num: node.SU_CODE,
      unitType: node.SU_TYPE,
      personInCharge: node.MANAGER_NAME,
      SuperiorID: node.PID,
      sort: node.NUM,
      children: temp,
    };
  }
  handleData = (res) => {
    console.log('respp', res);
    const fatherKey = '';
    const nodes = res.data.filter((item) => {
      return item.PID === 0;
    });
    const DataToArr = nodes.map((node) => {
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
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '编号',
      dataIndex: 'num',
      key: 'num',
    }, {
      title: '单位类型',
      dataIndex: 'unitType',
      key: 'unitType',
    }, {
      title: '负责人',
      dataIndex: 'personInCharge',
      key: 'personInCharge',
    }, {
      title: '上级ID',
      dataIndex: 'SuperiorID',
      key: 'unitname',
    }, {
      title: '排序号',
      dataIndex: 'sort',
      key: 'sort',
    }, {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: (text, row) => (
        <span>
          <Link to={`/main/SystemSetting/OrganizationStructureDetail/${row.id}`}>详情</Link>
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
            <Link to="/main/SystemSetting/OrganizationStructureNew">
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

// OrganizationStructure.propTypes = {
//   sendData: PropTypes.func.isRequired,
// };
const WrapOrganizationStructure = LoadAndRefresh('/api/basic-unit/units')(OrganizationStructure);
// export default WrapCategory;
export default WrapOrganizationStructure;
