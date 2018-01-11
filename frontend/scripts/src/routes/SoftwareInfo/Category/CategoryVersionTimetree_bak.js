import React from 'react';
import { Link } from 'react-router';
import { Timeline, Card } from 'antd';
import './Category.css';

class CategoryVersionTimetree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      treeContent: [
        { time: '2015-03-01', color: '#8d263d', version: 'V1.2.3.0.1', developUnit: '中船-709所', MD5: '25588777fadv544xc5', path: '/main/SoftwareInfo/CategoryVersionDetail' },
        { time: '2015-09-06', color: '#39a1ed', version: 'V1.2.3.0.1', developUnit: '中船-709所', MD5: '25588777fadv544xc5', path: '/main/SoftwareInfo/CategoryVersionDetail' },
        { time: '2016-03-07', color: '#8d26d1', version: 'V1.2.3.0.1', developUnit: '中船-709所', MD5: '25588777fadv544xc5', path: '/main/SoftwareInfo/CategoryVersionDetail' },
        { time: '2017-03-30', color: '#faaa07', version: 'V1.2.3.0.1', developUnit: '中船-709所', MD5: '25588777fadv544xc5', path: '/main/SoftwareInfo/CategoryVersionDetail' },
        { time: '2017-06-11', color: '#39a1ed', version: 'V1.2.3.0.1', developUnit: '中船-709所', MD5: '25588777fadv544xc5', path: '/main/SoftwareInfo/CategoryVersionDetail' },
        { time: '2017-12-23', color: '#faaa07', version: 'V1.2.3.0.1', developUnit: '中船-709所', MD5: '25588777fadv544xc5', path: '/main/SoftwareInfo/CategoryVersionDetail' },
      ],
      show: 'Timetree',
    };
  }
  render() {
    const Tree = this.state.treeContent.map((item, index) => {
      return (
        <Link to={item.path} style={{ width: '50%', marginLeft: '25%', display: 'inline-block', color: '#000' }} key={index}>
          <Timeline.Item color={item.color}>
            <div style={{ position: 'absolute', left: -120, zIndex: 2, float: 'right' }}>
              <span>{item.time}</span>
            </div>
            <Card bodyStyle={{ padding: 12 }}>
              <span>版本：{item.version}</span> <br />
              <span>研制单位：{item.developUnit}</span><br />
              <span>MD5：{item.MD5}</span><br />
            </Card>
          </Timeline.Item>
        </Link>
      );
    });
    return (
      <div>
        {Tree}
      </div>
    );
  }
}
export default CategoryVersionTimetree;
