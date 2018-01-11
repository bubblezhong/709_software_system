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
  render() {
    const { res } = this.props;
    const opts = Array.isArray(res.data) ? res.data.map((item, index) => {
      return <Option key={index} value={item.ID.toString()}>{item.SU_NAME}</Option>;
    }) : [];
    return (
      <Select {...this.props}>
        {opts}
      </Select>
    );
  }
}
DevUnitSelect.propTypes = {
  res: PropTypes.object.isRequired,
};
const wrapDevUnitSelect = LoadAndRefresh('/api/basic-unit/units')(DevUnitSelect);
export default wrapDevUnitSelect;
