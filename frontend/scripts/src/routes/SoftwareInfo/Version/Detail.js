import React, { Component } from 'react';
import { Link } from 'react-router';
import { Table, message, Collapse } from 'antd';
// import { DetailExtends } from './DetailExtends';

const config = require('./../../../../config/config');

const Panel = Collapse.Panel;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      infoExtends: {
        module_version_list: [],
        useage_department: [],
      },
    };
    this.getExtendsById = this.getExtendsById.bind(this);
  }


  componentWillMount() {
    this.getExtendsById();
  }

  getExtendsById() {
    // const id = this.props.routeParams.id;
    console.log('this.props: ', this.props);
    const id = 1;
    const url = `${config.host}/SoftwareInfo/Version/Info/${id}`;
    fetch(url)
      .then(res => res.json())
      .then((res) => {
        if (res.code === 0) {
          console.log('res: ', res);
          this.setState({
            infoExtends: res.data.info,
          });
        } else {
          return Promise.reject(new Error('获取软件列表失败'));
        }
      })
      .catch((exception) => {
        console.log('exception: ', exception);
        message.error('获取软件列表失败', 5);
      });
  }

  render() {
    const softwareInfo = this.state.infoExtends;
    console.log('softwareInfo: ', softwareInfo);
    let status = '激活';
    switch (softwareInfo.status) {
      case 0:
        status = '激活';
        break;
      case 1:
        status = '未激活';
        break;
      case 2:
        status = '已删除';
        break;
      default:
        status = '激活';
    }
    const columns = [{
      title: 'title',
      dataIndex: 'title',
    }, {
      title: 'value',
      dataIndex: 'value',
    }];
    const data = [{
      key: '1',
      title: '软件版本名称',
      value: softwareInfo.version_name,
    }, {
      key: '2',
      title: '软件版本编号',
      value: softwareInfo.version_code,
    }, {
      key: '4',
      title: '研发单位',
      value: softwareInfo.development_department_name,
    }, {
      key: '5',
      title: '操作系统',
      value: softwareInfo.operation_system,
    }, {
      key: '6',
      title: '软件编码类型',
      value: softwareInfo.software_language,
    }, {
      key: '7',
      title: '软件存储介质信息',
      value: softwareInfo.software_storage,
    }, {
      key: '8',
      title: '软件存储介质信息',
      value: softwareInfo.software_storage,
    }, {
      key: '9',
      title: '软件功能说明',
      value: softwareInfo.software_info,
    }, {
      key: '10',
      title: '软件规模',
      value: softwareInfo.software_magnitude,
    }, {
      key: '11',
      title: '软件用途说明',
      value: softwareInfo.usage,
    }, {
      key: '12',
      title: '附加信息',
      value: softwareInfo.appendix,
    }, {
      key: '13',
      title: '软件状态',
      value: status,
    }, {
      key: '14',
      title: '使用部门',
      value: softwareInfo.useage_department.map((item, index) => {
        return (
          <div>
            <Link to="#" key={index}>
              {item.department_name}
            </Link>
          </div>
        );
      }),
    }];
    return (
      <div>
        <Table
          showHeader={false}
          pagination={false}
          bordered
          columns={columns}
          dataSource={data}
        />
        <div style={{ marginTop: 20 }}>
          <Collapse>
            {softwareInfo.module_version_list.map((item, index) => {
              return (
                <Panel
                  header={`${item.version_name} ${item.version_code}`}
                  key={index}
                >
                  <Table
                    showHeader={false}
                    pagination={false}
                    bordered
                    // TODO 修改 columns 和 data
                    columns={columns}
                    dataSource={data}
                  />
                </Panel>
              );
            })}
          </Collapse>
        </div>
      </div>
    );
  }
}


export default App;
