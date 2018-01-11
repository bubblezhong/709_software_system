import React from 'react';
import { Link } from 'react-router';
import { Calendar } from 'antd';
import './SoftwarePlan.css';

class PlanRemind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { time: '2017-8-29', content: '升级完善计划' },
        { time: '2017-8-17', content: '调配计划' },
        { time: '2017-11-10', content: '出库计划' },
        { time: '2017-7-9', content: '升级完善计划' },
        { time: '2017-7-12', content: '出库计划' },
      ],
    };
  }
  // componentDidMount() {
  //   this.addColor();
  // }
  // componentDidUpdate() {
  //   this.addColor();
  // }
  getListData = (value) => {
    const listData = [];
    for (let i = 0; i < this.state.data.length; i++) {
      if (value.isSame(this.state.data[i].time, 'day')) {
        listData.push(this.state.data[i]);
      }
    }
    return listData;
  }
  getMonthData = (value) => {
    const listData = [];
    for (let i = 0; i < this.state.data.length; i++) {
      if (value.isSame(this.state.data[i].time, 'month')) {
        listData.push(this.state.data[i]);
        console.log(listData);
      }
    }
    return listData;
  }
  // addColor = () => {
  //   const events = document.getElementsByClassName('PlanRemind_events');
  //   for (let i = 0; i < events.length; i++) {
  //     const parent = events[i].parentNode.parentNode.parentNode;
  //     parent.setAttribute('class', 'abc');
  //   }
  // }
  dateCellRender = (value) => {
    const listData = this.getListData(value);
    return listData.length ? (
      <Link to="/main/SoftwarePlan/PlanDetail/9" className="PlanRemind_events">
        {
          listData.map(item => (
            <span key={item.content}>
              {item.content}
            </span>
          ))
        }
      </Link>
    ) : null;
  }
  monthCellRender = (value) => {
    const listData = this.getMonthData(value);
    console.log(listData);
    return listData.length ? (
      <div className="PlanRemind_events">
        {
          listData.map(item => (
            <div key={item.content}>
              {item.content}
            </div>
          ))
        }
      </div>
    ) : null;
  }
  render() {
    return (
      <Calendar dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} id="calendar" />
    );
  }
}

export default PlanRemind;
