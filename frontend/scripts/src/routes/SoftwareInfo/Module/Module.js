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
      data: [{
        key: 1,
        num: '1',
        softname: '远程目标判断软件',
        creator: '张三',
        time: '2017-4-26 16:48',
        state: '未激活',
        children: [{
          key: 11,
          num: '11',
          softname: '远程目标判断软件',
          creator: '张三',
          time: '2017-4-26 16:48',
          state: '未激活',
        }, {
          key: 12,
          num: '12',
          softname: '远程目标判断软件',
          creator: '张三',
          time: '2017-4-26 16:48',
          state: '未激活',
          children: [{
            key: 121,
            num: '121',
            softname: '远程目标判断软件',
            creator: '张三',
            time: '2017-4-26 16:48',
            state: '未激活',
          }],
        }, {
          key: 13,
          num: '13',
          softname: '远程目标判断软件',
          creator: '张三',
          time: '2017-4-26 16:48',
          state: '未激活',
          children: [{
            key: 131,
            num: '131',
            softname: '远程目标判断软件',
            creator: '张三',
            time: '2017-4-26 16:48',
            state: '未激活',
            children: [{
              key: 1311,
              num: '1311',
              softname: '远程目标判断软件',
              creator: '张三',
              time: '2017-4-26 16:48',
              state: '未激活',
            }, {
              key: 1312,
              num: '1312',
              softname: '远程目标判断软件',
              creator: '张三',
              time: '2017-4-26 16:48',
              state: '未激活',
            }],
          }],
        }],
      }, {
        key: 2,
        num: '2',
        softname: '远程目标判断软件',
        creator: '张三',
        time: '2017-4-26 16:48',
        state: '未激活',
      }],
    };
  }
  componentDidMount() {
    this.props.sendData(this.handleData);
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
      num: node.ID,
      softwareName: node.NAME,
      creator: node.CREATE_NAME,
      time: node.CREATE_DATE,
      state: node.STATUS,
      children: temp,
    };
  }
  handleData = (res) => {
    console.log('resp', res);
    // const fatherKey = '';
    // const DataToArr = [];
    // const tempData = this.createNode(res.data[0], res.data);
    // console.log('tempData', tempData);
    // DataToArr.push(tempData);
    // const keyData = this.setKey(DataToArr, fatherKey);
    // console.log('keyData', keyData);
    // this.setState({ data: keyData });

    const fatherKey = '';
    // const DataToArr = [];
    // console.log(data);
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
          dataSource={this.state.data}
          pagination={{ pageSize: 10 }}
          bordered
          defaultExpandAllRows
        />
      </div>
    );
  }
}
Module.propTypes = {
  sendData: PropTypes.func.isRequired,
};
const WrapModule = LoadAndRefresh('/api/basic-module/modules')(Module);
export default WrapModule;
// export default Module;
