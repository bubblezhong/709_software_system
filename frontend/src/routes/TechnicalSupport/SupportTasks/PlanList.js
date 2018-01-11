import React, { PropTypes, Component } from 'react';
import { Row, Col, Table, Input, Checkbox } from 'antd';
import { browserHistory } from 'react-router';
import Data from './Data/PlanList';
import filterData from './../../Common/filterData'; // 筛选

const CheckboxGroup = Checkbox.Group;

const checkboxOption = [
  { label: '申请标题', value: 'title' },
  { label: '申请软件', value: 'software' },
  { label: '申请时间', value: 'create_time' },
  { label: '申请描述', value: 'description' },
];

class PlanList extends Component {
  state = {
    searchValue: '',
    search_targe: [],
  };

  render() {
    const { data } = this.props;
    const { search_targe, searchValue } = this.state;
    const columns = [
      {
        title: '申请标题',
        dataIndex: 'title',
        sorter: (a, b) => a.title.length - b.title.length,
      },
      {
        title: '申请软件',
        dataIndex: 'software',
        sorter: (a, b) => a.software.length - b.software.length,
      },
      {
        title: '申请时间',
        dataIndex: 'create_time',
        sorter: (a, b) => a.create_time.length - b.create_time.length,
      },
      {
        title: '申请描述',
        dataIndex: 'description',
        sorter: (a, b) => a.description.length - b.description.length,
      },
      {
        title: '申请状态',
        dataIndex: 'status',
        sorter: (a, b) => a.status - b.status,
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
          return (
            <span>
              <button
                className="tableCellAction"
                onClick={() => {
                  window.open(`/main/TechnicalSupport/SupportPlan/PlanView/${row.id}`);
                }}
              >查看方案</button>
              <button
                className="tableCellAction"
                onClick={() => {
                  browserHistory.push(`/main/TechnicalSupport/SupportTasks/${row.id}/Tasks`);
                }}
              >查看任务</button>
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
          <Input.Search placeholder="搜索" onSearch={(value) => { this.setState({ searchValue: value }); }} />
          <div style={{ display: 'flex', flexDirecation: 'row', justifyContent: 'flex-start', marginBottom: 8, marginTop: 8 }}>
            <span>搜索范围: &nbsp;&nbsp;</span>
            <CheckboxGroup
              options={checkboxOption}
              onChange={checkedValues => this.setState({ search_targe: checkedValues })}
            />
          </div>

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

PlanList.propTypes = {
  // dictionary: PropTypes.object,
  // authority: PropTypes.object,
  data: PropTypes.array,
};

const PlanListWithData = props => (<Data><PlanList {...props} /></Data>);
export default PlanListWithData;
