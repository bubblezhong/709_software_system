import React, { Component, PropTypes } from 'react';
import { message } from 'antd';
import Info from './Info';

const config = require('./../../../../config/config');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collectReportList: [],
      currentCollect: {},
    };
  }

  componentWillMount() {
    this.getDetails();
  }

  /**
   * 获取某个汇总详情
   * @param {number} id 汇总记录 ID
   * @return {null} null
   */
  getCollectListById(id) {
    return new Promise((resolve, reject) => {
      const URL_GET_COLLECT_LIST = `${config.host}/sofatware_daily/collect/list/${id}`;
      fetch(URL_GET_COLLECT_LIST)
        .then(response => response.json())
        .then((result) => {
          if (result.code === 0) {
            // const list = map.
            resolve(result.data.list);
          }
          reject(new Error(result.message));
        })
        .catch((exception) => {
          console.console.error('URL_GET_COLLECT_LIST: ', URL_GET_COLLECT_LIST);
          console.error('exception: ', exception);
          // message.error('获取日常使用情况汇总列表失败', 10);
          reject(exception);
        });
    });
  }

  /**
   * 查看汇总信息详情
   * @param {object} record 当前行的汇总信息
   * @return {null} null
   */
  async getDetails() {
    const { id } = this.props.params;
    try {
      const collectReportList = await this.getCollectListById(id);
      const currentCollect = {
        key: 1,
        title: '汇总标题',
        description: '汇总描述汇总描述汇总描述汇总描述汇总描述汇总描述汇总描述汇总描述',
      };
      console.log('collectReportList: ', collectReportList);
      this.setState({
        currentCollect,
        collectReportList, // 汇总信息所包含的登记信息
      });
    } catch (exception) {
      console.error('exception: ', exception);
      message.error('获取日常使用情况汇总列表失败', 10);
    }
  }

  render() {
    return (
      <Info
        currentCollect={this.state.currentCollect}
        selectedRows={this.state.collectReportList}
      />
    );
  }
}


App.propTypes = {
  params: PropTypes.object.isRequired,
};


export default App;
