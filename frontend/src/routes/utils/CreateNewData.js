import React from 'react';
import { asyncPost } from './AsyncGetAndPost';
// import { getData } from './GetData';

const createNewData = url => (WrappedComponent) => {
  return class extends React.Component {
    async _sendData(body, cb) {
      asyncPost(url, body).then((res) => {
        console.log(res);
        cb(res);
      });
    }
    render() {
      const props = {
        createData: this._sendData,
        ...this.props,
      };
      return (
        <WrappedComponent {...props} />
      );
    }
  };
};
export default createNewData;
