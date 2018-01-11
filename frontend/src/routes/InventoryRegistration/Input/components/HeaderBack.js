import React from 'react';
import { browserHistory } from 'react-router';
import { Button, Icon } from 'antd';


const App = () => (
  <div style={{ margin: '0 0 10px 0' }}>
    <Button
      type="primary"
      onClick={() => browserHistory.push('/main/InventoryRegistration/Input/List')}
      style={{ marginRight: 10 }}
    >
      <Icon type="left" />入库列表
    </Button>
  </div>
);


export default App;
