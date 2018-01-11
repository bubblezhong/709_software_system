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
    this.props.sendData(this.handleSelect);
  }
  handleSelect = (res) => {
    console.log('Ownerselect', res);
    this.setState({ data: res.data });
    // const treeData = createSelect(res.data);
    // this.setState({ moduleTreeData: treeData });
  }
  render() {
    const opts = this.state.data.map((item, index) => {
      const ownerStr = item.ID.toString();
      return <Option key={index} value={ownerStr}>{item.NAME}</Option>;
    });
    console.log('owner', opts);
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
const wrapDevUnitSelect = LoadAndRefresh('/api/basic-user/users')(DevUnitSelect);
export default wrapDevUnitSelect;
