import React from 'react';
import { Col, Row } from 'antd';
import Data from './Data/TaskData';
import EditForm from './Showing/EditForm';

const TaskEdit = (props) => {
  // // 布局样式
  // const formItemLayout = {
  //   labelCol: { span: 4 },
  //   wrapperCol: { span: 16 },
  // };
  return (
    <Row>
      <Col offset={4} span="16">
        <EditForm {...props} />
      </Col>
    </Row>
  );
};

const TaskEditData = props => (<Data {...props}><TaskEdit {...props} /></Data>);
export default TaskEditData;
