import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Timeline, Card, Table } from 'antd';
// import CategoryVersionTable from './CategoryVersionTable';
// import CategoryVersionTimetree from './CategoryVersionTimetree';
// import GetDetailInfo from './../../utils/GetDetailInfo';
import './Category.css';

class CategoryVersion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'CategoryVersionTimetree',
      value: '列表模式',
      dataSource: [],
    };
  }
  changeshow() {
    const versionTable = this.props.data.map((item) => {
      return {
        key: item.ID,
        number: item.ID,
        version: item.UNIT_VERSION,
        unitName: item.DEP_NAME,
        installPos: item.INSTALLPOS,
        time: item.CREATE_DATE,
        unitId: item.DEPARTMENT_ID,
      };
    });
    this.setState({ dataSource: versionTable });
    if (this.state.show === 'CategoryVersionTimetree') {
      console.log(this.state.show);
      this.setState({ show: 'CategoryVersionTable', value: '时间轴模式' });
    } else {
      console.log('1111');
      console.log(this.state.show);
      this.setState({ show: 'CategoryVersionTimetree', value: '列表模式' });
    }
  }
  render() {
    const { data } = this.props;
    console.log('dataTree', data);
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
      render: (text, row) => <Link to={`/main/SoftwareInfo/CategoryVersionDetail${row.unitId}`}>单元详情</Link>,
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
      const colorsArr = ['#8d263d', '#39a1ed', '#8d26d1', '#faaa07', '#39a1ed', '#faaa07', '#8d263d', '#39a1ed', '#8d26d1'];
      return (
        <Link to={`/main/SoftwareInfo/CategoryVersionDetail/${item.ID}`} style={{ width: '50%', marginLeft: '25%', display: 'inline-block', color: '#000' }} key={index}>
          <Timeline.Item color={colorsArr[index]}>
            <div style={{ position: 'absolute', left: -120, zIndex: 2, float: 'right' }}>
              <span>{item.CREATE_DATE}</span>
            </div>
            <Card bodyStyle={{ padding: 12 }}>
              <span>版本：{item.UNIT_VERSION}</span> <br />
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
          <Button
            onClick={() => {
              this.changeshow();
            }}
          >{this.state.value}</Button>
        </div>
        { this.state.show === 'CategoryVersionTimetree' &&
          <div>
            {Tree}
          </div> }
        { this.state.show === 'CategoryVersionTable' &&
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={{ pageSize: 10 }}
            bordered
          /> }
      </div>
    );
  }
}
CategoryVersion.propTypes = {
  // sendData: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};
// const WrapCategoryVersion = GetDetailInfo('/api/basic-category/software-unit/')(CategoryVersion);
export default CategoryVersion;
