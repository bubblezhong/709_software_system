import React, { PropTypes, Component } from 'react';
import { Row, Col, Table, Input, Button, Checkbox } from 'antd';
import { browserHistory } from 'react-router';
import Data from './Data/Main';
import filterData from './../../Common/filterData'; // 筛选

const CheckboxGroup = Checkbox.Group;

const data = [{
  id: 1,
  title: '标题',
  software: '软件',
  create_time: '2017-02-23 22:34:33',
  discription: '描述信息',
  statues: 0,
}];

const checkboxOption = [
  { label: '申请标题', value: 'title' },
  { label: '申请软件', value: 'software' },
  { label: '申请时间', value: 'create_time' },
  { label: '申请描述', value: 'discription' },
];

class RequestsSummary extends Component {
  state = {
    searchValue: '',
    search_targe: [],
  }

  render() {
    const { search_targe, searchValue } = this.state;
    // const { dictionary, authority } = props;
    // console.log('props', props);
    const columns = [
      {
        title: '申请标题',
        dataIndex: 'title',
      },
      {
        title: '申请软件',
        dataIndex: 'software',
      },
      {
        title: '申请时间',
        dataIndex: 'create_time',
      },
      {
        title: '申请描述',
        dataIndex: 'discription',
      },
      {
        title: '申请状态',
        dataIndex: 'statues',
        render: (text) => {
          let buttons = null;
          switch (parseInt(text, 10)) {
            case 0:
              buttons = (<a>已保存</a>);
              break;
            case 1:
              buttons = (<a>已上报</a>);
              break;
            case 2:
              buttons = (<a>驳回</a>);
              break;
            case 3:
              buttons = (<a>已安排保障任务</a>);
              break;
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
                  browserHistory.push(`/main/TechnicalSupport/RequestsSummary/EditSummary/${row.id}`);
                }}
              >修改</button>
              <button
                className="tableCellAction"
                onClick={() => {
                  browserHistory.push(`/main/TechnicalSupport/RequestsSummary/SummaryView/${row.id}`);
                }}
              >查看</button>
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
          <div style={{ display: 'flex', flexDirecation: 'row', justifyContent: 'flex-end', marginBottom: 8 }}>
            <Input.Search placeholder="搜索" onSearch={(value) => { this.setState({ searchValue: value }); }} />
            <Button
              type="primary"
              onClick={() => { browserHistory.push('/main/TechnicalSupport/RequestsSummary/NewSummary'); }}
              style={{ marginLeft: 8 }}
            >新建汇总</Button>
          </div>
          <div style={{ display: 'flex', flexDirecation: 'row', justifyContent: 'flex-start', marginBottom: 8 }}>
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

RequestsSummary.propTypes = {
  dictionary: PropTypes.object,
  authority: PropTypes.object,
};

const MainWithData = props => (<Data><RequestsSummary {...props} /></Data>);
export default MainWithData;
