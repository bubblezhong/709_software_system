import React from 'react';
import { Link } from 'react-router';
import { Button } from 'antd';
import PlanDetailInfo from './PlanDetailInfo';
import PlanDetailInfoEdit from './PlanDetailInfoEdit';
import PlanDetailStep from './PlanDetailStep';
import PlanDetailStepEdit from './PlanDetailStepEdit';

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
          <Link to="/main/SoftwarePlan/PlanDetail/1">
            <Button type="primary" className="SoftwareInfoDetail_reflash" onClick={this.onSave}>保存</Button>
          </Link>
          <Button type="primary" className="SoftwareInfoDetail_reflash" onClick={this.onEdit}>编辑</Button>
        </div>
        { !this.state.editState && <PlanDetailInfo /> }
        { this.state.editState && <PlanDetailInfoEdit /> }
        { !this.state.editState && <PlanDetailStep /> }
        { this.state.editState && <PlanDetailStepEdit /> }
      </div>
    );
  }
}
export default PlanDetail;
