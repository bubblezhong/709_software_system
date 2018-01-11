import React, { Component } from 'react';
import { Table, Button, message } from 'antd';
import moment from 'moment';
import {
  getMessageList,
  readMessage,
} from './../../../Models/Message/Message';
import { dictionaryMessage } from './../../../DataDictionary/index';


class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [],
      loading: false,
      messageList: [], // 消息列表
    };
    this.columns = [{
      title: '消息内容',
      dataIndex: 'CONTENT',
    }, {
      title: '发生时间',
      dataIndex: 'date',
      width: 200,
      sorter: (a, b) => {
        return new Date(a).getTime - new Date(b).getTime();
      },
      render: (text) => {
        return moment(new Date(text)).fromNow();
      },
    }, {
      title: '消息类型',
      dataIndex: 'STATUS',
      width: 150,
      filters: (() => {
        const status = dictionaryMessage.status;
        return Object.keys(status).map((item) => {
          return {
            key: item,
            value: item,
            text: status[item],
          };
        });
      })(),
      onFilter: (value, record) => {
        return record.STATUS.toString() === value;
      },
      render: (text) => {
        return dictionaryMessage.status[text];
      },
    }];
    this.onSelectChange = this.onSelectChange.bind(this);
    this.onReadMessage = this.onReadMessage.bind(this);
    this.handleReadMessage = this.handleReadMessage.bind(this);
  }

  componentWillMount() {
    this.handleGetMessageList();
  }

  onSelectChange(selectedRowKeys) {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }


  onReadMessage() {
    console.log('onReadMessage: ', this.state.selectedRowKeys);
    this.handleReadMessage(this.state.selectedRowKeys);
  }


  /**
   * 将消息置为已读
   * @param {Array} list [1,2,3]
   * @return {Promise.<void>} null
   */
  async handleReadMessage(list) {
    this.setState({
      loading: true,
    });
    try {
      console.log('list: ', list);
      console.log('messageList: ', this.state.messageList);
      const { messageList } = this.state;
      const messagesStr = list.map((item) => {
        return messageList[item].ID;
      }).join(',');
      // console.log('messagesStr: ', messagesStr);
      const { res } = await readMessage(messagesStr);
      if (res.code === 1000) {
        message.success(`成功将${list.length}消息置为已读`, 3);
        this.setState({
          selectedRowKeys: [],
          loading: false,
        }, () => {
          this.handleGetMessageList();
        });
      } else {
        message.error('操作失败，请重试!', 5);
        this.setState({
          loading: false,
        });
      }
    } catch (e) {
      console.log('e: ', e);
      message.error('操作失败，请重试!', 5);
      this.setState({
        loading: false,
      });
    }
  }

  /**
   * 获取消息列表
   * @return {null} null
   */
  async handleGetMessageList() {
    this.setState({ loading: false });
    try {
      const { res } = await getMessageList();
      console.log('res: ', res);
      if (res.code !== 1000) {
        message.error(res.message || '获取消息列表失败', 3);
        this.setState({ loading: false });
        return false;
      }
      this.setState({
        messageList: res.data,
        loading: false,
      });
    } catch (e) {
      console.log(e.message || '');
      message.error(e.message || '获取消息列表失败', 3);
    }
  }


  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    const dataSource = this.state.messageList.map((item, index) => {
      item.key = index;
      return item;
    });
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={this.onReadMessage}
            disabled={!hasSelected}
            loading={loading}
          >
            标记为已读
          </Button>
          <span>
            {hasSelected ? ` 已选中 ${selectedRowKeys.length} 项` : ''}
          </span>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={this.columns}
          dataSource={dataSource}
          pagination={{ pageSize: 15 }}
          scroll={{ y: 370 }}
        />
      </div>
    );
  }
}


export default Message;
