import React from 'react';
import { Select } from 'antd';
import LoadAndRefresh from './LoadAndRefresh';
// import { createSelect } from './CreateTreeAndKey';

const Option = Select.Option;
class DevUnitSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      unitType: '',
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    this.setState({ unitType: nextProps.unitType, data: nextProps.res.data });
  }
  // handleSelect = (res) => {
  //   this.setState({ data: res.data });
  // }
  render() {
    const tempData = this.state.data.filter((item) => {
      return item.SU_TYPE === this.state.unitType;
    });
    const opts = tempData.map((item, index) => {
      return <Option key={index} value={item.ID.toString()}>{item.SU_NAME}</Option>;
    });
    return (
      <Select {...this.props}>
        {opts}
      </Select>
    );
  }
}
const wrapDevUnitSelect = LoadAndRefresh('/api/basic-unit/units')(DevUnitSelect);
export default wrapDevUnitSelect;
