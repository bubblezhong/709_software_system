import React, { PropTypes } from 'react';
import { Col, Modal, Row, Table } from 'antd';
import Data from './../Data/ModalRequest';
import RequestDetial from './RequestDetial';

class ModalRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // orgSelectList: [],
      loading: true,
      detial: {},     // 被选中进行展示详细信息的申请
      dataList: [],   // 请求信息列表
      selectList: [], // 关联列表
    };
  }

  // 获取初始值
  componentWillReceiveProps = (nextProps) => {
    console.log('nextProps', nextProps);
    this.setState({
      dataList: nextProps.data,
      selectList: nextProps.defaultValue.value ? nextProps.defaultValue.value : [],
      loading: false,
    });
  };

  showDetial = (row) => {
    const { data } = this.props;     // 所有 已审核的 请求
    const temp = data.find(item => (item.id === row.id));
    this.setState({ detial: temp });
  };

  addItem = (row) => {
    const selectList = this.state.selectList;
    selectList.push(row);
    this.setState({ selectList });
  };

  deleteItem = (index) => {
    const selectList = this.state.selectList;
    selectList.splice(index, 1);
    this.setState({ selectList });
  };

  render() {
    const {
      // data,     // 所有 已审核的 请求
      visible,  // 控制是否开启
      title,    // 弹框标题
      onOk,     // 确认成功 执行
      onCancel, // 取消 执行
    } = this.props;
    const {
      // indexList,
      detial,
      dataList,
      selectList = [],
    } = this.state;
    const columns = [
      {
        title: '申请标题',
        dataIndex: 'request_title',
        key: 'request_title',
      },
      {
        title: '申请软件',
        dataIndex: 'software_name',
        key: 'software_name',
        render: (text) => {
          return (<a>{text}</a>);
        },
      },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (value, row) => {
          return (
            <span>
              <button
                className="tableCellAction"
                onClick={() => {
                  this.showDetial(row);
                }}
              >
                详情
              </button>
              <button
                className="tableCellAction"
                onClick={() => {
                  this.addItem(row);
                }}
              >
                关联
              </button>
            </span>
          );
        },
      },
    ];
    const columnsCheck = [
      {
        title: '申请标题',
        dataIndex: 'request_title',
        key: 'request_title',
      },
      {
        title: '申请软件',
        dataIndex: 'software_name',
        key: 'software_name',
        render: (text) => {
          return (<a>{text}</a>);
        },
      },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (value, row, index) => {
          return (
            <span>
              <button
                className="tableCellAction"
                onClick={() => {
                  this.showDetial(row);
                }}
              >
                详情
              </button>

              <button
                className="tableCellAction"
                onClick={() => {
                  this.deleteItem(index);
                }}
              >
                取消关联
              </button>
            </span>
          );
        },
      },
    ];
    console.log('dataList', dataList);
    console.log('selectList', selectList);
    const dataFiltered = dataList.filter((item) => {
      if (selectList.length > 0) {
        const check = selectList.every(iteme => (iteme.id !== item.id));
        return check;
      }
      return true;
    });
    // console.log('open', data);
    return (
      <Modal
        visible={visible}
        title={title}
        width={'90%'}
        okText="确认"
        onCancel={() => {
          onCancel();
          this.setState({ selectList: [], loading: true });
        }}
        onOk={() => {
          onOk(selectList);
          this.setState({ selectList: [], loading: true });
        }}
      >
        <Row>
          <Col span="6" offset="1">
            已审核相关请求列表:
            <Table
              columns={columns}
              dataSource={dataFiltered}
              bordered
              size="small"
              rowKey="id"
            />
          </Col>
          <Col span="6" offset="2">
            详情:
            <RequestDetial values={detial} />
          </Col>
          <Col span="6" offset="2">
            选中请求列表:
            <Table
              columns={columnsCheck}
              dataSource={selectList}
              bordered
              size="small"
              rowKey="id"
            />
          </Col>
        </Row>
      </Modal>
    );
  }
}

ModalRequest.propTypes = {
  data: PropTypes.array,
  visible: PropTypes.bool,
  title: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
};

const ModalRequestWithData = props =>
  (<Data><ModalRequest {...props} /></Data>);
export default ModalRequestWithData;
