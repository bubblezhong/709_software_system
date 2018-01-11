import React from 'react';
import { Col, Popconfirm, Row, Table } from 'antd';
import moment from 'moment';
import { browserHistory } from 'react-router';
import Data from './Data/AssignList';

class AssignList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      schemeList = [],  // 列表数据
      publish,          // 发布 function
    } = this.props;
    const columns = [
      {
        title: '方案标题',
        dataIndex: 'title',
        key: 'title',
        render: (text, row) => (
          <button
            className="tableCellAction"
            onClick={() => {
              window.open(`/main/SoftwareDeployment/Scheme/View/${row.id}`);
            }}
          >{text}</button>
        ),
      },
      {
        title: '创建时间',
        dataIndex: 'create_date',
        key: 'create_date',
        render: text => moment(text).format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        title: '创建单位',
        dataIndex: 'organization_name',
        key: 'organization_name',
        render: (text, row) => (
          <button
            onClick={() => console.log('organization_id', row.organization_id)}
            className="tableCellAction"
          >{text}</button>
        ),
      },
      {
        title: '创建人',
        dataIndex: 'create_user_name',
        key: 'create_user_name',
        render: (text, row) => (
          <button
            onClick={() => console.log('organization_id', row.create_user_id)}
            className="tableCellAction"
          >{text}</button>
        ),
      }, {
        title: '研制单位',
        dataIndex: 'develop',
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
        render: (text) => {
          console.log('statesMap', text);
          const statesMap = {
            // 0: '待生成任务',
            // 1: '已生成任务',
            // 2: '已发布任务',
            1: '待发布任务',
            2: '已发布任务',
          };
          return statesMap[text];
        },
      },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text, row) => (
          <span>
            <button
              style={{ marginRight: 25 }}
              className="tableCellAction"
              onClick={() => {
                window.open(`/main/SoftwareDeployment/Scheme/View/${row.id}`);
              }}
            >方案详情</button>
            <button
              style={{ marginRight: 25 }}
              className="tableCellAction"
              onClick={() => {
                browserHistory.push(`/main/SoftwareDeployment/AssignTasks/TaskList/${row.id}`);
              }}
            >任务详情</button>
            {row.state === 1 &&
            <Popconfirm
              title="确定发布任务吗？"
              okText="发布"
              cancelText="取消"
              onConfirm={() => publish(row.id)}
            >
              <button className="tableCellAction">下发</button>
            </Popconfirm>
            }
          </span>
        ),
      },
    ];
    return (
      <Row>
        <Col span={24}>
          <Table columns={columns} dataSource={schemeList} bordered rowKey="id" />
        </Col>
      </Row>
    );
  }
}


AssignList.propTypes = {
  publish: React.PropTypes.func,
  schemeList: React.PropTypes.array,
};
const AssignListData = () => (<Data><AssignList /></Data>);
export default AssignListData;
