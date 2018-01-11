import React from 'react';
import { Link } from 'react-router';
import { Button } from 'antd';
import ProcessConfigurationDetailInfo from './components/ProcessConfigurationDetailInfo';
// import ProcessConfigurationDetailInfoEdit from './components/ProcessConfigurationDetailInfoEdit';
import ProcessConfigurationDetailStep from './components/ProcessConfigurationDetailStep';
import ProcessConfigurationDetailStepEdit from './components/ProcessConfigurationDetailStepEdit';
import './ProcessConfiguration.css';

class PlanDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editState: false,
    };
  }
  onEdit = () => {
    this.setState({ editState: true });
  }
  onSave = () => {
    this.setState({ editState: false });
  }
  render() {
    return (
      <div>
        <div style={{ overflow: 'hidden', marginBottom: 20 }}>
          <Link to="/main/SoftwarePlan/PlanInfo" className="SoftwareInfoDetail_return">
            <Button style={{ width: 85, height: 30 }}>
              <span style={{ marginRight: 8 }}>&lt;</span>
              <span>返回</span>
            </Button>
          </Link>
          <Button type="primary" className="SoftwareInfoDetail_reflash" onClick={this.onSave}>保存</Button>
          <Button type="primary" className="SoftwareInfoDetail_reflash" onClick={this.onEdit}>编辑</Button>
        </div>
        <ProcessConfigurationDetailInfo editState={this.state.editState} />
        { !this.state.editState && <ProcessConfigurationDetailStep /> }
        { this.state.editState && <ProcessConfigurationDetailStepEdit /> }
      </div>
    );
  }
}
export default PlanDetail;
