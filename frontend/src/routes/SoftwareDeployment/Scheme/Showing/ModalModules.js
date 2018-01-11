import React, { PropTypes } from 'react';
import { Col, Modal, Row } from 'antd';
import ModulesTreeCheckBox from './../utils/ModulesTreeCheckBox';

class ModalModules extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modulesTemp: [],
      // indexList: [], // 结束编辑时 定位
      loading: true,
      selectedRowKeys: [], // table选中的列表
    };
  }

  render() {
    const {
      visible,      // 控制显示
      title,        // 标题
      onOk,         // 确认
      onCancel,     // 取消
      moduleTree,   // 模块列表
      moduleList,   // 所有模块列表
      defaultValue, // 初始信息
    } = this.props;
    const {
      modulesTemp,
      // indexList,
    } = this.state;
    return (
      <Modal
        visible={visible}
        title={title}
        width={600}
        okText="确认"
        onCancel={() => {
          onCancel();
          this.setState({ modulesTemp: [], loading: true });
        }}
        onOk={() => {
          onOk(modulesTemp, defaultValue.indexList);
          this.setState({ modulesTemp: [], loading: true });
        }}
      >
        <Row>
          <Col span="10">
            模块树：
            <ModulesTreeCheckBox
              moduleTree={moduleTree}
              moduleList={moduleList}
              onChange={(keyS) => {
                this.setState({ modulesTemp: keyS });
              }}
            />
          </Col>
          <Col span="10" push="2">
            模块信息
          </Col>
        </Row>
      </Modal>
    );
  }
}

ModalModules.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  moduleTree: PropTypes.array,
  moduleList: PropTypes.array,
  defaultValue: PropTypes.string,
};

export default ModalModules;
