import React, { PropTypes } from 'react';
import { Select } from 'antd';
import LoadAndRefresh from './LoadAndRefresh';
// import { createSelect } from './CreateTreeAndKey';

const Option = Select.Option;
class DevUnitSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentWillMount() {
    // console.log('ModuleTreeSelect');
    this.props.sendData(this.handleSelect);
  }
  handleSelect = (res) => {
    console.log('SWselect', res);
    this.setState({ data: res.data });
    // const treeData = createSelect(res.data);
    // this.setState({ moduleTreeData: treeData });
  }
  render() {
    const opts = this.state.data.map((item, index) => {
      return <Option key={index} value={item.ID.toString()}>{item.SU_NAME}</Option>;
    });
    // console.log('opts', this.props);
    return (
      <Select {...this.props}>
        {opts}
      </Select>
    );
  }
}
DevUnitSelect.propTypes = {
  sendData: PropTypes.func.isRequired,
};
const wrapDevUnitSelect = LoadAndRefresh('/api/basic-unit/units')(DevUnitSelect);
export default wrapDevUnitSelect;
