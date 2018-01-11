import React, { Component, PropTypes } from 'react';
import { Table, message } from 'antd';
import InfoExtends from './InfoExtends';
import {
  getSoftwareById,
} from './../../../../Models/Software/Software';
import { dictionarySoftware } from './../../../../DataDictionary/index';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      infoExtends: [],
    };
    // this.getExtendsById = this.getExtendsById.bind(this);
  }


  componentWillMount() {
    this.handleGetSoftwareById();
  }

  async handleGetSoftwareById() {
    try {
      const id = this.props.softwareInfo.id;
      const { res } = await getSoftwareById(id);
      console.log('res: ', res);
      if (res.code === 1000) {
        this.setState({
          infoExtends: res.data.list,
        });
      } else {
        message.error(res.message || '获取软件列表失败', 3);
      }
    } catch (e) {
      console.log(e);
      message.error(e.message || '获取软件列表失败', 3);
    }
  }

  render() {
    const softwareInfo = this.props.softwareInfo;
    const columns = [{
      title: 'title',
      dataIndex: 'title',
    }, {
      title: 'value',
      dataIndex: 'value',
    }];
    const data = [{
      key: '1',
      title: '软件名称',
      value: softwareInfo.name,
    }, {
      key: '2',
      title: '软件谱系',
      value: softwareInfo.category_name,
    }, {
      key: '3',
      title: '软件类型',
      value: dictionarySoftware[softwareInfo.type],
    }, {
      key: '4',
      title: '用途说明',
      value: softwareInfo.usage,
    }, {
      key: '5',
      title: '备注信息',
      value: softwareInfo.remark,
    }, {
      key: '6',
      title: '附加信息',
      value: softwareInfo.appendix,
    }, {
      key: '7',
      title: '软件状态',
      value: dictionarySoftware[softwareInfo.status],
    }];

    return (
      <div>
        <Table
          title={() => { return '软件基本信息'; }}
          showHeader={false}
          pagination={false}
          bordered
          columns={columns}
          dataSource={data}
        />
        <div style={{ marginTop: 20 }}>
          <InfoExtends
            infoExtends={this.state.infoExtends}
          />
        </div>
      </div>
    );
  }
}


App.propTypes = {
  softwareInfo: PropTypes.object.isRequired,
};


export default App;
