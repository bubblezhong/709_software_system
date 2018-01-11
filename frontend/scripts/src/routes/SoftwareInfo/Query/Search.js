import React from 'react';
import { browserHistory } from 'react-router';
import { AutoComplete, Input, Icon } from 'antd';
// import InputSearch from './../../utils/InputSearch';


const Option = AutoComplete.Option;
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteBtn: 'none',
      searchValue: '',
      historyData: ['中船重工XX所', '中船重工yy所', '中船重工11所', '中船重工22所'],
    };
  }
  showDelete = (val) => {
    if (val !== '') {
      this.setState({ deleteBtn: 'inline-block', searchValue: val });
    } else {
      this.deleteSearch();
    }
  }
  deleteSearch = () => {
    console.log('delete');
    this.setState({ searchValue: '', deleteBtn: 'none' });
  }
  render() {
    const options = this.state.historyData.map(opt => (
      <Option key={opt} style={{ marginTop: 20 }}>
        <span className="certain-search-item-count">{opt}</span>
      </Option>
      ));
    return (
      <div style={{ height: 50, position: 'relative', top: 5, display: 'inline-block' }}>
        <AutoComplete
          dropdownMatchSelectWidth={false}
          dropdownStyle={{ width: 300 }}
          size="large"
          style={{ width: 300 }}
          dataSource={options}
          optionLabelProp="value"
          onChange={(e) => { this.showDelete(e); }}
          value={this.state.searchValue}
        >
          <Input.Search
            onSearch={value => browserHistory.push(`/main/SoftwareInfo/QueryDetail?value=${value}`)}
          />
        </AutoComplete>
        <Icon type="close" style={{ marginRight: 10, zIndex: 999, cursor: 'pointer', position: 'absolute', top: 11, right: 15, display: this.state.deleteBtn }} onClick={this.deleteSearch} />
      </div>
    );
  }
}
export default Search;
