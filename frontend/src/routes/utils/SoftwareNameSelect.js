import React, { PropTypes } from 'react';
import { Select } from 'antd';
import LoadAndRefresh from './LoadAndRefresh';
// import { createSelect } from './CreateTreeAndKey';
const Option = Select.Option;
class SoftwareNameSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  render() {
    // console.log('this.props.res.dat', this.props.res.data);
    const opts = Array.isArray(this.props.res.data) ? this.props.res.data.map((item, index) => {
      const idStr = item.ID.toString();
      return <Option key={index} value={idStr}>{item.NAME}</Option>;
    }) : [];
    return (
      <Select {...this.props} >
        {opts}
      </Select>
    );
  }
}
SoftwareNameSelect.propTypes = {
  res: PropTypes.object.isRequired,
};
const wrapSoftwareNameSelect = LoadAndRefresh('/api/basic-software/softwares')(SoftwareNameSelect);
export default wrapSoftwareNameSelect;
