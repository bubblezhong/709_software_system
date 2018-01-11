import React, { PropTypes } from 'react';
import { Table, Tabs, Modal, Tooltip } from 'antd';

const TabPane = Tabs.TabPane;

class TabCards extends React.Component {
  constructor() {
    super();
    this.state = {
      summaryList: [
        { a: 'aaa' },
      ],
      visible: false,
    };
  }

  componentWillMount() {

  }
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }
  add = () => {
    this.setState({ visible: true });
  }
  remove = (targetKey) => {
    console.log('remove', targetKey);
    const temp = this.state.summaryList;
    temp.splice(targetKey, 1);
    this.setState({ summaryList: temp });
  }
  handleOk = () => {
    const temp = this.state.summaryList;
    temp.push({ a: 'aaa' });
    this.setState({
      summaryList: temp,
      visible: false,
    });
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }
  render() {
    const { summaryList } = this.state;
    const tabCards = summaryList.map((item, i) => {
      return (
        <TabPane tab={`汇总 ${i + 1}`} key={i.toString()}>
          {`相关汇总 ${i + 1}`}
        </TabPane>
      );
    });
    return (
      <div>
        <Tabs
          tabBarExtraContent={
            <Tooltip placement="topRight" title="点击‘+’关联汇总信息">
              <span>添加</span>
            </Tooltip>
          }
          type="editable-card"
          onEdit={this.onEdit}
        >
          {tabCards}
        </Tabs>

        <Modal
          title="添加关联汇总信息" visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default TabCards;

TabCards.propTypes = {
  summaryList: PropTypes.array,
};
