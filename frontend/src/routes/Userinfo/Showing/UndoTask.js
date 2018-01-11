import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import { Table, Button, Input } from 'antd';
import GetDetailInfo from './../../utils/GetDetailInfo';

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
      data: [],
    };
  }
  componentDidMount() {
    console.log('this.context.user.ID', this.context.user.ID);
    this.props.sendInfo(this.context.user.ID, (res) => { this.handleData(res); });
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
  handleData = (res) => {
    console.log('reslist', res);
    const tempData = res.data.map((item) => {
      return {
        type: '软件入库',
        key: item.processId,
        content: item.history.processStatus,
        source: item.history.applicantInfo.applicantName,
        status: item.taskName,
        time: item.history.applicantInfo.date,
      };
    });
    this.setState({ data: tempData });
  }
  render() {
    const Btns = (
      <div>
        <ButtonGroup style={{ marginBottom: 10 }}>
          <Button icon="reload" style={{ width: 110, height: 40, fontSize: 14 }}>刷新</Button>
          <Button icon="delete" style={{ width: 110, height: 40, fontSize: 14 }}>删除</Button>
        </ButtonGroup>
        <Search
          value={this.state.name}
          style={{ width: 256, height: 40, float: 'right' }}
          onChange={(e) => { this.setState({ name: e.target.value }); }}
        />
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
      dataIndex: 'source',
    }, {
      title: '状态',
      dataIndex: 'status',
    }, {
      title: '时间',
      dataIndex: 'time',
      render: (text) => {
        const time = moment(text).format('YYYY-MM-DD hh:mm');
        return time;
      },
    }, {
      title: '详情',
      dataIndex: 'detail',
      render: (text, row) => {
        if (row.type === '软件退役') {
          return <Link to={`/main/InventoryRegistration/RetireDetail/submit/${row.key}`}>详情</Link>;
        } else if (row.type === '软件入库') {
          return <Link to={`/main/InventoryRegistration/InputDetail/submit/${row.key}`}>详情</Link>;
        }
        return <Link to={`/main/InventoryRegistration/RetireDetail/${row.key}`}>详情</Link>;
      },
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
  sendInfo: PropTypes.func.isRequired,
};
UndoTask.contextTypes = {
  user: PropTypes.object,
};
const WrapUndoTask = GetDetailInfo('/api/workflow/get-my-tasks/')(UndoTask);
export default WrapUndoTask;
