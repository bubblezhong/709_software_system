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
      unitType: '',
    };
  }
  componentWillMount() {
    // console.log('ModuleTreeSelect');
    this.props.sendData(this.handleSelect);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ unitType: nextProps.unitType });
  }
  handleSelect = (res) => {
    this.setState({ data: res.data });
  }
  render() {
    const tempData = this.state.data.filter((item) => {
      return item.SU_TYPE === this.state.unitType;
    });
    const opts = tempData.map((item, index) => {
      return <Option key={index} value={item.ID.toString()}>{item.SU_NAME}</Option>;
    });
    console.log('111', opts);
    return (
      <Select {...this.props}>
        {opts}
      </Select>
    );
  }
}
DevUnitSelect.propTypes = {
  sendData: PropTypes.func.isRequired,
  // unitType: PropTypes.string.isRequired,
};
const wrapDevUnitSelect = LoadAndRefresh('/api/basic-unit/units')(DevUnitSelect);
export default wrapDevUnitSelect;
