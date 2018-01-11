import React, { Component, PropTypes } from 'react';
import { Col, Row, Table } from 'antd';
import Data from './Data/TaskData';

class TaskView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { defaultValue } = this.props;
    const dataSource = [{
      name: '任务安装软件', title: defaultValue.softwareName,
    }, {
      name: '软件类型', title: defaultValue.softwareType,
    }, {
      name: '安装位置', title: defaultValue.softwarePosition,
    }, {
      name: '安装单位', title: defaultValue.useOrgName,
    }, {
      name: '日常管理部门', title: defaultValue.manageOrgName,
    }, {
      name: '代表室', title: defaultValue.deputyOrgname,
    }, {
      name: '安装时间', title: defaultValue.planDate,
    }];

    const columns = [
      {
        dataIndex: 'name',
        key: 'name',
      }, {
        dataIndex: 'title',
        key: 'title',
      },

    ];
    return (
      <Row>
        <Col offset={4} span={16}>
          <Table
            columns={columns}
            title={() => {
              return '任务细节';
            }}
            showHeader={false}
            dataSource={dataSource}
            bordered
            rowKey="name"
            pagination={false}
          />
        </Col>
      </Row>
    );
  }
}


TaskView.propTypes = {
  defaultValue: PropTypes.string.isRequired,
};


const App = props => (<Data {...props}><TaskView {...props} /></Data>);
export default App;
