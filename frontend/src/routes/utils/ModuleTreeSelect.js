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
  render() {
    const treeData = createSelect(this.props.res.data);
    return (
      <TreeSelect
        {...this.props}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData}
        treeDefaultExpandAll
      />
    );
  }
}
ModuleTreeSelect.propTypes = {
  res: PropTypes.object.isRequired,
};
const wrapModuleTreeSelect = LoadAndRefresh('/api/basic-module/modules')(ModuleTreeSelect);
export default wrapModuleTreeSelect;
