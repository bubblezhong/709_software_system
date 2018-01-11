import React from 'react';
import { Input, Icon } from 'antd';

const Search = Input.Search;
class InputSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteBtn: 'none',
      searchValue: '',
    };
  }
  showDelete = (e) => {
    console.log(e.target.value);
    if (e.target.value !== '') {
      this.setState({ deleteBtn: 'block', searchValue: e.target.value });
    } else {
      this.deleteSearch();
    }
  }
  deleteSearch = () => {
    console.log('delete');
    this.setState({ searchValue: '', deleteBtn: 'none' });
  }
  render() {
    return (
      <div style={{ display: 'inline-block', position: 'relative', float: 'right' }}>
        <Search
          style={{ width: 380, height: 40, float: 'right' }}
          onChange={(e) => { this.showDelete(e); }}
          value={this.state.searchValue}
          ref={(node) => { this.userNameInput = node; }}
        />
        <Icon type="close" style={{ position: 'absolute', zIndex: 999, top: 14, right: 30, display: this.state.deleteBtn }} onClick={this.deleteSearch} />
      </div>
    );
  }
}
export default InputSearch;
