import React, { Component, PropTypes } from 'react';
import { Table, message, Spin } from 'antd';
import {
  getSoftwareById,
} from './../../../Models/Software/Software';
import {
  getSoftwareModuleListBySoftwareId,
} from './../../../Models/Module/Module';
import { dictionarySoftware } from './../../../DataDictionary/index';
import { ListToTree } from './../../../utils/list2tree';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      infoExtends: [],
      softwareInfo: {
        module_list: [],
        version_list: [],
      },
      categoryList: [],
      versionList: [],
      modulesList: [],
    };
    // this.getExtendsById = this.getExtendsById.bind(this);
  }


  // componentWillMount() {
  //   this.getExtendsById();
  //   this.getSoftwareInfo();
  // }

  componentWillMount() {
    this.handleGetSoftwareById();
    this.handleGetSoftwareModuleList();
  }

  async handleGetSoftwareById() {
    this.setState({ loading: true });
    try {
      const { id } = this.props.params;
      const { res } = await getSoftwareById(id);
      console.log('res: ', res);
      if (res.code === 1000) {
        this.setState({
          softwareInfo: res.software[0],
          category: res.category && res.category.length > 0 ? res.category[0].name : '暂无',
          versionList: res.version,
          loading: false,
        });
      } else {
        this.setState({ loading: false });
        message.error(res.message || '获取软件列表失败', 3);
      }
    } catch (e) {
      console.log(e);
      this.setState({ loading: false });
      message.error(e.message || '获取软件列表失败', 3);
    }
  }


  /**
   * 获取单元列表
   * @return {Promise.<void>} null
   */
  async handleGetSoftwareModuleList() {
    try {
      const { id } = this.props.params;
      const { res } = await getSoftwareModuleListBySoftwareId(id);
      console.log('res: ', res);
      if (res.code === 1000) {
        // 获取软件单元列表成功 将数组转换为树
        const list = ListToTree(res.data, 0);
        console.log('list: ', list);
        this.setState({
          isModuleListLoading: false,
          moduleList: list,
        });
      } else {
        message.error('获取软件单元列表失败', 3);
        this.setState({
          isModuleListLoading: false,
        });
      }
    } catch (e) {
      console.log('e: ', e);
      message.error('获取软件单元列表失败', 3);
      this.setState({
        isModuleListLoading: false,
      });
    }
  }


  render() {
    const softwareInfo = this.state.softwareInfo;
    console.log('softwareInfo: ', softwareInfo);
    console.log('softwareInfo.name: ', softwareInfo.name);
    console.log('softwareInfo.remark: ', softwareInfo.remark);
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
      value: this.state.category,
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
    }, {
      key: 'module_list',
      title: '软件单元列表',
      value: this.state.moduleList && this.state.moduleList.map((item, index) => {
        return (
          <div key={index}>
            <a href={`#${item.id}`} >{item.name}</a>
          </div>
        );
      }),
    }, {
      key: 'version_list',
      title: '软件版本列表',
      value: softwareInfo.versionList && softwareInfo.versionList.map((item, index) => {
        return (
          <div key={index}>
            <a href={`#${item.id}`} >{item.name}</a>
          </div>
        );
      }),
    }, {
      key: '安装部门',
      title: '安装部门',
      value: '',
    }, {
      key: '使用部门',
      title: '使用部门',
      value: '',
    }];


    return (
      <Spin spinning={this.state.loading}>
        <Table
          title={() => { return '软件详情'; }}
          showHeader={false}
          pagination={false}
          bordered
          columns={columns}
          dataSource={data}
        />
      </Spin>
    );
  }
}


App.propTypes = {
  params: PropTypes.object.isRequired,
};


export default App;
