import { Table } from 'antd';
import React from 'react';
import './Query.css';

class UpgradePerfect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { key: 1, software: '应用软件A', num: 45000, rate: '0.85' },
        { key: 2, software: '应用软件B', num: 25000, rate: '0.15' },
        { key: 3, software: '应用软件C', num: 15000, rate: '0.35' },
        { key: 4, software: '应用软件D', num: 35000, rate: '0.25' },
        { key: 5, software: '应用软件E', num: 12000, rate: '0.20' },
      ],
    };
  }
  render() {
    const columns = [{
      title: '软件',
      dataIndex: 'software',
    }, {
      title: '申请数量',
      dataIndex: 'num',
    }, {
      title: '占比',
      dataIndex: 'rate',
      render: (text) => {
        const wid = `${text * 60}px`;
        const value = text * 100;
        const lastval = `${value}%`;
        return (
          <span>
            <span>{lastval}</span>
            <span className="query_rate" style={{ width: wid }} />
          </span>
        );
      },
    }];
    return (
      <div className="upgradePerfect">
        <h2>升级完善软件</h2>
        <div style={{ marginTop: 82 }}>
          <Table
            className="static"
            columns={columns}
            dataSource={this.state.data}
            pagination={{ pageSize: 10 }}
            size="small"
            bordered={false}
          />
        </div>
      </div>
    );
  }
}

export default UpgradePerfect;
