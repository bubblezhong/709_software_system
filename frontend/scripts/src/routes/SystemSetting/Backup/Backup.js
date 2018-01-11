import React from 'react';
import { Button } from 'antd';

class Backup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: '系统名称：', content: '软件转备运营管理系统' },
        { name: '系统URL地址：', content: 'http://127.0.0.1:3000/' },
        { name: '数据库：', content: 'orcle 11g2' },
        { name: '版本：', content: 'V1.0' },
        { name: '服务器：', content: 'CentOS 7.0' },
        { name: 'Node版本：', content: 'V 6.10.2' },
        { name: 'antd版本：', content: '2.9.0' },
        { name: 'react版本：', content: '15.3.4 ' },
      ],
      content_arrs: [],
    };
  }
  getInfo = () => {
    const arrs = this.state.data.map((item, index) => {
      return (
        <div key={index} style={{ fontSize: 14, paddingLeft: 100, marginBottom: 20 }}>
          <span style={{ display: 'inline-block', width: 130 }}>
            {item.name}
          </span>
          <span>
            {item.content}
          </span>
        </div>
      );
    });
    this.setState({ content_arrs: arrs });
  }
  render() {
    return (
      <div>
        <div style={{ margin: '0 auto', width: '90%', textAlign: 'center', marginBottom: 20 }}>
          <Button onClick={this.getInfo} style={{ marginRight: '2%', width: 92, height: 28 }} >系统检测</Button>
          <Button type="primary">系统初始化</Button>
        </div>
        <div style={{ margin: '0 auto', width: '90%', border: '1px solid #ccc', padding: '30' }}>
          {this.state.content_arrs}
        </div>
      </div>
    );
  }
}
export default Backup;
