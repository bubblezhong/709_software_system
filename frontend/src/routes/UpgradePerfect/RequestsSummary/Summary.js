import React, { PropTypes } from 'react';
import { Row, Col, Table, Input, Button, Checkbox } from 'antd';
import { browserHistory, Link } from 'react-router';
import Data from './Data/Summary';
import filterData from '../../Common/filterData'; // 筛选


const CheckboxGroup = Checkbox.Group;


const checkboxOption = [
  { label: '申请标题', value: 'title' },
  { label: '申请软件', value: 'software' },
  { label: '申请时间', value: 'create_time' },
  { label: '申请描述', value: 'discription' },
];

class RequestsSummary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      search_targe: [],
    };
  }
  render() {
    let { data } = this.props;
    // console.log('props', props);
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
        sorter: (a, b) => a.software.length - b.software.length,
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
              buttons = (<a>已上报</a>);
              break;
            case 2:
              buttons = (<a>驳回</a>);
              break;
            case 3:
              buttons = (<a>已安排升级任务</a>);
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
        render: (text, row) => (
          <span>
            <Link to={`/main/UpgradePerfect/RequestsSummary/edit/${row.id}`}>编辑</Link>&nbsp;&nbsp;
            <Link to={`/main/UpgradePerfect/RequestsSummary/view/${row.id}`}>浏览</Link>
          </span>
        ),
      },

    ];
    data = filterData(data, searchValue, search_targe);
    return (
      <Row>
        <Col span="24">
          <div style={{ display: 'flex', flexDirecation: 'row', justifyContent: 'flex-end', marginBottom: 8 }}>
            <Input.Search placeholder="搜索" onSearch={(value) => { this.setState({ searchValue: value }); }} />
            <Button
              type="primary"
              onClick={() => { browserHistory.push('/main/UpgradePerfect/RequestsSummary/new'); }}
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
            dataSource={data}
            bordered
          />
        </Col>
      </Row>
    );
  }
}

RequestsSummary.propTypes = {
  data: PropTypes.object,
  // dictionary: PropTypes.object,
  // authority: PropTypes.object,
};

const MainWithData = props => (<Data><RequestsSummary {...props} /></Data>);
export default MainWithData;
