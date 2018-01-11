import React, { Component, PropTypes } from 'react';
import { Button, Col, Row, Table } from 'antd';
import { browserHistory } from 'react-router';
import Data from './Data/TaskList';
import TaskStatistics from './Showing/TaskStatistics';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schemeList: [],
    };
  }

  componentWillMount = () => {
    if (this.props.params.scheme_id) {
      this.props.getScheme(this.props.params.scheme_id, (err, schemeList) => {
        this.setState({ schemeList });
      });
    }
  };

  render() {
    const {
      // 处理好的方案数据
      schemeList = [],
    } = this.state;
    // eslint-disable-next-line
    const scheme_id = this.props.params.scheme_id;
    // scheme.item 数据样例
    // category:"054a"
    // jsonId:9
    // modules:Array[2]
    // organizationId:57
    // organizationName:"57船"
    // softwarePosition:"驱动设备"
    // softwareType:"船"

    const columns = [
      {
        title: '任务安装软件',
        dataIndex: 'softwareName',
        key: 'softwareName',
        render: (text, row) => (
          // 改为 链接到软件详情的页面
          <a
            href={`/main/SoftwareDeployment/Scheme/View/${row.softwareId}`}
          >{text}</a>
        ),
      },
      {
        title: '软件类型',
        dataIndex: 'softwareType',
        key: 'softwareType',
      },
      {
        title: '安装位置',
        dataIndex: 'softwarePosition',
        key: 'softwarePosition',
      },
      {
        title: '安装单位',
        dataIndex: 'useOrgName',
        key: 'useOrgName',
        render: (text, row) => (
          // 改为 链接到单位详情的页面
          <button
            className="tableCellAction"
            onClick={() => {
              window.open(`/main/SystemSetting/Organization/View/${row.useOrgId}`);
            }}
          >{text}</button>
        ),
      },
      {
        title: '日常管理部门',
        dataIndex: 'manageOrgName',
        key: 'manageOrgName',
        render: (text, row) => (
          // 改为 链接到单位详情的页面
          <button
            className="tableCellAction"
            onClick={() => {
              window.open(`/main/SystemSetting/Organization/View/${row.manageOrgId}`);
            }}
          >{text}</button>
        ),
      },
      {
        title: '代表室',
        dataIndex: 'deputyOrgname',
        key: 'deputyOrgname',
        render: (text, row) => (
          // 改为 链接到单位详情的页面
          <button
            className="tableCellAction"
            onClick={() => {
              window.open(`/main/SystemSetting/Organization/View/${row.deputyOrgId}`);
            }}
          >{text}</button>
        ),
      },
      {
        title: '计划安装时间',
        dataIndex: 'planDate',
        key: 'planDate',
        render: (text, row) => (
          // 改为 链接到单位详情的页面
          <button
            className="tableCellAction"
            onClick={() => {
              window.open(`/main/SoftwareDeployment/Scheme/View/${row.organizationId}`);
            }}
          >{text}</button>
        ),
      },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text, row) => (
          <span>
            <button
              className="tableCellAction"
              onClick={() => {
                browserHistory.push(
                  // eslint-disable-next-line
                  `/main/SoftwareDeployment/AssignTasks/TaskEdit/${scheme_id}/${row.Id}`,
                );
              }}
            >编辑</button>
            <button
              className="tableCellAction"
              onClick={() => {
                browserHistory.push(
                  // eslint-disable-next-line
                  `/main/SoftwareDeployment/AssignTasks/TaskView/${scheme_id}/${row.Id}`,
                );
              }}
            >详情</button>
          </span>
        ),
      },
    ];
    return (
      <Row>
        <Col span={24}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              style={{ marginBottom: 8 }}
              onClick={() => {
                browserHistory.push(`/main/SoftwareDeployment/Scheme/View/${
                  this.props.params.scheme_id
                  }`);
              }}
            >查看原方案</Button>
            <Button
              style={{ marginBottom: 8 }}
              onClick={() => {
                browserHistory.push(`/main/SoftwareDeployment/AssignTasks/TaskEdit/${
                  this.props.params.scheme_id
                  }/New`);
              }}
            >新建任务</Button>
          </div>
          <h2 style={{ margin: '20px' }}>统计信息</h2>
          <TaskStatistics />
          <h2 style={{ margin: '20px' }}>任务列表</h2>
          <Table columns={columns} dataSource={schemeList} bordered rowKey="id" />
        </Col>
      </Row>
    );
  }
}


TaskList.propTypes = {
  params: PropTypes.object,
  getScheme: PropTypes.func,
};
const AssignListData = props => (<Data><TaskList {...props} /></Data>);
export default AssignListData;
