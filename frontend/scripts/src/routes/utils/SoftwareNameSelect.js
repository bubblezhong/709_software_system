import React, { PropTypes } from 'react';
import { Select } from 'antd';
import LoadAndRefresh from './LoadAndRefresh';
// import { createSelect } from './CreateTreeAndKey';
const Option = Select.Option;
class SoftwareNameSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentWillMount() {
    console.log('ModuleTreeSelect');
    this.props.sendData(this.handleSelect);
  }
  handleSelect = (res) => {
    // console.log('SWselect', res);
    this.setState({ data: res.data });
    // console.log('opts', opts);
    // this.setState({ options: opts });
    // const treeData = createSelect(res.data);
    // this.setState({ moduleTreeData: treeData });
  }
  render() {
    const opts = this.state.data.map((item, index) => {
      const idStr = item.ID.toString();
      return <Option key={index} value={idStr}>{item.NAME}</Option>;
    });
    // console.log('opts', opts);
    return (
      <Select {...this.props}>
        {opts}
      </Select>
    );
  }
}
SoftwareNameSelect.propTypes = {
  sendData: PropTypes.func.isRequired,
};
const wrapSoftwareNameSelect = LoadAndRefresh('/api/basic-software/softwares')(SoftwareNameSelect);
export default wrapSoftwareNameSelect;
