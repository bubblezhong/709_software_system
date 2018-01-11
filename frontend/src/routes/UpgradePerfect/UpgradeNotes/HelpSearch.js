import React, { PropTypes } from 'react';
import { Row, Col, Input, Checkbox, Table } from 'antd';
import { browserHistory } from 'react-router';
import Data from './Data/HelpSearch';

const Search = Input.Search;
const CheckboxGroup = Checkbox.Group;


const checkboxOptions = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

const columns = [{
  title: '标题',
  dataIndex: 'title',
  key: 'title',
}, {
  title: '摘要',
  dataIndex: 'description',
  key: 'description',
}, {
  title: '创建时间',
  dataIndex: 'create_data',
  key: 'create_data',
}, {
  title: '操作',
  dataIndex: 'action',
  key: 'action',
  render: (text, row) => (
    <button
      className="tableCellAction"
      onClick={() => browserHistory.push(`/main/TechnicalSupport/OnlineHelp/Help/${row.id}`)}
    >
      详情
    </button>
  ),
}];

class HelpSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  onCheck = (checkedValues) => {
    console.log(checkedValues);
  }

  render() {
    const {
      resultList,
      location,
    } = this.props;

    let searchValue = null;
    if (location.query.search) {
      try {
        searchValue = location.query.search;
      } catch (e) {
        console.log('err', e);
      }
    }
    return (
      <Row>
        <Col span="24">
          <Row>
            <Col span="4">
              <h3
                style={{ lineHeight: '32px' }}
              >帮助搜索: </h3>
            </Col>
            <Col span="20">
              <Search
                placeholder="请输入搜索内容"
                defaultValue={searchValue}
                size="large"
                onSearch={(value) => {
                  browserHistory.push(`/main/TechnicalSupport/OnlineHelp/?search=${value}`);
                }}
              />
            </Col>
          </Row>
          <CheckboxGroup options={checkboxOptions} onChange={this.onCheck} />

          <Table dataSource={resultList} columns={columns} bordered />
        </Col>
      </Row>
    );
  }
}
HelpSearch.propTypes = {
  resultList: PropTypes.array,
  // searchHelp: PropTypes.func,
  location: PropTypes.object,
};

const HelpSearchWithData = props => (<Data {...props}><HelpSearch {...props} /></Data>);
export default HelpSearchWithData;
