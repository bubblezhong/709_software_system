import React, { PropTypes } from 'react';
import { Row, Col } from 'antd';
import EditForm from './Showing/EditForm';
import Data from './Data/NewAndEdit';

const Edit = (props) => {
  const {
    // data,      // Data层 上传新汇总信息
    handleNew, // Data层 上传新汇总信息
  } = props;
  console.log('props', props);

  return (
    <Row>
      <Col span="24">
        <EditForm
          defaultValue={{}}
          handleSubmmit={handleNew}
        />
      </Col>
    </Row>
  );
};

Edit.propTypes = {
  // data: PropTypes.object, // edit 需要
  handleNew: PropTypes.func,
};


const NewWithData = props => (<Data><Edit {...props} /></Data>);
export default NewWithData;
