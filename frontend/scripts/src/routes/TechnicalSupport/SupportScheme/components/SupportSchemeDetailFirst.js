import React, { PropTypes } from 'react';
import SupportSchemeDetailFirstEdit from './SupportSchemeDetailFirstEdit';
import SupportSchemeDetailFirstRead from './SupportSchemeDetailFirstRead';

class SupportSchemeDetailFirst extends React.Component {
  constructor(props) {
    super(props);
    console.log('disable', this.props.disable);
    const disable = this.props.disable;
    this.state = {
      disable,
      newStatus: true,
    };
  }
  changeEdit = () => {
    console.log('changeEditStatus111');
    this.setState({ disable: true, newStatus: false });
  }
  changeRead = () => {
    console.log('changeEditStatus111');
    this.setState({ disable: false });
  }
  render() {
    return (
      <div>
        {this.state.disable ?
          <SupportSchemeDetailFirstRead changeEdit={this.changeEdit} /> :
            <SupportSchemeDetailFirstEdit
              newStatus={this.state.newStatus}
              changeRead={this.changeRead}
            />
        }
      </div>
    );
  }
}
SupportSchemeDetailFirst.propTypes = {
  disable: PropTypes.bool.isRequired,
};
export default SupportSchemeDetailFirst;
