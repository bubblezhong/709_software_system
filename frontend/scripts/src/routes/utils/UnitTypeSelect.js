import React, { PropTypes } from 'react';
import { Select } from 'antd';
import LoadAndRefresh from './LoadAndRefresh';
// import { createSelect } from './CreateTreeAndKey';

const Option = Select.Option;
class UnitTypeSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentWillMount() {
    this.props.sendData(this.handleSelect);
  }
  handleSelect = (res) => {
    console.log('SPselect', res);
    this.setState({ data: res.data });
    // const treeData = createSelect(res.data);
    // this.setState({ moduleTreeData: treeData });
  }
  render() {
    const { data = [] } = this.state;
    const opts = data.map((item, index) => {
      return <Option key={index} value={item}>{item}</Option>;
    });
    console.log('opts', opts);
    return (
      <Select {...this.props}>
        {opts}
      </Select>
    );
  }
}
UnitTypeSelect.propTypes = {
  sendData: PropTypes.func.isRequired,
};
const wrapUnitTypeSelect = LoadAndRefresh('/api/basic-unit/types')(UnitTypeSelect);
export default wrapUnitTypeSelect;
