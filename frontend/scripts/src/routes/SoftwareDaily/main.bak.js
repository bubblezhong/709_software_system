import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Tabs } from 'antd';
import Registration from './Registration/Registration';
import Collect from './Collect/Collect';
// import Statistic from './Showing/Statistic';


const TabPane = Tabs.TabPane;


class SoftwareDaily extends Component {

  changeOutTabs(key) {
    browserHistory.push(`/main/SoftwareDaily/${key}`);
  }

  render() {
    const page = this.props.routeParams.page;
    return (
      <div>
        <Tabs
          defaultActiveKey={page}
          activeKey={page}
          onChange={(key) => {
            this.changeOutTabs(key);
          }}
        >
          <TabPane tab="使用情况登记" key="Registration">
            <Registration />
          </TabPane>
          <TabPane tab="使用情况汇总" key="Collect">
            <Collect />
          </TabPane>
          {/* <TabPane tab="使用情况统计" key="Statistic">
            <Collect />
          </TabPane> */}
        </Tabs>
      </div>
    );
  }
}


SoftwareDaily.propTypes = {
  routeParams: PropTypes.object.isRequired,
};


export default SoftwareDaily;
