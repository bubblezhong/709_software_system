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
  render() {
    // const { data = [] } = this.state;
    const opts = Array.isArray(this.props.res.data) ? this.props.res.data.map((item, index) => {
      return <Option key={index} value={item}>{item}</Option>;
    }) : [];
    return (
      <Select {...this.props}>
        {opts}
      </Select>
    );
  }
}
UnitTypeSelect.propTypes = {
  res: PropTypes.object.isRequired,
};
const wrapUnitTypeSelect = LoadAndRefresh('/api/basic-unit/types')(UnitTypeSelect);
export default wrapUnitTypeSelect;
