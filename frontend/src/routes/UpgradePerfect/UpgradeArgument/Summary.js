import React, { PropTypes } from 'react';
import { Row, Col, Table, Input, Button, Checkbox } from 'antd';
import Data from './Data/Main';
import filterData from '../../Common/filterData'; // 筛选

const CheckboxGroup = Checkbox.Group;

const data = [{
  title: '标题',
  software: '软件',
  create_time: '2017-02-23 22:34:33',
  discription: '描述信息',
  statues: 0,
}, {
  title: '标题2',
  software: '软件2',
  create_time: '2017-02-23 22:34:33',
  discription: '描述信息q',
  statues: 2,
}, {
  title: '标题3',
  software: '软件3',
  create_time: '2017-02-23 22:34:33',
  discription: '描述信息w',
  statues: 2,
}];

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
    // const { dictionary, authority } = props;
    // console.log('props', props);
    const { search_targe, searchValue } = this.state;
    const dataFiltered = filterData(data, searchValue, search_targe);
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
    ];

    const rowSelection = {
      onChange: (Keys) => {
        console.log('Keys', Keys);
      },
    };
    return (
      <Row>
        <Col span="24">
          <div style={{ display: 'flex', flexDirecation: 'row', justifyContent: 'flex-end', marginBottom: 8 }}>
            <Input.Search
              placeholder="搜索"
              onSearch={(value) => {
                this.setState({ searchValue: value });
              }}
            />
            <Button
              type="primary"
              onClick={() => {
                this.addUser();
              }}
              style={{ marginLeft: 8 }}
            >汇总</Button>
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
            bordered
            rowSelection={rowSelection}
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
