import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Tabs } from 'antd';
import Input from './Input/Input';
import Output from './Output/Output';
import Retire from './Retire/Retire';
// import RetireForm from './RetireForm/RetireForm';
// import Tree from './Showing/Tree';
// import Module from './Showing/Module';
// import Query from './Showing/Query';
// import Statistic from './Showing/Statistic';


const TabPane = Tabs.TabPane;


class InventoryRegistration extends Component {

  changeOutTabs(key) {
    browserHistory.push(`/main/InventoryRegistration/${key}`);
  }

  render() {
    const page = this.props.routeParams.page;
    console.log('page: ', page);
    // let retire = <Retire />;
    // if (page === 'RetireForm') {
    //   retire = <RetireForm />;
    // }
    return (
      <div>
        <Tabs
          defaultActiveKey={page}
          activeKey={page}
          onChange={(key) => {
            this.changeOutTabs(key);
          }}
        >
          <TabPane tab="软件入库" key="Input">
            <Input />
          </TabPane>
          <TabPane tab="软件出库" key="Output">
            <Output />
          </TabPane>
          <TabPane tab="软件退役" key="Retire">
            <Retire />
          </TabPane>
        </Tabs>

      </div>
    );
  }
}


InventoryRegistration.propTypes = {
  routeParams: PropTypes.object.isRequired,
};


export default InventoryRegistration;
