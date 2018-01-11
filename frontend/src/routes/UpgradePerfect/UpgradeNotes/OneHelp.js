import React, { PropTypes } from 'react';
import moment from 'moment';
import Data from './Data/OneHelp';

const OneHelp = (props) => {
  const { result } = props;
  console.log('search result ', result);
  return (
    <div>
      <div className="help-one-msg">
        <h2>{result.title}</h2>
        <span>分类标签：{result.targe ? result.targe.join('、') : null}</span>
        <span>创建时间：{moment(result.create_data).format('YYYY年MM月DD日 HH时mm分ss秒')}</span>
      </div>
      <div>{result.description}</div>
    </div>
  );
};
OneHelp.propTypes = {
  result: PropTypes.object,
};

const OneHelpWithData = props => (<Data {...props}><OneHelp /></Data>);
export default OneHelpWithData;
