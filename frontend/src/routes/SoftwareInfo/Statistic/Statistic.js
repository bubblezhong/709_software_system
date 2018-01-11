import React from 'react';
import { Card, Col, Icon, Row, Tag } from 'antd';
import SoftwareFault from './SoftwareFault';
import SoftwareOutput from './SoftwareOutput';
import SoftwareInput from './SoftwareInput';
import SoftwareRetire from './SoftwareRetire';
import S1 from './S1';

const App = () => {
  return (
    <div>
      <Row>
        <Card title="本月统计" style={{ paddingBottom: 20 }}>
          <Col span={6}>
            <div style={{ display: 'flex' }}>
              <div>
                <Icon type="database" style={{ fontSize: '4em' }} />
              </div>
              <div>
                <p>在库软件版本</p>
                <Tag color="green">124345</Tag>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div style={{ display: 'flex' }}>
              <div>
                <Icon type="like-o" style={{ fontSize: '4em' }} />
              </div>
              <div>
                <p>已使用软件版本</p>
                <Tag color="green">54322</Tag>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div style={{ display: 'flex' }}>
              <div>
                <Icon type="export" style={{ fontSize: '4em' }} />
              </div>
              <div>
                <p>出库软件</p>
                <Tag color="green">68123</Tag>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div style={{ display: 'flex' }}>
              <div>
                <Icon type="code-o" style={{ fontSize: '4em' }} />
              </div>
              <div>
                <p>在研软件版本</p>
                <Tag color="green">124345</Tag>
              </div>
            </div>
          </Col>
        </Card>
      </Row>
      <br />
      <br />
      <Row>
        <Card style={{ paddingBottom: 20 }}>
          <Col span={5} style={{ marginRight: '30' }}>
            <div style={{ display: 'flex' }}>
              <div>
                <Icon type="user" style={{ fontSize: '4em' }} />
              </div>
              <div>
                <p>今天新增故障</p>
                <Tag color="red">1242</Tag>
              </div>
            </div>
          </Col>
          <Col span={3}>
            <div style={{ display: 'flex' }}>
              <div>
                <p>已处理故障</p>
                <Tag color="red">123</Tag>
              </div>
            </div>
          </Col>
          <Col span={3}>
            <div style={{ display: 'flex' }}>
              <div>
                <p>待确认故障</p>
                <Tag color="red">421</Tag>
              </div>
            </div>
          </Col>
          <Col span={3}>
            <div style={{ display: 'flex' }}>
              <div>
                <p>故障回归通过</p>
                <Tag color="red">123</Tag>
              </div>
            </div>
          </Col>
          <Col span={3}>
            <div style={{ display: 'flex' }}>
              <div>
                <p>需求收集</p>
                <Tag color="red">1200</Tag>
              </div>
            </div>
          </Col>
          <Col span={3}>
            <div style={{ display: 'flex' }}>
              <div>
                <p>汇总需求</p>
                <Tag color="red">1200</Tag>
              </div>
            </div>
          </Col>
        </Card>
      </Row>
      <Row>
        <Col span={24}>
          <Row style={{ margin: '10px 0' }}>
            <Col span={12}>
              <Card
                title="入库统计"
                style={{ margin: '10px' }}
              >
                <S1 />
              </Card>
            </Col>
            <Col span={12}>
              <Card
                title="出库统计"
                style={{ margin: '10px' }}
              >
                <SoftwareOutput />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row style={{ margin: '10px 0' }}>
            <Col span={12}>
              <Card
                title="入库统计"
                style={{ margin: '10px' }}
              >
                <SoftwareInput />
              </Card>
            </Col>
            <Col span={12}>
              <Card
                title="出库统计"
                style={{ margin: '10px' }}
              >
                <SoftwareOutput />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row style={{ margin: '10px 0' }}>
            <Col span={12}>
              <Card
                title="故障统计"
                style={{ margin: '10px' }}
              >
                <SoftwareFault />
              </Card>
            </Col>
            <Col span={12}>
              <Card
                title="软件退役统计"
                style={{ margin: '10px' }}
              >
                <SoftwareRetire />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};


export default App;
