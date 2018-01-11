import React, { PropTypes } from 'react';
import { Select } from 'antd';
import LoadAndRefresh from './LoadAndRefresh';
// import { createSelect } from './CreateTreeAndKey';

const Option = Select.Option;
class UnitRepresentSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  render() {
    const opts = Array.isArray(this.props.res.data) ? this.props.res.data.map((item, index) => {
      const ownerStr = item.ID.toString();
      return <Option key={index} value={ownerStr}>{item.NAME}</Option>;
    }) : [];
    return (
      <Select {...this.props}>
        {opts}
      </Select>
    );
  }
}
UnitRepresentSelect.propTypes = {
  res: PropTypes.object.isRequired,
};
const wrapDevUnitSelect = LoadAndRefresh('/api/basic-user/users')(UnitRepresentSelect);
export default wrapDevUnitSelect;
