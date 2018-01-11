/* eslint-disable */
import React from 'react';
import { Button, Col, Popconfirm, Row, Table } from 'antd';
import moment from 'moment';
import { browserHistory, Link } from 'react-router';

class PlanList extends React.Component {
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
        render: (text, row) => (<Link to={`/main/SoftwareDeployment/Scheme/View/${row.id}`}>{text}</Link>),
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
          <a onClick={() => console.log('organization_id', row.organization_id)}>{text}</a>
        ),
      },
      {
        title: '创建人',
        dataIndex: 'create_user_name',
        key: 'create_user_name',
        render: (text, row) => (
          <a onClick={() => console.log('create_user_id', row.create_user_id)}>{text}</a>
        ),
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
        render: (text) => {
          const statesMap = {
            0: '待生成任务',
            1: '已生成任务',
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
            <Link
              style={{ marginRight: 25 }}
              to={`/main/SoftwareDeployment/Scheme/View/${row.id}`}
            >方案详情</Link>
            {row.state === 0 &&
            <Popconfirm
              title="确定要生成任务吗？"
              okText="生成"
              cancelText="取消"
              onConfirm={() => publish(row.id)}
            >
              <button className="tableCellAction">生成任务</button>
            </Popconfirm>
            }
          </span>
        ),
      },
    ];
    return (
      <Row>
        <Col span={24}>
          <Button
            style={{ marginBottom: 8 }}
            type="primary"
            onClick={() => browserHistory.push('/main/SoftwareDeployment/Scheme/New')}
          >新建方案</Button>
          <Table columns={columns} dataSource={schemeList} bordered rowKey="id" />
        </Col>
      </Row>
    );
  }
}


PlanList.propTypes = {
  publish: React.PropTypes.func,
  schemeList: React.PropTypes.array,
};
export default PlanList;
