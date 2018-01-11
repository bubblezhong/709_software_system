import React, { PropTypes } from 'react';
import { Button, Timeline, Card, Table } from 'antd';
import { Link } from 'react-router';
// import SoftwareVersionTable from './SoftwareVersionTable';
// import SoftwareVersionTimetree from './SoftwareVersionTimetree';
import './SoftwareDetail.css';

class SoftwareVersion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'SoftwareVersionTimetree',
      value: '列表模式',
      treeContent: [
        { time: '2015-03-01', color: '#8d263d', version: 'V1.2.3.0.1', developUnit: '中船-709所', MD5: '25588777fadv544xc5' },
        { time: '2015-09-06', color: '#39a1ed', version: 'V1.2.3.0.1', developUnit: '中船-709所', MD5: '25588777fadv544xc5' },
        { time: '2016-03-07', color: '#8d26d1', version: 'V1.2.3.0.1', developUnit: '中船-709所', MD5: '25588777fadv544xc5' },
        { time: '2017-03-30', color: '#faaa07', version: 'V1.2.3.0.1', developUnit: '中船-709所', MD5: '25588777fadv544xc5' },
        { time: '2017-06-11', color: '#39a1ed', version: 'V1.2.3.0.1', developUnit: '中船-709所', MD5: '25588777fadv544xc5' },
        { time: '2017-12-23', color: '#faaa07', version: 'V1.2.3.0.1', developUnit: '中船-709所', MD5: '25588777fadv544xc5' },
      ],
      data: [],
    };
  }
  changeshow() {
    const versionTable = this.props.data.map((item) => {
      return {
        key: item.ID,
        number: item.ID,
        version: item.SW_VERSION,
        unitName: item.DEP_NAME,
        installPos: item.INSTALLPOS,
        time: item.CREATE_DATE,
        unitId: item.DEPARTMENT_ID,
      };
    });
    this.setState({ data: versionTable });
    if (this.state.show === 'SoftwareVersionTimetree') {
      this.setState({ show: 'SoftwareVersionTable', value: '时间轴模式' });
    } else {
      this.setState({ show: 'SoftwareVersionTimetree', value: '列表模式' });
    }
  }
  render() {
    const { data } = this.props;
    const columns = [{
      title: '序号',
      dataIndex: 'number',
    }, {
      title: '当前版本',
      dataIndex: 'version',
    }, {
      title: '研制单位',
      dataIndex: 'unitName',
    }, {
      title: '安装位置',
      dataIndex: 'installPos',
    }, {
      title: '时间',
      dataIndex: 'time',
    }, {
      title: '操作',
      dataIndex: 'operate',
      render: (text, row) => <Link to={`/main/SoftwareInfo/SoftwareInfoDetail/${row.ID}`}>详情</Link>,
    }];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',    // Column configuration not to be checked
      }),
    };
    const Tree = data.map((item, index) => {
      console.log('item', item);
      return (
        <Link to={`/main/SoftwareInfo/SoftwareVersionDetail/${item.ID}`} style={{ width: '50%', marginLeft: '25%', display: 'block', color: '#000' }} key={index}>
          <Timeline.Item color={item.color}>
            <div style={{ position: 'absolute', left: -120, zIndex: 2, float: 'right' }}>
              <span>{item.CREATE_DATE}</span>
            </div>
            <Card bodyStyle={{ padding: 12 }}>
              <span>版本：{item.SW_VERSION}</span> <br />
              <span>研制单位：{item.DEP_NAME}</span><br />
              <span>MD5：{item.MD5}</span><br />
            </Card>
          </Timeline.Item>
        </Link>
      );
    });
    return (
      <div>
        <div className="SoftwareVersion_changeformat">
          <Link to={`/main/SoftwareInfo/SoftwareAddVersion/${this.props.params.id}`}>
            <Button>添加版本</Button>
          </Link>
          <Button onClick={() => this.changeshow()} >{this.state.value}</Button>
        </div>
        { this.state.show === 'SoftwareVersionTimetree' &&
          <div>
            {Tree}
          </div>
        }
        { this.state.show === 'SoftwareVersionTable' &&
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={this.state.data}
            pagination={{ pageSize: 10 }}
            bordered
          />
        }
      </div>
    );
  }
}
SoftwareVersion.propTypes = {
  data: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired,
};
export default SoftwareVersion;
