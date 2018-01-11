import React from 'react';
import { Card, Col, Row, Table } from 'antd';
// import EditForm from './EditForm';
import RoleList from './RoleList';

class Dictionary extends React.Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
      filterTarget: {},
    };
  }

  checkboxOption = [
    { label: '序号', value: 'id' },
    { label: '所属模块', value: 'target_modules' },
    { label: '所属页面', value: 'target_page' },
    { label: '字段key', value: 'key' },
    { label: '字段value信息值', value: 'value' },
    { label: '字段label展示值', value: 'label' },
  ];
  handleCancel = () => {
    console.log('this:', this.props);
    this.setState({
      showForm: false,
      editTemp: {},
    });
  };
  activeAuthority = (id, active) => {
    console.log('active authority:', id, active);
  };

  render() {
    // console.log('Dictionary Props', this.props);
    const { data, role, dictionaryMap, dictionaryFilter } = this.props;
    const { filterTarget } = this.state;
    // 数据字典处理
    console.log('Authority dictionaryMap', dictionaryMap);
    // // 生成 字段字典
    // const dictionaryMap = {
    //   target_modules: {},
    //   target_page: {},
    // };
    // // 生成 过滤项
    // const dictionaryFilter = {
    //   target_modules: [],
    //   target_page: [],
    // };
    // dictionary.forEach((item) => {
    //   dictionaryMap[item.key][item.value] = item.label;
    //   dictionaryFilter[item.key].push({ text: item.label, value: item.value });
    // });

    const dataFilter = data.filter((item) => {
      if (filterTarget.id) {
        return filterTarget.id.toString() === item.role_id.toString();
      }
      return false;
    });

    /*
     * 表头定义
     */
    const columns = [
      {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '所属模块',
        dataIndex: 'target_modules',
        key: 'target_modules',
        filters: dictionaryFilter.target_modules,
        onFilter: (value, record) => record.target_modules === value,
        render: text =>
          <span>{dictionaryMap.target_modules[text] ? dictionaryMap.target_modules[text] : `${text} （未定义的数据词汇）`}</span>,
      },
      {
        title: '所属页面',
        dataIndex: 'target_page',
        key: 'target_page',
        filters: dictionaryFilter.target_page,
        onFilter: (value, record) => record.target_page === value,
        render: text =>
          <span>{dictionaryMap.target_page[text] ? dictionaryMap.target_page[text] : `${text}（未定义的数据词汇）`}</span>,
      },
      {
        title: '权限名称',
        dataIndex: 'key',
        key: 'key',
        render: text =>
          <span>{dictionaryMap.authority_name[text] ? dictionaryMap.authority_name[text] : `${text}（未定义的数据词汇）`}</span>,
      },
      {
        title: '权限类型',
        dataIndex: 'type',
        key: 'type',
        filters: dictionaryFilter.authority_type,
        onFilter: (value, record) => record.type.toString() === value.toString(),
        render: text =>
          <span>{dictionaryMap.authority_type[text] ? dictionaryMap.authority_type[text] : `${text}（未定义的数据词汇）`}</span>,
      },
      {
        title: '状态',
        dataIndex: 'value',
        key: 'value',
        render: (text, record) => (
          <span>{text === 0 ?
            // eslint-disable-next-line
            <a onClick={() => this.activeAuthority(record.id, text)}>激活</a> :
            // eslint-disable-next-line
            <a onClick={() => this.activeAuthority(record.id, text)}>未激活</a>}
          </span>
        ),
      },
    ];
    return (
      <Row gutter={8}>
        <Col span={5}>
          <Card style={{ height: '100%' }}>
            <RoleList
              data={role}
              onChange={(result) => {
                this.setState({ filterTarget: result });
              }}
            />
          </Card>
        </Col>
        <Col span={19}>
          <Table rowKey="id" columns={columns} dataSource={dataFilter} bordered />
        </Col>
      </Row>
    );
  }
}


Dictionary.propTypes = {
  data: React.PropTypes.array,
  role: React.PropTypes.array,
  dictionaryMap: React.PropTypes.object,
  dictionaryFilter: React.PropTypes.array,
};
export default Dictionary;
