import React from 'react';
import { asyncGet } from './AsyncGetAndPost';
// import { getData } from './GetData';

const loadAndRefresh = url => (WrappedComponent) => {
  return class extends React.Component {
    // ？19行调用的 this.getData  隐式带有 cb参数？
    async _sendData(cb) {
      asyncGet(url).then((res) => {
        cb(res);
      });
    }
    render() {
      // console.log('lads', this.props);
      const props = {
        sendData: this._sendData,
        ...this.props,
      };
      return (
        <WrappedComponent {...props} />
      );
    }
  };
};
export default loadAndRefresh;
