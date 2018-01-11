import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { message, Button, Row, Col, Input } from 'antd';
import CategoryTree from './../../Common/CategoryTree';
import List from './List';
import { getSoftwareVersionList } from './../../../Models/Software/Software';


const Search = Input.Search;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      softwareList: [],
      isSoftwareListLoading: true,
    };
    this.getSoftwareList = this.getSoftwareList.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
  }


  componentWillMount() {
    this.getSoftwareList();
  }

  /**
   * 根据谱系筛选
   * @param {string} value value
   * @param {object} label label
   //  * @param {object} extra extra
   * @return {null} null
   */
  onCategoryChange(value, label) {
    // console.log('value, label, extra: ', value, label, extra);
    this.setState({ filteredCategoryName: label });
  }


  async getSoftwareList() {
    try {
      const { res } = await getSoftwareVersionList();
      console.log('res: ', res);
      if (res.code === 1000) {
        this.setState({
          softwareList: res.data,
          isSoftwareListLoading: false,
        });
      } else {
        message.error('查询软件列表失败', 5);
      }
    } catch (e) {
      console.log('e: ', e);
      message.error('查询软件列表失败', 5);
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <Row style={{ marginBottom: 10 }}>
              <Col span={3}>
                <Button
                  type="primary"
                  style={{ marginBottom: 8 }}
                  onClick={() => browserHistory.push('/main/SoftwareInfo/Version/New')}
                >
                  新建软件版本
                </Button>
              </Col>
              <Col span={6}>
                <Search
                  placeholder="搜索软件版本、编号、研发单位名称"
                  onSearch={value => console.log(value)}
                  style={{ width: 200 }}
                />
              </Col>
              <Col span={6}>
                <CategoryTree
                  onCategoryChange={this.onCategoryChange}
                />
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <List
              softwareList={this.state.softwareList}
              isSoftwareListLoading={this.state.isSoftwareListLoading}
            />
          </Col>
        </Row>
      </div>
    );
  }
}


export default App;
