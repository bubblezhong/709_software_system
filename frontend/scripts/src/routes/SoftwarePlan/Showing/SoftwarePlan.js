import React from 'react';
import { BackTop, Card, Col, Row, Tabs } from 'antd';
import PlanList from './PlanList';
import ViewPlan from './ViewPlan';
import EditPlan from './EditPlan';

const TabPane = Tabs.TabPane;
class SoftwarePlan extends React.Component {
  constructor() {
    super();
    this.state = {
      active: null,
    };
  }

  callback = (key) => {
    console.log(key);
  };

  render() {
    // const backTop = { position: 'fixed', _position: 'absolute', right: '12px', bottom: '5%' };
    const { data, dictionary } = this.props;
    const { active } = this.state;
    // options
    let showData = {};
    let options = [];
    if (active) {
      showData = data.plan.find(item => (item.id === active));
    }
    if (active) {
      options = data.options.filter(item => (item.plan_id === active));
    }
    return (
      <div>
        <BackTop />
        <Row gutter={8}>
          <Col span={5}>
            <Card style={{ height: '100%' }} bodyStyle={{ padding: 12 }}>
              <PlanList
                data={data.plan}
                onChange={(id) => {
                  this.setState({ active: id });
                }}
              />
            </Card>
          </Col>
          <Col span={19}>
            <Tabs onChange={this.callback} type="card">
              <TabPane tab="浏览" key="1">
                <ViewPlan data={showData} options={options} />
              </TabPane>
              <TabPane tab="编辑" key="2">
                <EditPlan defaultValue={showData} options={options} dictionary={dictionary} />
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }
}

SoftwarePlan.propTypes = {
  data: React.PropTypes.object,
  dictionary: React.PropTypes.array,
};

export default SoftwarePlan;
