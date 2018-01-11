/* eslint-disable */
import React from 'react';
import { Table, Button, Input, Checkbox } from 'antd';
import EditForm from './EditForm';

const CheckboxGroup = Checkbox.Group;
class Dictionary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      searchTarget: [],
      editTemp: {},
      showForm: false,
    };
  }
  outData = () => {
    console.log('outData');
  }
  addNewData = () => {
    console.log('addNewData');
  }
  downloadData = () => {
    console.log('downloadData');
  }
  checkboxOption = [
    { label: '序号', value: 'id' },
    { label: '所属模块', value: 'target_modules' },
    { label: '所属页面', value: 'target_page' },
    { label: '字段key', value: 'key' },
    { label: '字段value信息值', value: 'value' },
    { label: '字段label展示值', value: 'label' },
  ]
  handleCancel = () => {
    console.log('this:', this.props);
    this.setState({
      showForm: false,
      editTemp: {},
    });
  }
  render() {
    // console.log('Dictionary Props', this.props);
    const { data, dictionaryMap, dictionaryFilter } = this.props;
    const { searchValue, searchTarget } = this.state;
    console.log('System dictionaryFilter', dictionaryFilter);

    // 数据处理
    let dataFilter = data;
    if (searchValue) { // searchValue 搜索文字 不为空时进行检索
      dataFilter = data.filter((item) => {
        // 判断搜索范围内 是否存在匹配项
        // search_targe: [ string, string, ... ]
        return !searchTarget.every((target) => {
          // 匹配 是否数据中的 该项 与 目标文字匹配
          //   item[target] 保证 在后端数据错误的情况下正常检索
          //   dictionaryMap[target] 存在 数据字典内容的字段 优先进行字典匹配
          if (item[target] && dictionaryMap[target][item[target]]) { // 当目标不为 null 进行判断
            // dictionaryMap[target] 例子: dictionaryMap.target_modules
            // item[target]          例子: SystemSetting
            return dictionaryMap[target][item[target]].toString()
                     .indexOf(searchValue.toString()) === -1;
          } else if (item[target]) {
            return item[target].toString().indexOf(searchValue.toString()) === -1;
          }
          return true;
        });
      });
    }

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
        render: text => <span>{dictionaryMap.target_modules[text] ? dictionaryMap.target_modules[text] : `${text} （未定义的数据词汇）`}</span>,
      },
      {
        title: '所属页面',
        dataIndex: 'target_page',
        key: 'target_page',
        filters: dictionaryFilter.target_page,
        onFilter: (value, record) => record.target_page === value,
        render: text => <span>{dictionaryMap.target_page[text] ? dictionaryMap.target_page[text] : `${text}（未定义的数据词汇）`}</span>,
      },
      {
        title: '字段key',
        dataIndex: 'key',
        key: 'key',
      },
      {
        title: '字段value信息值',
        dataIndex: 'value',
        key: 'value',
      },
      {
        title: '字段label展示值',
        dataIndex: 'label',
        key: 'label',
      },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a onClick={() => { this.setState({
              showForm: true,
              formType: 'edit',
              editTemp: record }); }}>编辑</a>{' | '}
            <a onClick={() => { this.setState({
              showForm: true,
              formType: 'add',
              editTemp: { ...record, value: '', label: '' } }); }}>快速添加同类</a>
          </span>
        ),
      },
    ];
    return (
      <div>
        <div style={{ display: 'flex', flexDirecation: 'row', justifyContent: 'flex-end', marginBottom: 8 }}>
          <Input.Search placeholder="搜索" onSearch={(value) => { this.setState({ searchValue: value }); }} />
          <Button type="primary" style={{ marginLeft: 8 }} onClick={() => { this.outData(); }}>
            导出数据
          </Button>
          <Button type="primary" style={{ marginLeft: 8 }} onClick={() => { this.addNewData(); }}>
            导入新数据
          </Button>
          <Button type="primary" style={{ marginLeft: 8 }} onClick={() => { this.downloadData(); }}>
            下载模版
          </Button>

        </div>
        <div style={{ display: 'flex', flexDirecation: 'row', justifyContent: 'flex-start', marginBottom: 8 }}>
          <span>搜索范围: &nbsp;&nbsp;</span>
          <CheckboxGroup
            options={this.checkboxOption}
            onChange={checkedValues => this.setState({ searchTarget: checkedValues })}
          />
        </div>
        <Table rowKey="id" columns={columns} dataSource={dataFilter} bordered />
        <EditForm
          select={dictionaryFilter}
          type={this.state.formType}
          defaultValue={this.state.editTemp}
          visible={this.state.showForm}
          onCancel={this.handleCancel}
        />

      </div>
    );
  }
}

export default Dictionary;

Dictionary.propTypes = {
  data: React.PropTypes.array,
  dictionaryMap: React.PropTypes.object,
  dictionaryFilter: React.PropTypes.object,
};
