import React, { PropTypes } from 'react';
import { Table, Button, Input } from 'antd';

const ButtonGroup = Button.Group;
const Search = Input.Search;
class UndoTask extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.location);
    const { location } = this.props;
    let current;
    if (location && location.query) {
      current = location.query.value;
    } else {
      current = '';
    }
    this.state = {
      current,
      name: '',
      data: [{
        key: '1',
        type: '软件入库',
        content: '单号：KB-20170426-0002,待您出库软件',
        operator: '张三',
        time: '2017/5/18 20:39',
        status: '待审核',
        detail: '详情',
      }, {
        key: '2',
        type: '软件入库',
        content: '单号：KB-20170426-0002,待您出库软件',
        operator: '张三',
        time: '2017/5/18 20:39',
        status: '待入库',
        detail: '详情',
      }, {
        key: '3',
        type: '软件入库',
        content: '单号：KB-20170426-0002,待您出库软件',
        operator: '张三',
        time: '2017/5/18 20:39',
        status: '申请驳回',
        detail: '详情',
      }, {
        key: '4',
        type: '软件入库',
        content: '单号：KB-20170426-0002,待您出库软件',
        operator: '张三',
        time: '2017/5/18 20:39',
        status: '待审核',
        detail: '详情',
      }, {
        key: '5',
        type: '软件入库',
        content: '单号：KB-20170426-0002,待您出库软件',
        operator: '张三',
        time: '2017/5/18 20:39',
        status: '待入库',
        detail: '详情',
      }, {
        key: '6',
        type: '软件入库',
        content: '单号：KB-20170426-0002,待您出库软件',
        operator: '张三',
        time: '2017/5/18 20:39',
        status: '待入库',
        detail: '详情',
      }, {
        key: '7',
        type: '软件入库',
        content: '单号：KB-20170426-0002,待您出库软件',
        operator: '张三',
        time: '2017/5/18 20:39',
        status: '待审核',
        detail: '详情',
      }, {
        key: '8',
        type: '软件入库',
        content: '单号：KB-20170426-0002,待您出库软件',
        operator: '张三',
        time: '2017/5/18 20:39',
        status: '待审核',
        detail: '详情',
      }, {
        key: '9',
        type: '软件入库',
        content: '单号：KB-20170426-0002,待您出库软件',
        operator: '张三',
        time: '2017/5/18 20:39',
        status: '待审核',
        detail: '详情',
      }, {
        key: '10',
        type: '软件入库',
        content: '单号：KB-20170426-0002,待您出库软件',
        operator: '张三',
        time: '2017/5/18 20:39',
        status: '待审核',
        detail: '详情',
      }, {
        key: '11',
        type: '软件入库',
        content: '单号：KB-20170426-0002,待您出库软件',
        operator: '张三',
        time: '2017/5/18 20:39',
        status: '待审核',
        detail: '详情',
      }, {
        key: '12',
        type: '软件入库',
        content: '单号：KB-20170426-0002,待您出库软件',
        operator: '张三',
        time: '2017/5/18 20:39',
        status: '待审核',
        detail: '详情',
      }],
    };
  }
  componentDidMount() {
    if (this.state.current === 'underCheck') {
      this.changeContent();
    }
  }
  changeContent = () => {
    const underCheckData = this.state.data.filter((item) => {
      return item.status === '待审核';
    });
    this.setState({ data: underCheckData, name: '待审核' });
  }
  render() {
    const Btns = (
      <div>
        <ButtonGroup style={{ marginBottom: 10 }}>
          <Button icon="reload" style={{ width: 110, height: 40, fontSize: 14 }}>刷新</Button>
          <Button icon="delete" style={{ width: 110, height: 40, fontSize: 14 }}>删除</Button>
        </ButtonGroup>
        <Search value={this.state.name} style={{ width: 256, height: 40, float: 'right' }} />
      </div>
   );
    const columns = [{
      title: '类型',
      dataIndex: 'type',
    }, {
      title: '内容',
      dataIndex: 'content',
    }, {
      title: '来源',
      dataIndex: 'operator',
    }, {
      title: '状态',
      dataIndex: 'status',
    }, {
      title: '详情',
      dataIndex: 'detail',
      render: text => <a>{text}</a>,
    }, {
      title: '时间',
      dataIndex: 'time',
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
        {Btns}
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.state.data}
          pagination={{ pageSize: 10 }}
        />
      </div>
    );
  }
}
UndoTask.propTypes = {
  location: PropTypes.object,
};
export default UndoTask;
