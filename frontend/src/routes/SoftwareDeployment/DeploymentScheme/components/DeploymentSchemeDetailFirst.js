import React, { PropTypes } from 'react';
import DeploymentSchemeDetailFirstEdit from './DeploymentSchemeDetailFirstEdit';
import DeploymentSchemeDetailFirstRead from './DeploymentSchemeDetailFirstRead';

class DeploymentSchemeDetailFirst extends React.Component {
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
          <DeploymentSchemeDetailFirstRead changeEdit={this.changeEdit} /> :
            <DeploymentSchemeDetailFirstEdit
              newStatus={this.state.newStatus}
              changeRead={this.changeRead}
            />
        }
      </div>
    );
  }
}
DeploymentSchemeDetailFirst.propTypes = {
  disable: PropTypes.bool.isRequired,
};
export default DeploymentSchemeDetailFirst;
