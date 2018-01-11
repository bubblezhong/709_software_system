import React, { PropTypes } from 'react';
import { Col, Modal, Row, Table } from 'antd';
import OrganizationTree from './../utils/OrganizationTree';
import DataModalOrganizations from './../Data/ModalOrganizations';

class ModalOrganizations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orgSelectList: [],
      indexList: [], // 结束编辑时 定位
      loading: true,
    };
  }

  // 获取初始值
  componentWillReceiveProps = (nextProps) => {
    // console.log('nextProps', nextProps);
    if (this.state.loading && nextProps.defaultValue.value) {
      this.setState({
        indexList: nextProps.defaultValue.indexList,
        orgSelectList: nextProps.defaultValue.value,
        loading: false,
      });
    }
  };

  treeChange = (result) => {
    this.setState({ orgSelectList: result });
  };
  deleteItem = (id) => {
    const result = this.state.orgSelectList
      .filter(item => (item.id !== id));
    this.setState({ orgSelectList: result });
  };

  render() {
    const {
      visible,
      title,
      onOk,
      onCancel,
    } = this.props;
    const {
      orgSelectList,
      indexList,
    } = this.state;
    const columns = [
      {
        title: '单位名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (value, row) => {
          return (
            <button
              className="tableCellAction"
              onClick={() => {
                this.deleteItem(row.id);
              }}
            >
              删除
            </button>
          );
        },
      },
    ];
    return (
      <Modal
        visible={visible}
        title={title}
        width={600}
        okText="确认"
        onCancel={() => {
          onCancel();
          this.setState({ orgSelectList: [], loading: true });
        }}
        onOk={() => {
          onOk(orgSelectList, indexList);
          this.setState({ orgSelectList: [], loading: true });
        }}
      >
        <Row>
          <Col span="10">
            <DataModalOrganizations>
              <OrganizationTree
                orgSelectList={orgSelectList}
                onChange={this.treeChange}
              />
            </DataModalOrganizations>
          </Col>
          <Col span="10" push="2">
            选中单位列表:
            <Table
              columns={columns}
              dataSource={orgSelectList}
              bordered
              size="small"
              rowKey="id"
            />
          </Col>
        </Row>
      </Modal>
    );
  }
}

ModalOrganizations.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
};

export default ModalOrganizations;
