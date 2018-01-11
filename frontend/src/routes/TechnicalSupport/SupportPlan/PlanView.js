import React from 'react';
import { Button, Col, Row, Table } from 'antd';
import moment from 'moment';
import { browserHistory } from 'react-router';
import { json2table } from './utils/json2table';
import Data from './Data/PlanDetail';

const columnsHead = [
  {
    title: '属性',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: '值',
    dataIndex: 'value',
    key: 'value',
  },
];

class SchemeView extends React.Component {
  constructor() {
    super();
    this.state = {
      edit: false,
      editId: null,
    };
  }

  onCancel = () => {
    this.setState({ edit: false, editId: null });
  };

  render() {
    const {
      defaultValue,
    } = this.props;
    const columnsTemp = [{
      title: '单位类别',
      dataIndex: 'category',
      key: 'category',
      render: (value, row) => {
        const obj = {
          children: value,
          props: {
            rowSpan: row.categoryRowSpan,
          },
        };
        return obj;
      },
    }, {
      title: '单位',
      dataIndex: 'organization',
      key: 'organization',
      render: (value, row) => {
        const children = (
          <ul>
            {value.map((item, i) => (<li key={i}><a>{item.name}</a></li>))}
          </ul>
        );
        const obj = {
          children,
          props: {
            rowSpan: row.orgListRowSpan,
          },
        };
        return obj;
      },
    }, {
      title: '软件安装位置',
      dataIndex: 'position',
      key: 'position',
    }, {
      title: '软件名称',
      dataIndex: 'software',
      key: 'software',
      render: (value) => {
        return (<a>{value.name}</a>);
      },
    }, {
      title: '软件类型',
      dataIndex: 'type',
      key: 'type',
    }, {
      title: '模块信息',
      dataIndex: 'modules',
      key: 'modules',
      render: (value) => {
        const result = (
          <ul>
            {value.map((item, i) => (<li key={i}><a>{item.name}</a></li>))}
          </ul>
        );
        return result;
      },
    }];
    const tempViewList = json2table(defaultValue.items);
    const dataHead = [
      {
        key: '标题',
        value: defaultValue.title,
      },
      {
        key: '安装软件',
        value: defaultValue.software_name,
      },
      {
        key: '发布时间',
        value: defaultValue.create_date ?
          moment(defaultValue.create_date).format('YYYY年MM月DD日') :
          '未发布',
      }, {
        key: '任务完成时间段',
        value: defaultValue.dueTime &&
        defaultValue.dueTime.map(ele => moment(ele).format('YYYY年MM月DD日'),
        ).join('-'),
      },
      {
        key: '创建人',
        value: defaultValue.create_user_name,
      },
      {
        key: '创建机构',
        value: defaultValue.organization_name,
      }, {
        key: '相关调配请求',
        value: defaultValue.request_list &&
        defaultValue.request_list.map(ele => (ele.request_title)).join('，'),
      },
    ];

    return (
      <Row>
        <Col span="24">
          <Button
            style={{ marginRight: 20 }}
            onClick={() => browserHistory.push('/main/TechnicalSupport/SupportPlan')}
          >返回</Button>
          <Row style={{ marginTop: 16 }}>
            <Col span="24">
              <Table
                columns={columnsHead}
                dataSource={dataHead} bordered
                pagination={false} showHeader={false}
              />
            </Col>
          </Row>
          <Row>
            <Col span="24">
              <Table
                columns={columnsTemp}
                dataSource={tempViewList} bordered
                pagination={false}
                size="small"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

SchemeView.propTypes = {
  defaultValue: React.PropTypes.object,
};

export default props => (<Data {...props}><SchemeView {...props} /></Data>);
