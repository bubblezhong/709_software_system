import React, { PropTypes } from 'react';
import UpgradeSchemeDetailFirstEdit from './UpgradeSchemeDetailFirstEdit';
import UpgradeSchemeDetailFirstRead from './UpgradeSchemeDetailFirstRead';

class UpgradeSchemeDetailFirst extends React.Component {
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
          <UpgradeSchemeDetailFirstRead changeEdit={this.changeEdit} /> :
            <UpgradeSchemeDetailFirstEdit
              newStatus={this.state.newStatus}
              changeRead={this.changeRead}
            />
        }
      </div>
    );
  }
}
UpgradeSchemeDetailFirst.propTypes = {
  disable: PropTypes.bool.isRequired,
};
export default UpgradeSchemeDetailFirst;
