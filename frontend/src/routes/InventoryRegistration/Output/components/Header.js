import React from 'react';
import { Link } from 'react-router';
import { Button } from 'antd';
import InputSearch from './../../../utils/InputSearch';


// const Search = Input.Search;
const ButtonGroup = Button.Group;


const App = () => (
  <div style={{ overflow: 'auto', marginBottom: 10 }}>
    <ButtonGroup style={{ float: 'left' }}>
      <Button icon="reload" style={{ width: 110, height: 40, fontSize: 14 }}>刷新</Button>
      <Link to="/main/InventoryRegistration/OutputNew">
        <Button icon="file-add" style={{ width: 110, height: 40, fontSize: 14, borderRadius: 0 }}>申请出库</Button>
      </Link>
      <Button icon="login" style={{ width: 110, height: 40, fontSize: 14 }}>导入</Button>
      <Button icon="logout" style={{ width: 110, height: 40, fontSize: 14 }}>导出</Button>
      <Button icon="delete" style={{ width: 110, height: 40, fontSize: 14 }}>撤销</Button>
    </ButtonGroup>
    <InputSearch />
  </div>
);


export default App;
