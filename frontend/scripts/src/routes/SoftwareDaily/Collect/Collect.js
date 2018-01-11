import React from 'react';
import { Link } from 'react-router';
import { Button, Table } from 'antd';
import InputSearch from './../../utils/InputSearch';

const ButtonGroup = Button.Group;
class Collect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [{
        key: '1',
        number: 'CL-20170427-0001',
        name: '远程目标判断软件',
        time: '2017/5/18 20:39',
        content: 'XX软件故障汇总',
        status: '已处理',
        operate: '详情',
      }, {
        key: '2',
        number: 'CL-20170427-0001',
        name: '远程目标判断软件',
        time: '2017/5/18 20:39',
        content: 'XX软件故障汇总',
        status: '已处理',
        operate: '详情',
      }, {
        key: '3',
        number: 'CL-20170427-0001',
        name: '远程目标判断软件',
        time: '2017/5/18 20:39',
        content: 'XX软件故障汇总',
        status: '已处理',
        operate: '详情',
      }, {
        key: '4',
        number: 'CL-20170427-0001',
        name: '远程目标判断软件',
        time: '2017/5/18 20:39',
        content: 'XX软件故障汇总',
        status: '已处理',
        operate: '详情',
      }, {
        key: '5',
        number: 'CL-20170427-0001',
        name: '远程目标判断软件',
        time: '2017/5/18 20:39',
        content: 'XX软件故障汇总',
        status: '已处理',
        operate: '详情',
      }, {
        key: '6',
        number: 'CL-20170427-0001',
        name: '远程目标判断软件',
        time: '2017/5/18 20:39',
        content: 'XX软件故障汇总',
        status: '已处理',
        operate: '详情',
      }, {
        key: '7',
        number: 'CL-20170427-0001',
        name: '远程目标判断软件',
        time: '2017/5/18 20:39',
        content: 'XX软件故障汇总',
        status: '已处理',
        operate: '详情',
      }, {
        key: '8',
        number: 'CL-20170427-0001',
        name: '远程目标判断软件',
        time: '2017/5/18 20:39',
        content: 'XX软件故障汇总',
        status: '已处理',
        operate: '详情',
      }, {
        key: '9',
        number: 'CL-20170427-0001',
        name: '远程目标判断软件',
        time: '2017/5/18 20:39',
        content: 'XX软件故障汇总',
        status: '已处理',
        operate: '详情',
      }],
    };
  }
  render() {
    const columns = [{
      title: '汇总编号',
      dataIndex: 'number',
    }, {
      title: '软件名称',
      dataIndex: 'name',
    }, {
      title: '内容',
      dataIndex: 'content',
    }, {
      title: '汇总时间',
      dataIndex: 'time',
    }, {
      title: '状态',
      dataIndex: 'status',
    }, {
      title: '操作',
      dataIndex: 'operate',
      render: (text, row) => <Link to={`/main/SoftwareDaily/CollectDetail/${row.key}`}>{text}</Link>,
    }];
    return (
      <div>
        <div style={{ overflow: 'auto', marginBottom: 10 }}>
          <ButtonGroup style={{ float: 'left' }}>
            <Button icon="reload" style={{ width: 110, height: 40, fontSize: 14 }}>刷新</Button>
            <Link style={{ color: '#595959' }} to="/main/SoftwareDaily/CollectNew">
              <Button icon="file-add" style={{ width: 110, height: 40, fontSize: 14, borderRadius: 0 }}>汇总</Button>
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
          dataSource={this.state.dataSource}
        />
      </div>
    );
  }
}
export default Collect;
