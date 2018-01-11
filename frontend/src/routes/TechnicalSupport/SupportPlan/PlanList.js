import React, { Component, PropTypes } from 'react';
import { Button, Checkbox, Col, Input, message, Popconfirm, Row, Table } from 'antd';
import { browserHistory } from 'react-router';
import Data from './Data/PlanList';
import filterData from './../../Common/filterData'; // 筛选

const CheckboxGroup = Checkbox.Group;


const checkboxOption = [
  { label: '申请标题', value: 'title' },
  { label: '申请软件', value: 'software' },
  { label: '申请时间', value: 'create_time' },
  { label: '申请描述', value: 'discription' },
];

class PlanList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      search_targe: [],
    };
  }

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
        dataIndex: 'discription',
        sorter: (a, b) => a.discription.length - b.discription.length,
      },
      {
        title: '申请状态',
        dataIndex: 'statues',
        sorter: (a, b) => a.statues - b.statues,
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
              {row.statues === 0 &&
              <button
                className="tableCellAction"
                onClick={() => {
                  browserHistory.push(`/main/TechnicalSupport/SupportPlan/EditPlan/${row.id}`);
                }}
              >修改</button>
              }
              <button
                className="tableCellAction"
                onClick={() => {
                  browserHistory.push(`/main/TechnicalSupport/SupportPlan/PlanView/${row.id}`);
                }}
              >查看</button>
              {row.statues === 0 &&
              <Popconfirm
                title="确认自动生成任务吗？"
                onConfirm={() => message.success('TODO 后端调试')}
                okText="生成" cancelText="取消"
              >
                <button
                  className="tableCellAction"
                >生成任务
                </button>
              </Popconfirm>
              }
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
              type="primary"
              onClick={() => {
                browserHistory.push('/main/TechnicalSupport/SupportPlan/EditPlan/New');
              }}
              style={{ marginLeft: 8 }}
            >新建方案</Button>
          </div>
          <div style={{ display: 'flex', marginBottom: 8 }}>
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
