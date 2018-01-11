import React, { PropTypes } from 'react';
import { Checkbox, Input, Table } from 'antd';
import { browserHistory } from 'react-router';
import Data from './Data/HelpSearch';
import filterData from './../../Common/filterData'; // 筛选

const Search = Input.Search;
const CheckboxGroup = Checkbox.Group;


const checkboxOptions = [
  { label: '标题', value: 'title' },
  { label: '摘要', value: 'description' },
  { label: '创建时间', value: 'create_data' },
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
  state = {
    searchValue: '',
    search_targe: [],
  };
  onCheck = (checkedValues) => {
    this.setState({ search_targe: checkedValues });
  };

  render() {
    const { search_targe, searchValue } = this.state;
    const {
      resultList,
      // location,
    } = this.props;
    // let searchValue = null;
    // if (location.query.search) {
    //   try {
    //     searchValue = location.query.search;
    //   } catch (e) {
    //     console.log('err', e);
    //   }
    // }
    const dataFiltered = filterData(resultList, searchValue, search_targe);
    return (
      <div>
        <Search
          placeholder="请输入搜索内容"
          defaultValue={searchValue}
          size="large"
          onSearch={(value) => {
            this.setState({ searchValue: value });
          }}
          // onSearch={(value) => {
          //   browserHistory.push(`/main/TechnicalSupport/OnlineHelp/?search=${value}`);
          // }}
        />
        <div
          style={{
            display: 'flex',
            flexDirecation: 'row',
            justifyContent: 'flex-start',
            marginBottom: 8,
            marginTop: 8,
          }}
        >
          <span>搜索范围: &nbsp;&nbsp;</span>
          <CheckboxGroup options={checkboxOptions} onChange={this.onCheck} />
        </div>
        <Table dataSource={dataFiltered} columns={columns} bordered />
      </div>
    );
  }
}


HelpSearch.propTypes = {
  resultList: PropTypes.array,
  // searchHelp: PropTypes.func,
  // location: PropTypes.object,
};

const HelpSearchWithData = props => (<Data {...props}><HelpSearch {...props} /></Data>);
export default HelpSearchWithData;
