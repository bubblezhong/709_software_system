import React, { PropTypes } from 'react';
import { Modal, Row, Col, Table } from 'antd';
import Data from './../Data/ModalSoftware';
import ModulesTree from './../utils/ModulesTree';

class ModalSoftware extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      softwareTemp: {},
      indexList: [], // 结束编辑时 定位
      loading: true,
      selectedRowKeys: [], // table选中的列表
    };
  }
  // 获取初始值
  componentWillReceiveProps = (nextProps) => {
    // console.log('nextProps', nextProps);
    if (this.state.loading && nextProps.defaultValue.value) {
      this.setState({
        indexList: nextProps.defaultValue.indexList,
        softwareTemp: nextProps.defaultValue.value,
        selectedRowKeys: [nextProps.defaultValue.value.info.id],
        loading: false,
      });
    }
  }

  onSelectChange = (selectedRowKeys, rows) => {
    const rowTemp = rows[0];
    rowTemp.info = {
      id: rows[0].id,
      name: rows[0].name,
    };
    delete rowTemp.id;
    delete rowTemp.name;
    this.setState({ softwareTemp: rowTemp, selectedRowKeys });
  }
  render() {
    const {
      visible,
      title,
      onOk,
      onCancel,
    } = this.props;
    const {
      softwareTemp,
      indexList,
      selectedRowKeys,
    } = this.state;
    const columns = [
      {
        title: '软件名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '软件类型',
        dataIndex: 'type',
        key: 'type',
      },
    ];
    const rowSelection = {
      type: 'radio',
      onChange: this.onSelectChange,
      selectedRowKeys,
    };
    return (
      <Modal
        visible={visible}
        title={title}
        width={600}
        okText="确认"
        onCancel={() => {
          onCancel();
          this.setState({ softwareTemp: {}, loading: true });
        }}
        onOk={() => {
          onOk(softwareTemp, indexList);
          this.setState({ softwareTemp: {}, loading: true });
        }}
      >
        <Row>
          <Col span="10" >
            选中单位列表:
            <Data>
              <Table
                columns={columns}
                rowSelection={rowSelection}
                bordered
                size="small"
                rowKey="id"
              />
            </Data>
          </Col>
          <Col span="10" push="2">
            <p>软件名称: {softwareTemp.info && softwareTemp.info.name}</p>
            <p>软件类型: {softwareTemp.info && softwareTemp.type}</p>
            <p>单元组成: </p>
            <ModulesTree
              list={softwareTemp.modules}
            />
          </Col>
        </Row>
      </Modal>
    );
  }
}

ModalSoftware.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
};

export default ModalSoftware;
