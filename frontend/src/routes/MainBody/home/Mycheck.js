import React from 'react';
import { Link } from 'react-router';
import './Home.css';

class MyCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checks: [
         { val: '◇【编配任务】单号:KB-20170426-0002,日期:2017-04-26，待您出库软件 ' },
         { val: '◇【编配任务】单号:KB-20170426-0002,日期:2017-04-26，待您出库软件 ' },
         { val: '◇【编配任务】单号:KB-20170426-0002,日期:2017-04-26，待您出库软件 ' },
         { val: '◇【编配任务】单号:KB-20170426-0002,日期:2017-04-26，待您出库软件 ' },
         { val: '◇【编配任务】单号:KB-20170426-0002,日期:2017-04-26，待您出库软件 ' },
         { val: '◇【编配任务】单号:KB-20170426-0002,日期:2017-04-26，待您出库软件 ' },
         { val: '◇【编配任务】单号:KB-20170426-0002,日期:2017-04-26，待您出库软件 ' },
      ],
    };
  }
  render() {
    const arrChecks = this.state.checks.map((item, index) => {
      return (
        <div className="myTaskChild" key={index}>
          <a>
            <span>{item.val}</span>
          </a>
        </div>
      );
    });
    const myCheck = (
      <div className="myTask">
        <div className="myTaskHeader">
          <span className="span1">
            <img src="/images/u102.png" alt="" />
          </span>
          <span className="span2">
            我的审核
          </span>
          <Link to="/main/Userinfo/UndoTask?value=underCheck" className="span3">
            更多&gt;&gt;
          </Link>
        </div>
        {arrChecks}
      </div>
      );
    return (
      <div>
        { myCheck }
      </div>
    );
  }
}


export default MyCheck;
