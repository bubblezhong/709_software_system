import React from 'react';
import { Button, Card, Col, Row } from 'antd';
import SchemeList from './SchemeList';
import DataSchemeList from './../Data/SchemeList';
import SchemeView from './SchemeView';
import DataSchemeView from './../Data/SchemeView';

class Scheme extends React.Component {
  constructor() {
    super();
    this.state = {
      active: null,
      leftSpace: 5,
      rightSpace: 19,
    };
  }

  goLeft = () => {
    const { leftSpace, rightSpace } = this.state;
    if (leftSpace > 5) {
      this.setState({
        leftSpace: leftSpace - 1,
        rightSpace: rightSpace + 1,
      });
    }
  };

  goRight = () => {
    const { leftSpace, rightSpace } = this.state;
    if (rightSpace > 5) {
      this.setState({
        leftSpace: leftSpace + 1,
        rightSpace: rightSpace - 1,
      });
    }
  };

  render() {
    // const { data } = this.props;
    const { leftSpace, rightSpace, active } = this.state;

    return (
      <Row gutter={8}>
        <Col span={leftSpace}>
          <Card style={{ height: '100%' }} bodyStyle={{ padding: 12 }}>
            <div style={{ display: 'flex', flexDirecation: 'row', justifyContent: 'space-between' }}>
              <h3 style={{ marginBottom: 10 }}> 方案列表: </h3>
              <Button.Group>
                {leftSpace > 5 && <Button icon="arrow-left" onClick={this.goLeft} />}
                {rightSpace > 5 && <Button icon="arrow-right" onClick={this.goRight} />}
              </Button.Group>
            </div>
            <DataSchemeList>
              <SchemeList
                simple={leftSpace < 10}
                onChange={(id) => {
                  this.setState({ active: parseInt(id, 10) });
                }}
              />
            </DataSchemeList>
          </Card>
        </Col>
        <Col span={rightSpace}>
          <DataSchemeView activeID={active}><SchemeView /></DataSchemeView>
        </Col>
      </Row>
    );
  }
}

Scheme.propTypes = {
  data: React.PropTypes.object,
};

export default Scheme;
