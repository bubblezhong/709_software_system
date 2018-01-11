import React, { Component, PropTypes } from 'react';
import { Button, Col, Row, Table } from 'antd';
import { browserHistory } from 'react-router';
import Data from '../Data/TaskData';

class PlanView extends Component {
  state = {
    searchValue: '',
    search_targe: [],
  };

  render() {
    const { defaultValue, params } = this.props;
    switch (defaultValue.status) {
      case 0:
        defaultValue.status = '已保存';
        break;
      case 1:
        defaultValue.status = '已生成任务';
        break;
      case 2:
        defaultValue.status = '任务已下发';
        break;
      default:
    }
    const data = [{
      value: '申请标题',
      label: defaultValue.title,
    }, {
      value: '申请软件',
      label: defaultValue.software,
    }, {
      value: '创建日期',
      label: defaultValue.create_time,
    }, {
      value: '申请描述',
      label: defaultValue.description,
    }, {
      value: '申请状态',
      label: defaultValue.status,
    }];
    const columns = [
      {
        title: '属性',
        dataIndex: 'value',
        key: 'value',
        width: '30%',
        render: (text) => {
          return (
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <span>{text}</span>
            </div>
          );
        },
      },
      {
        title: '值',
        dataIndex: 'label',
        key: 'label',
        render: (text) => {
          return (
            <span>{text}</span>
          );
        },
      },
    ];
    return (
      <div>
        <Button
          onClick={() => {
            browserHistory.push(`/main/TechnicalSupport/SupportTasks/${params.id}/Tasks`);
          }
          }
        >返回列表</Button>
        <Row>
          <Col offset="4" span="12">
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              bordered showHeader={false}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

PlanView.propTypes = {
  // dictionary: PropTypes.object,
  // authority: PropTypes.object,
  // data: PropTypes.array,
  defaultValue: PropTypes.string,
  params: PropTypes.object,
  // tableData: PropTypes.array,
};


const PlanViewWithData = props => (<Data {...props}><PlanView {...props} /></Data>);
export default PlanViewWithData;
