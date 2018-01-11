import React from 'react';
import { Link } from 'react-router';
import './Home.css';

class Mytask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
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
    const arrTasks = this.state.tasks.map((item, index) => {
      return (
        <div className="myTaskChild" key={index}>
          <a>
            <span>{item.val}</span>
          </a>
        </div>
      );
    });
    const myTask = (
      <div className="myTask">
        <div className="myTaskHeader">
          <span className="span1">
            <img src="/images/u84.png" alt="" />
          </span>
          <span className="span2">
            我的任务
          </span>
          <Link to="/main/Userinfo/UndoTask" className="span3">
            更多&gt;&gt;
          </Link>
        </div>
        {arrTasks}
      </div>
      );
    return (
      <div>
        { myTask }
      </div>
    );
  }
}


export default Mytask;
