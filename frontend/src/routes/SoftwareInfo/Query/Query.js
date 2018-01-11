import React from 'react';
import Search from './Search';
import SoftwareStatic from './SoftwareStatic';
import UnitStatic from './UnitStatic';
import Chart from './Chart';
import './Query.css';

const Query = () => {
  return (
    <div>
      <Search />
      <SoftwareStatic />
      <UnitStatic />
      <Chart />
    </div>
  );
};
export default Query;
