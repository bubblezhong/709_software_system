import React, { PropTypes } from 'react';
import { TreeSelect } from 'antd';
import LoadAndRefresh from './LoadAndRefresh';
import { createSelect } from './CreateTreeAndKey';

class ModuleTreeSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moduleTreeData: [],
    };
  }
  componentWillMount() {
    // console.log('ModuleTreeSelect');
    this.props.sendData(this.handleSelect);
  }
  // onChange = (values) => {
  //   console.log('values', values);
  // }
  handleSelect = (res) => {
    // console.log('select', res);
    const treeData = createSelect(res.data);
    console.log('moduletree', treeData);
    this.setState({ moduleTreeData: treeData });
  }
  render() {
    return (
      <TreeSelect
        {...this.props}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={this.state.moduleTreeData}
        treeDefaultExpandAll
      />
    );
  }
}
ModuleTreeSelect.propTypes = {
  sendData: PropTypes.func.isRequired,
};
const wrapModuleTreeSelect = LoadAndRefresh('/api/basic-module/modules')(ModuleTreeSelect);
export default wrapModuleTreeSelect;
