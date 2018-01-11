import React, { PropTypes } from 'react';
import { Button, Col, Row } from 'antd';
import { browserHistory } from 'react-router';

class NewScheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row>
        <Col span={24}>
          <Row type="flex" justify="space-between">
            <Button
              onClick={() => browserHistory.push('/main/SoftwareDeployment/Scheme/')}
            >放弃保存</Button>
            <Button type="primary" onClick={this.addNode}>添加方案条目</Button>
          </Row>
        </Col>
      </Row>
    );
  }
}

NewScheme.propTypes = {
  activeID: PropTypes.invalid,
};

export default NewScheme;
