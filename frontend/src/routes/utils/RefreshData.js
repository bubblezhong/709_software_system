import React from 'react';
import { asyncPut } from './AsyncGetAndPost';
// import { getData } from './GetData';

const refreshData = url => (WrappedComponent) => {
  return class extends React.Component {
    _sendData = async (body, cb) => {
      const newUrl = `${url}${this.props.params.id}`;
      console.log('newUrl', newUrl);
      asyncPut(newUrl, body).then((res) => {
        console.log(res);
        cb(res);
      });
    }
    render() {
      const props = {
        submitData: this._sendData,
        ...this.props,
      };
      return (
        <WrappedComponent {...props} />
      );
    }
  };
};
export default refreshData;
