import React, { Component, PropTypes } from 'react';
import { Button, Checkbox, Col, Input, Row, Table } from 'antd';
import { browserHistory } from 'react-router';
import Data from './Data/PlanList';
import filterData from './../../Common/filterData'; // 筛选

const CheckboxGroup = Checkbox.Group;

const checkboxOption = [
  { label: '任务标题', value: 'title' },
  { label: '任务软件', value: 'software' },
  { label: '任务时间', value: 'create_time' },
  { label: '任务描述', value: 'description' },
];

class TasksList extends Component {
  state = {
    searchValue: '',
    search_targe: [],
  };

  render() {
    const { data, params } = this.props;
    const { search_targe, searchValue } = this.state;
    const columns = [
      {
        title: '任务标题',
        dataIndex: 'title',
      },
      {
        title: '任务软件',
        dataIndex: 'software',
      },
      {
        title: '任务时间',
        dataIndex: 'create_time',
      },
      {
        title: '任务描述',
        dataIndex: 'description',
      },
      {
        title: '任务状态',
        dataIndex: 'status',
        render: (text) => {
          let buttons = null;
          switch (parseInt(text, 10)) {
            case 0:
              buttons = (<a>已保存</a>);
              break;
            case 1:
              buttons = (<a>已生成任务</a>);
              break;
            case 2:
              buttons = (<a>任务已下发</a>);
              break;
            // case 3:
            //   buttons = (<a>已安排保障任务</a>);
            //   break;
            default:
              buttons = null;
          }
          return buttons;
        },
      },
      {
        title: '操作',
        dataIndex: 'action',
        render: (text, row) => {
          const { id } = this.props.params;
          return (
            <span>
              <button
                className="tableCellAction"
                onClick={() => {
                  browserHistory.push(
                    `/main/TechnicalSupport/SupportTasks/${id}/Tasks/${row.id}/Edit`,
                  );
                }}
              >修改</button>
              <button
                className="tableCellAction"
                onClick={() => {
                  browserHistory.push(
                    `/main/TechnicalSupport/SupportTasks/${id}/Tasks/${row.id}/View`,
                  );
                }}
              >查看任务</button>
              <button
                className="tableCellAction"
                onClick={() => {
                  window.open(
                    `/main/TechnicalSupport/SupportPlan/PlanView/${row.id}`,
                  );
                }}
              >查看原方案</button>
            </span>
          );
        },
      },
    ];
    // 处理数据筛选
    const dataFiltered = filterData(data, searchValue, search_targe);
    return (
      <Row>
        <Col span="24">
          <div style={{ display: 'flex', marginBottom: 8 }}>
            <Input.Search
              placeholder="搜索"
              onSearch={(value) => {
                this.setState({ searchValue: value });
              }}
            />
            <Button
              style={{ marginLeft: 8 }}
              type="primary"
              onClick={() => {
                browserHistory.push(`/main/TechnicalSupport/SupportTasks/${params.id}/Tasks/New/Edit`);
              }}
            >新建任务</Button>
          </div>
          <span style={{ display: 'flex', marginBottom: 8, marginTop: 8 }}>
            <span>搜索范围: &nbsp;&nbsp;</span>
            <CheckboxGroup
              options={checkboxOption}
              onChange={checkedValues => this.setState({ search_targe: checkedValues })}
            />
          </span>

          <Table
            columns={columns}
            dataSource={dataFiltered}
            bordered rowKey="id"
          />
        </Col>
      </Row>
    );
  }
}

TasksList.propTypes = {
  // dictionary: PropTypes.object,
  // authority: PropTypes.object,
  params: PropTypes.object,
  data: PropTypes.array,
};

const PlanListWithData = props => (<Data {...props}><TasksList {...props} /></Data>);
export default PlanListWithData;
