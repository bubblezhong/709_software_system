import React, { Component, PropTypes } from 'react';
import { Row, Col, message } from 'antd';
import VersionForm from './components/VersionForm';

const config = require('./../../../../config/config');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      softwareInfo: {},
    };
    this.getSoftwareInfo = this.getSoftwareInfo.bind(this);
  }

  async componentWillMount() {
    try {
      const softwareInfo = await this.getSoftwareInfo();
      this.setState({
        softwareInfo,
      });
    } catch (e) {
      console.log('e: ', e);
      message.error(e);
    }
  }

  getSoftwareInfo() {
    const { id } = this.props.routeParams;
    const url = `${config.host}/SoftwareInfo/Version/Info/${id}`;
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then((res) => {
          console.log('res: ', res);
          if (res.code === 0) {
            return resolve(res.data.info);
          }
          return reject(new Error(res.message));
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  render() {
    console.log('this.props: ', this.props);
    return (
      <Row>
        <Col span={24}>
          <VersionForm
            info={this.state.softwareInfo}
          />
        </Col>
      </Row>
    );
  }
}


App.propTypes = {
  routeParams: PropTypes.object.isRequired,
};

export default App;
