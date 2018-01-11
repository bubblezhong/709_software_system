import React, { PropTypes } from 'react';
import { Card, Timeline } from 'antd';
import moment from 'moment';

class ViewPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onCancel = () => {
    console.log('onCancel');
    this.setState({ showEditFrom: false });
  };
  editForm = () => {
    console.log('edit');
    this.setState({ showEditFrom: true });
  };

  render() {
    const { data, options } = this.props;
    // console.log('showData', data, options);
    const optionsItem = options
      .sort((a, b) => (new Date(a.node_date) - new Date(b.node_date)))
      .map((item, index) => {
        return (
          <Timeline.Item key={index} color={item.color} style={{ marginLeft: 120, position: 'relative' }}>
            <div style={{ position: 'absolute', left: -120, zIndex: 2, float: 'right' }}>
              <h3 style={{ textAlign: 'end' }}>{moment(item.node_date).format('YYYY年MM月DD日')}</h3>
            </div>
            <Card bodyStyle={{ padding: 12 }}>
              <h3 style={{ marginBottom: 8 }}> {item.title} </h3>
              <span> {item.description} </span> <br />
              <span> 相关机构：{item.organization.map((org, i) => <a key={i}> {org.name} </a>)}</span>
            </Card>
          </Timeline.Item>
        );
      });
    return (
      <div style={{ overflow: 'auto', margin: 30 }}>
        <h2 style={{ textAlign: 'center' }}> {data.title ? <span>{data.title} </span> : '请选择计划 查看详情'} </h2>
        <h4 style={{ textAlign: 'center' }}>
          {data.title ? `发布时间: ${moment(data.create_date).format('YYYY年MM月DD日')}` : ''} &nbsp;
          {data.title ? `创建人: ${data.create_user}` : ''} &nbsp;
          {data.title ? `创建机构: ${data.organization}` : ''}
        </h4>
        <br />
        <div> {data.description} </div>
        <br />
        {data.title &&
        <Timeline style={{ zIndex: 0 }}>
          {optionsItem}
        </Timeline>
        }
      </div>
    );
  }
}


ViewPlan.propTypes = {
  data: PropTypes.object,
  options: PropTypes.array,
};
export default ViewPlan;
