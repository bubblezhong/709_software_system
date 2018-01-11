import React, { Component } from 'react';
import { TreeSelect } from 'antd';

const treeData = [{
  label: '单位1',
  value: '0-0',
  key: '0-0',
  children: [{
    label: '单位11',
    value: '0-0-1',
    key: '0-0-1',
  }, {
    label: '单位12',
    value: '0-0-2',
    key: '0-0-2',
  }],
}, {
  label: '单位2',
  value: '0-1',
  key: '0-1',
}];


class OrganizationTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
    };
  }

  onChange = (value) => {
    console.log(arguments);
    this.setState({ value });
  }


  render() {
    return (
      <TreeSelect
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData}
        placeholder="请选择单位"
        showSearch
        onChange={this.onChange}
        style={{ minWidth: 200 }}
      />
    );
  }
}


export default OrganizationTree;
